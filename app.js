// app.js - Application Logic for StarReader (ESL Daily Reading)

// ==========================================
// STATE & STORAGE
// ==========================================
let currentStoryId = 1;
let speechUtterance = null;
let isSpeaking = false;
let currentSpeed = 0.8; // Default 0.8x for ESL learners
let currentModalWordData = null;
let currentFilterWeek = 0;
let synthVoices = [];
// Remembers which sentence we are on / last played, so the repeat & skip
// buttons still work after playback has stopped.
let currentSentenceRef = { p: 0, s: 0 };

// LocalStorage Keys
const STORAGE_PREFIX = "starreader_";
const KEY_CHILD_NAME = STORAGE_PREFIX + "child_name";
const KEY_CURRENT_DAY = STORAGE_PREFIX + "current_day";
const KEY_COMPLETED = STORAGE_PREFIX + "completed_stories";
const KEY_STREAK = STORAGE_PREFIX + "streak";
const KEY_LAST_READ_DATE = STORAGE_PREFIX + "last_date";
const KEY_STARS = STORAGE_PREFIX + "stars";
const KEY_WORD_BANK = STORAGE_PREFIX + "word_bank";
const KEY_CUSTOM_STORIES = STORAGE_PREFIX + "custom_stories";
const KEY_QUIZ_RESULTS = STORAGE_PREFIX + "quiz_results";

// App State Cache
let state = {
  childName: localStorage.getItem(KEY_CHILD_NAME) || "Superstar Reader",
  currentDay: parseInt(localStorage.getItem(KEY_CURRENT_DAY) || "1", 10),
  completedStories: JSON.parse(localStorage.getItem(KEY_COMPLETED) || "[]"),
  streak: parseInt(localStorage.getItem(KEY_STREAK) || "1", 10),
  lastReadDate: localStorage.getItem(KEY_LAST_READ_DATE) || "",
  stars: parseInt(localStorage.getItem(KEY_STARS) || "0", 10),
  wordBank: JSON.parse(localStorage.getItem(KEY_WORD_BANK) || "[]"),
  customStories: JSON.parse(localStorage.getItem(KEY_CUSTOM_STORIES) || "[]"),
  quizResults: JSON.parse(localStorage.getItem(KEY_QUIZ_RESULTS) || "{}")
};

// ==========================================
// INITIALIZATION & IOS AUDIO UNLOCK
// ==========================================
let audioEngineUnlocked = false;

function unlockAudioEngine() {
  if (audioEngineUnlocked) return;
  audioEngineUnlocked = true;

  // 1. Resume Web Audio API AudioContext for iOS
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  } catch (err) {}

  // 2. Prime iOS SpeechSynthesis engine with short silent utterance
  if (window.speechSynthesis) {
    try {
      const primer = new SpeechSynthesisUtterance(" ");
      primer.lang = "en-US";
      primer.volume = 0.01;
      primer.rate = 2.0;
      window.speechSynthesis.speak(primer);
    } catch (err) {}
  }
}

// Attach unlock to first touch or click anywhere
window.addEventListener("touchstart", unlockAudioEngine, { passive: true });
window.addEventListener("touchend", unlockAudioEngine, { passive: true });
window.addEventListener("click", unlockAudioEngine, { passive: true });

window.addEventListener("DOMContentLoaded", () => {
  initVoices();
  checkDailyStreak();
  updateHeaderStats();
  
  // Set current story from saved day
  currentStoryId = state.currentDay || 1;
  loadStory(currentStoryId);

  // Load child's name in input
  const nameInput = document.getElementById("inputChildName");
  if (nameInput) {
    nameInput.value = state.childName === "Superstar Reader" ? "" : state.childName;
  }
  updateCertificateDisplay();

  // Load voices dynamically if needed
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = initVoices;
    // Safari sometimes populates the list late, so retry a couple of times
    setTimeout(initVoices, 400);
    setTimeout(initVoices, 1500);
  }
});

function initVoices() {
  if (!window.speechSynthesis) return;
  synthVoices = window.speechSynthesis.getVoices();
  populateVoiceSelect();
}

// Downloaded "Enhanced / Premium / Neural" voices sound far more human than the
// default compact one, so rank them well above everything else.
function scoreVoice(v) {
  const n = (v.name || "").toLowerCase();
  const lang = (v.lang || "").toLowerCase().replace("_", "-");
  let s = 0;
  if (/enhanced|premium|neural|natural/.test(n)) s += 60;
  if (/siri/.test(n)) s += 55;
  if (/google/.test(n)) s += 30;
  if (/samantha|ava|allison|susan|serena|karen|daniel|arthur|martha|moira|tessa/.test(n)) s += 18;
  if (/zira|david|mark|hazel|george/.test(n)) s += 6;
  if (lang === "en-us") s += 14;
  else if (lang === "en-gb") s += 9;
  else if (lang === "en-au") s += 7;
  else if (lang.indexOf("en") === 0) s += 4;
  else return -9999;
  if (v.localService) s += 3;
  return s;
}

const VOICE_KEY = "starreader_preferred_voice";

function englishVoices() {
  if (!synthVoices.length && window.speechSynthesis) {
    synthVoices = window.speechSynthesis.getVoices();
  }
  return (synthVoices || [])
    .filter(v => /^en/i.test(v.lang || ""))
    .sort((a, b) => scoreVoice(b) - scoreVoice(a));
}

function getBestVoice() {
  if (!window.speechSynthesis) return null;
  const list = englishVoices();
  if (!list.length) return null;
  let saved = null;
  try { saved = localStorage.getItem(VOICE_KEY); } catch (err) {}
  if (saved) {
    const hit = list.find(v => v.name === saved);
    if (hit) return hit;
  }
  return list[0];
}

function populateVoiceSelect() {
  const sel = document.getElementById("voiceSelect");
  if (!sel) return;
  const list = englishVoices();
  const active = getBestVoice();
  sel.innerHTML = "";
  if (!list.length) {
    const opt = document.createElement("option");
    opt.textContent = "No English voice found";
    sel.appendChild(opt);
    return;
  }
  list.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.name;
    const star = /enhanced|premium|neural|natural/i.test(v.name) ? " ⭐" : (v.localService ? "" : " ☁︎");
    opt.textContent = v.name + " · " + v.lang + star;
    if (active && v.name === active.name) opt.selected = true;
    sel.appendChild(opt);
  });
}

function setPreferredVoice(name) {
  try { localStorage.setItem(VOICE_KEY, name); } catch (err) {}
  if (isSpeaking) stopSpeech();
  testVoiceSample();
}

function testVoiceSample() {
  if (!window.speechSynthesis) return;
  unlockAudioEngine();
  try { window.speechSynthesis.cancel(); } catch (err) {}
  const utt = new SpeechSynthesisUtterance(
    "Hello! This is how I will read your story. \"Are you ready?\" Let's begin!"
  );
  utt.lang = "en-US";
  utt.rate = currentSpeed;
  utt.pitch = 1.05;
  const v = getBestVoice();
  if (v) { utt.voice = v; if (v.lang) utt.lang = v.lang; }
  window.speechSynthesis.speak(utt);
}

// Give each sentence a little shape instead of reading everything on one note.
function prosodyFor(text) {
  const t = (text || "").trim();
  if (/\?["'”’]?$/.test(t)) return { pitch: 1.16, rateMul: 0.98 };
  if (/!["'”’]?$/.test(t)) return { pitch: 1.12, rateMul: 1.03 };
  if (/^["“'‘]/.test(t)) return { pitch: 1.10, rateMul: 0.99 };
  if (/^[—–]/.test(t)) return { pitch: 1.06, rateMul: 1.0 };
  return { pitch: 1.02, rateMul: 1.0 };
}

function pauseAfterSentence(text) {
  const t = (text || "").trim();
  if (/[!?]["'”’]?$/.test(t)) return 420;
  if (/\.$/.test(t)) return 340;
  if (/[;:]["'”’]?$/.test(t)) return 260;
  if (/,$/.test(t)) return 180;
  return 220;
}

// Split the story into speakable lines. Very long sentences are broken at
// commas so the engine takes a breath instead of running out of air.
function buildSpeechQueue(paragraphs) {
  const queue = [];
  (paragraphs || []).forEach((pText, pIdx) => {
    const sentences = splitSentences(pText);
    sentences.forEach((s, sIdx) => {
      if (!s) return;
      let chunks = [s];
      if (s.length > 150 && s.indexOf(", ") > 0) {
        chunks = [];
        let rest = s;
        while (rest.length > 150) {
          const cut = rest.lastIndexOf(", ", 140);
          if (cut < 40) break;
          chunks.push(rest.slice(0, cut + 1).trim());
          rest = rest.slice(cut + 2).trim();
        }
        if (rest) chunks.push(rest);
      }
      chunks.forEach((c, ci) => {
        const isLastChunk = ci === chunks.length - 1;
        queue.push({
          text: c,
          pIndex: pIdx,
          sIndex: sIdx,
          pause: isLastChunk ? pauseAfterSentence(c) : 160,
          lastOfParagraph: isLastChunk && sIdx === sentences.length - 1,
        });
      });
    });
  });
  return queue;
}

// ==========================================
// STREAK & STATS LOGIC
// ==========================================
function checkDailyStreak() {
  const todayStr = new Date().toISOString().split("T")[0];
  if (!state.lastReadDate) {
    state.lastReadDate = todayStr;
    state.streak = 1;
  } else if (state.lastReadDate !== todayStr) {
    const lastDate = new Date(state.lastReadDate);
    const today = new Date(todayStr);
    const diffDays = Math.round((today - lastDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Consecutive day!
      state.streak += 1;
    } else if (diffDays > 1) {
      // Missed a day
      state.streak = 1;
    }
    state.lastReadDate = todayStr;
  }
  saveState();
}

function saveState() {
  localStorage.setItem(KEY_CHILD_NAME, state.childName);
  localStorage.setItem(KEY_CURRENT_DAY, state.currentDay.toString());
  localStorage.setItem(KEY_COMPLETED, JSON.stringify(state.completedStories));
  localStorage.setItem(KEY_STREAK, state.streak.toString());
  localStorage.setItem(KEY_LAST_READ_DATE, state.lastReadDate);
  localStorage.setItem(KEY_STARS, state.stars.toString());
  localStorage.setItem(KEY_WORD_BANK, JSON.stringify(state.wordBank));
  localStorage.setItem(KEY_CUSTOM_STORIES, JSON.stringify(state.customStories));
  localStorage.setItem(KEY_QUIZ_RESULTS, JSON.stringify(state.quizResults));
}

function updateHeaderStats() {
  document.getElementById("headerStreakCount").textContent = state.streak;
  document.getElementById("headerStarCount").textContent = state.stars;
  document.getElementById("navWordCount").textContent = state.wordBank.length;

  // Stats tab
  const streakVal = document.getElementById("statsStreakVal");
  if (streakVal) streakVal.textContent = state.streak;

  const readVal = document.getElementById("statsStoriesReadVal");
  if (readVal) readVal.textContent = `${state.completedStories.length} / ${getAllStories().length}`;

  const starsVal = document.getElementById("statsTotalStarsVal");
  if (starsVal) starsVal.textContent = state.stars;

  const wordsVal = document.getElementById("statsWordsLearnedVal");
  if (wordsVal) wordsVal.textContent = state.wordBank.length;
}

function getAllStories() {
  return [...STORIES_DATA, ...state.customStories];
}

function getStoryById(id) {
  return getAllStories().find(s => s.id === id) || STORIES_DATA[0];
}

// ==========================================
// NAVIGATION & TABS
// ==========================================
function navigateToTab(tabId) {
  stopSpeech();

  // Update nav buttons
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  // Update panels
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `tab-${tabId}`);
  });

  // Tab specific refreshes
  if (tabId === "library") {
    renderStoryLibrary();
  } else if (tabId === "words") {
    renderWordBank();
  } else if (tabId === "achievements") {
    updateCertificateDisplay();
    updateHeaderStats();
  }
}

// ==========================================
// STORY LOADER & RENDERER
// ==========================================
function loadStory(id) {
  stopSpeech();
  const story = getStoryById(id);
  currentStoryId = story.id;
  state.currentDay = story.day || story.id;
  saveState();

  // Header Elements
  document.getElementById("readerDayTag").textContent = `Day ${story.day || story.id}`;
  document.getElementById("readerLevelTag").textContent = story.levelBadge || story.level || "Explorer";
  document.getElementById("readerTimeTag").textContent = `⏱️ ${story.readingTime || "3-5 mins"}`;
  document.getElementById("readerWordCountTag").textContent = `${story.wordCount || 120} words`;
  document.getElementById("readerCoverEmoji").textContent = story.coverEmoji || "📖";
  document.getElementById("readerTitle").textContent = story.title;
  const introEl = document.getElementById("readerIntro");
  if (introEl) introEl.textContent = story.intro || "";

  // Render Story Body with Interactive Words
  renderStoryContent(story);

  // Quiz Setup
  setupQuiz(story);

  // Prev / Next button states
  const allStories = getAllStories();
  const currentIndex = allStories.findIndex(s => s.id === currentStoryId);
  document.getElementById("btnPrevStory").disabled = currentIndex <= 0;
  document.getElementById("btnNextStory").disabled = currentIndex >= allStories.length - 1;

  // Scroll reader to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Sentences are the unit of playback: one tap = hear that sentence again.
function splitSentences(text) {
  return (text.match(/[^.!?]+[.!?]+["'”’]?|[^.!?]+$/g) || [text])
    .map(s => s.trim())
    .filter(Boolean);
}

function renderStoryContent(story) {
  const container = document.getElementById("storyContentArea");
  container.innerHTML = "";

  const vocabWords = (story.vocabulary || []).map(v => v.word.toLowerCase());

  story.paragraphs.forEach((pText, pIndex) => {
    const pEl = document.createElement("p");
    pEl.className = "story-paragraph";
    pEl.id = `para-${pIndex}`;

    splitSentences(pText).forEach((sentText, sIndex) => {
      const sentEl = document.createElement("span");
      sentEl.className = "story-sentence";
      sentEl.id = `sent-${pIndex}-${sIndex}`;
      sentEl.dataset.p = pIndex;
      sentEl.dataset.s = sIndex;

      // Speaker badge: tap to hear this sentence on its own
      const playBtn = document.createElement("button");
      playBtn.type = "button";
      playBtn.className = "sentence-play-btn";
      playBtn.textContent = "▶";
      playBtn.title = "Play just this sentence";
      playBtn.setAttribute("aria-label", "Play this sentence");
      playBtn.onclick = (e) => {
        e.stopPropagation();
        playClickPop();
        speakSentence(pIndex, sIndex);
      };
      sentEl.appendChild(playBtn);

      // Microphone badge: read this sentence aloud and get feedback
      if (shadowSupported()) {
        const micBtn = document.createElement("button");
        micBtn.type = "button";
        micBtn.className = "sentence-mic-btn";
        micBtn.textContent = "🎤";
        micBtn.title = "Read this sentence aloud";
        micBtn.setAttribute("aria-label", "Read this sentence aloud");
        micBtn.onclick = (e) => {
          e.stopPropagation();
          playClickPop();
          openShadowPanel(pIndex, sIndex);
        };
        sentEl.appendChild(micBtn);
      }

      // Split the sentence into words while keeping punctuation intact
      sentText.split(/(\s+)/).forEach((token, tIndex) => {
        if (/^\s+$/.test(token)) {
          sentEl.appendChild(document.createTextNode(token));
          return;
        }

        // Strip punctuation to check vocabulary match
        const cleanWord = token.replace(/^[^\w]+|[^\w]+$/g, "").toLowerCase();
        const isVocab = vocabWords.includes(cleanWord);

        const span = document.createElement("span");
        span.textContent = token;
        span.className = isVocab ? "vocab-highlight" : "story-word";
        span.id = `w-${pIndex}-${sIndex}-${tIndex}`;

        if (isVocab) {
          const vData = story.vocabulary.find(v => v.word.toLowerCase() === cleanWord);
          span.title = `Click to see meaning of "${cleanWord}"`;
          span.onclick = (e) => {
            e.stopPropagation();
            playClickPop();
            openVocabModal(vData);
          };
        } else {
          span.title = `Tap to hear "${cleanWord}" · double-tap for meaning`;
          // iOS does not fire dblclick reliably, so detect a double tap ourselves.
          // Long-press still works because we no longer disable text selection.
          let lastTap = 0;
          span.onclick = (e) => {
            e.stopPropagation();
            const now = Date.now();
            if (now - lastTap < 380) {
              lastTap = 0;
              playClickPop();
              handleWordClick(cleanWord);
            } else {
              lastTap = now;
              speakWord(cleanWord);
            }
          };
        }

        sentEl.appendChild(span);
      });

      sentEl.appendChild(document.createTextNode(" "));
      pEl.appendChild(sentEl);
    });

    container.appendChild(pEl);
  });
}

function navigateStory(direction) {
  const allStories = getAllStories();
  const currentIndex = allStories.findIndex(s => s.id === currentStoryId);
  const nextIndex = currentIndex + direction;
  if (nextIndex >= 0 && nextIndex < allStories.length) {
    loadStory(allStories[nextIndex].id);
  }
}

// ==========================================
// SPEECH SYNTHESIS (AUDIO READ-ALOUD & IOS COMPATIBLE)
// ==========================================
let speechSentenceQueue = [];
let currentSentenceIndex = 0;

function toggleReadAloud() {
  if (isSpeaking) {
    stopSpeech();
  } else {
    startStorySpeech();
  }
}

function stopSpeech() {
  speechSentenceQueue = [];
  currentSentenceIndex = 0;
  isSpeaking = false;
  if (window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
    } catch (err) {}
  }
  updateAudioControlsState(false);
  clearWordHighlights();
}

function pauseSpeech() {
  stopSpeech();
}

function startStorySpeech() {
  if (!window.speechSynthesis) {
    alert("Sorry! Speech synthesis is not supported on this browser.");
    return;
  }

  unlockAudioEngine();

  // Stop any current utterance
  if (window.speechSynthesis.speaking) {
    try {
      window.speechSynthesis.cancel();
    } catch (err) {}
  }

  const story = getStoryById(currentStoryId);
  const queue = buildSpeechQueue(story.paragraphs);

  if (!queue.length) return;

  speechSentenceQueue = queue;
  currentSentenceIndex = 0;
  isSpeaking = true;
  updateAudioControlsState(true);

  // Small delay so any pending iOS cancel settles
  setTimeout(() => {
    speakNextSentence();
  }, 80);
}

function speakNextSentence() {
  if (!isSpeaking || currentSentenceIndex >= speechSentenceQueue.length) {
    isSpeaking = false;
    updateAudioControlsState(false);
    clearWordHighlights();
    return;
  }

  const item = speechSentenceQueue[currentSentenceIndex];
  const shape = prosodyFor(item.text);
  const utt = new SpeechSynthesisUtterance(item.text);
  const voice = getBestVoice();
  utt.lang = (voice && voice.lang) || "en-US"; // MANDATORY FOR IOS SAFARI
  utt.rate = Math.max(0.6, Math.min(1.4, currentSpeed * shape.rateMul));
  utt.pitch = shape.pitch;
  utt.volume = 1.0;
  if (voice) utt.voice = voice;

  // Highlight the sentence that is being spoken
  currentSentenceRef = { p: item.pIndex, s: item.sIndex };
  highlightSentence(item.pIndex, item.sIndex);

  const advance = () => {
    currentSentenceIndex++;
    if (!isSpeaking) return;
    const wait = (item.pause || 220) + (item.lastOfParagraph ? 320 : 0);
    setTimeout(() => {
      if (isSpeaking) speakNextSentence();
    }, wait);
  };

  utt.onend = advance;

  utt.onerror = (e) => {
    console.warn("Speech error:", e);
    advance();
  };

  window.speechSynthesis.speak(utt);
}

function highlightSentence(pIdx, sIdx) {
  clearWordHighlights();
  const el = document.getElementById(`sent-${pIdx}-${sIdx}`);
  if (el) {
    el.classList.add("reading-current-sentence");
    // Keep the sentence comfortably in view on a small screen
    try {
      const rect = el.getBoundingClientRect();
      if (rect.top < 90 || rect.bottom > window.innerHeight - 40) {
        el.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    } catch (err) {}
  }
}

// Play a single sentence on its own (tap on the ▶ badge).
function speakSentence(pIdx, sIdx) {
  if (!window.speechSynthesis) return;
  const story = getStoryById(currentStoryId);
  if (!story) return;
  const sentences = splitSentences(story.paragraphs[pIdx] || "");
  const text = sentences[sIdx];
  if (!text) return;

  unlockAudioEngine();
  stopSpeech();

  currentSentenceRef = { p: pIdx, s: sIdx };
  isSpeaking = false;
  highlightSentence(pIdx, sIdx);

  const shape = prosodyFor(text);
  const utt = new SpeechSynthesisUtterance(text);
  const voice = getBestVoice();
  utt.lang = (voice && voice.lang) || "en-US";
  utt.rate = Math.max(0.6, Math.min(1.4, currentSpeed * shape.rateMul));
  utt.pitch = shape.pitch;
  utt.volume = 1.0;
  if (voice) utt.voice = voice;

  // Give iOS a moment to settle after the cancel above, otherwise the new
  // utterance is occasionally swallowed.
  setTimeout(() => {
    window.speechSynthesis.speak(utt);
  }, 60);
}

function repeatCurrentSentence() {
  speakSentence(currentSentenceRef.p, currentSentenceRef.s);
}

function playNextSentence() {
  const story = getStoryById(currentStoryId);
  if (!story) return;
  let { p, s } = currentSentenceRef;
  const sentences = splitSentences(story.paragraphs[p] || "");
  if (s + 1 < sentences.length) {
    s += 1;
  } else if (p + 1 < story.paragraphs.length) {
    p += 1;
    s = 0;
  } else {
    return;
  }
  speakSentence(p, s);
}

function playPrevSentence() {
  const story = getStoryById(currentStoryId);
  if (!story) return;
  let { p, s } = currentSentenceRef;
  if (s > 0) {
    s -= 1;
  } else if (p > 0) {
    const prevSentences = splitSentences(story.paragraphs[p - 1] || "");
    if (!prevSentences.length) return;
    p -= 1;
    s = prevSentences.length - 1;
  } else {
    return;
  }
  speakSentence(p, s);
}

function highlightParagraph(pIdx) {
  clearWordHighlights();
  const pEl = document.getElementById(`para-${pIdx}`);
  if (pEl) {
    pEl.classList.add("story-sentence-active");
  }
}

function clearWordHighlights() {
  document.querySelectorAll(".story-sentence-active").forEach(el => {
    el.classList.remove("story-sentence-active");
  });
  document.querySelectorAll(".reading-current-sentence").forEach(el => {
    el.classList.remove("reading-current-sentence");
  });
  document.querySelectorAll(".reading-current-word").forEach(el => {
    el.classList.remove("reading-current-word");
  });
}

function speakWord(word) {
  if (!window.speechSynthesis || !word) return;
  unlockAudioEngine();

  // If already speaking, pause briefly before single word
  if (window.speechSynthesis.speaking) {
    try {
      window.speechSynthesis.cancel();
    } catch (err) {}
    setTimeout(() => {
      doSpeakWord(word);
    }, 60);
  } else {
    doSpeakWord(word);
  }
}

function doSpeakWord(word) {
  const utt = new SpeechSynthesisUtterance(word);
  const voice = getBestVoice();
  utt.lang = (voice && voice.lang) || "en-US"; // MANDATORY FOR IOS SAFARI
  // Single words need to be a touch slower to stay clear
  utt.rate = Math.max(0.65, currentSpeed * 0.9);
  utt.pitch = 1.0;
  utt.volume = 1.0;
  if (voice) utt.voice = voice;

  window.speechSynthesis.speak(utt);
}

function testSoundOnDevice() {
  unlockAudioEngine();
  playSuccessChime();
  setTimeout(() => {
    doSpeakWord("Hello superstar reader! Sound is working!");
  }, 400);
}

function setSpeed(speed) {
  currentSpeed = speed;
  document.getElementById("speedSlow").classList.toggle("active", speed < 0.9);
  document.getElementById("speedNormal").classList.toggle("active", speed >= 0.9);

  if (isSpeaking) {
    // Restart reading with new speed
    startStorySpeech();
  }
}

function updateAudioControlsState(playing) {
  const icon = document.getElementById("audioPlayIcon");
  const text = document.getElementById("audioPlayText");
  const stopBtn = document.getElementById("btnStopAudio");

  if (playing) {
    icon.textContent = "⏸️";
    text.textContent = "Pause Reading";
    stopBtn.style.display = "inline-flex";
  } else {
    icon.textContent = "🔊";
    text.textContent = "Read to Me";
    stopBtn.style.display = "none";
  }
}

function clearWordHighlights() {
  document.querySelectorAll(".reading-current-word").forEach(el => {
    el.classList.remove("reading-current-word");
  });
}

// ==========================================
// VOCABULARY MODAL
// ==========================================
function handleWordClick(word) {
  if (!word) return;
  const lookup = (window.LONGMAN_DATA || {})[String(word).toLowerCase()] || {};
  const defs = lookup.defs || [];
  openVocabModal({
    word,
    syllables: word,
    phonetic: lookup.phonetic || "",
    definition: defs[0] || "",
    example: "",
    emoji: "📖",
    longman: defs,
    lookupOnly: true,
  });
}

function openVocabModal(vData) {
  if (!vData) return;
  currentModalWordData = vData;

  const lookup = (window.LONGMAN_DATA || {})[String(vData.word).toLowerCase()] || {};
  const longmanDefs = vData.longman || lookup.defs || [];

  document.getElementById("modalEmoji").textContent = vData.emoji || "📖";
  document.getElementById("modalWord").textContent = vData.word;
  document.getElementById("modalSyllables").textContent = vData.syllables || vData.word;
  document.getElementById("modalPhonetic").textContent = vData.phonetic || lookup.phonetic || "";
  document.getElementById("modalDefinition").textContent = vData.definition || longmanDefs[0] || "—";
  document.getElementById("modalExample").textContent = vData.example ? `"${vData.example}"` : "";

  // Words looked up on the fly have no "meaning in this story", so hide that block
  // and show the Longman entry instead.
  const meaningSection = document.getElementById("modalMeaningSection");
  if (meaningSection) {
    meaningSection.style.display = vData.lookupOnly ? "none" : "block";
  }

  const longmanSection = document.getElementById("modalLongmanSection");
  const longmanList = document.getElementById("modalLongman");
  if (longmanSection && longmanList) {
    if (longmanDefs.length) {
      longmanList.innerHTML = longmanDefs.map(d => `<li>${d}</li>`).join("");
      longmanSection.style.display = "block";
    } else {
      longmanSection.style.display = "none";
      longmanList.innerHTML = "";
    }
  }

  // Check if already in word bank
  const exists = state.wordBank.some(w => w.word.toLowerCase() === vData.word.toLowerCase());
  const btn = document.getElementById("btnAddToWordBank");
  btn.textContent = exists ? "❤️ In Word Bank" : "➕ Add to Word Bank";
  btn.className = exists ? "btn btn-outline btn-sm" : "btn btn-primary btn-sm";

  document.getElementById("vocabModal").classList.add("open");
}

function closeVocabModal() {
  document.getElementById("vocabModal").classList.remove("open");
  currentModalWordData = null;
}

function speakCurrentModalWord() {
  if (currentModalWordData) {
    speakWord(currentModalWordData.word);
  }
}

function toggleSaveModalWord() {
  if (!currentModalWordData) return;

  const wordName = currentModalWordData.word.toLowerCase();
  const index = state.wordBank.findIndex(w => w.word.toLowerCase() === wordName);

  if (index >= 0) {
    // Remove
    state.wordBank.splice(index, 1);
  } else {
    // Add
    state.wordBank.push(currentModalWordData);
    playSuccessChime();
  }

  saveState();
  updateHeaderStats();

  // Update button text
  const exists = index < 0;
  const btn = document.getElementById("btnAddToWordBank");
  btn.textContent = exists ? "❤️ In Word Bank" : "➕ Add to Word Bank";
  btn.className = exists ? "btn btn-outline btn-sm" : "btn btn-primary btn-sm";
}

// ==========================================
// READING COMPLETION & QUIZ
// ==========================================
function completeReading() {
  // Mark story as completed if not already
  if (!state.completedStories.includes(currentStoryId)) {
    state.completedStories.push(currentStoryId);
    saveState();
    updateHeaderStats();
  }

  playCelebrationFanfare();
  launchConfetti();

  // Hide finish button, show quiz
  document.getElementById("finishCard").style.display = "none";
  document.getElementById("quizSection").style.display = "block";

  // Scroll to quiz
  document.getElementById("quizSection").scrollIntoView({ behavior: "smooth" });
}

function setupQuiz(story) {
  const quizSection = document.getElementById("quizSection");
  const finishCard = document.getElementById("finishCard");
  const questionsContainer = document.getElementById("quizQuestionsContainer");
  questionsContainer.innerHTML = "";

  const isCompleted = state.completedStories.includes(story.id);

  if (isCompleted) {
    finishCard.style.display = "none";
    quizSection.style.display = "block";
  } else {
    finishCard.style.display = "block";
    quizSection.style.display = "none";
  }

  if (!story.quiz || !story.quiz.length) {
    questionsContainer.innerHTML = "<p style='color:var(--text-muted);'>No quiz for this story yet. Great reading!</p>";
    return;
  }

  const existingResult = state.quizResults[story.id] || {};

  story.quiz.forEach((qItem, qIdx) => {
    const card = document.createElement("div");
    card.className = "quiz-card";

    const title = document.createElement("div");
    title.className = "quiz-question-title";
    title.innerHTML = `<span class="question-num">${qIdx + 1}</span> <span>${qItem.question}</span>`;
    card.appendChild(title);

    const optsContainer = document.createElement("div");
    optsContainer.className = "quiz-options";

    const userAns = existingResult[qIdx];

    qItem.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.textContent = optText;

      if (userAns !== undefined) {
        btn.disabled = true;
        if (optIdx === qItem.answerIndex) {
          btn.classList.add("correct");
        } else if (optIdx === userAns) {
          btn.classList.add("wrong");
        }
      } else {
        btn.onclick = () => handleQuizOptionClick(story.id, qIdx, optIdx, qItem, card, optsContainer);
      }

      optsContainer.appendChild(btn);
    });

    card.appendChild(optsContainer);

    // Explanation Box
    const expBox = document.createElement("div");
    expBox.className = "quiz-explanation";
    if (userAns !== undefined) {
      expBox.classList.add("show");
      if (userAns === qItem.answerIndex) {
        expBox.classList.add("correct-exp");
        expBox.textContent = `🌟 Correct! ${qItem.explanation}`;
      } else {
        expBox.classList.add("wrong-exp");
        expBox.textContent = `Keep trying! ${qItem.explanation}`;
      }
    }
    card.appendChild(expBox);

    questionsContainer.appendChild(card);
  });
}

function handleQuizOptionClick(storyId, qIdx, optIdx, qItem, cardEl, optsContainer) {
  // Disable all buttons for this question
  optsContainer.querySelectorAll(".quiz-option-btn").forEach(btn => btn.disabled = true);

  const selectedBtn = optsContainer.children[optIdx];
  const isCorrect = optIdx === qItem.answerIndex;

  // Save to state
  if (!state.quizResults[storyId]) {
    state.quizResults[storyId] = {};
  }
  state.quizResults[storyId][qIdx] = optIdx;

  const expBox = cardEl.querySelector(".quiz-explanation");
  expBox.classList.add("show");

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    expBox.classList.add("correct-exp");
    expBox.textContent = `🌟 Fantastic! ${qItem.explanation}`;
    state.stars += 1;
    playSuccessChime();
  } else {
    selectedBtn.classList.add("wrong");
    optsContainer.children[qItem.answerIndex].classList.add("correct");
    expBox.classList.add("wrong-exp");
    expBox.textContent = `Good try! ${qItem.explanation}`;
    playWrongChirp();
  }

  saveState();
  updateHeaderStats();

  // Check if all answered
  const story = getStoryById(storyId);
  const totalQuestions = story.quiz.length;
  const answeredCount = Object.keys(state.quizResults[storyId]).length;
  if (answeredCount === totalQuestions) {
    setTimeout(() => {
      launchConfetti();
      playCelebrationFanfare();
    }, 600);
  }
}

// ==========================================
// STORY LIBRARY (60+ DAYS GRID)
// ==========================================
let currentFilterView = 'all';

function filterLibraryView(viewType) {
  currentFilterView = viewType;
  document.querySelectorAll("#libraryFilterButtons .week-tab-btn").forEach(btn => {
    const fnAttr = btn.getAttribute("onclick") || "";
    btn.classList.toggle("active", fnAttr.includes(`'${viewType}'`));
  });
  renderStoryLibrary();
}

function filterLibraryWeek(weekNum) {
  currentFilterWeek = weekNum;
  document.querySelectorAll(".week-tab-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === weekNum);
  });
  renderStoryLibrary();
}

function renderStoryLibrary() {
  const container = document.getElementById("storiesGridContainer");
  container.innerHTML = "";

  const allStories = getAllStories();

  // Advanced stories live in their own tab; core views only show the daily track
  const coreStories = allStories.filter(s => s.track !== 'advanced');

  let filtered = coreStories;

  if (currentFilterView === 'month1') {
    filtered = coreStories.filter(s => (s.day || s.id) <= 30);
  } else if (currentFilterView === 'month2') {
    filtered = coreStories.filter(s => (s.day || s.id) >= 31 && (s.day || s.id) <= 60);
  } else if (currentFilterView === 'month3') {
    filtered = coreStories.filter(s => (s.day || s.id) >= 61 && (s.day || s.id) <= 100);
  } else if (currentFilterView === 'month4') {
    filtered = coreStories.filter(s => (s.day || s.id) >= 101 && (s.day || s.id) <= 140);
  } else if (currentFilterView === 'advanced') {
    filtered = allStories.filter(s => s.track === 'advanced');
  } else if (currentFilterView === 'custom') {
    filtered = allStories.filter(s => !s.track && s.category === 'Custom Story');
  } else if (currentFilterWeek > 0) {
    filtered = coreStories.filter(s => s.week === currentFilterWeek);
  }

  // Update total count badge for the active view
  const totalBadge = document.getElementById("libraryTotalCount");
  if (totalBadge) totalBadge.textContent = filtered.length;

  // Nav label: show however many days the uploaded stories actually cover
  const navDayCount = document.getElementById("navDayCount");
  if (navDayCount) {
    const maxDay = coreStories.reduce((m, s) => Math.max(m, s.day || s.id || 0), 0);
    navDayCount.textContent = maxDay || coreStories.length;
  }

  if (!filtered.length) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <p style="font-size:2.5rem; margin-bottom:0.5rem;">📚</p>
        <h3 style="font-size:1.3rem; font-weight:800; color:var(--text-dark);">No stories found in this section yet!</h3>
        <p>You can add your own custom stories in the Parent Corner anytime.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(story => {
    const isCompleted = state.completedStories.includes(story.id);
    const isCurrent = story.id === currentStoryId;

    const card = document.createElement("div");
    card.className = `story-card ${isCurrent ? 'current-day-card' : ''}`;
    card.onclick = () => {
      loadStory(story.id);
      navigateToTab("reader");
    };

    card.innerHTML = `
      <div class="card-top">
        <span class="card-emoji">${story.coverEmoji || '📖'}</span>
        <div style="display:flex; align-items:center; gap:0.4rem;">
          <span class="card-day-badge">${story.track === 'advanced' ? '⭐ Adv ' + (story.day || story.id) : 'Day ' + (story.day || story.id)}</span>
          ${isCompleted ? '<span class="card-completed-badge" title="Completed">⭐</span>' : ''}
        </div>
      </div>
      <h3 class="card-title">${story.title}</h3>
      <p class="card-category">${story.category || 'Reading Story'}</p>
      <div class="card-footer">
        <span>${story.level || 'Starter'}</span>
        <span>${story.wordCount || 100} words</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// ==========================================
// WORD BANK (FLASHCARDS)
// ==========================================
function renderWordBank() {
  const container = document.getElementById("flashcardsGrid");
  container.innerHTML = "";

  if (!state.wordBank.length) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <p style="font-size:3rem; margin-bottom:0.5rem;">📖</p>
        <h3 style="font-size:1.4rem; font-weight:800; color:var(--text-dark);">Your Word Bank is Empty!</h3>
        <p>While reading stories, tap any pink word with ✨ and click "Add to Word Bank" to build your vocabulary deck.</p>
      </div>
    `;
    return;
  }

  state.wordBank.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "flashcard";

    card.innerHTML = `
      <div class="flashcard-top">
        <div class="flashcard-word">${item.word}</div>
        <span style="font-size:1.5rem;">${item.emoji || '✨'}</span>
      </div>
      <div class="flashcard-syllables">${item.syllables || item.word} ${item.phonetic ? `• ${item.phonetic}` : ''}</div>
      <div class="flashcard-def">${item.definition}</div>
      ${item.example ? `<div class="flashcard-ex">"${item.example}"</div>` : ''}
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem; padding-top:0.75rem; border-top:1px solid var(--border-color);">
        <button class="btn btn-outline btn-sm" onclick="speakWord('${item.word}')">
          🗣️ Pronounce
        </button>
        <button class="btn btn-sm" style="color:#EF4444; background:transparent; border:none;" onclick="removeWordFromBank(${index})" title="Remove word">
          🗑️
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function removeWordFromBank(index) {
  state.wordBank.splice(index, 1);
  saveState();
  updateHeaderStats();
  renderWordBank();
}

function exportWordBank() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.wordBank, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `word_bank_${state.childName.replace(/\s+/g, '_')}.json`);
  dlAnchorElem.click();
}

// ==========================================
// PARENT CORNER & CUSTOM STORIES
// ==========================================
function saveChildName(newName) {
  state.childName = newName.trim() || "Superstar Reader";
  saveState();
  updateCertificateDisplay();
}

function updateCertificateDisplay() {
  const certName = document.getElementById("certChildNameDisplay");
  if (certName) certName.textContent = state.childName;

  const certDate = document.getElementById("certDateDisplay");
  if (certDate) {
    const today = new Date();
    certDate.textContent = today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }
}

function handleCustomStorySubmit(e) {
  e.preventDefault();
  const title = document.getElementById("customTitle").value.trim();
  const emoji = document.getElementById("customEmoji").value.trim() || "📖";
  const rawContent = document.getElementById("customContent").value.trim();

  if (!title || !rawContent) return;

  const paragraphs = rawContent.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  const wordCount = rawContent.split(/\s+/).length;

  const newId = 100 + state.customStories.length + 1;
  const newStory = {
    id: newId,
    day: getAllStories().length + 1,
    week: 4,
    title: title,
    coverEmoji: emoji,
    category: "Custom Story",
    readingTime: `${Math.max(2, Math.round(wordCount / 40))} mins`,
    wordCount: wordCount,
    intro: `A special story created for ${state.childName}!`,
    paragraphs: paragraphs,
    vocabulary: [],
    quiz: [],
    funPrompt: `What was your favorite part of '${title}'?`
  };

  state.customStories.push(newStory);
  saveState();
  updateHeaderStats();

  alert(`Story '${title}' added successfully!`);
  document.getElementById("customStoryForm").reset();

  loadStory(newId);
  navigateToTab("reader");
}

function handleStoryPackFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      importStoriesArray(data);
    } catch (err) {
      alert("Error reading story pack JSON file. Please ensure it is a valid JSON file.");
    }
  };
  reader.readAsText(file);
}

function importPastedStoryPack() {
  const textarea = document.getElementById("pasteStoryPackArea");
  const rawText = textarea.value.trim();
  if (!rawText) {
    alert("Please paste story JSON text into the box first.");
    return;
  }

  try {
    const data = JSON.parse(rawText);
    importStoriesArray(data);
    textarea.value = "";
  } catch (err) {
    alert("Invalid JSON format! Please check the structure and try again.");
  }
}

function importStoriesArray(rawItems) {
  const items = Array.isArray(rawItems) ? rawItems : [rawItems];
  if (!items.length) {
    alert("No stories found in the imported data.");
    return;
  }

  let addedCount = 0;
  items.forEach(item => {
    if (!item.title || !item.paragraphs) return;

    const newId = 100 + state.customStories.length + 1;
    const story = {
      id: newId,
      day: getAllStories().length + 1,
      week: item.week || 5,
      level: item.level || "Explorer",
      levelBadge: item.levelBadge || "Custom Story",
      title: item.title,
      coverEmoji: item.coverEmoji || "📖",
      category: item.category || "Custom Story",
      readingTime: item.readingTime || "4 mins",
      wordCount: item.wordCount || (Array.isArray(item.paragraphs) ? item.paragraphs.join(" ").split(/\s+/).length : 120),
      intro: item.intro || `Story added for ${state.childName}!`,
      paragraphs: Array.isArray(item.paragraphs) ? item.paragraphs : [item.paragraphs],
      vocabulary: item.vocabulary || [],
      quiz: item.quiz || [],
      funPrompt: item.funPrompt || `What did you enjoy about '${item.title}'?`
    };

    state.customStories.push(story);
    addedCount++;
  });

  saveState();
  updateHeaderStats();
  launchConfetti();
  playSuccessChime();

  alert(`🎉 Success! Added ${addedCount} new story items to your library! Total stories now: ${getAllStories().length}`);
  navigateToTab("library");
}

function exportCustomStories() {
  if (!state.customStories.length) {
    alert("You don't have any custom stories to export yet! Add some first.");
    return;
  }
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.customStories, null, 2));
  const dl = document.createElement("a");
  dl.setAttribute("href", dataStr);
  dl.setAttribute("download", `custom_stories_pack_${state.childName.replace(/\s+/g, '_')}.json`);
  dl.click();
}

function resetProgressConfirm() {
  if (confirm("Are you sure you want to reset all reading streaks, stars, and progress?")) {
    state.completedStories = [];
    state.streak = 1;
    state.stars = 0;
    state.quizResults = {};
    saveState();
    updateHeaderStats();
    loadStory(1);
    alert("Progress has been reset.");
  }
}

// ==========================================
// VIEW CONTROLS (FONT SIZE, THEMES)
// ==========================================
let currentFontScale = 1.35;
function adjustFontSize(delta) {
  currentFontScale = Math.max(1.0, Math.min(2.1, currentFontScale + delta * 0.15));
  document.documentElement.style.setProperty("--reading-font-size", `${currentFontScale}rem`);
}

function setTheme(theme) {
  document.body.className = "";
  if (theme === "warm") document.body.classList.add("theme-warm");
  if (theme === "soft-night") document.body.classList.add("theme-soft-night");
}

// ==========================================
// SOUND SYNTHESIZER (WEB AUDIO API - ZERO ASSETS)
// ==========================================
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSuccessChime() {
  try {
    const ctx = getAudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + i * 0.08 + 0.35);
    });
  } catch (err) {
    // audio context blocked or unsupported
  }
}

function playClickPop() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (err) {}
}

function playWrongChirp() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch (err) {}
}

function playCelebrationFanfare() {
  try {
    const ctx = getAudioContext();
    const melody = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.15 },
      { f: 1046.50, d: 0.4 }
    ];
    let time = ctx.currentTime;
    melody.forEach(note => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = note.f;
      gain.gain.setValueAtTime(0.2, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + note.d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + note.d);
      time += note.d * 0.8;
    });
  } catch (err) {}
}

// ==========================================
// CONFETTI ANIMATION (CANVAS)
// ==========================================
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#FF5964", "#35A7FF", "#FFE74C", "#38B000", "#9B5DE5", "#F15BB5"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.4,
      r: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 16,
      gravity: 0.35,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }

  let frameCount = 0;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(0, 0, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    frameCount++;
    if (frameCount < 120) {
      requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  updateConfetti();
}

// ==========================================
// SHADOWING: record yourself reading a sentence, get feedback
//
// One button does both jobs: it records your voice (so you can play it back)
// and, when available, runs speech recognition at the same time (so you get a
// score). Holding the mic twice at once can wedge iOS Safari, so the merge is
// guarded in three ways:
//   1. a checkbox lets you drop to recording-only with one tap
//   2. recognition failures downgrade to recording-only instead of stopping
//   3. a watchdog re-opens the UI if nothing comes back
// ==========================================
const SHADOW_KEY = STORAGE_PREFIX + "shadow_scores";
const SHADOW_SCORING_KEY = STORAGE_PREFIX + "shadow_dual_scoring";
const SHADOW_STOPWORDS = new Set(("a an the and or but if so of to in on at for with from by as " +
  "is are was were be been am do does did have has had will would can could should may might must " +
  "this that these those it its he she they we you i not no yes very just also than then there here").split(" "));
const SHADOW_EXPAND = {
  "don't": "do not", "doesn't": "does not", "didn't": "did not", "isn't": "is not",
  "aren't": "are not", "wasn't": "was not", "weren't": "were not", "won't": "will not",
  "can't": "cannot", "couldn't": "could not", "shouldn't": "should not", "wouldn't": "would not",
  "it's": "it is", "i'm": "i am", "we're": "we are", "they're": "they are", "you're": "you are",
  "he's": "he is", "she's": "she is", "that's": "that is", "there's": "there is", "let's": "let us",
  "i've": "i have", "we've": "we have", "they've": "they have", "you've": "you have"
};

let shadowState = {
  p: 0, s: 0, target: "",
  active: false,
  scoring: true,
  recognition: null,
  restarts: 0,
  mediaRecorder: null,
  stream: null,
  chunks: [],
  finalTranscript: "",
  interimTranscript: "",
  audioEl: null,
  audioUrl: null,
  watchdog: null,
  lastInterimAt: 0
};

function shadowSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
}

function shadowRecognitionSupported() {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

function shadowEscape(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function shadowEscapeAttr(t) {
  return shadowEscape(t).replace(/"/g, "&quot;");
}

// Render a sentence as tappable word chips so the child can hear any single
// word on its own before trying the whole sentence again.
function shadowWordChips(text) {
  return String(text || "").split(/(\s+)/).map((tok) => {
    if (!tok || /^\s+$/.test(tok)) return tok;
    const clean = tok.replace(/^[^\w]+|[^\w]+$/g, "");
    if (!clean) return shadowEscape(tok);
    const at = tok.indexOf(clean);
    const lead = tok.slice(0, at);
    const tail = tok.slice(at + clean.length);
    return shadowEscape(lead) +
      '<span class="shadow-word-click" data-w="' + shadowEscapeAttr(clean) + '" title="点一下听发音">' +
      shadowEscape(clean) + "</span>" + shadowEscape(tail);
  }).join("");
}

let shadowChipBound = false;
function bindShadowChipClicks() {
  if (shadowChipBound) return;
  const panel = document.getElementById("shadowPanel");
  if (!panel) return;
  panel.addEventListener("click", (e) => {
    const el = e.target && e.target.closest ? e.target.closest("[data-w]") : null;
    if (!el) return;
    e.stopPropagation();
    const w = el.getAttribute("data-w");
    if (w) { playClickPop(); speakWord(w); }
  });
  shadowChipBound = true;
}

function shadowKey(p, s) {
  return currentStoryId + ":" + p + ":" + s;
}

function shadowScores() {
  try { return JSON.parse(localStorage.getItem(SHADOW_KEY) || "{}"); } catch (err) { return {}; }
}

function saveShadowScore(stars) {
  const all = shadowScores();
  const k = shadowKey(shadowState.p, shadowState.s);
  if (!all[k] || all[k] < stars) {
    all[k] = stars;
    try { localStorage.setItem(SHADOW_KEY, JSON.stringify(all)); } catch (err) {}
  }
}

function setShadowStatus(msg) {
  const el = document.getElementById("shadowStatus");
  if (el) el.textContent = msg;
}

function shadowGetScoring() {
  try {
    const v = localStorage.getItem(SHADOW_SCORING_KEY);
    return v === null ? true : v === "1";
  } catch (err) { return true; }
}

function shadowSetScoring(on) {
  shadowState.scoring = !!on;
  try { localStorage.setItem(SHADOW_SCORING_KEY, on ? "1" : "0"); } catch (err) {}
  setShadowStatus(on ? "已开启评分：读完会显示星级和逐词反馈。" : "只录音：读完点「听我的」自己对比。");
}

function openShadowPanel(pIdx, sIdx) {
  const story = getStoryById(currentStoryId);
  if (!story) return;
  const sentences = splitSentences(story.paragraphs[pIdx] || "");
  const text = sentences[sIdx];
  if (!text) return;

  stopShadowActive();
  cleanupShadowAudio();

  shadowState.p = pIdx;
  shadowState.s = sIdx;
  shadowState.target = text;
  shadowState.finalTranscript = "";
  shadowState.interimTranscript = "";
  shadowState.restarts = 0;
  shadowState.scoring = shadowGetScoring();

  const panel = document.getElementById("shadowPanel");
  document.getElementById("shadowTarget").innerHTML = shadowWordChips(text);
  bindShadowChipClicks();
  document.getElementById("shadowResult").innerHTML = "";
  document.getElementById("shadowReplayBtn").style.display = "none";
  if (panel) panel.classList.add("open");

  const toggle = document.getElementById("shadowScoringToggle");
  if (toggle) toggle.checked = shadowState.scoring && shadowRecognitionSupported();

  shadowResetMicButton();

  if (!shadowSupported()) {
    setShadowStatus("这个浏览器不能录音，换 Safari 或 Chrome 试试。");
    return;
  }
  const best = shadowScores()[shadowKey(pIdx, sIdx)] || 0;
  setShadowStatus(best ? "最好成绩 " + "⭐".repeat(best) + " · 再读一次挑战更高" : "先听一遍，再点「开始跟读」");
}

function closeShadowPanel() {
  stopShadowActive();
  cleanupShadowAudio();
  const panel = document.getElementById("shadowPanel");
  if (panel) panel.classList.remove("open");
}

function shadowPlayTarget() {
  if (shadowState.active) stopShadowActive();
  speakSentence(shadowState.p, shadowState.s);
}

function shadowReset() {
  stopShadowActive();
  cleanupShadowAudio();
  shadowState.finalTranscript = "";
  shadowState.interimTranscript = "";
  document.getElementById("shadowResult").innerHTML = "";
  document.getElementById("shadowReplayBtn").style.display = "none";
  shadowResetMicButton();
  setShadowStatus("再试一次：先听，再读。");
}

function cleanupShadowAudio() {
  if (shadowState.audioEl) {
    try { shadowState.audioEl.pause(); } catch (err) {}
    shadowState.audioEl = null;
  }
  if (shadowState.audioUrl) {
    try { URL.revokeObjectURL(shadowState.audioUrl); } catch (err) {}
    shadowState.audioUrl = null;
  }
  stopShadowTracks();
  shadowState.chunks = [];
}

function stopShadowTracks() {
  if (shadowState.stream) {
    try { shadowState.stream.getTracks().forEach(t => t.stop()); } catch (err) {}
    shadowState.stream = null;
  }
}

function shadowResetMicButton() {
  const btn = document.getElementById("shadowMicBtn");
  if (btn) {
    btn.textContent = "🎤 开始跟读";
    btn.classList.remove("recording");
    btn.disabled = false;
  }
}

function shadowPickMime() {
  if (!window.MediaRecorder) return "";
  const list = ["audio/mp4", "audio/webm", "audio/ogg"];
  for (const m of list) {
    try { if (MediaRecorder.isTypeSupported(m)) return m; } catch (err) {}
  }
  return "";
}

function armShadowWatchdog() {
  clearTimeout(shadowState.watchdog);
  shadowState.watchdog = setTimeout(() => {
    if (shadowState.active) {
      stopShadowActive();
      setShadowStatus("这次没录完，再试一次吧。");
    }
  }, 20000);
}

async function shadowToggle() {
  if (shadowState.active) { stopShadowActive(); return; }
  if (!shadowSupported()) { setShadowStatus("这个浏览器不能录音。"); return; }

  try { window.speechSynthesis.cancel(); } catch (err) {}
  await new Promise(r => setTimeout(r, 320));

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    setShadowStatus("没有拿到麦克风权限，请在 Safari 设置里允许后重试。");
    return;
  }

  shadowState.stream = stream;
  shadowState.chunks = [];
  shadowState.finalTranscript = "";
  shadowState.interimTranscript = "";
  shadowState.restarts = 0;
  shadowState.active = true;

  const mime = shadowPickMime();
  let mr;
  try {
    mr = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
  } catch (err) {
    shadowState.active = false;
    stopShadowTracks();
    setShadowStatus("录音启动失败，再试一次。");
    return;
  }

  mr.ondataavailable = (e) => {
    try { if (e.data && e.data.size) shadowState.chunks.push(e.data); } catch (err) {}
  };
  mr.onstop = () => {
    try {
      stopShadowTracks();          // release the mic only after the recorder flushes
      finalizeShadowRecording();
      finishShadowAttempt();
    } catch (err) {
      setShadowStatus("录音处理失败，再试一次。");
    } finally {
      shadowState.active = false;
      clearTimeout(shadowState.watchdog);
      shadowResetMicButton();
    }
  };

  shadowState.mediaRecorder = mr;
  try { mr.start(); } catch (err) {
    shadowState.active = false;
    stopShadowTracks();
    shadowResetMicButton();
    setShadowStatus("录音没能启动，再试一次。");
    return;
  }

  const btn = document.getElementById("shadowMicBtn");
  if (btn) { btn.textContent = "⏹ 停止"; btn.classList.add("recording"); }
  armShadowWatchdog();

  // Recognition runs alongside the recorder when the device allows it.
  if (shadowState.scoring && shadowRecognitionSupported()) {
    setShadowStatus("正在录音和听… 读完点「停止」");
    startShadowRecognition();
  } else {
    setShadowStatus("正在录音… 读完点「停止」");
  }
}

function startShadowRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;
  let rec;
  try { rec = new SR(); } catch (err) { return; }

  rec.lang = "en-US";
  rec.continuous = true;
  rec.interimResults = true;
  rec.maxAlternatives = 1;

  rec.onresult = (ev) => {
    try {
      let interim = "";
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const r = ev.results[i];
        if (r.isFinal) shadowState.finalTranscript += r[0].transcript + " ";
        else interim += r[0].transcript;
      }
      shadowState.interimTranscript = interim;
      const now = Date.now();
      if (now - shadowState.lastInterimAt > 300) {
        shadowState.lastInterimAt = now;
        const shown = (shadowState.finalTranscript + interim).trim();
        if (shown) setShadowStatus("听到：" + shown);
      }
    } catch (err) {}
  };

  rec.onerror = (e) => {
    const code = e && e.error;
    if (code === "audio-capture" || code === "not-allowed" || code === "service-not-allowed") {
      // This device will not share the microphone: keep the recording, drop scoring.
      shadowState.scoring = false;
      const toggle = document.getElementById("shadowScoringToggle");
      if (toggle) toggle.checked = false;
      setShadowStatus("这台设备不能边录边评分，这次只录音——读完点「听我的」。");
    }
  };

  rec.onend = () => {
    if (!shadowState.active || shadowState.scoring === false) return;
    if (shadowState.restarts >= 3) return;
    shadowState.restarts++;
    setTimeout(() => {
      if (!shadowState.active) return;
      try { startShadowRecognition(); } catch (err) {}
    }, 200);
  };

  shadowState.recognition = rec;
  try { rec.start(); } catch (err) {}
}

function stopShadowActive() {
  clearTimeout(shadowState.watchdog);

  const rec = shadowState.recognition;
  shadowState.recognition = null;
  if (rec) {
    try { rec.onresult = null; rec.onerror = null; rec.onend = null; rec.stop(); } catch (err) {}
  }

  const mr = shadowState.mediaRecorder;
  shadowState.mediaRecorder = null;
  if (mr && mr.state !== "inactive") {
    try { mr.stop(); } catch (err) { stopShadowTracks(); }
  } else {
    stopShadowTracks();
  }
  shadowState.active = false;
  shadowResetMicButton();
}

function finalizeShadowRecording() {
  if (!shadowState.chunks.length) {
    setShadowStatus("没有录到声音，再试一次。");
    return false;
  }
  try {
    const type = shadowState.chunks[0].type || "audio/mp4";
    const blob = new Blob(shadowState.chunks, { type: type });
    if (shadowState.audioUrl) { try { URL.revokeObjectURL(shadowState.audioUrl); } catch (err) {} }
    shadowState.audioUrl = URL.createObjectURL(blob);
    const replayBtn = document.getElementById("shadowReplayBtn");
    if (replayBtn) replayBtn.style.display = "inline-flex";
    return true;
  } catch (err) {
    setShadowStatus("录音保存失败，再试一次。");
    return false;
  }
}

// Runs once the recorder has stopped: score if we have a transcript, otherwise
// just tell the child the clip is ready to play back.
function finishShadowAttempt() {
  const heard = (shadowState.finalTranscript || shadowState.interimTranscript || "").trim();
  if (!heard) {
    setShadowStatus("录好了。点「听我的」听一遍，再点「听标准音」对比。");
    return;
  }
  evaluateShadow(heard);
}

function shadowNormalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, " ")
    .replace(/[^a-z0-9'\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .reduce((acc, w) => acc.concat(SHADOW_EXPAND[w] ? SHADOW_EXPAND[w].split(" ") : [w]), []);
}

function shadowLev(a, b) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 9;
  const m = a.length, n = b.length;
  let prev = new Array(n + 1);
  let cur = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
    }
    const t = prev; prev = cur; cur = t;
  }
  return prev[n];
}

// Strip English inflections so walked / walking / walks all count as "walk",
// while genuinely different words (quiet / quite) stay different.
function shadowStem(w) {
  let x = String(w || "");
  if (x.length > 4 && /ies$/.test(x)) return x.slice(0, -3) + "y";
  if (x.length > 4 && /ied$/.test(x)) return x.slice(0, -3) + "y";
  if (x.length > 4 && /ing$/.test(x)) {
    x = x.slice(0, -3);
    if (x.length > 2 && x[x.length - 1] === x[x.length - 2]) x = x.slice(0, -1);
    return x;
  }
  if (x.length > 3 && /ed$/.test(x)) {
    x = x.slice(0, -2);
    if (x.length > 2 && x[x.length - 1] === x[x.length - 2]) x = x.slice(0, -1);
    return x;
  }
  if (x.length > 3 && /es$/.test(x)) return x.slice(0, -2);
  if (x.length > 3 && /s$/.test(x) && !/ss$/.test(x)) return x.slice(0, -1);
  return x;
}

function shadowSameWord(a, b) {
  if (!a || !b) return false;
  if (a === b) return true;
  if (Math.min(a.length, b.length) < 3) return false;
  return shadowStem(a) === shadowStem(b);
}

function alignShadowWords(target, heard) {
  const n = target.length, m = heard.length;
  const dp = [];
  for (let i = 0; i <= n; i++) { dp[i] = new Array(m + 1).fill(0); dp[i][0] = i; }
  for (let j = 0; j <= m; j++) dp[0][j] = j;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const cost = target[i - 1] === heard[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  const ops = [];
  let i = n, j = m;
  while (i > 0 && j > 0) {
    const cost = target[i - 1] === heard[j - 1] ? 0 : 1;
    if (dp[i][j] === dp[i - 1][j - 1] + cost) {
      ops.push({ type: cost ? "sub" : "match", target: target[i - 1], heard: heard[j - 1] });
      i--; j--;
    } else if (dp[i][j] === dp[i - 1][j] + 1) {
      ops.push({ type: "miss", target: target[i - 1] });
      i--;
    } else {
      ops.push({ type: "extra", heard: heard[j - 1] });
      j--;
    }
  }
  while (i > 0) { ops.push({ type: "miss", target: target[i - 1] }); i--; }
  while (j > 0) { ops.push({ type: "extra", heard: heard[j - 1] }); j--; }
  return ops.reverse();
}

function evaluateShadow(heard) {
  try {
    const targetWords = shadowNormalize(shadowState.target);
    const heardWords = shadowNormalize(heard);
    if (!targetWords.length) return;

    const ops = alignShadowWords(targetWords, heardWords);
    let contentMatched = 0, contentTotal = 0, minor = 0, miss = 0, wrong = 0;

    const decorated = ops.map((o) => {
      if (o.type === "extra") return null;
      const isStop = SHADOW_STOPWORDS.has(o.target);
      if (!isStop) contentTotal++;

      const isMatch = o.type === "match" || (o.type === "sub" && shadowSameWord(o.target, o.heard));
      if (isMatch) {
        if (!isStop) contentMatched++;
        return { level: "ok", target: o.target };
      }
      if (isStop) { minor++; return { level: "minor", target: o.target }; }
      if (o.type === "miss") { miss++; return { level: "miss", target: o.target }; }
      wrong++;
      return { level: "wrong", target: o.target, heard: o.heard };
    }).filter(Boolean);

    const ratio = contentTotal ? contentMatched / contentTotal : 1;
    const stars = ratio >= 0.85 ? 3 : ratio >= 0.6 ? 2 : ratio >= 0.3 ? 1 : 0;

    const words = decorated.map((d) => {
      const title = d.level === "wrong" ? " 读成了「" + d.heard + "」" : (d.level === "miss" ? " 漏读了" : "");
      return '<span class="shadow-word shadow-' + d.level + '" data-w="' + shadowEscapeAttr(d.target) +
        '" title="' + shadowEscape(title) + ' 点一下听发音">' +
        shadowEscape(d.target) + "</span>";
    }).join(" ");

    const hint = stars === 3 ? "Perfect! 读得很清楚。"
      : stars === 2 ? "Good! 标出的词再读清楚一点。"
      : stars === 1 ? "差不多，先听一遍标准音再读。"
      : "别急，跟着标准音慢慢读。";

    const box = document.getElementById("shadowResult");
    if (box) {
      box.innerHTML =
        '<div class="shadow-stars">' + (stars ? "⭐".repeat(stars) : "·") + "</div>" +
        '<div class="shadow-words">' + words + "</div>" +
        '<div class="shadow-hint">' + hint + "</div>";
    }

    setShadowStatus("实词读对 " + contentMatched + " / " + Math.max(1, contentTotal) + " 个" +
      (miss + wrong ? "，标出的词再试一次" : "") + " · 可以点「听我的」回放");
    if (stars) saveShadowScore(stars);
  } catch (err) {
    setShadowStatus("评分出错，录音已保存，可以点「听我的」。");
  }
}

function shadowPlayMine() {
  if (!shadowState.audioUrl) return;
  try {
    if (shadowState.audioEl) { try { shadowState.audioEl.pause(); } catch (err) {} }
    const a = new Audio(shadowState.audioUrl);
    shadowState.audioEl = a;
    const p = a.play();
    if (p && p.catch) p.catch(() => setShadowStatus("回放失败，可能没录到声音。"));
  } catch (err) {
    setShadowStatus("回放失败。");
  }
}

// ==========================================
// FULL-STORY READING ASSESSMENT
//
// The child reads the whole article out loud; the browser recogniser is
// re-armed automatically every time it stops on a pause, so the transcript
// keeps growing without the child touching anything. When they tap
// "结束并评估" the whole transcript is aligned against the whole text.
// ==========================================
const FULLREAD_KEY = STORAGE_PREFIX + "fullread_scores";

let fullRead = {
  active: false,
  rec: null,
  restartTimer: null,
  uiTimer: null,
  transcript: "",
  interim: "",
  startedAt: 0,
  sentences: [],          // [{ text, p, s }]
  targetWords: [],        // flattened words
  sentenceOfWord: [],     // word index -> sentence index
  wordIsStop: [],         // word index -> bool
  stopRequested: false
};

function fullReadScores() {
  try { return JSON.parse(localStorage.getItem(FULLREAD_KEY) || "{}"); } catch (err) { return {}; }
}

function saveFullReadScore(storyId, stars) {
  const all = fullReadScores();
  if (!all[storyId] || all[storyId] < stars) {
    all[storyId] = stars;
    try { localStorage.setItem(FULLREAD_KEY, JSON.stringify(all)); } catch (err) {}
  }
}

function fullReadSetStatus(msg) {
  const el = document.getElementById("fullReadStatus");
  if (el) el.textContent = msg;
}

function fullReadBuildTargets(story) {
  const sentences = [];
  (story.paragraphs || []).forEach((pText, pIdx) => {
    splitSentences(pText).forEach((text, sIdx) => {
      sentences.push({ text: text, p: pIdx, s: sIdx });
    });
  });

  const targetWords = [];
  const sentenceOfWord = [];
  const wordIsStop = [];
  const expand = (w) => (SHADOW_EXPAND[w] ? SHADOW_EXPAND[w].split(" ") : [w]);

  sentences.forEach((sent, idx) => {
    shadowNormalize(sent.text).forEach((w) => {
      targetWords.push(w);
      sentenceOfWord.push(idx);
      expand(w).forEach((part) => {});
      wordIsStop.push(SHADOW_STOPWORDS.has(w));
    });
  });

  fullRead.sentences = sentences;
  fullRead.targetWords = targetWords;
  fullRead.sentenceOfWord = sentenceOfWord;
  fullRead.wordIsStop = wordIsStop;
}

function openFullRead() {
  const story = getStoryById(currentStoryId);
  if (!story) return;

  fullReadReset();
  fullReadBuildTargets(story);

  const panel = document.getElementById("fullReadPanel");
  if (panel) { panel.classList.add("open"); panel.classList.remove("compact"); }
  document.body.classList.remove("fullread-active");

  const titleEl = document.getElementById("fullReadTitle");
  if (titleEl) titleEl.textContent = story.title || "";
  const live = document.getElementById("fullReadLive");
  if (live) {
    live.classList.remove("listening");
    live.textContent = "点「开始朗读」，然后从头到尾把整篇读出来。中途停顿没关系，识别会自动接着听。";
  }
  const report = document.getElementById("fullReadReport");
  if (report) report.innerHTML = "";
  const timer = document.getElementById("fullReadTimer");
  if (timer) timer.textContent = "00:00 · 0 词";

  const startBtn = document.getElementById("fullReadStartBtn");
  const stopBtn = document.getElementById("fullReadStopBtn");
  const resumeBtn = document.getElementById("fullReadResumeBtn");
  if (startBtn) startBtn.style.display = "inline-flex";
  if (stopBtn) stopBtn.style.display = "none";
  if (resumeBtn) resumeBtn.style.display = "none";

  if (!shadowRecognitionSupported()) {
    fullReadSetStatus("这台设备不支持语音识别，没法做整篇评估。可以继续用单句的「录音对比」。");
    if (startBtn) startBtn.disabled = true;
    return;
  }
  if (startBtn) startBtn.disabled = false;

  const best = fullReadScores()[story.id] || 0;
  fullReadSetStatus(best ? "上次成绩 " + "⭐".repeat(best) + "，再来一次？" : "准备好就开始吧。");
}

function fullReadReset() {
  fullReadStopListening();
  fullRead.active = false;
  fullRead.stopRequested = false;
  fullRead.transcript = "";
  fullRead.interim = "";
  fullRead.startedAt = 0;
  clearInterval(fullRead.uiTimer);
  fullRead.uiTimer = null;
}

function closeFullRead() {
  fullReadReset();
  const panel = document.getElementById("fullReadPanel");
  if (panel) { panel.classList.remove("open"); panel.classList.remove("compact"); }
  document.body.classList.remove("fullread-active");
}

function startFullRead() {
  if (!shadowRecognitionSupported()) return;
  try { window.speechSynthesis.cancel(); } catch (err) {}

  fullRead.transcript = "";
  fullRead.interim = "";
  fullRead.active = true;
  fullRead.stopRequested = false;
  fullRead.startedAt = Date.now();

  const startBtn = document.getElementById("fullReadStartBtn");
  const stopBtn = document.getElementById("fullReadStopBtn");
  const resumeBtn = document.getElementById("fullReadResumeBtn");
  if (startBtn) startBtn.style.display = "none";
  if (resumeBtn) resumeBtn.style.display = "none";
  if (stopBtn) stopBtn.style.display = "inline-flex";

  const live = document.getElementById("fullReadLive");
  if (live) { live.textContent = ""; live.classList.add("listening"); }

  const panel = document.getElementById("fullReadPanel");
  if (panel) panel.classList.add("compact");
  document.body.classList.add("fullread-active");
  try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (err) {}

  fullReadSetStatus("正在听… 一直读下去，读完点「结束并评估」");
  fullReadStartTimer();
  fullReadListen();
}

function resumeFullRead() {
  if (!fullRead.active) { startFullRead(); return; }
  const resumeBtn = document.getElementById("fullReadResumeBtn");
  if (resumeBtn) resumeBtn.style.display = "none";
  fullReadSetStatus("继续听…");
  fullReadListen();
}

function fullReadStartTimer() {
  clearInterval(fullRead.uiTimer);
  fullRead.uiTimer = setInterval(() => {
    if (!fullRead.active) return;
    const secs = Math.floor((Date.now() - fullRead.startedAt) / 1000);
    const mm = String(Math.floor(secs / 60)).padStart(2, "0");
    const ss = String(secs % 60).padStart(2, "0");
    const words = shadowNormalize(fullRead.transcript).length;
    const el = document.getElementById("fullReadTimer");
    if (el) el.textContent = mm + ":" + ss + " · " + words + " 词";
    if (secs >= 600) finishFullRead();   // hard cap: 10 minutes
  }, 500);
}

function fullReadListen() {
  if (!fullRead.active) return;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec;
  try { rec = new SR(); } catch (err) {
    fullReadPauseForGesture("识别没能启动，点「继续」接着读。");
    return;
  }

  rec.lang = "en-US";
  rec.continuous = true;        // honoured on Chrome; iOS ignores it and stops on pauses
  rec.interimResults = true;
  rec.maxAlternatives = 1;

  rec.onresult = (ev) => {
    try {
      let interim = "";
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const r = ev.results[i];
        if (r.isFinal) fullRead.transcript += r[0].transcript + " ";
        else interim += r[0].transcript;
      }
      fullRead.interim = interim;
      fullReadRenderLive();
    } catch (err) {}
  };

  rec.onerror = (e) => {
    const code = e && e.error;
    if (code === "not-allowed" || code === "service-not-allowed") {
      fullRead.active = false;
      fullReadStopListening();
      fullReadSetStatus("麦克风或语音识别被拒绝，请在设置里允许后重开这个面板。");
      return;
    }
    // "no-speech" / "aborted" / "network" simply mean we re-arm below.
  };

  rec.onend = () => {
    if (!fullRead.active) return;
    clearTimeout(fullRead.restartTimer);
    fullRead.restartTimer = setTimeout(() => {
      if (!fullRead.active) return;
      fullReadListen();
    }, 260);
  };

  fullRead.rec = rec;
  try {
    rec.start();
  } catch (err) {
    fullReadPauseForGesture("识别需要你点一下才能继续。");
  }
}

function fullReadPauseForGesture(msg) {
  clearTimeout(fullRead.restartTimer);
  fullRead.active = true;
  const resumeBtn = document.getElementById("fullReadResumeBtn");
  const startBtn = document.getElementById("fullReadStartBtn");
  if (resumeBtn) resumeBtn.style.display = "inline-flex";
  if (startBtn) startBtn.style.display = "none";
  fullReadSetStatus(msg);
}

function fullReadStopListening() {
  clearTimeout(fullRead.restartTimer);
  const rec = fullRead.rec;
  fullRead.rec = null;
  if (rec) {
    try { rec.onresult = null; rec.onerror = null; rec.onend = null; rec.stop(); } catch (err) {}
  }
}

function fullReadRenderLive() {
  const live = document.getElementById("fullReadLive");
  if (!live) return;
  const full = (fullRead.transcript + " " + fullRead.interim).trim();
  if (!full) return;
  live.textContent = full.length > 800 ? "…" + full.slice(-800) : full;
  live.scrollTop = live.scrollHeight;
}

function finishFullRead() {
  if (!fullRead.active && !fullRead.transcript) {
    closeFullRead();
    return;
  }
  fullRead.active = false;
  clearInterval(fullRead.uiTimer);
  fullReadStopListening();

  const panel = document.getElementById("fullReadPanel");
  if (panel) panel.classList.remove("compact");
  document.body.classList.remove("fullread-active");

  const heard = (fullRead.transcript + " " + fullRead.interim).trim();
  const stopBtn = document.getElementById("fullReadStopBtn");
  if (stopBtn) stopBtn.style.display = "none";

  const live = document.getElementById("fullReadLive");
  if (live) live.classList.remove("listening");

  if (!heard) {
    fullReadSetStatus("没有识别到内容。检查麦克风，再试一次。");
    const startBtn = document.getElementById("fullReadStartBtn");
    if (startBtn) startBtn.style.display = "inline-flex";
    return;
  }
  evaluateFullRead(heard);
}

// Global word alignment. Uses a Uint8 direction matrix so a 1000+ word text
// does not blow up memory.
function alignWordsBig(target, heard) {
  const n = target.length, m = heard.length;
  const w = m + 1;
  const dir = new Uint8Array((n + 1) * w);
  let prev = new Int32Array(w);
  let cur = new Int32Array(w);
  for (let j = 0; j <= m; j++) prev[j] = j;

  for (let i = 1; i <= n; i++) {
    cur[0] = i;
    dir[i * w] = 1;
    const ti = target[i - 1];
    for (let j = 1; j <= m; j++) {
      const cost = ti === heard[j - 1] ? 0 : 1;
      const diag = prev[j - 1] + cost;
      const up = prev[j] + 1;
      const left = cur[j - 1] + 1;
      let best = diag, code = 3;
      if (up <= best) { best = up; code = 1; }
      if (left < best) { best = left; code = 2; }
      cur[j] = best;
      dir[i * w + j] = code;
    }
    const tmp = prev; prev = cur; cur = tmp;
  }

  const ops = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0) {
      const code = dir[i * w + j];
      if (code === 3) {
        ops.push({ type: target[i - 1] === heard[j - 1] ? "match" : "sub", ti: i - 1, target: target[i - 1], heard: heard[j - 1] });
        i--; j--;
      } else if (code === 1) {
        ops.push({ type: "miss", ti: i - 1, target: target[i - 1] });
        i--;
      } else {
        ops.push({ type: "extra", heard: heard[j - 1] });
        j--;
      }
    } else if (i > 0) {
      ops.push({ type: "miss", ti: i - 1, target: target[i - 1] });
      i--;
    } else {
      ops.push({ type: "extra", heard: heard[j - 1] });
      j--;
    }
  }
  return ops.reverse();
}

function evaluateFullRead(heardText) {
  try {
    const heardWords = shadowNormalize(heardText);
    const ops = alignWordsBig(fullRead.targetWords, heardWords);

    // per-sentence tallies
    const sTotal = new Array(fullRead.sentences.length).fill(0);
    const sHit = new Array(fullRead.sentences.length).fill(0);
    for (let k = 0; k < fullRead.targetWords.length; k++) {
      if (!fullRead.wordIsStop[k]) sTotal[fullRead.sentenceOfWord[k]]++;
    }

    let contentTotal = 0, contentMatched = 0, wrong = 0, missed = 0;
    ops.forEach((o) => {
      if (o.type === "extra") return;
      const si = fullRead.sentenceOfWord[o.ti];
      const isStop = fullRead.wordIsStop[o.ti];
      if (!isStop) contentTotal++;

      const ok = o.type === "match" || (o.type === "sub" && shadowSameWord(o.target, o.heard));
      if (ok) {
        if (!isStop) { contentMatched++; sHit[si]++; }
      } else if (o.type === "miss") {
        if (!isStop) { missed++; sTotal[si] = Math.max(sTotal[si], 1); }
      } else {
        if (!isStop) { wrong++; sTotal[si] = Math.max(sTotal[si], 1); }
      }
    });

    const ratio = contentTotal ? contentMatched / contentTotal : 0;
    const stars = ratio >= 0.85 ? 3 : ratio >= 0.6 ? 2 : ratio >= 0.3 ? 1 : 0;

    // sentences that need another go
    const weak = [];
    fullRead.sentences.forEach((sent, idx) => {
      const tot = sTotal[idx];
      if (tot < 2) return;                       // too short to judge
      const r = sHit[idx] / tot;
      if (r < 0.6) weak.push({ sent: sent, ratio: r });
    });
    weak.sort((a, b) => a.ratio - b.ratio);
    const pick = weak.slice(0, 6);

    const listHtml = pick.length
      ? '<ul class="fullread-list">' + pick.map((w) =>
          '<li><button class="jr-play" onclick="speakSentence(' + w.sent.p + ',' + w.sent.s + ')">▶</button>' +
          '<span>' + shadowEscape(w.sent.text) + '</span></li>').join("") + "</ul>"
      : "";

    const summary = "实词正确率 " + Math.round(ratio * 100) + "%（" + contentMatched + " / " + contentTotal + "）";
    const hint = stars === 3 ? "整篇读得很流利，继续保持！"
      : stars === 2 ? "整体不错，下面这几句再读一遍会更稳。"
      : stars === 1 ? "读完了一半以上，慢一点、把词读清楚。"
      : "先跟着标准音读两遍，再整篇来一次。";

    const box = document.getElementById("fullReadReport");
    if (box) {
      box.innerHTML =
        '<div class="shadow-stars">' + (stars ? "⭐".repeat(stars) : "·") + "</div>" +
        '<div class="fullread-summary">' + summary + "</div>" +
        '<div class="shadow-hint">' + hint + "</div>" +
        listHtml;
    }

    fullReadSetStatus("漏读 " + missed + " 个实词，读错 " + wrong + " 个实词");
    saveFullReadScore(currentStoryId, stars);

    const startBtn = document.getElementById("fullReadStartBtn");
    if (startBtn) { startBtn.style.display = "inline-flex"; startBtn.textContent = "▶︎ 再读一次"; }
  } catch (err) {
    fullReadSetStatus("评估出错，请再试一次。");
  }
}

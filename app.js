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
  }
});

function initVoices() {
  if (!window.speechSynthesis) return;
  synthVoices = window.speechSynthesis.getVoices();
}

function getBestVoice() {
  if (!window.speechSynthesis) return null;
  if (!synthVoices.length) {
    synthVoices = window.speechSynthesis.getVoices();
  }
  if (!synthVoices || !synthVoices.length) return null;

  // On iOS, preferred voices are Samantha, Daniel, Aaron, Fred, Siri, or any en-US voice
  const preferredNames = ["Samantha", "Google US English", "Victoria", "Karen", "Daniel", "Zira", "Jenny", "Ava", "Siri", "English"];
  for (const name of preferredNames) {
    const found = synthVoices.find(v => v.lang && v.lang.startsWith("en") && v.name.toLowerCase().includes(name.toLowerCase()));
    if (found) return found;
  }
  return synthVoices.find(v => v.lang && v.lang.startsWith("en")) || null;
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

function renderStoryContent(story) {
  const container = document.getElementById("storyContentArea");
  container.innerHTML = "";

  const vocabWords = (story.vocabulary || []).map(v => v.word.toLowerCase());

  story.paragraphs.forEach((pText, pIndex) => {
    const pEl = document.createElement("p");
    pEl.className = "story-paragraph";
    pEl.id = `para-${pIndex}`;

    // Split text into words while keeping punctuation intact
    const tokens = pText.split(/(\s+)/);

    tokens.forEach((token, tIndex) => {
      if (/^\s+$/.test(token)) {
        pEl.appendChild(document.createTextNode(token));
        return;
      }

      // Strip punctuation to check vocabulary match
      const cleanWord = token.replace(/^[^\w]+|[^\w]+$/g, "").toLowerCase();
      const isVocab = vocabWords.includes(cleanWord);

      const span = document.createElement("span");
      span.textContent = token;
      span.className = isVocab ? "vocab-highlight" : "story-word";
      span.id = `w-${pIndex}-${tIndex}`;

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

      pEl.appendChild(span);
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
  const queue = [];

  // Break text into sentences so iOS Safari never cuts off or times out
  story.paragraphs.forEach((pText, pIdx) => {
    const sentences = pText.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [pText];
    sentences.forEach(s => {
      const clean = s.trim();
      if (clean) {
        queue.push({ text: clean, pIndex: pIdx });
      }
    });
  });

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
  const utt = new SpeechSynthesisUtterance(item.text);
  utt.lang = "en-US"; // MANDATORY FOR IOS SAFARI
  utt.rate = currentSpeed;
  utt.pitch = 1.05;
  utt.volume = 1.0;

  const voice = getBestVoice();
  if (voice) utt.voice = voice;

  // Highlight active paragraph
  highlightParagraph(item.pIndex);

  utt.onend = () => {
    currentSentenceIndex++;
    if (isSpeaking) {
      speakNextSentence();
    }
  };

  utt.onerror = (e) => {
    console.warn("Speech error:", e);
    currentSentenceIndex++;
    if (isSpeaking) {
      speakNextSentence();
    }
  };

  window.speechSynthesis.speak(utt);
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
  utt.lang = "en-US"; // MANDATORY FOR IOS SAFARI
  utt.rate = Math.max(0.7, currentSpeed * 0.95);
  utt.pitch = 1.0;
  utt.volume = 1.0;

  const voice = getBestVoice();
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

// stories_nce2.js - New Concept English Book 2 (96 lessons: Lesson 1 to Lesson 96)
// Separate 'nce2' track so it does not disturb the 140-day daily reading track.

if (typeof window !== 'undefined' && !window.STORIES_DATA) {
  window.STORIES_DATA = [];
}
var STORIES_DATA = (typeof window !== 'undefined' ? window.STORIES_DATA : (typeof STORIES_DATA !== 'undefined' ? STORIES_DATA : []));

const NCE2_STORIES = [
  {
    "id": 2001,
    "day": 1,
    "lessonNum": "1",
    "week": 1,
    "track": "nce2",
    "title": "L1: A private conversation 私人谈话",
    "coverEmoji": "🎭",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 101,
    "intro": "🎯 课前导读问题：Why did the writer complain to the people behind him?\n📌 语法与句型重点：【一般过去时 (Past Simple Tense)】主语 + 动词过去式 — 用于描述过去发生的事件、动作或状态。 例：Last week I went to the theatre. (上周我去了剧院。) ｜ 【情态动词 could 的用法】主语 + could/could not + 动词原形 — 表示过去能够或不能做某事，用于否定句时表示无法忍受。 例：I could not hear the actors. (我听不到演员的声音。)\n💬 核心短语：“turn round”（转身；扭转身体）；“pay attention”（注意；关注）；“in the end”（最后；终于）",
    "paragraphs": [
      "Last week I went to the theatre. I had a very good seat. The play was very interesting. I did not enjoy it.",
      "A young man and a young woman were sitting behind me. They were talking loudly. I got very angry. I could not hear the actors.",
      "I turned round. I looked at the man and the woman angrily. They did not pay any attention. In the end, I could not bear it.",
      "I turned round again. 'I can't hear a word!' I said angrily.",
      "'It's none of your business,' the young man said rudely. 'This is a private conversation!'"
    ],
    "vocabulary": [
      {
        "word": "theatre",
        "syllables": "theatre",
        "phonetic": "/ˈθɪətə/",
        "definition": "noun. 剧院；戏院（指表演戏剧、电影等的场所）",
        "example": "Last week I went to the theatre.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "seat",
        "syllables": "seat",
        "phonetic": "/siːt/",
        "definition": "noun. 座位（指剧院、电影院等场所的座位）",
        "example": "I had a very good seat.",
        "emoji": "✨",
        "longman": [
          "a place where you can sit, especially one in a vehicle or one from which you watch a performance, sports event etc",
          "a position as an elected member of a government, or as a member of a group that makes official decisions"
        ]
      },
      {
        "word": "play",
        "syllables": "play",
        "phonetic": "/pleɪ/",
        "definition": "noun. 戏剧；表演（指在剧院上演的戏剧作品）",
        "example": "The play was very interesting.",
        "emoji": "✨",
        "longman": [
          "when children play, they do things that they enjoy, often with other people or with toys",
          "to take part or compete in a game or sport"
        ]
      },
      {
        "word": "interesting",
        "syllables": "interesting",
        "phonetic": "/ˈɪntrəstɪŋ/",
        "definition": "adjective. 有趣的；引起兴趣的（描述事物令人感兴趣）",
        "example": "The play was very interesting.",
        "emoji": "✨",
        "longman": [
          "if something is interesting, you give it your attention because it seems unusual or exciting or provides information that you did not know about",
          "keeping your attention and making you want to know more"
        ]
      },
      {
        "word": "behind",
        "syllables": "behind",
        "phonetic": "/bɪˈhaɪnd/",
        "definition": "preposition. 在...后面（表示位置关系）",
        "example": "A young man and a young woman were sitting behind me.",
        "emoji": "✨",
        "longman": [
          "at or towards the back of a thing or person",
          "not as successful or not having made as much progress as someone or something else"
        ]
      },
      {
        "word": "loudly",
        "syllables": "loudly",
        "phonetic": "/ˈlaʊdli/",
        "definition": "adverb. 大声地（描述说话或发出声音的音量）",
        "example": "They were talking loudly.",
        "emoji": "✨",
        "longman": [
          "making a lot of noise",
          "someone who is loud talks too loudly and confidently"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“上周我去了剧院。”（主语 + 动词过去式 + 时间/地点）？",
        "options": [
          "Last week I went to the theatre.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Last week I went to the theatre.”（上周我去了剧院。），重点掌握句型：主语 + 动词过去式 + 时间/地点。"
      },
      {
        "question": "语法要点【一般过去时 (Past Simple Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "Last week I went to the theatre.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Last week I went to the theatre.”（上周我去了剧院。）展示了本课重点语法【一般过去时 (Past Simple Tense)】：表示过去某一时间发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'theatre' (/ˈθɪətə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 剧院；戏院"
        ],
        "answerIndex": 2,
        "explanation": "单词 'theatre' 的意思是：noun. 剧院；戏院（指表演戏剧、电影等的场所）。"
      }
    ],
    "funPrompt": "读完《A private conversation》后，试着用自己的话回答课前问题：Why did the writer complain to the people behind him?"
  },
  {
    "id": 2002,
    "day": 2,
    "lessonNum": "2",
    "week": 1,
    "track": "nce2",
    "title": "L2: Breakfast or lunch? 早餐还是午餐？",
    "coverEmoji": "🍳",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 96,
    "intro": "🎯 课前导读问题：Why was the writer's aunt surprised?\n📌 语法与句型重点：【现在进行时 (Present Continuous Tense)】主语 + am/is/are + 动词-ing — 用于描述正在进行的动作，常与now, just, right now等时间状语连用。 例：I'm having breakfast. (我正在吃早餐。) ｜ 【一般现在时 (Present Simple Tense)】主语 + 动词原形（第三人称单数要加-s/-es） — 用于描述经常性或习惯性的动作，常与always, often, sometimes等频度副词连用。 例：I never get up early on Sundays. (我星期天从不在早起。)\n💬 核心短语：“get up early”（表示在平常或预期的时间之前起床）；“stay in bed”（表示继续躺在床上，通常指睡懒觉）；“look out of”（表示从窗户等向外看）",
    "paragraphs": [
      "It was Sunday. I never get up early on Sundays. I sometimes stay in bed until lunchtime. Last Sunday I got up very late.",
      "I looked out of the window. It was dark outside. 'What a day!' I thought.",
      "'It's raining again.' Just then, the telephone rang. It was my aunt Lucy. 'I've just arrived by train,' she said.",
      "'I'm coming to see you.'",
      "'But I'm still having breakfast,' I said.",
      "'What are you doing?' she asked.",
      "'I'm having breakfast,' I repeated.",
      "'Dear me,' she said. 'Do you always get up so late? It's one o'clock!'"
    ],
    "vocabulary": [
      {
        "word": "Sunday",
        "syllables": "Sunday",
        "phonetic": "/ˈsʌndeɪ/",
        "definition": "noun. 星期日；星期天（一周的第一天，通常是休息日）",
        "example": "It was Sunday.",
        "emoji": "✨",
        "longman": [
          "the day between Saturday and Monday"
        ]
      },
      {
        "word": "early",
        "syllables": "early",
        "phonetic": "/ˈɜːrli/",
        "definition": "adjective. 早的；提早的（表示时间比一般或预期早）",
        "example": "I never get up early on Sundays.",
        "emoji": "✨",
        "longman": [
          "in the first part of a period of time, event, or process",
          "arriving or happening before the usual or expected time"
        ]
      },
      {
        "word": "sometimes",
        "syllables": "sometimes",
        "phonetic": "/ˈsʌmtaɪmz/",
        "definition": "adverb. 有时；间或（表示动作或状态偶尔发生）",
        "example": "I sometimes stay in bed until lunchtime.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "bed",
        "syllables": "bed",
        "phonetic": "/bed/",
        "definition": "noun. 床（用于睡觉或休息的地方）",
        "example": "I sometimes stay in bed until lunchtime.",
        "emoji": "✨",
        "longman": [
          "a piece of furniture that you sleep on",
          "used to refer to having sex",
          "the flat ground at the bottom of a river , lake , or sea"
        ]
      },
      {
        "word": "lunchtime",
        "syllables": "lunchtime",
        "phonetic": "/ˈlʌntʃtaɪm/",
        "definition": "noun. 午餐时间（吃午饭的时间，通常在中午12点左右）",
        "example": "I sometimes stay in bed until lunchtime.",
        "emoji": "✨",
        "longman": [
          "the time in the middle of the day when people usually eat their lunch"
        ]
      },
      {
        "word": "window",
        "syllables": "window",
        "phonetic": "/ˈwɪndoʊ/",
        "definition": "noun. 窗户（建筑物中用于透光和通风的开口）",
        "example": "I looked out of the window.",
        "emoji": "✨",
        "longman": [
          "a space or an area of glass in the wall of a building or vehicle that lets in light",
          "one of the separate areas on a computer screen where different programs are operating"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“已经一点钟了！”（It's + 时间.）？",
        "options": [
          "It's one o'clock!",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“It's one o'clock!”（已经一点钟了！），重点掌握句型：It's + 时间.。"
      },
      {
        "question": "语法要点【现在进行时 (Present Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + am/is/are + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "I'm having breakfast.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I'm having breakfast.”（我正在吃早餐。）展示了本课重点语法【现在进行时 (Present Continuous Tense)】：表示说话时正在进行的动作或当前阶段正在发生的动作。"
      },
      {
        "question": "What does the word 'Sunday' (/ˈsʌndeɪ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 星期日；星期天"
        ],
        "answerIndex": 2,
        "explanation": "单词 'Sunday' 的意思是：noun. 星期日；星期天（一周的第一天，通常是休息日）。"
      }
    ],
    "funPrompt": "读完《Breakfast or lunch?》后，试着用自己的话回答课前问题：Why was the writer's aunt surprised?"
  },
  {
    "id": 2003,
    "day": 3,
    "lessonNum": "3",
    "week": 1,
    "track": "nce2",
    "title": "L3: Please send me a card 请给我寄一张明信片",
    "coverEmoji": "📮",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 98,
    "intro": "🎯 课前导读问题：How many cards did the writer send?\n📌 语法与句型重点：【一般过去时 (Past Simple Tense)】主语 + 动词过去式 + 其他 — 用于描述过去发生的事件，常与yesterday, last week, last summer等时间状语连用。 例：I went to Italy last summer. (去年夏天我去了意大利。) ｜ 【but表示转折的用法】句子1 + but + 句子2 — but后面的分句语气转折，常译为但是、然而。 例：I spent the whole day in my room, but I did not write a single card! (我在房间里待了一整天，但我一张明信片都没写！)\n💬 核心短语：“a few words of”（表示会说某种语言的几个词）；“thought about”（think about的过去式，表示思考、考虑）；“made a big decision”（做出重大决定）",
    "paragraphs": [
      "Postcards always spoil my holidays. Last summer, I went to Italy. I visited museums and sat in public gardens. A friendly waiter taught me a few words of Italian.",
      "Then he lent me a book. I read a few lines, but I did not understand a word. Everyday I thought about postcards. My holidays passed quickly, but I did not send cards to my friends.",
      "On the last day I made a big decision. I got up early and bought thirty-seven cards. I spent the whole day in my room, but I did not write a single card!"
    ],
    "vocabulary": [
      {
        "word": "spoil",
        "syllables": "spoil",
        "phonetic": "/spɔɪl/",
        "definition": "verb. 破坏，使索然无味（指破坏某事物的完美或乐趣）",
        "example": "Postcards always spoil my holidays.",
        "emoji": "✨",
        "longman": [
          "to have a bad effect on something so that it is no longer attractive, enjoyable, useful etc",
          "to give a child everything they want, or let them do whatever they want, often with the result that they behave badly"
        ]
      },
      {
        "word": "holiday",
        "syllables": "holiday",
        "phonetic": "/ˈhɒlədeɪ/",
        "definition": "noun. 假期，假日（英式英语多用holiday，美式英语多用vacation）",
        "example": "Postcards always spoil my holidays.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "museum",
        "syllables": "museum",
        "phonetic": "/mjuˈziːəm/",
        "definition": "noun. 博物馆（指收藏和展示艺术品、历史文物等的场所）",
        "example": "I visited museums and sat in public gardens.",
        "emoji": "✨",
        "longman": [
          "a building where important cultural"
        ]
      },
      {
        "word": "friendly",
        "syllables": "friendly",
        "phonetic": "/ˈfrendli/",
        "definition": "adj. 友好的，友善的（描述人的性格特征，意为kind）",
        "example": "A friendly waiter taught me a few words of Italian.",
        "emoji": "✨",
        "longman": [
          "behaving towards someone in a way that shows you like them and are ready to talk to them or help them",
          "not at war with your own country, or not opposing you"
        ]
      },
      {
        "word": "waiter",
        "syllables": "waiter",
        "phonetic": "/ˈweɪtə(r)/",
        "definition": "noun. 服务员，侍者（通常指餐厅里的男服务员）",
        "example": "A friendly waiter taught me a few words of Italian.",
        "emoji": "✨",
        "longman": [
          "a man who serves food and drink at the tables in a restaurant"
        ]
      },
      {
        "word": "lend",
        "syllables": "lend",
        "phonetic": "/lend/",
        "definition": "verb. 借出，把…借给（lend sb sth = lend sth to sb，表示把东西借给别人）",
        "example": "",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我参观了博物馆，还在公共花园里坐着。”（主语 + 动词过去式 + 时间/地点）？",
        "options": [
          "I visited museums and sat in public gardens.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I visited museums and sat in public gardens.”（我参观了博物馆，还在公共花园里坐着。），重点掌握句型：主语 + 动词过去式 + 时间/地点。"
      },
      {
        "question": "语法要点【一般过去时 (Past Simple Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式 + 其他）？",
        "options": [
          "He have go to school tomorrow.",
          "I went to Italy last summer.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I went to Italy last summer.”（去年夏天我去了意大利。）展示了本课重点语法【一般过去时 (Past Simple Tense)】：表示过去发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'spoil' (/spɔɪl/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "verb. 破坏，使索然无味"
        ],
        "answerIndex": 2,
        "explanation": "单词 'spoil' 的意思是：verb. 破坏，使索然无味（指破坏某事物的完美或乐趣）。"
      }
    ],
    "funPrompt": "读完《Please send me a card》后，试着用自己的话回答课前问题：How many cards did the writer send?"
  },
  {
    "id": 2004,
    "day": 4,
    "lessonNum": "4",
    "week": 1,
    "track": "nce2",
    "title": "L4: An exciting trip 激动人心的旅行",
    "coverEmoji": "✈️",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 93,
    "intro": "🎯 课前导读问题：Why is Tim finding this trip exciting?\n📌 语法与句型重点：【现在完成时 (Present Perfect Tense) - 持续性】主语 + have/has + been + 地点/介词短语 + for/since + 时间段 — 用于描述过去开始并持续到现在的情况，常与表示一段时间的时间状语连用。 例：He has been there for six months. (他在那里已经六个月了。) ｜ 【现在完成时 (Present Perfect Tense) - 经历】主语 + have/has + 过去分词 + (时间/地点状语) — 用于描述过去的经历对现在的影响，或表示某动作已完成。 例：He has already visited many places. (他已经参观了很多地方。)\n💬 核心短语：“receive a letter”（收到一封信）；“be in Australia”（在澳大利亚）；“be working for”（在...工作，为...效力）",
    "paragraphs": [
      "I have just received a letter from my brother, Tim. He is in Australia. He has been there for six months. Tim is an engineer.",
      "He is working for a big firm and he has already visited a great number of different places in Australia. He has just bought an Australian car and has gone to Alice springs, a small town in the centre of Australia. He will soon visit Darwin. From there, he will fly to Perth.",
      "My brother has never been abroad before, so he is fending this trip very exciting."
    ],
    "vocabulary": [
      {
        "word": "receive",
        "syllables": "receive",
        "phonetic": "/rɪˈsiːv/",
        "definition": "verb. 收到，接到（及物动词，指收到某物）",
        "example": "I have just received a letter from my brother, Tim.",
        "emoji": "✨",
        "longman": [
          "to be given something",
          "to get a letter, message, or telephone call, or something which someone has sent you"
        ]
      },
      {
        "word": "letter",
        "syllables": "letter",
        "phonetic": "/ˈletə(r)/",
        "definition": "noun. 信，函件（指书面通信）",
        "example": "I have just received a letter from my brother, Tim.",
        "emoji": "✨",
        "longman": [
          "a written or printed message that is usually put in an envelope and sent by mail",
          "a sign in writing or printing that represents a speech sound"
        ]
      },
      {
        "word": "brother",
        "syllables": "brother",
        "phonetic": "/ˈbrʌðə(r)/",
        "definition": "noun. 兄弟（指同父母或同父异母/同母异父的男性）",
        "example": "I have just received a letter from my brother, Tim.",
        "emoji": "✨",
        "longman": [
          "a male who has the same parents as you",
          "a word meaning a black man, used especially by other black men"
        ]
      },
      {
        "word": "Australia",
        "syllables": "Australia",
        "phonetic": "/ɒˈstreɪliə/",
        "definition": "noun. 澳大利亚（国家名称）",
        "example": "He is in Australia.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "engineer",
        "syllables": "engineer",
        "phonetic": "/ˌendʒɪˈnɪə(r)/",
        "definition": "noun. 工程师（指从事工程设计的人）",
        "example": "Tim is an engineer.",
        "emoji": "✨",
        "longman": [
          "someone whose job is to design or build roads, bridges, machines etc",
          "someone whose job is to take care of the engines on a ship or aircraft"
        ]
      },
      {
        "word": "firm",
        "syllables": "firm",
        "phonetic": "/fɜːm/",
        "definition": "noun. 公司，商行（指商业机构或企业）",
        "example": "He is working for a big firm and he has already visited a great number of different places in Australia.",
        "emoji": "✨",
        "longman": [
          "a business or company, especially a small one",
          "not completely hard, but not soft , and not easy to bend into a different shape",
          "strongly fixed in position, and not likely to move"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我刚收到哥哥的一封信。”（I have just + 过去分词）？",
        "options": [
          "I have just received a letter from my brother.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I have just received a letter from my brother.”（我刚收到哥哥的一封信。），重点掌握句型：I have just + 过去分词。"
      },
      {
        "question": "语法要点【现在完成时 (Present Perfect Tense) - 持续性】：下列哪个例句符合本课语法结构（主语 + have/has + been + 地点/介词短语 + for/since + 时间段）？",
        "options": [
          "He have go to school tomorrow.",
          "He has been there for six months.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He has been there for six months.”（他在那里已经六个月了。）展示了本课重点语法【现在完成时 (Present Perfect Tense) - 持续性】：现在完成时表示过去发生的动作或状态持续到现在，常与for和since连用。结构为：主语 + have/has + been + 介词短语/过去分词短语。"
      },
      {
        "question": "What does the word 'receive' (/rɪˈsiːv/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "verb. 收到，接到"
        ],
        "answerIndex": 2,
        "explanation": "单词 'receive' 的意思是：verb. 收到，接到（及物动词，指收到某物）。"
      }
    ],
    "funPrompt": "读完《An exciting trip》后，试着用自己的话回答课前问题：Why is Tim finding this trip exciting?"
  },
  {
    "id": 2005,
    "day": 5,
    "lessonNum": "5",
    "week": 1,
    "track": "nce2",
    "title": "L5: No wrong numbers 无错号之虞",
    "coverEmoji": "🕊️",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 95,
    "intro": "🎯 课前导读问题：What does 'No wrong numbers' mean?\n📌 语法与句型重点：【现在完成时 (Present Perfect Tense)】主语 + have/has + 过去分词 — 用于描述过去发生并持续到现在的情况，或表示经验、成就等。 例：Mr. Scott has just bought another garage. (斯科特先生刚买了另一个车库。) ｜ 【has just的用法】主语 + has just + 过去分词 — 表示最近的过去发生的动作。 例：He has just bought twelve pigeons. (他刚买了十二只鸽子。)\n💬 核心短语：“up to now”（迄今为止；到现在为止，常与现在完成时连用）；“a great many”（许多；大量，后接可数名词复数）；“carry a message”（传递消息；送信）",
    "paragraphs": [
      "Mr.James Scott has a garage in Silbury and now he has just bought another garage in Pinhurst. Pinhurst is only five miles from Silbury, but Mr. Scott cannot get a telephone for his new garage, so he has just bought twelve pigeons. Yesterday, a pigeon carried the first message from Pinhurst to Silbury. The bird covered the distance in three minutes.",
      "Up to now, Mr.Scott has sent a great many requests for spare parts and other urgent messages from one garage to the other. In this way, he has begun his own private 'telephone' service."
    ],
    "vocabulary": [
      {
        "word": "garage",
        "syllables": "garage",
        "phonetic": "/ˈɡærɑːʒ/",
        "definition": "noun. 车库；汽车修理厂（指停放汽车或进行汽车修理的建筑物）",
        "example": "Mr.James Scott has a garage in Silbury and now he has just bought another garage in Pinhurst.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "pigeon",
        "syllables": "pigeon",
        "phonetic": "/ˈpɪdʒɪn/",
        "definition": "noun. 鸽子（一种常见的鸟类，文中用于传递信息）",
        "example": "Pinhurst is only five miles from Silbury, but Mr. Scott cannot get a telephone for his new garage, so he has just bought twelve pigeons.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "message",
        "syllables": "message",
        "phonetic": "/ˈmesɪdʒ/",
        "definition": "noun. 消息；口信（指传递的信息或通讯内容）",
        "example": "Yesterday, a pigeon carried the first message from Pinhurst to Silbury.",
        "emoji": "✨",
        "longman": [
          "a spoken or written piece of information that you send to another person or leave for them",
          "the main or most important idea that someone is trying to tell people about in a film, book, speech etc"
        ]
      },
      {
        "word": "distance",
        "syllables": "distance",
        "phonetic": "/ˈdɪstəns/",
        "definition": "noun. 距离（指两点之间的空间距离）",
        "example": "The bird covered the distance in three minutes.",
        "emoji": "✨",
        "longman": [
          "the amount of space between two places or things",
          "used to talk about a situation when something is far away from you in space or time"
        ]
      },
      {
        "word": "cover",
        "syllables": "cover",
        "phonetic": "/ˈkʌvər/",
        "definition": "verb. 覆盖；穿越；行过（距离）（表示走过或完成某段距离）",
        "example": "The bird covered the distance in three minutes.",
        "emoji": "✨",
        "longman": [
          "to put something over or be over something in order to hide, close, or protect it",
          "if something covers a surface, it forms a layer over it"
        ]
      },
      {
        "word": "urgent",
        "syllables": "urgent",
        "phonetic": "/ˈɜːrdʒənt/",
        "definition": "adj. 紧急的；急迫的（形容需要立即处理的事情）",
        "example": "Up to now, Mr.Scott has sent a great many requests for spare parts and other urgent messages from one garage to the other.",
        "emoji": "✨",
        "longman": [
          "very important and needing to be dealt with immediately",
          "done or said in a way that shows that you want something to be dealt with immediately"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“斯科特先生刚买了另一个车库。”（主语 + has/have + just + 过去分词）？",
        "options": [
          "Mr. Scott has just bought another garage.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Mr. Scott has just bought another garage.”（斯科特先生刚买了另一个车库。），重点掌握句型：主语 + has/have + just + 过去分词。"
      },
      {
        "question": "语法要点【现在完成时 (Present Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + have/has + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "Mr. Scott has just bought another garage.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Mr. Scott has just bought another garage.”（斯科特先生刚买了另一个车库。）展示了本课重点语法【现在完成时 (Present Perfect Tense)】：表示过去发生的动作或存在的状态，对现在造成影响或结果。常与up to now, already, yet等时间状语连用。。"
      },
      {
        "question": "What does the word 'garage' (/ˈɡærɑːʒ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 车库；汽车修理厂"
        ],
        "answerIndex": 2,
        "explanation": "单词 'garage' 的意思是：noun. 车库；汽车修理厂（指停放汽车或进行汽车修理的建筑物）。"
      }
    ],
    "funPrompt": "读完《No wrong numbers》后，试着用自己的话回答课前问题：What does 'No wrong numbers' mean?"
  },
  {
    "id": 2006,
    "day": 6,
    "lessonNum": "6",
    "week": 1,
    "track": "nce2",
    "title": "L6: Percy Buttons 珀西.巴顿斯",
    "coverEmoji": "🧥",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 104,
    "intro": "🎯 课前导读问题：Who is Percy Buttons?\n📌 语法与句型重点：【一般过去时 (Simple Past Tense)】主语 + 动词过去式 — 用于描述过去发生的事情，动词需要变成过去式。 例：Yesterday a beggar knocked at my door. (昨天一个乞丐敲了我的门。) ｜ 【一般过去时的否定句和疑问句】否定句：主语 + did not (didn't) + 动词原形；疑问句：Did + 主语 + 动词原形？ — 当句中有实义动词的过去式时，否定句和疑问句需要借助 did。 例：Did he ask for a meal? (他要了一顿饭吗？)\n💬 核心短语：“knock at the door”（敲门，表示有人来访时敲门的动作）；“ask for”（请求；要求，表示向他人要某物或做某事）；“in return (for)”（作为（...的）回报，常用于表示交换或报答）",
    "paragraphs": [
      "I have just moved to a house in Bridge Street. Yesterday a beggar knocked at my door. He asked me for a meal and a glass of beer. In return for this, the beggar stood on his head and sang songs.",
      "I gave him a meal. He ate the food and drank the beer. Then he put a piece of cheese in his pocket and went away. Later a neighbour told me about him.",
      "Everybody knows him. His name is Percy Buttons. He calls at every house in the street once a month and always asks for a meal and a glass of beer."
    ],
    "vocabulary": [
      {
        "word": "beggar",
        "syllables": "beggar",
        "phonetic": "/ˈbeɡə(r)/",
        "definition": "noun. 乞丐（指以乞讨为生的人）",
        "example": "Yesterday a beggar knocked at my door.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "knock",
        "syllables": "knock",
        "phonetic": "/nɒk/",
        "definition": "verb. 敲；击（常与 at 或 on 搭配使用，表示敲门或敲窗等动作）",
        "example": "Yesterday a beggar knocked at my door.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "meal",
        "syllables": "meal",
        "phonetic": "/miːl/",
        "definition": "noun. 饭；一餐（指早餐、午餐或晚餐等正餐）",
        "example": "He asked me for a meal and a glass of beer.",
        "emoji": "✨",
        "longman": [
          "an occasion when you eat food, for example breakfast or dinner, or the food that you eat on that occasion",
          "grain that has been crushed into a powder, for making flour or animal food"
        ]
      },
      {
        "word": "glass",
        "syllables": "glass",
        "phonetic": "/ɡlɑːs/",
        "definition": "noun. 玻璃杯；一杯（的量）（常用 glass of 表示几杯，如 a glass of beer）",
        "example": "He asked me for a meal and a glass of beer.",
        "emoji": "✨",
        "longman": [
          "a transparent solid substance used for making windows , bottles etc",
          "a container used for drinking made of glass",
          "the amount of a drink contained in a glass"
        ]
      },
      {
        "word": "beer",
        "syllables": "beer",
        "phonetic": "/bɪə(r)/",
        "definition": "noun. 啤酒（常用作不可数名词，一杯啤酒为 a glass of beer）",
        "example": "He asked me for a meal and a glass of beer.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "return",
        "syllables": "return",
        "phonetic": "/rɪˈtɜːn/",
        "definition": "noun. 回报；报答（常用于 in return (for) 短语，意为作为（...的）回报）",
        "example": "In return for this, the beggar stood on his head and sang songs.",
        "emoji": "✨",
        "longman": [
          "to go or come back to a place where you were before",
          "to give or send something back, or to put something back in its place",
          "if a feeling, situation etc returns, it starts to exist or happen again"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我刚搬到布里奇街的一栋房子里。”（主语 + have/has just + 过去分词）？",
        "options": [
          "I have just moved to a house in Bridge Street.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I have just moved to a house in Bridge Street.”（我刚搬到布里奇街的一栋房子里。），重点掌握句型：主语 + have/has just + 过去分词。"
      },
      {
        "question": "语法要点【一般过去时 (Simple Past Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "Yesterday a beggar knocked at my door.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Yesterday a beggar knocked at my door.”（昨天一个乞丐敲了我的门。）展示了本课重点语法【一般过去时 (Simple Past Tense)】：表示过去某个特定时间发生的动作或存在的状态，常与 yesterday, last week, ago 等时间状语连用。"
      },
      {
        "question": "What does the word 'beggar' (/ˈbeɡə(r)/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 乞丐"
        ],
        "answerIndex": 2,
        "explanation": "单词 'beggar' 的意思是：noun. 乞丐（指以乞讨为生的人）。"
      }
    ],
    "funPrompt": "读完《Percy Buttons》后，试着用自己的话回答课前问题：Who is Percy Buttons?"
  },
  {
    "id": 2007,
    "day": 7,
    "lessonNum": "7",
    "week": 1,
    "track": "nce2",
    "title": "L7: Too late 为时太晚",
    "coverEmoji": "💎",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 103,
    "intro": "🎯 课前导读问题：Did the detectives save the diamonds?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去正在进行的动作，常与when/while等连词搭配使用。 例：The plane was late and detectives were waiting at the airport. (飞机晚点了，侦探们正在机场等候。) ｜ 【过去进行时与一般过去时的对比 (Past Continuous vs Past Simple)】过去进行时: was/were + doing / 一般过去时: did — 当两个过去动作同时发生时，用while连接进行时态的动作；表示短暂动作或主句动作用一般过去时。 例：When the plane arrived, some detectives were waiting inside. (当飞机到达时，一些侦探正在里面等候。)\n💬 核心短语：“keep guard”（守卫，看守）；“take off”（拿下，取下）；“carry into”（搬进，带进）",
    "paragraphs": [
      "The plane was late and detectives were waiting at the airport all morning. They were expecting a valuable parcel of diamonds from South Africa. A few hours earlier, someone had told the police that thieves would try to steal the diamonds. When the plane arrived, some of the detectives were waiting inside the main building while others were waiting on the airfield.",
      "Two men took the parcel off the plane and carried it into the Customs House. While two detectives were keeping guard at the door, two others opened the parcel. To their surprise, the precious parcel was full of stones and sand!"
    ],
    "vocabulary": [
      {
        "word": "detective",
        "syllables": "detective",
        "phonetic": "/dɪˈtektɪv/",
        "definition": "noun. 侦探（指调查犯罪案件的人）",
        "example": "The plane was late and detectives were waiting at the airport all morning.",
        "emoji": "✨",
        "longman": [
          "a police officer whose job is to discover information about crimes and catch criminals",
          "someone who is paid to discover information about someone or something"
        ]
      },
      {
        "word": "diamond",
        "syllables": "diamond",
        "phonetic": "/ˈdaɪmənd/",
        "definition": "noun. 钻石（一种贵重的宝石）",
        "example": "They were expecting a valuable parcel of diamonds from South Africa.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "parcel",
        "syllables": "parcel",
        "phonetic": "/ˈpɑːsl/",
        "definition": "noun. 包裹（包装好的物品，常指邮寄的包裹）",
        "example": "They were expecting a valuable parcel of diamonds from South Africa.",
        "emoji": "✨",
        "longman": [
          "an object that has been wrapped in paper or put in a special envelope, especially so that it can be sent by post",
          "an area of land that is part of a larger area which has been divided up"
        ]
      },
      {
        "word": "valuable",
        "syllables": "valuable",
        "phonetic": "/ˈvæljuəbl/",
        "definition": "adj. 贵重的，值钱的（形容物品具有高价值）",
        "example": "They were expecting a valuable parcel of diamonds from South Africa.",
        "emoji": "✨",
        "longman": [
          "worth a lot of money",
          "valuable help, advice, information etc is very useful because it helps you to do something"
        ]
      },
      {
        "word": "thief",
        "syllables": "thief",
        "phonetic": "/θiːf/",
        "definition": "noun. 小偷（偷东西的人，复数形式为thieves）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "someone who steals things from another person or place",
          "someone who steals things from a person or place"
        ]
      },
      {
        "word": "steal",
        "syllables": "steal",
        "phonetic": "/stiːl/",
        "definition": "verb. 偷窃（非法拿走他人财物）",
        "example": "A few hours earlier, someone had told the police that thieves would try to steal the diamonds.",
        "emoji": "✨",
        "longman": [
          "to take something that belongs to someone else",
          "to use someone else’s ideas without getting permission or without admitting that they are not your own ideas"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“侦探们整个上午都在机场等待。”（主语 + was/were + 动词-ing + 时间/地点）？",
        "options": [
          "Detectives were waiting at the airport all morning.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Detectives were waiting at the airport all morning.”（侦探们整个上午都在机场等待。），重点掌握句型：主语 + was/were + 动词-ing + 时间/地点。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "The plane was late and detectives were waiting at the airport.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The plane was late and detectives were waiting at the airport.”（飞机晚点了，侦探们正在机场等候。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或时间段正在进行的动作。"
      },
      {
        "question": "What does the word 'detective' (/dɪˈtektɪv/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 侦探"
        ],
        "answerIndex": 2,
        "explanation": "单词 'detective' 的意思是：noun. 侦探（指调查犯罪案件的人）。"
      }
    ],
    "funPrompt": "读完《Too late》后，试着用自己的话回答课前问题：Did the detectives save the diamonds?"
  },
  {
    "id": 2008,
    "day": 8,
    "lessonNum": "8",
    "week": 1,
    "track": "nce2",
    "title": "L8: The best and the worst 最好的和最差的",
    "coverEmoji": "🪴",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 97,
    "intro": "🎯 课前导读问题：Why is Joe's garden the most beautiful one in the town?\n📌 语法与句型重点：【形容词最高级 (Superlative Degree)】the + 最高级 + (in/of短语) — 用于比较多个事物，指出最突出的一个。 例：Joe Sanders has the most beautiful garden in our town. (乔·桑德斯拥有我们镇上最美丽的花园。) ｜ 【形容词比较级 (Comparative Degree)】形容词比较级 + than + 比较对象 — 比较两个事物的差异。 例：Bill Frith's garden is larger than Joe's. (比尔·弗里斯的花园比乔的更大。)\n💬 核心短语：“enter for”（报名参加（比赛、考试等））；“every time”（每次；总是）；“larger than”（比...更大）",
    "paragraphs": [
      "Joe Sanders has the most beautiful garden in our town. Nearly everybody enters for 'The Nicest Garden Competition' each year, but Joe wins every time. Bill Frith's garden is larger than Joe's. Bill works harder than Joe and grows more flowers and vegetables, but Joe's garden is more interesting.",
      "He has made neat paths and has built a wooden bridge over a pool. I like gardens too, but I do not like hard work. Every year I enter for the garden competition too, and I always win a little prize for the worst garden in the town!"
    ],
    "vocabulary": [
      {
        "word": "competition",
        "syllables": "competition",
        "phonetic": "/ˌkɒmpɪˈtɪʃən/",
        "definition": "noun. 比赛；竞赛（指有组织的竞争活动）",
        "example": "Nearly everybody enters for 'The Nicest Garden Competition' each year, but Joe wins every time.",
        "emoji": "✨",
        "longman": [
          "a situation in which people or organizations try to be more successful than other people or organizations",
          "the people or groups that are competing against you, especially in business or in a sport"
        ]
      },
      {
        "word": "beautiful",
        "syllables": "beautiful",
        "phonetic": "/ˈbjuːtɪfəl/",
        "definition": "adj. 美丽的；漂亮的（形容外观美观的事物）",
        "example": "Joe Sanders has the most beautiful garden in our town.",
        "emoji": "✨",
        "longman": [
          "someone or something that is beautiful is extremely attractive to look at",
          "very good or giving you great pleasure"
        ]
      },
      {
        "word": "nearly",
        "syllables": "nearly",
        "phonetic": "/ˈnɪəli/",
        "definition": "adv. 几乎；差不多（表示接近但不完全）",
        "example": "Nearly everybody enters for 'The Nicest Garden Competition' each year, but Joe wins every time.",
        "emoji": "✨",
        "longman": [
          "almost, but not quite or not completely"
        ]
      },
      {
        "word": "enter",
        "syllables": "enter",
        "phonetic": "/ˈentə/",
        "definition": "verb. 参加；进入（enter for 表示报名参加比赛或活动）",
        "example": "Nearly everybody enters for 'The Nicest Garden Competition' each year, but Joe wins every time.",
        "emoji": "✨",
        "longman": [
          "to go or come into a place",
          "if an object enters part of something, it goes inside it",
          "to start working in a particular profession or organization , or to start studying at a school or university"
        ]
      },
      {
        "word": "large",
        "syllables": "large",
        "phonetic": "/lɑːdʒ/",
        "definition": "adj. 大的；广阔的（形容尺寸或规模大）",
        "example": "Bill Frith's garden is larger than Joe's.",
        "emoji": "✨",
        "longman": [
          "big in size, amount, or number",
          "a large person is tall and often fat"
        ]
      },
      {
        "word": "vegetable",
        "syllables": "vegetable",
        "phonetic": "/ˈvedʒtəbəl/",
        "definition": "noun. 蔬菜（可食用的植物）",
        "example": "Bill works harder than Joe and grows more flowers and vegetables, but Joe's garden is more interesting.",
        "emoji": "✨",
        "longman": [
          "a plant that is eaten raw or cooked, such as a cabbage",
          "an offensive word for someone who is alive but who cannot talk or move because their brain is damaged"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“乔·桑德斯拥有我们镇上最美丽的花园。”（S + has the + 最高级 + 名词 + in + 地点）？",
        "options": [
          "Joe Sanders has the most beautiful garden in our town.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Joe Sanders has the most beautiful garden in our town.”（乔·桑德斯拥有我们镇上最美丽的花园。），重点掌握句型：S + has the + 最高级 + 名词 + in + 地点。"
      },
      {
        "question": "语法要点【形容词最高级 (Superlative Degree)】：下列哪个例句符合本课语法结构（the + 最高级 + (in/of短语)）？",
        "options": [
          "He have go to school tomorrow.",
          "Joe Sanders has the most beautiful garden in our town.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Joe Sanders has the most beautiful garden in our town.”（乔·桑德斯拥有我们镇上最美丽的花园。）展示了本课重点语法【形容词最高级 (Superlative Degree)】：表示三个或以上事物中最...的，用最高级形式，前面通常加the。"
      },
      {
        "question": "What does the word 'competition' (/ˌkɒmpɪˈtɪʃən/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 比赛；竞赛"
        ],
        "answerIndex": 2,
        "explanation": "单词 'competition' 的意思是：noun. 比赛；竞赛（指有组织的竞争活动）。"
      }
    ],
    "funPrompt": "读完《The best and the worst》后，试着用自己的话回答课前问题：Why is Joe's garden the most beautiful one in the town?"
  },
  {
    "id": 2009,
    "day": 9,
    "lessonNum": "9",
    "week": 1,
    "track": "nce2",
    "title": "L9: A cold welcome 冷遇",
    "coverEmoji": "🕰️",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 102,
    "intro": "🎯 课前导读问题：What does 'a cold welcome' refer to?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述故事发生的背景，交代时间、地点和环境。 例：We were waiting for the clock to strike twelve. (我们正在等待时钟敲响12下。) ｜ 【时间表达：'in + 时间段' (Future Time)】主语 + will + 动词 + in + 时间段 — 用于谈论将来要发生的事情，in后面接表示时间的名词。 例：It would strike twelve in twenty minutes' time. (再过20分钟它就要敲响12点了。)\n💬 核心短语：“in twenty minutes' time”（表示在特定时间之后，'s所有格表示时间长度）；“wait and wait”（表示持续等待，强调等待时间很长或令人焦急）；“at five to twelve”（表示时间'差5分12点'，即11:55，to表示'差'的意思）",
    "paragraphs": [
      "On Wednesday evening, we went to the Town Hall. It was the last day of the year and a large crowd of people had gathered under the Town Hall clock. It would strike twelve in twenty minutes' time. Fifteen minutes passed and then, at five to twelve, the clock stopped.",
      "The big minute hand did not move. We waited and waited, but nothing happened. Suddenly someone shouted. 'It's two minutes past twelve!",
      "The clock has stopped!' I looked at my watch. It was true. The big clock refused to welcome the New Year.",
      "At that moment, everybody began to laugh and sing."
    ],
    "vocabulary": [
      {
        "word": "welcome",
        "syllables": "welcome",
        "phonetic": "/ˈwelkəm/",
        "definition": "noun/verb. 欢迎；迎接（作名词时指欢迎仪式或待遇；作动词时指迎接客人）",
        "example": "The big clock refused to welcome the New Year.",
        "emoji": "✨",
        "longman": [
          "used to greet someone who has just arrived",
          "if someone is welcome in a place, other people are glad that they are there"
        ]
      },
      {
        "word": "evening",
        "syllables": "evening",
        "phonetic": "/ˈiːvnɪŋ/",
        "definition": "noun. 傍晚；晚上（指日落到就寝前的时间，与night不同，更强调傍晚时分）",
        "example": "On Wednesday evening, we went to the Town Hall.",
        "emoji": "✨",
        "longman": [
          "the early part of the night between the end of the day and the time you go to bed",
          "a social event that takes place in the evening"
        ]
      },
      {
        "word": "crowd",
        "syllables": "crowd",
        "phonetic": "/kraʊd/",
        "definition": "noun. 人群；观众（指聚集在一起的一群人，常带有拥挤的意味）",
        "example": "It was the last day of the year and a large crowd of people had gathered under the Town Hall clock.",
        "emoji": "✨",
        "longman": [
          "a large group of people who have gathered together to do something, for example to watch something or protest about something",
          "a group of people who know each other, work together etc"
        ]
      },
      {
        "word": "strike",
        "syllables": "strike",
        "phonetic": "/straɪk/",
        "definition": "verb. 敲击；报时（指时钟敲响报时，也可以指撞击或罢工）",
        "example": "It would strike twelve in twenty minutes' time.",
        "emoji": "✨",
        "longman": [
          "to hit or fall against the surface of something",
          "to deliberately hit someone or something with your hand or a weapon",
          "if something strikes you, you think of it, notice it, or realize that it is important, interesting, true etc"
        ]
      },
      {
        "word": "minute",
        "syllables": "minute",
        "phonetic": "/ˈmɪnɪt/",
        "definition": "noun. 分钟；片刻（表示时间单位，也可表示很短的时间）",
        "example": "It would strike twelve in twenty minutes' time.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "wait",
        "syllables": "wait",
        "phonetic": "/weɪt/",
        "definition": "verb. 等待；等候（不及物动词，常用结构：wait for + 人/物）",
        "example": "We waited and waited, but nothing happened.",
        "emoji": "✨",
        "longman": [
          "to stay somewhere or not do something until something else happens, someone arrives etc",
          "if you are waiting for something that you expect or hope will happen or arrive, it has not happened or arrived yet"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“那是一年的最后一天。”（It was the last day of + 时间段）？",
        "options": [
          "It was the last day of the year.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“It was the last day of the year.”（那是一年的最后一天。），重点掌握句型：It was the last day of + 时间段。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "We were waiting for the clock to strike twelve.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“We were waiting for the clock to strike twelve.”（我们正在等待时钟敲响12下。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示过去某一时刻或时间段正在进行的动作。"
      },
      {
        "question": "What does the word 'welcome' (/ˈwelkəm/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun/verb. 欢迎；迎接"
        ],
        "answerIndex": 2,
        "explanation": "单词 'welcome' 的意思是：noun/verb. 欢迎；迎接（作名词时指欢迎仪式或待遇；作动词时指迎接客人）。"
      }
    ],
    "funPrompt": "读完《A cold welcome》后，试着用自己的话回答课前问题：What does 'a cold welcome' refer to?"
  },
  {
    "id": 2010,
    "day": 10,
    "lessonNum": "10",
    "week": 1,
    "track": "nce2",
    "title": "L10: Not for jazz 不适于演奏爵士乐",
    "coverEmoji": "🎹",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 95,
    "intro": "🎯 课前导读问题：What happened to the clavichord?\n📌 语法与句型重点：【一般过去时的被动语态】主语 + was/were + 过去分词 (+ by + 动作执行者) — 用于描述过去发生的动作，主语是动作的承受者。 例：It was made in Germany in 1681. (它于1681年在德国制造。) ｜ 【现在进行时的被动语态】主语 + am/is/are + being + 过去分词 — 强调某个动作正在进行中，且主语是动作的承受者。 例：It is being repaired by a friend of my father's. (它正在被我父亲的一个朋友修理。)\n💬 核心短语：“belong to”（属于，表示所有权或归属关系）；“try to do something”（尝试做某事，努力去做但不一定成功）；“be shocked”（感到震惊，表示对某事感到惊讶）",
    "paragraphs": [
      "We have an old musical instrument. It is called a clavichord. It was made in Germany in 1681. Our clavichord is kept in the living room.",
      "It has belonged to our family for a long time. The instrument was bought by my grandfather many years ago. Recently it was damaged by a visitor. She tried to play jazz on it!",
      "She struck the keys too hard and two of the strings were broken. My father was shocked. Now we are not allowed to touch it. It is being repaired by a friend of my father's."
    ],
    "vocabulary": [
      {
        "word": "clavichord",
        "syllables": "clavichord",
        "phonetic": "/ˈklævɪkɔːd/",
        "definition": "noun. 击弦古钢琴，一种古老的键盘乐器（可数名词，指一种18世纪前的键盘乐器）",
        "example": "It is called a clavichord.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "instrument",
        "syllables": "instrument",
        "phonetic": "/ˈɪnstrəmənt/",
        "definition": "noun. 仪器；工具；乐器（可数名词，可指音乐乐器或科学仪器）",
        "example": "We have an old musical instrument.",
        "emoji": "✨",
        "longman": [
          "a small tool used in work such as science or medicine",
          "an object used for producing music, such as a piano or violin"
        ]
      },
      {
        "word": "damage",
        "syllables": "damage",
        "phonetic": "/ˈdæmɪdʒ/",
        "definition": "verb. 损害；毁坏（及物动词，表示使某物受损）",
        "example": "Recently it was damaged by a visitor.",
        "emoji": "✨",
        "longman": [
          "physical harm that is done to something or to a part of someone’s body, so that it is broken or injured",
          "harm caused to someone’s emotions or mind"
        ]
      },
      {
        "word": "visitor",
        "syllables": "visitor",
        "phonetic": "/ˈvɪzɪtə(r)/",
        "definition": "noun. 访问者；游客；参观者（可数名词，指来访的人）",
        "example": "Recently it was damaged by a visitor.",
        "emoji": "✨",
        "longman": [
          "someone who comes to visit a place or a person"
        ]
      },
      {
        "word": "jazz",
        "syllables": "jazz",
        "phonetic": "/dʒæz/",
        "definition": "noun. 爵士乐（名词，指一种音乐风格）",
        "example": "She tried to play jazz on it!",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "shock",
        "syllables": "shock",
        "phonetic": "/ʃɒk/",
        "definition": "verb. 使震惊；使惊讶（及物动词，表示让人感到震惊）",
        "example": "My father was shocked.",
        "emoji": "✨",
        "longman": [
          "if something that happens is a shock, you did not expect it, and it makes you feel very surprised , and usually upset",
          "the feeling of surprise and disbelief you have when something very unexpected happens, especially something bad or frightening",
          "a medical condition in which someone looks pale and their heart and lungs are not working correctly, usually after a sudden very unpleasant experience"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“它被叫做击弦古钢琴。”（It is called...）？",
        "options": [
          "It is called a clavichord.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“It is called a clavichord.”（它被叫做击弦古钢琴。），重点掌握句型：It is called...。"
      },
      {
        "question": "语法要点【一般过去时的被动语态】：下列哪个例句符合本课语法结构（主语 + was/were + 过去分词 (+ by + 动作执行者)）？",
        "options": [
          "He have go to school tomorrow.",
          "It was made in Germany in 1681.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“It was made in Germany in 1681.”（它于1681年在德国制造。）展示了本课重点语法【一般过去时的被动语态】：当主语是动作的承受者时，使用被动语态。过去时的被动语态表示过去某个动作施加于主语。"
      },
      {
        "question": "What does the word 'clavichord' (/ˈklævɪkɔːd/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 击弦古钢琴，一种古老的键盘乐器"
        ],
        "answerIndex": 2,
        "explanation": "单词 'clavichord' 的意思是：noun. 击弦古钢琴，一种古老的键盘乐器（可数名词，指一种18世纪前的键盘乐器）。"
      }
    ],
    "funPrompt": "读完《Not for jazz》后，试着用自己的话回答课前问题：What happened to the clavichord?"
  },
  {
    "id": 2011,
    "day": 11,
    "lessonNum": "11",
    "week": 1,
    "track": "nce2",
    "title": "L11: One good turn deserves another 礼尚往来",
    "coverEmoji": "👔",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 103,
    "intro": "🎯 课前导读问题：Who paid for Tony's dinner?\n📌 语法与句型重点：【现在完成时与否定式 (has/have never + 过去分词)】has/have + never + 过去分词 — 用于强调某动作从未发生，否定意义强烈。 例：He has never borrowed money from me. (他从未向我借过钱。) ｜ 【过去进行时 + when 引导的一般过去时 (was/were doing ... when ... did)】主语 + was/were + 动词‑ing + when + 主语 + 动词过去式 — 用来描述一个进行中的动作，另一个短暂动作在同一时间点发生。 例：I was having dinner at a restaurant when Tony Steele came in. (我正在餐厅吃晚饭时，托尼·斯蒂尔走了进来。)\n💬 核心短语：“have never borrowed”（用于表达到目前为止从未进行过借入的动作）；“to my surprise”（用于引出令人惊讶的情况）；“pay for my dinner”（指为晚餐付款，承担晚餐费用）",
    "paragraphs": [
      "I was having dinner at a restaurant when Tony Steele came in. Tony worked in a lawyer's office years ago, but he is now working at a bank. He gets a good salary, but he always borrows money from his friends and never pays it back. Tony saw me and came and sat at the same table.",
      "He has never borrowed money from me. While he was eating, I asked him to lend me twenty pounds. To my surprise, he gave me the money immediately. 'I have never borrowed any money from you,' Tony said, 'so now you can pay for my dinner!'"
    ],
    "vocabulary": [
      {
        "word": "restaurant",
        "syllables": "restaurant",
        "phonetic": "/rɪˈstɒrɒnt/",
        "definition": "noun. 餐馆，餐厅（指提供餐食的场所）",
        "example": "I was having dinner at a restaurant when Tony Steele came in.",
        "emoji": "✨",
        "longman": [
          "a place where you can buy and eat a meal",
          "a place where you can get coffee and other non-alcoholic drinks, cakes, and small meals"
        ]
      },
      {
        "word": "lawyer",
        "syllables": "lawyer",
        "phonetic": "/ˈlɔːjə/",
        "definition": "noun. 律师（指提供法律服务的人）",
        "example": "Tony worked in a lawyer's office years ago, but he is now working at a bank.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "bank",
        "syllables": "bank",
        "phonetic": "/bæŋk/",
        "definition": "noun. 银行（指存放和借贷货币的金融机构）",
        "example": "Tony worked in a lawyer's office years ago, but he is now working at a bank.",
        "emoji": "✨",
        "longman": [
          "a business that keeps and lends money and provides other financial services",
          "a local office of a bank",
          "land along the side of a river or lake"
        ]
      },
      {
        "word": "salary",
        "syllables": "salary",
        "phonetic": "/ˈsæləri/",
        "definition": "noun. 薪水，工资（指固定周期内的工作报酬）",
        "example": "He gets a good salary, but he always borrows money from his friends and never pays it back.",
        "emoji": "✨",
        "longman": [
          "money that you receive as payment from the organization you work for, usually paid to you every month",
          "the money that you receive regularly for doing your job, usually paid to you every month. Salary"
        ]
      },
      {
        "word": "borrow",
        "syllables": "borrow",
        "phonetic": "/ˈbɒrəʊ/",
        "definition": "verb. 借入，借用（指从他人处暂时取得金钱或物品，承诺归还）",
        "example": "He gets a good salary, but he always borrows money from his friends and never pays it back.",
        "emoji": "✨",
        "longman": [
          "to use something that belongs to someone else and that you must give back to them later",
          "to take or copy someone’s ideas, words etc and use them in your own work, language etc"
        ]
      },
      {
        "word": "lend",
        "syllables": "lend",
        "phonetic": "/lend/",
        "definition": "verb. 借出，借给（指把自己的金钱或物品暂时给别人使用）",
        "example": "While he was eating, I asked him to lend me twenty pounds.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我正在餐厅吃晚饭时，托尼·斯蒂尔走了进来。”（I was doing ... when ...）？",
        "options": [
          "I was having dinner at a restaurant when Tony Steele came in.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I was having dinner at a restaurant when Tony Steele came in.”（我正在餐厅吃晚饭时，托尼·斯蒂尔走了进来。），重点掌握句型：I was doing ... when ...。"
      },
      {
        "question": "语法要点【现在完成时与否定式 (has/have never + 过去分词)】：下列哪个例句符合本课语法结构（has/have + never + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "He has never borrowed money from me.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He has never borrowed money from me.”（他从未向我借过钱。）展示了本课重点语法【现在完成时与否定式 (has/have never + 过去分词)】：使用 have/has + never + 过去分词 表示到目前为止从未经历某事。"
      },
      {
        "question": "What does the word 'restaurant' (/rɪˈstɒrɒnt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 餐馆，餐厅"
        ],
        "answerIndex": 2,
        "explanation": "单词 'restaurant' 的意思是：noun. 餐馆，餐厅（指提供餐食的场所）。"
      }
    ],
    "funPrompt": "读完《One good turn deserves another》后，试着用自己的话回答课前问题：Who paid for Tony's dinner?"
  },
  {
    "id": 2012,
    "day": 12,
    "lessonNum": "12",
    "week": 1,
    "track": "nce2",
    "title": "L12: Goodbye and good luck 再见，一路顺风",
    "coverEmoji": "⛵",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 91,
    "intro": "🎯 课前导读问题：Where is Captain Alison going and how?\n📌 语法与句型重点：【一般将来时 (Simple Future Tense)】主语 + will + 动词原形 — 用于描述未来的计划、决定、承诺或预测，语气较客观。 例：He will sail from Portsmouth tomorrow. (他明天将从朴茨茅斯起航。) ｜ 【将来时的时间状语】tomorrow / early in the morning / at eight o'clock / in two months — 常置于句首或句末，用于明确动作发生的时间。 例：He will sail from Portsmouth tomorrow. (他明天将从朴茨茅斯起航。)\n💬 核心短语：“will sail”（表示将来的计划或决定，通常指即刻决定或预测）；“set out”（表示出发、启程，强调开始旅程）；“plenty of time”（表示时间充足，足够做某事）",
    "paragraphs": [
      "Our neighbour, Captain Charles Alison, will sail from Portsmouth tomorrow. We'll meet him at the harbour early in the morning. He will be in his small boat, Topsail. Topsail is a famous little boat.",
      "It has sailed across the Atlantic many times. Captain Alison will set out at eight o'clock, so we'll have plenty of time. We'll see his boat and then we'll say goodbye to him. He will be away for two months.",
      "We are very proud of him. He will take part in an important race across the Atlantic."
    ],
    "vocabulary": [
      {
        "word": "captain",
        "syllables": "captain",
        "phonetic": "/ˈkæptɪn/",
        "definition": "noun. 船长；舰长（指船或飞机的指挥者，也可用于军衔）",
        "example": "Our neighbour, Captain Charles Alison, will sail from Portsmouth tomorrow.",
        "emoji": "✨",
        "longman": [
          "the sailor in charge of a ship, or the pilot in charge of an aircraft",
          "a military officer with a fairly high rank"
        ]
      },
      {
        "word": "sail",
        "syllables": "sail",
        "phonetic": "/seɪl/",
        "definition": "verb. 航行；起航（指乘船航行或开始航行）",
        "example": "Our neighbour, Captain Charles Alison, will sail from Portsmouth tomorrow.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "harbour",
        "syllables": "harbour",
        "phonetic": "/ˈhɑːbə/",
        "definition": "noun. 港口；港湾（供船只停靠的沿海区域）",
        "example": "We'll meet him at the harbour early in the morning.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "famous",
        "syllables": "famous",
        "phonetic": "/ˈfeɪməs/",
        "definition": "adjective. 著名的；出名的（描述广为人知的人或事物）",
        "example": "Topsail is a famous little boat.",
        "emoji": "✨",
        "longman": [
          "known about by many people in many places",
          "people who are famous"
        ]
      },
      {
        "word": "across",
        "syllables": "across",
        "phonetic": "/əˈkrɒs/",
        "definition": "preposition. 横跨；穿过（表示从一边到另一边的位置或动作）",
        "example": "It has sailed across the Atlantic many times.",
        "emoji": "✨",
        "longman": [
          "from one side of something to the other",
          "towards someone or something on the other side of an area"
        ]
      },
      {
        "word": "Atlantic",
        "syllables": "Atlantic",
        "phonetic": "/ətˈlæntɪk/",
        "definition": "noun. 大西洋（地理专有名词，常与across连用）",
        "example": "It has sailed across the Atlantic many times.",
        "emoji": "✨",
        "longman": [
          "in, near, or from the Atlantic Ocean",
          "the Atlantic Ocean. British people sometimes use phrases such as ‘across the Atlantic’ or ‘on the other side of the Atlantic’ when they are talking about the..."
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他明天将从朴茨茅斯起航。”（主语 + will + 动词原形 + 地点/时间）？",
        "options": [
          "He will sail from Portsmouth tomorrow.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“He will sail from Portsmouth tomorrow.”（他明天将从朴茨茅斯起航。），重点掌握句型：主语 + will + 动词原形 + 地点/时间。"
      },
      {
        "question": "语法要点【一般将来时 (Simple Future Tense)】：下列哪个例句符合本课语法结构（主语 + will + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "He will sail from Portsmouth tomorrow.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He will sail from Portsmouth tomorrow.”（他明天将从朴茨茅斯起航。）展示了本课重点语法【一般将来时 (Simple Future Tense)】：表示将要发生的动作或存在的状态，通常指说话时已计划好或决定的事情。"
      },
      {
        "question": "What does the word 'captain' (/ˈkæptɪn/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 船长；舰长"
        ],
        "answerIndex": 2,
        "explanation": "单词 'captain' 的意思是：noun. 船长；舰长（指船或飞机的指挥者，也可用于军衔）。"
      }
    ],
    "funPrompt": "读完《Goodbye and good luck》后，试着用自己的话回答课前问题：Where is Captain Alison going and how?"
  },
  {
    "id": 2013,
    "day": 13,
    "lessonNum": "13",
    "week": 1,
    "track": "nce2",
    "title": "L13: The Greenwood Boys 绿林少年",
    "coverEmoji": "🎸",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 98,
    "intro": "🎯 课前导读问题：Why will the police have a difficult time?\n📌 语法与句型重点：【将来进行时 (Future Continuous Tense)】主语 + will be + 动词-ing + 其他 — 用于描述在将来某个具体时间正在发生的动作，或表示已经安排好的事情。 例：They will be arriving here tomorrow. (他们明天将会到达这里。) ｜ 【将来时态对比 (Future Tense Comparison)】一般将来时: will + 动词原形；将来进行时: will be + 动词-ing — 一般将来时强调将来的决定或临时决定；将来进行时强调正在进行的动作或计划的安排。 例：I will call you tonight. (今晚我会给你打电话) vs I will be calling you tonight. (今晚我会一直在给你打电话) (一般将来时强调决定，将来进行时强调动作的持续性)\n💬 核心短语：“at present”（表示\"目前，现在\"，用于描述当前的情况）；“all parts of the country”（表示\"全国各地\"，强调范围广泛）；“by train”（表示交通方式，\"乘火车\"）",
    "paragraphs": [
      "The Greenwood Boys are a group of pop singers. At present, they are visiting all parts of the country. They will be arriving here tomorrow. They will be coming by train and most of the young people in the town will be meeting them at the station.",
      "Tomorrow evening they will be singing at the Workers' Club. The Greenwood Boys will be staying for five days. During this time, they will give five performances. As usual, the police will have a difficult time.",
      "They will be trying to keep order. It is always the same on these occasions."
    ],
    "vocabulary": [
      {
        "word": "group",
        "syllables": "group",
        "phonetic": "/ɡruːp/",
        "definition": "noun. 团体，组（指一群人或其他事物的集合）",
        "example": "The Greenwood Boys are a group of pop singers.",
        "emoji": "✨",
        "longman": [
          "several people or things that are all together in the same place",
          "several people or things that are connected with each other",
          "several companies that all have the same owner"
        ]
      },
      {
        "word": "visit",
        "syllables": "visit",
        "phonetic": "/ˈvɪzɪt/",
        "definition": "verb. 访问，参观，拜访（指去某个地方或拜访某人）",
        "example": "At present, they are visiting all parts of the country.",
        "emoji": "✨",
        "longman": [
          "to go and spend time in a place or with someone, especially for pleasure or interest",
          "to go to a place as part of your official job, especially to examine it"
        ]
      },
      {
        "word": "part",
        "syllables": "part",
        "phonetic": "/pɑːt/",
        "definition": "noun. 部分（指整体中的一个组成部分）",
        "example": "At present, they are visiting all parts of the country.",
        "emoji": "✨",
        "longman": [
          "a piece or feature of something such as an object, area, event, or period of time",
          "one of the separate pieces that something such as a machine or piece of equipment is made of"
        ]
      },
      {
        "word": "country",
        "syllables": "country",
        "phonetic": "/ˈkʌntri/",
        "definition": "noun. 国家，乡村（指一个国家或农村地区）",
        "example": "At present, they are visiting all parts of the country.",
        "emoji": "✨",
        "longman": [
          "an area of land that is controlled by its own government, president, king etc",
          "an area of land that is suitable for a particular activity, has particular features, or is connected with a particular person or people"
        ]
      },
      {
        "word": "arrive",
        "syllables": "arrive",
        "phonetic": "/əˈraɪv/",
        "definition": "verb. 到达，抵达（表示到达某地）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "to get to the place you are going to",
          "if something arrives, it is brought or delivered to you"
        ]
      },
      {
        "word": "train",
        "syllables": "train",
        "phonetic": "/treɪn/",
        "definition": "noun. 火车（指铁路交通车辆）；verb. 培训，训练（指进行训练或培养技能）",
        "example": "They will be coming by train and most of the young people in the town will be meeting them at the station.",
        "emoji": "✨",
        "longman": [
          "a set of several carriages that are connected to each other and pulled along a railway line by an engine",
          "a long line of moving people, animals , or vehicles",
          "a part of a long dress that spreads out over the ground behind the person wearing it"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他们明天将会到达这里。”（主语 + will be + 动词-ing + 时间/地点）？",
        "options": [
          "They will be arriving here tomorrow.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“They will be arriving here tomorrow.”（他们明天将会到达这里。），重点掌握句型：主语 + will be + 动词-ing + 时间/地点。"
      },
      {
        "question": "语法要点【将来进行时 (Future Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + will be + 动词-ing + 其他）？",
        "options": [
          "He have go to school tomorrow.",
          "They will be arriving here tomorrow.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“They will be arriving here tomorrow.”（他们明天将会到达这里。）展示了本课重点语法【将来进行时 (Future Continuous Tense)】：表示在将来某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'group' (/ɡruːp/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 团体，组"
        ],
        "answerIndex": 2,
        "explanation": "单词 'group' 的意思是：noun. 团体，组（指一群人或其他事物的集合）。"
      }
    ],
    "funPrompt": "读完《The Greenwood Boys》后，试着用自己的话回答课前问题：Why will the police have a difficult time?"
  },
  {
    "id": 2014,
    "day": 14,
    "lessonNum": "14",
    "week": 1,
    "track": "nce2",
    "title": "L14: Do you speak English? 你会讲英语吗？",
    "coverEmoji": "🚗",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 114,
    "intro": "🎯 课前导读问题：Did the young man speak English?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】Subject + had + past participle — 用于描述过去某事件之前已经发生的动作，强调'过去的过去'。在时间或条件状语从句中，当主句用过去将来时时，从句用过去完成时。。 例：After I had left a small village, I drove on to the next town. (我离开法国南部的一个小村庄后，继续驾车前往下一个城镇。) ｜ 【过去进行时与一般过去时连用 (Past Continuous with Past Simple)】主句(过去进行时) + when + 从句(一般过去时) / 主句(一般过去时) + when + 从句(过去进行时) — when引导的并列句中，when可以表示'就在那时'，引出出人意料的事件。。 例：I was walking down the street when it started to rain. (我正在街上走，突然开始下雨了。)\n💬 核心短语：“ask for a lift”（请求搭便车，指请求别人让你免费乘车）；“as soon as”（一...就...，表示两件事紧接着发生）；“apart from”（除了...之外，相当于except for）",
    "paragraphs": [
      "I had an amusing experience last year. After I had left a small village in the south of France, I drove on to the next town. On the way, a young man waved to me. I stopped and he asked me for a lift.",
      "As soon as he had got into the car, I said good morning to him in French and he replied in the same language. Apart from a few words, I do not know any French at all. Neither of us spoke during the journey. I had nearly reached the town, when the young man suddenly said, very slowly, \"Do you speak English?'",
      "As I soon learnt, he was English himself!'"
    ],
    "vocabulary": [
      {
        "word": "amusing",
        "syllables": "amusing",
        "phonetic": "/əˈmjuːzɪŋ/",
        "definition": "adjective. 有趣的；好笑的（形容事物或经历让人感到有趣或好笑）",
        "example": "I had an amusing experience last year.",
        "emoji": "✨",
        "longman": [
          "funny and entertaining"
        ]
      },
      {
        "word": "experience",
        "syllables": "experience",
        "phonetic": "/ɪkˈspɪəriəns/",
        "definition": "noun. 经历；经验（指个人亲身经历过的事情）",
        "example": "I had an amusing experience last year.",
        "emoji": "✨",
        "longman": [
          "knowledge or skill that you gain from doing a job or activity, or the process of doing this",
          "knowledge that you gain about life and the world by being in different situations and meeting different people, or the process of gaining this"
        ]
      },
      {
        "word": "village",
        "syllables": "village",
        "phonetic": "/ˈvɪlɪdʒ/",
        "definition": "noun. 村庄；乡村（指比城镇小的居民点）",
        "example": "After I had left a small village in the south of France, I drove on to the next town.",
        "emoji": "✨",
        "longman": [
          "a very small town in the countryside"
        ]
      },
      {
        "word": "south",
        "syllables": "south",
        "phonetic": "/saʊθ/",
        "definition": "noun/adjective. 南方；南部的（表示方向或地区）",
        "example": "After I had left a small village in the south of France, I drove on to the next town.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "wave",
        "syllables": "wave",
        "phonetic": "/weɪv/",
        "definition": "verb. 挥手；招手（指向人挥手示意）",
        "example": "On the way, a young man waved to me.",
        "emoji": "✨",
        "longman": [
          "a line of raised water that moves across the surface of the sea",
          "a sudden increase in a particular type of behavior, activity, or feeling"
        ]
      },
      {
        "word": "lift",
        "syllables": "lift",
        "phonetic": "/lɪft/",
        "definition": "noun. 搭便车；电梯（在英国英语中指出于好心让人免费搭车）",
        "example": "I stopped and he asked me for a lift.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他一上车，我就向他问好。”（As soon as + 过去完成时, 主语 + 一般过去时）？",
        "options": [
          "As soon as he had got into the car, I said good morning to him.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“As soon as he had got into the car, I said good morning to him.”（他一上车，我就向他问好。），重点掌握句型：As soon as + 过去完成时, 主语 + 一般过去时。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（Subject + had + past participle）？",
        "options": [
          "He have go to school tomorrow.",
          "After I had left a small village, I drove on to the next town.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“After I had left a small village, I drove on to the next town.”（我离开法国南部的一个小村庄后，继续驾车前往下一个城镇。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：过去完成时表示在过去某个时间点之前已经完成的动作。它由'had + 过去分词'构成，常与after, as soon as, before等连词连用。。"
      },
      {
        "question": "What does the word 'amusing' (/əˈmjuːzɪŋ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adjective. 有趣的；好笑的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'amusing' 的意思是：adjective. 有趣的；好笑的（形容事物或经历让人感到有趣或好笑）。"
      }
    ],
    "funPrompt": "读完《Do you speak English?》后，试着用自己的话回答课前问题：Did the young man speak English?"
  },
  {
    "id": 2015,
    "day": 15,
    "lessonNum": "15",
    "week": 1,
    "track": "nce2",
    "title": "L15: Good news 佳音",
    "coverEmoji": "💼",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 95,
    "intro": "🎯 课前导读问题：What was the good news?\n📌 语法与句型重点：【间接引语（Reported Speech）】主句动词（said/told）+ that + 从句 — 用于转述他人说过的话，常见的动词有say、tell、ask等。。 例：The secretary told me that Mr. Harmsworth would see me. (秘书告诉我哈姆斯沃斯先生要见我。) ｜ 【过去完成时（Past Perfect Tense）】had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。。 例：After I had sat down, he said... (我坐下后，他说...)\n💬 核心短语：“look up from”（从...抬起头/停下手中的事抬头看）；“sit down”（坐下）；“can't afford to do something”（负担不起做某事）",
    "paragraphs": [
      "The secretary told me that Mr. Harmsworth would see me. I felt very nervous when I went into his office. He did not look up from his desk when I entered. After I had sat down, he said that business was very bad.",
      "He told me that the firm could not afford to pay such large salaries. Twenty people had already left. I knew that my turn had come.",
      "'Mr.Harmsworth,' I said in a weak voice.",
      "'Don't interrupt,' he said.",
      "Then he smiled and told me I would receive an extra thousand pounds a year!"
    ],
    "vocabulary": [
      {
        "word": "secretary",
        "syllables": "secretary",
        "phonetic": "/ˈsekrətri/",
        "definition": "noun. 秘书（指公司或机构中处理文书和管理工作的人）",
        "example": "The secretary told me that Mr. Harmsworth would see me.",
        "emoji": "✨",
        "longman": [
          "someone who works in an office typing",
          "the head of an important department in the British government"
        ]
      },
      {
        "word": "nervous",
        "syllables": "nervous",
        "phonetic": "/ˈnɜːvəs/",
        "definition": "adjective. 紧张的；焦虑的（描述人感到不安或紧张的状态）",
        "example": "I felt very nervous when I went into his office.",
        "emoji": "✨",
        "longman": [
          "worried or frightened about something, and unable to relax",
          "often becoming worried or frightened, and easily upset"
        ]
      },
      {
        "word": "afford",
        "syllables": "afford",
        "phonetic": "/əˈfɔːd/",
        "definition": "verb. 负担得起（常与can/could连用，表示有能力支付或做某事）",
        "example": "He told me that the firm could not afford to pay such large salaries.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "firm",
        "syllables": "firm",
        "phonetic": "/fɜːm/",
        "definition": "noun. 公司；商行（指商业机构或企业）",
        "example": "He told me that the firm could not afford to pay such large salaries.",
        "emoji": "✨",
        "longman": [
          "a business or company, especially a small one",
          "not completely hard, but not soft , and not easy to bend into a different shape",
          "strongly fixed in position, and not likely to move"
        ]
      },
      {
        "word": "salary",
        "syllables": "salary",
        "phonetic": "/ˈsæləri/",
        "definition": "noun. 薪水；工资（通常指按月或按年发放的固定工资）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "money that you receive as payment from the organization you work for, usually paid to you every month",
          "the money that you receive regularly for doing your job, usually paid to you every month. Salary"
        ]
      },
      {
        "word": "interrupt",
        "syllables": "interrupt",
        "phonetic": "/ˌɪntəˈrʌpt/",
        "definition": "verb. 打断；插嘴（指在别人说话时打断对方）",
        "example": "'Don't interrupt,' he said.",
        "emoji": "✨",
        "longman": [
          "to stop someone from continuing what they are saying or doing by suddenly speaking to them, making a noise etc",
          "to make a process or activity stop temporarily"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“秘书告诉我哈姆斯沃斯先生要见我。”（主语 + told me that + 从句）？",
        "options": [
          "The secretary told me that Mr. Harmsworth would see me.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The secretary told me that Mr. Harmsworth would see me.”（秘书告诉我哈姆斯沃斯先生要见我。），重点掌握句型：主语 + told me that + 从句。"
      },
      {
        "question": "语法要点【间接引语（Reported Speech）】：下列哪个例句符合本课语法结构（主句动词（said/told）+ that + 从句）？",
        "options": [
          "He have go to school tomorrow.",
          "The secretary told me that Mr. Harmsworth would see me.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The secretary told me that Mr. Harmsworth would see me.”（秘书告诉我哈姆斯沃斯先生要见我。）展示了本课重点语法【间接引语（Reported Speech）】：间接引语是用自己的话转述别人的话，通常使用that引导的宾语从句，且时态要后退（过去时推进一位）。。"
      },
      {
        "question": "What does the word 'secretary' (/ˈsekrətri/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 秘书"
        ],
        "answerIndex": 2,
        "explanation": "单词 'secretary' 的意思是：noun. 秘书（指公司或机构中处理文书和管理工作的人）。"
      }
    ],
    "funPrompt": "读完《Good news》后，试着用自己的话回答课前问题：What was the good news?"
  },
  {
    "id": 2016,
    "day": 16,
    "lessonNum": "16",
    "week": 1,
    "track": "nce2",
    "title": "L16: A polite request 彬彬有礼的要求",
    "coverEmoji": "🚦",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 99,
    "intro": "🎯 课前导读问题：What was the polite request?\n📌 语法与句型重点：【真实条件句 (First Conditional)】If + 主语 + 动词原形, 主语 + will + 动词原形 — 用于讨论可能发生的真实情况，特别是将来可能发生的事情。 例：If you park your car in the wrong place, a traffic policeman will soon find it. (如果你把车停错地方，交通警察很快就会找到它。) ｜ 【cannot fail to (双重否定)】主语 + cannot fail to + 动词原形 — 用于强调某事是必然的，不可能不发生，语气强烈。 例：If you receive a request like this, you cannot fail to obey it! (如果你收到这样的请求，你一定会遵守！)\n💬 核心短语：“park your car”（表示停放车辆）；“let you go”（表示让某人离开，文中指不罚款）；“pay attention to”（表示注意、关注）",
    "paragraphs": [
      "If you park your car in the wrong place, a traffic policeman will soon find it. You will be very lucky if he lets you go without a ticket. However, this does not always happen. Traffic police are sometimes very polite.",
      "During a holiday in Sweden, I found this note on my car: 'sir, we welcome you to our city. This is a \"No Parking\" area. You will enjoy your stay here if you pay attention to our street signs. This note is only a reminder.'",
      "If you receive a request like this, you cannot fail to obey it!"
    ],
    "vocabulary": [
      {
        "word": "traffic",
        "syllables": "traffic",
        "phonetic": "/ˈtræfɪk/",
        "definition": "noun. 交通；往来车辆（指道路上的车辆和行人流动）",
        "example": "If you park your car in the wrong place, a traffic policeman will soon find it.",
        "emoji": "✨",
        "longman": [
          "the vehicles moving along a road or street",
          "the movement of aircraft, ships, or trains from one place to another"
        ]
      },
      {
        "word": "policeman",
        "syllables": "policeman",
        "phonetic": "/pəˈliːsmən/",
        "definition": "noun. 警察（指男性执法人员的统称）",
        "example": "If you park your car in the wrong place, a traffic policeman will soon find it.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "ticket",
        "syllables": "ticket",
        "phonetic": "/ˈtɪkɪt/",
        "definition": "noun. 罚单；票（在交通语境中指违章罚款通知单）",
        "example": "You will be very lucky if he lets you go without a ticket.",
        "emoji": "✨",
        "longman": [
          "a printed piece of paper which shows that you have paid to enter a cinema, travel on a bus, plane etc",
          "a printed piece of paper with a number on it that you buy because you will get a prize if that number is chosen"
        ]
      },
      {
        "word": "parking",
        "syllables": "parking",
        "phonetic": "/ˈpɑːkɪŋ/",
        "definition": "noun. 停车；停车位（指车辆停放的行为或地点）",
        "example": "This is a \"No Parking\" area.",
        "emoji": "✨",
        "longman": [
          "the act of parking a car or other vehicle",
          "spaces in which you can leave a car or other vehicle"
        ]
      },
      {
        "word": "polite",
        "syllables": "polite",
        "phonetic": "/pəˈlaɪt/",
        "definition": "adj. 有礼貌的；客气的（形容人的行为或言语友好且得体）",
        "example": "Traffic police are sometimes very polite.",
        "emoji": "✨",
        "longman": [
          "behaving or speaking in a way that is correct for the social situation you are in, and showing that you are careful to consider other people’s needs and feel...",
          "you make polite conversation, remarks etc because it is considered socially correct to do this, but not necessarily because you believe what you are saying"
        ]
      },
      {
        "word": "welcome",
        "syllables": "welcome",
        "phonetic": "/ˈwelkəm/",
        "definition": "verb. 欢迎（表示对来访者的友好接待）",
        "example": "During a holiday in Sweden, I found this note on my car: 'sir, we welcome you to our city.",
        "emoji": "✨",
        "longman": [
          "used to greet someone who has just arrived",
          "if someone is welcome in a place, other people are glad that they are there"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“如果你把车停错地方，交通警察很快就会找到它。”（If + 一般现在时, will + 动词原形）？",
        "options": [
          "If you park your car in the wrong place, a traffic policeman will soon find it.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“If you park your car in the wrong place, a traffic policeman will soon find it.”（如果你把车停错地方，交通警察很快就会找到它。），重点掌握句型：If + 一般现在时, will + 动词原形。"
      },
      {
        "question": "语法要点【真实条件句 (First Conditional)】：下列哪个例句符合本课语法结构（If + 主语 + 动词原形, 主语 + will + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "If you park your car in the wrong place, a traffic policeman will soon find it.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“If you park your car in the wrong place, a traffic policeman will soon find it.”（如果你把车停错地方，交通警察很快就会找到它。）展示了本课重点语法【真实条件句 (First Conditional)】：表示可能发生的真实情况，条件从句用一般现在时，主句用will + 动词原形。"
      },
      {
        "question": "What does the word 'traffic' (/ˈtræfɪk/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 交通；往来车辆"
        ],
        "answerIndex": 2,
        "explanation": "单词 'traffic' 的意思是：noun. 交通；往来车辆（指道路上的车辆和行人流动）。"
      }
    ],
    "funPrompt": "读完《A polite request》后，试着用自己的话回答课前问题：What was the polite request?"
  },
  {
    "id": 2017,
    "day": 17,
    "lessonNum": "17",
    "week": 1,
    "track": "nce2",
    "title": "L17: Always young 青春常驻",
    "coverEmoji": "👗",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 100,
    "intro": "🎯 课前导读问题：Why doesn't Aunt Jennifer tell anyone how old she is?\n📌 语法与句型重点：【must be 表示推测】主语 + must be + 形容词/名词/数词 — 用于根据证据或常识进行肯定推测，语气比might be、could be更强。 例：She must be at least thirty-five years old. (她一定有至少三十五岁了。) ｜ 【will have to 表示将来必须】主语 + will have to + 动词原形 — 表示将来某个时间必须做的事情，比must更强调未来性。 例：Jennifer will have to take part in a new play soon. (珍妮弗很快必须参加一个新剧本的演出。)\n💬 核心短语：“take part in”（表示参加或参与某项活动、会议、比赛等）；“in spite of”（表示尽管某种情况存在，通常后接名词或动名词）；“at least”（表示最小数量或程度，意为'不少于'、'至少'）",
    "paragraphs": [
      "My aunt Jennifer is an actress. She must be at least thirty-five years old. In spite of this, she often appears on the stage as a young girl. Jennifer will have to take part in a new play soon.",
      "This time, she will be a girl of seventeen. In the play, she must appear in a bright red dress and long black stockings. Last year in another play, she had to wear short socks and a bright, orange-coloured dress. If anyone ever asks her how old she is, she always answers, 'Darling, it must be terrible to be grown up!'"
    ],
    "vocabulary": [
      {
        "word": "actress",
        "syllables": "actress",
        "phonetic": "/ˈæktrəs/",
        "definition": "noun. 女演员（指从事表演工作的女性，如电影、电视或戏剧演员）",
        "example": "My aunt Jennifer is an actress.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "appear",
        "syllables": "appear",
        "phonetic": "/əˈpɪə(r)/",
        "definition": "verb. 出现；登场（指在舞台、电视等上面出现或露面）",
        "example": "In spite of this, she often appears on the stage as a young girl.",
        "emoji": "✨",
        "longman": [
          "used when saying how someone or something seems. Appear",
          "to start to be seen, to arrive, or to exist in a place, especially suddenly"
        ]
      },
      {
        "word": "stage",
        "syllables": "stage",
        "phonetic": "/steɪdʒ/",
        "definition": "noun. 舞台（指戏剧表演的场所，也可比喻人生的舞台）",
        "example": "In spite of this, she often appears on the stage as a young girl.",
        "emoji": "✨",
        "longman": [
          "a particular time or state that something reaches as it grows or develops",
          "one of the parts which something such as a competition or process is divided into",
          "the raised area in a theater which actors or singers stand on when they perform"
        ]
      },
      {
        "word": "play",
        "syllables": "play",
        "phonetic": "/pleɪ/",
        "definition": "noun. 戏剧；剧本（指为舞台表演创作的文学作品）",
        "example": "Jennifer will have to take part in a new play soon.",
        "emoji": "✨",
        "longman": [
          "when children play, they do things that they enjoy, often with other people or with toys",
          "to take part or compete in a game or sport"
        ]
      },
      {
        "word": "bright",
        "syllables": "bright",
        "phonetic": "/braɪt/",
        "definition": "adjective. 明亮的；鲜艳的（形容颜色鲜明、光线充足）",
        "example": "In the play, she must appear in a bright red dress and long black stockings.",
        "emoji": "✨",
        "longman": [
          "shining strongly, or with plenty of light",
          "if the weather is bright, the sun is shining and there is a lot of light"
        ]
      },
      {
        "word": "dress",
        "syllables": "dress",
        "phonetic": "/dres/",
        "definition": "noun. 连衣裙；女装（指女士穿的连体服装）",
        "example": "In the play, she must appear in a bright red dress and long black stockings.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“她一定有至少三十五岁了。”（主语 + must be + 年龄/形容词）？",
        "options": [
          "She must be at least thirty-five years old.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“She must be at least thirty-five years old.”（她一定有至少三十五岁了。），重点掌握句型：主语 + must be + 年龄/形容词。"
      },
      {
        "question": "语法要点【must be 表示推测】：下列哪个例句符合本课语法结构（主语 + must be + 形容词/名词/数词）？",
        "options": [
          "He have go to school tomorrow.",
          "She must be at least thirty-five years old.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“She must be at least thirty-five years old.”（她一定有至少三十五岁了。）展示了本课重点语法【must be 表示推测】：must + 动词原形表示对现在情况非常有把握的推测，意为'一定是'、'肯定是'。"
      },
      {
        "question": "What does the word 'actress' (/ˈæktrəs/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 女演员"
        ],
        "answerIndex": 2,
        "explanation": "单词 'actress' 的意思是：noun. 女演员（指从事表演工作的女性，如电影、电视或戏剧演员）。"
      }
    ],
    "funPrompt": "读完《Always young》后，试着用自己的话回答课前问题：Why doesn't Aunt Jennifer tell anyone how old she is?"
  },
  {
    "id": 2018,
    "day": 18,
    "lessonNum": "18",
    "week": 1,
    "track": "nce2",
    "title": "L18: He often does this! 他经常干这种事！",
    "coverEmoji": "🐕",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 102,
    "intro": "🎯 课前导读问题：What had happened to the writer's bag?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】Subject + had + 过去分词 (done) — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。常与 after, before, when, as soon as 等连用，或通过上下文体现时间先后。 例：After I had had lunch, I looked for my bag. (我吃完午饭后，开始找我的包。) ｜ 【过去进行时 (Past Continuous Tense)】Subject + was/were + 动词-ing — 用于描述正在进行的动作，常与 when, while, as 等连用。when 引导的短句可放在句首或句末。 例：As I was looking for it, the landlord came in. (当我正在找包的时候，店主进来了。)\n💬 核心短语：“look for”（寻找，表示搜索或查找的动作过程）；“have lunch”（吃午餐，指中午用餐）；“come in”（进来，指从外面进入室内）",
    "paragraphs": [
      "After I had had lunch at a village pub, I looked for my bag. I had left it on a chair beside the door and now it wasn't there! As I was looking for it, the landlord came in.",
      "'Did you have a good meal?\" he asked.",
      "'Yes, thank you,' I answered, 'but I can't pay the bill. I haven't got my bag.'",
      "The landlord smiled and immediately went out. In a few minutes he returned with my bag and gave it back to me.",
      "'I'm very sorry,' he said. 'My dog had taken in into the garden. He often does this!'"
    ],
    "vocabulary": [
      {
        "word": "pub",
        "syllables": "pub",
        "phonetic": "/pʌb/",
        "definition": "noun. 酒吧；酒馆（指提供酒精饮料的公共场所，英国常用）",
        "example": "After I had had lunch at a village pub, I looked for my bag.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "landlord",
        "syllables": "landlord",
        "phonetic": "/ˈlændlɔːd/",
        "definition": "noun. 房东；店主（指出租房屋或经营店铺的人）",
        "example": "As I was looking for it, the landlord came in.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "bag",
        "syllables": "bag",
        "phonetic": "/bæɡ/",
        "definition": "noun. 袋子；手提包（指装东西的容器，此处指手提包）",
        "example": "After I had had lunch at a village pub, I looked for my bag.",
        "emoji": "✨",
        "longman": [
          "a container made of paper, cloth, or thin plastic, that usually opens at the top",
          "a handbag"
        ]
      },
      {
        "word": "chair",
        "syllables": "chair",
        "phonetic": "/tʃeə/",
        "definition": "noun. 椅子（指有靠背的坐具）",
        "example": "I had left it on a chair beside the door and now it wasn't there!",
        "emoji": "✨",
        "longman": [
          "a piece of furniture for one person to sit on, which has a back, a seat , and four legs",
          "the position of being in charge of a meeting or committee , or the person who is in charge of it",
          "the position of being a university professor"
        ]
      },
      {
        "word": "door",
        "syllables": "door",
        "phonetic": "/dɔː/",
        "definition": "noun. 门（指建筑物的入口）",
        "example": "I had left it on a chair beside the door and now it wasn't there!",
        "emoji": "✨",
        "longman": [
          "the large flat piece of wood, glass etc that you move when you go into or out of a building, room, vehicle etc, or when you open a cupboard",
          "the space made by an open door"
        ]
      },
      {
        "word": "garden",
        "syllables": "garden",
        "phonetic": "/ˈɡɑːdn/",
        "definition": "noun. 花园；菜园（指种植花草蔬菜的地方）",
        "example": "'My dog had taken in into the garden.",
        "emoji": "✨",
        "longman": [
          "the area of land next to a house, where there are flowers, grass, and other plants, and often a place for people to sit",
          "a part of the area next to a house, which has plants and flowers in it"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我在乡村酒吧吃完午饭后，开始找我的包。”（After + 主语 + had + 过去分词, 主语 + 动词过去式）？",
        "options": [
          "After I had had lunch at a village pub, I looked for my bag.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“After I had had lunch at a village pub, I looked for my bag.”（我在乡村酒吧吃完午饭后，开始找我的包。），重点掌握句型：After + 主语 + had + 过去分词, 主语 + 动词过去式。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（Subject + had + 过去分词 (done)）？",
        "options": [
          "He have go to school tomorrow.",
          "After I had had lunch, I looked for my bag.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“After I had had lunch, I looked for my bag.”（我吃完午饭后，开始找我的包。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作或状态，即\"过去的过去\"。"
      },
      {
        "question": "What does the word 'pub' (/pʌb/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 酒吧；酒馆"
        ],
        "answerIndex": 2,
        "explanation": "单词 'pub' 的意思是：noun. 酒吧；酒馆（指提供酒精饮料的公共场所，英国常用）。"
      }
    ],
    "funPrompt": "读完《He often does this!》后，试着用自己的话回答课前问题：What had happened to the writer's bag?"
  },
  {
    "id": 2019,
    "day": 19,
    "lessonNum": "19",
    "week": 1,
    "track": "nce2",
    "title": "L19: Sold out 票已售完",
    "coverEmoji": "🎟️",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 106,
    "intro": "🎯 课前导读问题：When will the writer see the play?\n📌 语法与句型重点：【情态动词 May/Might 表示可能性】主语 + may/might + 动词原形 — 用于谈论当前或将来的可能性。 例：The play may begin at any moment. (戏可能随时开始。) ｜ 【礼貌请求句型 Can/Could + 主语 + 动词原形】Can/Could + I/you + 动词原形? — 用于向他人请求帮助或物品，could显得更有礼貌。 例：Can I return these two tickets? (我可以退这两张票吗？)\n💬 核心短语：“May I have...?”（用于礼貌请求某物的句型）；“I'm sorry”（表示歉意或遗憾的礼貌用语）；“What a pity!”（表示遗憾或可惜的感叹句）",
    "paragraphs": [
      "'The play may begin at any moment,' I said.",
      "'It may have begun already,' Susan answered.",
      "I hurried to the ticket office. 'May I have two tickets please?' I asked.",
      "'I'm sorry, we've sold out,' the girl said.",
      "'What a pity!' Susan exclaimed.",
      "Just then, a man hurried to the ticket office.",
      "'Can I return these two tickets?' he asked.",
      "'Certainly,' the girl said.",
      "I went back to the ticket office at once.",
      "'Could I have those two tickets please?' I asked.",
      "'Certainly,' the girl said, 'but they're for next Wednesday's performance. Do you still want them?'",
      "'I might as well have them,' I said sadly."
    ],
    "vocabulary": [
      {
        "word": "play",
        "syllables": "play",
        "phonetic": "/pleɪ/",
        "definition": "n. 戏剧；话剧（指在剧院上演的戏剧表演）",
        "example": "'The play may begin at any moment,' I said.",
        "emoji": "✨",
        "longman": [
          "when children play, they do things that they enjoy, often with other people or with toys",
          "to take part or compete in a game or sport"
        ]
      },
      {
        "word": "moment",
        "syllables": "moment",
        "phonetic": "/ˈməʊmənt/",
        "definition": "n. 时刻；瞬间（指某个特定的时间点）",
        "example": "'The play may begin at any moment,' I said.",
        "emoji": "✨",
        "longman": [
          "a particular point in time",
          "a very short period of time"
        ]
      },
      {
        "word": "ticket",
        "syllables": "ticket",
        "phonetic": "/ˈtɪkɪt/",
        "definition": "n. 票；入场券（用于进入剧院、电影院等的凭证）",
        "example": "I hurried to the ticket office.",
        "emoji": "✨",
        "longman": [
          "a printed piece of paper which shows that you have paid to enter a cinema, travel on a bus, plane etc",
          "a printed piece of paper with a number on it that you buy because you will get a prize if that number is chosen"
        ]
      },
      {
        "word": "office",
        "syllables": "office",
        "phonetic": "/ˈɒfɪs/",
        "definition": "n. 办公室；售票处（可指办公场所或服务机构）",
        "example": "I hurried to the ticket office.",
        "emoji": "✨",
        "longman": [
          "a building that belongs to a company or an organization, with rooms where people can work at desks",
          "a room where someone has a desk and works, on their own or with other people"
        ]
      },
      {
        "word": "pity",
        "syllables": "pity",
        "phonetic": "/ˈpɪti/",
        "definition": "n. 遗憾；可惜（常与What a构成感叹句）",
        "example": "'What a pity!'",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "return",
        "syllables": "return",
        "phonetic": "/rɪˈtɜːn/",
        "definition": "v. 归还；退回（指把东西还给原主人或退回）",
        "example": "'Can I return these two tickets?'",
        "emoji": "✨",
        "longman": [
          "to go or come back to a place where you were before",
          "to give or send something back, or to put something back in its place",
          "if a feeling, situation etc returns, it starts to exist or happen again"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“请问我可以买两张票吗？”（May I have + 物品 + please?）？",
        "options": [
          "May I have two tickets please?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“May I have two tickets please?”（请问我可以买两张票吗？），重点掌握句型：May I have + 物品 + please?。"
      },
      {
        "question": "语法要点【情态动词 May/Might 表示可能性】：下列哪个例句符合本课语法结构（主语 + may/might + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "The play may begin at any moment.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The play may begin at any moment.”（戏可能随时开始。）展示了本课重点语法【情态动词 May/Might 表示可能性】：may和might用于表示某事可能发生，might比may更不确定。"
      },
      {
        "question": "What does the word 'play' (/pleɪ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "n.. 戏剧；话剧"
        ],
        "answerIndex": 2,
        "explanation": "单词 'play' 的意思是：n.. 戏剧；话剧（指在剧院上演的戏剧表演）。"
      }
    ],
    "funPrompt": "读完《Sold out》后，试着用自己的话回答课前问题：When will the writer see the play?"
  },
  {
    "id": 2020,
    "day": 20,
    "lessonNum": "20",
    "week": 1,
    "track": "nce2",
    "title": "L20: One man in a boat 独坐孤舟",
    "coverEmoji": "🎣",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 103,
    "intro": "🎯 课前导读问题：Why is fishing the writer's favourite sport?\n📌 语法与句型重点：【现在进行时态 (Present Continuous Tense)】主语 + am/is/are + 动词-ing + 其他 — 用于描述说话时正在进行的动作，或阶段性正在发生的动作。 例：I am fishing now. (我现在正在钓鱼。) ｜ 【频率副词在句中的位置】主语 + 频率副词 + 动词 / 主语 + be动词 + 频率副词 + 其他 — 用于描述动作发生的频率。 例：I often fish for hours. (我经常一钓就是几个小时。)\n💬 核心短语：“spend time (in) doing something”（花时间做某事）；“instead of”（代替；而不是）；“give up”（放弃；戒除）",
    "paragraphs": [
      "Fishing is my favourite sport. I often fish for hours without catching anything. But this does not worry me. Some fishermen are unlucky.",
      "Instead of catching fish, they catch old boots and rubbish. I am even less lucky. I never catch anything -- not even old boots. After having spent whole mornings on the river, I always go home with an empty bag.",
      "'You must give up fishing!' my friends say. 'It's a waste of time.' But they don't realize one important thing.",
      "I'm not really interested in fishing. I am only interested in sitting in a boat and doing nothing at all!"
    ],
    "vocabulary": [
      {
        "word": "fishing",
        "syllables": "fishing",
        "phonetic": "/ˈfɪʃɪŋ/",
        "definition": "noun. 钓鱼；捕鱼（指钓鱼这项活动或运动）",
        "example": "Fishing is my favourite sport.",
        "emoji": "✨",
        "longman": [
          "the sport or business of catching fish"
        ]
      },
      {
        "word": "favourite",
        "syllables": "favourite",
        "phonetic": "/ˈfeɪvərɪt/",
        "definition": "adjective. 最喜欢的（修饰名词，表示最喜欢的人或事物）",
        "example": "Fishing is my favourite sport.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "catch",
        "syllables": "catch",
        "phonetic": "/kætʃ/",
        "definition": "verb. 捕捉；抓住（过去式为caught，表示抓住或捕获）",
        "example": "I often fish for hours without catching anything.",
        "emoji": "✨",
        "longman": [
          "to get hold of and stop an object such as a ball that is moving through the air",
          "to suddenly take hold of someone or something with your hand"
        ]
      },
      {
        "word": "unlucky",
        "syllables": "unlucky",
        "phonetic": "/ʌnˈlʌki/",
        "definition": "adjective. 不幸的；运气不好的（由lucky加前缀un-构成的反义词）",
        "example": "Some fishermen are unlucky.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "instead",
        "syllables": "instead",
        "phonetic": "/ɪnˈsted/",
        "definition": "adverb. 代替；反而（常与of连用，表示代替或转换）",
        "example": "Instead of catching fish, they catch old boots and rubbish.",
        "emoji": "✨",
        "longman": [
          "used to say what is done, when you have just said that a particular thing is not done",
          "used when saying that a particular thing is used or happens and not another thing, or that someone does something and not another person"
        ]
      },
      {
        "word": "rubbish",
        "syllables": "rubbish",
        "phonetic": "/ˈrʌbɪʃ/",
        "definition": "noun. 垃圾；废物（英式英语常用，美式英语多用garbage或trash）",
        "example": "Instead of catching fish, they catch old boots and rubbish.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我经常一钓就是几个小时却什么都抓不到。”（主语 + often + 动词 + for hours without + 动词-ing）？",
        "options": [
          "I often fish for hours without catching anything.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I often fish for hours without catching anything.”（我经常一钓就是几个小时却什么都抓不到。），重点掌握句型：主语 + often + 动词 + for hours without + 动词-ing。"
      },
      {
        "question": "语法要点【现在进行时态 (Present Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + am/is/are + 动词-ing + 其他）？",
        "options": [
          "He have go to school tomorrow.",
          "I am fishing now.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I am fishing now.”（我现在正在钓鱼。）展示了本课重点语法【现在进行时态 (Present Continuous Tense)】：表示正在进行的动作或发生的事态，常与now, at present等时间状语连用。"
      },
      {
        "question": "What does the word 'fishing' (/ˈfɪʃɪŋ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 钓鱼；捕鱼"
        ],
        "answerIndex": 2,
        "explanation": "单词 'fishing' 的意思是：noun. 钓鱼；捕鱼（指钓鱼这项活动或运动）。"
      }
    ],
    "funPrompt": "读完《One man in a boat》后，试着用自己的话回答课前问题：Why is fishing the writer's favourite sport?"
  },
  {
    "id": 2021,
    "day": 21,
    "lessonNum": "21",
    "week": 1,
    "track": "nce2",
    "title": "L21: Mad or not? 是不是疯了",
    "coverEmoji": "✈️",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 109,
    "intro": "🎯 课前导读问题：Why do people think the writer is mad?\n📌 语法与句型重点：【现在完成时的被动语态 (Present Perfect Passive)】have/has + been + 过去分词 — 用于强调动作的承受者，或动作执行者不明确/不重要时。 例：The airport has come into use. (机场已经开始使用了。) ｜ 【must表示推测 (Must for Deduction)】must + 动词原形（对现在推测）；must have + 过去分词（对过去推测） — must表示推测时只用于肯定句，否定句用can't，疑问句用can。 例：Everybody says I must be mad. (大家都说我一定是疯了。)\n💬 核心短语：“night and day”（日以继夜，表示持续不断发生）；“drive sb. mad”（使某人发疯/抓狂）；“come into use”（开始被使用/启用）",
    "paragraphs": [
      "Aeroplanes are slowly driving me mad. I live near an airport and passing planes can be heard night and day. The airport was built years ago, but for some reason it could not be used then. Last year, however, it came into use.",
      "Over a hundred people must have been driven away from their homes by the noise. I am one of the few people left. Sometimes I think this house will be knocked down by a passing plane. I have been offered a large sum of money to go away, but I am determined to stay here.",
      "Everybody says I must be mad and they are probably right."
    ],
    "vocabulary": [
      {
        "word": "aeroplane",
        "syllables": "aeroplane",
        "phonetic": "/ˈeərəpleɪn/",
        "definition": "noun. 飞机（指交通工具，常用英式拼写，美式为airplane）",
        "example": "Aeroplanes are slowly driving me mad.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "mad",
        "syllables": "mad",
        "phonetic": "/mæd/",
        "definition": "adjective. 疯狂的；发疯的（形容人的精神状态，也可表示对某事疯狂热衷（be mad about））",
        "example": "Aeroplanes are slowly driving me mad.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "airport",
        "syllables": "airport",
        "phonetic": "/ˈeəpɔːt/",
        "definition": "noun. 机场；航空站（供飞机起飞、降落、停放的场所）",
        "example": "I live near an airport and passing planes can be heard night and day.",
        "emoji": "✨",
        "longman": [
          "a place where planes take off and land, with buildings for passengers to wait in",
          "a big building where people wait to get onto planes"
        ]
      },
      {
        "word": "pass",
        "syllables": "pass",
        "phonetic": "/pɑːs/",
        "definition": "verb. 经过；通过（指从某地经过或穿过某物）",
        "example": "I live near an airport and passing planes can be heard night and day.",
        "emoji": "✨",
        "longman": [
          "to come up to a particular place, person, or object and go past them",
          "to go or travel along or through a place"
        ]
      },
      {
        "word": "noise",
        "syllables": "noise",
        "phonetic": "/nɔɪz/",
        "definition": "noun. 噪音；嘈杂声（指不悦耳的声音，常与make, cause等词搭配）",
        "example": "Over a hundred people must have been driven away from their homes by the noise.",
        "emoji": "✨",
        "longman": [
          "a sound, especially one that is loud, unpleasant, or frightening",
          "unwanted signals produced by an electrical circuit"
        ]
      },
      {
        "word": "drive",
        "syllables": "drive",
        "phonetic": "/draɪv/",
        "definition": "verb. 驱使；开车送；迫使（drive sb. mad意为使某人发疯；drive away意为驱赶）",
        "example": "Over a hundred people must have been driven away from their homes by the noise.",
        "emoji": "✨",
        "longman": [
          "to make a car, truck, bus etc move along",
          "if a car, truck etc drives somewhere, it moves there"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“飞机正慢慢让我发疯。”（be doing sb. good/harm/mad）？",
        "options": [
          "Aeroplanes are slowly driving me mad.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Aeroplanes are slowly driving me mad.”（飞机正慢慢让我发疯。），重点掌握句型：be doing sb. good/harm/mad。"
      },
      {
        "question": "语法要点【现在完成时的被动语态 (Present Perfect Passive)】：下列哪个例句符合本课语法结构（have/has + been + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "The airport has come into use.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The airport has come into use.”（机场已经开始使用了。）展示了本课重点语法【现在完成时的被动语态 (Present Perfect Passive)】：表示一个过去的动作对现在造成影响，且主语是动作的承受者。"
      },
      {
        "question": "What does the word 'aeroplane' (/ˈeərəpleɪn/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 飞机"
        ],
        "answerIndex": 2,
        "explanation": "单词 'aeroplane' 的意思是：noun. 飞机（指交通工具，常用英式拼写，美式为airplane）。"
      }
    ],
    "funPrompt": "读完《Mad or not?》后，试着用自己的话回答课前问题：Why do people think the writer is mad?"
  },
  {
    "id": 2022,
    "day": 22,
    "lessonNum": "22",
    "week": 1,
    "track": "nce2",
    "title": "L22: A glass envelope 玻璃信封",
    "coverEmoji": "🍾",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 98,
    "intro": "🎯 课前导读问题：How did Jane receive a letter from a stranger?\n📌 语法与句型重点：【一般过去时（Simple Past Tense）】主语 + 动词过去式 — 用于叙述过去发生的事情，如故事、经历、历史事件等。 例：Last year, we were travelling across the Channel. (去年，我们正在穿越英吉利海峡。) ｜ 【一般将来时（Simple Future Tense）】主语 + will + 动词原形 / 主语 + be going to + 动词原形 — 用于预测、计划、承诺等将来发生的事情。 例：Letters will cost a little more. (信件将会贵一点。)\n💬 核心短语：“never dreamed of”（表示从未想过、从不敢想，用于强调意外或惊讶）；“put...into”（把...放入...，表示将东西放进容器或地方）；“throw into”（把...扔进...，强调动作的方向性）",
    "paragraphs": [
      "My daughter, Jane, never dreamed of receiving a letter from a girl of her own age in Holland. Last year, we were travelling across the Channel and Jane put a piece of paper with her name and address on it into a bottle. She threw the bottle into the sea. She never thought of it again, but ten months later, she received a letter from a girl in Holland.",
      "Both girls write to each other regularly now. However, they have decided to use the post office. Letters will cost a little more, but they will certainly travel faster."
    ],
    "vocabulary": [
      {
        "word": "stranger",
        "syllables": "stranger",
        "phonetic": "/ˈstreɪndʒə(r)/",
        "definition": "noun. 陌生人（指不认识的人或不太熟悉的人）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "someone that you do not know",
          "someone in a new and unfamiliar place"
        ]
      },
      {
        "word": "receive",
        "syllables": "receive",
        "phonetic": "/rɪˈsiːv/",
        "definition": "verb. 收到；接到（表示被动地收到某物，如信件、礼物等）",
        "example": "She never thought of it again, but ten months later, she received a letter from a girl in Holland.",
        "emoji": "✨",
        "longman": [
          "to be given something",
          "to get a letter, message, or telephone call, or something which someone has sent you"
        ]
      },
      {
        "word": "daughter",
        "syllables": "daughter",
        "phonetic": "/ˈdɔːtə(r)/",
        "definition": "noun. 女儿（指女性后代，与son（儿子）相对）",
        "example": "My daughter, Jane, never dreamed of receiving a letter from a girl of her own age in Holland.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "dream",
        "syllables": "dream",
        "phonetic": "/driːm/",
        "definition": "verb. 做梦；梦想（dream of doing something 表示梦想做某事）",
        "example": "My daughter, Jane, never dreamed of receiving a letter from a girl of her own age in Holland.",
        "emoji": "✨",
        "longman": [
          "a series of thoughts, images, and feelings that you experience when you are asleep",
          "a wish to do, be, or have something – used especially when this seems unlikely"
        ]
      },
      {
        "word": "travelling",
        "syllables": "travelling",
        "phonetic": "/ˈtrævəlɪŋ/",
        "definition": "verb. 旅行；旅游（travel的现在分词形式，表示正在进行的动作）",
        "example": "Last year, we were travelling across the Channel and Jane put a piece of paper with her name and address on it into a bottle.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "Channel",
        "syllables": "Channel",
        "phonetic": "/ˈtʃænl/",
        "definition": "noun. 海峡（特指英吉利海峡（the Channel）连接英国和法国）",
        "example": "Last year, we were travelling across the Channel and Jane put a piece of paper with her name and address on it into a bottle.",
        "emoji": "✨",
        "longman": [
          "a television station and all the programmes that it broadcasts",
          "a system or method that you use to send or obtain information, goods, permission etc",
          "an area of water that connects two larger areas of water"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“她再也没想过这件事了。”（主语 + never thought of + doing something）？",
        "options": [
          "She never thought of it again.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“She never thought of it again.”（她再也没想过这件事了。），重点掌握句型：主语 + never thought of + doing something。"
      },
      {
        "question": "语法要点【一般过去时（Simple Past Tense）】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "Last year, we were travelling across the Channel.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Last year, we were travelling across the Channel.”（去年，我们正在穿越英吉利海峡。）展示了本课重点语法【一般过去时（Simple Past Tense）】：表示在过去某个特定时间发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'stranger' (/ˈstreɪndʒə(r)/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 陌生人"
        ],
        "answerIndex": 2,
        "explanation": "单词 'stranger' 的意思是：noun. 陌生人（指不认识的人或不太熟悉的人）。"
      }
    ],
    "funPrompt": "读完《A glass envelope》后，试着用自己的话回答课前问题：How did Jane receive a letter from a stranger?"
  },
  {
    "id": 2023,
    "day": 23,
    "lessonNum": "23",
    "week": 1,
    "track": "nce2",
    "title": "L23: A new house 新居",
    "coverEmoji": "🏡",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 108,
    "intro": "🎯 课前导读问题：Why is the new house special?\n📌 语法与句型重点：【过去将来时 (Future in the Past)】主语 + would + 动词原形 — 当主句用过去时，从句要表示将来意义时使用。常用在said, told, thought等动词后的宾语从句中。。 例：She said that she would come to England next year. (她说她明年会来英国。) ｜ 【must be 推测用法】主语 + must be + 名词/形容词 — 用于对当前情况有把握的推测，语气比might be、could be更强。 例：It must be the only modern house in the district. (它一定是这个地区唯一的现代房子。)\n💬 核心短语：“had a letter from”（收到某人的来信）；“get a surprise”（感到惊讶；收到惊喜）；“stay with us”（和我们住在一起）",
    "paragraphs": [
      "I had a letter from my sister yesterday. She lives in Nigeria. In her letter, she said that she would come to England next year. If she comes, she will get a surprise.",
      "We are now living in a beautiful new house in the country. Work on it had begun before my sister left. The house was completed five months ago. In my letter, I told her that she could stay with us.",
      "The house has many large rooms and there is a lovely garden. It is a very modern house, so it looks strange to some people. It must be the only modern house in the district."
    ],
    "vocabulary": [
      {
        "word": "letter",
        "syllables": "letter",
        "phonetic": "/ˈletə/",
        "definition": "noun. 信；信件（指书写或打印的通信文件，通常指纸质信件）",
        "example": "I had a letter from my sister yesterday.",
        "emoji": "✨",
        "longman": [
          "a written or printed message that is usually put in an envelope and sent by mail",
          "a sign in writing or printing that represents a speech sound"
        ]
      },
      {
        "word": "sister",
        "syllables": "sister",
        "phonetic": "/ˈsɪstə/",
        "definition": "noun. 姐妹；姐姐；妹妹（指同父母或同父异母/同母异父的女性）",
        "example": "I had a letter from my sister yesterday.",
        "emoji": "✨",
        "longman": [
          "a girl or woman who has the same parents as you",
          "a nun"
        ]
      },
      {
        "word": "Nigeria",
        "syllables": "Nigeria",
        "phonetic": "/naɪˈdʒɪəriə/",
        "definition": "noun. 尼日利亚（非洲国家）（作为专有名词，首字母大写）",
        "example": "She lives in Nigeria.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "surprise",
        "syllables": "surprise",
        "phonetic": "/səˈpraɪz/",
        "definition": "noun. 惊讶；惊喜；意外之事（指令人意想不到的事情或突然的惊喜感）",
        "example": "If she comes, she will get a surprise.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "beautiful",
        "syllables": "beautiful",
        "phonetic": "/ˈbjuːtɪfl/",
        "definition": "adjective. 美丽的；漂亮的（用于描述外观、景色等令人愉悦的事物）",
        "example": "We are now living in a beautiful new house in the country.",
        "emoji": "✨",
        "longman": [
          "someone or something that is beautiful is extremely attractive to look at",
          "very good or giving you great pleasure"
        ]
      },
      {
        "word": "country",
        "syllables": "country",
        "phonetic": "/ˈkʌntri/",
        "definition": "noun. 乡村；农村；国家（作'乡村'讲时，与city（城市）相对）",
        "example": "We are now living in a beautiful new house in the country.",
        "emoji": "✨",
        "longman": [
          "an area of land that is controlled by its own government, president, king etc",
          "an area of land that is suitable for a particular activity, has particular features, or is connected with a particular person or people"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“昨天我收到了姐姐的来信。”（主语 + had a letter from + 某人）？",
        "options": [
          "I had a letter from my sister yesterday.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I had a letter from my sister yesterday.”（昨天我收到了姐姐的来信。），重点掌握句型：主语 + had a letter from + 某人。"
      },
      {
        "question": "语法要点【过去将来时 (Future in the Past)】：下列哪个例句符合本课语法结构（主语 + would + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "She said that she would come to England next year.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“She said that she would come to England next year.”（她说她明年会来英国。）展示了本课重点语法【过去将来时 (Future in the Past)】：表示从过去的角度来看将要发生的动作或状态，常用于宾语从句中。。"
      },
      {
        "question": "What does the word 'letter' (/ˈletə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 信；信件"
        ],
        "answerIndex": 2,
        "explanation": "单词 'letter' 的意思是：noun. 信；信件（指书写或打印的通信文件，通常指纸质信件）。"
      }
    ],
    "funPrompt": "读完《A new house》后，试着用自己的话回答课前问题：Why is the new house special?"
  },
  {
    "id": 2024,
    "day": 24,
    "lessonNum": "24",
    "week": 1,
    "track": "nce2",
    "title": "L24: If could be worse 不幸中之万幸",
    "coverEmoji": "💵",
    "category": "新概念二册 • Unit 1 (Lessons 1–24)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 1",
    "readingTime": "3 mins",
    "wordCount": 103,
    "intro": "🎯 课前导读问题：Had the writer's money been stolen?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。 例：I had just lost £50 when I went to the manager. (当我去找经理时，我刚刚丢了50英镑。) ｜ 【some在肯定句中的用法】some + 可数名词复数/不可数名词 — some用于肯定句中可以指代不确定的数量，也可用于邀请或期望肯定回答的疑问句中。 例：There is still some honesty in this world. (这个世界上仍然有一些诚实。)\n💬 核心短语：“lose money”（丢钱，损失金钱）；“feel upset”（感到不安/难过）；“leave something in somewhere”（把某物落在某处）",
    "paragraphs": [
      "I entered the hotel manager's office and sat down. I had just lost $50 and I felt very upset. 'I left the money in my room,' I said, 'and it's not there now.' The manager was sympathetic, but he could do nothing.",
      "'Everyone's losing money these days,' he said. He started to complain about this wicked world but was interrupted by a knock at the door. A girl came in and put an envelope on his desk. It contained $50.",
      "'I found this outside this gentleman's room,' she said. 'Well,' I said to the manager, 'there is still some honesty in this world!'"
    ],
    "vocabulary": [
      {
        "word": "manager",
        "syllables": "manager",
        "phonetic": "/ˈmænɪdʒə/",
        "definition": "noun. 经理（指负责管理酒店、商店等的人）",
        "example": "I entered the hotel manager's office and sat down.",
        "emoji": "✨",
        "longman": [
          "someone whose job is to manage part or all of a company or other organization",
          "someone who is in charge of training and organizing a sports team"
        ]
      },
      {
        "word": "upset",
        "syllables": "upset",
        "phonetic": "/ʌpˈset/",
        "definition": "adjective. 难过的，不安的（形容人心情不好，感到不安或失望）",
        "example": "I had just lost $50 and I felt very upset.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "sympathetic",
        "syllables": "sympathetic",
        "phonetic": "/ˌsɪmpəˈθetɪk/",
        "definition": "adjective. 表示同情的（对别人的遭遇表示理解和同情）",
        "example": "The manager was sympathetic, but he could do nothing.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "wicked",
        "syllables": "wicked",
        "phonetic": "/ˈwɪkɪd/",
        "definition": "adjective. 邪恶的，很坏的（形容人的行为恶劣或不道德）",
        "example": "He started to complain about this wicked world but was interrupted by a knock at the door.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "world",
        "syllables": "world",
        "phonetic": "/wɜːld/",
        "definition": "noun. 世界（指地球或人类居住的地方）",
        "example": "He started to complain about this wicked world but was interrupted by a knock at the door.",
        "emoji": "✨",
        "longman": [
          "the society that we live in, the way people behave, and the kind of life we have",
          "a particular group of countries"
        ]
      },
      {
        "word": "envelope",
        "syllables": "envelope",
        "phonetic": "/ˈenvələʊp/",
        "definition": "noun. 信封（用于装信或钱的纸袋）",
        "example": "A girl came in and put an envelope on his desk.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我刚刚丢了50英镑。”（I had just + 过去分词）？",
        "options": [
          "I had just lost £50.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I had just lost £50.”（我刚刚丢了50英镑。），重点掌握句型：I had just + 过去分词。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "I had just lost £50 when I went to the manager.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I had just lost £50 when I went to the manager.”（当我去找经理时，我刚刚丢了50英镑。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时间之前已经完成的动作，强调'过去的过去'。"
      },
      {
        "question": "What does the word 'manager' (/ˈmænɪdʒə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 经理"
        ],
        "answerIndex": 2,
        "explanation": "单词 'manager' 的意思是：noun. 经理（指负责管理酒店、商店等的人）。"
      }
    ],
    "funPrompt": "读完《If could be worse》后，试着用自己的话回答课前问题：Had the writer's money been stolen?"
  },
  {
    "id": 2025,
    "day": 25,
    "lessonNum": "25",
    "week": 2,
    "track": "nce2",
    "title": "L25: Do the English speak English? 英国人讲的是英语吗？",
    "coverEmoji": "🚢",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "3 mins",
    "wordCount": 139,
    "intro": "🎯 课前导读问题：Why does the writer not understand the porter?\n📌 语法与句型重点：【not only...but (also)... 结构】not only + 形容词/副词/动词 + but (also) + 形容词/副词/动词 — 用于强调不仅有某一特征，还有另一特征，also有时可省略。。 例：She is not only beautiful but also intelligent. (她不仅漂亮而且聪明。) ｜ 【neither...nor... 结构】neither + A + nor + B (A和B通常为相同的词性) — 当连接两个主语时，谓语动词与靠近的主语一致（就近一致原则）。。 例：He is neither tall nor short. (他既不高也不矮。)\n💬 核心短语：“at last”（终于；最后；最终）；“not only...but (also)...”（不仅...而且...）；“several times”（好几次；几次）",
    "paragraphs": [
      "I arrived in London at last. The railway station was big, black and dark. I did not know the way to my hotel, so I asked a porter. I not only spoke English very carefully, but very clearly as well.",
      "The porter, however, could not understand me. I repeated my question several times and at last he understood. he answered me, but he spoke neither slowly nor clearly. 'I am a foreigner,' I said.",
      "Then he spoke slowly, but I could not understand him. My teacher never spoke English like that! The porter and I looked at each other and smiled. Then he said something and I understood it.",
      "'You'll soon learn English!' he said. I wonder. In England, each person speaks a different language.",
      "The English understand each other, but I don't understand them! Do they speak English?"
    ],
    "vocabulary": [
      {
        "word": "railway",
        "syllables": "railway",
        "phonetic": "/ˈreɪlweɪ/",
        "definition": "noun. 铁路；铁道（通常指铁路系统或火车轨道）",
        "example": "The railway station was big, black and dark.",
        "emoji": "✨",
        "longman": [
          "a system of tracks along which trains run, or a system of trains",
          "a method of traveling or moving goods by train"
        ]
      },
      {
        "word": "station",
        "syllables": "station",
        "phonetic": "/ˈsteɪʃn/",
        "definition": "noun. 车站（指火车、地铁等的停靠站点）",
        "example": "The railway station was big, black and dark.",
        "emoji": "✨",
        "longman": [
          "a place where trains or buses regularly stop so that passengers can get on and off, goods can be loaded etc, or the buildings at such a place",
          "a building or place that is a center for a particular kind of service or activity",
          "an organization which makes television or radio broadcasts , or the building where this is done"
        ]
      },
      {
        "word": "porter",
        "syllables": "porter",
        "phonetic": "/ˈpɔːtə(r)/",
        "definition": "noun. 行李员；搬运工（在火车站、旅馆等处帮人搬行李的人）",
        "example": "I did not know the way to my hotel, so I asked a porter.",
        "emoji": "✨",
        "longman": [
          "someone whose job is to carry people’s bags at railway stations, airports etc",
          "someone in charge of the entrance to a hotel, hospital etc"
        ]
      },
      {
        "word": "understand",
        "syllables": "understand",
        "phonetic": "/ˌʌndəˈstænd/",
        "definition": "verb. 理解；懂（表示明白某人的意思或某事的含义，过去式为understood）",
        "example": "The porter, however, could not understand me.",
        "emoji": "✨",
        "longman": [
          "to know the meaning of what someone is telling you, or the language that they speak",
          "to know or realize how a fact, process, situation etc works, especially through learning or experience"
        ]
      },
      {
        "word": "foreigner",
        "syllables": "foreigner",
        "phonetic": "/ˈfɒrənə(r)/",
        "definition": "noun. 外国人（指来自其他国家的人）",
        "example": "'I am a foreigner,' I said.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "repeat",
        "syllables": "repeat",
        "phonetic": "/rɪˈpiːt/",
        "definition": "verb. 重复；重说（指再次说或做同样的事情）",
        "example": "I repeated my question several times and at last he understood.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我不知道去我酒店的路，所以我向一个行李员询问。”（I did not know the way to + 地点, so I asked + 某人）？",
        "options": [
          "I did not know the way to my hotel, so I asked a porter.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I did not know the way to my hotel, so I asked a porter.”（我不知道去我酒店的路，所以我向一个行李员询问。），重点掌握句型：I did not know the way to + 地点, so I asked + 某人。"
      },
      {
        "question": "语法要点【not only...but (also)... 结构】：下列哪个例句符合本课语法结构（not only + 形容词/副词/动词 + but (also) + 形容词/副词/动词）？",
        "options": [
          "He have go to school tomorrow.",
          "She is not only beautiful but also intelligent.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“She is not only beautiful but also intelligent.”（她不仅漂亮而且聪明。）展示了本课重点语法【not only...but (also)... 结构】：表示不仅有某种情况，而且有另一种情况，强调两个方面的关联性。。"
      },
      {
        "question": "What does the word 'railway' (/ˈreɪlweɪ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 铁路；铁道"
        ],
        "answerIndex": 2,
        "explanation": "单词 'railway' 的意思是：noun. 铁路；铁道（通常指铁路系统或火车轨道）。"
      }
    ],
    "funPrompt": "读完《Do the English speak English?》后，试着用自己的话回答课前问题：Why does the writer not understand the porter?"
  },
  {
    "id": 2026,
    "day": 26,
    "lessonNum": "26",
    "week": 2,
    "track": "nce2",
    "title": "L26: The best art critics 最佳艺术评论家",
    "coverEmoji": "🎨",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 145,
    "intro": "🎯 课前导读问题：Who is the student's best critic?\n📌 语法与句型重点：【现在进行时 (Present Continuous Tense)】主语 + am/is/are + 动词-ing — 描述说话时正在进行的动作。 例：I'm hanging this picture on the wall. (我正把这幅画挂在墙上。) ｜ 【一般过去时 (Simple Past Tense)】主语 + 动词过去式 — 描述过去已完成的动作。 例：She came into my room yesterday. (她昨天走进我的房间。)\n💬 核心短语：“in the same way”（以同样的方式；如同）；“come into”（进入；走进）；“look at something critically”（批判性地看待某事物）",
    "paragraphs": [
      "I am an art student and I paint a lot of pictures. Many people pretend that they understand modern art. They always tell you what a picture is 'about'. Of course, many pictures are not 'about' anything.",
      "They are just pretty patterns. We like them in the same way that we like pretty curtain material. I think that young children often appreciate modern pictures better than anyone else. They notice more.",
      "My sister is only seven, but she always tells me whether my pictures are good or not. She came into my room yesterday.",
      "'What are you doing?' she asked.",
      "'I'm hanging this picture on the wall,' I answered. 'It's a new one. Do you like it?'",
      "She looked at it critically for a moment. 'It's all right,' she said, 'but isn't it upside down?'",
      "I looked at it again. She was right! It was!"
    ],
    "vocabulary": [
      {
        "word": "art",
        "syllables": "art",
        "phonetic": "/ɑːt/",
        "definition": "noun. 艺术；美术（指绘画、雕塑等视觉艺术形式）",
        "example": "I am an art student and I paint a lot of pictures.",
        "emoji": "✨",
        "longman": [
          "the use of painting, drawing, sculpture",
          "objects that are produced by art, such as paintings, drawings etc"
        ]
      },
      {
        "word": "paint",
        "syllables": "paint",
        "phonetic": "/peɪnt/",
        "definition": "verb. 画；绘画（用颜料创作图画）；noun. 油漆；颜料（作名词时指绘画材料）",
        "example": "I am an art student and I paint a lot of pictures.",
        "emoji": "✨",
        "longman": [
          "a liquid that you put on a surface, using a brush to make the surface a particular color",
          "to put paint on a surface"
        ]
      },
      {
        "word": "pretend",
        "syllables": "pretend",
        "phonetic": "/prɪˈtend/",
        "definition": "verb. 假装；装作（to act as if something is true when it is not）",
        "example": "Many people pretend that they understand modern art.",
        "emoji": "✨",
        "longman": [
          "to behave as if something is true when in fact you know it is not, in order to deceive people or for fun",
          "to claim that something is true, when it is not"
        ]
      },
      {
        "word": "modern",
        "syllables": "modern",
        "phonetic": "/ˈmɒdən/",
        "definition": "adjective. 现代的；当代的（指当前时代或近期的艺术风格）",
        "example": "Many people pretend that they understand modern art.",
        "emoji": "✨",
        "longman": [
          "belonging to the present time or most recent time",
          "made or done using the most recent designs or methods"
        ]
      },
      {
        "word": "appreciate",
        "syllables": "appreciate",
        "phonetic": "/əˈpriːʃieɪt/",
        "definition": "verb. 欣赏；赏识（理解和欣赏事物价值）",
        "example": "I think that young children often appreciate modern pictures better than anyone else.",
        "emoji": "✨",
        "longman": [
          "to understand how serious or important a situation or problem is or what someone’s feelings are",
          "used to thank someone in a polite way or to say that you are grateful for something they have done"
        ]
      },
      {
        "word": "notice",
        "syllables": "notice",
        "phonetic": "/ˈnəʊtɪs/",
        "definition": "verb. 注意到；察觉（观察到或意识到某事）；noun. 通知；公告（正式的通知或警告）",
        "example": "They notice more.",
        "emoji": "✨",
        "longman": [
          "if you notice something or someone, you realize that they exist, especially because you can see, hear, or feel them",
          "to realize that something is there or that something is happening, because you can see, hear, or feel it"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“你在做什么？”（What are you doing?）？",
        "options": [
          "What are you doing?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“What are you doing?”（你在做什么？），重点掌握句型：What are you doing?。"
      },
      {
        "question": "语法要点【现在进行时 (Present Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + am/is/are + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "I'm hanging this picture on the wall.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I'm hanging this picture on the wall.”（我正把这幅画挂在墙上。）展示了本课重点语法【现在进行时 (Present Continuous Tense)】：表示正在进行的动作或发生的事件，常与now, at the moment等时间状语连用。"
      },
      {
        "question": "What does the word 'art' (/ɑːt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 艺术；美术"
        ],
        "answerIndex": 2,
        "explanation": "单词 'art' 的意思是：noun. 艺术；美术（指绘画、雕塑等视觉艺术形式）。"
      }
    ],
    "funPrompt": "读完《The best art critics》后，试着用自己的话回答课前问题：Who is the student's best critic?"
  },
  {
    "id": 2027,
    "day": 27,
    "lessonNum": "27",
    "week": 2,
    "track": "nce2",
    "title": "L27: A wet night 雨夜",
    "coverEmoji": "⛺",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 147,
    "intro": "🎯 课前导读问题：What happened to the boys in the night?\n📌 语法与句型重点：【一般过去时 (Past Simple Tense)】主语 + 动词过去式 — 用于叙述过去发生的事情，描述一系列按时间顺序发生的动作。 例：The boys put up their tent in the field. (男孩们在田地里搭起了帐篷。) ｜ 【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述在过去某一时刻正在发生的动作，常与过去进行时连用。 例：It was raining heavily. (雨下得很大。)\n💬 核心短语：“put up”（搭起；张贴）；“as soon as”（一...就...）；“put out”（熄灭；扑灭）",
    "paragraphs": [
      "Late in the afternoon, the boys put up their tent in the middle of a field. As soon as this was done, they cooked a meal over an open fire. They were all hungry and the food smelled good. After a wonderful meal, they told stories and sang songs by the campfire.",
      "But some time later it began to rain. The boys felt tired so they put out the fire and crept into their tent. Their sleeping bags were warm and comfortable, so they all slept soundly. In the middle of the night, two boys woke up and began shouting.",
      "The tent was full of water! They all leapt out of their sleeping bags and hurried outside. It was raining heavily and they found that a stream had formed in the field. The stream wound its way across the field and then flowed right under their tent!"
    ],
    "vocabulary": [
      {
        "word": "tent",
        "syllables": "tent",
        "phonetic": "/tent/",
        "definition": "noun. 帐篷（指露营用的临时住所）",
        "example": "Late in the afternoon, the boys put up their tent in the middle of a field.",
        "emoji": "✨",
        "longman": [
          "a shelter consisting of a sheet of cloth supported by poles and ropes, used especially for camping"
        ]
      },
      {
        "word": "field",
        "syllables": "field",
        "phonetic": "/fiːld/",
        "definition": "noun. 田地；场地（指一片开阔的草地或农田）",
        "example": "Late in the afternoon, the boys put up their tent in the middle of a field.",
        "emoji": "✨",
        "longman": [
          "an area of land in the country, especially one where crops are grown or animals feed on grass",
          "a subject that people study or an area of activity that they are involved in as part of their work",
          "an area of ground where sports are played"
        ]
      },
      {
        "word": "campfire",
        "syllables": "campfire",
        "phonetic": "/ˈkæmpaɪə(r)/",
        "definition": "noun. 营火；篝火（指露营时在野外生的火）",
        "example": "After a wonderful meal, they told stories and sang songs by the campfire.",
        "emoji": "✨",
        "longman": [
          "a fire made outdoors by people who are camping"
        ]
      },
      {
        "word": "wonderful",
        "syllables": "wonderful",
        "phonetic": "/ˈwʌndəfl/",
        "definition": "adj. 精彩的；极好的（形容事物非常好、令人愉快）",
        "example": "After a wonderful meal, they told stories and sang songs by the campfire.",
        "emoji": "✨",
        "longman": [
          "making you feel very happy",
          "making you admire someone or something very much"
        ]
      },
      {
        "word": "creep",
        "syllables": "creep",
        "phonetic": "/kriːp/",
        "definition": "verb. 爬行；悄悄地移动（过去式为crept，指无声地缓慢移动）",
        "example": "",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "soundly",
        "syllables": "soundly",
        "phonetic": "/ˈsaʊndli/",
        "definition": "adv. 香甜地；安稳地（形容睡得很沉、很踏实）",
        "example": "Their sleeping bags were warm and comfortable, so they all slept soundly.",
        "emoji": "✨",
        "longman": [
          "if you sleep soundly, you sleep deeply and peacefully"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“这件事一做完，他们就在篝火上做了饭。”（As soon as + 主语 + 动词(过去式)..., 主语 + 动词(过去式)...）？",
        "options": [
          "As soon as this was done, they cooked a meal over an open fire.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“As soon as this was done, they cooked a meal over an open fire.”（这件事一做完，他们就在篝火上做了饭。），重点掌握句型：As soon as + 主语 + 动词(过去式)..., 主语 + 动词(过去式)...。"
      },
      {
        "question": "语法要点【一般过去时 (Past Simple Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "The boys put up their tent in the field.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The boys put up their tent in the field.”（男孩们在田地里搭起了帐篷。）展示了本课重点语法【一般过去时 (Past Simple Tense)】：表示过去某个时间发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'tent' (/tent/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 帐篷"
        ],
        "answerIndex": 2,
        "explanation": "单词 'tent' 的意思是：noun. 帐篷（指露营用的临时住所）。"
      }
    ],
    "funPrompt": "读完《A wet night》后，试着用自己的话回答课前问题：What happened to the boys in the night?"
  },
  {
    "id": 2028,
    "day": 28,
    "lessonNum": "28",
    "week": 2,
    "track": "nce2",
    "title": "L28: No parking 禁止停车",
    "coverEmoji": "🪨",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 151,
    "intro": "🎯 课前导读问题：What is Jasper White's problem?\n📌 语法与句型重点：【现在完成时 (Present Perfect Tense)】主语 + have/has + 过去分词 — 用于描述过去的经验或持续到现在的状态，常与ever since、for、already等连用。 例：He has just bought a new house. (他刚买了一栋新房子。) ｜ 【现在完成进行时 (Present Perfect Continuous Tense)】主语 + have/has + been + 动词-ing形式 — 强调动作的持续性，常与ever since、for等时间状语连用。 例：He has been having trouble with cars and their owners. (他一直和汽车及车主有麻烦。)\n💬 核心短语：“park a car”（表示停放汽车的动作）；“have trouble with”（表示与某人某事有麻烦或纠纷）；“put up”（表示张贴、建造或竖起某物）",
    "paragraphs": [
      "Jasper White is one of those rare people who believes in ancient myths. he has just bought a new house in the city, but ever since he moved in, he has had trouble with cars and their owners. When he returns home at night, he always finds that someone has parked a car outside his gate. Because of this, he has not been able to get his own car into his garage even once.",
      "Jasper has put up 'No Parking' signs outside his gate, but these have not had any effect. Now he has put an ugly stone head over the gate. It is one of the ugliest faces I have ever seen. I asked him what it was and he told me that it was Medusa, the Gorgon.",
      "jasper hopes that she will turn cars and their owners to stone. But none of them has been turned to stone yet!"
    ],
    "vocabulary": [
      {
        "word": "rare",
        "syllables": "rare",
        "phonetic": "/reə(r)/",
        "definition": "adj. 稀有的，罕见的（形容少见或不普通的事物，强调稀缺性）",
        "example": "Jasper White is one of those rare people who believes in ancient myths.",
        "emoji": "✨",
        "longman": [
          "not seen or found very often, or not happening very often",
          "meat that is rare has only been cooked for a short time and is still red"
        ]
      },
      {
        "word": "ancient",
        "syllables": "ancient",
        "phonetic": "/ˈeɪnʃənt/",
        "definition": "adj. 古代的，古老的（指很久以前存在的事物，与现代相对）",
        "example": "Jasper White is one of those rare people who believes in ancient myths.",
        "emoji": "✨",
        "longman": [
          "belonging to a time long ago in history, especially thousands of years ago",
          "having existed for a very long time"
        ]
      },
      {
        "word": "myth",
        "syllables": "myth",
        "phonetic": "/mɪθ/",
        "definition": "n. 神话（指古代民间传说中关于神、英雄的故事）",
        "example": "Jasper White is one of those rare people who believes in ancient myths.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "trouble",
        "syllables": "trouble",
        "phonetic": "/ˈtrʌbl/",
        "definition": "n. 麻烦，问题（指造成困难或不便的情况）",
        "example": "he has just bought a new house in the city, but ever since he moved in, he has had trouble with cars and their owners.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "park",
        "syllables": "park",
        "phonetic": "/pɑːk/",
        "definition": "v. 停车（指将车辆停放在某处）",
        "example": "When he returns home at night, he always finds that someone has parked a car outside his gate.",
        "emoji": "✨",
        "longman": [
          "a large open area with grass and trees, especially in a town, where people can walk, play games etc",
          "a large area of land in the country which has been kept in its natural state to protect the plants and animals there"
        ]
      },
      {
        "word": "garage",
        "syllables": "garage",
        "phonetic": "/ˈɡærɑːʒ/",
        "definition": "n. 车库（用于停放汽车的建筑物）",
        "example": "Because of this, he has not been able to get his own car into his garage even once.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他刚在城里买了一栋新房子。”（主语 + has/have + just + 过去分词）？",
        "options": [
          "He has just bought a new house in the city.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“He has just bought a new house in the city.”（他刚在城里买了一栋新房子。），重点掌握句型：主语 + has/have + just + 过去分词。"
      },
      {
        "question": "语法要点【现在完成时 (Present Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + have/has + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "He has just bought a new house.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He has just bought a new house.”（他刚买了一栋新房子。）展示了本课重点语法【现在完成时 (Present Perfect Tense)】：表示过去发生的行为对现在造成的影响，或从过去开始一直持续到现在的动作。"
      },
      {
        "question": "What does the word 'rare' (/reə(r)/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adj. 稀有的，罕见的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'rare' 的意思是：adj. 稀有的，罕见的（形容少见或不普通的事物，强调稀缺性）。"
      }
    ],
    "funPrompt": "读完《No parking》后，试着用自己的话回答课前问题：What is Jasper White's problem?"
  },
  {
    "id": 2029,
    "day": 29,
    "lessonNum": "29",
    "week": 2,
    "track": "nce2",
    "title": "L29: Taxi! 出租汽车",
    "coverEmoji": "🚕",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 144,
    "intro": "🎯 课前导读问题：Does Captain Fawcett think any trip is too dangerous?\n📌 语法与句型重点：【现在完成时 (Present Perfect Tense)】主语 + have/has + 过去分词 — 描述过去的动作对现在造成的影响，或表示动作持续到现在。本课中 has bought, has begun, has just refused 都使用了现在完成时。。 例：Captain Fawcett has bought an unusual taxi. (福西特机长买了一辆不寻常的出租车。) ｜ 【一般过去时 (Simple Past Tense)】主语 + 动词过去式 — 描述在过去某个特定时间发生的动作，不强调与现在的关系。本课中 flew, landed, wanted 都使用了过去式。。 例：Captain Fawcett's first passenger was a doctor who flew from Birmingham. (福西特机长的第一位乘客是一位从伯明翰飞来的医生。)\n💬 核心短语：“begin a new service”（开始一项新服务/业务）；“carry seven passengers”（载七名乘客）；“land anywhere”（在任何地方降落）",
    "paragraphs": [
      "Captain Ben Fawcett has bought an unusual taxi and has begun a new service. The 'taxi' is a small Swiss aeroplane called a 'Pilatus Porter'. This wonderful plane can carry seven passengers. The most surprising thing about it, however, is that it can land anywhere: on snow, water, or even on a ploughed field.",
      "Captain Fawcett's first passenger was a doctor who flew from Birmingham to a lonely village in the Welsh mountains. Since then, Captain Fawcett has flown passengers to many unusual places. Once he landed on the roof of a block of flats and on another occasion, he landed in a deserted car park. Captain Fawcett has just refused a strange request from a businessman.",
      "The man wanted to fly to Rockall, a lonely island in the Atlantic Ocean, but Captain Fawcett did not take him because the trip was too dangerous."
    ],
    "vocabulary": [
      {
        "word": "unusual",
        "syllables": "unusual",
        "phonetic": "/ʌnˈjuːʒuəl/",
        "definition": "adj. 不寻常的；独特的（形容与众不同的、罕见的事物）；adj. 奇怪的（指非比寻常的、令人好奇的）",
        "example": "Captain Ben Fawcett has bought an unusual taxi and has begun a new service.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "taxi",
        "syllables": "taxi",
        "phonetic": "/ˈtæksi/",
        "definition": "n. 出租车（付费载客的机动车辆）；v. 乘出租车；滑行（指飞机等缓慢移动）",
        "example": "Captain Ben Fawcett has bought an unusual taxi and has begun a new service.",
        "emoji": "✨",
        "longman": [
          "a car and driver that you pay to take you somewhere",
          "if a plane taxis, it moves along the ground before taking off or after landing"
        ]
      },
      {
        "word": "carry",
        "syllables": "carry",
        "phonetic": "/ˈkæri/",
        "definition": "v. 携带；运载（指运输或承载人员、货物）；v. 支撑；容纳（指具有容纳或支撑能力）",
        "example": "This wonderful plane can carry seven passengers.",
        "emoji": "✨",
        "longman": [
          "to hold something in your hand or arms, or support it as you take it somewhere",
          "to take people or things from one place to another in a vehicle, ship, or plane"
        ]
      },
      {
        "word": "passenger",
        "syllables": "passenger",
        "phonetic": "/ˈpæsɪndʒə(r)/",
        "definition": "n. 乘客；旅客（指交通工具上的乘坐者）",
        "example": "This wonderful plane can carry seven passengers.",
        "emoji": "✨",
        "longman": [
          "someone who is traveling in a vehicle, plane, boat etc, but is not driving it or working on it",
          "someone in a group who does not do their share of the group’s work"
        ]
      },
      {
        "word": "surprising",
        "syllables": "surprising",
        "phonetic": "/səˈpraɪzɪŋ/",
        "definition": "adj. 令人惊讶的（描述令人意外的事物）",
        "example": "The most surprising thing about it, however, is that it can land anywhere: on snow, water, or even on a ploughed field.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "land",
        "syllables": "land",
        "phonetic": "/lænd/",
        "definition": "v. 登陆；降落（指飞机等着陆或抵达地面）；n. 陆地；土地（与 sea 相对）",
        "example": "The most surprising thing about it, however, is that it can land anywhere: on snow, water, or even on a ploughed field.",
        "emoji": "✨",
        "longman": [
          "an area of ground, especially when used for farming or building",
          "the solid dry part of the Earth ’s surface",
          "a country or area"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“福西特机长买了一辆不寻常的出租车吗？”（Has + 主语 + 过去分词...? (现在完成时一般疑问句)）？",
        "options": [
          "Has Captain Fawcett bought an unusual taxi?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Has Captain Fawcett bought an unusual taxi?”（福西特机长买了一辆不寻常的出租车吗？），重点掌握句型：Has + 主语 + 过去分词...? (现在完成时一般疑问句)。"
      },
      {
        "question": "语法要点【现在完成时 (Present Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + have/has + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "Captain Fawcett has bought an unusual taxi.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Captain Fawcett has bought an unusual taxi.”（福西特机长买了一辆不寻常的出租车。）展示了本课重点语法【现在完成时 (Present Perfect Tense)】：现在完成时表示过去发生的动作或状态，与现在有联系或对现在有影响。通常与 already, yet, just, recently, since, for 等时间状语连用。。"
      },
      {
        "question": "What does the word 'unusual' (/ʌnˈjuːʒuəl/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adj.. 不寻常的；独特的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'unusual' 的意思是：adj.. 不寻常的；独特的（形容与众不同的、罕见的事物）。"
      }
    ],
    "funPrompt": "读完《Taxi!》后，试着用自己的话回答课前问题：Does Captain Fawcett think any trip is too dangerous?"
  },
  {
    "id": 2030,
    "day": 30,
    "lessonNum": "30",
    "week": 2,
    "track": "nce2",
    "title": "L30: Football or polo? 足球还是水球？",
    "coverEmoji": "🚣",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 146,
    "intro": "🎯 课前导读问题：What happened to the man in the boat?\n📌 语法与句型重点：【一般过去时 (Simple Past Tense)】主语 + 动词过去式 + 其他 — 描述过去某一具体时间发生的动作或事件。 例：It was warm last Sunday. (上个星期天天气很暖和。) ｜ 【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing + 其他 — 描述过去正在进行的动作，常与 when, while 等连用。 例：Some children were playing games on the bank. (一些孩子在岸上玩游戏。)\n💬 核心短语：“cut across”（穿过；横穿）；“as usual”（像往常一样；照例）；“call out to”（大声呼唤；向...喊叫）",
    "paragraphs": [
      "The Wayle is a small river that cuts across the park near my home. I like sitting by the Wayle on fine afternoons. It was warm last Sunday, so I went and sat on the river bank as usual. Some children were playing games on the bank and there were some people rowing on the river.",
      "Suddenly, one of the children kicked a ball very hard and it went towards a passing boat. Some people on the bank called out to the man in the boat, but he did not hear them. The ball struck him so hard that he nearly fell into the water. I turned to look at the children, but there weren't any in sight: they had all run away!",
      "The man laughed when he realized what had happened. He called out to the children and threw the ball back to the bank."
    ],
    "vocabulary": [
      {
        "word": "river",
        "syllables": "river",
        "phonetic": "/ˈrɪvə/",
        "definition": "noun. 河流（指自然流动的水道，如 the Thames, the Yangtze River）",
        "example": "The Wayle is a small river that cuts across the park near my home.",
        "emoji": "✨",
        "longman": [
          "a natural and continuous flow of water in a long line across a country into the sea",
          "a large amount of moving liquid"
        ]
      },
      {
        "word": "bank",
        "syllables": "bank",
        "phonetic": "/bæŋk/",
        "definition": "noun. 河岸；银行（指河流的岸边，也指银行金融机构）",
        "example": "It was warm last Sunday, so I went and sat on the river bank as usual.",
        "emoji": "✨",
        "longman": [
          "a business that keeps and lends money and provides other financial services",
          "a local office of a bank",
          "land along the side of a river or lake"
        ]
      },
      {
        "word": "warm",
        "syllables": "warm",
        "phonetic": "/wɔːm/",
        "definition": "adjective. 温暖的；暖和的（描述温度适中，不冷不热）",
        "example": "It was warm last Sunday, so I went and sat on the river bank as usual.",
        "emoji": "✨",
        "longman": [
          "slightly hot, especially in a pleasant way",
          "if you are warm, your body is at a comfortable temperature",
          "clothes or buildings that are warm can keep in heat or keep out cold"
        ]
      },
      {
        "word": "afternoon",
        "syllables": "afternoon",
        "phonetic": "/ˌɑːftəˈnuːn/",
        "definition": "noun. 下午（指中午12点到傍晚之间的时间）",
        "example": "I like sitting by the Wayle on fine afternoons.",
        "emoji": "✨",
        "longman": [
          "the part of the day after the morning and before the evening",
          "used to greet someone when you meet them in the afternoon"
        ]
      },
      {
        "word": "children",
        "syllables": "children",
        "phonetic": "/ˈtʃɪldrən/",
        "definition": "noun. 孩子们（child的复数）（child的复数形式，指年龄较小的人）",
        "example": "Some children were playing games on the bank and there were some people rowing on the river.",
        "emoji": "✨",
        "longman": [
          "the plural of child"
        ]
      },
      {
        "word": "game",
        "syllables": "game",
        "phonetic": "/ɡeɪm/",
        "definition": "noun. 游戏；比赛（指有规则的活动或体育运动）",
        "example": "Some children were playing games on the bank and there were some people rowing on the river.",
        "emoji": "✨",
        "longman": [
          "an activity or sport in which people compete with each other according to agreed rules",
          "an occasion when a game is played"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“上个星期天天气很暖和。”（主语 + be动词(过去式) + 形容词 + 时间点）？",
        "options": [
          "It was warm last Sunday.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“It was warm last Sunday.”（上个星期天天气很暖和。），重点掌握句型：主语 + be动词(过去式) + 形容词 + 时间点。"
      },
      {
        "question": "语法要点【一般过去时 (Simple Past Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式 + 其他）？",
        "options": [
          "He have go to school tomorrow.",
          "It was warm last Sunday.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“It was warm last Sunday.”（上个星期天天气很暖和。）展示了本课重点语法【一般过去时 (Simple Past Tense)】：表示过去发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'river' (/ˈrɪvə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 河流"
        ],
        "answerIndex": 2,
        "explanation": "单词 'river' 的意思是：noun. 河流（指自然流动的水道，如 the Thames, the Yangtze River）。"
      }
    ],
    "funPrompt": "读完《Football or polo?》后，试着用自己的话回答课前问题：What happened to the man in the boat?"
  },
  {
    "id": 2031,
    "day": 31,
    "lessonNum": "31",
    "week": 2,
    "track": "nce2",
    "title": "L31: Success story 成功者的故事",
    "coverEmoji": "🚲",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 147,
    "intro": "🎯 课前导读问题：What was Frank's first job?\n📌 语法与句型重点：【used to 的用法】主语 + used to + 动词原形 — 用于描述过去的习惯、状态或行为，与现在形成对比。 例：He used to work in a small shop. (他过去在一家小商店工作（现在不在了）。) ｜ 【一般过去时】主语 + 动词过去式 — 用于叙述过去发生的事情，常与 yesterday, last week, in 1958 等时间状语连用。 例：In 1958 he bought a small workshop of his own. (1958年他买下了自己的一个小车间。)\n💬 核心短语：“used to”（表示过去的习惯性动作或状态，现在已不再继续）；“tell someone about something”（告诉某人关于某事）；“save money”（存钱；储蓄）",
    "paragraphs": [
      "Yesterday afternoon Frank Hawkins was telling me about his experiences as a young man. Before he retired, Frank was the head of a very large business company, but as a boy he used to work in a small shop. It was his job to repair bicycles and at that time he used to work fourteen hours a day. He saved money for years and in 1958 he bought a small workshop of his own.",
      "In his twenties Frank used to make spare parts for aeroplanes. At that time he had two helpers. In a few years the small workshop had become a large factory which employed seven hundred and twenty-eight people. Frank smiled when he remembered his hard early years and the long road to success.",
      "He was still smiling when the door opened and his wife came in. She wanted him to repair their grandson's bicycle!"
    ],
    "vocabulary": [
      {
        "word": "experience",
        "syllables": "experience",
        "phonetic": "/ɪkˈspɪəriəns/",
        "definition": "noun. 经历；经验（指个人亲身经历过的事情，或从实践中获得的知识和技能）",
        "example": "Yesterday afternoon Frank Hawkins was telling me about his experiences as a young man.",
        "emoji": "✨",
        "longman": [
          "knowledge or skill that you gain from doing a job or activity, or the process of doing this",
          "knowledge that you gain about life and the world by being in different situations and meeting different people, or the process of gaining this"
        ]
      },
      {
        "word": "retire",
        "syllables": "retire",
        "phonetic": "/rɪˈtaɪə/",
        "definition": "verb. 退休（指停止工作，结束职业生涯）",
        "example": "Before he retired, Frank was the head of a very large business company, but as a boy he used to work in a small shop.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "company",
        "syllables": "company",
        "phonetic": "/ˈkʌmpəni/",
        "definition": "noun. 公司（指商业企业或商业组织）",
        "example": "Before he retired, Frank was the head of a very large business company, but as a boy he used to work in a small shop.",
        "emoji": "✨",
        "longman": [
          "a business organization that makes or sells goods or services",
          "when you are with other people and not alone"
        ]
      },
      {
        "word": "repair",
        "syllables": "repair",
        "phonetic": "/rɪˈpeə/",
        "definition": "verb. 修理；修补（指把损坏的东西修好）",
        "example": "It was his job to repair bicycles and at that time he used to work fourteen hours a day.",
        "emoji": "✨",
        "longman": [
          "to fix something that is damaged, broken, split, or not working properly",
          "to do something to remove harm that you have caused"
        ]
      },
      {
        "word": "bicycle",
        "syllables": "bicycle",
        "phonetic": "/ˈbaɪsɪkl/",
        "definition": "noun. 自行车（指两轮脚踏车）",
        "example": "It was his job to repair bicycles and at that time he used to work fourteen hours a day.",
        "emoji": "✨",
        "longman": [
          "a vehicle with two wheels that you ride by pushing its pedal",
          "to go somewhere by bicycle"
        ]
      },
      {
        "word": "workshop",
        "syllables": "workshop",
        "phonetic": "/ˈwɜːkʃɒp/",
        "definition": "noun. 车间；工场（指进行制造或修理工作的地方）",
        "example": "He saved money for years and in 1958 he bought a small workshop of his own.",
        "emoji": "✨",
        "longman": [
          "a room or building where tools and machines are used for making or repairing things",
          "a meeting at which people try to improve their skills by discussing their experiences and doing practical exercises",
          "a fairly small room or building in which tools and machines are used for making or repairing things"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他过去在一家小商店工作。”（主语 + used to + 动词原形）？",
        "options": [
          "He used to work in a small shop.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“He used to work in a small shop.”（他过去在一家小商店工作。），重点掌握句型：主语 + used to + 动词原形。"
      },
      {
        "question": "语法要点【used to 的用法】：下列哪个例句符合本课语法结构（主语 + used to + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "He used to work in a small shop.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He used to work in a small shop.”（他过去在一家小商店工作（现在不在了）。）展示了本课重点语法【used to 的用法】：used to 表示过去经常性的动作或存在的状态，而现在已经不再发生或存在了。"
      },
      {
        "question": "What does the word 'experience' (/ɪkˈspɪəriəns/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 经历；经验"
        ],
        "answerIndex": 2,
        "explanation": "单词 'experience' 的意思是：noun. 经历；经验（指个人亲身经历过的事情，或从实践中获得的知识和技能）。"
      }
    ],
    "funPrompt": "读完《Success story》后，试着用自己的话回答课前问题：What was Frank's first job?"
  },
  {
    "id": 2032,
    "day": 32,
    "lessonNum": "32",
    "week": 2,
    "track": "nce2",
    "title": "L32: Shopping made easy 购物变得很方便",
    "coverEmoji": "🛍️",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 146,
    "intro": "🎯 课前导读问题：Who was the thief?\n📌 语法与句型重点：【比较结构：not so...as（不像...一样）】主语 + not so/as + 形容词/副词原级 + as + 比较对象 — 表示两者在某方面不相同，否定前者具有后者同样的程度。 例：People are not so honest as they once were. (人们不像以前那样诚实了。) ｜ 【过去进行时（Past Continuous Tense）】主语 + was/were + 动词-ing — 用于描述过去正在发生的动作，常与when引导的过去时态连用。 例：A detective recently watched a well-dressed woman who always went into a large store on Monday mornings. (一位侦探最近注意到了一个穿着考究的女人，她总是在星期一早上进入一家大商店。)\n💬 核心短语：“not so...as”（用于比较，表示前者不如后者）；“more than ever before”（比以前任何时候都...，表示程度增加）；“as quickly as possible”（尽可能快地，表示尽快完成某事）",
    "paragraphs": [
      "People are not so honest as they once were. The temptation to steal is greater than ever before -- especially in large shops. A detective recently watched a well-dressed woman who always went into a large store on Monday mornings. One Monday, there were fewer people in the shop than usual when the woman came in, so it was easier for the detective to watch her.",
      "The woman first bought a few small articles. After a little time, she chose one of the most expensive dresses in the shop and handed it to an assistant who wrapped it up for her as quickly as possible. Then the woman simply took the parcel and walked out of the shop without paying. When she was arrested, the detective found out that the shop assistant was her daughter.",
      "The girl 'gave' her mother a free dress once a week!"
    ],
    "vocabulary": [
      {
        "word": "honest",
        "syllables": "honest",
        "phonetic": "/ˈɒnɪst/",
        "definition": "adj. 诚实的，正直的（形容人的品格，表示不说谎、不欺骗）",
        "example": "People are not so honest as they once were.",
        "emoji": "✨",
        "longman": [
          "someone who is honest always tells the truth and does not cheat or steal",
          "not hiding the truth or the facts about something"
        ]
      },
      {
        "word": "temptation",
        "syllables": "temptation",
        "phonetic": "/tempˈteɪʃn/",
        "definition": "noun. 诱惑，引诱（指吸引人做某事的力量或冲动）",
        "example": "The temptation to steal is greater than ever before -- especially in large shops.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "steal",
        "syllables": "steal",
        "phonetic": "/stiːl/",
        "definition": "verb. 偷窃，偷东西（指非法拿走他人财物）",
        "example": "The temptation to steal is greater than ever before -- especially in large shops.",
        "emoji": "✨",
        "longman": [
          "to take something that belongs to someone else",
          "to use someone else’s ideas without getting permission or without admitting that they are not your own ideas"
        ]
      },
      {
        "word": "detective",
        "syllables": "detective",
        "phonetic": "/dɪˈtektɪv/",
        "definition": "noun. 侦探，私家侦探（指调查犯罪或收集证据的人）",
        "example": "A detective recently watched a well-dressed woman who always went into a large store on Monday mornings.",
        "emoji": "✨",
        "longman": [
          "a police officer whose job is to discover information about crimes and catch criminals",
          "someone who is paid to discover information about someone or something"
        ]
      },
      {
        "word": "well-dressed",
        "syllables": "well-dressed",
        "phonetic": "/ˌwelˈdrest/",
        "definition": "adj. 穿着考究的，衣着入时的（形容人穿着得体、讲究）",
        "example": "A detective recently watched a well-dressed woman who always went into a large store on Monday mornings.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "article",
        "syllables": "article",
        "phonetic": "/ˈɑːtɪkl/",
        "definition": "noun. 物品，商品（指具体的物件或商品）",
        "example": "The woman first bought a few small articles.",
        "emoji": "✨",
        "longman": [
          "a piece of writing about a particular subject in a newspaper or magazine",
          "a thing, especially one of a group of things"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“人们不像以前那样诚实了。”（主语 + not so + 形容词原级 + as + 比较对象）？",
        "options": [
          "People are not so honest as they once were.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“People are not so honest as they once were.”（人们不像以前那样诚实了。），重点掌握句型：主语 + not so + 形容词原级 + as + 比较对象。"
      },
      {
        "question": "语法要点【比较结构：not so...as（不像...一样）】：下列哪个例句符合本课语法结构（主语 + not so/as + 形容词/副词原级 + as + 比较对象）？",
        "options": [
          "He have go to school tomorrow.",
          "People are not so honest as they once were.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“People are not so honest as they once were.”（人们不像以前那样诚实了。）展示了本课重点语法【比较结构：not so...as（不像...一样）】：用于否定比较，表示前者不如后者。结构为：主语 + not so/as + 形容词/副词原级 + as + 比较对象。"
      },
      {
        "question": "What does the word 'honest' (/ˈɒnɪst/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adj. 诚实的，正直的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'honest' 的意思是：adj. 诚实的，正直的（形容人的品格，表示不说谎、不欺骗）。"
      }
    ],
    "funPrompt": "读完《Shopping made easy》后，试着用自己的话回答课前问题：Who was the thief?"
  },
  {
    "id": 2033,
    "day": 33,
    "lessonNum": "33",
    "week": 2,
    "track": "nce2",
    "title": "L33: Out of the darkness 冲出黑暗",
    "coverEmoji": "🚤",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "3 mins",
    "wordCount": 130,
    "intro": "🎯 课前导读问题：Why was the girl in hospital?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去正在发生的动作，常与when、while等连用。 例：One afternoon she set out from the coast. (一天下午她从海岸出发了。) ｜ 【时间状语从句 (Time Clause with 'before')】主句 + before + 从句 / Before + 从句 + 主句 — 用于描述先后发生的两个动作，强调主句动作在从句动作之前。 例：Nearly a week passed before the girl was able to explain what had happened. (将近一周后，女孩才能解释发生了什么事。)\n💬 核心短语：“set out”（表示出发、启程）；“be caught in”（表示陷入（困境、风暴等））；“towards evening”（表示临近傍晚时分）",
    "paragraphs": [
      "Nearly a week passed before the girl was able to explain what had happened to her. One afternoon she set out from the coast in a small boat and was caught in a storm. Towards evening, the boat struck a rock and the girl jumped into the sea. Then she swam to the shore after spending the whole night in the water.",
      "During that time she covered a distance of eight miles. Early next morning, she saw a light ahead. She knew she was near the shore because the light was high up on the cliffs. On arriving at the shore, the girl struggled up the cliff towards the light she had seen.",
      "That was all she remembered. When she woke up a day later, she found herself in hospital."
    ],
    "vocabulary": [
      {
        "word": "hospital",
        "syllables": "hospital",
        "phonetic": "/ˈhɒspɪtəl/",
        "definition": "noun. 医院（指治疗和护理病人的机构）",
        "example": "When she woke up a day later, she found herself in hospital.",
        "emoji": "✨",
        "longman": [
          "a large building where sick or injured people receive medical treatment",
          "a large hospital, which often has many different departments, including areas for research"
        ]
      },
      {
        "word": "coast",
        "syllables": "coast",
        "phonetic": "/kəʊst/",
        "definition": "noun. 海岸；海滨（指陆地与海洋的交界处）",
        "example": "One afternoon she set out from the coast in a small boat and was caught in a storm.",
        "emoji": "✨",
        "longman": [
          "the area where the land meets the sea",
          "the part of a country that is close to the sea"
        ]
      },
      {
        "word": "storm",
        "syllables": "storm",
        "phonetic": "/stɔːm/",
        "definition": "noun. 暴风雨；风暴（指恶劣的天气现象，通常伴有大风大雨）",
        "example": "One afternoon she set out from the coast in a small boat and was caught in a storm.",
        "emoji": "✨",
        "longman": [
          "a period of very bad weather when there is a lot of rain or snow, strong winds, and often lightning",
          "a situation in which people suddenly express very strong feelings about something that someone has said or done"
        ]
      },
      {
        "word": "rock",
        "syllables": "rock",
        "phonetic": "/rɒk/",
        "definition": "noun. 岩石；礁石（指海中的大石头或礁石）",
        "example": "Towards evening, the boat struck a rock and the girl jumped into the sea.",
        "emoji": "✨",
        "longman": [
          "the hard substance that forms the main surface of the Earth",
          "a piece of rock, especially a large one that sticks up from the ground"
        ]
      },
      {
        "word": "shore",
        "syllables": "shore",
        "phonetic": "/ʃɔː/",
        "definition": "noun. 海岸；海滨（指海洋、湖泊或河流的岸边）",
        "example": "Then she swam to the shore after spending the whole night in the water.",
        "emoji": "✨",
        "longman": [
          "the land along the edge of a large area of water such as an ocean or lake",
          "the area of sand, mud, or low land along the edge of the sea, a lake etc"
        ]
      },
      {
        "word": "mile",
        "syllables": "mile",
        "phonetic": "/maɪl/",
        "definition": "noun. 英里（距离单位，1英里约等于1.6公里）",
        "example": "During that time she covered a distance of eight miles.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“将近一周后，女孩才能解释发生了什么事。”（...before + 主语 + was able to do something）？",
        "options": [
          "Nearly a week passed before the girl was able to explain what had happened.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Nearly a week passed before the girl was able to explain what had happened.”（将近一周后，女孩才能解释发生了什么事。），重点掌握句型：...before + 主语 + was able to do something。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "One afternoon she set out from the coast.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“One afternoon she set out from the coast.”（一天下午她从海岸出发了。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'hospital' (/ˈhɒspɪtəl/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 医院"
        ],
        "answerIndex": 2,
        "explanation": "单词 'hospital' 的意思是：noun. 医院（指治疗和护理病人的机构）。"
      }
    ],
    "funPrompt": "读完《Out of the darkness》后，试着用自己的话回答课前问题：Why was the girl in hospital?"
  },
  {
    "id": 2034,
    "day": 34,
    "lessonNum": "34",
    "week": 2,
    "track": "nce2",
    "title": "L34: Quick work 破案“神速”",
    "coverEmoji": "🚓",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "3 mins",
    "wordCount": 132,
    "intro": "🎯 课前导读问题：How long had the police taken to find his bicycle?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。常用时间状语：already, just, never, ever, before, after, when等。。 例：Dan had been worried all week before he went to the station. (在去警察局之前，丹已经担心了一整周。) ｜ 【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去正在发生的动作，常与when, while, at that time等连用。。 例：He was smiling when he told Dan the news. (他告诉丹这个消息时正微笑着。)\n💬 核心短语：“call at”（表示短暂拜访或停留某地）；“pick up”（表示偶然发现、捡起或接人）；“be worried”（表示感到担心的状态）",
    "paragraphs": [
      "Dan Robinson has been worried all week. Last Tuesday he received a letter from the local police. In the letter he was asked to call at the station. Dan wondered why he was wanted by the police, but he went to the station yesterday and now he is not worried anymore.",
      "At the station, he was told by a smiling policeman that his bicycle had been found. Five days ago, the policeman told him, the bicycle was picked up in a small village four hundred miles away. It is now being sent to his home by train. Dan was most surprised when he heard the news.",
      "He was amused too, because he never expected the bicycle to be found. It was stolen twenty years ago when Dan was a boy of fifteen!"
    ],
    "vocabulary": [
      {
        "word": "worried",
        "syllables": "worried",
        "phonetic": "/ˈwʌrid/",
        "definition": "adjective. 担心的；烦恼的（指对某事感到忧虑或不安的状态）",
        "example": "Dan Robinson has been worried all week.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "receive",
        "syllables": "receive",
        "phonetic": "/rɪˈsiːv/",
        "definition": "verb. 收到；接到（指被动地获得或收到某物）",
        "example": "Last Tuesday he received a letter from the local police.",
        "emoji": "✨",
        "longman": [
          "to be given something",
          "to get a letter, message, or telephone call, or something which someone has sent you"
        ]
      },
      {
        "word": "local",
        "syllables": "local",
        "phonetic": "/ˈləʊkl/",
        "definition": "adjective. 当地的；本地的（形容与某地相关的事物）",
        "example": "Last Tuesday he received a letter from the local police.",
        "emoji": "✨",
        "longman": [
          "relating to the particular area you live in, or the area you are talking about",
          "affecting or limited to one part of your body"
        ]
      },
      {
        "word": "station",
        "syllables": "station",
        "phonetic": "/ˈsteɪʃn/",
        "definition": "noun. 警察局；车站（文中指警察局，a police station）",
        "example": "In the letter he was asked to call at the station.",
        "emoji": "✨",
        "longman": [
          "a place where trains or buses regularly stop so that passengers can get on and off, goods can be loaded etc, or the buildings at such a place",
          "a building or place that is a center for a particular kind of service or activity",
          "an organization which makes television or radio broadcasts , or the building where this is done"
        ]
      },
      {
        "word": "village",
        "syllables": "village",
        "phonetic": "/ˈvɪlɪdʒ/",
        "definition": "noun. 村庄；乡村（指小于城镇的居民区）",
        "example": "Five days ago, the policeman told him, the bicycle was picked up in a small village four hundred miles away.",
        "emoji": "✨",
        "longman": [
          "a very small town in the countryside"
        ]
      },
      {
        "word": "surprised",
        "syllables": "surprised",
        "phonetic": "/səˈpraɪzd/",
        "definition": "adjective. 惊讶的；吃惊的（指对意外之事感到惊奇）",
        "example": "Dan was most surprised when he heard the news.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“警察花了多长时间才找到他的自行车？”（How long had + 主语 + 过去分词...?）？",
        "options": [
          "How long had the police taken to find his bicycle?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“How long had the police taken to find his bicycle?”（警察花了多长时间才找到他的自行车？），重点掌握句型：How long had + 主语 + 过去分词...?。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "Dan had been worried all week before he went to the station.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Dan had been worried all week before he went to the station.”（在去警察局之前，丹已经担心了一整周。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作，强调“过去的过去”。。"
      },
      {
        "question": "What does the word 'worried' (/ˈwʌrid/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adjective. 担心的；烦恼的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'worried' 的意思是：adjective. 担心的；烦恼的（指对某事感到忧虑或不安的状态）。"
      }
    ],
    "funPrompt": "读完《Quick work》后，试着用自己的话回答课前问题：How long had the police taken to find his bicycle?"
  },
  {
    "id": 2035,
    "day": 35,
    "lessonNum": "35",
    "week": 2,
    "track": "nce2",
    "title": "L35: Stop thief! 捉贼！",
    "coverEmoji": "🚐",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 147,
    "intro": "🎯 课前导读问题：How did Roy stop the thieves?\n📌 语法与句型重点：【used to + 动词原形】主语 + used to + 动词原形 — 用于描述过去的习惯或状态，与现在形成对比。 例：Roy used to drive a taxi. (Roy过去常开出租车。) ｜ 【such...that... 结果状语从句】such + a/an + 形容词 + 可数名词单数 + that... — 强调程度之高导致某种结果。 例：He got such a fright that he dropped the bag. (他吓得把袋子都掉了。)\n💬 核心短语：“used to do sth”（表示过去习惯性的动作或状态，现在已不再发生）；“a short while ago”（表示不久之前，相当于not long ago）；“far more exciting”（far用于加强比较级，表示更加、得多）",
    "paragraphs": [
      "Roy Trenton used to drive a taxi. A short while ago, however, he became a bus driver and he has not regretted it. He is finding his new work far more exciting. When he was driving along Catford Street recently, he saw two thieves rush out of a shop and run towards a waiting car.",
      "One of them was carrying a bag full of money. Roy acted quickly and drove the bus straight at the thieves. The one with the money got such a fright that he dropped the bag. As the thieves were trying to get away in their car, Roy drove his bus into the back of it.",
      "While the battered car was moving away, Roy stopped his bus and telephoned the police. The thieves' car was badly damaged and easy to recognize. Shortly afterwards, the police stopped the car and both men were arrested."
    ],
    "vocabulary": [
      {
        "word": "taxi",
        "syllables": "taxi",
        "phonetic": "/ˈtæksi/",
        "definition": "noun. 出租车（指供出租的载客汽车）",
        "example": "Roy Trenton used to drive a taxi.",
        "emoji": "✨",
        "longman": [
          "a car and driver that you pay to take you somewhere",
          "if a plane taxis, it moves along the ground before taking off or after landing"
        ]
      },
      {
        "word": "regret",
        "syllables": "regret",
        "phonetic": "/rɪˈɡret/",
        "definition": "verb. 后悔，遗憾（表示对过去的行为感到后悔）",
        "example": "A short while ago, however, he became a bus driver and he has not regretted it.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "exciting",
        "syllables": "exciting",
        "phonetic": "/ɪkˈsaɪtɪŋ/",
        "definition": "adjective. 令人兴奋的（描述令人激动的事物）",
        "example": "He is finding his new work far more exciting.",
        "emoji": "✨",
        "longman": [
          "making you feel excited",
          "very exciting"
        ]
      },
      {
        "word": "thief",
        "syllables": "thief",
        "phonetic": "/θiːf/",
        "definition": "noun. 小偷，贼（复数形式为thieves）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "someone who steals things from another person or place",
          "someone who steals things from a person or place"
        ]
      },
      {
        "word": "rush",
        "syllables": "rush",
        "phonetic": "/rʌʃ/",
        "definition": "verb. 冲，奔（表示快速地移动）",
        "example": "When he was driving along Catford Street recently, he saw two thieves rush out of a shop and run towards a waiting car.",
        "emoji": "✨",
        "longman": [
          "to move very quickly, especially because you need to be somewhere very soon",
          "to do or decide something too quickly, especially so that you do not have time to do it carefully or well"
        ]
      },
      {
        "word": "fright",
        "syllables": "fright",
        "phonetic": "/fraɪt/",
        "definition": "noun. 害怕，恐惧（常用于get a fright短语中）",
        "example": "The one with the money got such a fright that he dropped the bag.",
        "emoji": "✨",
        "longman": [
          "a sudden feeling of fear"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“Roy Trenton过去常开出租车。”（主语 + used to + 动词原形）？",
        "options": [
          "Roy Trenton used to drive a taxi.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Roy Trenton used to drive a taxi.”（Roy Trenton过去常开出租车。），重点掌握句型：主语 + used to + 动词原形。"
      },
      {
        "question": "语法要点【used to + 动词原形】：下列哪个例句符合本课语法结构（主语 + used to + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "Roy used to drive a taxi.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Roy used to drive a taxi.”（Roy过去常开出租车。）展示了本课重点语法【used to + 动词原形】：表示过去经常发生的动作或存在的状态，而现在已不再发生。"
      },
      {
        "question": "What does the word 'taxi' (/ˈtæksi/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 出租车"
        ],
        "answerIndex": 2,
        "explanation": "单词 'taxi' 的意思是：noun. 出租车（指供出租的载客汽车）。"
      }
    ],
    "funPrompt": "读完《Stop thief!》后，试着用自己的话回答课前问题：How did Roy stop the thieves?"
  },
  {
    "id": 2036,
    "day": 36,
    "lessonNum": "36",
    "week": 2,
    "track": "nce2",
    "title": "L36: Across the Channel 横渡海峡",
    "coverEmoji": "🏊",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 145,
    "intro": "🎯 课前导读问题：What is Debbie going to try to do?\n📌 语法与句型重点：【be going to 表示将来（计划、打算）】主语 + be (am/is/are) + going to + 动词原形 — 用于表示计划、打算或即将发生的事情。 例：Debbie Hart is going to swim across the English Channel tomorrow. (Debbie Hart打算明天游过英吉利海峡。) ｜ 【will 表示将来（预测、临时决定）】主语 + will + 动词原形 — 用于表示单纯的将来、预测或临时做出的决定。 例：Mr. Hart will be watching her anxiously as she swims. (当她游泳时，Hart先生将焦虑地注视着她。)\n💬 核心短语：“set out”（出发；启程）；“set up a record”（创造纪录）；“be sure to succeed”（一定会成功）",
    "paragraphs": [
      "Debbie Hart is going to swim across the English Channel tomorrow. She is going to set out from the French coast at five o'clock in the morning. Debbie is only eleven years old and she hopes to set up a new world record. She is a strong swimmer and many people feel that she is sure to succeed.",
      "Debbie's father will set out with her in a small boat. Mr. Hart has trained his daughter for years. Tomorrow he will be watching her anxiously as she swims the long distance to England. Debbie intends to take short rests every two hours.",
      "She will have something to drink but she will not eat any solid food. Most of Debbie's school friends will be waiting for her on the English coast. Among them will be Debbie's mother, who swam the Channel herself when she was a girl."
    ],
    "vocabulary": [
      {
        "word": "channel",
        "syllables": "channel",
        "phonetic": "/ˈtʃænl/",
        "definition": "noun. 海峡；通道（指两个海域之间的狭窄水域，如English Channel（英吉利海峡））",
        "example": "Debbie Hart is going to swim across the English Channel tomorrow.",
        "emoji": "✨",
        "longman": [
          "a television station and all the programmes that it broadcasts",
          "a system or method that you use to send or obtain information, goods, permission etc",
          "an area of water that connects two larger areas of water"
        ]
      },
      {
        "word": "across",
        "syllables": "across",
        "phonetic": "/əˈkrɒs/",
        "definition": "preposition. 穿过；横跨（表示从一边到另一边的动作）",
        "example": "Debbie Hart is going to swim across the English Channel tomorrow.",
        "emoji": "✨",
        "longman": [
          "from one side of something to the other",
          "towards someone or something on the other side of an area"
        ]
      },
      {
        "word": "coast",
        "syllables": "coast",
        "phonetic": "/kəʊst/",
        "definition": "noun. 海岸；海滨（指陆地靠近海洋或湖泊的边缘地区）",
        "example": "She is going to set out from the French coast at five o'clock in the morning.",
        "emoji": "✨",
        "longman": [
          "the area where the land meets the sea",
          "the part of a country that is close to the sea"
        ]
      },
      {
        "word": "record",
        "syllables": "record",
        "phonetic": "/ˈrekɔːd/ (noun) /rɪˈkɔːd/ (verb)",
        "definition": "noun. 纪录；记录（指最佳成绩或最高成就，如world record（世界纪录））；verb. 记录；记载（指将信息写下来或保存）",
        "example": "Debbie is only eleven years old and she hopes to set up a new world record.",
        "emoji": "✨",
        "longman": [
          "information about something that is written down or stored on computer, film etc so that it can be looked at in the future",
          "the fastest speed , longest distance , highest or lowest level etc that has ever been achieved or reached, especially in sport",
          "a round flat piece of plastic with a hole in the middle that music and sound are stored on"
        ]
      },
      {
        "word": "swimmer",
        "syllables": "swimmer",
        "phonetic": "/ˈswɪmə(r)/",
        "definition": "noun. 游泳者（指进行游泳运动的人）",
        "example": "She is a strong swimmer and many people feel that she is sure to succeed.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "distance",
        "syllables": "distance",
        "phonetic": "/ˈdɪstəns/",
        "definition": "noun. 距离；远处（指两点之间的空间长度）",
        "example": "Tomorrow he will be watching her anxiously as she swims the long distance to England.",
        "emoji": "✨",
        "longman": [
          "the amount of space between two places or things",
          "used to talk about a situation when something is far away from you in space or time"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“Debbie Hart打算明天游过英吉利海峡。”（主语 + be going to + 动词原形）？",
        "options": [
          "Debbie Hart is going to swim across the English Channel tomorrow.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Debbie Hart is going to swim across the English Channel tomorrow.”（Debbie Hart打算明天游过英吉利海峡。），重点掌握句型：主语 + be going to + 动词原形。"
      },
      {
        "question": "语法要点【be going to 表示将来（计划、打算）】：下列哪个例句符合本课语法结构（主语 + be (am/is/are) + going to + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "Debbie Hart is going to swim across the English Channel tomorrow.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Debbie Hart is going to swim across the English Channel tomorrow.”（Debbie Hart打算明天游过英吉利海峡。）展示了本课重点语法【be going to 表示将来（计划、打算）】：表示根据现有证据或意图决定的将来动作。"
      },
      {
        "question": "What does the word 'channel' (/ˈtʃænl/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 海峡；通道"
        ],
        "answerIndex": 2,
        "explanation": "单词 'channel' 的意思是：noun. 海峡；通道（指两个海域之间的狭窄水域，如English Channel（英吉利海峡））。"
      }
    ],
    "funPrompt": "读完《Across the Channel》后，试着用自己的话回答课前问题：What is Debbie going to try to do?"
  },
  {
    "id": 2037,
    "day": 37,
    "lessonNum": "37",
    "week": 2,
    "track": "nce2",
    "title": "L37: The Olympic Games 奥林匹克运动会",
    "coverEmoji": "🏟️",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 141,
    "intro": "🎯 课前导读问题：When was the last time this country hosted the Olympic Games?\n📌 语法与句型重点：【将来进行时 (Future Continuous Tense)】主语 + will be + 动词-ing — 用于描述在将来某个具体时间正在发生的动作，或表示某种自然发展的结果。 例：The government will be building new hotels. (政府正在建造新酒店。（表示将来某时正在进行的动作）) ｜ 【将来完成时 (Future Perfect Tense)】主语 + will have + 过去分词 — 用于描述到将来某个时间为止已经完成的事情，常与by引导的时间状语连用。 例：Workers will have completed the new roads by the end of this year. (工人们将在今年年底前完成新道路的建设。)\n💬 核心短语：“in four years' time”（表示从现在起的四年后，用于谈论将来的时间点）；“a great many”（表示大量的、许多的，用于修饰可数名词）；“look forward to”（表示期待、盼望，后接名词或动名词）",
    "paragraphs": [
      "The Olympic Games will be held in our country in four years' time. As a great many people will be visiting the country, the government will be building new hotels, an immense stadium, and a new Olympic-standard swimming pool. They will also be building new roads and a special railway line. The Games will be held just outside the capital and the whole area will be called 'Olympic City'.",
      "Workers will have completed the new roads by the end of this year. By the end of next year, they will have finished work on the new stadium. The fantastic modern buildings have been designed by Kurt Gunter. Everybody will be watching anxiously as the new buildings go up.",
      "We are all very excited and are looking forward to the Olympic Games because they have never been held before in this country."
    ],
    "vocabulary": [
      {
        "word": "host",
        "syllables": "host",
        "phonetic": "/həʊst/",
        "definition": "verb. 主办；主持（指作为东道主举办活动或比赛）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "someone at a party , meal etc who has invited the guests and who provides the food, drink etc",
          "someone who introduces and talks to the guests on a television or radio program",
          "a country, city, or organization that provides the necessary space , equipment etc for a special event"
        ]
      },
      {
        "word": "government",
        "syllables": "government",
        "phonetic": "/ˈɡʌvənmənt/",
        "definition": "noun. 政府（指国家的行政管理部门）",
        "example": "As a great many people will be visiting the country, the government will be building new hotels, an immense stadium, and a new Olympic-standard swimming pool.",
        "emoji": "✨",
        "longman": [
          "the group of people who govern a country or state",
          "a form or system of government"
        ]
      },
      {
        "word": "stadium",
        "syllables": "stadium",
        "phonetic": "/ˈsteɪdiəm/",
        "definition": "noun. 体育场（指供体育比赛用的大型露天场所）",
        "example": "As a great many people will be visiting the country, the government will be building new hotels, an immense stadium, and a new Olympic-standard swimming pool.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "capital",
        "syllables": "capital",
        "phonetic": "/ˈkæpɪtl/",
        "definition": "noun. 首都（指一个国家的政治中心或中央政府所在地）",
        "example": "The Games will be held just outside the capital and the whole area will be called 'Olympic City'.",
        "emoji": "✨",
        "longman": [
          "an important city where the main government of a country, state etc is",
          "money or property , especially when it is used to start a business or to produce more wealth",
          "a letter of the alphabet written in its large form, used for example at the beginning of someone’s name"
        ]
      },
      {
        "word": "fantastic",
        "syllables": "fantastic",
        "phonetic": "/fænˈtæstɪk/",
        "definition": "adjective. 极好的；了不起的（用于表达对某事物的赞叹和欣赏）",
        "example": "The fantastic modern buildings have been designed by Kurt Gunter.",
        "emoji": "✨",
        "longman": [
          "extremely good, attractive, enjoyable etc",
          "used when someone has just told you something good"
        ]
      },
      {
        "word": "anxious",
        "syllables": "anxious",
        "phonetic": "/ˈæŋkʃəs/",
        "definition": "adjective. 焦虑的；焦急的（形容人担忧、紧张的情绪状态）",
        "example": "Everybody will be watching anxiously as the new buildings go up.",
        "emoji": "✨",
        "longman": [
          "worried about something",
          "an anxious time or situation is one in which you feel nervous or worried"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“政府正在建造新酒店。”（主语 + will be + 动词-ing (将来进行时)）？",
        "options": [
          "The government will be building new hotels.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The government will be building new hotels.”（政府正在建造新酒店。），重点掌握句型：主语 + will be + 动词-ing (将来进行时)。"
      },
      {
        "question": "语法要点【将来进行时 (Future Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + will be + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "The government will be building new hotels.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The government will be building new hotels.”（政府正在建造新酒店。（表示将来某时正在进行的动作））展示了本课重点语法【将来进行时 (Future Continuous Tense)】：表示在将来某一时刻或某段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'Olympic Games' (/əˈlɪmpɪk ɡeɪmz/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun phrase. 奥运会"
        ],
        "answerIndex": 2,
        "explanation": "单词 'Olympic Games' 的意思是：noun phrase. 奥运会（指国际性的体育赛事，每四年举办一次）。"
      }
    ],
    "funPrompt": "读完《The Olympic Games》后，试着用自己的话回答课前问题：When was the last time this country hosted the Olympic Games?"
  },
  {
    "id": 2038,
    "day": 38,
    "lessonNum": "38",
    "week": 2,
    "track": "nce2",
    "title": "L38: Everything except the weather 唯独没有考虑到天气",
    "coverEmoji": "☀️",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 141,
    "intro": "🎯 课前导读问题：Why did Harrison sell his house so quickly?\n📌 语法与句型重点：【no sooner...than... 句型】主语 + had no sooner + 过去分词 + than + 主语 + 过去式 — 用于描述某个动作刚完成，另一个动作立即发生。than后的从句用一般过去时。 例：He had no sooner returned than he bought a house. (他一回来就买了一栋房子。) ｜ 【hardly...when... 句型】主语 + had hardly + 过去分词 + when + 主语 + 过去式 — hardly位于句首时，主语和助动词要倒装。when引导的从句用一般过去时。 例：He had hardly had time to settle down when he sold the house. (他还没来得及安顿下来就把房子卖了。)\n💬 核心短语：“settle down”（指在某地安顿下来，长期居住）；“no sooner...than...”（表示一...就...，用于描述两个紧接着发生的动作）；“more than one could bear”（表示超过某人能忍受的限度）",
    "paragraphs": [
      "My old friend, Harrison, had lived in the Mediterranean for many years before he returned to England. He had often dreamed of retiring in England and had planned to settle down in the country. He had no sooner returned than he bought a house and went to live there. Almost immediately he began to complain about the weather, for even though it was still summer, it rained continually and it was often bitterly cold.",
      "After so many years of sunshine, Harrison got a shock. He acted as if he had never lived in England before. In the end, it was more than he could bear. He had hardly had time to settle down when he sold the house and left the country.",
      "The dream he had had for so many years ended there. Harrison had thought of everything except the weather."
    ],
    "vocabulary": [
      {
        "word": "Mediterranean",
        "syllables": "Mediterranean",
        "phonetic": "/ˌmedɪtəˈreɪniən/",
        "definition": "noun. 地中海（指位于欧洲、亚洲和非洲之间的海域，也可用作形容词）",
        "example": "My old friend, Harrison, had lived in the Mediterranean for many years before he returned to England.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "continually",
        "syllables": "continually",
        "phonetic": "/kənˈtɪnjuəli/",
        "definition": "adverb. 不断地；连续地（强调动作或状态的持续性，常带有令人不快的含义）",
        "example": "Almost immediately he began to complain about the weather, for even though it was still summer, it rained continually and it was often bitterly cold.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "bitterly",
        "syllables": "bitterly",
        "phonetic": "/ˈbɪtəli/",
        "definition": "adverb. 刺骨地；极其（用于形容寒冷或情感强度）",
        "example": "Almost immediately he began to complain about the weather, for even though it was still summer, it rained continually and it was often bitterly cold.",
        "emoji": "✨",
        "longman": [
          "in a way that produces or shows feelings of great sadness or anger"
        ]
      },
      {
        "word": "sunshine",
        "syllables": "sunshine",
        "phonetic": "/ˈsʌnʃaɪn/",
        "definition": "noun. 阳光；日光（指太阳的光和热，也可比喻温暖快乐的情形）",
        "example": "After so many years of sunshine, Harrison got a shock.",
        "emoji": "✨",
        "longman": [
          "the light and heat that come from the sun when there is no cloud",
          "happiness"
        ]
      },
      {
        "word": "shock",
        "syllables": "shock",
        "phonetic": "/ʃɒk/",
        "definition": "noun. 震惊；冲击（指因意外或不快的事情而产生的强烈惊讶）",
        "example": "After so many years of sunshine, Harrison got a shock.",
        "emoji": "✨",
        "longman": [
          "if something that happens is a shock, you did not expect it, and it makes you feel very surprised , and usually upset",
          "the feeling of surprise and disbelief you have when something very unexpected happens, especially something bad or frightening",
          "a medical condition in which someone looks pale and their heart and lungs are not working correctly, usually after a sudden very unpleasant experience"
        ]
      },
      {
        "word": "bear",
        "syllables": "bear",
        "phonetic": "/beə/",
        "definition": "verb. 忍受；承受（指承受痛苦、困难或不愉快的事情）",
        "example": "In the end, it was more than he could bear.",
        "emoji": "✨",
        "longman": [
          "to bravely accept or deal with a painful , difficult, or upsetting situation",
          "to be responsible for or accept something",
          "to be under something and support it"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他一回来就买了一栋房子。”（主语 + had no sooner + 过去分词 + than + 主语 + 过去式）？",
        "options": [
          "He had no sooner returned than he bought a house.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“He had no sooner returned than he bought a house.”（他一回来就买了一栋房子。），重点掌握句型：主语 + had no sooner + 过去分词 + than + 主语 + 过去式。"
      },
      {
        "question": "语法要点【no sooner...than... 句型】：下列哪个例句符合本课语法结构（主语 + had no sooner + 过去分词 + than + 主语 + 过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "He had no sooner returned than he bought a house.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He had no sooner returned than he bought a house.”（他一回来就买了一栋房子。）展示了本课重点语法【no sooner...than... 句型】：表示'一...就...'，用于强调两个紧接着发生的动作。"
      },
      {
        "question": "What does the word 'Mediterranean' (/ˌmedɪtəˈreɪniən/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 地中海"
        ],
        "answerIndex": 2,
        "explanation": "单词 'Mediterranean' 的意思是：noun. 地中海（指位于欧洲、亚洲和非洲之间的海域，也可用作形容词）。"
      }
    ],
    "funPrompt": "读完《Everything except the weather》后，试着用自己的话回答课前问题：Why did Harrison sell his house so quickly?"
  },
  {
    "id": 2039,
    "day": 39,
    "lessonNum": "39",
    "week": 2,
    "track": "nce2",
    "title": "L39: Am I all right? 我是否痊愈？",
    "coverEmoji": "🏥",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 140,
    "intro": "🎯 课前导读问题：Why did Mr. Gilbert telephone Dr. Millington?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去正在发生的事件背景。 例：While John Gilbert was in hospital, he asked his doctor to tell him... (当约翰·吉尔伯特住院时，他请求医生告诉他...) ｜ 【间接引语 (Indirect Speech)】主句过去式 + that + 陈述句（人称、时态等相应变化） — 用于转述问句和答句。 例：He asked if Mr. Gilbert's operation had been successful. (他问吉尔伯特先生的手术是否成功。)\n💬 核心短语：“be in hospital”（住院，表示生病或接受治疗而在医院）；“the following day”（第二天，指某事件之后的那一天）；“ask for”（请求；要）",
    "paragraphs": [
      "While John Gilbert was in hospital, he asked his doctor to tell him whether his operation had been successful, but the doctor refused to do so. The following day, the patient asked for a bedside telephone. When he was alone, he telephoned the hospital exchange and asked for Doctor Millington. When the doctor answered the phone, Mr. Gilbert said he was inquiring about a certain patient, a Mr. John Gilbert.",
      "He asked if Mr. Gilbert's operation had been successful and the doctor told him that it had been. He then asked when Mr. Gilbert would be allowed to go home and the doctor told him that he would have to stay in hosptial for another two weeks. Then Dr. Millington asked the caller if he was a relative of the patient. 'No,' the patient answered, 'I am Mr. John Gilbert.'"
    ],
    "vocabulary": [
      {
        "word": "hospital",
        "syllables": "hospital",
        "phonetic": "/ˈhɒspɪtl/",
        "definition": "noun. 医院（表示医疗机构的通用词汇）",
        "example": "While John Gilbert was in hospital, he asked his doctor to tell him whether his operation had been successful, but the doctor refused to do so.",
        "emoji": "✨",
        "longman": [
          "a large building where sick or injured people receive medical treatment",
          "a large hospital, which often has many different departments, including areas for research"
        ]
      },
      {
        "word": "operation",
        "syllables": "operation",
        "phonetic": "/ˌɒpəˈreɪʃn/",
        "definition": "noun. 手术（指医疗手术）",
        "example": "While John Gilbert was in hospital, he asked his doctor to tell him whether his operation had been successful, but the doctor refused to do so.",
        "emoji": "✨",
        "longman": [
          "the process of cutting into someone’s body to repair or remove a part that is damaged",
          "a business, company, or organization"
        ]
      },
      {
        "word": "successful",
        "syllables": "successful",
        "phonetic": "/səkˈsesfl/",
        "definition": "adj. 成功的（表示某事取得了预期结果）",
        "example": "While John Gilbert was in hospital, he asked his doctor to tell him whether his operation had been successful, but the doctor refused to do so.",
        "emoji": "✨",
        "longman": [
          "achieving what you wanted, or having the effect or result you intended",
          "a successful business, film, product etc makes a lot of money"
        ]
      },
      {
        "word": "patient",
        "syllables": "patient",
        "phonetic": "/ˈpeɪʃnt/",
        "definition": "noun. 病人（指接受医疗的人）",
        "example": "The following day, the patient asked for a bedside telephone.",
        "emoji": "✨",
        "longman": [
          "someone who is receiving medical treatment from a doctor or in a hospital",
          "able to wait calmly for a long time or to accept difficulties , people’s annoying behavior etc without becoming angry"
        ]
      },
      {
        "word": "telephone",
        "syllables": "telephone",
        "phonetic": "/ˈtelɪfəʊn/",
        "definition": "noun/verb. 电话/打电话（作名词指电话设备，作动词指打电话）",
        "example": "The following day, the patient asked for a bedside telephone.",
        "emoji": "✨",
        "longman": [
          "the piece of equipment that you use when you are talking to someone by telephone",
          "to talk to someone by telephone"
        ]
      },
      {
        "word": "exchange",
        "syllables": "exchange",
        "phonetic": "/ɪksˈtʃeɪndʒ/",
        "definition": "noun. 电话总机/交换台（指电话系统的转接中心）",
        "example": "When he was alone, he telephoned the hospital exchange and asked for Doctor Millington.",
        "emoji": "✨",
        "longman": [
          "the act of giving someone something and receiving something else from them",
          "a short conversation , usually between two people who are angry with each other",
          "the act of giving something you have bought back to the store where you bought it, for example because it does not work, fit etc, and taking something else instead"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他请求医生告诉他手术是否成功。”（ask + sb. + to do sth.）？",
        "options": [
          "He asked his doctor to tell him whether his operation had been successful.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“He asked his doctor to tell him whether his operation had been successful.”（他请求医生告诉他手术是否成功。），重点掌握句型：ask + sb. + to do sth.。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "While John Gilbert was in hospital, he asked his doctor to tell him...",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“While John Gilbert was in hospital, he asked his doctor to tell him...”（当约翰·吉尔伯特住院时，他请求医生告诉他...）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'hospital' (/ˈhɒspɪtl/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 医院"
        ],
        "answerIndex": 2,
        "explanation": "单词 'hospital' 的意思是：noun. 医院（表示医疗机构的通用词汇）。"
      }
    ],
    "funPrompt": "读完《Am I all right?》后，试着用自己的话回答课前问题：Why did Mr. Gilbert telephone Dr. Millington?"
  },
  {
    "id": 2040,
    "day": 40,
    "lessonNum": "40",
    "week": 2,
    "track": "nce2",
    "title": "L40: Food and talk 进餐与交谈",
    "coverEmoji": "🍽️",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "3 mins",
    "wordCount": 134,
    "intro": "🎯 课前导读问题：Was Mrs. Rumbold a good companion at dinner?\n📌 语法与句型重点：【将来进行时 (Future Continuous Tense)】Will + be + verb-ing — 用来询问他人在特定时间的安排，含有礼貌询问的意味。 例：Will you be seeing the new play? (你会去看那部新剧吗？) ｜ 【虚拟语气 (第二类条件句)】If + 主语 + 过去式 (be用were), 主语 + would/could + 动词原形 — 用于提出建议、想象不可能发生的情况或礼貌请求。 例：If you ate more and talked less, we would both enjoy our dinner. (如果你多吃少说，我们俩都会享受晚餐的。)\n💬 核心短语：“sit next to”（坐在...旁边）；“take my seat”（就座，坐下）；“make conversation”（找话题交谈，闲聊）",
    "paragraphs": [
      "Last week at a dinner party, the hostess asked me to sit next to Mrs. Rumbold. Mrs. Rumbold was a large, unsmiling lady in a tight black dress. She did not even look up when I took my seat beside her. Her eyes were fixed on her plate and in a short time, she was busy eating. I tried to make conversation.",
      "'A new play is coming to \"The Globe\" soon,' I said. 'Will you be seeing it?'",
      "'No,' she answered.",
      "'Will you be spending your holidays abroad this year?' I asked.",
      "'No,' she answered.",
      "'Will you be staying in England?' I asked.",
      "'No,' she answered.",
      "In despair, I asked her whether she was enjoying her dinner.",
      "'Young man,' she answered, 'if you ate more and talked less, we would both enjoy our dinner!\""
    ],
    "vocabulary": [
      {
        "word": "hostess",
        "syllables": "hostess",
        "phonetic": "/ˈhəʊstəs/",
        "definition": "noun. 女主人（指聚会或晚宴上的女性主持人）",
        "example": "Last week at a dinner party, the hostess asked me to sit next to Mrs. Rumbold.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "companion",
        "syllables": "companion",
        "phonetic": "/kəmˈpæniən/",
        "definition": "noun. 同伴，陪伴（指一起吃饭或活动的人）",
        "example": "",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "unsmiling",
        "syllables": "unsmiling",
        "phonetic": "/ʌnˈsmaɪlɪŋ/",
        "definition": "adjective. 不笑的，面无表情的（由smile加否定前缀un-构成）",
        "example": "Mrs. Rumbold was a large, unsmiling lady in a tight black dress.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "tight",
        "syllables": "tight",
        "phonetic": "/taɪt/",
        "definition": "adjective. 紧身的（形容衣服紧贴身体）",
        "example": "Mrs. Rumbold was a large, unsmiling lady in a tight black dress.",
        "emoji": "✨",
        "longman": [
          "tight clothes fit your body very closely, especially in a way that is uncomfortable",
          "string, wire, cloth etc that is tight has been pulled or stretched firmly so that it is straight or cannot move"
        ]
      },
      {
        "word": "fixed",
        "syllables": "fixed",
        "phonetic": "/fɪkst/",
        "definition": "adjective. 固定的，凝视的（常与on连用，表示盯着某物）",
        "example": "Her eyes were fixed on her plate and in a short time, she was busy eating.",
        "emoji": "✨",
        "longman": [
          "firmly fastened to a particular position",
          "fixed times, amounts, meanings etc cannot be changed"
        ]
      },
      {
        "word": "despair",
        "syllables": "despair",
        "phonetic": "/dɪˈspeə/",
        "definition": "noun. 绝望，沮丧（常与in连用，表示绝望地）",
        "example": "In despair, I asked her whether she was enjoying her dinner.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“你会去看吗？”（Will you be + verb-ing + ...?）？",
        "options": [
          "Will you be seeing it?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Will you be seeing it?”（你会去看吗？），重点掌握句型：Will you be + verb-ing + ...?。"
      },
      {
        "question": "语法要点【将来进行时 (Future Continuous Tense)】：下列哪个例句符合本课语法结构（Will + be + verb-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "Will you be seeing the new play?",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Will you be seeing the new play?”（你会去看那部新剧吗？）展示了本课重点语法【将来进行时 (Future Continuous Tense)】：表示在将来某一时刻或时间段正在进行的动作，常用于询问或谈论已安排好的计划。。"
      },
      {
        "question": "What does the word 'hostess' (/ˈhəʊstəs/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 女主人"
        ],
        "answerIndex": 2,
        "explanation": "单词 'hostess' 的意思是：noun. 女主人（指聚会或晚宴上的女性主持人）。"
      }
    ],
    "funPrompt": "读完《Food and talk》后，试着用自己的话回答课前问题：Was Mrs. Rumbold a good companion at dinner?"
  },
  {
    "id": 2041,
    "day": 41,
    "lessonNum": "41",
    "week": 2,
    "track": "nce2",
    "title": "L41: Do you call that a hat? 你把那个叫帽子吗？",
    "coverEmoji": "🎩",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 146,
    "intro": "🎯 课前导读问题：What kind of shopping does the writer enjoy, do you think?\n📌 语法与句型重点：【needn't have + 过去分词】主语 + needn't have + 过去分词 — 用于表达做了不必要的事情，语气中带有遗憾。 例：You needn't have said that. (你本不必说那句话的。) ｜ 【mustn't 与 needn't 的区别】mustn't = 禁止；needn't = 不必 — 两者含义完全不同，mustn't表示规则或命令禁止做某事，needn't表示没有义务做某事。 例：We mustn't buy things we don't need. (我们不可以买不需要的东西。)\n💬 核心短语：“You needn't be so rude”（表示不必如此粗鲁，用于表达对他人不礼貌行为的不满）；“looked at herself in the mirror”（照镜子，描述看着镜中的自己）；“buy things we don't need”（买不需要的东西）",
    "paragraphs": [
      "'Do you call that a hat?' I said to my wife.",
      "'You needn't be so rude about it,' my wife answered as she looked at herself in the mirror.",
      "I sat down on one of those modern chairs with holes in it and waited. We had been in the hat shop for half an hour and my wife was still in front of the mirror.",
      "'We mustn't buy things we don't need,' I remarked suddenly. I regretted saying it almost at once.",
      "'You needn't have said that,' my wife answered. 'I needn't remind you of that terrible tie you bought yesterday.'",
      "'I find it beautiful,' I said. 'A man can never have too many ties.'",
      "'And a woman can't have too many hats,' she answered.",
      "Ten minutes later we walked out of the shop together. My wife was wearing a hat that looked like a lighthouse!"
    ],
    "vocabulary": [
      {
        "word": "rude",
        "syllables": "rude",
        "phonetic": "/ruːd/",
        "definition": "adj. 粗鲁的，无礼的（形容人的行为或言语不礼貌）",
        "example": "'You needn't be so rude about it,' my wife answered as she looked at herself in the mirror.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "mirror",
        "syllables": "mirror",
        "phonetic": "/ˈmɪrə(r)/",
        "definition": "n. 镜子（用于反射影像的玻璃制品）",
        "example": "'You needn't be so rude about it,' my wife answered as she looked at herself in the mirror.",
        "emoji": "✨",
        "longman": [
          "a piece of special glass that you can look at and see yourself in",
          "a mirror on the inside or side of a vehicle, which the driver uses to see what is behind"
        ]
      },
      {
        "word": "modern",
        "syllables": "modern",
        "phonetic": "/ˈmɒdn/",
        "definition": "adj. 现代的，现代化的（形容当代的或新式的物品）",
        "example": "I sat down on one of those modern chairs with holes in it and waited.",
        "emoji": "✨",
        "longman": [
          "belonging to the present time or most recent time",
          "made or done using the most recent designs or methods"
        ]
      },
      {
        "word": "regret",
        "syllables": "regret",
        "phonetic": "/rɪˈɡret/",
        "definition": "v. 后悔，遗憾（对已做的事感到后悔）",
        "example": "I regretted saying it almost at once.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "remark",
        "syllables": "remark",
        "phonetic": "/rɪˈmɑːk/",
        "definition": "v/n. 评论，谈论（发表意见或评论）",
        "example": "'We mustn't buy things we don't need,' I remarked suddenly.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "lighthouse",
        "syllables": "lighthouse",
        "phonetic": "/ˈlaɪthaʊs/",
        "definition": "n. 灯塔（海岸边指引船只的塔状建筑）",
        "example": "My wife was wearing a hat that looked like a lighthouse!",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“你不必为此这么粗鲁。”（You needn't be + adj）？",
        "options": [
          "You needn't be so rude about it.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“You needn't be so rude about it.”（你不必为此这么粗鲁。），重点掌握句型：You needn't be + adj。"
      },
      {
        "question": "语法要点【needn't have + 过去分词】：下列哪个例句符合本课语法结构（主语 + needn't have + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "You needn't have said that.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“You needn't have said that.”（你本不必说那句话的。）展示了本课重点语法【needn't have + 过去分词】：表示本不必做某事（但实际上已经做了），含有后悔或责备的意味。"
      },
      {
        "question": "What does the word 'rude' (/ruːd/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adj. 粗鲁的，无礼的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'rude' 的意思是：adj. 粗鲁的，无礼的（形容人的行为或言语不礼貌）。"
      }
    ],
    "funPrompt": "读完《Do you call that a hat?》后，试着用自己的话回答课前问题：What kind of shopping does the writer enjoy, do you think?"
  },
  {
    "id": 2042,
    "day": 42,
    "lessonNum": "42",
    "week": 2,
    "track": "nce2",
    "title": "L42: Not very musical 并非很懂音乐",
    "coverEmoji": "🔦",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 142,
    "intro": "🎯 课前导读问题：What happened when the snake charmer began to play jazz?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。 例：As we had had a long walk through one of the markets, we stopped at a square. (因为我们穿过市场走了很长一段路，所以我们在广场上停下来。) ｜ 【As soon as 引导的时间状语从句】As soon as + 主语 + 动词过去式, 主语 + 动词过去式 — 从句动作发生后，主句动作紧接着发生，从句用一般过去时。 例：As soon as he saw us, he picked up a long pipe. (他一看到我们，就拿起一根长笛。)\n💬 核心短语：“have a rest”（停下来休息一下）；“have a look at”（去看一看，瞧一瞧）；“as soon as”（一...就...）",
    "paragraphs": [
      "As we had had a long walk through one of the markets of old Delhi, we stopped at a square to have a rest. After a time, we noticed a snake charmer with two large baskets at the other side of the square, so we went to have a look at him. As soon as he saw us, he picked up a long pipe which was covered with coins and opened one of the baskets. When he began to play a tune, we had our first glimpse of the snake.",
      "It rose out of the basket and began to follow the movements of the pipe. We were very much surprised when the snake charmer suddenly began to play jazz and modern pop songs. The snake, however, continued to 'dance' slowly. It obviously could not tell the difference between Indian music and jazz!"
    ],
    "vocabulary": [
      {
        "word": "square",
        "syllables": "square",
        "phonetic": "/skweə(r)/",
        "definition": "noun. 广场（指城镇中四周有建筑物的开阔空地）",
        "example": "As we had had a long walk through one of the markets of old Delhi, we stopped at a square to have a rest.",
        "emoji": "✨",
        "longman": [
          "having four straight equal sides and 90° angles at the corners",
          "forming a 90° angle , or being close to or similar to a 90° angle",
          "parallel with a straight line"
        ]
      },
      {
        "word": "glimpse",
        "syllables": "glimpse",
        "phonetic": "/ɡlɪmps/",
        "definition": "noun. 一瞥，瞥见（短暂地看一眼，强调时间很短）",
        "example": "When he began to play a tune, we had our first glimpse of the snake.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "pipe",
        "syllables": "pipe",
        "phonetic": "/paɪp/",
        "definition": "noun. 管乐器，笛子（吹奏类乐器的统称，这里指耍蛇人用的笛子）",
        "example": "As soon as he saw us, he picked up a long pipe which was covered with coins and opened one of the baskets.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "coin",
        "syllables": "coin",
        "phonetic": "/kɔɪn/",
        "definition": "noun. 硬币（金属货币，文中指装饰在笛子上的硬币）",
        "example": "As soon as he saw us, he picked up a long pipe which was covered with coins and opened one of the baskets.",
        "emoji": "✨",
        "longman": [
          "a piece of metal, usually flat and round, that is used as money",
          "money in the form of metal coins"
        ]
      },
      {
        "word": "basket",
        "syllables": "basket",
        "phonetic": "/ˈbɑːskɪt/",
        "definition": "noun. 篮子，筐（装东西的容器，文中指耍蛇人装蛇的篮子）",
        "example": "After a time, we noticed a snake charmer with two large baskets at the other side of the square, so we went to have a look at him.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "movement",
        "syllables": "movement",
        "phonetic": "/ˈmuːvmənt/",
        "definition": "noun. 动作，移动（身体或物体的移动或姿态变化）",
        "example": "It rose out of the basket and began to follow the movements of the pipe.",
        "emoji": "✨",
        "longman": [
          "a group of people who share the same ideas or beliefs and who work together to achieve a particular aim",
          "when someone or something changes position or moves from one place to another"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“因为我们穿过市场走了很长一段路，所以我们在广场上停下来休息。”（As we had + 过去分词...）？",
        "options": [
          "As we had had a long walk through one of the markets, we stopped at a square to have a rest.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“As we had had a long walk through one of the markets, we stopped at a square to have a rest.”（因为我们穿过市场走了很长一段路，所以我们在广场上停下来休息。），重点掌握句型：As we had + 过去分词...。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "As we had had a long walk through one of the markets, we stopped at a square.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“As we had had a long walk through one of the markets, we stopped at a square.”（因为我们穿过市场走了很长一段路，所以我们在广场上停下来。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作，或称为'过去的过去'。"
      },
      {
        "question": "What does the word 'snake charmer' (/sneɪk ˈtʃɑːmə(r)/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 耍蛇人，吹笛者"
        ],
        "answerIndex": 2,
        "explanation": "单词 'snake charmer' 的意思是：noun. 耍蛇人，吹笛者（指用笛子控制蛇的人，在印度等地常见）。"
      }
    ],
    "funPrompt": "读完《Not very musical》后，试着用自己的话回答课前问题：What happened when the snake charmer began to play jazz?"
  },
  {
    "id": 2043,
    "day": 43,
    "lessonNum": "43",
    "week": 2,
    "track": "nce2",
    "title": "L43: Over the South Pole 飞越南极",
    "coverEmoji": "🧭",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 145,
    "intro": "🎯 课前导读问题：How was the plane able to clear the mountains?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 + (by + 过去时间/when/before...) — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。常与before, after, when, by等连用。。 例：In 1929, three years after his flight over the North Pole, the American explorer successfully flew over the South Pole. (1929年，在他飞越北极三年后，这位美国探险家成功飞越了南极。) ｜ 【be able to 的用法】主语 + be (was/were) able to + 动词原形 — be able to 表示成功完成某事的能力，强调克服困难后成功。与can相比，be able to 更强调成功的意味，可用于各种时态。。 例：Byrd and his men were able to take a great many photographs. (伯德和他的手下能够拍摄大量照片。)\n💬 核心短语：“run into trouble”（遇到麻烦/困难，指突然遭遇问题）；“at one point”（在某一时刻；在某种程度上）；“get over”（越过；克服；恢复）",
    "paragraphs": [
      "In 1929, three years after his flight over the North Pole, the American explorer, R. E. Byrd, successfully flew over the South Pole for the first time. Though, at first, Byrd and his men were able to take a great many photographs of the mountains that lay below, they soon ran into serious trouble.",
      "At one point, it seemed certain that their plane would crash. It could only get over the mountains if it rose to 10,000 feet. Byrd at once ordered his men to throw out two heavy food sacks. The plane was then able to rise and it cleared the mountains by 400 feet.",
      "Byrd now knew that he would be able to reach the South Pole which was 300 miles away, for there were no more mountains in sight. The aircraft was able to fly over the endless white plains without difficulty."
    ],
    "vocabulary": [
      {
        "word": "explorer",
        "syllables": "explorer",
        "phonetic": "/ɪkˈsplɔːrə(r)/",
        "definition": "noun. 探险家；探索者（指去陌生地方进行探索的人）",
        "example": "In 1929, three years after his flight over the North Pole, the American explorer, R.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "successfully",
        "syllables": "successfully",
        "phonetic": "/səkˈsesfəli/",
        "definition": "adverb. 成功地（修饰动词，表示某事顺利完成）",
        "example": "Byrd, successfully flew over the South Pole for the first time.",
        "emoji": "✨",
        "longman": [
          "achieving what you wanted, or having the effect or result you intended",
          "a successful business, film, product etc makes a lot of money"
        ]
      },
      {
        "word": "photograph",
        "syllables": "photograph",
        "phonetic": "/ˈfəʊtəɡrɑːf/",
        "definition": "noun. 照片（指用相机拍摄的图片）；verb. 拍照；摄影（指拍摄照片的动作）",
        "example": "Though, at first, Byrd and his men were able to take a great many photographs of the mountains that lay below, they soon ran into serious trouble.",
        "emoji": "✨",
        "longman": [
          "a picture obtained by using a camera and film that is sensitive to light",
          "a picture taken using a camera"
        ]
      },
      {
        "word": "serious",
        "syllables": "serious",
        "phonetic": "/ˈsɪəriəs/",
        "definition": "adjective. 严重的；严肃的（形容问题、情况等很严重或态度认真）",
        "example": "Though, at first, Byrd and his men were able to take a great many photographs of the mountains that lay below, they soon ran into serious trouble.",
        "emoji": "✨",
        "longman": [
          "a serious situation, problem, accident etc is extremely bad or dangerous",
          "important and needing a lot of thought or attention"
        ]
      },
      {
        "word": "trouble",
        "syllables": "trouble",
        "phonetic": "/ˈtrʌbl/",
        "definition": "noun. 麻烦；困难；问题（指遭遇的困难或麻烦事）；verb. 麻烦；使烦恼（使某人感到担忧或不便）",
        "example": "Though, at first, Byrd and his men were able to take a great many photographs of the mountains that lay below, they soon ran into serious trouble.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "crash",
        "syllables": "crash",
        "phonetic": "/kræʃ/",
        "definition": "verb. （飞机）坠毁；撞毁（指飞机等突然坠落或猛烈撞击）；noun. 坠毁；碰撞（指撞击或坠落的事件）",
        "example": "At one point, it seemed certain that their plane would crash.",
        "emoji": "✨",
        "longman": [
          "to have an accident in a car, plane etc by violently hitting something else",
          "to hit something or someone extremely hard while moving, in a way that causes a lot of damage or makes a lot of noise"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“伯德和他的手下能够拍摄位于下方的山脉的大量照片。”（...was/were able to + 动词原形）？",
        "options": [
          "Byrd and his men were able to take a great many photographs of the mountains that lay below.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Byrd and his men were able to take a great many photographs of the mountains that lay below.”（伯德和他的手下能够拍摄位于下方的山脉的大量照片。），重点掌握句型：...was/were able to + 动词原形。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + had + 过去分词 + (by + 过去时间/when/before...)）？",
        "options": [
          "He have go to school tomorrow.",
          "In 1929, three years after his flight over the North Pole, the American explorer successfully flew over the South Pole.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“In 1929, three years after his flight over the North Pole, the American explorer successfully flew over the South Pole.”（1929年，在他飞越北极三年后，这位美国探险家成功飞越了南极。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作，由had + 过去分词构成。"
      },
      {
        "question": "What does the word 'explorer' (/ɪkˈsplɔːrə(r)/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 探险家；探索者"
        ],
        "answerIndex": 2,
        "explanation": "单词 'explorer' 的意思是：noun. 探险家；探索者（指去陌生地方进行探索的人）。"
      }
    ],
    "funPrompt": "读完《Over the South Pole》后，试着用自己的话回答课前问题：How was the plane able to clear the mountains?"
  },
  {
    "id": 2044,
    "day": 44,
    "lessonNum": "44",
    "week": 2,
    "track": "nce2",
    "title": "L44: Through the forest 穿过森林",
    "coverEmoji": "👜",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 145,
    "intro": "🎯 课前导读问题：How did Mrs. Sterling get her bag back?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述故事发生的背景或正在进行的动作，常与when/while等连用。 例：She was having a picnic at the edge of a forest. (她正在森林边缘野餐。) ｜ 【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述过去的过去发生的事情，常与before, after, when等连用。 例：She saw that they had sat down. (她看到他们已经坐下了。)\n💬 核心短语：“run through”（穿过（森林等））；“rush up to”（冲向；突然接近）；“try to steal”（试图偷窃）",
    "paragraphs": [
      "Mrs. Anne Sterling did not think of the risk she was taking when she ran through a forest after two men. They had rushed up to her while she was having a picnic at the edge of a forest with her children and tried to steal her handbag. In the struggle, the strap broke and, with the bag in their possession, both men started running through the trees. Mrs. Sterling got so angry that she ran after them.",
      "She was soon out of breath, but she continued to run. When she caught up with them, she saw that they had sat down and were going through the contents of the bag, so she ran straight at them. The men got such a fright that they dropped the bag and ran away. 'The strap needs mending,' said Mrs. Sterling later, 'but they did not steal anything.'"
    ],
    "vocabulary": [
      {
        "word": "risk",
        "syllables": "risk",
        "phonetic": "/rɪsk/",
        "definition": "noun. 风险；危险（指可能发生的危险或损失）；verb. 冒…的危险（指使处于危险中）",
        "example": "Mrs. Anne Sterling did not think of the risk she was taking when she ran through a forest after two men.",
        "emoji": "✨",
        "longman": [
          "the possibility that something bad, unpleasant, or dangerous may happen",
          "an action that might have bad results"
        ]
      },
      {
        "word": "forest",
        "syllables": "forest",
        "phonetic": "/ˈfɒrɪst/",
        "definition": "noun. 森林（大片树木覆盖的地区）",
        "example": "Mrs. Anne Sterling did not think of the risk she was taking when she ran through a forest after two men.",
        "emoji": "✨",
        "longman": [
          "a large area of land that is covered with trees",
          "a very large area of land with a lot of trees growing closely together"
        ]
      },
      {
        "word": "picnic",
        "syllables": "picnic",
        "phonetic": "/ˈpɪknɪk/",
        "definition": "noun. 野餐（在户外吃的便餐）；verb. 去野餐（进行野餐活动）",
        "example": "They had rushed up to her while she was having a picnic at the edge of a forest with her children and tried to steal her handbag.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "handbag",
        "syllables": "handbag",
        "phonetic": "/ˈhændbæɡ/",
        "definition": "noun. 手提包（妇女随身携带的包）",
        "example": "They had rushed up to her while she was having a picnic at the edge of a forest with her children and tried to steal her handbag.",
        "emoji": "✨",
        "longman": [
          "a small bag in which a woman carries money and personal things"
        ]
      },
      {
        "word": "struggle",
        "syllables": "struggle",
        "phonetic": "/ˈstrʌɡl/",
        "definition": "noun. 斗争；挣扎（用力对抗或争取）；verb. 斗争；挣扎（努力克服困难）",
        "example": "In the struggle, the strap broke and, with the bag in their possession, both men started running through the trees.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "strap",
        "syllables": "strap",
        "phonetic": "/stræp/",
        "definition": "noun. 带子（用于固定或携带的细长条状物）；verb. 用带子系（用带子捆绑或固定）",
        "example": "In the struggle, the strap broke and, with the bag in their possession, both men started running through the trees.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“斯特林夫人没有考虑到她所冒的风险。”（主语 + did not think of + the risk）？",
        "options": [
          "Mrs. Anne Sterling did not think of the risk she was taking.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Mrs. Anne Sterling did not think of the risk she was taking.”（斯特林夫人没有考虑到她所冒的风险。），重点掌握句型：主语 + did not think of + the risk。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "She was having a picnic at the edge of a forest.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“She was having a picnic at the edge of a forest.”（她正在森林边缘野餐。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或时间段正在进行的动作。"
      },
      {
        "question": "What does the word 'risk' (/rɪsk/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 风险；危险"
        ],
        "answerIndex": 2,
        "explanation": "单词 'risk' 的意思是：noun. 风险；危险（指可能发生的危险或损失）。"
      }
    ],
    "funPrompt": "读完《Through the forest》后，试着用自己的话回答课前问题：How did Mrs. Sterling get her bag back?"
  },
  {
    "id": 2045,
    "day": 45,
    "lessonNum": "45",
    "week": 2,
    "track": "nce2",
    "title": "L45: A clear conscience 问心无愧",
    "coverEmoji": "👶",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 142,
    "intro": "🎯 课前导读问题：How did Sam get his money back?\n📌 语法与句型重点：【must have + 过去分词（对过去的肯定推测）】主语 + must have + 过去分词 + ... — 用于根据证据或理由推断过去发生的事情，语气肯定。 例：Sam was sure that the wallet must have been found by one of the villagers. (萨姆确信钱包一定是被某个村民发现了。) ｜ 【过去完成时（Past Perfect Tense）】had + 过去分词 — 用于叙述过去事件时，表示先发生的动作，常与一般过去时连用。 例：Sam had lost his wallet while taking his savings to the post office. (萨姆在把积蓄带到邮局的路上丢了钱包。)\n💬 核心短语：“take savings to the post office”（把积蓄带到邮局去）；“must have been”（一定曾经是（对过去的肯定推测））；“be wrapped up in newspaper”（用报纸包裹着）",
    "paragraphs": [
      "The whole village soon learnt that a large sum of money had been lost. Sam Benton, the local butcher, had lost his wallet while taking his savings to the post office. Sam was sure that the wallet must have been found by one of the villagers, but it was not returned to him. Three months passed, and then one morning, Sam found his wallet outside his front door.",
      "It had been wrapped up in newspaper and it contained half the money he had lost, together with a note which said: 'A thief, yes, but only 50 per cent a thief!' Two months later, some more money was sent to Sam with another note: 'Only 25 per cent a thief now!' In time, all Sam's money was paid back in this way. The last note said: 'I am 100 per cent honest now!'"
    ],
    "vocabulary": [
      {
        "word": "village",
        "syllables": "village",
        "phonetic": "/ˈvɪlɪdʒ/",
        "definition": "noun. 村庄，乡村（指农村或小镇，比 town 小）",
        "example": "The whole village soon learnt that a large sum of money had been lost.",
        "emoji": "✨",
        "longman": [
          "a very small town in the countryside"
        ]
      },
      {
        "word": "wallet",
        "syllables": "wallet",
        "phonetic": "/ˈwɒlɪt/",
        "definition": "noun. 钱包，皮夹（用于装钱和信用卡的小皮具）",
        "example": "Sam Benton, the local butcher, had lost his wallet while taking his savings to the post office.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "butcher",
        "syllables": "butcher",
        "phonetic": "/ˈbʊtʃə(r)/",
        "definition": "noun. 屠夫，肉商（指从事肉类买卖的人）",
        "example": "Sam Benton, the local butcher, had lost his wallet while taking his savings to the post office.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "savings",
        "syllables": "savings",
        "phonetic": "/ˈseɪvɪŋz/",
        "definition": "noun. 积蓄，存款（常用复数形式，指存起来的钱）",
        "example": "Sam Benton, the local butcher, had lost his wallet while taking his savings to the post office.",
        "emoji": "✨",
        "longman": [
          "all the money that you have saved, especially in a bank"
        ]
      },
      {
        "word": "thief",
        "syllables": "thief",
        "phonetic": "/θiːf/",
        "definition": "noun. 小偷，贼（复数形式为 thieves，指偷窃的人）",
        "example": "It had been wrapped up in newspaper and it contained half the money he had lost, together with a note which said: 'A thief, yes, but only 50 per cent a thief!'",
        "emoji": "✨",
        "longman": [
          "someone who steals things from another person or place",
          "someone who steals things from a person or place"
        ]
      },
      {
        "word": "honest",
        "syllables": "honest",
        "phonetic": "/ˈɒnɪst/",
        "definition": "adj. 诚实的，正直的（形容人不欺骗，实话实说）",
        "example": "The last note said: 'I am 100 per cent honest now!'",
        "emoji": "✨",
        "longman": [
          "someone who is honest always tells the truth and does not cheat or steal",
          "not hiding the truth or the facts about something"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“钱包一定是被某个村民发现了。”（主语 + must have + 过去分词）？",
        "options": [
          "The wallet must have been found by one of the villagers.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The wallet must have been found by one of the villagers.”（钱包一定是被某个村民发现了。），重点掌握句型：主语 + must have + 过去分词。"
      },
      {
        "question": "语法要点【must have + 过去分词（对过去的肯定推测）】：下列哪个例句符合本课语法结构（主语 + must have + 过去分词 + ...）？",
        "options": [
          "He have go to school tomorrow.",
          "Sam was sure that the wallet must have been found by one of the villagers.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Sam was sure that the wallet must have been found by one of the villagers.”（萨姆确信钱包一定是被某个村民发现了。）展示了本课重点语法【must have + 过去分词（对过去的肯定推测）】：表示对过去发生的事情的肯定推测，意为'一定已经...'。"
      },
      {
        "question": "What does the word 'village' (/ˈvɪlɪdʒ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 村庄，乡村"
        ],
        "answerIndex": 2,
        "explanation": "单词 'village' 的意思是：noun. 村庄，乡村（指农村或小镇，比 town 小）。"
      }
    ],
    "funPrompt": "读完《A clear conscience》后，试着用自己的话回答课前问题：How did Sam get his money back?"
  },
  {
    "id": 2046,
    "day": 46,
    "lessonNum": "46",
    "week": 2,
    "track": "nce2",
    "title": "L46: Expensive and uncomfortable 既昂贵又受罪",
    "coverEmoji": "📦",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "4 mins",
    "wordCount": 145,
    "intro": "🎯 课前导读问题：What did the man in this story do?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 描述故事发生的背景或正在进行的动作，常与when/while连用。 例：Workers were unloading wooden boxes when they found the heavy box. (工人们正在卸木箱时，发现了那个很重的箱子。) ｜ 【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于过去完成时的动作发生在另一个过去动作之前，常与before/after连用。 例：The man admitted hiding in the box before the plane left London. (那个人承认在飞机离开伦敦之前就藏进了箱子里。)\n💬 核心短语：“begin to do sth”（开始做某事，表示动作的开始）；“a number of”（许多；若干，后接可数名词复数）；“It occurred to sb to do sth”（某人突然想起做某事）",
    "paragraphs": [
      "When a plane from London arrived at Sydney airport, workers began to unload a number of wooden boxes which contained clothing. No one could account for the fact that one of the boxes was extremely heavy. It suddenly occurred to one of the workers to open up the box. He was astonished at what he found.",
      "A man was lying in the box on top of a pile of woolen goods. He was so surprised at being discovered that he did not even try to run away. After he was arrested, the man admitted hiding in the box before the plane left London. He had had a long and uncomfortable trip, for he had been confined to the wooden box for over eighteen hours.",
      "The man was ordered to pay $3,500 for the cost of the trip. The normal price of a ticket is $2,000!"
    ],
    "vocabulary": [
      {
        "word": "unload",
        "syllables": "unload",
        "phonetic": "/ˌʌnˈləʊd/",
        "definition": "verb. 卸（货）；从...卸下货物（指从交通工具上卸下货物，与load（装载）相对）",
        "example": "When a plane from London arrived at Sydney airport, workers began to unload a number of wooden boxes which contained clothing.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "wooden",
        "syllables": "wooden",
        "phonetic": "/ˈwʊdn/",
        "definition": "adj. 木制的；木头的（由名词wood + en构成，表示材质）",
        "example": "When a plane from London arrived at Sydney airport, workers began to unload a number of wooden boxes which contained clothing.",
        "emoji": "✨",
        "longman": [
          "made of wood",
          "not showing enough expression, emotion, or movement, especially when performing in public"
        ]
      },
      {
        "word": "extremely",
        "syllables": "extremely",
        "phonetic": "/ɪkˈstriːmli/",
        "definition": "adv. 极其；非常（用于强调程度，相当于very much，但语气更强）",
        "example": "No one could account for the fact that one of the boxes was extremely heavy.",
        "emoji": "✨",
        "longman": [
          "to a very great degree"
        ]
      },
      {
        "word": "occur",
        "syllables": "occur",
        "phonetic": "/əˈkɜː/",
        "definition": "verb. 发生；出现（常用于It occurred to sb that...句型，表示某人突然想起）",
        "example": "It suddenly occurred to one of the workers to open up the box.",
        "emoji": "✨",
        "longman": [
          "to happen",
          "to happen or exist in a particular place or situation"
        ]
      },
      {
        "word": "astonish",
        "syllables": "astonish",
        "phonetic": "/əˈstɒnɪʃ/",
        "definition": "verb. 使惊讶；使感到震惊（强调意外程度比surprise更大）",
        "example": "He was astonished at what he found.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "discover",
        "syllables": "discover",
        "phonetic": "/dɪˈskʌvə/",
        "definition": "verb. 发现；发觉（指发现原本存在但未被知晓的事物或情况）",
        "example": "He was so surprised at being discovered that he did not even try to run away.",
        "emoji": "✨",
        "longman": [
          "to find someone or something, either by accident or because you were looking for them",
          "to find out something that you did not know about before"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“没有人能解释其中一个箱子特别重这一事实。”（No one could account for the fact that...）？",
        "options": [
          "No one could account for the fact that one of the boxes was extremely heavy.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“No one could account for the fact that one of the boxes was extremely heavy.”（没有人能解释其中一个箱子特别重这一事实。），重点掌握句型：No one could account for the fact that...。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "Workers were unloading wooden boxes when they found the heavy box.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Workers were unloading wooden boxes when they found the heavy box.”（工人们正在卸木箱时，发现了那个很重的箱子。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'unload' (/ˌʌnˈləʊd/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "verb. 卸（货）；从...卸下货物"
        ],
        "answerIndex": 2,
        "explanation": "单词 'unload' 的意思是：verb. 卸（货）；从...卸下货物（指从交通工具上卸下货物，与load（装载）相对）。"
      }
    ],
    "funPrompt": "读完《Expensive and uncomfortable》后，试着用自己的话回答课前问题：What did the man in this story do?"
  },
  {
    "id": 2047,
    "day": 47,
    "lessonNum": "47",
    "week": 2,
    "track": "nce2",
    "title": "L47: A thirsty ghost 嗜酒的鬼魂",
    "coverEmoji": "👻",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "3 mins",
    "wordCount": 139,
    "intro": "🎯 课前导读问题：What evidence is there of a ghost?\n📌 语法与句型重点：【must have + 过去分词（表示对过去的肯定推测）】主语 + must have + 过去分词 + 其他 — 用于根据现有证据对过去发生的事情进行合理推测，语气肯定。 例：The ghost must have drunk the whisky. (那个鬼一定喝了威士忌。) ｜ 【be going to 表示将来计划或意图】主语 + am/is/are + going to + 动词原形 — 表示主观意图或计划做的事情，也可以表示根据现有证据推断将要发生的事。 例：Mr. Thompson is going to sell the pub. (汤普森先生打算把酒吧卖掉。)\n💬 核心短语：“up for sale”（表示某物正在出售或待售）；“be going to”（表示计划或打算做某事，或根据现有证据预测将要发生的事）；“come in”（进来；进入）",
    "paragraphs": [
      "A public house which was recently bought by Mr.Ian Thompson is up for sale. Mr.Thompson is going to sell it because it is haunted. He told me that he could not go to sleep one night because he heard a strange noise coming from the bar. The next morning, he found that the doors had been blocked by chairs and the furniture had been moved.",
      "Though Mr.Thompson had turned the lights off before he went to bed, they were on in the morning. He also said that he had found five empty whisky bottles which the ghost must have drunk the night before. When I suggested that some villagers must have come in for a free drink, Mr.Thompson shook his head. The villagers have told him that they will not accept the pub even if he gives it away."
    ],
    "vocabulary": [
      {
        "word": "evidence",
        "syllables": "evidence",
        "phonetic": "/ˈevɪdəns/",
        "definition": "noun. 证据；迹象（指证明某事存在的具体证明或迹象）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "facts or signs that show clearly that something exists or is true",
          "information that is given in a court of law in order to prove that someone is guilty or not guilty"
        ]
      },
      {
        "word": "ghost",
        "syllables": "ghost",
        "phonetic": "/ɡəʊst/",
        "definition": "noun. 鬼；幽灵（指死去的人的灵魂，通常被描述为透明的影像）",
        "example": "He also said that he had found five empty whisky bottles which the ghost must have drunk the night before.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "haunt",
        "syllables": "haunt",
        "phonetic": "/hɔːnt/",
        "definition": "verb. （鬼魂）出没于；常去（指鬼魂在某地出现；也可指人常去某地）",
        "example": "Mr.Thompson is going to sell it because it is haunted.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "haunted",
        "syllables": "haunted",
        "phonetic": "/ˈhɔːntɪd/",
        "definition": "adj. 闹鬼的（描述有鬼魂出没的建筑物或地方）",
        "example": "Mr.Thompson is going to sell it because it is haunted.",
        "emoji": "✨",
        "longman": [
          "a haunted building is believed to be visited regularly by the soul of a dead person"
        ]
      },
      {
        "word": "furniture",
        "syllables": "furniture",
        "phonetic": "/ˈfɜːnɪtʃə/",
        "definition": "noun. 家具（指房间内的桌子、椅子、床等可移动物品）",
        "example": "The next morning, he found that the doors had been blocked by chairs and the furniture had been moved.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "whisky",
        "syllables": "whisky",
        "phonetic": "/ˈwɪski/",
        "definition": "noun. 威士忌酒（一种烈性酒，源自苏格兰）",
        "example": "He also said that he had found five empty whisky bottles which the ghost must have drunk the night before.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“汤普森先生打算把它卖掉，因为它闹鬼。”（be going to + 动词原形（表示计划））？",
        "options": [
          "Mr. Thompson is going to sell it because it is haunted.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Mr. Thompson is going to sell it because it is haunted.”（汤普森先生打算把它卖掉，因为它闹鬼。），重点掌握句型：be going to + 动词原形（表示计划）。"
      },
      {
        "question": "语法要点【must have + 过去分词（表示对过去的肯定推测）】：下列哪个例句符合本课语法结构（主语 + must have + 过去分词 + 其他）？",
        "options": [
          "He have go to school tomorrow.",
          "The ghost must have drunk the whisky.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The ghost must have drunk the whisky.”（那个鬼一定喝了威士忌。）展示了本课重点语法【must have + 过去分词（表示对过去的肯定推测）】：表示说话人对过去发生的事情的肯定推测，意思是'一定/肯定已经...'。"
      },
      {
        "question": "What does the word 'evidence' (/ˈevɪdəns/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 证据；迹象"
        ],
        "answerIndex": 2,
        "explanation": "单词 'evidence' 的意思是：noun. 证据；迹象（指证明某事存在的具体证明或迹象）。"
      }
    ],
    "funPrompt": "读完《A thirsty ghost》后，试着用自己的话回答课前问题：What evidence is there of a ghost?"
  },
  {
    "id": 2048,
    "day": 48,
    "lessonNum": "48",
    "week": 2,
    "track": "nce2",
    "title": "L48: Did you want to tell me something? 你想对我说什么吗？",
    "coverEmoji": "🦷",
    "category": "新概念二册 • Unit 2 (Lessons 25–48)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 2",
    "readingTime": "3 mins",
    "wordCount": 137,
    "intro": "🎯 课前导读问题：Why did the writer become very worried?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去正在发生的动作，常与 when, while 等连用。 例：My tongue was busy searching out the hole where the tooth had been. (我的舌头正忙着找出拔掉牙齿的那个洞。) ｜ 【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述在叙述过去事件时，更早发生的动作。 例：The dentist had just pulled out one of my teeth. (牙医刚刚拔掉了我的一颗牙。)\n💬 核心短语：“pull out”（拔掉（牙齿、塞子等））；“in answer to”（作为对...的回答/回应）；“search out”（仔细找出；搜索到）",
    "paragraphs": [
      "Dentists always ask questions when it is impossible for you to answer. My dentist had just pulled out one of my teeth and had told me to rest for a while. I tried to say something, but my mouth was full of cotton wool. He knew I collected match boxes and asked me whether my collection was growing.",
      "He then asked me how my brother was and whether I liked my new job in London. In answer to these questions I either nodded or made strange noises. Meanwhile, my tongue was busy searching out the hole where the tooth had been. I suddenly felt very worried, but could not say anything.",
      "When the dentist at last removed the cotton wool from my mouth, I was able to tell him that he had pulled out the wrong tooth."
    ],
    "vocabulary": [
      {
        "word": "dentist",
        "syllables": "dentist",
        "phonetic": "/ˈdentɪst/",
        "definition": "noun. 牙医（指治疗牙齿疾病的专业医生）",
        "example": "Dentists always ask questions when it is impossible for you to answer.",
        "emoji": "✨",
        "longman": [
          "someone whose job is to treat people’s teeth",
          "a dentist who has special training to operate on people’s teeth"
        ]
      },
      {
        "word": "collect",
        "syllables": "collect",
        "phonetic": "/kəˈlekt/",
        "definition": "verb. 收集；收藏（指系统地收集某物作为爱好，如收集邮票、硬币、火柴盒等）",
        "example": "He knew I collected match boxes and asked me whether my collection was growing.",
        "emoji": "✨",
        "longman": [
          "to get things of the same type from different places and bring them together",
          "to get and keep objects of the same type, because you think they are attractive or interesting"
        ]
      },
      {
        "word": "meanwhile",
        "syllables": "meanwhile",
        "phonetic": "/ˈmiːnwaɪl/",
        "definition": "adverb. 与此同时；在此期间（用于描述两件事同时发生）",
        "example": "Meanwhile, my tongue was busy searching out the hole where the tooth had been.",
        "emoji": "✨",
        "longman": [
          "while something else is happening",
          "in the period of time between two events"
        ]
      },
      {
        "word": "tongue",
        "syllables": "tongue",
        "phonetic": "/tʌŋ/",
        "definition": "noun. 舌头（人体口腔中的器官，用于品尝和说话）",
        "example": "Meanwhile, my tongue was busy searching out the hole where the tooth had been.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "search",
        "syllables": "search",
        "phonetic": "/sɜːtʃ/",
        "definition": "verb. 搜索；寻找（指仔细查找某物或某人）",
        "example": "Meanwhile, my tongue was busy searching out the hole where the tooth had been.",
        "emoji": "✨",
        "longman": [
          "an attempt to find someone or something",
          "a series of actions done by a computer to find information"
        ]
      },
      {
        "word": "worry",
        "syllables": "worry",
        "phonetic": "/ˈwʌri/",
        "definition": "verb. 担心；担忧（指对某事感到不安或焦虑）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "to be anxious or unhappy about someone or something, so that you think about them a lot",
          "to make someone feel anxious about something"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“牙医刚刚拔掉了我的一颗牙。”（主语 + have/has + something + 过去分词）？",
        "options": [
          "The dentist had just pulled out one of my teeth.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The dentist had just pulled out one of my teeth.”（牙医刚刚拔掉了我的一颗牙。），重点掌握句型：主语 + have/has + something + 过去分词。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "My tongue was busy searching out the hole where the tooth had been.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“My tongue was busy searching out the hole where the tooth had been.”（我的舌头正忙着找出拔掉牙齿的那个洞。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或时间段正在进行的动作。"
      },
      {
        "question": "What does the word 'dentist' (/ˈdentɪst/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 牙医"
        ],
        "answerIndex": 2,
        "explanation": "单词 'dentist' 的意思是：noun. 牙医（指治疗牙齿疾病的专业医生）。"
      }
    ],
    "funPrompt": "读完《Did you want to tell me something?》后，试着用自己的话回答课前问题：Why did the writer become very worried?"
  },
  {
    "id": 2049,
    "day": 49,
    "lessonNum": "49",
    "week": 3,
    "track": "nce2",
    "title": "L49: The end of a dream 美梦告终",
    "coverEmoji": "🛏️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 169,
    "intro": "🎯 课前导读问题：How did the dream end?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。 例：He did not wake up until the bed had struck the ground. (直到床撞到地面，他才醒来。) ｜ 【过去进行时 (Past Continuous Tense)】was/were + 动词-ing — 用于描述故事发生的背景，或与一般过去时连用表示'正在...时突然...'。 例：On the third night, a storm blew up. (第三天晚上，刮起了风暴。)\n💬 核心短语：“tired of doing something”（对做某事感到厌倦）；“save up for years”（积蓄多年）；“for the first time”（第一次；首次）",
    "paragraphs": [
      "Tired of sleeping on the floor, a young man in Teheran saved up for years to buy a real bed. For the first time in his life, he became the proud owner of a bed which had springs and a mattress. Because the weather was very hot, he carried the bed on to the roof of his house. He slept very well for the first two nights, but on the third night, a storm blew up.",
      "A gust of wind swept the bed off the roof and sent it crashing into the courtyard below. The young man did not wake up until the bed had struck the ground. Although the bed was smashed to pieces, the man was miraculously unhurt. When he woke up, he was still on the mattress.",
      "Glancing at the bits of wood and metal that lay around him, the man sadly picked up the mattress and carried it into his house. After he had put it on the floor, he promptly went to sleep again."
    ],
    "vocabulary": [
      {
        "word": "tired",
        "syllables": "tired",
        "phonetic": "/ˈtaɪəd/",
        "definition": "adjective. 疲倦的；疲劳的（表示人感到累或困倦的状态）",
        "example": "Tired of sleeping on the floor, a young man in Teheran saved up for years to buy a real bed.",
        "emoji": "✨",
        "longman": [
          "feeling that you want to sleep or rest",
          "familiar and boring"
        ]
      },
      {
        "word": "proud",
        "syllables": "proud",
        "phonetic": "/praʊd/",
        "definition": "adjective. 骄傲的；自豪的（表示对自己或他人的成就感到满意）",
        "example": "For the first time in his life, he became the proud owner of a bed which had springs and a mattress.",
        "emoji": "✨",
        "longman": [
          "feeling pleased about something that you have done or something that you own, or about someone or something you are involved with or related to",
          "thinking that you are more important, skillful etc than you really are – used to show disapproval"
        ]
      },
      {
        "word": "owner",
        "syllables": "owner",
        "phonetic": "/ˈoʊnər/",
        "definition": "noun. 所有者；主人（指某物的拥有者）",
        "example": "For the first time in his life, he became the proud owner of a bed which had springs and a mattress.",
        "emoji": "✨",
        "longman": [
          "someone who owns something",
          "a person or organization that owns something"
        ]
      },
      {
        "word": "spring",
        "syllables": "spring",
        "phonetic": "/sprɪŋ/",
        "definition": "noun. 弹簧（指床等家具中的金属弹簧结构）",
        "example": "For the first time in his life, he became the proud owner of a bed which had springs and a mattress.",
        "emoji": "✨",
        "longman": [
          "the season between winter and summer when leaves and flowers appear",
          "something, usually a twisted piece of metal, that will return to its previous shape after it has been pressed down"
        ]
      },
      {
        "word": "mattress",
        "syllables": "mattress",
        "phonetic": "/ˈmætrəs/",
        "definition": "noun. 床垫（指床上柔软的垫子）",
        "example": "For the first time in his life, he became the proud owner of a bed which had springs and a mattress.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "roof",
        "syllables": "roof",
        "phonetic": "/ruːf/",
        "definition": "noun. 屋顶；房顶（指建筑物的顶部结构）",
        "example": "Because the weather was very hot, he carried the bed on to the roof of his house.",
        "emoji": "✨",
        "longman": [
          "the structure that covers or forms the top of a building, vehicle, tent etc",
          "the top of a passage under the ground"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“直到床撞到地面，他才醒来。”（Not until... (倒装/强调结构)）？",
        "options": [
          "The young man did not wake up until the bed had struck the ground.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The young man did not wake up until the bed had struck the ground.”（直到床撞到地面，他才醒来。），重点掌握句型：Not until... (倒装/强调结构)。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "He did not wake up until the bed had struck the ground.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He did not wake up until the bed had struck the ground.”（直到床撞到地面，他才醒来。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作，常与'by the time'、'before'、'until'等连用。"
      },
      {
        "question": "What does the word 'tired' (/ˈtaɪəd/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adjective. 疲倦的；疲劳的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'tired' 的意思是：adjective. 疲倦的；疲劳的（表示人感到累或困倦的状态）。"
      }
    ],
    "funPrompt": "读完《The end of a dream》后，试着用自己的话回答课前问题：How did the dream end?"
  },
  {
    "id": 2050,
    "day": 50,
    "lessonNum": "50",
    "week": 3,
    "track": "nce2",
    "title": "L50: Taken for a ride 乘车兜风",
    "coverEmoji": "🚌",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 163,
    "intro": "🎯 课前导读问题：Why did the writer not get off the bus at Woodford Green?\n📌 语法与句型重点：【一般过去时 (Simple Past Tense)】主语 + 动词过去式 — 用于叙述过去发生的事情，故事中的叙述大多使用一般过去时。 例：I went on an excursion recently. (我最近去了一次短途旅行。) ｜ 【be going to 表示将来计划】主语 + am/is/are + going to + 动词原形 — 表达明确的计划或意图，We're going back now 表示即将返回的动作。 例：We're going back now. (我们现在要回去了。)\n💬 核心短语：“get off”（下车，指从公共交通工具上下来）；“as far as”（到...为止，表示距离或程度的终点）；“in that case”（既然那样/如果是这样的话，用于基于前面情况做出判断）",
    "paragraphs": [
      "I love travelling in the country, but I don't like losing my way.",
      "I went on an excursion recently, but my trip took me longer than I expected.",
      "'I'm going to Woodford Green,' I said to the conductor as I got on the bus, 'but I don't know where it is.'",
      "'I'll tell you where to get off.' answered the conductor.",
      "I sat in the front of the bus to get a good view of the countryside. After some time, the bus stopped. Looking round, I realized with a shock that I was the only passenger left on the bus.",
      "'You'll have to get off here,' the conductor said. 'This is as far as we go.'",
      "'Is this Woodford Green?' I asked.",
      "'Oh dear,' said the conductor suddenly. 'I forgot to put you off.'",
      "'It doesn't matter,' I said. 'I'll get off here.'",
      "'We're going back now,' said the conductor.",
      "'Well, in that case, I prefer to stay on the bus,' I answered."
    ],
    "vocabulary": [
      {
        "word": "excursion",
        "syllables": "excursion",
        "phonetic": "/ɪkˈskɜːʃən/",
        "definition": "noun. 远足；短途旅行；游览（通常指有组织的一日游或短途旅行）",
        "example": "I went on an excursion recently, but my trip took me longer than I expected.",
        "emoji": "✨",
        "longman": [
          "a short journey arranged so that a group of people can visit a place, especially while they are on holiday",
          "a short journey made for a particular purpose"
        ]
      },
      {
        "word": "conductor",
        "syllables": "conductor",
        "phonetic": "/kənˈdʌktə/",
        "definition": "noun. 售票员；导体（指公共汽车或火车上的售票员）",
        "example": "'I'm going to Woodford Green,' I said to the conductor as I got on the bus, 'but I don't know where it is.'",
        "emoji": "✨",
        "longman": [
          "someone who stands in front of a group of musicians or singers and directs their playing or singing",
          "someone whose job is to collect payments from passengers on a bus"
        ]
      },
      {
        "word": "countryside",
        "syllables": "countryside",
        "phonetic": "/ˈkʌntrisaɪd/",
        "definition": "noun. 乡村；农村（指城镇以外的地区，乡村风景）",
        "example": "I sat in the front of the bus to get a good view of the countryside.",
        "emoji": "✨",
        "longman": [
          "land that is outside cities and towns",
          "an area away from towns and cities, where there are fields, forests etc – used especially when talking about the natural beauty of this kind of area"
        ]
      },
      {
        "word": "passenger",
        "syllables": "passenger",
        "phonetic": "/ˈpæsɪndʒə/",
        "definition": "noun. 乘客；旅客（指乘坐公共交通工具的人）",
        "example": "Looking round, I realized with a shock that I was the only passenger left on the bus.",
        "emoji": "✨",
        "longman": [
          "someone who is traveling in a vehicle, plane, boat etc, but is not driving it or working on it",
          "someone in a group who does not do their share of the group’s work"
        ]
      },
      {
        "word": "shock",
        "syllables": "shock",
        "phonetic": "/ʃɒk/",
        "definition": "noun/verb. 震惊；使震惊（作名词时指惊讶的感觉；作动词指使震惊）",
        "example": "Looking round, I realized with a shock that I was the only passenger left on the bus.",
        "emoji": "✨",
        "longman": [
          "if something that happens is a shock, you did not expect it, and it makes you feel very surprised , and usually upset",
          "the feeling of surprise and disbelief you have when something very unexpected happens, especially something bad or frightening",
          "a medical condition in which someone looks pale and their heart and lungs are not working correctly, usually after a sudden very unpleasant experience"
        ]
      },
      {
        "word": "matter",
        "syllables": "matter",
        "phonetic": "/ˈmætə/",
        "definition": "verb/noun. 重要；要紧；事情（常用于It doesn't matter表示没关系）",
        "example": "'It doesn't matter,' I said.",
        "emoji": "✨",
        "longman": [
          "a subject or situation that you have to think about or deal with",
          "the material that everything in the universe is made of, including solids , liquids , and gases",
          "a substance that consists of waste material, solid material etc"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我要去伍德福德格林。”（I'm going to + 地点）？",
        "options": [
          "I'm going to Woodford Green.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I'm going to Woodford Green.”（我要去伍德福德格林。），重点掌握句型：I'm going to + 地点。"
      },
      {
        "question": "语法要点【一般过去时 (Simple Past Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "I went on an excursion recently.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I went on an excursion recently.”（我最近去了一次短途旅行。）展示了本课重点语法【一般过去时 (Simple Past Tense)】：表示过去发生的动作或存在的状态，通常与过去的时间状语连用。"
      },
      {
        "question": "What does the word 'excursion' (/ɪkˈskɜːʃən/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 远足；短途旅行；游览"
        ],
        "answerIndex": 2,
        "explanation": "单词 'excursion' 的意思是：noun. 远足；短途旅行；游览（通常指有组织的一日游或短途旅行）。"
      }
    ],
    "funPrompt": "读完《Taken for a ride》后，试着用自己的话回答课前问题：Why did the writer not get off the bus at Woodford Green?"
  },
  {
    "id": 2051,
    "day": 51,
    "lessonNum": "51",
    "week": 3,
    "track": "nce2",
    "title": "L51: Reward for virtue 对美德的奖赏",
    "coverEmoji": "⚖️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 163,
    "intro": "🎯 课前导读问题：Why did Hugh's diet not work?\n📌 语法与句型重点：【一般过去时 (Past Simple Tense)】主语 + 动词过去式 — 描述过去发生的具体事件，如故事、经历等。 例：He began his diet a week ago. (他一周前开始节食。) ｜ 【so...that... 结果状语从句】so + 形容词/副词 + that + 从句 — 用来表示程度或结果，强调某种状态或行为导致的结果。 例：Things got so bad recently that he decided to go on a diet. (情况变得如此糟糕，以至于他决定节食。)\n💬 核心短语：“go on a diet”（表示开始节食，控制饮食）；“pay someone a visit”（正式拜访某人）；“as fat as ever”（和以前一样胖）",
    "paragraphs": [
      "My friend, Hugh, has always been fat, but things got so bad recently that he decided to go on a diet. He began his diet a week ago. First of all, he wrote out a long list of all the foods which were forbidden. The list included most of the things Hugh loves: butter, potatoes, rice, beer, milk, chocolate; and sweets.",
      "Yesterday I paid him a visit. I rang the bell and was not surprised to see that Hugh was still as fat as ever. He led me into his room and hurriedly hid a large parcel under his desk. It was obvious that he was very embarrassed.",
      "When I asked him what he was doing, he smiled guiltily and then put the parcel on the desk. He explained that his diet was so strict that he had to reward himself occasionally. Then he showed me the contents of the parcel. It contained five large bars of chocolate and three bags of sweets!"
    ],
    "vocabulary": [
      {
        "word": "diet",
        "syllables": "diet",
        "phonetic": "/ˈdaɪət/",
        "definition": "noun. 饮食；节食（指规定吃的食物，常用go on a diet表示节食）",
        "example": "My friend, Hugh, has always been fat, but things got so bad recently that he decided to go on a diet.",
        "emoji": "✨",
        "longman": [
          "a way of eating in which you only eat certain foods, in order to lose weight , or to improve your health",
          "the kind of food that a person or animal eats each day",
          "an official meeting to discuss political or church matters"
        ]
      },
      {
        "word": "fat",
        "syllables": "fat",
        "phonetic": "/fæt/",
        "definition": "adjective. 肥胖的（形容人体型肥胖，带有主观色彩）",
        "example": "My friend, Hugh, has always been fat, but things got so bad recently that he decided to go on a diet.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "recently",
        "syllables": "recently",
        "phonetic": "/ˈriːsəntli/",
        "definition": "adverb. 最近（用于描述过去不久发生的事情，常与过去时连用）",
        "example": "My friend, Hugh, has always been fat, but things got so bad recently that he decided to go on a diet.",
        "emoji": "✨",
        "longman": [
          "not long ago",
          "not long ago, especially a few days, weeks, or months ago"
        ]
      },
      {
        "word": "forbidden",
        "syllables": "forbidden",
        "phonetic": "/fəˈbɪdn/",
        "definition": "adjective. 被禁止的（forbid的过去分词作形容词，修饰名词）",
        "example": "First of all, he wrote out a long list of all the foods which were forbidden.",
        "emoji": "✨",
        "longman": [
          "not allowed, especially because of an official rule",
          "a forbidden place is one that you are not allowed to go to"
        ]
      },
      {
        "word": "visit",
        "syllables": "visit",
        "phonetic": "/ˈvɪzɪt/",
        "definition": "noun/verb. 拜访；访问（pay someone a visit表示正式拜访某人）",
        "example": "Yesterday I paid him a visit.",
        "emoji": "✨",
        "longman": [
          "to go and spend time in a place or with someone, especially for pleasure or interest",
          "to go to a place as part of your official job, especially to examine it"
        ]
      },
      {
        "word": "obviously",
        "syllables": "obviously",
        "phonetic": "/ˈɒbviəsli/",
        "definition": "adverb. 明显地（修饰形容词或动词，表示显而易见）",
        "example": "",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我的朋友休一直很胖。”（主语 + has/have always been + 形容词）？",
        "options": [
          "My friend, Hugh, has always been fat.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“My friend, Hugh, has always been fat.”（我的朋友休一直很胖。），重点掌握句型：主语 + has/have always been + 形容词。"
      },
      {
        "question": "语法要点【一般过去时 (Past Simple Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "He began his diet a week ago.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He began his diet a week ago.”（他一周前开始节食。）展示了本课重点语法【一般过去时 (Past Simple Tense)】：表示过去发生的动作或存在的状态，常与表示过去的时间状语连用。"
      },
      {
        "question": "What does the word 'diet' (/ˈdaɪət/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 饮食；节食"
        ],
        "answerIndex": 2,
        "explanation": "单词 'diet' 的意思是：noun. 饮食；节食（指规定吃的食物，常用go on a diet表示节食）。"
      }
    ],
    "funPrompt": "读完《Reward for virtue》后，试着用自己的话回答课前问题：Why did Hugh's diet not work?"
  },
  {
    "id": 2052,
    "day": 52,
    "lessonNum": "52",
    "week": 3,
    "track": "nce2",
    "title": "L52: A pretty carpet 漂亮的地毯",
    "coverEmoji": "🏺",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 159,
    "intro": "🎯 课前导读问题：What is the writer's carpet made of?\n📌 语法与句型重点：【现在完成进行时 (Present Perfect Continuous)】主语 + have/has + been + 动词-ing形式 — 强调动作的持续性，常用时间状语有：all morning, all day, for + 时间段, since + 时间点。 例：I have been working hard all morning. (我整个上午一直在努力工作。) ｜ 【to make matters worse】to make matters worse, + 句子 — 用于引出更糟糕的情况，通常前面已经描述了一个不太好的情况。 例：To make matters worse, the room is rather small. (更糟糕的是，房间相当小。)\n💬 核心短语：“in order”（表示整齐有序，井井有条）；“to make matters worse”（更糟糕的是，用来引出使情况更糟的因素）；“at the moment”（此刻；目前，与现在进行时连用）",
    "paragraphs": [
      "We have just moved into a new house and I have been working hard all morning. I have been trying to get my new room in order. This has not been easy because I own over a thousand books. To make matters worse, the room is rather small, so I have temporarily put my books on the floor.",
      "At the moment, they cover every inch of floor space and I actually have to walk on them to get in or out of the room. A short while ago, my sister helped me to carry one of my old bookcases up the stairs. She went into my room and got a big surprise when she saw all those books on the floor. 'This is the prettiest carpet I have ever seen,' she said.",
      "She gazed at it for some time then added, 'You don't need bookcases at all. You can sit here in your spare time and read the carpet!'"
    ],
    "vocabulary": [
      {
        "word": "carpet",
        "syllables": "carpet",
        "phonetic": "/ˈkɑːpɪt/",
        "definition": "noun. 地毯；地毯状覆盖物（指铺在地上的织物，这里幽默地指书堆成的地面）",
        "example": "'This is the prettiest carpet I have ever seen,' she said.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "temporarily",
        "syllables": "temporarily",
        "phonetic": "/ˈtemprərəli/",
        "definition": "adverb. 暂时地；临时地（修饰动词，表示暂时的状态）",
        "example": "To make matters worse, the room is rather small, so I have temporarily put my books on the floor.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "gaze",
        "syllables": "gaze",
        "phonetic": "/ɡeɪz/",
        "definition": "verb. 凝视；注视（指长时间地盯着看，常与at连用）",
        "example": "She gazed at it for some time then added, 'You don't need bookcases at all.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "cover",
        "syllables": "cover",
        "phonetic": "/ˈkʌvər/",
        "definition": "verb. 覆盖；遮盖（表示覆盖某物的表面）",
        "example": "At the moment, they cover every inch of floor space and I actually have to walk on them to get in or out of the room.",
        "emoji": "✨",
        "longman": [
          "to put something over or be over something in order to hide, close, or protect it",
          "if something covers a surface, it forms a layer over it"
        ]
      },
      {
        "word": "spare",
        "syllables": "spare",
        "phonetic": "/speər/",
        "definition": "adjective. 空闲的；多余的（spare time指空闲时间）",
        "example": "You can sit here in your spare time and read the carpet!'",
        "emoji": "✨",
        "longman": [
          "not being used or not needed at the present time",
          "a spare style of writing, painting etc is plain or basic and uses nothing unnecessary",
          "someone who is spare is tall and thin"
        ]
      },
      {
        "word": "own",
        "syllables": "own",
        "phonetic": "/əʊn/",
        "definition": "verb. 拥有；具有（表示所有权，强调个人拥有）",
        "example": "This has not been easy because I own over a thousand books.",
        "emoji": "✨",
        "longman": [
          "used to emphasize that something belongs to or is connected with a particular person or thing and not any other",
          "used to emphasize that someone did or made something without the help or involvement of anyone else",
          "to have something which belongs to you, especially because you have bought it, been given it etc and it is legally yours"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“作家的'地毯'是什么做的？”（What is + 主语 + made of?）？",
        "options": [
          "What is the writer's carpet made of?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“What is the writer's carpet made of?”（作家的'地毯'是什么做的？），重点掌握句型：What is + 主语 + made of?。"
      },
      {
        "question": "语法要点【现在完成进行时 (Present Perfect Continuous)】：下列哪个例句符合本课语法结构（主语 + have/has + been + 动词-ing形式）？",
        "options": [
          "He have go to school tomorrow.",
          "I have been working hard all morning.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I have been working hard all morning.”（我整个上午一直在努力工作。）展示了本课重点语法【现在完成进行时 (Present Perfect Continuous)】：表示动作从过去开始，一直持续到现在，可能还在进行或刚刚结束。常与all morning/all day/just等时间状语连用。。"
      },
      {
        "question": "What does the word 'carpet' (/ˈkɑːpɪt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 地毯；地毯状覆盖物"
        ],
        "answerIndex": 2,
        "explanation": "单词 'carpet' 的意思是：noun. 地毯；地毯状覆盖物（指铺在地上的织物，这里幽默地指书堆成的地面）。"
      }
    ],
    "funPrompt": "读完《A pretty carpet》后，试着用自己的话回答课前问题：What is the writer's carpet made of?"
  },
  {
    "id": 2053,
    "day": 53,
    "lessonNum": "53",
    "week": 3,
    "track": "nce2",
    "title": "L53: Hot snake 触电的蛇",
    "coverEmoji": "🐍",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 160,
    "intro": "🎯 课前导读问题：What caused the fire?\n📌 语法与句型重点：【现在完成时 (Present Perfect Tense)】主语 + have/has + 过去分词 — 用于描述过去发生并已完成，但强调与现在的联系的事件。。 例：Firemen have put out a big forest fire. (消防员已经扑灭了一场大规模的森林火灾。) ｜ 【现在完成进行时 (Present Perfect Continuous)】主语 + have/has + been + 动词-ing形式 — 用于强调动作持续进行了一定时间。。 例：They have been trying to find out how the fire began. (他们一直在努力查明火灾发生的原因。)\n💬 核心短语：“put out”（扑灭（火灾））；“find out”（查明；发现真相）；“carelessly throw away”（随意扔掉）",
    "paragraphs": [
      "At last firemen have put out a big forest fire in California. Since then, they have been trying to find out how the fire began. Forest fires are often caused by broken glass or by cigarette ends which people carelessly throw away. Yesterday the firemen examined the ground carefully, but were not able to find any broken glass.",
      "They were also quite sure that a cigarette end did not start the fire. This morning, however, a firemen accidentally discovered the cause. He noticed the remains of a snake which was wound round the electric wires of a 16,000-volt power line. In this way, he was able to solve the mystery.",
      "The explanation was simple but very unusual. A bird had snatched up the snake from the ground and then dropped it on to the wires. The snake then wound itself round the wires. When it did so, it sent sparks down to the ground and these immediately started a fire."
    ],
    "vocabulary": [
      {
        "word": "fireman",
        "syllables": "fireman",
        "phonetic": "/ˈfaɪəmən/",
        "definition": "noun. 消防队员（复数形式为firemen，指男性消防员，女性为firefighter）",
        "example": "",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "forest",
        "syllables": "forest",
        "phonetic": "/ˈfɒrɪst/",
        "definition": "noun. 森林（常用短语in the forest, forest fire(森林火灾)）",
        "example": "At last firemen have put out a big forest fire in California.",
        "emoji": "✨",
        "longman": [
          "a large area of land that is covered with trees",
          "a very large area of land with a lot of trees growing closely together"
        ]
      },
      {
        "word": "cause",
        "syllables": "cause",
        "phonetic": "/kɔːz/",
        "definition": "verb. 导致；引起（cause + n. 表示导致某事发生）；noun. 原因（the cause of... 表示...的原因）",
        "example": "Forest fires are often caused by broken glass or by cigarette ends which people carelessly throw away.",
        "emoji": "✨",
        "longman": [
          "to make something happen, especially something bad",
          "to make something happen, especially something bad",
          "to cause someone to do something, or cause something to happen. Make"
        ]
      },
      {
        "word": "examine",
        "syllables": "examine",
        "phonetic": "/ɪɡˈzæmɪn/",
        "definition": "verb. 检查；仔细观察（examine + n. 表示对某物进行仔细检查）",
        "example": "Yesterday the firemen examined the ground carefully, but were not able to find any broken glass.",
        "emoji": "✨",
        "longman": [
          "to look at something carefully and thoroughly because you want to find out more about it",
          "if a doctor examines you, they look at your body to check that you are healthy"
        ]
      },
      {
        "word": "accidentally",
        "syllables": "accidentally",
        "phonetic": "/ˌæksɪˈdentəli/",
        "definition": "adverb. 偶然地；意外地（修饰动词，表示意外地做某事）",
        "example": "This morning, however, a firemen accidentally discovered the cause.",
        "emoji": "✨",
        "longman": [
          "in a way that was not planned or intended",
          "if you do something by mistake, you intend to do one thing, but you accidentally do something else instead"
        ]
      },
      {
        "word": "remain",
        "syllables": "remain",
        "phonetic": "/rɪˈmeɪn/",
        "definition": "noun. 遗骸；残余物（常用复数remains，表示动植物的残骸或遗迹）；verb. 保持；留下（remain + adj./n. 表示保持某种状态）",
        "example": "He noticed the remains of a snake which was wound round the electric wires of a 16,000-volt power line.",
        "emoji": "✨",
        "longman": [
          "to continue to be in the same state or condition",
          "to stay in the same place without moving away"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“从那以后，他们一直试图查明火灾发生的原因。”（Since + 时间点, 主语 + have/has + 过去分词）？",
        "options": [
          "Since then, they have been trying to find out how the fire began.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Since then, they have been trying to find out how the fire began.”（从那以后，他们一直试图查明火灾发生的原因。），重点掌握句型：Since + 时间点, 主语 + have/has + 过去分词。"
      },
      {
        "question": "语法要点【现在完成时 (Present Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + have/has + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "Firemen have put out a big forest fire.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Firemen have put out a big forest fire.”（消防员已经扑灭了一场大规模的森林火灾。）展示了本课重点语法【现在完成时 (Present Perfect Tense)】：表示过去发生的事件对现在有影响，或从过去持续到现在的动作。常与already, yet, just, since, for等时间副词连用。。"
      },
      {
        "question": "What does the word 'fireman' (/ˈfaɪəmən/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 消防队员"
        ],
        "answerIndex": 2,
        "explanation": "单词 'fireman' 的意思是：noun. 消防队员（复数形式为firemen，指男性消防员，女性为firefighter）。"
      }
    ],
    "funPrompt": "读完《Hot snake》后，试着用自己的话回答课前问题：What caused the fire?"
  },
  {
    "id": 2054,
    "day": 54,
    "lessonNum": "54",
    "week": 3,
    "track": "nce2",
    "title": "L54: Sticky fingers 粘糊的手指",
    "coverEmoji": "🥧",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 169,
    "intro": "🎯 课前导读问题：What two interruptions did the writer have?\n📌 语法与句型重点：【过去完成时与no sooner...than连用】主语 + had no sooner + 过去分词 + than + 主语 + 过去式动词 — 用于描述两个紧接发生的动作，强调时间上的紧密联系。相当于hardly...when...的结构。。 例：I had no sooner got back to the kitchen than the doorbell rang. (我刚回到厨房，门铃就响了。) ｜ 【否定最高级结构】Nothing could have been more + 形容词 — 用于表达某事物是某种状态中最极端的，强调程度很深。比直接用最高级更有强调效果。。 例：Nothing could have been more annoying. (没有比这更烦人的了。)\n💬 核心短语：“make meat pies”（制作肉馅饼，指做一种含肉的烘焙食品）；“pick up the receiver”（拿起电话听筒，指接电话的动作）；“ring back”（回电话，稍后再打来）",
    "paragraphs": [
      "After breakfast, I sent the children to school and then I went to the shops. It was still early when I returned home. The children were at school, my husband was at work and the house was quiet. So I decided to make some meat pies.",
      "In a short time I was busy mixing butter and flour and my hands were soon covered with sticky pastry. At exactly that moment, the telephone rang. Nothing could have been more annoying. I picked up the receiver between two sticky fingers and was dismayed when I recognized the voice of Helen Bates.",
      "It took me ten minutes to persuade her to ring back later. At last I hung up the receiver. What a mess! There was pastry on my fingers, on the telephone, and on the doorknobs.",
      "I had no sooner got back to the kitchen than the doorbell rang loud enough to wake the dead. This time it was the postman and he wanted me to sign for a registered letter!"
    ],
    "vocabulary": [
      {
        "word": "interruption",
        "syllables": "interruption",
        "phonetic": "/ˌɪntəˈrʌpʃən/",
        "definition": "名词. 打扰；中断；插嘴（指打扰或中断某人正在做的事情）",
        "example": "",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "pastry",
        "syllables": "pastry",
        "phonetic": "/ˈpeɪstri/",
        "definition": "名词. 油酥面团；糕点（指用于制作糕点的面团，通常含有黄油）",
        "example": "In a short time I was busy mixing butter and flour and my hands were soon covered with sticky pastry.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "annoying",
        "syllables": "annoying",
        "phonetic": "/əˈnɔɪɪŋ/",
        "definition": "形容词. 恼人的；讨厌的（形容让人感到烦恼或生气的事物）",
        "example": "Nothing could have been more annoying.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "receiver",
        "syllables": "receiver",
        "phonetic": "/rɪˈsiːvə/",
        "definition": "名词. 听筒；接收者（电话的听筒部分）",
        "example": "I picked up the receiver between two sticky fingers and was dismayed when I recognized the voice of Helen Bates.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "dismay",
        "syllables": "dismay",
        "phonetic": "/dɪsˈmeɪ/",
        "definition": "名词/动词. 沮丧；使沮丧（表示失望或担忧的情绪）",
        "example": "I picked up the receiver between two sticky fingers and was dismayed when I recognized the voice of Helen Bates.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "persuade",
        "syllables": "persuade",
        "phonetic": "/pəˈsweɪd/",
        "definition": "动词. 说服；劝使（通过说理使某人做某事或相信某事）",
        "example": "It took me ten minutes to persuade her to ring back later.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我刚回到厨房，门铃就响了。”（I had no sooner + 过去分词 + than + 主语 + 过去式动词）？",
        "options": [
          "I had no sooner got back to the kitchen than the doorbell rang.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I had no sooner got back to the kitchen than the doorbell rang.”（我刚回到厨房，门铃就响了。），重点掌握句型：I had no sooner + 过去分词 + than + 主语 + 过去式动词。"
      },
      {
        "question": "语法要点【过去完成时与no sooner...than连用】：下列哪个例句符合本课语法结构（主语 + had no sooner + 过去分词 + than + 主语 + 过去式动词）？",
        "options": [
          "He have go to school tomorrow.",
          "I had no sooner got back to the kitchen than the doorbell rang.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I had no sooner got back to the kitchen than the doorbell rang.”（我刚回到厨房，门铃就响了。）展示了本课重点语法【过去完成时与no sooner...than连用】：no sooner...than表示'一...就...'，no sooner后面用过去完成时，than后面用一般过去时，表示前一动作刚刚结束，后一动作就发生了。。"
      },
      {
        "question": "What does the word 'interruption' (/ˌɪntəˈrʌpʃən/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "名词. 打扰；中断；插嘴"
        ],
        "answerIndex": 2,
        "explanation": "单词 'interruption' 的意思是：名词. 打扰；中断；插嘴（指打扰或中断某人正在做的事情）。"
      }
    ],
    "funPrompt": "读完《Sticky fingers》后，试着用自己的话回答课前问题：What two interruptions did the writer have?"
  },
  {
    "id": 2055,
    "day": 55,
    "lessonNum": "55",
    "week": 3,
    "track": "nce2",
    "title": "L55: Not a gold mine 并非金矿",
    "coverEmoji": "⛏️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 169,
    "intro": "🎯 课前导读问题：What did the team find?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去正在进行的动作，常与when、while等连用。 例：The leader was examining the soil near the entrance to the cave when the machine showed that there was gold. (队长正在检查洞口附近的土壤时，机器显示地下有黄金。) ｜ 【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述两个过去的动作中较早发生的动作，或某事在过去的某个时间点之前已经完成。 例：The pirates would often bury gold in the cave and then fail to collect it. (海盗们经常把金子埋在洞穴里，然后却忘记取走。)\n💬 核心短语：“come true”（表示梦想、希望等成为现实）；“in spite of”（表示尽管、虽然，后接名词或动名词）；“dig a hole”（指挖掘一个洞）",
    "paragraphs": [
      "Dreams of finding lost treasure almost came true recently. A new machine called 'The Revealer' has been invented and it has been used to detect gold which has been buried in the ground. The machine was used in a cave near the seashore where -- it is said -- pirates used to hide gold. The pirates would often bury gold in the cave and then fail to collect it.",
      "Armed with the new machine, a search party went into the cave hoping to find buried treasure. The leader of the party was examining the soil near the entrance to the cave when the machine showed that there was gold under the ground. Very excited, the party dug a hole two feel deep. They finally found a small gold coin which was almost worthless.",
      "The party then searched the whole cave thoroughly but did not find anything except an empty tin trunk. In spite of this, many people are confident that 'The Revealer' may reveal something of value fairly soon."
    ],
    "vocabulary": [
      {
        "word": "treasure",
        "syllables": "treasure",
        "phonetic": "/ˈtreʒər/",
        "definition": "noun. 宝藏，财富（指有价值的物品或财富，常与lost、buried连用）",
        "example": "Dreams of finding lost treasure almost came true recently.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "revealer",
        "syllables": "revealer",
        "phonetic": "/rɪˈviːlər/",
        "definition": "noun. 探测器，揭示物（指用来揭示或探测某物的机器或装置）",
        "example": "A new machine called 'The Revealer' has been invented and it has been used to detect gold which has been buried in the ground.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "detect",
        "syllables": "detect",
        "phonetic": "/dɪˈtekt/",
        "definition": "verb. 探测，发现（表示用仪器或感官发现或查明某事物）",
        "example": "A new machine called 'The Revealer' has been invented and it has been used to detect gold which has been buried in the ground.",
        "emoji": "✨",
        "longman": [
          "to notice or discover something, especially something that is not easy to see, hear etc"
        ]
      },
      {
        "word": "bury",
        "syllables": "bury",
        "phonetic": "/ˈberi/",
        "definition": "verb. 埋藏，埋葬（指将东西藏在地下或其他物体下面）",
        "example": "The pirates would often bury gold in the cave and then fail to collect it.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "pirate",
        "syllables": "pirate",
        "phonetic": "/ˈpaɪrət/",
        "definition": "noun. 海盗（指在海上抢劫的人）",
        "example": "The machine was used in a cave near the seashore where -- it is said -- pirates used to hide gold.",
        "emoji": "✨",
        "longman": [
          "someone who sails on the seas, attacking other boats and stealing things from them",
          "someone who dishonestly copies and sells another person’s work"
        ]
      },
      {
        "word": "examine",
        "syllables": "examine",
        "phonetic": "/ɪɡˈzæmɪn/",
        "definition": "verb. 检查，审查（指仔细查看或调查某事物）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "to look at something carefully and thoroughly because you want to find out more about it",
          "if a doctor examines you, they look at your body to check that you are healthy"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“一种名为'探测仪'的新机器被发明了。”（S + has/have been + 过去分词）？",
        "options": [
          "A new machine called 'The Revealer' has been invented.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“A new machine called 'The Revealer' has been invented.”（一种名为'探测仪'的新机器被发明了。），重点掌握句型：S + has/have been + 过去分词。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "The leader was examining the soil near the entrance to the cave when the machine showed that there was gold.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The leader was examining the soil near the entrance to the cave when the machine showed that there was gold.”（队长正在检查洞口附近的土壤时，机器显示地下有黄金。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：过去进行时表示在过去某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'treasure' (/ˈtreʒər/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 宝藏，财富"
        ],
        "answerIndex": 2,
        "explanation": "单词 'treasure' 的意思是：noun. 宝藏，财富（指有价值的物品或财富，常与lost、buried连用）。"
      }
    ],
    "funPrompt": "读完《Not a gold mine》后，试着用自己的话回答课前问题：What did the team find?"
  },
  {
    "id": 2056,
    "day": 56,
    "lessonNum": "56",
    "week": 3,
    "track": "nce2",
    "title": "L56: Faster than sound! 比声音还快！",
    "coverEmoji": "🏎️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 163,
    "intro": "🎯 课前导读问题：How fast did the winning car go?\n📌 语法与句型重点：【一般过去时 (Past Simple Tense)】主语 + 动词过去式 — 叙述过去的事件，故事背景等。 例：A lot of cars entered for this race last year. (去年很多汽车报名参加了比赛。) ｜ 【形容词最高级 (Superlative Adjective)】the + 最高级 + (in/of短语) — 用于比较多个事物时，指出最...的一个。 例：One of the most handsome cars was a Rolls-Royce Silver Ghost. (最漂亮的汽车之一是一辆劳斯莱斯银魅。)\n💬 核心短语：“a great deal of”（大量的（后接不可数名词））；“take part in”（参加；参与（活动或比赛））；“break down”（（机器或车辆）出故障；抛锚）",
    "paragraphs": [
      "Once a year, a race is held for old cars. A lot of cars entered for this race last year and there was a great deal of excitement just before it began. One of the most handsome cars was a Rolls-Royce Silver Ghost. The most unusual car was a Benz which had only three wheels.",
      "Built in 1885, it was the oldest car taking part. After a great many loud explosions, the race began. Many of the cars broke down on the course and some drivers spent more time under their cars than in them! A few cars, however, completed the race.",
      "The winning car reached a speed of forty miles an hour -- much faster than any of its rivals. It sped downhill at the end of the race and its driver had a lot of trouble trying to stop it. The race gave everyone a great deal of pleasure. It was very different from modern car races but no less exciting."
    ],
    "vocabulary": [
      {
        "word": "race",
        "syllables": "race",
        "phonetic": "/reɪs/",
        "definition": "noun. 比赛；竞赛（指速度竞赛，如汽车比赛、赛马等）",
        "example": "Once a year, a race is held for old cars.",
        "emoji": "✨",
        "longman": [
          "a competition in which people or animals compete to run, drive etc fastest and finish first",
          "one of the main groups that humans can be divided into according to the color of their skin and other physical features",
          "a group of people who are similar in some way"
        ]
      },
      {
        "word": "excitement",
        "syllables": "excitement",
        "phonetic": "/ɪkˈsaɪtmənt/",
        "definition": "noun. 兴奋；激动（指对某事的兴奋或激动情绪）",
        "example": "A lot of cars entered for this race last year and there was a great deal of excitement just before it began.",
        "emoji": "✨",
        "longman": [
          "the feeling of being excited",
          "an exciting event or situation"
        ]
      },
      {
        "word": "handsome",
        "syllables": "handsome",
        "phonetic": "/ˈhænsəm/",
        "definition": "adj. 漂亮的；美观的（形容物品外观时指美观大方，也可形容人英俊）",
        "example": "One of the most handsome cars was a Rolls-Royce Silver Ghost.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "unusual",
        "syllables": "unusual",
        "phonetic": "/ʌnˈjuːʒuəl/",
        "definition": "adj. 不寻常的；独特的（指与众不同的、罕见的）",
        "example": "The most unusual car was a Benz which had only three wheels.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "wheel",
        "syllables": "wheel",
        "phonetic": "/wiːl/",
        "definition": "noun. 轮子；方向盘（车辆的轮子或操纵方向的轮子）",
        "example": "The most unusual car was a Benz which had only three wheels.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "explosion",
        "syllables": "explosion",
        "phonetic": "/ɪkˈspləʊʒn/",
        "definition": "noun. 爆炸；爆炸声（指猛然爆发的声响或物理现象）",
        "example": "After a great many loud explosions, the race began.",
        "emoji": "✨",
        "longman": [
          "a loud sound and the energy produced by something such as a bomb bursting into small pieces",
          "a process in which something such as a bomb is deliberately made to explode"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“每年举行一次老式汽车比赛。”（Once a year, ...）？",
        "options": [
          "Once a year, a race is held for old cars.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Once a year, a race is held for old cars.”（每年举行一次老式汽车比赛。），重点掌握句型：Once a year, ...。"
      },
      {
        "question": "语法要点【一般过去时 (Past Simple Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "A lot of cars entered for this race last year.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“A lot of cars entered for this race last year.”（去年很多汽车报名参加了比赛。）展示了本课重点语法【一般过去时 (Past Simple Tense)】：描述过去发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'race' (/reɪs/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 比赛；竞赛"
        ],
        "answerIndex": 2,
        "explanation": "单词 'race' 的意思是：noun. 比赛；竞赛（指速度竞赛，如汽车比赛、赛马等）。"
      }
    ],
    "funPrompt": "读完《Faster than sound!》后，试着用自己的话回答课前问题：How fast did the winning car go?"
  },
  {
    "id": 2057,
    "day": 57,
    "lessonNum": "57",
    "week": 3,
    "track": "nce2",
    "title": "L57: Can I help you, madam? 您要买什么，夫人？",
    "coverEmoji": "👖",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 175,
    "intro": "🎯 课前导读问题：Did the woman get what she wanted?\n📌 语法与句型重点：【一般过去时 (Past Simple Tense)】主语 + 动词过去式 + 其他 — 用于叙述过去发生的事情，如本课讲述女人去商店的故事。 例：She stood at the window of an expensive shop. (她站在一家高档商店的橱窗前。) ｜ 【让步状语从句 (Though/Although Clause)】Though/Although + 主语 + 动词... + 主句 — 用于表达两个相反的事实，though位于句首时可用逗号与主句隔开。 例：Though she hesitated for a moment, she finally went in. (虽然她犹豫了一会儿，但最后还是进去了。)\n💬 核心短语：“in jeans”（穿着牛仔裤，in+衣物表示穿着状态）；“hesitate for a moment”（犹豫了一会儿）；“walk out of”（走出，离开）",
    "paragraphs": [
      "A woman in jeans stood at the window of an expensive shop. Though she hesitated for a moment, she finally went in and asked to see a dress that was in the window. The assistant who served her did not like the way she was dressed. Glancing at her scornfully, he told her that the dress was sold.",
      "The woman walked out of the shop angrily and decided to punish the assistant next day. She returned to the shop the following morning dressed in a fur coat, with a handbag in one hand and a long umbrella in the other. After seeking out the rude assistant, she asked for the same dress. Not realizing who she was, the assistant was eager to serve her this time.",
      "With great difficulty, he climbed into the shop window to get the dress. As soon as she saw it, the woman said she did not like it. She enjoyed herself making the assistant bring almost everything in the window before finally buying the dress she had first asked for."
    ],
    "vocabulary": [
      {
        "word": "jeans",
        "syllables": "jeans",
        "phonetic": "/dʒiːnz/",
        "definition": "noun. 牛仔裤（复数形式，表示一种下装）",
        "example": "A woman in jeans stood at the window of an expensive shop.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "hesitate",
        "syllables": "hesitate",
        "phonetic": "/ˈhezɪteɪt/",
        "definition": "verb. 犹豫，踌躇（常与for a moment搭配使用）",
        "example": "Though she hesitated for a moment, she finally went in and asked to see a dress that was in the window.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "expensive",
        "syllables": "expensive",
        "phonetic": "/ɪkˈspensɪv/",
        "definition": "adj. 昂贵的，价格高的（反义词为cheap）",
        "example": "A woman in jeans stood at the window of an expensive shop.",
        "emoji": "✨",
        "longman": [
          "costing a lot of money",
          "costing a lot of money. You use high"
        ]
      },
      {
        "word": "assistant",
        "syllables": "assistant",
        "phonetic": "/əˈsɪstənt/",
        "definition": "noun. 店员，助理（指商店里提供服务的人）",
        "example": "The assistant who served her did not like the way she was dressed.",
        "emoji": "✨",
        "longman": [
          "someone who helps someone else in their work, especially by doing the less important jobs",
          "a shop assistant"
        ]
      },
      {
        "word": "scornfully",
        "syllables": "scornfully",
        "phonetic": "/ˈskɔːnfəli/",
        "definition": "adv. 轻蔑地，鄙视地（由形容词scornful变化而来）",
        "example": "Glancing at her scornfully, he told her that the dress was sold.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "punish",
        "syllables": "punish",
        "phonetic": "/ˈpʌnɪʃ/",
        "definition": "verb. 惩罚，处罚（常用于对做错事的人进行处罚）",
        "example": "The woman walked out of the shop angrily and decided to punish the assistant next day.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“一个穿着牛仔裤的女人站在一家高档商店的橱窗前。”（A woman/man in + 衣物 stood at...）？",
        "options": [
          "A woman in jeans stood at the window of an expensive shop.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“A woman in jeans stood at the window of an expensive shop.”（一个穿着牛仔裤的女人站在一家高档商店的橱窗前。），重点掌握句型：A woman/man in + 衣物 stood at...。"
      },
      {
        "question": "语法要点【一般过去时 (Past Simple Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式 + 其他）？",
        "options": [
          "He have go to school tomorrow.",
          "She stood at the window of an expensive shop.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“She stood at the window of an expensive shop.”（她站在一家高档商店的橱窗前。）展示了本课重点语法【一般过去时 (Past Simple Tense)】：表示过去发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'jeans' (/dʒiːnz/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 牛仔裤"
        ],
        "answerIndex": 2,
        "explanation": "单词 'jeans' 的意思是：noun. 牛仔裤（复数形式，表示一种下装）。"
      }
    ],
    "funPrompt": "读完《Can I help you, madam?》后，试着用自己的话回答课前问题：Did the woman get what she wanted?"
  },
  {
    "id": 2058,
    "day": 58,
    "lessonNum": "58",
    "week": 3,
    "track": "nce2",
    "title": "L58: A blessing in disguise? 是因祸得福吗？",
    "coverEmoji": "🌳",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "5 mins",
    "wordCount": 181,
    "intro": "🎯 课前导读问题：Why does the vicar refuse to cut down the tree?\n📌 语法与句型重点：【被动语态 (Passive Voice) - 现在完成时被动语态】have/has + been + 过去分词 — 当动作的承受者是中心话题,而执行者不重要或未知时使用。课文中的 have been asked, has been refused, have been coming 等都是现在完成进行时的主动语态,表示动作持续进行。。 例：The vicar has been asked to have the tree cut down. (牧师被要求把树砍掉。) ｜ 【It is said that... / be said to 结构】It is said that + 主语 + 谓语 / 主语 + is/are said to + 动词原形/进行时/完成时 — 当说话者不是信息的直接来源,而是转述他人的话或传闻时使用。。 例：The tiny village of Frinley is said to possess a 'cursed tree'. (据说弗里恩利这个小村庄拥有一棵'被诅咒的树'。)\n💬 核心短语：“be said to”（据说...，用于表达传闻）；“in recent years”（近年来,用于谈论过去几年发生的事）；“have bad luck”（倒霉,遇到不好的事情）",
    "paragraphs": [
      "The tiny village of Frinley is said to possess a 'cursed tree'. Because the tree was mentioned in a newspaper, the number of visitors to Frinley has now increased. The tree was planted near the church fifty years ago, but it is only in recent years that it has gained an evil reputation. It is said that if anyone touches the tree, he will have bad luck; if he picks a leaf, he will die.",
      "Many villagers believe that the tree has already claimed a number of victims. The vicar has been asked to have the tree cut down, but so far he has refused. He has pointed out that the tree cut down, but so far he has refused. He has pointed out that the tree is a useful source of income, as tourists have been coming from all parts of the country to see it.",
      "In spite of all that has been said, the tourists have been picking leaves and cutting their names on the tree-trunk. So far, not one of them has been struck down by sudden death!"
    ],
    "vocabulary": [
      {
        "word": "vicar",
        "syllables": "vicar",
        "phonetic": "/ˈvɪkə/",
        "definition": "noun. 牧师（指英国国教的教区牧师）",
        "example": "The vicar has been asked to have the tree cut down, but so far he has refused.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "cursed",
        "syllables": "cursed",
        "phonetic": "/kɜːrst/",
        "definition": "adj. 被诅咒的（由名词 curse 变化而来,表示受到诅咒的）",
        "example": "The tiny village of Frinley is said to possess a 'cursed tree'.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "possess",
        "syllables": "possess",
        "phonetic": "/pəˈzes/",
        "definition": "verb. 拥有,具有（正式用语,表示拥有某种东西或特质）",
        "example": "The tiny village of Frinley is said to possess a 'cursed tree'.",
        "emoji": "✨",
        "longman": [
          "to have a particular quality or ability",
          "to have or own something",
          "if a feeling possesses you, you suddenly feel it very strongly and it affects your behavior"
        ]
      },
      {
        "word": "visitor",
        "syllables": "visitor",
        "phonetic": "/ˈvɪzɪtə/",
        "definition": "noun. 来访者,游客（指来访或参观的人,来自 visit）",
        "example": "Because the tree was mentioned in a newspaper, the number of visitors to Frinley has now increased.",
        "emoji": "✨",
        "longman": [
          "someone who comes to visit a place or a person"
        ]
      },
      {
        "word": "increase",
        "syllables": "increase",
        "phonetic": "/ɪnˈkriːs/",
        "definition": "verb/noun. 增加,增长（可用作动词或名词,表示数量或规模的增长）",
        "example": "Because the tree was mentioned in a newspaper, the number of visitors to Frinley has now increased.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "reputation",
        "syllables": "reputation",
        "phonetic": "/ˌrepjuˈteɪʃən/",
        "definition": "noun. 名声,名誉（指他人对某人或某事的看法和评价）",
        "example": "The tree was planted near the church fifty years ago, but it is only in recent years that it has gained an evil reputation.",
        "emoji": "✨",
        "longman": [
          "the opinion that people have about someone or something because of what has happened in the past",
          "the opinion that people have about a person, organization etc because of what has happened in the past"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“据说如果有人碰了树,他就会倒霉。”（It is said that + 主语 + 谓语）？",
        "options": [
          "It is said that if anyone touches the tree, he will have bad luck.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“It is said that if anyone touches the tree, he will have bad luck.”（据说如果有人碰了树,他就会倒霉。），重点掌握句型：It is said that + 主语 + 谓语。"
      },
      {
        "question": "语法要点【被动语态 (Passive Voice) - 现在完成时被动语态】：下列哪个例句符合本课语法结构（have/has + been + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "The vicar has been asked to have the tree cut down.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The vicar has been asked to have the tree cut down.”（牧师被要求把树砍掉。）展示了本课重点语法【被动语态 (Passive Voice) - 现在完成时被动语态】：现在完成时的被动语态,表示一个动作在过去已经开始,持续到现在,并对现在造成影响,主语是动作的承受者。。"
      },
      {
        "question": "What does the word 'vicar' (/ˈvɪkə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 牧师"
        ],
        "answerIndex": 2,
        "explanation": "单词 'vicar' 的意思是：noun. 牧师（指英国国教的教区牧师）。"
      }
    ],
    "funPrompt": "读完《A blessing in disguise?》后，试着用自己的话回答课前问题：Why does the vicar refuse to cut down the tree?"
  },
  {
    "id": 2059,
    "day": 59,
    "lessonNum": "59",
    "week": 3,
    "track": "nce2",
    "title": "L59: In or out? 进来还是出去？",
    "coverEmoji": "🐕",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 159,
    "intro": "🎯 课前导读问题：Why did Rex run away?\n📌 语法与句型重点：【used to 表示过去的习惯】主语 + used to + 动词原形 — 用于描述过去的习惯性行为，强调过去的常态与现在的对比。。 例：Our dog, Rex, used to sit outside our front gate and bark. (我们的狗Rex过去常常坐在前门外叫。) ｜ 【as soon as 引导的时间状语从句】as soon as + 主语 + 过去式 / 现在时, 主句 — 用于强调两件事几乎同时或紧接着发生。。 例：As soon as he opens the gate from the outside, he comes into the garden and waits until the gate shuts. (他一从外面打开门，就走进花园，等门关上。)\n💬 核心短语：“every time”（作时间连词，意为“每次”。用于描述每一次发生的行为或事件。）；“as soon as”（作时间连词，意为“一……就……”。强调两件事几乎立即发生。）；“used to”（用于表示过去经常做但现在不再做的动作或状态。结构：主语 + used to + 动词原形。）",
    "paragraphs": [
      "Our dog, Rex, used to sit outside our front gate and dark. Every time he wanted to come into the garden he would bark until someone opened the gate. As the neighbours complained of the noise, my husband spent weeks training him to press his paw on the latch to let himself in. Rex soon became an expert at opening the gate.",
      "However, when I was going out shopping last week, I noticed him in the garden near the gate. This time he was barking so that someone would let him out! Since then, he has developed another bad habit. As soon as he opens the gate from the outside, he comes into the garden and waits until the gate shuts.",
      "Then he sits and barks until someone lets him out. After this he immediately lets himself in and begins barking again. Yesterday my husband removed the gate and Rex got so annoyed we have not seen him since."
    ],
    "vocabulary": [
      {
        "word": "bark",
        "syllables": "bark",
        "phonetic": "/bɑːrk/",
        "definition": "verb. 狗叫；吠（用作动词时表示动物（尤其是狗）发出叫声；也可作名词指这种叫声。）；noun. 叫声；吠声（指动物发出的叫声，如狗的吠声。）",
        "example": "Every time he wanted to come into the garden he would bark until someone opened the gate.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "gate",
        "syllables": "gate",
        "phonetic": "/ɡeɪt/",
        "definition": "noun. 大门；栅栏门（指围栏、围墙或入口处的可开启的门。）",
        "example": "Our dog, Rex, used to sit outside our front gate and dark.",
        "emoji": "✨",
        "longman": [
          "the part of a fence or outside wall that you can open and close so that you can enter or leave a place",
          "the place where you leave an airport building to get on a plane"
        ]
      },
      {
        "word": "garden",
        "syllables": "garden",
        "phonetic": "/ˈɡɑːrdən/",
        "definition": "noun. 花园；庭院（指房屋周围种植花草或蔬菜的区域，也可作后院。）",
        "example": "Every time he wanted to come into the garden he would bark until someone opened the gate.",
        "emoji": "✨",
        "longman": [
          "the area of land next to a house, where there are flowers, grass, and other plants, and often a place for people to sit",
          "a part of the area next to a house, which has plants and flowers in it"
        ]
      },
      {
        "word": "neighbour",
        "syllables": "neighbour",
        "phonetic": "/ˈneɪbər/",
        "definition": "noun. 邻居（指居住在附近的人。）",
        "example": "As the neighbours complained of the noise, my husband spent weeks training him to press his paw on the latch to let himself in.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "complain",
        "syllables": "complain",
        "phonetic": "/kəmˈpleɪn/",
        "definition": "verb. 抱怨；投诉（表示对不满意的事情表达不满或提出意见。）",
        "example": "As the neighbours complained of the noise, my husband spent weeks training him to press his paw on the latch to let himself in.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "train",
        "syllables": "train",
        "phonetic": "/treɪn/",
        "definition": "verb. 训练；培训（通过反复练习使动物或人学会某种技能或行为。）",
        "example": "As the neighbours complained of the noise, my husband spent weeks training him to press his paw on the latch to let himself in.",
        "emoji": "✨",
        "longman": [
          "a set of several carriages that are connected to each other and pulled along a railway line by an engine",
          "a long line of moving people, animals , or vehicles",
          "a part of a long dress that spreads out over the ground behind the person wearing it"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“每次他想进花园时，他都会叫到有人打开门为止。”（Every time + subject + past simple + ...）？",
        "options": [
          "Every time he wanted to come into the garden he would bark until someone opened the gate.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Every time he wanted to come into the garden he would bark until someone opened the gate.”（每次他想进花园时，他都会叫到有人打开门为止。），重点掌握句型：Every time + subject + past simple + ...。"
      },
      {
        "question": "语法要点【used to 表示过去的习惯】：下列哪个例句符合本课语法结构（主语 + used to + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "Our dog, Rex, used to sit outside our front gate and bark.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Our dog, Rex, used to sit outside our front gate and bark.”（我们的狗Rex过去常常坐在前门外叫。）展示了本课重点语法【used to 表示过去的习惯】：used to 表示过去经常做但现在已经不再发生的动作或状态。。"
      },
      {
        "question": "What does the word 'bark' (/bɑːrk/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "verb. 狗叫；吠"
        ],
        "answerIndex": 2,
        "explanation": "单词 'bark' 的意思是：verb. 狗叫；吠（用作动词时表示动物（尤其是狗）发出叫声；也可作名词指这种叫声。）。"
      }
    ],
    "funPrompt": "读完《In or out?》后，试着用自己的话回答课前问题：Why did Rex run away?"
  },
  {
    "id": 2060,
    "day": 60,
    "lessonNum": "60",
    "week": 3,
    "track": "nce2",
    "title": "L60: The future 卜算未来",
    "coverEmoji": "🔮",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 163,
    "intro": "🎯 课前导读问题：Does what Madam Bellinsky said come true?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。 例：After I had given her some money, she looked into a crystal ball. (我给她一些钱之后，她看向水晶球。) ｜ 【be going to 表示意图 (Future Intention)】主语 + be going to + 动词原形 — 用于表达主语已经决定要做的事情，带有计划性。 例：She intends to stay for a few days. (她打算待几天。)\n💬 核心短语：“decide to”（决定做某事）；“look into”（向...里面看；调查）；“as soon as”（一...就...）",
    "paragraphs": [
      "At a village fair, I decided to visit a fortune-teller called Madam Bellinsky. I went into her tent and she told me to sit down. After I had given her some money, she looked into a crystal ball and said: 'A relation of yours is coming to see you. She will be arriving this evening and intends to stay for a few days.",
      "The moment you leave this tent, you will get a big surprise. A woman you know well will rush towards you. She will speak to you and then she will lead you away from this place. That is all.'",
      "As soon as I went outside, I forgot all about Madam Bellinsky because my wife hurried towards me. 'Where have you been hiding?' she asked impatiently. 'Your sister will be here in less than an hour and we must be at the station to meet her.",
      "We are late already.' As she walked away, I followed her out of the fair."
    ],
    "vocabulary": [
      {
        "word": "fortune-teller",
        "syllables": "fortune-teller",
        "phonetic": "/ˈfɔːtʃuːn ˌtelər/",
        "definition": "noun. 算命者；占卜师（指给人算命或预测未来的人）",
        "example": "At a village fair, I decided to visit a fortune-teller called Madam Bellinsky.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "fair",
        "syllables": "fair",
        "phonetic": "/feər/",
        "definition": "noun. 集市；庙会（露天的商品交易或娱乐活动集会）",
        "example": "At a village fair, I decided to visit a fortune-teller called Madam Bellinsky.",
        "emoji": "✨",
        "longman": [
          "a fair situation, system, way of treating people, or judgment seems reasonable , acceptable , and right",
          "treating everyone in a way that is right or equal",
          "someone who is fair, or who has fair hair or skin , has hair or skin that is very light in color"
        ]
      },
      {
        "word": "relation",
        "syllables": "relation",
        "phonetic": "/rɪˈleɪʃn/",
        "definition": "noun. 亲戚；关系（指家庭成员或亲戚关系）",
        "example": "After I had given her some money, she looked into a crystal ball and said: 'A relation of yours is coming to see you.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "tent",
        "syllables": "tent",
        "phonetic": "/tent/",
        "definition": "noun. 帐篷（用帆布等搭建的临时住所）",
        "example": "I went into her tent and she told me to sit down.",
        "emoji": "✨",
        "longman": [
          "a shelter consisting of a sheet of cloth supported by poles and ropes, used especially for camping"
        ]
      },
      {
        "word": "impatiently",
        "syllables": "impatiently",
        "phonetic": "/ɪmˈpeɪʃntli/",
        "definition": "adverb. 不耐烦地（形容急切或缺乏耐心的样子）",
        "example": "she asked impatiently.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "intend",
        "syllables": "intend",
        "phonetic": "/ɪnˈtend/",
        "definition": "verb. 打算；计划（表示有意去做某事）",
        "example": "She will be arriving this evening and intends to stay for a few days.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“你的一个亲戚要来看你。”（A relation of yours is coming to see you.）？",
        "options": [
          "A relation of yours is coming to see you.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“A relation of yours is coming to see you.”（你的一个亲戚要来看你。），重点掌握句型：A relation of yours is coming to see you.。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "After I had given her some money, she looked into a crystal ball.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“After I had given her some money, she looked into a crystal ball.”（我给她一些钱之后，她看向水晶球。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作，强调动作的先后顺序。"
      },
      {
        "question": "What does the word 'fortune-teller' (/ˈfɔːtʃuːn ˌtelər/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 算命者；占卜师"
        ],
        "answerIndex": 2,
        "explanation": "单词 'fortune-teller' 的意思是：noun. 算命者；占卜师（指给人算命或预测未来的人）。"
      }
    ],
    "funPrompt": "读完《The future》后，试着用自己的话回答课前问题：Does what Madam Bellinsky said come true?"
  },
  {
    "id": 2061,
    "day": 61,
    "lessonNum": "61",
    "week": 3,
    "track": "nce2",
    "title": "L61: Trouble with the Hubble 哈勃望远镜的困境",
    "coverEmoji": "🛰️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 161,
    "intro": "🎯 课前导读问题：What is the special importance of a telescope in space?\n📌 语法与句型重点：【过去将来时 (Future in the Past)】would + 动词原形 / was/were going to + 动词原形 — 当主句谓语是过去时态时（如said, thought, knew等），宾语从句中要使用过去将来时表示当时认为将要发生的事。 例：Right from the start there was trouble with the Hubble. (客观事实) (从一开始哈勃望远镜就有问题。) ｜ 【将来进行时 (Future Continuous)】will be + 动词-ing — 用于描述在将来某个时间正在发生的动作，强调动作的进行性。 例：It will soon be sending us the clearest pictures of the stars. (它很快将给我们发送最清晰的星星照片。)\n💬 核心短语：“right from the start”（从一开始，表示从一开始就出现问题或情况）；“put right”（修正；纠正；使恢复正常）；“send up”（发射；把...送上去）",
    "paragraphs": [
      "The Hubble telescope was launched into space by NASA on April 20,1990 at a cost of over a billion dollars. Right from the start there was trouble with the Hubble. The pictures it sent us were very disappointing because its main mirror was faulty! NASA is now going to put the telescope right, so it will soon be sending up four astronauts to repair it.",
      "The shuttle Endeavour will be taking the astronauts to the Hubble. A robot-arm from the Endeavour will grab the telescope and hold it while the astronauts make the necessary repairs. Of course, the Hubble is above the earth's atmosphere, so it will soon be sending us the clearest pictures of the stars and distant galaxies that we have ever seen. The Hubble will tell us a great deal about the age and size of the universe.",
      "By the time you read this, the Hubble's eagle eye will have sent us thousands and thousands of wonderful pictures."
    ],
    "vocabulary": [
      {
        "word": "telescope",
        "syllables": "telescope",
        "phonetic": "/ˈtelɪskəʊp/",
        "definition": "noun. 望远镜（用于观察远处物体的光学仪器）",
        "example": "The Hubble telescope was launched into space by NASA on April 20,1990 at a cost of over a billion dollars.",
        "emoji": "✨",
        "longman": [
          "a piece of equipment shaped like a tube, used for making distant objects look larger and closer",
          "to make a process or set of events happen in a shorter time"
        ]
      },
      {
        "word": "launch",
        "syllables": "launch",
        "phonetic": "/lɔːntʃ/",
        "definition": "verb. 发射；把...投入市场（指将火箭、飞船等发射升空）",
        "example": "The Hubble telescope was launched into space by NASA on April 20,1990 at a cost of over a billion dollars.",
        "emoji": "✨",
        "longman": [
          "to start something, usually something big or important",
          "to make a new product, book etc available for sale for the first time"
        ]
      },
      {
        "word": "cost",
        "syllables": "cost",
        "phonetic": "/kɒst/",
        "definition": "noun. 费用；成本（指购买或做某事所需的金钱）；verb. 花费（表示某物值多少钱）",
        "example": "The Hubble telescope was launched into space by NASA on April 20,1990 at a cost of over a billion dollars.",
        "emoji": "✨",
        "longman": [
          "the amount of money that you have to pay in order to buy, do, or produce something",
          "something that you lose, give away, damage etc in order to achieve something"
        ]
      },
      {
        "word": "trouble",
        "syllables": "trouble",
        "phonetic": "/ˈtrʌbl/",
        "definition": "noun. 麻烦；问题（指遇到的困难或麻烦）；verb. 麻烦；打扰（指给人添麻烦）",
        "example": "Right from the start there was trouble with the Hubble.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "disappointing",
        "syllables": "disappointing",
        "phonetic": "/ˌdɪsəˈpɔɪntɪŋ/",
        "definition": "adjective. 令人失望的（形容某事物没有达到期望）",
        "example": "The pictures it sent us were very disappointing because its main mirror was faulty!",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "faulty",
        "syllables": "faulty",
        "phonetic": "/ˈfɔːlti/",
        "definition": "adjective. 有故障的；有缺陷的（描述机器或设备有毛病）",
        "example": "The pictures it sent us were very disappointing because its main mirror was faulty!",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“哈勃望远镜于1990年4月20日由美国国家航空航天局发射升空。”（...was launched into space by...on...）？",
        "options": [
          "The Hubble telescope was launched into space by NASA on April 20, 1990.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The Hubble telescope was launched into space by NASA on April 20, 1990.”（哈勃望远镜于1990年4月20日由美国国家航空航天局发射升空。），重点掌握句型：...was launched into space by...on...。"
      },
      {
        "question": "语法要点【过去将来时 (Future in the Past)】：下列哪个例句符合本课语法结构（would + 动词原形 / was/were going to + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "Right from the start there was trouble with the Hubble. (客观事实)",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Right from the start there was trouble with the Hubble. (客观事实)”（从一开始哈勃望远镜就有问题。）展示了本课重点语法【过去将来时 (Future in the Past)】：表示从过去某时看来将要发生的动作或存在的状态，常用于宾语从句中。"
      },
      {
        "question": "What does the word 'telescope' (/ˈtelɪskəʊp/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 望远镜"
        ],
        "answerIndex": 2,
        "explanation": "单词 'telescope' 的意思是：noun. 望远镜（用于观察远处物体的光学仪器）。"
      }
    ],
    "funPrompt": "读完《Trouble with the Hubble》后，试着用自己的话回答课前问题：What is the special importance of a telescope in space?"
  },
  {
    "id": 2062,
    "day": 62,
    "lessonNum": "62",
    "week": 3,
    "track": "nce2",
    "title": "L62: After the fire 大火之后",
    "coverEmoji": "🌱",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 161,
    "intro": "🎯 课前导读问题：What was the danger to the villages after the fire?\n📌 语法与句型重点：【过去完成进行时 (Past Perfect Continuous Tense)】had been + 动词-ing — 用于描述持续进行的动作到过去某一点，常与before、when等时间词连用。 例：Firemen had been fighting the forest fire for nearly three weeks before they could get it under control. (消防队员们与森林大火搏斗了将近三个星期，才最终控制住火势。) ｜ 【Before引导的时间状语从句】主句 + before + 从句 — 强调主句动作先发生，或表示'在...之前'。 例：They could get it under control before they had been fighting for three weeks. (他们能够控制住火势在他们搏斗三周之前。（此句语义有误，应为：在搏斗三周后，他们才控制住）)\n💬 核心短语：“fight the fire”（表示救火、灭火）；“get under control”（表示得到控制、被控制住）；“cover miles around”（表示覆盖周围数英里）",
    "paragraphs": [
      "Firemen had been fighting the forest for nearly three weeks before they could get it under control. A short time before, great trees had covered the countryside for miles around. Now, smoke still rose up from the warm ground over the desolate hills. Winter was coming on and the hills threatened the surrounding villages with destruction, for heavy rain would not only wash away the soil but would cause serious floods as well.",
      "When the fire had at last been put out, the forest authorities ordered several tons of a special type of grass-seed which would grow quickly. The seed was sprayed over the ground in huge quantities by aeroplanes. The planes had been planting seed for nearly a month when it began to rain. By then, however, in many places the grass had already taken root.",
      "In place of the great trees which had been growing there for centuries patches of green had begun to appear in the blackened soil."
    ],
    "vocabulary": [
      {
        "word": "fireman",
        "syllables": "fireman",
        "phonetic": "/ˈfaɪəmən/",
        "definition": "noun. 消防队员（指从事灭火工作的专业人员，复数形式为firemen）",
        "example": "",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "forest",
        "syllables": "forest",
        "phonetic": "/ˈfɒrɪst/",
        "definition": "noun. 森林（指大面积的树木覆盖区域）",
        "example": "Firemen had been fighting the forest for nearly three weeks before they could get it under control.",
        "emoji": "✨",
        "longman": [
          "a large area of land that is covered with trees",
          "a very large area of land with a lot of trees growing closely together"
        ]
      },
      {
        "word": "countryside",
        "syllables": "countryside",
        "phonetic": "/ˈkʌntrisaɪd/",
        "definition": "noun. 农村，乡村（指城市以外的地区）",
        "example": "A short time before, great trees had covered the countryside for miles around.",
        "emoji": "✨",
        "longman": [
          "land that is outside cities and towns",
          "an area away from towns and cities, where there are fields, forests etc – used especially when talking about the natural beauty of this kind of area"
        ]
      },
      {
        "word": "desolate",
        "syllables": "desolate",
        "phonetic": "/ˈdesələt/",
        "definition": "adj. 荒凉的，无人烟的（形容荒芜、凄凉的地区）",
        "example": "Now, smoke still rose up from the warm ground over the desolate hills.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "threaten",
        "syllables": "threaten",
        "phonetic": "/ˈθretn/",
        "definition": "verb. 威胁，恐吓（指对某人或某物构成危险）",
        "example": "Winter was coming on and the hills threatened the surrounding villages with destruction, for heavy rain would not only wash away the soil but would cause serious floods as well.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "destruction",
        "syllables": "destruction",
        "phonetic": "/dɪˈstrʌkʃn/",
        "definition": "noun. 破坏，毁灭（指严重的损坏或摧毁）",
        "example": "Winter was coming on and the hills threatened the surrounding villages with destruction, for heavy rain would not only wash away the soil but would cause serious floods as well.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“消防队员们与森林大火搏斗了将近三个星期，才最终控制住火势。”（主语 + had been + 动词-ing + for...before + 主语 + could + 动词原形）？",
        "options": [
          "Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.”（消防队员们与森林大火搏斗了将近三个星期，才最终控制住火势。），重点掌握句型：主语 + had been + 动词-ing + for...before + 主语 + could + 动词原形。"
      },
      {
        "question": "语法要点【过去完成进行时 (Past Perfect Continuous Tense)】：下列哪个例句符合本课语法结构（had been + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.”（消防队员们与森林大火搏斗了将近三个星期，才最终控制住火势。）展示了本课重点语法【过去完成进行时 (Past Perfect Continuous Tense)】：表示在过去某一时间点之前已经开始并持续到该时间点的动作，强调动作的持续性和进行过程。"
      },
      {
        "question": "What does the word 'fireman' (/ˈfaɪəmən/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 消防队员"
        ],
        "answerIndex": 2,
        "explanation": "单词 'fireman' 的意思是：noun. 消防队员（指从事灭火工作的专业人员，复数形式为firemen）。"
      }
    ],
    "funPrompt": "读完《After the fire》后，试着用自己的话回答课前问题：What was the danger to the villages after the fire?"
  },
  {
    "id": 2063,
    "day": 63,
    "lessonNum": "63",
    "week": 3,
    "track": "nce2",
    "title": "L63: She was not amused 她并不觉得好笑",
    "coverEmoji": "🎪",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 161,
    "intro": "🎯 课前导读问题：Why did Jenny want to leave the wedding reception?\n📌 语法与句型重点：【直接引语和间接引语（Direct and Indirect Speech）】主句 + 连词 + 主语 + 动词 + 其他成分；人称变化：第一人称→第二人称，第二人称→第一人称；时态后退（过去时→过去完成时等） — 用于转述他人说过的话，使叙述更加流畅自然。在口语和书面语中都常用。。 例：She said she hadn't enjoyed the speech. (她说她不喜欢那个演讲。) ｜ 【as soon as 的用法】as soon as + 主语 + 动词...，主句 — 用于描述先后发生的两个动作，第一个动作一发生，第二个动作立即开始。常用于叙述故事的发展。。 例：As soon as he had finished, Jenny told him she wanted to go home. (他一讲完，Jenny就告诉他她想回家。)\n💬 核心短语：“a large circle of friends”（指拥有很多的社交圈子，朋友很多）；“make a speech”（发表演讲，在公共场合进行正式发言）；“to his surprise”（令他惊讶的是，表示出乎意料）",
    "paragraphs": [
      "Jeremy Hampden has a large circle of friends and if very popular at parties. Everybody admires him for his great sense of humour -- everybody, that is, except his six-year-old daughter, Jenny. Recently, one of Jeremy's closest friends asked him to make a speech at a wedding reception. This is the sort of thing that Jeremy loves.",
      "He prepared the speech carefully and went to the wedding with Jenny. he had included a large number of funny stories in the speech and, of course, it was a great success. As soon as he had finished, Jenny told him she wanted to go home. Jeremy was a little disappointed by this but he did as his daughter asked.",
      "On the way home, he asked Jenny if she had enjoyed the speech. To his surprise, she said she hadn't. Jeremy asked her why this was so and she told him that she did not like to see so many people laughing at him!"
    ],
    "vocabulary": [
      {
        "word": "reception",
        "syllables": "reception",
        "phonetic": "/rɪˈsepʃn/",
        "definition": "noun. 婚宴；招待会（指正式场合的宴会或聚会）",
        "example": "Recently, one of Jeremy's closest friends asked him to make a speech at a wedding reception.",
        "emoji": "✨",
        "longman": [
          "a particular type of welcome for someone, or a particular type of reaction to their ideas, work etc",
          "the desk or office where visitors arriving in a hotel or large organization go first"
        ]
      },
      {
        "word": "admire",
        "syllables": "admire",
        "phonetic": "/ədˈmaɪər/",
        "definition": "verb. 钦佩；欣赏（表达对某人的尊敬和赞赏）",
        "example": "Everybody admires him for his great sense of humour -- everybody, that is, except his six-year-old daughter, Jenny.",
        "emoji": "✨",
        "longman": [
          "to respect and like someone because they have done something that you think is good, or to respect their qualities or skills",
          "to look at something and think how beautiful or impressive it is"
        ]
      },
      {
        "word": "humour",
        "syllables": "humour",
        "phonetic": "/ˈhjuːmər/",
        "definition": "noun. 幽默；幽默感（指人的幽默性格或幽默的东西）",
        "example": "Everybody admires him for his great sense of humour -- everybody, that is, except his six-year-old daughter, Jenny.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "popular",
        "syllables": "popular",
        "phonetic": "/ˈpɒpjʊlər/",
        "definition": "adj. 受欢迎的；流行的（形容广受大家喜爱）",
        "example": "Jeremy Hampden has a large circle of friends and if very popular at parties.",
        "emoji": "✨",
        "longman": [
          "liked by a lot of people",
          "done by a lot of people in a society, group etc"
        ]
      },
      {
        "word": "circle",
        "syllables": "circle",
        "phonetic": "/ˈsɜːkl/",
        "definition": "noun. 圈子；圆形（指社交圈子或一群人）",
        "example": "Jeremy Hampden has a large circle of friends and if very popular at parties.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "closest",
        "syllables": "closest",
        "phonetic": "/ˈkləʊsɪst/",
        "definition": "adj. 最亲密的（close的最高级形式）",
        "example": "Recently, one of Jeremy's closest friends asked him to make a speech at a wedding reception.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“每个人都钦佩他的幽默感。”（Everybody admires him for his + 名词）？",
        "options": [
          "Everybody admires him for his great sense of humour.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Everybody admires him for his great sense of humour.”（每个人都钦佩他的幽默感。），重点掌握句型：Everybody admires him for his + 名词。"
      },
      {
        "question": "语法要点【直接引语和间接引语（Direct and Indirect Speech）】：下列哪个例句符合本课语法结构（主句 + 连词 + 主语 + 动词 + 其他成分；人称变化：第一人称→第二人称，第二人称→第一人称；时态后退（过去时→过去完成时等））？",
        "options": [
          "He have go to school tomorrow.",
          "She said she hadn't enjoyed the speech.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“She said she hadn't enjoyed the speech.”（她说她不喜欢那个演讲。）展示了本课重点语法【直接引语和间接引语（Direct and Indirect Speech）】：当转述别人的话时，可以使用直接引用原话，或将原话转换为转述句。间接引语中，人称、时态、时间状语等通常需要相应变化。。"
      },
      {
        "question": "What does the word 'reception' (/rɪˈsepʃn/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 婚宴；招待会"
        ],
        "answerIndex": 2,
        "explanation": "单词 'reception' 的意思是：noun. 婚宴；招待会（指正式场合的宴会或聚会）。"
      }
    ],
    "funPrompt": "读完《She was not amused》后，试着用自己的话回答课前问题：Why did Jenny want to leave the wedding reception?"
  },
  {
    "id": 2064,
    "day": 64,
    "lessonNum": "64",
    "week": 3,
    "track": "nce2",
    "title": "L64: The Channel Tunnel 海峡隧道",
    "coverEmoji": "🚇",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 158,
    "intro": "🎯 课前导读问题：Why was the first tunnel not completed?\n📌 语法与句型重点：【Third Conditional (虚拟语气过去完成时)】If + 主语 + had + 过去分词..., 主语 + would/could/might + have + 过去分词 — 用于谈论与过去事实相反的假设情况，表达一种假想的、与事实不符的情景。 例：If, at the time, the British had not feared invasion, it would have been completed. (如果当时英国人不害怕入侵，隧道早就建成了。) ｜ 【Passive Voice - Past Simple Passive (一般过去时的被动语态)】主语 + was/were + 过去分词 — 用于强调动作的承受者，或当动作执行者不明确/不重要时。 例：A tunnel was actually begun forty-two years later. (42年后隧道终于开始修建。)\n💬 核心短语：“put forward”（提出（计划、建议等））；“serve as”（用作；充当）；“solve the problem of”（解决...问题）",
    "paragraphs": [
      "In 1858, a French engineer, Aime Thome de Gamond, arrived in England with a plan for a twenty-one-mile tunnel under the English Channel. He said that it would be possible to build a platform in the centre of the Channel. This platform would serve as a port and a railway station. The tunnel would be well-ventilated if tall chimneys were built above sea level.",
      "In 1860, a better plan was put forward by an Englishman, William Low. He suggested that a double railway-tunnel should be built. This would solve the problem of ventilation, for if a train entered this tunnel, it would draw in fresh air behind it. Forty-two years later a tunnel was actually begun.",
      "If, at the time, the British had not feared invasion, it would have been completed. The world had to wait almost another 100 years for the Channel Tunnel. It was officially opened on March 7,1994, finally connecting Britain to the European continent."
    ],
    "vocabulary": [
      {
        "word": "tunnel",
        "syllables": "tunnel",
        "phonetic": "/ˈtʌnl/",
        "definition": "noun. 隧道；地道（指在地下或山中开凿的通道）",
        "example": "In 1858, a French engineer, Aime Thome de Gamond, arrived in England with a plan for a twenty-one-mile tunnel under the English Channel.",
        "emoji": "✨",
        "longman": [
          "a passage that has been dug under the ground for cars, trains etc to go through",
          "a passage under the ground that animals have dug to live in"
        ]
      },
      {
        "word": "engineer",
        "syllables": "engineer",
        "phonetic": "/ˌendʒɪˈnɪə/",
        "definition": "noun. 工程师（指设计或建造机器、建筑物等专业人员）",
        "example": "In 1858, a French engineer, Aime Thome de Gamond, arrived in England with a plan for a twenty-one-mile tunnel under the English Channel.",
        "emoji": "✨",
        "longman": [
          "someone whose job is to design or build roads, bridges, machines etc",
          "someone whose job is to take care of the engines on a ship or aircraft"
        ]
      },
      {
        "word": "platform",
        "syllables": "platform",
        "phonetic": "/ˈplætfɔːm/",
        "definition": "noun. 平台；站台（指高出地面的平面结构，或火车站的站台）",
        "example": "He said that it would be possible to build a platform in the centre of the Channel.",
        "emoji": "✨",
        "longman": [
          "the raised place beside a railway track where you get on and off a train in a station",
          "a stage for people to stand on when they are making a speech, performing etc"
        ]
      },
      {
        "word": "ventilation",
        "syllables": "ventilation",
        "phonetic": "/ˌventɪˈleɪʃn/",
        "definition": "noun. 通风；透气（指空气流通的装置或过程）",
        "example": "This would solve the problem of ventilation, for if a train entered this tunnel, it would draw in fresh air behind it.",
        "emoji": "✨",
        "longman": [
          "to let fresh air into a room, building etc",
          "to pump air into and out of someone’s lungs, using a special machine"
        ]
      },
      {
        "word": "chimney",
        "syllables": "chimney",
        "phonetic": "/ˈtʃɪmni/",
        "definition": "noun. 烟囱（指排出烟气或气体的垂直管道）",
        "example": "The tunnel would be well-ventilated if tall chimneys were built above sea level.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "double",
        "syllables": "double",
        "phonetic": "/ˈdʌbl/",
        "definition": "adjective. 双的；双倍的（指两个同样部分的，用于强调数量或尺寸）",
        "example": "He suggested that a double railway-tunnel should be built.",
        "emoji": "✨",
        "longman": [
          "consisting of two parts that are similar or exactly the same",
          "combining or involving two things of the same type",
          "twice as big, twice as much, or twice as many as usual"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“如果当时英国人不害怕入侵，隧道早就建成了。”（If + 过去完成时, 主语 + would have + 过去分词）？",
        "options": [
          "If, at the time, the British had not feared invasion, it would have been completed.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“If, at the time, the British had not feared invasion, it would have been completed.”（如果当时英国人不害怕入侵，隧道早就建成了。），重点掌握句型：If + 过去完成时, 主语 + would have + 过去分词。"
      },
      {
        "question": "语法要点【Third Conditional (虚拟语气过去完成时)】：下列哪个例句符合本课语法结构（If + 主语 + had + 过去分词..., 主语 + would/could/might + have + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "If, at the time, the British had not feared invasion, it would have been completed.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“If, at the time, the British had not feared invasion, it would have been completed.”（如果当时英国人不害怕入侵，隧道早就建成了。）展示了本课重点语法【Third Conditional (虚拟语气过去完成时)】：表示与过去事实相反的假设，结构为If + 主语 + had + 过去分词, 主语 + would/could/might + have + 过去分词。"
      },
      {
        "question": "What does the word 'tunnel' (/ˈtʌnl/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 隧道；地道"
        ],
        "answerIndex": 2,
        "explanation": "单词 'tunnel' 的意思是：noun. 隧道；地道（指在地下或山中开凿的通道）。"
      }
    ],
    "funPrompt": "读完《The Channel Tunnel》后，试着用自己的话回答课前问题：Why was the first tunnel not completed?"
  },
  {
    "id": 2065,
    "day": 65,
    "lessonNum": "65",
    "week": 3,
    "track": "nce2",
    "title": "L65: Jumbo versus the police 小象对警察",
    "coverEmoji": "🐘",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 162,
    "intro": "🎯 课前导读问题：Why did the police have to push Jumbo off the main street?\n📌 语法与句型重点：【情态动词 ought to 的用法】ought to + 动词原形 / ought to have + 过去分词 — 用于表达应该做的事情，以及对过去未完成事情的遗憾。 例：You ought to be more careful. (你应该更小心一些。) ｜ 【must 表示推测】must + 动词原形 — 用于对所见所闻进行有把握的推断。 例：Jumbo must weigh a few tons. (Jumbo 肯定有好几吨重。)\n💬 核心短语：“dress up as”（打扮成，装扮成）；“set off”（出发，启程）；“hold up”（阻挡，阻塞，耽搁）",
    "paragraphs": [
      "Last Christmas, the circus owner, Jimmy Gates, decided to take some presents to a children's hospital. Dressed up as Father Christmas and accompanied by a 'guard of honour' of six pretty girls, he set off down the main street of the city riding a baby elephant called Jumbo. He should have known that the police would never allow this sort of thing. A policeman approached Jimmy and told him he ought to have gone along a side street as Jumbo was holding up the traffic.",
      "Though Jimmy agreed to go at once, Jumbo refused to move. Fifteen policemen had to push very hard to get him off the main street. The police had a difficult time, but they were most amused. 'Jumbo must weigh a few tons,' said a policeman afterwards, 'so it was fortunate that we didn't have to carry him.",
      "Of course, we should arrest him, but as he has a good record, we shall let him off this time.'"
    ],
    "vocabulary": [
      {
        "word": "circus",
        "syllables": "circus",
        "phonetic": "/ˈsɜːkəs/",
        "definition": "noun. 马戏团（指进行马戏表演的团体或场所）",
        "example": "Last Christmas, the circus owner, Jimmy Gates, decided to take some presents to a children's hospital.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "present",
        "syllables": "present",
        "phonetic": "/ˈprezənt/",
        "definition": "noun. 礼物（名词，表示赠送给他人的东西）",
        "example": "Last Christmas, the circus owner, Jimmy Gates, decided to take some presents to a children's hospital.",
        "emoji": "✨",
        "longman": [
          "in a particular place",
          "to be felt strongly or remembered for a long time",
          "happening or existing now"
        ]
      },
      {
        "word": "hospital",
        "syllables": "hospital",
        "phonetic": "/ˈhɒspɪtl/",
        "definition": "noun. 医院（医疗机构，用于治疗和护理病人）",
        "example": "Last Christmas, the circus owner, Jimmy Gates, decided to take some presents to a children's hospital.",
        "emoji": "✨",
        "longman": [
          "a large building where sick or injured people receive medical treatment",
          "a large hospital, which often has many different departments, including areas for research"
        ]
      },
      {
        "word": "accompany",
        "syllables": "accompany",
        "phonetic": "/əˈkʌmpəni/",
        "definition": "verb. 陪伴，陪同（表示与某人一起做某事）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "to go somewhere with someone",
          "to play a musical instrument while someone sings a song or plays the main tune"
        ]
      },
      {
        "word": "approach",
        "syllables": "approach",
        "phonetic": "/əˈprəʊtʃ/",
        "definition": "verb. 接近，靠近（表示向某人或某物走去）",
        "example": "A policeman approached Jimmy and told him he ought to have gone along a side street as Jumbo was holding up the traffic.",
        "emoji": "✨",
        "longman": [
          "a method of doing something or dealing with a problem",
          "a request from someone, asking you to do something for them"
        ]
      },
      {
        "word": "refuse",
        "syllables": "refuse",
        "phonetic": "/rɪˈfjuːz/",
        "definition": "verb. 拒绝，不肯（表示不愿意做某事或接受某事）",
        "example": "Though Jimmy agreed to go at once, Jumbo refused to move.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他早该知道警察是绝不会允许这种事的。”（ought to have + 过去分词）？",
        "options": [
          "He should have known that the police would never allow this sort of thing.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“He should have known that the police would never allow this sort of thing.”（他早该知道警察是绝不会允许这种事的。），重点掌握句型：ought to have + 过去分词。"
      },
      {
        "question": "语法要点【情态动词 ought to 的用法】：下列哪个例句符合本课语法结构（ought to + 动词原形 / ought to have + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "You ought to be more careful.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“You ought to be more careful.”（你应该更小心一些。）展示了本课重点语法【情态动词 ought to 的用法】：ought to 表示责任、义务或建议，其过去式 ought to have done 表示过去应该做而实际未做，带有责备或遗憾的意味。"
      },
      {
        "question": "What does the word 'circus' (/ˈsɜːkəs/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 马戏团"
        ],
        "answerIndex": 2,
        "explanation": "单词 'circus' 的意思是：noun. 马戏团（指进行马戏表演的团体或场所）。"
      }
    ],
    "funPrompt": "读完《Jumbo versus the police》后，试着用自己的话回答课前问题：Why did the police have to push Jumbo off the main street?"
  },
  {
    "id": 2066,
    "day": 66,
    "lessonNum": "66",
    "week": 3,
    "track": "nce2",
    "title": "L66: Sweet as honey! 像蜜一样甜！",
    "coverEmoji": "🛩️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 164,
    "intro": "🎯 课前导读问题：What was 'sweet as honey' and why?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】had + 过去分词 — 在叙述过去事件时，用于描述在叙述时间点之前已经发生的动作，常与一般过去时连用。 例：The crash was forgotten and the wreck remained undisturbed. (crash是26年前的事) (坠机事故被遗忘了，残骸未被扰动。) ｜ 【被动语态 (Passive Voice)】be + 过去分词 — 强调动作的承受者，或不知道动作的执行者时使用。 例：The plane was accidentally rediscovered in an aerial survey. (这架飞机在一次航空测量中被意外重新发现。)\n💬 核心短语：“a colony of bees”（表示一群蜜蜂，用于描述蜂群）；“sweet as honey”（形容某物像蜂蜜一样甜，文中用于形容发动机保存完好）；“in reasonable condition”（表示状况良好/尚可）",
    "paragraphs": [
      "In 1963 a Lancaster bomber crashed on Wallis Island, a remote place in the South Pacific, a long way west of Samoa. The plane wasn't too badly damaged, but over the years, the crash was forgotten and the wreck remained undisturbed. Then in 1989, twenty-six years after the crash, the plane was accidentally rediscovered in an aerial survey of the island. By this time, a Lancaster bomber in reasonable condition was rare and worth rescuing.",
      "The French authorities had the plane packaged and moved in parts back to France. Now a group of enthusiasts are going to have the plane restored. It has four Rolls-Royce Merlin engines, but the group will need to have only three of them rebuilt. Imagine their surprise and delight when they broke open the packing cases and found that the fourth engine was sweet as honey -- still in perfect condition.",
      "A colony of bees had turned the engine into a hive and it was totally preserved in beeswax!"
    ],
    "vocabulary": [
      {
        "word": "crash",
        "syllables": "crash",
        "phonetic": "/kræʃ/",
        "definition": "verb. 坠毁；撞毁（指飞机、车辆等猛烈撞击或坠落）；noun. 坠毁；碰撞（用于描述交通工具的事故）",
        "example": "In 1963 a Lancaster bomber crashed on Wallis Island, a remote place in the South Pacific, a long way west of Samoa.",
        "emoji": "✨",
        "longman": [
          "to have an accident in a car, plane etc by violently hitting something else",
          "to hit something or someone extremely hard while moving, in a way that causes a lot of damage or makes a lot of noise"
        ]
      },
      {
        "word": "remote",
        "syllables": "remote",
        "phonetic": "/rɪˈməʊt/",
        "definition": "adjective. 偏远的；遥远的（形容地理位置偏僻、人迹罕至的地方）",
        "example": "In 1963 a Lancaster bomber crashed on Wallis Island, a remote place in the South Pacific, a long way west of Samoa.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "undisturbed",
        "syllables": "undisturbed",
        "phonetic": "/ˌʌndɪˈstɜːbd/",
        "definition": "adjective. 未受干扰的；原封不动的（指保持原样、没有被打扰的状态）",
        "example": "The plane wasn't too badly damaged, but over the years, the crash was forgotten and the wreck remained undisturbed.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "enthusiast",
        "syllables": "enthusiast",
        "phonetic": "/ɪnˈθjuːziæst/",
        "definition": "noun. 爱好者；热衷者（指对某事物有强烈兴趣和热情的人）",
        "example": "Now a group of enthusiasts are going to have the plane restored.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "restore",
        "syllables": "restore",
        "phonetic": "/rɪˈstɔː/",
        "definition": "verb. 修复；恢复（指将损坏的东西修复到原来的状态）",
        "example": "Now a group of enthusiasts are going to have the plane restored.",
        "emoji": "✨",
        "longman": [
          "to make something return to its former state or condition",
          "to bring back a positive feeling that a person or a group of people felt before"
        ]
      },
      {
        "word": "engine",
        "syllables": "engine",
        "phonetic": "/ˈendʒɪn/",
        "definition": "noun. 发动机；引擎（指机器或车辆的动力装置）",
        "example": "It has four Rolls-Royce Merlin engines, but the group will need to have only three of them rebuilt.",
        "emoji": "✨",
        "longman": [
          "the part of a vehicle that produces power to make it move",
          "a vehicle that pulls a railway train"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“1963年，一架兰开斯特轰炸机坠毁在瓦利斯岛上。”（In + 年份, ...）？",
        "options": [
          "In 1963 a Lancaster bomber crashed on Wallis Island.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“In 1963 a Lancaster bomber crashed on Wallis Island.”（1963年，一架兰开斯特轰炸机坠毁在瓦利斯岛上。），重点掌握句型：In + 年份, ...。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "The crash was forgotten and the wreck remained undisturbed. (crash是26年前的事)",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The crash was forgotten and the wreck remained undisturbed. (crash是26年前的事)”（坠机事故被遗忘了，残骸未被扰动。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某个时间点之前已经完成的动作，或用于描述过去的过去。"
      },
      {
        "question": "What does the word 'crash' (/kræʃ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "verb. 坠毁；撞毁"
        ],
        "answerIndex": 2,
        "explanation": "单词 'crash' 的意思是：verb. 坠毁；撞毁（指飞机、车辆等猛烈撞击或坠落）。"
      }
    ],
    "funPrompt": "读完《Sweet as honey!》后，试着用自己的话回答课前问题：What was 'sweet as honey' and why?"
  },
  {
    "id": 2067,
    "day": 67,
    "lessonNum": "67",
    "week": 3,
    "track": "nce2",
    "title": "L67: Volcanoes 火山",
    "coverEmoji": "🌋",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 165,
    "intro": "🎯 课前导读问题：Why does Tazieff risk his life like this?\n📌 语法与句型重点：【一般过去时 (Simple Past Tense)】主语 + 动词过去式 — 用于叙述过去发生的事情，描述已经完成的动作或状态。 例：In 1948, he went to Lake Kivu in the Congo. (1948年，他去了刚果的基伍湖。) ｜ 【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去正在发生的动作，常与 when/while 等连用。 例：The volcano was erupting violently. (火山正在猛烈喷发。)\n💬 核心短语：“risk one's life”（冒生命危险）；“set up”（建立，搭建）；“in time”（及时）",
    "paragraphs": [
      "Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world. In 1948, he went to Lake Kivu in the Congo to observe a new volcano which he later named Kituro. Tazieff was able to set up his camp very close to the volcano while it was erupting violently. Though he managed to take a number of brilliant photographs, he could not stay near the volcano for very long.",
      "He noticed that a river of liquid rock was coming towards him. It threatened to surround him completely, but Tazieff managed to escape just in time. He waited until the volcano became quiet and he was able to return two days later. This time, he managed to climb into the mouth of Kituro so that he could take photographs and measure temperatures.",
      "Tazieff has often risked his life in this way. He has been able to tell us more about active volcanoes than any man alive."
    ],
    "vocabulary": [
      {
        "word": "scientist",
        "syllables": "scientist",
        "phonetic": "/ˈsaɪəntɪst/",
        "definition": "noun. 科学家（指从事科学研究的人，可数名词）",
        "example": "Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world.",
        "emoji": "✨",
        "longman": [
          "someone who works or is trained in science"
        ]
      },
      {
        "word": "volcano",
        "syllables": "volcano",
        "phonetic": "/vɒlˈkeɪnəʊ/",
        "definition": "noun. 火山（可数名词，复数 volcanoes）",
        "example": "Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "lifetime",
        "syllables": "lifetime",
        "phonetic": "/ˈlaɪftaɪm/",
        "definition": "noun. 一生，终生（指一个人的整个生命时间）",
        "example": "Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "active",
        "syllables": "active",
        "phonetic": "/ˈæktɪv/",
        "definition": "adj. 活跃的，正在活动的（常用于描述正在运作的事物）",
        "example": "Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world.",
        "emoji": "✨",
        "longman": [
          "always busy doing things, especially physical or mental activities",
          "involved in an organization or activity and doing lots of practical things to achieve your aims"
        ]
      },
      {
        "word": "observe",
        "syllables": "observe",
        "phonetic": "/əbˈzɜːv/",
        "definition": "verb. 观察，观测（指仔细观察并研究某事物）",
        "example": "In 1948, he went to Lake Kivu in the Congo to observe a new volcano which he later named Kituro.",
        "emoji": "✨",
        "longman": [
          "to see and notice something",
          "to watch something or someone carefully"
        ]
      },
      {
        "word": "erupt",
        "syllables": "erupt",
        "phonetic": "/ɪˈrʌpt/",
        "definition": "verb. （火山）喷发（不及物动词，用于描述火山爆发）",
        "example": "Tazieff was able to set up his camp very close to the volcano while it was erupting violently.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“哈伦·塔齐耶夫一生都在研究活火山。”（主语 + has spent + 时间/精力 + doing something）？",
        "options": [
          "Haroun Tazieff has spent his lifetime studying active volcanoes.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Haroun Tazieff has spent his lifetime studying active volcanoes.”（哈伦·塔齐耶夫一生都在研究活火山。），重点掌握句型：主语 + has spent + 时间/精力 + doing something。"
      },
      {
        "question": "语法要点【一般过去时 (Simple Past Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "In 1948, he went to Lake Kivu in the Congo.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“In 1948, he went to Lake Kivu in the Congo.”（1948年，他去了刚果的基伍湖。）展示了本课重点语法【一般过去时 (Simple Past Tense)】：表示过去发生的动作或存在的状态，通常与表示过去的时间状语连用。"
      },
      {
        "question": "What does the word 'scientist' (/ˈsaɪəntɪst/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 科学家"
        ],
        "answerIndex": 2,
        "explanation": "单词 'scientist' 的意思是：noun. 科学家（指从事科学研究的人，可数名词）。"
      }
    ],
    "funPrompt": "读完《Volcanoes》后，试着用自己的话回答课前问题：Why does Tazieff risk his life like this?"
  },
  {
    "id": 2068,
    "day": 68,
    "lessonNum": "68",
    "week": 3,
    "track": "nce2",
    "title": "L68: Persistent 纠缠不休",
    "coverEmoji": "🕵️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 157,
    "intro": "🎯 课前导读问题：Why did Elizabeth tell Nigel that she was going to the dentist?\n📌 语法与句型重点：【动名词（-ing形式）作宾语】动词 + doing — 常与enjoy, avoid, finish, insist on, prevent...from, mind等动词连用。 例：I never enjoy meeting Nigel Dykes. (我从来不喜欢遇到奈杰尔·戴克斯。) ｜ 【Would you mind + 物主代词/名词所有格 + doing?】Would you mind my/nickname's + 动词-ing? — 回答时常用Not at all（不介意）或I'm sorry, but...（介意）。 例：Would you mind my coming with you? (你介意我和你一起去吗？)\n💬 核心短语：“avoid doing something”（避免做某事）；“come running towards”（跑向，朝...跑来）；“no matter how”（无论怎样，不管如何）",
    "paragraphs": [
      "I crossed the street to avoid meeting him, but he saw me and came running towards me. It was no use pretending that I had not seen him, so I waved to him. I never enjoy meeting Nigel Dykes. He never has anything to do.",
      "No matter how busy you are, he always insists on coming with you. I had to think of a way of preventing him from following me around all morning.",
      "'Hello, Nigel,' I said. 'Fancy meeting you here!'",
      "'Hi, Elizabeth,' Nigel answered. 'I was just wondering how to spend the morning -- until I saw you. You're not busy doing anything, are you?'",
      "'No, not at all,' I answered. 'I'm going to...'",
      "'Would you mind my coming with you?' he asked, before I had finished speaking.",
      "'Not at all,' I lied, 'but I'm going to the dentist.'",
      "'Then I'll come with you,' he answered. 'There's always plenty to read in the waiting room!"
    ],
    "vocabulary": [
      {
        "word": "avoid",
        "syllables": "avoid",
        "phonetic": "/əˈvɔɪd/",
        "definition": "verb. 避开，避免（常接动词-ing形式，表示避开做某事或避开某人）",
        "example": "I crossed the street to avoid meeting him, but he saw me and came running towards me.",
        "emoji": "✨",
        "longman": [
          "to prevent something bad from happening",
          "to stay away from someone or something, or not use something"
        ]
      },
      {
        "word": "pretend",
        "syllables": "pretend",
        "phonetic": "/prɪˈtend/",
        "definition": "verb. 假装，装作（常接that从句或to be结构）",
        "example": "It was no use pretending that I had not seen him, so I waved to him.",
        "emoji": "✨",
        "longman": [
          "to behave as if something is true when in fact you know it is not, in order to deceive people or for fun",
          "to claim that something is true, when it is not"
        ]
      },
      {
        "word": "insist",
        "syllables": "insist",
        "phonetic": "/ɪnˈsɪst/",
        "definition": "verb. 坚持，坚决要求（insist on doing something坚持做某事）",
        "example": "No matter how busy you are, he always insists on coming with you.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "prevent",
        "syllables": "prevent",
        "phonetic": "/prɪˈvent/",
        "definition": "verb. 阻止，阻挡（prevent sb. from doing sth.阻止某人做某事）",
        "example": "I had to think of a way of preventing him from following me around all morning.",
        "emoji": "✨",
        "longman": [
          "to stop something from happening, or stop someone from doing something",
          "to stop something happening, or someone doing something"
        ]
      },
      {
        "word": "fancy",
        "syllables": "fancy",
        "phonetic": "/ˈfænsi/",
        "definition": "verb. 想不到，竟然（Fancy meeting you here!想不到在这儿遇见你！）",
        "example": "'Fancy meeting you here!'",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "wonder",
        "syllables": "wonder",
        "phonetic": "/ˈwʌndə(r)/",
        "definition": "verb. 想知道，琢磨（wonder how/why/whether想知道如何/为什么/是否）",
        "example": "'I was just wondering how to spend the morning -- until I saw you.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我得想个办法阻止他一整个上午都跟着我。”（I had to think of a way of + 动名词）？",
        "options": [
          "I had to think of a way of preventing him from following me around all morning.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I had to think of a way of preventing him from following me around all morning.”（我得想个办法阻止他一整个上午都跟着我。），重点掌握句型：I had to think of a way of + 动名词。"
      },
      {
        "question": "语法要点【动名词（-ing形式）作宾语】：下列哪个例句符合本课语法结构（动词 + doing）？",
        "options": [
          "He have go to school tomorrow.",
          "I never enjoy meeting Nigel Dykes.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I never enjoy meeting Nigel Dykes.”（我从来不喜欢遇到奈杰尔·戴克斯。）展示了本课重点语法【动名词（-ing形式）作宾语】：某些动词后面需要接动名词（verb + -ing）作宾语，表示习惯性或一般性的动作。"
      },
      {
        "question": "What does the word 'avoid' (/əˈvɔɪd/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "verb. 避开，避免"
        ],
        "answerIndex": 2,
        "explanation": "单词 'avoid' 的意思是：verb. 避开，避免（常接动词-ing形式，表示避开做某事或避开某人）。"
      }
    ],
    "funPrompt": "读完《Persistent》后，试着用自己的话回答课前问题：Why did Elizabeth tell Nigel that she was going to the dentist?"
  },
  {
    "id": 2069,
    "day": 69,
    "lessonNum": "69",
    "week": 3,
    "track": "nce2",
    "title": "L69: But not murder! 并非谋杀！",
    "coverEmoji": "🚙",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 157,
    "intro": "🎯 课前导读问题：Do you think that the writer passed his driving test? Why?\n📌 语法与句型重点：【过去进行时的被动语态 (Past Continuous Tense - Passive Voice)】主语 + was/were + being + 过去分词 — 用于描述过去某个时刻正在发生的被动动作，强调动作的进行性。 例：I was being tested for a driving licence for the third time. (我正在第三次参加驾照考试。) ｜ 【过去完成时的被动语态 (Past Perfect Tense - Passive Voice)】主语 + had + been + 过去分词 — 用于描述在过去某个时间点之前已经完成的被动动作，常与 after 连用。 例：After having been instructed to drive out of town, I began to acquire confidence. (在被指示开出城后，我开始有了信心。)\n💬 核心短语：“be asked to do something”（被要求做某事，表示被动地接受指示或要求）；“drive out of town”（开车出城，表示从市区驶出）；“be sure that”（确信，确信某事会发生或已经发生）",
    "paragraphs": [
      "I was being tested for a driving licence for the third time. I had been asked to drive in heavy traffic and had done so successfully. After having been instructed to drive out of town, I began to acquire confidence. Sure that I had passed, I was almost beginning to enjoy my test.",
      "The examiner must have been pleased with my performance, for he smiled and said. 'Just one more thing, Mr.Eames. Let us suppose that a child suddenly crosses the road in front of you. As soon as I tap on the window, you must stop within five feet.'",
      "I continued driving and after some time, the examiner tapped loudly, Though the sound could be heard clearly, it took me a long time to react. I suddenly pressed the brake pedal and we were both thrown forward. The examiner looked at me sadly. 'Mr.Eames,' he said, in a mournful voice, 'you have just killed that child!'"
    ],
    "vocabulary": [
      {
        "word": "licence",
        "syllables": "licence",
        "phonetic": "/ˈlaɪsns/",
        "definition": "noun. 许可证，执照（通常指官方颁发的许可证书，如驾驶执照 driving licence）",
        "example": "I was being tested for a driving licence for the third time.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "traffic",
        "syllables": "traffic",
        "phonetic": "/ˈtræfɪk/",
        "definition": "noun. 交通，往来车辆（指道路上的车辆和行人流动，heavy traffic 表示交通拥挤）",
        "example": "I had been asked to drive in heavy traffic and had done so successfully.",
        "emoji": "✨",
        "longman": [
          "the vehicles moving along a road or street",
          "the movement of aircraft, ships, or trains from one place to another"
        ]
      },
      {
        "word": "confidence",
        "syllables": "confidence",
        "phonetic": "/ˈkɒnfɪdəns/",
        "definition": "noun. 信心，自信（指对自己能力的信任，acquire confidence 表示获得信心）",
        "example": "After having been instructed to drive out of town, I began to acquire confidence.",
        "emoji": "✨",
        "longman": [
          "the feeling that you can trust someone or something to be good, work well, or produce good results",
          "the belief that you have the ability to do things well or deal with situations successfully"
        ]
      },
      {
        "word": "examiner",
        "syllables": "examiner",
        "phonetic": "/ɪɡˈzæmɪnə/",
        "definition": "noun. 主考官，审查员（指进行考试或检查的人员）",
        "example": "The examiner must have been pleased with my performance, for he smiled and said.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "performance",
        "syllables": "performance",
        "phonetic": "/pəˈfɔːməns/",
        "definition": "noun. 表现，表演（指某人做事或完成任务的方式）",
        "example": "The examiner must have been pleased with my performance, for he smiled and said.",
        "emoji": "✨",
        "longman": [
          "when someone performs a play or a piece of music",
          "how well or badly a person, company etc does a particular job or activity"
        ]
      },
      {
        "word": "instruct",
        "syllables": "instruct",
        "phonetic": "/ɪnˈstrʌkt/",
        "definition": "verb. 指示，命令，教导（指给予明确指示或指导，instructed 为过去式/过去分词）",
        "example": "After having been instructed to drive out of town, I began to acquire confidence.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我正在第三次参加驾照考试。”（主语 + was/were being + 过去分词）？",
        "options": [
          "I was being tested for a driving licence for the third time.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I was being tested for a driving licence for the third time.”（我正在第三次参加驾照考试。），重点掌握句型：主语 + was/were being + 过去分词。"
      },
      {
        "question": "语法要点【过去进行时的被动语态 (Past Continuous Tense - Passive Voice)】：下列哪个例句符合本课语法结构（主语 + was/were + being + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "I was being tested for a driving licence for the third time.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I was being tested for a driving licence for the third time.”（我正在第三次参加驾照考试。）展示了本课重点语法【过去进行时的被动语态 (Past Continuous Tense - Passive Voice)】：表示过去某一时刻正在进行的被动动作，由 was/were + being + 过去分词构成。"
      },
      {
        "question": "What does the word 'licence' (/ˈlaɪsns/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 许可证，执照"
        ],
        "answerIndex": 2,
        "explanation": "单词 'licence' 的意思是：noun. 许可证，执照（通常指官方颁发的许可证书，如驾驶执照 driving licence）。"
      }
    ],
    "funPrompt": "读完《But not murder!》后，试着用自己的话回答课前问题：Do you think that the writer passed his driving test? Why?"
  },
  {
    "id": 2070,
    "day": 70,
    "lessonNum": "70",
    "week": 3,
    "track": "nce2",
    "title": "L70: Red for danger 危险的红色",
    "coverEmoji": "🐂",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 157,
    "intro": "🎯 课前导读问题：How was the drunk removed from the ring?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing + 时间/动作 — 用于描述过去正在发生的动作，或作为另一动作的背景。 例：The bull was busy with the matador at the time. (当时公牛正忙着对付斗牛士。) ｜ 【连词but与however表示转折】句子1 + but + 句子2 / 句子1, however, + 句子2 — 用于连接两个意思相反或相对立的分句，表示转折关系。 例：The crowd began to shout, but the drunk was unaware of the danger. (观众开始叫喊，但醉汉没有意识到危险。)\n💬 核心短语：“wander into”（漫步进入；不知不觉走进）；“be unaware of”（不知道；未察觉）；“catch sight of”（看见；发现）",
    "paragraphs": [
      "During a bullfight, a drunk suddenly wandered into the middle of the ring. The crowd began to shout, but the drunk was unaware of the danger. The bull was busy with the matador at the time, but it suddenly caught sight of the drunk who was shouting rude remarks and waving a red cap. Apparently sensitive to criticism, the bull forgot all about the matador and charged at the drunk.",
      "The crowd suddenly grew quiet. The drunk, however, seemed quite sure of himself. When the bull got close to him, he clumsily stepped aside to let it pass. The crowd broke into cheers and the drunk bowed.",
      "By this time, however, three men had come into the ring and they quickly dragged the drunk to safety. Even the bull seemed to feel sorry for him, for it looked on sympathetically until the drunk was out of the way before once more turning its attention to the matador."
    ],
    "vocabulary": [
      {
        "word": "bullfight",
        "syllables": "bullfight",
        "phonetic": "/ˈbʊlfaɪt/",
        "definition": "noun. 斗牛（指在西班牙等国家流行的传统竞技活动，公牛与斗牛士之间的较量）",
        "example": "During a bullfight, a drunk suddenly wandered into the middle of the ring.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "drunk",
        "syllables": "drunk",
        "phonetic": "/drʌŋk/",
        "definition": "noun. 醉汉，醉酒的人（指喝醉酒的人，相当于drunk person）",
        "example": "During a bullfight, a drunk suddenly wandered into the middle of the ring.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "wander",
        "syllables": "wander",
        "phonetic": "/ˈwɒndə(r)/",
        "definition": "verb. 漫步，徘徊；迷路（指漫无目的地走动或走失，常与into/around连用）",
        "example": "During a bullfight, a drunk suddenly wandered into the middle of the ring.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "matador",
        "syllables": "matador",
        "phonetic": "/ˈmætədɔː(r)/",
        "definition": "noun. 斗牛士（指在斗牛中负责刺杀公牛的专业人员）",
        "example": "The bull was busy with the matador at the time, but it suddenly caught sight of the drunk who was shouting rude remarks and waving a red cap.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "apparently",
        "syllables": "apparently",
        "phonetic": "/əˈpærəntli/",
        "definition": "adverb. 显然地；表面上地（用于表示从表面看或根据情况判断，常修饰形容词或整个句子）",
        "example": "Apparently sensitive to criticism, the bull forgot all about the matador and charged at the drunk.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "sensitive",
        "syllables": "sensitive",
        "phonetic": "/ˈsensətɪv/",
        "definition": "adjective. 敏感的；灵敏的（指对某事物敏感或容易感受，常与to连用表示对什么敏感）",
        "example": "Apparently sensitive to criticism, the bull forgot all about the matador and charged at the drunk.",
        "emoji": "✨",
        "longman": [
          "able to understand other people’s feelings and problems",
          "easily upset or offended by events or things that people say"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“当公牛靠近他时，他笨拙地闪到一边让它过去。”（When + 主语 + 过去时, 主语 + 过去时）？",
        "options": [
          "When the bull got close to him, he clumsily stepped aside to let it pass.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“When the bull got close to him, he clumsily stepped aside to let it pass.”（当公牛靠近他时，他笨拙地闪到一边让它过去。），重点掌握句型：When + 主语 + 过去时, 主语 + 过去时。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing + 时间/动作）？",
        "options": [
          "He have go to school tomorrow.",
          "The bull was busy with the matador at the time.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The bull was busy with the matador at the time.”（当时公牛正忙着对付斗牛士。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示过去某个时刻正在进行的动作，由was/were + 动词-ing构成。"
      },
      {
        "question": "What does the word 'bullfight' (/ˈbʊlfaɪt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 斗牛"
        ],
        "answerIndex": 2,
        "explanation": "单词 'bullfight' 的意思是：noun. 斗牛（指在西班牙等国家流行的传统竞技活动，公牛与斗牛士之间的较量）。"
      }
    ],
    "funPrompt": "读完《Red for danger》后，试着用自己的话回答课前问题：How was the drunk removed from the ring?"
  },
  {
    "id": 2071,
    "day": 71,
    "lessonNum": "71",
    "week": 3,
    "track": "nce2",
    "title": "L71: A famous clock 一个著名的大钟",
    "coverEmoji": "🕰️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 163,
    "intro": "🎯 课前导读问题：Has Big Ben ever gone wrong?\n📌 语法与句型重点：【现在完成时 (Present Perfect Tense)】主语 + have/has + 过去分词 — 用于询问某事是否曾经发生过，强调与现在的联系。 例：Has Big Ben ever gone wrong? (大本钟曾经出过故障吗？) ｜ 【与现在事实相反的虚拟语气 (Conditional 2)】If + 主语 + 过去式..., 主语 + would + 动词原形... — 用于表达与事实相反的假设情况。 例：If the Houses of Parliament had not been burned down, the great clock would never have been erected. (如果议会大厦没有被烧毁，大本钟就永远不会建成。)\n💬 核心短语：“take its name from”（得名于；以...命名）；“be responsible for”（对...负责；是...的原因）；“not only...but (also)”（不仅...而且...）",
    "paragraphs": [
      "When you visit London, one of the first things you will see is Big Ben, the famous clock which can be heard all over the world on the B. B. C. If the Houses of Parliament had not been burned down in 1834, the great clock would never have been erected.",
      "Big Ben takes its name from Sir Benjamin Hall who was responsible for the making of the clock when the new Houses of Parliament were being built. It is not only of immense size, but is extremely accurate as well. Officials from Greenwich Observatory have the clock checked twice a day. On the B.",
      "B. C. you can hear the clock when it is actually striking because microphones are connected to the clock tower. Big Ben has rarely gone wrong.",
      "Once, however, it failed to give the correct time. A painter who had been working on the tower hung a pot of paint on one of the hands and slowed it down!"
    ],
    "vocabulary": [
      {
        "word": "famous",
        "syllables": "famous",
        "phonetic": "/ˈfeɪməs/",
        "definition": "adj. 著名的（用于描述广为人知的人或事物）",
        "example": "When you visit London, one of the first things you will see is Big Ben, the famous clock which can be heard all over the world on the B.",
        "emoji": "✨",
        "longman": [
          "known about by many people in many places",
          "people who are famous"
        ]
      },
      {
        "word": "erect",
        "syllables": "erect",
        "phonetic": "/ɪˈrekt/",
        "definition": "verb. 建造；竖立（用于表示建造或竖立建筑、雕像等）",
        "example": "If the Houses of Parliament had not been burned down in 1834, the great clock would never have been erected.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "responsible",
        "syllables": "responsible",
        "phonetic": "/rɪˈspɒnsəbl/",
        "definition": "adj. 负责任的；作为...的原因（be responsible for表示对某事负责）",
        "example": "Big Ben takes its name from Sir Benjamin Hall who was responsible for the making of the clock when the new Houses of Parliament were being built.",
        "emoji": "✨",
        "longman": [
          "if someone is responsible for an accident, mistake, crime etc, it is their fault or they can be blamed",
          "having a duty to be in charge of or to look after someone or something"
        ]
      },
      {
        "word": "immense",
        "syllables": "immense",
        "phonetic": "/ɪˈmens/",
        "definition": "adj. 巨大的；极广大的（用于形容尺寸或规模非常大）",
        "example": "It is not only of immense size, but is extremely accurate as well.",
        "emoji": "✨",
        "longman": [
          "extremely large"
        ]
      },
      {
        "word": "accurate",
        "syllables": "accurate",
        "phonetic": "/ˈækjərət/",
        "definition": "adj. 准确的；精确的（用于描述正确无误的测量或信息）",
        "example": "It is not only of immense size, but is extremely accurate as well.",
        "emoji": "✨",
        "longman": [
          "correct and true in every detail",
          "measured or calculated correctly"
        ]
      },
      {
        "word": "official",
        "syllables": "official",
        "phonetic": "/əˈfɪʃl/",
        "definition": "noun. 官员；公务员（用于指政府或机构的工作人员）",
        "example": "Officials from Greenwich Observatory have the clock checked twice a day.",
        "emoji": "✨",
        "longman": [
          "someone who is in a position of authority in an organization",
          "approved of or done by someone in authority, especially the government"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“大本钟曾经出过故障吗？”（Has + 主语 + ever + 过去分词?）？",
        "options": [
          "Has Big Ben ever gone wrong?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Has Big Ben ever gone wrong?”（大本钟曾经出过故障吗？），重点掌握句型：Has + 主语 + ever + 过去分词?。"
      },
      {
        "question": "语法要点【现在完成时 (Present Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + have/has + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "Has Big Ben ever gone wrong?",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Has Big Ben ever gone wrong?”（大本钟曾经出过故障吗？）展示了本课重点语法【现在完成时 (Present Perfect Tense)】：表示过去发生的动作或状态持续到现在，或对现在造成的影响。常与already, yet, ever, never, just等时间状语连用。。"
      },
      {
        "question": "What does the word 'famous' (/ˈfeɪməs/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adj. 著名的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'famous' 的意思是：adj. 著名的（用于描述广为人知的人或事物）。"
      }
    ],
    "funPrompt": "读完《A famous clock》后，试着用自己的话回答课前问题：Has Big Ben ever gone wrong?"
  },
  {
    "id": 2072,
    "day": 72,
    "lessonNum": "72",
    "week": 3,
    "track": "nce2",
    "title": "L72: A car called bluebird “蓝鸟”汽车",
    "coverEmoji": "🏎️",
    "category": "新概念二册 • Unit 3 (Lessons 49–72)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 3",
    "readingTime": "4 mins",
    "wordCount": 167,
    "intro": "🎯 课前导读问题：What mistake was made?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述两个发生在过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。 例：He was disappointed because his average speed had been 299 miles per hour. (他很失望，因为他的平均速度是299英里/小时。) ｜ 【 although 引导的让步状语从句】Although + 主语 + 动词(从句), 主语 + 动词(主句) — although引导的从句放在句首，修饰主句的转折关系。注意：although和but不能同时使用。 例：Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car. (虽然坎贝尔达到了每小时304英里以上的速度，但他很难控制汽车。)\n💬 核心短语：“set up a new world record”（创造新的世界纪录）；“have great difficulty in doing something”（在做某事方面有很大困难）；“be disappointed to learn”（失望地得知）",
    "paragraphs": [
      "The great racing driver, Sir Malcolm Campbell, was the first man to drive at over 300 miles per hour. He set up a new world record in September 1935 at Bonneville Salt Flats, Utah. Bluebird, the car he was driving, had been specially built for him. It was over 30 feet in length and had a 2,500-horsepower engine.",
      "Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run. After his attempt, Campbell was disappointed to learn that his average speed had been 299 miles per hour. However, a few days later, he was told that a mistake had been made. His average speed had been 301 miles per hour.",
      "Since that time, racing drivers have reached speeds over 600 miles an hour. Following in his father's footsteps many years later, Sir Malcolm's son, Donald, also set up a world record. Like his father, he was driving a car called Bluebird."
    ],
    "vocabulary": [
      {
        "word": "racing",
        "syllables": "racing",
        "phonetic": "/ˈreɪsɪŋ/",
        "definition": "noun. 赛车；竞赛（指速度竞赛活动）；adjective. 赛车的（修饰名词，如racing driver）",
        "example": "The great racing driver, Sir Malcolm Campbell, was the first man to drive at over 300 miles per hour.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "record",
        "syllables": "record",
        "phonetic": "/ˈrekɔːd/",
        "definition": "noun. 纪录；记录（指最佳成绩或官方记载）；verb. 记录；记载（指把信息写下来或录制）",
        "example": "He set up a new world record in September 1935 at Bonneville Salt Flats, Utah.",
        "emoji": "✨",
        "longman": [
          "information about something that is written down or stored on computer, film etc so that it can be looked at in the future",
          "the fastest speed , longest distance , highest or lowest level etc that has ever been achieved or reached, especially in sport",
          "a round flat piece of plastic with a hole in the middle that music and sound are stored on"
        ]
      },
      {
        "word": "speed",
        "syllables": "speed",
        "phonetic": "/spiːd/",
        "definition": "noun. 速度（指物体运动的快慢程度）",
        "example": "Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run.",
        "emoji": "✨",
        "longman": [
          "the rate at which something moves or travels",
          "the rate at which something happens or is done"
        ]
      },
      {
        "word": "specially",
        "syllables": "specially",
        "phonetic": "/ˈspeʃəli/",
        "definition": "adverb. 专门地；特别地（表示为特定目的而做）",
        "example": "Bluebird, the car he was driving, had been specially built for him.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "engine",
        "syllables": "engine",
        "phonetic": "/ˈendʒɪn/",
        "definition": "noun. 引擎；发动机（指提供动力的机械装置）",
        "example": "It was over 30 feet in length and had a 2,500-horsepower engine.",
        "emoji": "✨",
        "longman": [
          "the part of a vehicle that produces power to make it move",
          "a vehicle that pulls a railway train"
        ]
      },
      {
        "word": "difficulty",
        "syllables": "difficulty",
        "phonetic": "/ˈdɪfɪkəlti/",
        "definition": "noun. 困难；难题（指做某事时遇到的障碍）",
        "example": "Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“坎贝尔失望地得知他的平均速度是299英里/小时。”（主语 + was/were + 形容词 + to do something）？",
        "options": [
          "Campbell was disappointed to learn that his average speed had been 299 miles per hour.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Campbell was disappointed to learn that his average speed had been 299 miles per hour.”（坎贝尔失望地得知他的平均速度是299英里/小时。），重点掌握句型：主语 + was/were + 形容词 + to do something。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "He was disappointed because his average speed had been 299 miles per hour.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He was disappointed because his average speed had been 299 miles per hour.”（他很失望，因为他的平均速度是299英里/小时。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作，或称为\"过去的过去\"。"
      },
      {
        "question": "What does the word 'racing' (/ˈreɪsɪŋ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 赛车；竞赛"
        ],
        "answerIndex": 2,
        "explanation": "单词 'racing' 的意思是：noun. 赛车；竞赛（指速度竞赛活动）。"
      }
    ],
    "funPrompt": "读完《A car called bluebird》后，试着用自己的话回答课前问题：What mistake was made?"
  },
  {
    "id": 2073,
    "day": 73,
    "lessonNum": "73",
    "week": 4,
    "track": "nce2",
    "title": "L73: The record-holder 纪录保持着",
    "coverEmoji": "🏆",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 182,
    "intro": "🎯 课前导读问题：Did the boy go where he wanted to?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述发生在另一个过去动作之前的动作，常与when, after, before, by等连用。 例：He discovered that the boat had travelled to Calais. (他发现船已经航行到加来了。) ｜ 【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去某个时刻正在发生的事情，或表示背景动作。 例：While playing truant, he travelled 1,600 miles. (在逃学期间，他旅行了1600英里。)\n💬 核心短语：“play truant”（指学生逃学、旷课的行为）；“put to shame”（使...相形见绌，使...自愧不如）；“in the meantime”（与此同时，在这段期间）",
    "paragraphs": [
      "Children who play truant from school are unimaginative. A quiet day's fishing, or eight hours in a cinema seeing the same film over and over again, is usually as far as they get. They have all been put to shame by a boy who, while playing truant, travelled 1,600 miles. He hitchhiked to Dover and, towards evening, went into a boat to find somewhere to sleep.",
      "When he woke up next morning, he discovered that the boat had, in the meantime, travelled to Calais. No one noticed the boy as he crept off. From there, he hitchhiked to Paris in a lorry. The driver gave him a few biscuits and a cup of coffee and left him just outside the city.",
      "The next car the boy stopped did not take him into the centre of Paris as he hoped it would, but to Perpignan on the French-Spanish border. There he was picked up by a policeman and sent back to England by the local authorities. He has surely set up a record for the thousands of children who dream of evading school."
    ],
    "vocabulary": [
      {
        "word": "truant",
        "syllables": "truant",
        "phonetic": "/ˈtruːənt/",
        "definition": "noun. 逃学者，旷课者（指逃学或旷课的学生）；verb. 逃学，旷课（作为动词表示逃学的行为）",
        "example": "Children who play truant from school are unimaginative.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "unimaginative",
        "syllables": "unimaginative",
        "phonetic": "/ˌʌnɪˈmædʒɪnətɪv/",
        "definition": "adjective. 缺乏想象力的，呆板的（形容人缺乏创意或想象力）",
        "example": "Children who play truant from school are unimaginative.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "hitchhike",
        "syllables": "hitchhike",
        "phonetic": "/ˈhɪtʃhaɪk/",
        "definition": "verb. 搭便车旅行（通过免费搭乘过路车辆旅行）",
        "example": "He hitchhiked to Dover and, towards evening, went into a boat to find somewhere to sleep.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "meanwhile",
        "syllables": "meanwhile",
        "phonetic": "/ˈmiːnwaɪl/",
        "definition": "adverb. 与此同时（用于描述同时发生的两件事）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "while something else is happening",
          "in the period of time between two events"
        ]
      },
      {
        "word": "creep",
        "syllables": "creep",
        "phonetic": "/kriːp/",
        "definition": "verb. 悄悄地移动，爬行（指无声无息地移动，通常为不引起注意）",
        "example": "",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "lorry",
        "syllables": "lorry",
        "phonetic": "/ˈlɒri/",
        "definition": "noun. 卡车，货车（英式）（美国英语用truck）",
        "example": "From there, he hitchhiked to Paris in a lorry.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“他们都为一个逃学旅行了1600英里的男孩感到羞耻。”（主语 + have/has + been + 动词-ing + 时间段）？",
        "options": [
          "They have all been put to shame by a boy who, while playing truant, travelled 1,600 miles.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“They have all been put to shame by a boy who, while playing truant, travelled 1,600 miles.”（他们都为一个逃学旅行了1600英里的男孩感到羞耻。），重点掌握句型：主语 + have/has + been + 动词-ing + 时间段。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "He discovered that the boat had travelled to Calais.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“He discovered that the boat had travelled to Calais.”（他发现船已经航行到加来了。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作，强调'过去的过去'。"
      },
      {
        "question": "What does the word 'truant' (/ˈtruːənt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 逃学者，旷课者"
        ],
        "answerIndex": 2,
        "explanation": "单词 'truant' 的意思是：noun. 逃学者，旷课者（指逃学或旷课的学生）。"
      }
    ],
    "funPrompt": "读完《The record-holder》后，试着用自己的话回答课前问题：Did the boy go where he wanted to?"
  },
  {
    "id": 2074,
    "day": 74,
    "lessonNum": "74",
    "week": 4,
    "track": "nce2",
    "title": "L74: Out of the limelight 舞台之外",
    "coverEmoji": "🏕️",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 190,
    "intro": "🎯 课前导读问题：Why was their disguise 'too perfect'?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】was/were + 动词-ing — 用于描述过去正在进行的动作，常与when/while等连词连用。 例：An ancient bus stopped by a dry river bed. (一辆古旧的公交车停在干涸的河床边。) ｜ 【过去完成时 (Past Perfect Tense)】had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。 例：When they had all made themselves comfortable, a stranger appeared. (当他们都安顿好之后，一个陌生人出现了。)\n💬 核心短语：“get off”（下车；从...下来）；“in case”（以防万一；以免）；“get out of here”（离开这里；滚出去）",
    "paragraphs": [
      "An ancient bus stopped by a dry river bed and a party of famous actors and actresses got off. Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them. But as they soon discovered, disguises can sometimes be too perfect.",
      "'This is a wonderful place for a picnic,' said Gloria Gleam.",
      "'It couldn't be better, Gloria,' Brinksley Meers agreed. 'No newspaper men, no film fans! Why don't we come more often?'",
      "Meanwhile, two other actors, Rockwall Slinger and Merlin Greeves, had carried two large food baskets to a shady spot under some trees. When they had all made themselves comfortable, a stranger appeared. He looked very angry. 'Now you get out of here, all of you!'",
      "he shouted. 'I'm sheriff here. Do you see that notice? It says \"No Camping\" -- in case you can't read!'",
      "'Look, sheriff,' said Rockwall, 'don't be too hard on us. I'm Rockwall Slinger and this is Merlin Greeves.'",
      "'Oh, is it?' said the sheriff with a sneer. 'Well, I'm Brinksley Meers, and my other name is Gloria Gleam. Now you get out of here fast!'"
    ],
    "vocabulary": [
      {
        "word": "disguise",
        "syllables": "disguise",
        "phonetic": "/dɪsˈɡaɪz/",
        "definition": "noun. 伪装；伪装物（指为了不让人认出而做的装扮）；verb. 伪装；掩饰（指装扮成别人以隐藏身份）",
        "example": "But as they soon discovered, disguises can sometimes be too perfect.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "ancient",
        "syllables": "ancient",
        "phonetic": "/ˈeɪnʃənt/",
        "definition": "adjective. 古老的；古代的（形容非常老旧的事物）",
        "example": "An ancient bus stopped by a dry river bed and a party of famous actors and actresses got off.",
        "emoji": "✨",
        "longman": [
          "belonging to a time long ago in history, especially thousands of years ago",
          "having existed for a very long time"
        ]
      },
      {
        "word": "precaution",
        "syllables": "precaution",
        "phonetic": "/prɪˈkɔːʃən/",
        "definition": "noun. 预防措施；防备（为防止危险或问题发生而采取的措施）",
        "example": "Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "recognize",
        "syllables": "recognize",
        "phonetic": "/ˈrekəɡnaɪz/",
        "definition": "verb. 认出；识别（指认出一个之前见过的人或事物）",
        "example": "Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them.",
        "emoji": "✨",
        "longman": [
          "to know who someone is or what something is, because you have seen, heard, experienced, or learned about them in the past",
          "to officially accept that an organization, government, document etc has legal or official authority"
        ]
      },
      {
        "word": "picnic",
        "syllables": "picnic",
        "phonetic": "/ˈpɪknɪk/",
        "definition": "noun. 野餐（在户外吃的便餐）",
        "example": "'This is a wonderful place for a picnic,' said Gloria Gleam.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "shady",
        "syllables": "shady",
        "phonetic": "/ˈʃeɪdi/",
        "definition": "adjective. 成荫的；阴凉的（有树荫遮挡阳光的地方）",
        "example": "Meanwhile, two other actors, Rockwall Slinger and Merlin Greeves, had carried two large food baskets to a shady spot under some trees.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“这是野餐的好地方。”（This is a wonderful place for...）？",
        "options": [
          "This is a wonderful place for a picnic.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“This is a wonderful place for a picnic.”（这是野餐的好地方。），重点掌握句型：This is a wonderful place for...。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "An ancient bus stopped by a dry river bed.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“An ancient bus stopped by a dry river bed.”（一辆古旧的公交车停在干涸的河床边。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'disguise' (/dɪsˈɡaɪz/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 伪装；伪装物"
        ],
        "answerIndex": 2,
        "explanation": "单词 'disguise' 的意思是：noun. 伪装；伪装物（指为了不让人认出而做的装扮）。"
      }
    ],
    "funPrompt": "读完《Out of the limelight》后，试着用自己的话回答课前问题：Why was their disguise 'too perfect'?"
  },
  {
    "id": 2075,
    "day": 75,
    "lessonNum": "75",
    "week": 4,
    "track": "nce2",
    "title": "L75: SOS 呼救信号",
    "coverEmoji": "🚁",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "4 mins",
    "wordCount": 179,
    "intro": "🎯 课前导读问题：How did the woman get help?\n📌 语法与句型重点：【一般过去时 (Past Simple Tense)】主语 + 动词过去式 — 用于叙述过去发生的事情，描述一系列按时间顺序发生的动作。 例：The plane crashed in the mountains. (飞机在山区坠毁。) ｜ 【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述过去正在发生的动作，常与过去进行时连用或用于设置故事背景。 例：She was turning a suitcase into a bed when it grew dark. (天黑时她正在把手提箱变成床。)\n💬 核心短语：“fly off course”（表示偏离航线）；“in the middle of winter”（表示在隆冬时节）；“turn into”（表示把...变成...）",
    "paragraphs": [
      "When a light passenger plane flew off course some time ago, it crashed in the mountains and its pilot was killed. The only passengers, a young woman and her two baby daughters, were unhurt. It was the middle of winter. Snow lay thick on the ground.",
      "The woman knew that the nearest village was miles away. When it grew dark, she turned a suitcase into a bed and put the children inside it, covering them with all the clothes she could find. During the night, it got terribly cold. The woman kept as near as she could to the children and even tried to get into the case herself, but it was too small.",
      "Early next morning, she heard planes passing overhead and wondered how she could send a signal. Then she had an idea. She stamped out the letters 'SOS' in the snow. Fortunately, a pilot saw the signal and sent a message by radio to the nearest town.",
      "It was not long before a helicopter arrived on the scene to rescue the survivors of the plane crash."
    ],
    "vocabulary": [
      {
        "word": "passenger",
        "syllables": "passenger",
        "phonetic": "/ˈpæsɪndʒə/",
        "definition": "noun. 乘客，旅客（指乘坐交通工具的人）",
        "example": "When a light passenger plane flew off course some time ago, it crashed in the mountains and its pilot was killed.",
        "emoji": "✨",
        "longman": [
          "someone who is traveling in a vehicle, plane, boat etc, but is not driving it or working on it",
          "someone in a group who does not do their share of the group’s work"
        ]
      },
      {
        "word": "crash",
        "syllables": "crash",
        "phonetic": "/kræʃ/",
        "definition": "verb. 坠毁，撞毁（指飞机、汽车等猛烈撞击而损坏）；noun. 坠毁，撞击（指事故中交通工具的损坏）",
        "example": "When a light passenger plane flew off course some time ago, it crashed in the mountains and its pilot was killed.",
        "emoji": "✨",
        "longman": [
          "to have an accident in a car, plane etc by violently hitting something else",
          "to hit something or someone extremely hard while moving, in a way that causes a lot of damage or makes a lot of noise"
        ]
      },
      {
        "word": "pilot",
        "syllables": "pilot",
        "phonetic": "/ˈpaɪlət/",
        "definition": "noun. 飞行员（指驾驶飞机的人）",
        "example": "When a light passenger plane flew off course some time ago, it crashed in the mountains and its pilot was killed.",
        "emoji": "✨",
        "longman": [
          "someone who operates the controls of an aircraft or spacecraft",
          "someone with a special knowledge of a particular area of water, who is employed to guide ships across it"
        ]
      },
      {
        "word": "unhurt",
        "syllables": "unhurt",
        "phonetic": "/ʌnˈhɜːt/",
        "definition": "adjective. 未受伤的（表示没有受到任何伤害）",
        "example": "The only passengers, a young woman and her two baby daughters, were unhurt.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "thick",
        "syllables": "thick",
        "phonetic": "/θɪk/",
        "definition": "adjective. 厚的，浓的（形容物体粗大或密集）",
        "example": "Snow lay thick on the ground.",
        "emoji": "✨",
        "longman": [
          "if something is thick, there is a large distance or a larger distance than usual between its two opposite surfaces or sides",
          "measuring a particular distance between two opposite sides or surfaces of something"
        ]
      },
      {
        "word": "suitcase",
        "syllables": "suitcase",
        "phonetic": "/ˈsuːtkeɪs/",
        "definition": "noun. 手提箱，衣箱（指旅行用的大箱子）",
        "example": "When it grew dark, she turned a suitcase into a bed and put the children inside it, covering them with all the clothes she could find.",
        "emoji": "✨",
        "longman": [
          "a large case with a handle, used for carrying clothes and possessions when you travel"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“当夜幕降临时，她把手提箱变成了床。”（When + 过去时态, 主语 + 过去时态）？",
        "options": [
          "When it grew dark, she turned a suitcase into a bed.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“When it grew dark, she turned a suitcase into a bed.”（当夜幕降临时，她把手提箱变成了床。），重点掌握句型：When + 过去时态, 主语 + 过去时态。"
      },
      {
        "question": "语法要点【一般过去时 (Past Simple Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "The plane crashed in the mountains.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The plane crashed in the mountains.”（飞机在山区坠毁。）展示了本课重点语法【一般过去时 (Past Simple Tense)】：表示在过去某个特定时间发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'passenger' (/ˈpæsɪndʒə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 乘客，旅客"
        ],
        "answerIndex": 2,
        "explanation": "单词 'passenger' 的意思是：noun. 乘客，旅客（指乘坐交通工具的人）。"
      }
    ],
    "funPrompt": "读完《SOS》后，试着用自己的话回答课前问题：How did the woman get help?"
  },
  {
    "id": 2076,
    "day": 76,
    "lessonNum": "76",
    "week": 4,
    "track": "nce2",
    "title": "L76: April Fools' Day 愚人节",
    "coverEmoji": "🎥",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 186,
    "intro": "🎯 课前导读问题：What was the joke?\n📌 语法与句型重点：【现在完成进行时 (Present Perfect Continuous)】主语 + have/has + been + 动词-ing — 用于描述持续性的动作，常与 for + 时间段、since + 时间点、all + 时间段等时间状语连用。。 例：They have been expecting a splendid crop this year. (他们一直期待着今年有个好收成。) ｜ 【时间状语 since 和 for 的用法】since + 过去时间点/过去发生的动作；for + 一段时间 — since 后接具体时间点或从句，for 后接表示时间长度的词。。 例：Macaroni has been grown in this area for over six hundred years. (这个地区种植通心粉已有六百多年。)\n💬 核心短语：“going over to”（转向；切换到，指新闻报道中切换到另一个地点或话题）；“day and night”（日夜不停地；夜以继日，形容持续不断的工作或活动）；“between them”（他们两个一起；总共，用于指两个人共同完成某事）",
    "paragraphs": [
      "'To end our special news bulletin,' said the voice of the television announcer, 'we're going over to the macaroni fields of Calabria. Macaroni has been grown in this area for over six hundred years. Two of the leading growers, Giuseppe Moldova and Riccardo Brabante, tell me that they have been expecting a splendid crop this year and harvesting has begun earlier than usual. Here you can see two workers who, between them, have just finished cutting three cartloads of golden brown macaroni stalks.",
      "The whole village has been working day and night gathering and threshing this year's crop before the September rains. On the right, you can see Mrs. Brabante herself. She has been helping her husband for thirty years now. Mrs. Brabante is talking to the manager of the local factory where the crop is processed.",
      "This last scene shows you what will happen at the end of the harvest: the famous Calabrian macaroni-eating competition! Signor Fratelli, the present champion, has won it every year since 1991. And that ends our special bulletin for today, Thursday, April lst. We're now going back to the studio.'"
    ],
    "vocabulary": [
      {
        "word": "bulletin",
        "syllables": "bulletin",
        "phonetic": "/ˈbʊlətɪn/",
        "definition": "noun. 新闻简报；公告（指官方的新闻报道或公告信息）",
        "example": "'To end our special news bulletin,' said the voice of the television announcer, 'we're going over to the macaroni fields of Calabria.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "announcer",
        "syllables": "announcer",
        "phonetic": "/əˈnaʊnsə(r)/",
        "definition": "noun. 播音员；宣告者（指在电视或广播中播报新闻的人）",
        "example": "'To end our special news bulletin,' said the voice of the television announcer, 'we're going over to the macaroni fields of Calabria.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "macaroni",
        "syllables": "macaroni",
        "phonetic": "/ˌmækəˈrəʊni/",
        "definition": "noun. 通心粉；意大利面食（指意大利通心粉，是一种意大利面食）",
        "example": "'To end our special news bulletin,' said the voice of the television announcer, 'we're going over to the macaroni fields of Calabria.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "grower",
        "syllables": "grower",
        "phonetic": "/ˈɡrəʊə(r)/",
        "definition": "noun. 种植者；栽培者（指从事农作物种植的人）",
        "example": "Two of the leading growers, Giuseppe Moldova and Riccardo Brabante, tell me that they have been expecting a splendid crop this year and harvesting has begun earlier than usual.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "splendid",
        "syllables": "splendid",
        "phonetic": "/ˈsplendɪd/",
        "definition": "adj. 极好的；壮丽的；辉煌的（用于形容质量、状况或外观非常好）",
        "example": "Two of the leading growers, Giuseppe Moldova and Riccardo Brabante, tell me that they have been expecting a splendid crop this year and harvesting has begun earlier than usual.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "harvest",
        "syllables": "harvest",
        "phonetic": "/ˈhɑːvɪst/",
        "definition": "noun. 收获；收割；收成（指农作物的收割季节或收获量）；verb. 收获；收割（指收割农作物的动作）",
        "example": "Two of the leading growers, Giuseppe Moldova and Riccardo Brabante, tell me that they have been expecting a splendid crop this year and harvesting has begun earlier than usual.",
        "emoji": "✨",
        "longman": [
          "the time when crops are gathered from the fields, or the act of gathering them",
          "the crops that have been gathered, or the amount and quality of the crops gathered"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我们现在转向意大利卡拉布里亚的通心粉田地。”（We're going over to + 地点/话题）？",
        "options": [
          "We're going over to the macaroni fields of Calabria.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“We're going over to the macaroni fields of Calabria.”（我们现在转向意大利卡拉布里亚的通心粉田地。），重点掌握句型：We're going over to + 地点/话题。"
      },
      {
        "question": "语法要点【现在完成进行时 (Present Perfect Continuous)】：下列哪个例句符合本课语法结构（主语 + have/has + been + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "They have been expecting a splendid crop this year.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“They have been expecting a splendid crop this year.”（他们一直期待着今年有个好收成。）展示了本课重点语法【现在完成进行时 (Present Perfect Continuous)】：表示一个动作从过去开始，一直持续到现在，并且可能继续下去。强调动作的持续性。。"
      },
      {
        "question": "What does the word 'bulletin' (/ˈbʊlətɪn/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 新闻简报；公告"
        ],
        "answerIndex": 2,
        "explanation": "单词 'bulletin' 的意思是：noun. 新闻简报；公告（指官方的新闻报道或公告信息）。"
      }
    ],
    "funPrompt": "读完《April Fools' Day》后，试着用自己的话回答课前问题：What was the joke?"
  },
  {
    "id": 2077,
    "day": 77,
    "lessonNum": "77",
    "week": 4,
    "track": "nce2",
    "title": "L77: A successful operation 一例成功的手术",
    "coverEmoji": "⏳",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "4 mins",
    "wordCount": 176,
    "intro": "🎯 课前导读问题：Did the doctors find out how the woman died?\n📌 语法与句型重点：【现在完成时（Present Perfect Tense）】主语 + have/has + 过去分词 — 用于描述过去发生但与现在相关的事情，或表示一个从过去开始并可能继续下去的动作。have been + doing表示现在完成进行时，强调动作的持续性。。 例：The doctors have not yet decided how the woman died. (医生们还没有决定这名女子是如何死的。) ｜ 【过去分词作定语（Past Participle as Adjective）】名词 + 过去分词 或 过去分词 + 名词 — 用于描述名词的状态或已经完成的动作。taken是take的过去分词，这里作后置定语修饰plates。。 例：There were strange marks on the X-ray plates taken of the mummy. (在给木乃伊拍摄的X光片上有奇怪的痕迹。)\n💬 核心短语：“find out”（找出，查明真相）；“die of”（死于（某种疾病或原因））；“last for”（持续（一段时间））",
    "paragraphs": [
      "The mummy of an Egyptian woman who died in 800 B. C. has just had an operation. The mummy is that of Shepenmut who was once a singer in the Temple of Thebes.",
      "As there were strange marks on the X-ray plates taken of the mummy, doctors have been trying to find out whether the woman died of a rare disease. The only way to do this was to operate. The operation, which lasted for over four hours, proved to be very difficult because of the hard resin which covered the skin. The doctors removed a section of the mummy and sent it to a laboratory.",
      "They also found something which the X-ray plates did not show: a small wax figure of the god Duamutef. This god which has the head of a cow was normally placed inside a mummy. The doctors have not yet decided how the woman died. They feared that the mummy would fall to pieces when they cut it open, but fortunately this has not happened.",
      "The mummy successfully survived the operation."
    ],
    "vocabulary": [
      {
        "word": "mummy",
        "syllables": "mummy",
        "phonetic": "/ˈmʌmi/",
        "definition": "noun. 木乃伊，干尸（指经过防腐处理的古代尸体，尤指古埃及人的干尸）",
        "example": "The mummy of an Egyptian woman who died in 800 B.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "operation",
        "syllables": "operation",
        "phonetic": "/ˌɒpəˈreɪʃn/",
        "definition": "noun. 手术；操作（指医生为治疗或检查而进行的手术操作）",
        "example": "has just had an operation.",
        "emoji": "✨",
        "longman": [
          "the process of cutting into someone’s body to repair or remove a part that is damaged",
          "a business, company, or organization"
        ]
      },
      {
        "word": "resin",
        "syllables": "resin",
        "phonetic": "/ˈrezɪn/",
        "definition": "noun. 树脂，松香（一种从植物或合成得到的黏稠物质，这里指包裹木乃伊的硬树脂）",
        "example": "The operation, which lasted for over four hours, proved to be very difficult because of the hard resin which covered the skin.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "laboratory",
        "syllables": "laboratory",
        "phonetic": "/ləˈbɒrətri/",
        "definition": "noun. 实验室，研究室（进行科学实验或研究的地方，常简写为lab）",
        "example": "The doctors removed a section of the mummy and sent it to a laboratory.",
        "emoji": "✨",
        "longman": [
          "a special room or building in which a scientist does tests or prepares substances"
        ]
      },
      {
        "word": "figure",
        "syllables": "figure",
        "phonetic": "/ˈfɪɡə(r)/",
        "definition": "noun. 塑像；数字；人物（指人像或塑像，如wax figure表示蜡像）",
        "example": "They also found something which the X-ray plates did not show: a small wax figure of the god Duamutef.",
        "emoji": "✨",
        "longman": [
          "a number representing an amount, especially an official number",
          "a number from 0 to 9, written as a character rather than a word",
          "a particular amount of money"
        ]
      },
      {
        "word": "survive",
        "syllables": "survive",
        "phonetic": "/səˈvaɪv/",
        "definition": "verb. 存活，幸存；活下来（指在危险或困难中存活下来，或经历了某事后仍然存在）",
        "example": "The mummy successfully survived the operation.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“这具木乃伊是希彭穆特的，她曾是底比斯神庙的一名歌手。”（The + 名词 + is that of + 名字/身份）？",
        "options": [
          "The mummy is that of Shepenmut who was once a singer in the Temple of Thebes.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The mummy is that of Shepenmut who was once a singer in the Temple of Thebes.”（这具木乃伊是希彭穆特的，她曾是底比斯神庙的一名歌手。），重点掌握句型：The + 名词 + is that of + 名字/身份。"
      },
      {
        "question": "语法要点【现在完成时（Present Perfect Tense）】：下列哪个例句符合本课语法结构（主语 + have/has + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "The doctors have not yet decided how the woman died.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The doctors have not yet decided how the woman died.”（医生们还没有决定这名女子是如何死的。）展示了本课重点语法【现在完成时（Present Perfect Tense）】：表示过去发生的行为或情况对现在有影响，或表示从过去持续到现在的动作。常与already, yet, just, ever, never等时间状语连用。。"
      },
      {
        "question": "What does the word 'mummy' (/ˈmʌmi/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 木乃伊，干尸"
        ],
        "answerIndex": 2,
        "explanation": "单词 'mummy' 的意思是：noun. 木乃伊，干尸（指经过防腐处理的古代尸体，尤指古埃及人的干尸）。"
      }
    ],
    "funPrompt": "读完《A successful operation》后，试着用自己的话回答课前问题：Did the doctors find out how the woman died?"
  },
  {
    "id": 2078,
    "day": 78,
    "lessonNum": "78",
    "week": 4,
    "track": "nce2",
    "title": "L78: The last one? 最后一枝吗？",
    "coverEmoji": "🍏",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 183,
    "intro": "🎯 课前导读问题：For how long did the writer give up smoking?\n📌 语法与句型重点：【一般过去时与过去进行时】When引导的时间状语从句中，从句用一般过去时，主句用过去进行时；或者主句用一般过去时，从句用过去进行时。 — 用于描述过去同时发生的动作，或一个动作发生时另一个动作正在进行。。 例：When my old friend Brian urged me to accept a cigarette, I took one. (当我的老朋友布莱恩劝我接受一支烟时，我接了一支。) ｜ 【For + 时间段 + 过去时】for + 一段时间 + 一般过去时 — 描述过去某事持续的时间长度，常与表示戒烟、等待等持续性动作连用。。 例：For a whole week I did not smoke at all. (整整一周我一根烟都没抽。)\n💬 核心短语：“give up smoking”（戒烟，戒除吸烟的习惯）；“calm my nerves”（镇定我的神经，使我放松）；“keep on doing something”（继续做某事，坚持做某事）",
    "paragraphs": [
      "After reading an article entitled 'Cigarette Smoking and Your Health' I lit a cigarette to calm my nerves. I smoked with concentration and pleasure as I was sure that this would be my last cigarette. For a whole week I did not smoke at all and during this time, my wife suffered terribly. I had all the usual symptoms of someone giving up smoking: a bad temper and an enormous appetite.",
      "My friends kept on offering me cigarettes and cigars. They made no effort to hide their amusement whenever I produced a packet of sweets from my pocket. After seven days of this I went to a party. Everybody around me was smoking and I felt extremely uncomfortable.",
      "When my old friend Brian urged me to accept a cigarette, it was more than I could bear. I took one guiltily, lit it and smoked with satisfaction. My wife was delighted that things had returned to normal once more. Anyway, as Brian pointed out, it is the easiest thing in the world to give up smoking.",
      "He himself has done it lots of times!"
    ],
    "vocabulary": [
      {
        "word": "smoking",
        "syllables": "smoking",
        "phonetic": "/ˈsməʊkɪŋ/",
        "definition": "noun. 吸烟，抽烟（指抽烟的行为或习惯）",
        "example": "After reading an article entitled 'Cigarette Smoking and Your Health' I lit a cigarette to calm my nerves.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "concentration",
        "syllables": "concentration",
        "phonetic": "/ˌkɒnsənˈtreɪʃn/",
        "definition": "noun. 专注，专心（指集中注意力的状态）",
        "example": "I smoked with concentration and pleasure as I was sure that this would be my last cigarette.",
        "emoji": "✨",
        "longman": [
          "the ability to think about something carefully or for a long time",
          "a process in which you put a lot of attention, energy etc into a particular activity"
        ]
      },
      {
        "word": "pleasure",
        "syllables": "pleasure",
        "phonetic": "/ˈpleʒə/",
        "definition": "noun. 快乐，愉快（指愉悦的感觉或乐趣）",
        "example": "I smoked with concentration and pleasure as I was sure that this would be my last cigarette.",
        "emoji": "✨",
        "longman": [
          "the feeling of happiness, enjoyment, or satisfaction that you get from an experience",
          "an activity or experience that you enjoy very much"
        ]
      },
      {
        "word": "symptom",
        "syllables": "symptom",
        "phonetic": "/ˈsɪmptəm/",
        "definition": "noun. 症状，征兆（医学或比喻意义使用）",
        "example": "I had all the usual symptoms of someone giving up smoking: a bad temper and an enormous appetite.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "temper",
        "syllables": "temper",
        "phonetic": "/ˈtempə/",
        "definition": "noun. 脾气，情绪（指人的性情或情绪状态）",
        "example": "I had all the usual symptoms of someone giving up smoking: a bad temper and an enormous appetite.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "appetite",
        "syllables": "appetite",
        "phonetic": "/ˈæpɪtaɪt/",
        "definition": "noun. 食欲，胃口（指对食物的欲望）",
        "example": "I had all the usual symptoms of someone giving up smoking: a bad temper and an enormous appetite.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“整整一周我一根烟都没抽。”（For + 一段时间 + did not + 动词原形）？",
        "options": [
          "For a whole week I did not smoke at all.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“For a whole week I did not smoke at all.”（整整一周我一根烟都没抽。），重点掌握句型：For + 一段时间 + did not + 动词原形。"
      },
      {
        "question": "语法要点【一般过去时与过去进行时】：下列哪个例句符合本课语法结构（When引导的时间状语从句中，从句用一般过去时，主句用过去进行时；或者主句用一般过去时，从句用过去进行时。）？",
        "options": [
          "He have go to school tomorrow.",
          "When my old friend Brian urged me to accept a cigarette, I took one.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“When my old friend Brian urged me to accept a cigarette, I took one.”（当我的老朋友布莱恩劝我接受一支烟时，我接了一支。）展示了本课重点语法【一般过去时与过去进行时】：一般过去时描述在过去某个时间完成的动作；过去进行时描述在过去某个时间正在进行的动作。两者可以结合使用。。"
      },
      {
        "question": "What does the word 'smoking' (/ˈsməʊkɪŋ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 吸烟，抽烟"
        ],
        "answerIndex": 2,
        "explanation": "单词 'smoking' 的意思是：noun. 吸烟，抽烟（指抽烟的行为或习惯）。"
      }
    ],
    "funPrompt": "读完《The last one?》后，试着用自己的话回答课前问题：For how long did the writer give up smoking?"
  },
  {
    "id": 2079,
    "day": 79,
    "lessonNum": "79",
    "week": 4,
    "track": "nce2",
    "title": "L79: By air 乘飞机",
    "coverEmoji": "✈️",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 184,
    "intro": "🎯 课前导读问题：Why did the plane turn back?\n📌 语法与句型重点：【used to 的用法】主语 + used to + 动词原形 — 用于描述过去的习惯、状态，与现在形成对比。 例：I used to travel by air a great deal. (我过去经常乘飞机旅行。) ｜ 【过去进行时 + when + 一般过去时】过去进行时 + when + 一般过去时 — when引导的短句通常表示突发情况，when可理解为'就在这时'。 例：We were flying low over the city when the plane suddenly turned round. (我们正在城市上空低飞，这时飞机突然掉头。)\n💬 核心短语：“used to”（表示过去习惯性的动作或状态，现在已不再如此）；“take charge of”（负责管理；接管）；“be used to”（习惯于做某事）",
    "paragraphs": [
      "I used to travel by air a great deal when I was a boy. My parents used to live in South America and I used to fly there from Europe in the holidays. A flight attendant would take charge of me and I never had an unpleasant experience. I am used to traveling by air and only on one occasion have I ever felt frightened.",
      "After taking off, we were flying low over the city and slowly gaining height, when the plane suddenly turned round and flew back to the airport. While we were waiting to land, a flight attendant told us to keep calm and to get off the plane quietly as soon as it had touched down. Everybody on board was worried and we were curious to find out what had happened. Later we learnt that there was a very important person on board.",
      "The police had been told that a bomb had been planted on the plane. After we had landed, the plane was searched thoroughly. Fortunately, nothing was found and five hours later we were able to take off again."
    ],
    "vocabulary": [
      {
        "word": "flight",
        "syllables": "flight",
        "phonetic": "/flaɪt/",
        "definition": "noun. 航班；飞行（指飞机从起飞到降落的旅程）",
        "example": "A flight attendant would take charge of me and I never had an unpleasant experience.",
        "emoji": "✨",
        "longman": [
          "a journey in a plane or space vehicle, or the plane or vehicle that is making the journey",
          "when something flies through the air"
        ]
      },
      {
        "word": "frightened",
        "syllables": "frightened",
        "phonetic": "/ˈfraɪtnd/",
        "definition": "adjective. 害怕的；受惊的（描述人感到恐惧的状态）",
        "example": "I am used to traveling by air and only on one occasion have I ever felt frightened.",
        "emoji": "✨",
        "longman": [
          "feeling afraid",
          "feeling worried because you might get hurt or because something bad might happen"
        ]
      },
      {
        "word": "attendant",
        "syllables": "attendant",
        "phonetic": "/əˈtendənt/",
        "definition": "noun. 乘务员；服务员（在飞机、火车等交通工具上服务的人员）",
        "example": "A flight attendant would take charge of me and I never had an unpleasant experience.",
        "emoji": "✨",
        "longman": [
          "someone whose job is to look after or help customers in a public place",
          "someone who looks after a very important person, for example a king or queen"
        ]
      },
      {
        "word": "curious",
        "syllables": "curious",
        "phonetic": "/ˈkjʊəriəs/",
        "definition": "adjective. 好奇的（对某事有兴趣想要知道更多）",
        "example": "Everybody on board was worried and we were curious to find out what had happened.",
        "emoji": "✨",
        "longman": [
          "wanting to know about something",
          "strange or unusual"
        ]
      },
      {
        "word": "plant",
        "syllables": "plant",
        "phonetic": "/plɑːnt/",
        "definition": "verb. 安置；埋放（指放置炸弹等物品）",
        "example": "The police had been told that a bomb had been planted on the plane.",
        "emoji": "✨",
        "longman": [
          "a living thing that has leaves and roots and grows in earth , especially one that is smaller than a tree",
          "a factory or building where an industrial process happens",
          "heavy machinery that is used in industrial processes"
        ]
      },
      {
        "word": "thoroughly",
        "syllables": "thoroughly",
        "phonetic": "/ˈθʌrəli/",
        "definition": "adverb. 彻底地；完全地（表示做事非常仔细、完整）",
        "example": "After we had landed, the plane was searched thoroughly.",
        "emoji": "✨",
        "longman": [
          "completely",
          "carefully, so that nothing is forgotten"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我过去经常乘飞机旅行。”（主语 + used to + 动词原形）？",
        "options": [
          "I used to travel by air a great deal.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I used to travel by air a great deal.”（我过去经常乘飞机旅行。），重点掌握句型：主语 + used to + 动词原形。"
      },
      {
        "question": "语法要点【used to 的用法】：下列哪个例句符合本课语法结构（主语 + used to + 动词原形）？",
        "options": [
          "He have go to school tomorrow.",
          "I used to travel by air a great deal.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I used to travel by air a great deal.”（我过去经常乘飞机旅行。）展示了本课重点语法【used to 的用法】：used to表示过去经常发生的动作或存在的状态，而现在不再如此。"
      },
      {
        "question": "What does the word 'flight' (/flaɪt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 航班；飞行"
        ],
        "answerIndex": 2,
        "explanation": "单词 'flight' 的意思是：noun. 航班；飞行（指飞机从起飞到降落的旅程）。"
      }
    ],
    "funPrompt": "读完《By air》后，试着用自己的话回答课前问题：Why did the plane turn back?"
  },
  {
    "id": 2080,
    "day": 80,
    "lessonNum": "80",
    "week": 4,
    "track": "nce2",
    "title": "L80: The Crystal Palace 水晶宫",
    "coverEmoji": "🏰",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 188,
    "intro": "🎯 课前导读问题：How many people visited the Great Exhibition of 1851?\n📌 语法与句型重点：【被动语态（一般过去时）】主语 + was/were + 过去分词 + (by + 施动者) — 当强调动作承受者或不知道动作执行者时使用被动语态。 例：The Crystal Palace was built in Hyde Park. (水晶宫建在海德公园。) ｜ 【让步状语从句】Though/Although + 主语 + 动词，主句 — 用来引出让步或对比的情况。 例：Though in those days travelling was not as easy as it is today, steam boats carried thousands of visitors. (虽然那时候旅行不像今天这样方便，汽船还是运送了成千上万的游客。)\n💬 核心短语：“made of”（由...制成（看得出原材料））；“a great many”（许多；大量（修饰可数名词））；“in all”（总共；合计）",
    "paragraphs": [
      "Perhaps the most extraordinary building of the nineteeth century was the Crystal Palace, which was built in Hyde Park for the Great Exhibition of 1851. The Crystal Palace was different from all other buildings in the world, for it was made of iron and glass. It was one of the biggest buildings of all time and a lot of people from many countries came to see it. A great many goods were sent to the exhibition from various parts of the world.",
      "There was also a great deal of machinery on display. The most wonderful piece of machinery on show was Nasmyth's steam hammer. Though in those days, traveling was not as easy as it is today, steam boats carried thousands of visitors across the Channel from Europe. On arriving in England, they were taken to the Crystal Palace by train.",
      "There were six million visitors in all, and the profits from the exhibition were used to build museums and colleges. Later, the Crystal Palace was moved to South London. It remained one of the most famous buildings in the world until it was burnt down in 1936."
    ],
    "vocabulary": [
      {
        "word": "extraordinary",
        "syllables": "extraordinary",
        "phonetic": "/ɪkˈstrɔːdənəri/",
        "definition": "adj. 非凡的；异常的（用于描述不寻常、令人惊叹的事物）",
        "example": "Perhaps the most extraordinary building of the nineteeth century was the Crystal Palace, which was built in Hyde Park for the Great Exhibition of 1851.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "exhibition",
        "syllables": "exhibition",
        "phonetic": "/ˌeksɪˈbɪʃən/",
        "definition": "noun. 展览；展览会（指公开展出物品供人参观的活动）",
        "example": "Perhaps the most extraordinary building of the nineteeth century was the Crystal Palace, which was built in Hyde Park for the Great Exhibition of 1851.",
        "emoji": "✨",
        "longman": [
          "a show of paintings, photographs, or other objects that people can go to see",
          "when something such as a painting is shown in a public place"
        ]
      },
      {
        "word": "machinery",
        "syllables": "machinery",
        "phonetic": "/məˈʃiːnəri/",
        "definition": "noun. 机器；机械（总称）（指机器的总称，不可数）",
        "example": "There was also a great deal of machinery on display.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "profit",
        "syllables": "profit",
        "phonetic": "/ˈprɒfɪt/",
        "definition": "noun. 利润；收益（指经济活动中获得的利益）",
        "example": "There were six million visitors in all, and the profits from the exhibition were used to build museums and colleges.",
        "emoji": "✨",
        "longman": [
          "money that you gain by selling things or doing business, after your costs have been paid",
          "an advantage that you gain from doing something"
        ]
      },
      {
        "word": "various",
        "syllables": "various",
        "phonetic": "/ˈveəriəs/",
        "definition": "adj. 各种各样的；不同的（修饰可数名词，表示多样性）",
        "example": "A great many goods were sent to the exhibition from various parts of the world.",
        "emoji": "✨",
        "longman": [
          "if there are various things, there are several different types of that thing"
        ]
      },
      {
        "word": "display",
        "syllables": "display",
        "phonetic": "/dɪˈspleɪ/",
        "definition": "noun/verb. 展览；显示（作名词时指展示；作动词时指展示或显示）",
        "example": "There was also a great deal of machinery on display.",
        "emoji": "✨",
        "longman": [
          "an arrangement of things for people to look at or buy",
          "a public performance of something that is intended to entertain people"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“水晶宫建在海德公园，用于1851年的世博会。”（主语 + was/were + 过去分词 + 地点/时间）？",
        "options": [
          "The Crystal Palace was built in Hyde Park for the Great Exhibition of 1851.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The Crystal Palace was built in Hyde Park for the Great Exhibition of 1851.”（水晶宫建在海德公园，用于1851年的世博会。），重点掌握句型：主语 + was/were + 过去分词 + 地点/时间。"
      },
      {
        "question": "语法要点【被动语态（一般过去时）】：下列哪个例句符合本课语法结构（主语 + was/were + 过去分词 + (by + 施动者)）？",
        "options": [
          "He have go to school tomorrow.",
          "The Crystal Palace was built in Hyde Park.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The Crystal Palace was built in Hyde Park.”（水晶宫建在海德公园。）展示了本课重点语法【被动语态（一般过去时）】：表示主语是动作的承受者，谓语用be+过去分词形式。"
      },
      {
        "question": "What does the word 'extraordinary' (/ɪkˈstrɔːdənəri/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adj. 非凡的；异常的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'extraordinary' 的意思是：adj. 非凡的；异常的（用于描述不寻常、令人惊叹的事物）。"
      }
    ],
    "funPrompt": "读完《The Crystal Palace》后，试着用自己的话回答课前问题：How many people visited the Great Exhibition of 1851?"
  },
  {
    "id": 2081,
    "day": 81,
    "lessonNum": "81",
    "week": 4,
    "track": "nce2",
    "title": "L81: Escape 脱逃",
    "coverEmoji": "🚓",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 185,
    "intro": "🎯 课前导读问题：Why did the prisoner attack the driver?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 + (before + 过去时态)... — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。常与when, after, before等连词连用。。 例：When he had killed the guard, the prisoner dragged him into the bushes. (当他杀死卫兵后，囚犯把他拖进了灌木丛。) ｜ 【过去进行时与一般过去时的对比】was/were + doing (过去进行时) vs. did (一般过去时) — 当一个长时间动作正在进行时，另一个短动作发生，此时用过去进行时+when+一般过去时。 例：Lights were blazing and men were running here and there. (灯光明亮，人们四处奔跑。)\n💬 核心短语：“drag into”（把...拖进；拽进）；“change into”（换上；变成）；“march up and down”（来回走动；踱步）",
    "paragraphs": [
      "When he had killed the guard, the prisoner of war quickly dragged him into the bushes. Working rapidly in the darkness, he soon changed into the dead man's clothes. Now, dressed in a blue uniform and with a rifle over his shoulder, the prisoner marched boldly up and down in front of the camp. He could hear shouting in the camp itself.",
      "Lights were blazing and men were running here and there: they had just discovered that a prisoner had escaped. At that moment, a large black car with four officers inside it, stopped at the camp gates. The officers got out and the prisoner stood to attention and saluted as they passed. When they had gone, the driver of the car came towards him.",
      "The man obviously wanted to talk. He was rather elderly with grey hair and clear blue eyes. The prisoner felt sorry for him, but there was nothing else he could do. As the man came near, the prisoner knocked him to the ground with a sharp blow.",
      "Then, jumping into the car, he drove off as quickly as he could."
    ],
    "vocabulary": [
      {
        "word": "prisoner",
        "syllables": "prisoner",
        "phonetic": "/ˈprɪzənə/",
        "definition": "noun. 囚犯；俘虏（指被关押的人或战俘）",
        "example": "When he had killed the guard, the prisoner of war quickly dragged him into the bushes.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "guard",
        "syllables": "guard",
        "phonetic": "/ɡɑːd/",
        "definition": "noun. 卫兵；看守（负责看守或保护的人）",
        "example": "When he had killed the guard, the prisoner of war quickly dragged him into the bushes.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "rapidly",
        "syllables": "rapidly",
        "phonetic": "/ˈræpɪdli/",
        "definition": "adverb. 快速地；迅速地（描述动作进行的速度快）",
        "example": "Working rapidly in the darkness, he soon changed into the dead man's clothes.",
        "emoji": "✨",
        "longman": [
          "very quickly and in a very short time"
        ]
      },
      {
        "word": "uniform",
        "syllables": "uniform",
        "phonetic": "/ˈjuːnɪfɔːm/",
        "definition": "noun. 制服；军装（统一规格的服装，常指军服或工作服）",
        "example": "Now, dressed in a blue uniform and with a rifle over his shoulder, the prisoner marched boldly up and down in front of the camp.",
        "emoji": "✨",
        "longman": [
          "a particular type of clothing worn by all the members of a group or organization such as the police, the army etc",
          "being the same in all its parts or among all its members"
        ]
      },
      {
        "word": "rifle",
        "syllables": "rifle",
        "phonetic": "/ˈraɪfl/",
        "definition": "noun. 步枪；来复枪（一种长管枪械）",
        "example": "Now, dressed in a blue uniform and with a rifle over his shoulder, the prisoner marched boldly up and down in front of the camp.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "blaze",
        "syllables": "blaze",
        "phonetic": "/bleɪz/",
        "definition": "verb. 闪耀；发光（指光亮强烈地照射或燃烧）",
        "example": "",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“当他杀死卫兵后，囚犯迅速把他拖进了灌木丛。”（When + 主语 + had + 过去分词..., 主语 + 过去时态...）？",
        "options": [
          "When he had killed the guard, the prisoner quickly dragged him into the bushes.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“When he had killed the guard, the prisoner quickly dragged him into the bushes.”（当他杀死卫兵后，囚犯迅速把他拖进了灌木丛。），重点掌握句型：When + 主语 + had + 过去分词..., 主语 + 过去时态...。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + had + 过去分词 + (before + 过去时态)...）？",
        "options": [
          "He have go to school tomorrow.",
          "When he had killed the guard, the prisoner dragged him into the bushes.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“When he had killed the guard, the prisoner dragged him into the bushes.”（当他杀死卫兵后，囚犯把他拖进了灌木丛。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作或状态，由had + 过去分词构成。"
      },
      {
        "question": "What does the word 'prisoner' (/ˈprɪzənə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 囚犯；俘虏"
        ],
        "answerIndex": 2,
        "explanation": "单词 'prisoner' 的意思是：noun. 囚犯；俘虏（指被关押的人或战俘）。"
      }
    ],
    "funPrompt": "读完《Escape》后，试着用自己的话回答课前问题：Why did the prisoner attack the driver?"
  },
  {
    "id": 2082,
    "day": 82,
    "lessonNum": "82",
    "week": 4,
    "track": "nce2",
    "title": "L82: Monster or fish? 是妖还是鱼？",
    "coverEmoji": "🐟",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 182,
    "intro": "🎯 课前导读问题：What was the monster called?\n📌 语法与句型重点：【定语从句（非限定性）】主句 + , + 关系代词/关系副词 + 从句 / 主句 + , + which/who + 句子 — 1. 用逗号与主句隔开\n2. 关系代词 which 可指代整个主句\n3. 不能用 that 引导。 例：The fish, which has been sent to a museum, is called an oarfish. (那条鱼被称为皇带鱼，已被送往博物馆。) ｜ 【It is now known that... 句型】It is + known/reported/believed + that + 从句 — 1. it 作形式主语，避免句子头重脚轻\n2. 类似结构：It is said that... 据说；It is believed that... 据认为\n3. 可以转换为：People know (that)...。 例：It is now known that many 'monsters' are simply strange fish. (现在已知，许多'怪物'不过是奇怪的鱼。)\n💬 核心短语：“at times”（表示偶尔、有时，相当于 sometimes，用于描述不经常发生的情况）；“no ordinary fish”（no + adj. 表示强调，意为'绝非普通的'，用来突出事物的特殊性）；“make every effort”（表示尽一切努力、不遗余力，后接 to do sth.）",
    "paragraphs": [
      "Fishermen and sailors sometimes claim to have seen monsters in the sea. Though people have often laughed at stories told by seamen, it is now known that many of these 'monsters' which have at times been sighted are simply strange fish. Occasionally, unusual creatures are washed to the shore, but they are rarely caught out at sea. Some time ago, however, a peculiar fish was caught near Madagascar.",
      "A small fishing boat was carried miles out to sea by the powerful fish as it pulled on the line. Realizing that this was no ordinary fish, the fisherman made every effort not to damage it in any way. When it was eventually brought to shore, it was found to be over thirteen feet long. It had a head like a horse, big blue eyes, shining silver skin, and a bright red tail.",
      "The fish, which has since been sent to a museum where it is being examined by a scientist, is called an oarfish. Such creatures have rarely been seen alive by man as they live at a depth of six hundred feet."
    ],
    "vocabulary": [
      {
        "word": "monster",
        "syllables": "monster",
        "phonetic": "/ˈmɒnstə(r)/",
        "definition": "noun. 怪物；妖怪（指形状奇怪、体积庞大的生物，常用于描述未知或传说中的生物）",
        "example": "Fishermen and sailors sometimes claim to have seen monsters in the sea.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "sailor",
        "syllables": "sailor",
        "phonetic": "/ˈseɪlə(r)/",
        "definition": "noun. 水手；海员（指在船上工作的人，与 fisherman 不同，后者指以捕鱼为生的人）",
        "example": "Fishermen and sailors sometimes claim to have seen monsters in the sea.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "creature",
        "syllables": "creature",
        "phonetic": "/ˈkriːtʃə(r)/",
        "definition": "noun. 生物；动物（泛指任何动物或生物，语气比 animal 更为文学化）",
        "example": "Occasionally, unusual creatures are washed to the shore, but they are rarely caught out at sea.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "peculiar",
        "syllables": "peculiar",
        "phonetic": "/pɪˈkjuːliə(r)/",
        "definition": "adj. 奇怪的；特有的（强调与众不同的、稀奇古怪的，常用结构：be peculiar to 某地特有的）",
        "example": "Some time ago, however, a peculiar fish was caught near Madagascar.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "powerful",
        "syllables": "powerful",
        "phonetic": "/ˈpaʊəfl/",
        "definition": "adj. 强大的；有力的（描述力量大、影响力强，可用于形容人或事物的力量）",
        "example": "A small fishing boat was carried miles out to sea by the powerful fish as it pulled on the line.",
        "emoji": "✨",
        "longman": [
          "a powerful person, organization, group etc is able to control and influence events and other people’s actions",
          "having a strong effect on someone’s feelings or opinions"
        ]
      },
      {
        "word": "ordinary",
        "syllables": "ordinary",
        "phonetic": "/ˈɔːrdɪneri/",
        "definition": "adj. 普通的；平常的（指一般的、没有特别之处的，反义词为 extraordinary）",
        "example": "Realizing that this was no ordinary fish, the fisherman made every effort not to damage it in any way.",
        "emoji": "✨",
        "longman": [
          "average, common, or usual, not different or special",
          "not particularly good or impressive"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“尽管人们经常嘲笑海员讲的故事，但现在已知这些'怪物'中有许多只是奇怪的鱼。”（Though + 主语 + 动词..., ...）？",
        "options": [
          "Though people have often laughed at stories told by seamen, it is now known that many of these 'monsters' are simply strange fish.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Though people have often laughed at stories told by seamen, it is now known that many of these 'monsters' are simply strange fish.”（尽管人们经常嘲笑海员讲的故事，但现在已知这些'怪物'中有许多只是奇怪的鱼。），重点掌握句型：Though + 主语 + 动词..., ...。"
      },
      {
        "question": "语法要点【定语从句（非限定性）】：下列哪个例句符合本课语法结构（主句 + , + 关系代词/关系副词 + 从句 / 主句 + , + which/who + 句子）？",
        "options": [
          "He have go to school tomorrow.",
          "The fish, which has been sent to a museum, is called an oarfish.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The fish, which has been sent to a museum, is called an oarfish.”（那条鱼被称为皇带鱼，已被送往博物馆。）展示了本课重点语法【定语从句（非限定性）】：非限定性定语从句对先行词进行补充说明，去掉后不影响主句意义，从句前后有逗号隔开。"
      },
      {
        "question": "What does the word 'monster' (/ˈmɒnstə(r)/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 怪物；妖怪"
        ],
        "answerIndex": 2,
        "explanation": "单词 'monster' 的意思是：noun. 怪物；妖怪（指形状奇怪、体积庞大的生物，常用于描述未知或传说中的生物）。"
      }
    ],
    "funPrompt": "读完《Monster or fish?》后，试着用自己的话回答课前问题：What was the monster called?"
  },
  {
    "id": 2083,
    "day": 83,
    "lessonNum": "83",
    "week": 4,
    "track": "nce2",
    "title": "L83: After the elections 大选之后",
    "coverEmoji": "🗳️",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "4 mins",
    "wordCount": 177,
    "intro": "🎯 课前导读问题：Why did Patrick keep on asking the same question?\n📌 语法与句型重点：【一般过去时 (Past Simple Tense)】主语 + 动词过去式 — 描述过去发生的事情，如已完成的选举结果、去过的地点等。 例：Patrick went to the former Prime Minister's house. (Patrick去了前首相的家。) ｜ 【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 描述过去正在发生的动作，通常与一般过去时连用。 例：The policeman was just walking slowly past the entrance. (警察正慢慢走过门口。)\n💬 核心短语：“keep on doing sth”（继续做某事，反复做某事）；“go abroad”（出国，到国外）；“lose one's temper”（发脾气）",
    "paragraphs": [
      "The former Prime Minister, Mr. Wentworth Lane, was defeated in the recent elections. He is now retiring from political life and has gone abroad. My friend, Patrick, has always been a fanatical opponent of Mr. Lane's Radical Progressive Party. After the elections, Patrick went to the former Prime Minister's house.",
      "When he asked if Mr. Lane lived there, the policeman on duty told him that since his defeat, the ex-Prime Minister had gone abroad. On the following day, Patrick went to the house again. The same policeman was just walking slowly past the entrance, when Patrick asked the same question. Though a little suspicious this time, the policeman gave him the same answer.",
      "The day after, Patrick went to the house once more and asked exactly the same question. This time, the policeman lost his temper. 'I told you yesterday and the day before yesterday,' he shouted, 'Mr. Lane was defeated in the elections. He has retired from political life and gone to live abroad!\"",
      "'I know,' answered Patrick, 'but I love to hear you say it!'"
    ],
    "vocabulary": [
      {
        "word": "former",
        "syllables": "former",
        "phonetic": "/ˈfɔːmə/",
        "definition": "adj. 以前的，从前的（用于指某人或某物过去的状态或职位）",
        "example": "The former Prime Minister, Mr. Wentworth Lane, was defeated in the recent elections.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "defeat",
        "syllables": "defeat",
        "phonetic": "/dɪˈfiːt/",
        "definition": "verb. 击败，战胜（在选举、比赛或战争中击败对手）",
        "example": "The former Prime Minister, Mr. Wentworth Lane, was defeated in the recent elections.",
        "emoji": "✨",
        "longman": [
          "failure to win or succeed",
          "victory over someone or something"
        ]
      },
      {
        "word": "election",
        "syllables": "election",
        "phonetic": "/ɪˈlekʃn/",
        "definition": "noun. 选举（指政治职位的投票选举）",
        "example": "The former Prime Minister, Mr. Wentworth Lane, was defeated in the recent elections.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "retire",
        "syllables": "retire",
        "phonetic": "/rɪˈtaɪə/",
        "definition": "verb. 退休；退役（指从工作或政治生涯中退出）",
        "example": "He has retired from political life and gone to live abroad!\"",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "political",
        "syllables": "political",
        "phonetic": "/pəˈlɪtɪkl/",
        "definition": "adj. 政治的（与政府、政治活动相关的）",
        "example": "He is now retiring from political life and has gone abroad.",
        "emoji": "✨",
        "longman": [
          "relating to the government, politics, and public affairs of a country",
          "relating to the ways that different people have power within a group, organization etc"
        ]
      },
      {
        "word": "abroad",
        "syllables": "abroad",
        "phonetic": "/əˈbrɔːd/",
        "definition": "adv. 到国外，在国外（指去往或身处其他国家）",
        "example": "He is now retiring from political life and has gone abroad.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“警察正慢慢走过门口时，Patrick问了同样的问题。”（主语 + was/were + 动词-ing when + 主语 + 动词过去式）？",
        "options": [
          "The policeman was just walking slowly past the entrance when Patrick asked the same question.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The policeman was just walking slowly past the entrance when Patrick asked the same question.”（警察正慢慢走过门口时，Patrick问了同样的问题。），重点掌握句型：主语 + was/were + 动词-ing when + 主语 + 动词过去式。"
      },
      {
        "question": "语法要点【一般过去时 (Past Simple Tense)】：下列哪个例句符合本课语法结构（主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "Patrick went to the former Prime Minister's house.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Patrick went to the former Prime Minister's house.”（Patrick去了前首相的家。）展示了本课重点语法【一般过去时 (Past Simple Tense)】：表示过去发生的动作或存在的状态。"
      },
      {
        "question": "What does the word 'former' (/ˈfɔːmə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adj. 以前的，从前的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'former' 的意思是：adj. 以前的，从前的（用于指某人或某物过去的状态或职位）。"
      }
    ],
    "funPrompt": "读完《After the elections》后，试着用自己的话回答课前问题：Why did Patrick keep on asking the same question?"
  },
  {
    "id": 2084,
    "day": 84,
    "lessonNum": "84",
    "week": 4,
    "track": "nce2",
    "title": "L84: On strike 罢工",
    "coverEmoji": "🚌",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "4 mins",
    "wordCount": 178,
    "intro": "🎯 课前导读问题：Who will be driving the buses next week?\n📌 语法与句型重点：【将来进行时 (Future Continuous Tense)】主语 + will be + 动词-ing — 用于描述在将来某个具体时间正在发生的动作，或询问他人的计划，语气比 will + 动词原形 更委婉。 例：Who will be driving the buses next week? (下周谁将驾驶公共汽车？) ｜ 【现在完成时 (Present Perfect Tense)】主语 + have/has + 过去分词 — 用于描述过去发生但与现在有联系的事件，常与already, yet, just, so far等连用。 例：Busmen have decided to go on strike next week. (公交车司机已决定下周举行罢工。)\n💬 核心短语：“go on strike”（举行罢工，开始罢工）；“due to begin”（预定开始，预定举行）；“to some extent”（在某种程度上）",
    "paragraphs": [
      "Busmen have decided to go on strike next week. The strike is due to begin on Tuesday. No one knows how long it will last. The busmen have stated that the strike will continue until general agreement is reached about pay and working conditions.",
      "Most people believe that the strike will last for at least a week. Many owners of private cars are going to offer 'free rides' to people on their way to work. This will relieve pressure on the trains to some extent. Meanwhile, a number of university students have volunteered to drive buses while the strike lasts.",
      "All the students are expert drivers, but before they drive any of the buses, they will have to pass a special test. The students are going to take the test in two days' time. Even so, people are going to find it difficult to get to work. But so far, the public has expressed its gratitude to the students in letters to the Press.",
      "Only one or two people have objected that the students will drive too fast!"
    ],
    "vocabulary": [
      {
        "word": "strike",
        "syllables": "strike",
        "phonetic": "/straɪk/",
        "definition": "noun. 罢工（指工人集体停止工作以要求改善条件）；verb. 打击，敲击（表示敲打或攻击的动作）",
        "example": "Busmen have decided to go on strike next week.",
        "emoji": "✨",
        "longman": [
          "to hit or fall against the surface of something",
          "to deliberately hit someone or something with your hand or a weapon",
          "if something strikes you, you think of it, notice it, or realize that it is important, interesting, true etc"
        ]
      },
      {
        "word": "busmen",
        "syllables": "busmen",
        "phonetic": "/ˈbʌsmən/",
        "definition": "noun. 公共汽车司机（busman的复数形式，指公共汽车司机）",
        "example": "Busmen have decided to go on strike next week.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "volunteer",
        "syllables": "volunteer",
        "phonetic": "/ˌvɒlənˈtɪə/",
        "definition": "verb. 自愿做某事（表示主动、无偿地提供服务）；noun. 志愿者（指自愿提供服务的人）",
        "example": "Meanwhile, a number of university students have volunteered to drive buses while the strike lasts.",
        "emoji": "✨",
        "longman": [
          "someone who does a job willingly without being paid",
          "someone who is willing to offer help"
        ]
      },
      {
        "word": "expert",
        "syllables": "expert",
        "phonetic": "/ˈekspɜːt/",
        "definition": "noun. 专家（指在某一领域有专业技能的人）；adj. 熟练的，内行的（形容在某方面很有经验）",
        "example": "All the students are expert drivers, but before they drive any of the buses, they will have to pass a special test.",
        "emoji": "✨",
        "longman": [
          "someone who has a special skill or special knowledge of a subject, gained as a result of training or experience",
          "someone who has a lot of knowledge about something or skill at doing something"
        ]
      },
      {
        "word": "relief",
        "syllables": "relief",
        "phonetic": "/rɪˈliːf/",
        "definition": "noun. 减轻，解除（指痛苦、压力或困难的缓解）；noun. 轻松，解脱（表示焦虑或担忧消除后的感觉）",
        "example": "",
        "emoji": "✨",
        "longman": [
          "a feeling of comfort when something frightening , worrying , or painful has ended or has not happened",
          "when something reduces someone’s pain or unhappy feelings",
          "money, food, clothes etc given to people who are poor or hungry"
        ]
      },
      {
        "word": "gratitude",
        "syllables": "gratitude",
        "phonetic": "/ˈɡrætɪtjuːd/",
        "definition": "noun. 感激，感谢（对他人帮助或善意的感激之情）",
        "example": "But so far, the public has expressed its gratitude to the students in letters to the Press.",
        "emoji": "✨",
        "longman": [
          "the feeling of being grateful"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“公交车司机决定下周举行罢工。”（主语 + have/has decided to + 动词原形）？",
        "options": [
          "Busmen have decided to go on strike next week.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Busmen have decided to go on strike next week.”（公交车司机决定下周举行罢工。），重点掌握句型：主语 + have/has decided to + 动词原形。"
      },
      {
        "question": "语法要点【将来进行时 (Future Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + will be + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "Who will be driving the buses next week?",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Who will be driving the buses next week?”（下周谁将驾驶公共汽车？）展示了本课重点语法【将来进行时 (Future Continuous Tense)】：表示将来某一时刻或时间段正在进行的动作。"
      },
      {
        "question": "What does the word 'strike' (/straɪk/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 罢工"
        ],
        "answerIndex": 2,
        "explanation": "单词 'strike' 的意思是：noun. 罢工（指工人集体停止工作以要求改善条件）。"
      }
    ],
    "funPrompt": "读完《On strike》后，试着用自己的话回答课前问题：Who will be driving the buses next week?"
  },
  {
    "id": 2085,
    "day": 85,
    "lessonNum": "85",
    "week": 4,
    "track": "nce2",
    "title": "L85: Never too old to learn 活到老学到老",
    "coverEmoji": "🏫",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "4 mins",
    "wordCount": 167,
    "intro": "🎯 课前导读问题：How long has Mr. Page been teaching?\n📌 语法与句型重点：【现在完成进行时 (Present Perfect Continuous Tense)】主语 + have/has + been + 动词-ing — 用于询问或描述一个持续进行且可能仍在继续的动作，强调动作的持续性。疑问句将have/has提前。。 例：How long has Mr. Page been teaching? (佩奇先生教了多久的书了？) ｜ 【将来完成进行时 (Future Perfect Continuous Tense)】主语 + will + have + been + 动词-ing — 用于描述到将来某个时间点已经持续了多长时间的动作，常与by + 将来的时间点连用。。 例：Mr. Page will have been teaching for forty years by then. (到那时佩奇先生将已经教了四十年书。)\n💬 核心短语：“inform someone that”（通知/告知某人某事）；“contribute towards”（为...贡献/捐助）；“mark the occasion”（纪念这个时刻/场合）",
    "paragraphs": [
      "I have just received a letter from my old school, informing me that my former headmaster, Mr. Stuart Page, will be retiring next week. Pupils of the school, old and new, will be sending him a present to mark the occasion. All those who have contributed towards the gift will sign their names in a large album which will be sent to the headmaster's home. We shall all remember Mr. Page for his patience and understanding and for the kindly encouragement he gave us when we went so unwillingly to school.",
      "A great many former pupils will be attending a farewell dinner in his honour next Thursday. It is a curious coincidence that the day before his retirement, Mr. Page will have been teaching for a total of forty years. After he has retired, he will devote himself to gardening. For him, this will be an entirely new hobby.",
      "But this does not matter, for, as he has often remarked, one is never too old to learn."
    ],
    "vocabulary": [
      {
        "word": "receive",
        "syllables": "receive",
        "phonetic": "/rɪˈsiːv/",
        "definition": "verb. 收到；接到（表示通过邮寄、传递等方式收到某物）",
        "example": "I have just received a letter from my old school, informing me that my former headmaster, Mr. Stuart Page, will be retiring next week.",
        "emoji": "✨",
        "longman": [
          "to be given something",
          "to get a letter, message, or telephone call, or something which someone has sent you"
        ]
      },
      {
        "word": "former",
        "syllables": "former",
        "phonetic": "/ˈfɔːmə(r)/",
        "definition": "adj. 以前的；前任的（用于描述过去担任某职务或处于某种状态的人或事物）",
        "example": "I have just received a letter from my old school, informing me that my former headmaster, Mr. Stuart Page, will be retiring next week.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "headmaster",
        "syllables": "headmaster",
        "phonetic": "/ˌhedˈmɑːstə(r)/",
        "definition": "noun. 校长（指中小学校的男性校长）",
        "example": "I have just received a letter from my old school, informing me that my former headmaster, Mr. Stuart Page, will be retiring next week.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "retire",
        "syllables": "retire",
        "phonetic": "/rɪˈtaɪə(r)/",
        "definition": "verb. 退休；退役（指停止工作并离开工作岗位）",
        "example": "It is a curious coincidence that the day before his retirement, Mr. Page will have been teaching for a total of forty years.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "pupil",
        "syllables": "pupil",
        "phonetic": "/ˈpjuːpl/",
        "definition": "noun. 学生；小学生（尤指中小学生，通常指年龄较小的学生）",
        "example": "Pupils of the school, old and new, will be sending him a present to mark the occasion.",
        "emoji": "✨",
        "longman": [
          "someone who is being taught, especially a child",
          "the small black round area in the middle of your eye"
        ]
      },
      {
        "word": "contribute",
        "syllables": "contribute",
        "phonetic": "/kənˈtrɪbjuːt/",
        "definition": "verb. 贡献；捐赠；投稿（常与towards连用，表示为某事出钱或出力）",
        "example": "All those who have contributed towards the gift will sign their names in a large album which will be sent to the headmaster's home.",
        "emoji": "✨",
        "longman": [
          "to give money, help, ideas etc to something that a lot of other people are also involved in",
          "to help to make something happen"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“佩奇先生教了多久的书了？”（How long has + 主语 + been + 动词-ing?）？",
        "options": [
          "How long has Mr. Page been teaching?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“How long has Mr. Page been teaching?”（佩奇先生教了多久的书了？），重点掌握句型：How long has + 主语 + been + 动词-ing?。"
      },
      {
        "question": "语法要点【现在完成进行时 (Present Perfect Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + have/has + been + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "How long has Mr. Page been teaching?",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“How long has Mr. Page been teaching?”（佩奇先生教了多久的书了？）展示了本课重点语法【现在完成进行时 (Present Perfect Continuous Tense)】：表示从过去开始一直持续到现在，并且可能继续下去的动作。常与表示一段时间的时间状语连用，如for+时间段、since+时间点。。"
      },
      {
        "question": "What does the word 'receive' (/rɪˈsiːv/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "verb. 收到；接到"
        ],
        "answerIndex": 2,
        "explanation": "单词 'receive' 的意思是：verb. 收到；接到（表示通过邮寄、传递等方式收到某物）。"
      }
    ],
    "funPrompt": "读完《Never too old to learn》后，试着用自己的话回答课前问题：How long has Mr. Page been teaching?"
  },
  {
    "id": 2086,
    "day": 86,
    "lessonNum": "86",
    "week": 4,
    "track": "nce2",
    "title": "L86: Out of control 失控",
    "coverEmoji": "🚤",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 186,
    "intro": "🎯 课前导读问题：What was the danger?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。 例：Both men had hardly had time to realize what was happening when they were thrown into the sea. (两个人还没来得及意识到发生了什么，就被猛地抛入海中。) ｜ 【had just enough time to】had just enough time to + 动词原形 — 强调时间勉强足够，含有紧迫感。 例：They had just had enough time to swim out of danger when the boat again completed a circle. (他们刚刚有时间游出危险区，快艇就又绕了一圈。)\n💬 核心短语：“swing round”（急转身，突然改变方向）；“come away”（脱落，掉下）；“wave desperately”（拼命挥手求救）",
    "paragraphs": [
      "As the man tried to swing the speedboat round, the steering wheel came away in his hands. He waved desperately to his companion, who had been water skiing for the last fifteen minutes. Both men had hardly had time to realize what was happening when they were thrown violently into the sea. The speedboat had struck a buoy, but it continued to move very quickly across the water.",
      "Both men had just begun to swim towards the shore, when they noticed with dismay that the speedboat was moving in a circle. It now came straight towards them at tremendous speed. In less than a minute, it roared past them only a few feet away. After it had passed, they swam on as quickly as they could because they knew that the boat would soon return.",
      "They had just had enough time to swim out of danger when the boat again completed a circle. On this occasion, however, it had slowed down considerably. The petrol had nearly all been used up. Before long, the noise dropped completely and the boat began to drift gently across the water."
    ],
    "vocabulary": [
      {
        "word": "speedboat",
        "syllables": "speedboat",
        "phonetic": "/ˈspiːdbəʊt/",
        "definition": "noun. 快艇，汽艇（指一种高速的小型船只）",
        "example": "As the man tried to swing the speedboat round, the steering wheel came away in his hands.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "swing",
        "syllables": "swing",
        "phonetic": "/swɪŋ/",
        "definition": "verb. （使）旋转，转向（指突然改变方向的动作）",
        "example": "As the man tried to swing the speedboat round, the steering wheel came away in his hands.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "desperately",
        "syllables": "desperately",
        "phonetic": "/ˈdespərətli/",
        "definition": "adverb. 绝望地，拼命地（描述极度的焦虑或绝望状态）",
        "example": "He waved desperately to his companion, who had been water skiing for the last fifteen minutes.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "companion",
        "syllables": "companion",
        "phonetic": "/kəmˈpæniən/",
        "definition": "noun. 同伴，伙伴（指一起做某事的人）",
        "example": "He waved desperately to his companion, who had been water skiing for the last fifteen minutes.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "buoy",
        "syllables": "buoy",
        "phonetic": "/bɔɪ/",
        "definition": "noun. 浮标，航标（标记水域位置或危险的漂浮物体）",
        "example": "The speedboat had struck a buoy, but it continued to move very quickly across the water.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "tremendous",
        "syllables": "tremendous",
        "phonetic": "/trɪˈmendəs/",
        "definition": "adjective. 极大的，惊人的（形容规模、程度或数量非常大）",
        "example": "It now came straight towards them at tremendous speed.",
        "emoji": "✨",
        "longman": [
          "very big, fast, powerful etc",
          "excellent"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“两个人几乎没时间意识到发生了什么，就被猛地抛入海中。”（Both + 主语 + had + 过去分词 + when + 过去时态句子）？",
        "options": [
          "Both men had hardly had time to realize what was happening when they were thrown violently into the sea.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Both men had hardly had time to realize what was happening when they were thrown violently into the sea.”（两个人几乎没时间意识到发生了什么，就被猛地抛入海中。），重点掌握句型：Both + 主语 + had + 过去分词 + when + 过去时态句子。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（主语 + had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "Both men had hardly had time to realize what was happening when they were thrown into the sea.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Both men had hardly had time to realize what was happening when they were thrown into the sea.”（两个人还没来得及意识到发生了什么，就被猛地抛入海中。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时刻之前已经完成的动作或状态。"
      },
      {
        "question": "What does the word 'speedboat' (/ˈspiːdbəʊt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 快艇，汽艇"
        ],
        "answerIndex": 2,
        "explanation": "单词 'speedboat' 的意思是：noun. 快艇，汽艇（指一种高速的小型船只）。"
      }
    ],
    "funPrompt": "读完《Out of control》后，试着用自己的话回答课前问题：What was the danger?"
  },
  {
    "id": 2087,
    "day": 87,
    "lessonNum": "87",
    "week": 4,
    "track": "nce2",
    "title": "L87: A perfect alibi 极好的不在犯罪现场的证据",
    "coverEmoji": "🕵️‍♂️",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "4 mins",
    "wordCount": 178,
    "intro": "🎯 课前导读问题：What was wrong with the man's story?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing + 时间状语 — 用于描述过去正在发生的行为，常与at the time, when等连用。 例：At the time the murder was committed, I was travelling on the 8 o'clock train. (谋杀发生时，我正乘坐8点的火车。) ｜ 【一般过去时 vs 过去进行时】一般过去时：主语 + 动词过去式\n过去进行时：主语 + was/were + 动词-ing — 当一个过去进行的动作被另一个过去的动作（一般过去时）打断时，常用过去进行时描述较长的背景动作。 例：I was waiting for the train when it arrived. (火车来的时候我正在等它。)\n💬 核心短语：“at the time”（表示在某事发生的时候）；“be travelling on”（表示正在乘坐（某种交通工具））；“catch a train”（表示赶上火车）",
    "paragraphs": [
      "'At the time the murder was committed, I was travelling on the 8 o'clock train to London,' said the man.",
      "'Do you always catch such an early train?' asked the inspector.",
      "'Of course I do,' answered the man. 'I must be at work at 10 o'clock. My employer will confirm that I was there on time.'",
      "'Would a later train get you to work on time?' asked the inspector.",
      "'I suppose it would, but I never catch a later train.'",
      "'At what time did you arrive at the station?'",
      "'At ten to eight. I bought a paper and waited for the train.'",
      "'And you didn't notice anything unusual?'",
      "'Of course not.'",
      "'I suggest,' said the inspector, 'that you are not telling the truth. I suggest that you did not catch the 8 o'clock train, but that you caught the 8.25 which would still get you to work on time. You see, on the morning of the murder, the 8 o'clock train did not run at all. It broke down at Ferngreen station and was taken off the line.'"
    ],
    "vocabulary": [
      {
        "word": "murder",
        "syllables": "murder",
        "phonetic": "/ˈmɜːdə/",
        "definition": "noun. 谋杀；凶杀（指非法故意杀害他人的行为）；verb. 谋杀；凶杀（指实施谋杀行为）",
        "example": "'At the time the murder was committed, I was travelling on the 8 o'clock train to London,' said the man.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "commit",
        "syllables": "commit",
        "phonetic": "/kəˈmɪt/",
        "definition": "verb. 犯（罪）；做（错事）（常与crime, murder, suicide等词搭配使用）",
        "example": "'At the time the murder was committed, I was travelling on the 8 o'clock train to London,' said the man.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "inspector",
        "syllables": "inspector",
        "phonetic": "/ɪnˈspektə/",
        "definition": "noun. 警督；检查员（指负责调查或检查的警官）",
        "example": "asked the inspector.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "confirm",
        "syllables": "confirm",
        "phonetic": "/kənˈfɜːm/",
        "definition": "verb. 确认；证实（指证明某事属实或正确）",
        "example": "My employer will confirm that I was there on time.'",
        "emoji": "✨",
        "longman": [
          "to show that something is definitely true, especially by providing more proof",
          "to say that something is definitely true"
        ]
      },
      {
        "word": "employer",
        "syllables": "employer",
        "phonetic": "/ɪmˈplɔɪə/",
        "definition": "noun. 雇主；老板（指雇用他人工作的人）",
        "example": "My employer will confirm that I was there on time.'",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "arrive",
        "syllables": "arrive",
        "phonetic": "/əˈraɪv/",
        "definition": "verb. 到达；抵达（arrive at + 小地点（车站）；arrive in + 大地点（城市））",
        "example": "'At what time did you arrive at the station?'",
        "emoji": "✨",
        "longman": [
          "to get to the place you are going to",
          "if something arrives, it is brought or delivered to you"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“谋杀发生时，我正乘坐8点的火车。”（At the time..., 主语 + was/were + doing...）？",
        "options": [
          "At the time the murder was committed, I was travelling on the 8 o'clock train.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“At the time the murder was committed, I was travelling on the 8 o'clock train.”（谋杀发生时，我正乘坐8点的火车。），重点掌握句型：At the time..., 主语 + was/were + doing...。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing + 时间状语）？",
        "options": [
          "He have go to school tomorrow.",
          "At the time the murder was committed, I was travelling on the 8 o'clock train.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“At the time the murder was committed, I was travelling on the 8 o'clock train.”（谋杀发生时，我正乘坐8点的火车。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'murder' (/ˈmɜːdə/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 谋杀；凶杀"
        ],
        "answerIndex": 2,
        "explanation": "单词 'murder' 的意思是：noun. 谋杀；凶杀（指非法故意杀害他人的行为）。"
      }
    ],
    "funPrompt": "读完《A perfect alibi》后，试着用自己的话回答课前问题：What was wrong with the man's story?"
  },
  {
    "id": 2088,
    "day": 88,
    "lessonNum": "88",
    "week": 4,
    "track": "nce2",
    "title": "L88: Trapped in a mine 困在矿井里",
    "coverEmoji": "⛏️",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 184,
    "intro": "🎯 课前导读问题：Why is the rescue taking so long?\n📌 语法与句型重点：【第三条件句（Third Conditional）】If + 主语 + had + 过去分词，主语 + would have + 过去分词 — 用于讨论与过去事实相反的假设情况，表达遗憾或想象的结果。 例：If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours. (如果土壤下面没有那层硬岩石，他们本可以在几个小时内完成这项工作的。) ｜ 【现在完成进行时（Present Perfect Continuous）】主语 + have/has + been + 动词-ing — 强调动作的持续性，通常与 for、since、all day 等时间状语连用。 例：They have been drilling for 16 hours. (他们已经钻了16个小时了。)\n💬 核心短语：“bring to the surface”（把...带到地面，救出地面）；“run out of”（用完，耗尽（主动含义，主语消耗完某物））；“keep in touch with”（与...保持联系）",
    "paragraphs": [
      "Six men have been trapped in a mine for seventeen hours. If they are not brought to the surface soon they may lose their lives. However, rescue operations are proving difficult. If explosives are used, vibrations will cause the roof of the mine to collapse.",
      "Rescue workers are therefore drilling a hole on the north side of the mine. They intend to bring the men up in a special capsule. If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours. As it is, they have been drilling for sixteen hours and they still have a long way to go.",
      "Meanwhile, a microphone, which was lowered into the mine two hours ago, has enabled the men to keep in touch with their closest relatives. Though they are running out of food and drink, the men are cheerful and confident that they will get out soon. They have been told that rescue operations are progressing smoothly. If they knew how difficult it was to drill through the hard rock, they would lose heart."
    ],
    "vocabulary": [
      {
        "word": "trap",
        "syllables": "trap",
        "phonetic": "/træp/",
        "definition": "verb. 使困住，使陷入困境（常用被动语态 be trapped in）；noun. 陷阱，困境（可指物理陷阱或比喻意义上的困境）",
        "example": "Six men have been trapped in a mine for seventeen hours.",
        "emoji": "✨",
        "longman": [
          "a piece of equipment for catching animals",
          "a clever trick that is used to catch someone or to make them do or say something that they did not intend to",
          "an unpleasant or difficult situation that is difficult to escape from"
        ]
      },
      {
        "word": "rescue",
        "syllables": "rescue",
        "phonetic": "/ˈreskjuː/",
        "definition": "verb. 营救，救援（常用 rescue sb from sth）；noun. 营救，救援（可作主语或宾语）",
        "example": "However, rescue operations are proving difficult.",
        "emoji": "✨",
        "longman": [
          "to save someone or something from a situation of danger or harm",
          "to remove someone from a dangerous, difficult, or unpleasant situation"
        ]
      },
      {
        "word": "surface",
        "syllables": "surface",
        "phonetic": "/ˈsɜːfɪs/",
        "definition": "noun. 表面，地面（bring to the surface 带到地面）；verb. 浮出水面，露面（不及物动词）",
        "example": "If they are not brought to the surface soon they may lose their lives.",
        "emoji": "✨",
        "longman": [
          "the top layer of an area of water or land",
          "the outside or top layer of something"
        ]
      },
      {
        "word": "operation",
        "syllables": "operation",
        "phonetic": "/ˌɒpəˈreɪʃn/",
        "definition": "noun. 操作，行动，手术（rescue operations 救援行动）；noun. 运算（数学用语）",
        "example": "However, rescue operations are proving difficult.",
        "emoji": "✨",
        "longman": [
          "the process of cutting into someone’s body to repair or remove a part that is damaged",
          "a business, company, or organization"
        ]
      },
      {
        "word": "explosive",
        "syllables": "explosive",
        "phonetic": "/ɪkˈspləʊsɪv/",
        "definition": "noun. 炸药，爆炸物（常用复数形式 explosives）；adj. 爆炸的，易爆的（作定语修饰名词）",
        "example": "If explosives are used, vibrations will cause the roof of the mine to collapse.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "vibration",
        "syllables": "vibration",
        "phonetic": "/vaɪˈbreɪʃn/",
        "definition": "noun. 震动，颤动（常用复数 vibrations）；noun. 共鸣，感受（非正式用语，意为'直觉感受'）",
        "example": "If explosives are used, vibrations will cause the roof of the mine to collapse.",
        "emoji": "✨",
        "longman": [
          "a continuous slight shaking movement"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“如果土壤下面没有那层硬岩石，他们本可以在几个小时内完成这项工作的。”（If + there had not been + 名词，主语 + would have + 过去分词）？",
        "options": [
          "If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours.”（如果土壤下面没有那层硬岩石，他们本可以在几个小时内完成这项工作的。），重点掌握句型：If + there had not been + 名词，主语 + would have + 过去分词。"
      },
      {
        "question": "语法要点【第三条件句（Third Conditional）】：下列哪个例句符合本课语法结构（If + 主语 + had + 过去分词，主语 + would have + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours.”（如果土壤下面没有那层硬岩石，他们本可以在几个小时内完成这项工作的。）展示了本课重点语法【第三条件句（Third Conditional）】：表示与过去事实完全相反的假设，结构为'如果过去做了某事（但实际没做），结果会不同'。"
      },
      {
        "question": "What does the word 'trap' (/træp/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "verb. 使困住，使陷入困境"
        ],
        "answerIndex": 2,
        "explanation": "单词 'trap' 的意思是：verb. 使困住，使陷入困境（常用被动语态 be trapped in）。"
      }
    ],
    "funPrompt": "读完《Trapped in a mine》后，试着用自己的话回答课前问题：Why is the rescue taking so long?"
  },
  {
    "id": 2089,
    "day": 89,
    "lessonNum": "89",
    "week": 4,
    "track": "nce2",
    "title": "L89: A slip of the tongue 口误",
    "coverEmoji": "🎭",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "4 mins",
    "wordCount": 178,
    "intro": "🎯 课前导读问题：Who made the only funny joke that evening and why?\n📌 语法与句型重点：【情态动词need的用法（needn't have done）】主语 + needn't have + 过去分词 — 用于表达某动作是不必要的，但已经发生了。 例：Those who failed to get in need not have felt disappointed. (那些没能进去的人本不必感到失望。) ｜ 【情态动词should的用法（should have done）】主语 + should have + 过去分词 — 用于表达遗憾或责备，暗示期望与现实的差距。 例：Many of the artistes who should have appeared did not come. (许多本应该出现的艺人没有来。)\n💬 核心短语：“get round”（消息传开；传播）；“queue for”（排队等候）；“burst out laughing”（突然大笑起来）",
    "paragraphs": [
      "People will do anything to see a free show -- even if it is a bad one. When the news got round that a comedy show would be presented at our local cinema by the P. and U. Bird Seed Company, we all rushed to see it.",
      "We had to queue for hours to get in and there must have been several hundred people present just before the show began. Unfortunately, the show was one of the dullest we have ever seen. Those who failed to get in need not have felt disappointed, as many of the artistes who should have appeared did not come. The only funny things we heard that evening came from the advertiser at the beginning of the programme.",
      "He was obviously very nervous and for some minutes stood awkwardly before the microphone. As soon as he opened his mouth, everyone burst out laughing. We all know what the poor man should have said, but what he actually said was: 'This is the Poo and Ee Seed Bird Company. Good ladies, evening and gentlemen!\""
    ],
    "vocabulary": [
      {
        "word": "comedy",
        "syllables": "comedy",
        "phonetic": "/ˈkɒmədi/",
        "definition": "noun. 喜剧；喜剧表演（指使人发笑的戏剧或表演形式）",
        "example": "When the news got round that a comedy show would be presented at our local cinema by the P.",
        "emoji": "✨",
        "longman": [
          "entertainment that is intended to make people laugh",
          "a play, film, or television program that is intended to make people laugh"
        ]
      },
      {
        "word": "present",
        "syllables": "present",
        "phonetic": "/prɪˈzent/",
        "definition": "verb. 上演；呈现（指演出或展示某事物）",
        "example": "When the news got round that a comedy show would be presented at our local cinema by the P.",
        "emoji": "✨",
        "longman": [
          "in a particular place",
          "to be felt strongly or remembered for a long time",
          "happening or existing now"
        ]
      },
      {
        "word": "queue",
        "syllables": "queue",
        "phonetic": "/kjuː/",
        "definition": "verb. 排队（常与up连用，表示排队等候）",
        "example": "We had to queue for hours to get in and there must have been several hundred people present just before the show began.",
        "emoji": "✨",
        "longman": [
          "a line of people waiting to enter a building , buy something etc, or a line of vehicles waiting to move",
          "all the people who are waiting to have or get something",
          "a list of jobs that a computer has to do in a particular order"
        ]
      },
      {
        "word": "unfortunately",
        "syllables": "unfortunately",
        "phonetic": "/ʌnˈfɔːtʃənətli/",
        "definition": "adverb. 不幸地（用于表达令人失望或糟糕的情况）",
        "example": "Unfortunately, the show was one of the dullest we have ever seen.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "dull",
        "syllables": "dull",
        "phonetic": "/dʌl/",
        "definition": "adjective. 枯燥的；无聊的（形容缺乏趣味或刺激的事物）",
        "example": "Unfortunately, the show was one of the dullest we have ever seen.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "artiste",
        "syllables": "artiste",
        "phonetic": "/ɑːˈtiːst/",
        "definition": "noun. 艺人；演员（指专业表演者，如歌手、舞者等）",
        "example": "Those who failed to get in need not have felt disappointed, as many of the artistes who should have appeared did not come.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“人们会做任何事去看免费表演——即使是很糟糕的。”（People will do anything to + 动词原形）？",
        "options": [
          "People will do anything to see a free show--even if it is a bad one.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“People will do anything to see a free show--even if it is a bad one.”（人们会做任何事去看免费表演——即使是很糟糕的。），重点掌握句型：People will do anything to + 动词原形。"
      },
      {
        "question": "语法要点【情态动词need的用法（needn't have done）】：下列哪个例句符合本课语法结构（主语 + needn't have + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "Those who failed to get in need not have felt disappointed.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Those who failed to get in need not have felt disappointed.”（那些没能进去的人本不必感到失望。）展示了本课重点语法【情态动词need的用法（needn't have done）】：needn't have + 过去分词表示本不必做某事（但实际上已经做了）。"
      },
      {
        "question": "What does the word 'comedy' (/ˈkɒmədi/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 喜剧；喜剧表演"
        ],
        "answerIndex": 2,
        "explanation": "单词 'comedy' 的意思是：noun. 喜剧；喜剧表演（指使人发笑的戏剧或表演形式）。"
      }
    ],
    "funPrompt": "读完《A slip of the tongue》后，试着用自己的话回答课前问题：Who made the only funny joke that evening and why?"
  },
  {
    "id": 2090,
    "day": 90,
    "lessonNum": "90",
    "week": 4,
    "track": "nce2",
    "title": "L90: What's for supper? 晚餐吃什么？",
    "coverEmoji": "🛢️",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 189,
    "intro": "🎯 课前导读问题：What kind of fish are they?\n📌 语法与句型重点：【现在完成进行时 (Present Perfect Continuous)】主语 + have/has + been + 动词-ing — 用于描述一个持续进行的动作，常与all + 时间段或for/since连用。 例：Fish has become more and more expensive as the oceans have been overfished. (由于海洋被过度捕捞，鱼变得越来越贵。) ｜ 【现在完成时的被动语态 (Present Perfect Passive)】主语 + have/has + been + 过去分词 — 强调动作的承受者而非执行者。 例：The oceans have been overfished. (海洋已被过度捕捞。)\n💬 核心短语：“fish and chips”（炸鱼薯条，英国经典快餐）；“out of one's wits”（吓得魂不附体；不知所措）；“bump into”（撞上；碰见）",
    "paragraphs": [
      "Fish and chips has always been a favourite dish in Britain, but as the oceans have been overfished, fish has become more and more expensive. So it comes as a surprise to learn that giant fish are terrifying the divers on North Sea oil rigs. Oil rigs have to be repaired frequently and divers, who often have to work in darkness a hundred feet under water, have been frightened out of their wits by giant fish bumping into them as they work. Now they have had special cages made to protect them from these monsters.",
      "The fish are not sharks or killer whales, but favourite eating varieties like cod and skate which grow to unnatural sizes, sometimes as much as twelve feet in length. Three factors have caused these fish to grow so large: the warm water round the hot oil pipes under the sea; the plentiful supply of food thrown overboard by the crews on the rigs; the total absence of fishing boats around the oil rigs. As a result, the fish just eat and eat and grow and grow in the lovely warm water. Who eats who?"
    ],
    "vocabulary": [
      {
        "word": "terrifying",
        "syllables": "terrifying",
        "phonetic": "/ˈterɪfaɪɪŋ/",
        "definition": "adj. 令人恐惧的；可怕的（修饰物或事，表示令人害怕）",
        "example": "So it comes as a surprise to learn that giant fish are terrifying the divers on North Sea oil rigs.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "overfish",
        "syllables": "overfish",
        "phonetic": "/ˌəʊvəˈfɪʃ/",
        "definition": "verb. 过度捕捞（指对鱼类进行过度捕获）",
        "example": "Fish and chips has always been a favourite dish in Britain, but as the oceans have been overfished, fish has become more and more expensive.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "diver",
        "syllables": "diver",
        "phonetic": "/ˈdaɪvə/",
        "definition": "noun. 潜水员（指在水中作业的人员）",
        "example": "So it comes as a surprise to learn that giant fish are terrifying the divers on North Sea oil rigs.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "favourite",
        "syllables": "favourite",
        "phonetic": "/ˈfeɪvərɪt/",
        "definition": "adj. 最喜欢的（英式拼写，美式为favorite）",
        "example": "Fish and chips has always been a favourite dish in Britain, but as the oceans have been overfished, fish has become more and more expensive.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "cage",
        "syllables": "cage",
        "phonetic": "/keɪdʒ/",
        "definition": "noun. 笼子； cage 也可用作动词表示把...关进笼子（保护性结构，可作名词或动词）",
        "example": "Now they have had special cages made to protect them from these monsters.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "monster",
        "syllables": "monster",
        "phonetic": "/ˈmɒnstə/",
        "definition": "noun. 怪物；怪兽（指体型巨大或可怕的生物）",
        "example": "Now they have had special cages made to protect them from these monsters.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“潜水员们一直被吓得魂不附体。”（主语 + have/has + been + 动词-ing（现在完成进行时））？",
        "options": [
          "Divers have been frightened out of their wits.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“Divers have been frightened out of their wits.”（潜水员们一直被吓得魂不附体。），重点掌握句型：主语 + have/has + been + 动词-ing（现在完成进行时）。"
      },
      {
        "question": "语法要点【现在完成进行时 (Present Perfect Continuous)】：下列哪个例句符合本课语法结构（主语 + have/has + been + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "Fish has become more and more expensive as the oceans have been overfished.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Fish has become more and more expensive as the oceans have been overfished.”（由于海洋被过度捕捞，鱼变得越来越贵。）展示了本课重点语法【现在完成进行时 (Present Perfect Continuous)】：表示从过去开始一直持续到现在并可能继续下去的动作，强调动作的持续性。"
      },
      {
        "question": "What does the word 'terrifying' (/ˈterɪfaɪɪŋ/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "adj. 令人恐惧的；可怕的"
        ],
        "answerIndex": 2,
        "explanation": "单词 'terrifying' 的意思是：adj. 令人恐惧的；可怕的（修饰物或事，表示令人害怕）。"
      }
    ],
    "funPrompt": "读完《What's for supper?》后，试着用自己的话回答课前问题：What kind of fish are they?"
  },
  {
    "id": 2091,
    "day": 91,
    "lessonNum": "91",
    "week": 4,
    "track": "nce2",
    "title": "L91: Three men in a basket 三人同篮",
    "coverEmoji": "🎈",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 184,
    "intro": "🎯 课前导读问题：Where was the station's Commanding Officer?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述正在进行的动作，或与一般过去时连用表示一个动作发生时另一个动作正在进行。通常与when、while、as等连用。。 例：The balloon seemed to be making for the RAF station. (气球似乎正朝皇家空军基地飘去。) ｜ 【过去完成时 (Past Perfect Tense)】主语 + had + 过去分词 — 用于描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。常与before、after、by、when等连用。。 例：He had never seen anything like it before. (他以前从未见过这样的东西。)\n💬 核心短语：“make for”（驶向/走向某地，表示朝某个方向前进）；“keep track of”（追踪/掌握...的动态，保持对某事的了解）；“make out”（辨认出/看清楚/理解，常用于表示看清或辨认某物）",
    "paragraphs": [
      "A pilot noticed a balloon which seemed to be making for a Royal Air Force Station nearby. He informed the station at once, but no one there was able to explain the mystery. The officer in the control tower was very angry when he heard the news, because balloons can be a great danger to aircraft. He said that someone might be spying on the station and the pilot was ordered to keep track of the strange object.",
      "The pilot managed to circle the balloon for some time. He could make out three men in a basket under it and one of them was holding a pair of binoculars. When the balloon was over the station, the pilot saw one of the men taking photographs. Soon afterwards, the balloon began to descend and it landed near an airfield.",
      "The police were called in, but they could not arrest anyone, for the basket contained two Members of Parliament and the Commanding Officer of the station! As the Commanding Officer explained later, one half of the station did not know what the other half was doing!"
    ],
    "vocabulary": [
      {
        "word": "balloon",
        "syllables": "balloon",
        "phonetic": "/bəˈluːn/",
        "definition": "noun. 气球（指充气后能飘浮在空中的球状物，常用于娱乐或侦察）",
        "example": "A pilot noticed a balloon which seemed to be making for a Royal Air Force Station nearby.",
        "emoji": "✨",
        "longman": [
          "an object made of brightly colored thin rubber, that is filled with air and used as a toy or decoration for parties",
          "a large bag of strong light cloth filled with gas or heated air so that it can float in the air. It has a basket hanging below it for people to stand in"
        ]
      },
      {
        "word": "pilot",
        "syllables": "pilot",
        "phonetic": "/ˈpaɪlət/",
        "definition": "noun. 飞行员（指驾驶飞机的人）；verb. 驾驶/领航（指驾驶飞机或引导船只）",
        "example": "A pilot noticed a balloon which seemed to be making for a Royal Air Force Station nearby.",
        "emoji": "✨",
        "longman": [
          "someone who operates the controls of an aircraft or spacecraft",
          "someone with a special knowledge of a particular area of water, who is employed to guide ships across it"
        ]
      },
      {
        "word": "station",
        "syllables": "station",
        "phonetic": "/ˈsteɪʃn/",
        "definition": "noun. 基地/站（指军事设施、警局或火车站等）",
        "example": "A pilot noticed a balloon which seemed to be making for a Royal Air Force Station nearby.",
        "emoji": "✨",
        "longman": [
          "a place where trains or buses regularly stop so that passengers can get on and off, goods can be loaded etc, or the buildings at such a place",
          "a building or place that is a center for a particular kind of service or activity",
          "an organization which makes television or radio broadcasts , or the building where this is done"
        ]
      },
      {
        "word": "aircraft",
        "syllables": "aircraft",
        "phonetic": "/ˈeəkrɑːft/",
        "definition": "noun. 飞机/航空器（飞机的总称，复数形式仍为aircraft）",
        "example": "The officer in the control tower was very angry when he heard the news, because balloons can be a great danger to aircraft.",
        "emoji": "✨",
        "longman": [
          "a plane or other vehicle that can fly"
        ]
      },
      {
        "word": "spy",
        "syllables": "spy",
        "phonetic": "/spaɪ/",
        "definition": "noun. 间谍/特工（指从事情报工作的人）；verb. 侦察/窥探（指暗中监视或收集情报）",
        "example": "He said that someone might be spying on the station and the pilot was ordered to keep track of the strange object.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "track",
        "syllables": "track",
        "phonetic": "/træk/",
        "definition": "verb. 追踪/跟踪（keep track of 意为'追踪/掌握...的动态'）；noun. 轨迹/轨道（指留下的痕迹或路径）",
        "example": "He said that someone might be spying on the station and the pilot was ordered to keep track of the strange object.",
        "emoji": "✨",
        "longman": [
          "a narrow path or road with a rough uneven surface , especially one made by people or animals frequently moving through the same place",
          "a circular course around which runners , cars etc race , which often has a specially prepared surface",
          "the two metal lines along which trains travel"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“军官听到消息时非常生气。”（主语 + was/were + 动词-ing + when + 主语 + 动词-ed）？",
        "options": [
          "The officer was very angry when he heard the news.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“The officer was very angry when he heard the news.”（军官听到消息时非常生气。），重点掌握句型：主语 + was/were + 动词-ing + when + 主语 + 动词-ed。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "The balloon seemed to be making for the RAF station.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The balloon seemed to be making for the RAF station.”（气球似乎正朝皇家空军基地飘去。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'balloon' (/bəˈluːn/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 气球"
        ],
        "answerIndex": 2,
        "explanation": "单词 'balloon' 的意思是：noun. 气球（指充气后能飘浮在空中的球状物，常用于娱乐或侦察）。"
      }
    ],
    "funPrompt": "读完《Three men in a basket》后，试着用自己的话回答课前问题：Where was the station's Commanding Officer?"
  },
  {
    "id": 2092,
    "day": 92,
    "lessonNum": "92",
    "week": 4,
    "track": "nce2",
    "title": "L92: Asking for trouble 自找麻烦",
    "coverEmoji": "🪟",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 184,
    "intro": "🎯 课前导读问题：Why did the policeman ask the writer to come to the police station?\n📌 语法与句型重点：【过去进行时 (Past Continuous Tense)】主语 + was/were + 动词-ing — 用于描述故事发生的背景，或表示过去的某个时刻正在进行的动作。 例：I was climbing towards the bedroom window. (我正在向卧室窗户攀爬。) ｜ 【when引导的并列句 (when-Compound Sentence)】过去进行时 + when + 一般过去时 — when在并列句中表示'就在这时'，when前的分句用过去进行时，when后的分句用一般过去时。 例：I was almost there when a voice said. (我快要到的时候，一个声音响起。)\n💬 核心短语：“wake up”（叫醒/醒来）；“put against”（靠在...上）；“look down”（向下看）",
    "paragraphs": [
      "It must have been about two in the morning when I returned home. I tried to wake up my wife by ringing the doorbell, but she was fast asleep, so I got a ladder from the shed in the garden, put it against the wall, and began climbing towards the bedroom window. I was almost there when a sarcastic voice below said, 'I don't think the windows need cleaning at this time of the night.' I looked down and nearly fell off the ladder when I saw a policeman. I immediately regretted answering in the way I did, but I said, 'I enjoy cleaning windows at night.'",
      "'So do I,' answered the policeman in the same tone. 'Excuse my interrupting you. I hate to interrupt a man when he's busy working, but would you mind coming with me to the station?'",
      "'Well, I'd prefer to stay here,' I said. 'You see. I've forgotten my key.'",
      "'Your what?' he called.",
      "'My key,' I shouted.",
      "Fortunately, the shouting woke up my wife who opened the window just as the policeman had started to climb towards me."
    ],
    "vocabulary": [
      {
        "word": "ladder",
        "syllables": "ladder",
        "phonetic": "/ˈlædər/",
        "definition": "noun. 梯子（用于攀爬高处，如爬墙或修缮房屋）",
        "example": "I tried to wake up my wife by ringing the doorbell, but she was fast asleep, so I got a ladder from the shed in the garden, put it against the wall, and began climbing towards the bedroom window.",
        "emoji": "✨",
        "longman": [
          "a piece of equipment used for climbing up to or down from high places. A ladder has two bars that are connected by rung",
          "a series of levels which someone moves up and down within an organization, profession, or society"
        ]
      },
      {
        "word": "shed",
        "syllables": "shed",
        "phonetic": "/ʃed/",
        "definition": "noun. 棚屋，小屋（指花园中存放工具的小房子）",
        "example": "I tried to wake up my wife by ringing the doorbell, but she was fast asleep, so I got a ladder from the shed in the garden, put it against the wall, and began climbing towards the bedroom window.",
        "emoji": "✨",
        "longman": [
          "a small building, often made of wood, used especially for storing things",
          "a large industrial building where work is done, large vehicles are kept, machinery is stored etc"
        ]
      },
      {
        "word": "sarcastic",
        "syllables": "sarcastic",
        "phonetic": "/sɑːrˈkæstɪk/",
        "definition": "adjective. 讽刺的，嘲笑的（形容用讽刺的语气说话，常带有贬义）",
        "example": "I was almost there when a sarcastic voice below said, 'I don't think the windows need cleaning at this time of the night.'",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "interrupt",
        "syllables": "interrupt",
        "phonetic": "/ˌɪntəˈrʌpt/",
        "definition": "verb. 打断，中断（指打断某人说话或正在做的事）",
        "example": "'Excuse my interrupting you.",
        "emoji": "✨",
        "longman": [
          "to stop someone from continuing what they are saying or doing by suddenly speaking to them, making a noise etc",
          "to make a process or activity stop temporarily"
        ]
      },
      {
        "word": "regret",
        "syllables": "regret",
        "phonetic": "/rɪˈɡret/",
        "definition": "verb. 后悔，遗憾（表示对已做的事感到后悔）",
        "example": "I immediately regretted answering in the way I did, but I said, 'I enjoy cleaning windows at night.'",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "fortunately",
        "syllables": "fortunately",
        "phonetic": "/ˈfɔːrtʃənətli/",
        "definition": "adverb. 幸运地（用于引出好的结果或运气好的情况）",
        "example": "Fortunately, the shouting woke up my wife who opened the window just as the policeman had started to climb towards me.",
        "emoji": "✨",
        "longman": [
          "happening because of good luck"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“我快要到的时候，下面一个讽刺的声音响起。”（I was + 动词-ing when + 主语 + 动词过去式）？",
        "options": [
          "I was almost there when a sarcastic voice below said.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“I was almost there when a sarcastic voice below said.”（我快要到的时候，下面一个讽刺的声音响起。），重点掌握句型：I was + 动词-ing when + 主语 + 动词过去式。"
      },
      {
        "question": "语法要点【过去进行时 (Past Continuous Tense)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing）？",
        "options": [
          "He have go to school tomorrow.",
          "I was climbing towards the bedroom window.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I was climbing towards the bedroom window.”（我正在向卧室窗户攀爬。）展示了本课重点语法【过去进行时 (Past Continuous Tense)】：表示在过去某一时刻或某一段时间正在进行的动作。"
      },
      {
        "question": "What does the word 'ladder' (/ˈlædər/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 梯子"
        ],
        "answerIndex": 2,
        "explanation": "单词 'ladder' 的意思是：noun. 梯子（用于攀爬高处，如爬墙或修缮房屋）。"
      }
    ],
    "funPrompt": "读完《Asking for trouble》后，试着用自己的话回答课前问题：Why did the policeman ask the writer to come to the police station?"
  },
  {
    "id": 2093,
    "day": 93,
    "lessonNum": "93",
    "week": 4,
    "track": "nce2",
    "title": "L93: A noble gift 崇高的礼物",
    "coverEmoji": "🗽",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 182,
    "intro": "🎯 课前导读问题：Where was the Statue of Liberty made?\n📌 语法与句型重点：【过去完成时 (Past Perfect Tense)】had + 过去分词 — 描述两个过去的动作，先发生的动作用过去完成时，后发生的动作用一般过去时。 例：The framework had been especially constructed by Eiffel. (框架是由埃菲尔特别建造的。) ｜ 【过去完成进行时 (Past Perfect Continuous)】had been + doing — 强调动作的持续性和未完成性。 例：It has been a symbol of liberty for millions of people. (它一直是数百万人民的自由象征。)\n💬 核心短语：“take...years to complete”（表示完成某事花费了多长时间）；“be made of”（表示由某种材料制成（能看出原材料））；“be taken to pieces”（被拆成零件；被拆散）",
    "paragraphs": [
      "One of the most famous monuments in the world, the Statue of Liberty, was presented to the United States of America in the nineteenth century by the people of France. The great statue, which was designed by the sculptor Auguste Bartholdi, took ten years to complete. The actual figure was made of copper supported by a metal framework which had been especially constructed by Eiffel. Before it could be transported to the United States, a site had to be found for it and a pedestal had to be built.",
      "The site chosen was an island at the entrance of New York Harbour. By 1884, a statue which was 151 feet tall had been erected in Paris. The following year, it was taken to pieces and sent to America. By the end of October 1886, the statue had been put together again and it was officially presented to the American people by Bartholdi.",
      "Ever since then, the great monument has been a symbol of liberty for the millions of people who have passed through New York Harbour to make their homes in America."
    ],
    "vocabulary": [
      {
        "word": "monument",
        "syllables": "monument",
        "phonetic": "/ˈmɒnjumənt/",
        "definition": "noun. 纪念碑；纪念物（指为纪念重要人物或事件而建造的建筑物）",
        "example": "One of the most famous monuments in the world, the Statue of Liberty, was presented to the United States of America in the nineteenth century by the people of France.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "present",
        "syllables": "present",
        "phonetic": "/prɪˈzent/",
        "definition": "verb. 赠送；呈递（作为礼物送给某人）",
        "example": "One of the most famous monuments in the world, the Statue of Liberty, was presented to the United States of America in the nineteenth century by the people of France.",
        "emoji": "✨",
        "longman": [
          "in a particular place",
          "to be felt strongly or remembered for a long time",
          "happening or existing now"
        ]
      },
      {
        "word": "sculptor",
        "syllables": "sculptor",
        "phonetic": "/ˈskʌlptə(r)/",
        "definition": "noun. 雕塑家；雕刻家（从事雕塑创作的人）",
        "example": "The great statue, which was designed by the sculptor Auguste Bartholdi, took ten years to complete.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "copper",
        "syllables": "copper",
        "phonetic": "/ˈkɒpə(r)/",
        "definition": "noun. 铜；铜币（一种红棕色的金属材料）",
        "example": "The actual figure was made of copper supported by a metal framework which had been especially constructed by Eiffel.",
        "emoji": "✨",
        "longman": [
          "a soft reddish-brown metal that allows electricity and heat to pass through it easily, and is used to make electrical wires, water pipes etc. It is a chemica...",
          "a reddish-brown color"
        ]
      },
      {
        "word": "framework",
        "syllables": "framework",
        "phonetic": "/ˈfreɪmwɜːk/",
        "definition": "noun. 框架；结构（支撑或构成某物的基本结构）",
        "example": "The actual figure was made of copper supported by a metal framework which had been especially constructed by Eiffel.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "pedestal",
        "syllables": "pedestal",
        "phonetic": "/ˈpedɪstl/",
        "definition": "noun. 底座；基座（雕像、柱子等下面的支撑基座）",
        "example": "Before it could be transported to the United States, a site had to be found for it and a pedestal had to be built.",
        "emoji": "✨",
        "longman": [
          "the base on which a pillar",
          "a solid vertical post that supports something such as a table"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“世界上最著名的纪念碑之一——自由女神像...”（One of the most + 形容词最高级 + 可数名词复数...）？",
        "options": [
          "One of the most famous monuments in the world, the Statue of Liberty...",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“One of the most famous monuments in the world, the Statue of Liberty...”（世界上最著名的纪念碑之一——自由女神像...），重点掌握句型：One of the most + 形容词最高级 + 可数名词复数...。"
      },
      {
        "question": "语法要点【过去完成时 (Past Perfect Tense)】：下列哪个例句符合本课语法结构（had + 过去分词）？",
        "options": [
          "He have go to school tomorrow.",
          "The framework had been especially constructed by Eiffel.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“The framework had been especially constructed by Eiffel.”（框架是由埃菲尔特别建造的。）展示了本课重点语法【过去完成时 (Past Perfect Tense)】：表示在过去某一时间之前已经完成的动作，常与by+过去时间或before/after连用。"
      },
      {
        "question": "What does the word 'monument' (/ˈmɒnjumənt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 纪念碑；纪念物"
        ],
        "answerIndex": 2,
        "explanation": "单词 'monument' 的意思是：noun. 纪念碑；纪念物（指为纪念重要人物或事件而建造的建筑物）。"
      }
    ],
    "funPrompt": "读完《A noble gift》后，试着用自己的话回答课前问题：Where was the Statue of Liberty made?"
  },
  {
    "id": 2094,
    "day": 94,
    "lessonNum": "94",
    "week": 4,
    "track": "nce2",
    "title": "L94: Future champions 未来的冠军",
    "coverEmoji": "🏊‍♀️",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "4 mins",
    "wordCount": 179,
    "intro": "🎯 课前导读问题：What kind of race do the children compete in?\n📌 语法与句型重点：【被动语态（Passive Voice）】主语 + be动词 + 过去分词 + (by + 执行者) — 当不必指出动作执行者、或动作执行者不明确时使用。也用于强调动作的承受者。。 例：Children can be instructed in swimming at a very early age. (孩子们在很小的年龄就可以接受游泳训练。) ｜ 【so...that 引导的结果状语从句】so + 形容词/副词 + that + 结果状语从句 — 用于描述程度，强调某种情况导致的结果。。 例：They are so accustomed to swimming that they can pick up weights. (他们如此习惯游泳以至于能捡起池底的重量。)\n💬 核心短语：“hold one's breath”（屏住呼吸）；“be accustomed to doing sth”（习惯于做某事）；“pick up”（捡起；拾起；学会）",
    "paragraphs": [
      "Experiments have proved that children can be instructed in swimming at a very early age. At a special swimming pool in Los Angeles, children become expert at holding their breath under water even before they can walk. Babies of two months old do not appear to be reluctant to enter the water. It is not long before they are so accustomed to swimming that they can pick up weights from the floor of the pool.",
      "A game that is very popular with these young swimmers is the underwater tricycle race. Tricycles are lined up on the floor of the pool seven feet under water. The children compete against each other to reach the other end of the pool. Many pedal their tricycles, but most of them prefer to push or drag them.",
      "Some children can cover the whole length of the pool without coming up for breath even once. Whether they will ever become future Olympic champions, only time will tell. Meanwhile, they should encourage those among us who cannot swim five yards before they are gasping for air."
    ],
    "vocabulary": [
      {
        "word": "experiment",
        "syllables": "experiment",
        "phonetic": "/ɪkˈsperɪmənt/",
        "definition": "noun. 实验；试验（指为验证某理论或发现而进行的操作）；verb. 进行实验；尝试（进行实验或尝试新方法）",
        "example": "Experiments have proved that children can be instructed in swimming at a very early age.",
        "emoji": "✨",
        "longman": [
          "a scientific test done to find out how something reacts under certain conditions, or to find out if a particular idea is true",
          "a process in which you test a new idea or method to see if it is useful or effective"
        ]
      },
      {
        "word": "instruct",
        "syllables": "instruct",
        "phonetic": "/ɪnˈstrʌkt/",
        "definition": "verb. 教导；指导；命令（正式用语，指教导或指示某人做某事）",
        "example": "Experiments have proved that children can be instructed in swimming at a very early age.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "expert",
        "syllables": "expert",
        "phonetic": "/ˈekspɜːt/",
        "definition": "noun. 专家；能手（在某一领域有丰富知识和技能的人）；adjective. 熟练的；内行的（形容在某方面很有经验或技巧）",
        "example": "At a special swimming pool in Los Angeles, children become expert at holding their breath under water even before they can walk.",
        "emoji": "✨",
        "longman": [
          "someone who has a special skill or special knowledge of a subject, gained as a result of training or experience",
          "someone who has a lot of knowledge about something or skill at doing something"
        ]
      },
      {
        "word": "breath",
        "syllables": "breath",
        "phonetic": "/breθ/",
        "definition": "noun. 呼吸；气息（指呼吸的动作或空气）",
        "example": "At a special swimming pool in Los Angeles, children become expert at holding their breath under water even before they can walk.",
        "emoji": "✨",
        "longman": [
          "the air that you send out of your lungs when you breathe",
          "air that you take into your lungs"
        ]
      },
      {
        "word": "reluctant",
        "syllables": "reluctant",
        "phonetic": "/rɪˈlʌktənt/",
        "definition": "adjective. 不情愿的；勉强的（形容不愿意做某事的态度，常与to连用）",
        "example": "Babies of two months old do not appear to be reluctant to enter the water.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "accustomed",
        "syllables": "accustomed",
        "phonetic": "/əˈkʌstəmd/",
        "definition": "adjective. 习惯于的；适应的（be accustomed to doing sth表示习惯于做某事）",
        "example": "It is not long before they are so accustomed to swimming that they can pick up weights from the floor of the pool.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“没过多久他们就习惯了游泳。”（It is not long before...）？",
        "options": [
          "It is not long before they are so accustomed to swimming.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“It is not long before they are so accustomed to swimming.”（没过多久他们就习惯了游泳。），重点掌握句型：It is not long before...。"
      },
      {
        "question": "语法要点【被动语态（Passive Voice）】：下列哪个例句符合本课语法结构（主语 + be动词 + 过去分词 + (by + 执行者)）？",
        "options": [
          "He have go to school tomorrow.",
          "Children can be instructed in swimming at a very early age.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“Children can be instructed in swimming at a very early age.”（孩子们在很小的年龄就可以接受游泳训练。）展示了本课重点语法【被动语态（Passive Voice）】：当句子的主语是动作的承受者时，使用被动语态。主动语态强调动作执行者，被动语态强调动作本身或承受者。。"
      },
      {
        "question": "What does the word 'experiment' (/ɪkˈsperɪmənt/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 实验；试验"
        ],
        "answerIndex": 2,
        "explanation": "单词 'experiment' 的意思是：noun. 实验；试验（指为验证某理论或发现而进行的操作）。"
      }
    ],
    "funPrompt": "读完《Future champions》后，试着用自己的话回答课前问题：What kind of race do the children compete in?"
  },
  {
    "id": 2095,
    "day": 95,
    "lessonNum": "95",
    "week": 4,
    "track": "nce2",
    "title": "L95: A fantasy 纯属虚构",
    "coverEmoji": "🧯",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 181,
    "intro": "🎯 课前导读问题：Why was the Ambassador particularly lucky?\n📌 语法与句型重点：【过去进行时 + when + 一般过去时 (Past Continuous + when + Past Simple)】主语 + was/were + 动词-ing + when + 主语 + 动词过去式 — 当一个正在进行的动作被另一个突然发生的动作打断时使用。when后的动作通常用一般过去时，表示意外或突然发生的事件。。 例：I was walking down the street when it started to rain. (我正在街上走，突然开始下雨了。) ｜ 【过去虚拟语气 (Third Conditional / Past Unreal Conditional)】If + 主语 + had + 过去分词..., 主语 + would have + 过去分词... — 用于谈论与过去事实相反的假设情况，表达后悔、遗憾或想象。。 例：If I had been wearing it, I would not have been able to get home for lunch. (如果我当时戴着它，就不能回家吃午饭了。（实际上没戴，所以能回家）)\n💬 核心短语：“get a shock”（受到惊吓；大吃一惊）；“in a frightful state”（状况糟糕；处于可怕的状态）；“set something on fire”（放火烧某物；使燃烧）",
    "paragraphs": [
      "When the Ambassador or Escalopia returned home for lunch, his wife got a shock. He looked pale and his clothes were in a frightful state.",
      "'What has happened?' she asked. 'How did your clothes get into such a mess?'",
      "'A fire extinguisher, my dear,' answered the Ambassador drily. 'University students set the Embassy on fire this morning.'",
      "'Good heavens!' exclaimed his wife. 'And where were you at the time?'",
      "'I was in my office as usual,' answered the Ambassador. 'The fire broke out in the basement. I went down immediately, of course, and that fool, Horst, aimed a fire extinguisher at me. He thought I was on fire. I must definitely get that fellow posted.'",
      "The Ambassador's wife went on asking questions, when she suddenly noticed a big hole in her husband's hat.",
      "'And how can you explain that?' she asked.",
      "'Oh, that,' said the Ambassador. 'Someone fired a shot through my office window. Accurate, don't you think? Fortunately, I wasn't wearing it at the time. If I had been, I would not have been able to get home for lunch.'"
    ],
    "vocabulary": [
      {
        "word": "ambassador",
        "syllables": "ambassador",
        "phonetic": "/æmˈbæsədə(r)/",
        "definition": "noun. 大使（指驻外使节，代表国家）",
        "example": "When the Ambassador or Escalopia returned home for lunch, his wife got a shock.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "pale",
        "syllables": "pale",
        "phonetic": "/peɪl/",
        "definition": "adjective. 苍白的；灰白的（形容脸色不好或因恐惧、疾病导致的面色发白）",
        "example": "He looked pale and his clothes were in a frightful state.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "frightful",
        "syllables": "frightful",
        "phonetic": "/ˈfraɪtfl/",
        "definition": "adjective. 可怕的；糟糕的（形容非常糟糕、令人不悦的状况）",
        "example": "He looked pale and his clothes were in a frightful state.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "basement",
        "syllables": "basement",
        "phonetic": "/ˈbeɪsmənt/",
        "definition": "noun. 地下室（建筑物地下层的房间）",
        "example": "'The fire broke out in the basement.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "immediately",
        "syllables": "immediately",
        "phonetic": "/ɪˈmiːdiətli/",
        "definition": "adverb. 立即；马上（表示即刻、没有延迟）",
        "example": "I went down immediately, of course, and that fool, Horst, aimed a fire extinguisher at me.",
        "emoji": "✨",
        "longman": [
          "without delay",
          "very soon before or after something"
        ]
      },
      {
        "word": "aim",
        "syllables": "aim",
        "phonetic": "/eɪm/",
        "definition": "verb. 瞄准；对准（将某物指向目标）；verb. 旨在；目的是（表示目的或意图）",
        "example": "I went down immediately, of course, and that fool, Horst, aimed a fire extinguisher at me.",
        "emoji": "✨",
        "longman": [
          "something you hope to achieve by doing something",
          "someone’s ability to hit what they are aiming at when they throw or shoot something",
          "something you hope to achieve by doing something"
        ]
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“发生什么事了？”（What has happened?）？",
        "options": [
          "What has happened?",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“What has happened?”（发生什么事了？），重点掌握句型：What has happened?。"
      },
      {
        "question": "语法要点【过去进行时 + when + 一般过去时 (Past Continuous + when + Past Simple)】：下列哪个例句符合本课语法结构（主语 + was/were + 动词-ing + when + 主语 + 动词过去式）？",
        "options": [
          "He have go to school tomorrow.",
          "I was walking down the street when it started to rain.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“I was walking down the street when it started to rain.”（我正在街上走，突然开始下雨了。）展示了本课重点语法【过去进行时 + when + 一般过去时 (Past Continuous + when + Past Simple)】：过去进行时表示正在进行的动作，when引导的一般过去时表示突然发生的另一个动作。这个结构用于描述一个持续的动作被另一个短暂的动作打断。。"
      },
      {
        "question": "What does the word 'ambassador' (/æmˈbæsədə(r)/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 大使"
        ],
        "answerIndex": 2,
        "explanation": "单词 'ambassador' 的意思是：noun. 大使（指驻外使节，代表国家）。"
      }
    ],
    "funPrompt": "读完《A fantasy》后，试着用自己的话回答课前问题：Why was the Ambassador particularly lucky?"
  },
  {
    "id": 2096,
    "day": 96,
    "lessonNum": "96",
    "week": 4,
    "track": "nce2",
    "title": "L96: The dead return 亡灵返乡",
    "coverEmoji": "🏮",
    "category": "新概念二册 • Unit 4 (Lessons 73–96)",
    "level": "NCE Book 2",
    "levelBadge": "📘 新概念二 • Unit 4",
    "readingTime": "5 mins",
    "wordCount": 185,
    "intro": "🎯 课前导读问题：What happens to the lanterns at the end of the festival?\n📌 语法与句型重点：【一般过去时的被动语态】主语 + was/were + 过去分词 + (by + 动作执行者) — 当强调动作的承受者或不知道动作执行者时使用。 例：A Festival for the Dead is held once a year. (亡魂节每年举行一次。) ｜ 【be + 动词不定式（表示计划或安排）】主语 + am/is/are + to + 动词原形 — 表示将来确定会发生的事或被安排的事。 例：The dead are said to return to their homes. (据说死者会回到他们的家。)\n💬 核心短语：“be said to”（据说...；被说成...）；“be expected to”（被期望...；应该...）；“lay out”（摆放；摆出（食物等））",
    "paragraphs": [
      "A Festival for the Dead is held once a year in Japan. This festival is a cheerful occasion, for on this day, the dead are said to return to their homes and they are welcomed by the living. As they are expected to be hungry after their long journey, food is laid out for them. Specially-made lanterns are hung outside each house to help the dead to find their way.",
      "All night long, people dance and sing. In the early morning, the food that had been laid out for the dead is thrown into a river or into the sea as it is considered unlucky for anyone living to eat it. In towns that are near the sea, the tiny lanterns which had been hung in the streets the night before, are placed into the water when the festival is over. Thousands of lanterns slowly drift out to sea guiding the dead on their return journey to the other world.",
      "This is a moving spectacle, for crowds of people stand on the shore watching the lanterns drifting away until they can be seen no more."
    ],
    "vocabulary": [
      {
        "word": "festival",
        "syllables": "festival",
        "phonetic": "/ˈfestɪvəl/",
        "definition": "noun. 节日；festivity（指文化或宗教庆祝活动）",
        "example": "A Festival for the Dead is held once a year in Japan.",
        "emoji": "✨",
        "longman": [
          "an occasion when there are performances of many films, plays, pieces of music etc, usually happening in the same place every year",
          "a special occasion when people celebrate something such as a religious event, and there is often a public holiday"
        ]
      },
      {
        "word": "lantern",
        "syllables": "lantern",
        "phonetic": "/ˈlæntən/",
        "definition": "noun. 灯笼；提灯（通常指纸糊的照明灯具）",
        "example": "Specially-made lanterns are hung outside each house to help the dead to find their way.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "return",
        "syllables": "return",
        "phonetic": "/rɪˈtɜːn/",
        "definition": "verb. 返回；回来（指回到原来的地方）；noun. 返回；归还（指返回或归还的行为）",
        "example": "This festival is a cheerful occasion, for on this day, the dead are said to return to their homes and they are welcomed by the living.",
        "emoji": "✨",
        "longman": [
          "to go or come back to a place where you were before",
          "to give or send something back, or to put something back in its place",
          "if a feeling, situation etc returns, it starts to exist or happen again"
        ]
      },
      {
        "word": "journey",
        "syllables": "journey",
        "phonetic": "/ˈdʒɜːni/",
        "definition": "noun. 旅行；旅程（指从一个地方到另一个地方的路程）",
        "example": "As they are expected to be hungry after their long journey, food is laid out for them.",
        "emoji": "✨",
        "longman": [
          "an occasion when you travel from one place to another, especially over a long distance",
          "a long and often difficult process by which someone or something changes and develops"
        ]
      },
      {
        "word": "drift",
        "syllables": "drift",
        "phonetic": "/drɪft/",
        "definition": "verb. 漂流；漂移（指随风或水流动）",
        "example": "Thousands of lanterns slowly drift out to sea guiding the dead on their return journey to the other world.",
        "emoji": "✨",
        "longman": []
      },
      {
        "word": "spectacle",
        "syllables": "spectacle",
        "phonetic": "/ˈspektəkəl/",
        "definition": "noun. 景象；场面；壮观（指引人注目的场景或表演）",
        "example": "This is a moving spectacle, for crowds of people stand on the shore watching the lanterns drifting away until they can be seen no more.",
        "emoji": "✨",
        "longman": []
      }
    ],
    "quiz": [
      {
        "question": "本课核心句型练习：哪一句表达了“对于任何活着的人来说，吃它被认为是不吉利的。”（It is considered + adj. + (for someone) + to do something）？",
        "options": [
          "It is considered unlucky for anyone living to eat it.",
          "I don't know anything about this.",
          "Where did they go yesterday morning?"
        ],
        "answerIndex": 0,
        "explanation": "正确！课文中对应的原句是：“It is considered unlucky for anyone living to eat it.”（对于任何活着的人来说，吃它被认为是不吉利的。），重点掌握句型：It is considered + adj. + (for someone) + to do something。"
      },
      {
        "question": "语法要点【一般过去时的被动语态】：下列哪个例句符合本课语法结构（主语 + was/were + 过去分词 + (by + 动作执行者)）？",
        "options": [
          "He have go to school tomorrow.",
          "A Festival for the Dead is held once a year.",
          "Was they play football every day?"
        ],
        "answerIndex": 1,
        "explanation": "“A Festival for the Dead is held once a year.”（亡魂节每年举行一次。）展示了本课重点语法【一般过去时的被动语态】：表示过去发生的动作，且主语是动作的承受者。"
      },
      {
        "question": "What does the word 'festival' (/ˈfestɪvəl/) mean in this lesson?",
        "options": [
          "n. 宇宙飞船；火箭",
          "v. 驾驶帆船出海",
          "noun. 节日；festivity"
        ],
        "answerIndex": 2,
        "explanation": "单词 'festival' 的意思是：noun. 节日；festivity（指文化或宗教庆祝活动）。"
      }
    ],
    "funPrompt": "读完《The dead return》后，试着用自己的话回答课前问题：What happens to the lanterns at the end of the festival?"
  }
];

STORIES_DATA.push(...NCE2_STORIES);
if (typeof window !== 'undefined') {
  window.STORIES_DATA = STORIES_DATA;
}

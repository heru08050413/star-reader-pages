// stories_month2.js - Month 2 (Days 31-60) Reading Library for StarReader
// Level progression:
// Week 5 (Days 31-37): World Adventures & Foods (160-200 words)
// Week 6 (Days 38-44): Wonderful Animal Friends (170-210 words)
// Week 7 (Days 45-51): Little Scientist & Nature Discoveries (180-220 words)
// Week 8 (Days 52-60): Big Dreams, Courage & Super Readers (190-240 words)

if (typeof window !== 'undefined' && !window.STORIES_DATA) {
  window.STORIES_DATA = [];
}
var STORIES_DATA = (typeof window !== 'undefined' ? window.STORIES_DATA : (typeof STORIES_DATA !== 'undefined' ? STORIES_DATA : []));

const MONTH2_STORIES = [
  // ==========================================
  // WEEK 5: WORLD ADVENTURES & FOODS
  // ==========================================
  {
    id: 31,
    day: 31,
    week: 5,
    level: "Explorer",
    levelBadge: "Level 4 • World Adventure",
    title: "The Flying Taco of Mexico",
    coverEmoji: "🌮",
    themeColor: "#FF7043",
    category: "World Adventures",
    readingTime: "4 mins",
    wordCount: 175,
    intro: "Mateo and his Abuela make crunchy tacos, but one little tortilla has wings of imagination!",
    paragraphs: [
      "In a sunlit kitchen in Mexico, Mateo and his grandmother, Abuela Rosa, were preparing fresh corn tortillas.",
      "The kitchen smelled of warm corn, zesty lime, cilantro, and sizzling mild spices.",
      "Mateo pressed a round ball of yellow masa into the wooden tortilla press. 'Squeeze it gently, Mateo,' Abuela guided with a smile.",
      "When the thin round tortilla hit the hot comal skillet, it puffed up like a golden balloon!",
      "'Look Abuela, it is ready to take flight!' Mateo giggled, folding it into a warm crispy taco shell.",
      "They filled it with grilled chicken, ripe avocado slices, sweet corn kernels, and colorful pico de gallo.",
      "'¡Buen provecho!' Abuela said, holding her hands together in gratitude.",
      "With every crunchy bite, Mateo felt like he was soaring across sunny mountains, celebrating the rich flavors of his home."
    ],
    vocabulary: [
      {
        word: "zesty",
        syllables: "zes-ty",
        phonetic: "/ˈzes.ti/",
        definition: "Having a fresh, pleasant, and slightly sour or spicy flavor like citrus fruit.",
        example: "The lime salad had a delicious zesty flavor.",
        emoji: "🍋"
      },
      {
        word: "masa",
        syllables: "ma-sa",
        phonetic: "/ˈmɑː.sə/",
        definition: "Traditional corn dough used in Mexican cooking to make tortillas and tamales.",
        example: "She rolled the soft masa into round balls.",
        emoji: "🌽"
      },
      {
        word: "gratitude",
        syllables: "grat-i-tude",
        phonetic: "/ˈɡræt̬.ə.tuːd/",
        definition: "The warm feeling of being thankful and appreciative.",
        example: "We bowed our heads in quiet gratitude for the delicious meal.",
        emoji: "🙏"
      }
    ],
    quiz: [
      {
        question: "What were Mateo and his Abuela making in the kitchen?",
        options: ["Apple pie", "Fresh corn tortillas and tacos", "Spaghetti", "Ice cream"],
        answerIndex: 1,
        explanation: "They were making fresh corn tortillas and crispy tacos."
      },
      {
        question: "What happened when the tortilla hit the hot comal skillet?",
        options: ["It melted", "It puffed up like a golden balloon", "It broke in two", "It turned blue"],
        answerIndex: 1,
        explanation: "The tortilla puffed up like a golden balloon on the hot comal."
      },
      {
        question: "What did Abuela say before eating?",
        options: ["Hurry up!", "¡Buen provecho!", "Good night", "Be quiet"],
        answerIndex: 1,
        explanation: "Abuela said '¡Buen provecho!' which means enjoy your meal in Spanish."
      }
    ],
    funPrompt: "What is your favorite food from around the world? Can you describe how it tastes?"
  },
  {
    id: 32,
    day: 32,
    week: 5,
    level: "Explorer",
    levelBadge: "Level 4 • World Adventure",
    title: "Cherry Blossom Picnic in Japan",
    coverEmoji: "🌸",
    themeColor: "#F48FB1",
    category: "World Adventures",
    readingTime: "4 mins",
    wordCount: 180,
    intro: "Yuki sits beneath a cloud of pale pink sakura blossoms in Tokyo.",
    paragraphs: [
      "In early April, the parks of Tokyo transform into oceans of powdery pink blossoms.",
      "Yuki spread a woven blue picnic mat under the oldest sakura tree in the park. Her grandfather brought a wooden bento box.",
      "Inside were triangle-shaped rice balls called onigiri wrapped in crispy dark seaweed, sweet rolled omelets, and pink strawberry mochi.",
      "A soft spring breeze rustled through the branches. Hundreds of soft pink petals detached and swirled through the sunny air.",
      "'Look, Grandpa! It is a sakura snowstorm!' Yuki cheered, catching a petal in the palm of her hand.",
      "People all around the park smiled, drank green tea, and sang traditional songs.",
      "Grandpa explained that Hanami, the flower viewing festival, teaches us to appreciate beautiful moments with loved ones because blossoms don't last forever."
    ],
    vocabulary: [
      {
        word: "bento",
        syllables: "ben-to",
        phonetic: "/ˈben.toʊ/",
        definition: "A single-portion takeout or home-packed meal in a partitioned box, popular in Japan.",
        example: "Dad packed a delicious bento box with rice, vegetables, and chicken.",
        emoji: "🍱"
      },
      {
        word: "detached",
        syllables: "de-tached",
        phonetic: "/dɪˈtætʃt/",
        definition: "Became separated or disconnected from something.",
        example: "A single pink petal detached from the flower stem.",
        emoji: "🍃"
      },
      {
        word: "appreciate",
        syllables: "ap-pre-ci-ate",
        phonetic: "/əˈpriː.ʃi.eɪt/",
        definition: "To recognize the full worth or beauty of something with thankfulness.",
        example: "We should appreciate sunny days and good friends.",
        emoji: "💖"
      }
    ],
    quiz: [
      {
        question: "What color were the sakura blossoms in the park?",
        options: ["Bright green", "Powdery pink", "Golden yellow", "Dark purple"],
        answerIndex: 1,
        explanation: "The cherry blossoms in Tokyo were powdery pink."
      },
      {
        question: "What Japanese treats were inside the bento box?",
        options: ["Hot dogs and fries", "Onigiri rice balls, sweet omelets, and mochi", "Pizza slices", "Cereal"],
        answerIndex: 1,
        explanation: "The bento box had triangle onigiri rice balls, sweet omelets, and strawberry mochi."
      },
      {
        question: "What does the Hanami festival teach us to do?",
        options: ["Sleep all day", "Appreciate beautiful moments with loved ones", "Run fast", "Stay indoors"],
        answerIndex: 1,
        explanation: "Hanami teaches people to appreciate beautiful moments with family and friends."
      }
    ],
    funPrompt: "If you had a spring picnic under a flowering tree, what foods would you pack in your picnic basket?"
  },
  {
    id: 33,
    day: 33,
    week: 5,
    level: "Explorer",
    levelBadge: "Level 4 • World Adventure",
    title: "Marco's Singing Pizza Parlor",
    coverEmoji: "🍕",
    themeColor: "#E53935",
    category: "World Adventures",
    readingTime: "4 mins",
    wordCount: 185,
    intro: "In Naples, Italy, Chef Marco tosses pizza dough so high it almost touches the ceiling!",
    paragraphs: [
      "In the cobblestone alleyways of Naples, Italy, the aroma of woodsmoke and melted mozzarella filled the evening air.",
      "Inside Pizzeria Bellissima, Chef Marco wore a handlebar mustache and an apron dusted with white flour.",
      "Whenever Chef Marco stretched a ball of fermented dough, he broke into an operatic song: 'O Sole Mio!'",
      "He twirled the dough disc on his fingertips and threw it spinning into the air. 'Up, up, up!' the watching children cheered.",
      "He caught it with flair, smoothed it onto a wooden peel, and spooned crushed San Marzano tomatoes, fresh basil leaves, and creamy mozzarella on top.",
      "He slid the pizza into a scorching stone oven blazing with wood logs. In ninety seconds, the crust bubbled with blistered golden perfection.",
      "'Eccolo! Here is the authentic Margherita!' Marco beamed. Cooking with passion made every bite sing."
    ],
    vocabulary: [
      {
        word: "aroma",
        syllables: "a-ro-ma",
        phonetic: "/əˈroʊ.mə/",
        definition: "A distinctive, typically pleasant and savory smell.",
        example: "The aroma of freshly baked bread filled the bakery.",
        emoji: "👃"
      },
      {
        word: "flair",
        syllables: "flair",
        phonetic: "/fler/",
        definition: "A special, elegant, and stylish way of doing something.",
        example: "The skater completed her spin with great flair.",
        emoji: "✨"
      },
      {
        word: "authentic",
        syllables: "au-then-tic",
        phonetic: "/ɔːˈθen.tɪk/",
        definition: "Genuine, real, and made in the traditional, original way.",
        example: "We ate authentic Italian pasta made by hand.",
        emoji: "🇮🇹"
      }
    ],
    quiz: [
      {
        question: "In which Italian city does Chef Marco bake his pizzas?",
        options: ["Rome", "Naples", "Venice", "Milan"],
        answerIndex: 1,
        explanation: "Chef Marco's pizzeria is located in the alleyways of Naples, Italy."
      },
      {
        question: "What does Chef Marco do while spinning the pizza dough?",
        options: ["He cries", "He sings opera music loudly", "He juggles plates", "He watches TV"],
        answerIndex: 1,
        explanation: "Chef Marco sings an operatic song ('O Sole Mio!') while tossing the dough."
      },
      {
        question: "What fresh ingredients went on top of the Margherita pizza?",
        options: ["Chocolate and strawberries", "Crushed tomatoes, fresh basil, and mozzarella", "Pineapple and bacon", "Only cheese"],
        answerIndex: 1,
        explanation: "He used crushed San Marzano tomatoes, fresh basil leaves, and creamy mozzarella."
      }
    ],
    funPrompt: "What is your favorite pizza topping? Do you like cheese, tomatoes, olives, or something unique?"
  },
  {
    id: 34,
    day: 34,
    week: 5,
    level: "Explorer",
    levelBadge: "Level 4 • World Adventure",
    title: "The Little Baobab Tree of Africa",
    coverEmoji: "🌳",
    themeColor: "#8D6E63",
    category: "World Adventures",
    readingTime: "5 mins",
    wordCount: 190,
    intro: "Kofi plants a baobab sapling on the golden savannah of Senegal.",
    paragraphs: [
      "On the wide golden savannah of Senegal, the sun set like an enormous orange globe behind giant baobab trees.",
      "Baobabs are known as the 'Tree of Life'. Their massive trunks store thousands of liters of rainwater during dry seasons, sheltering birds, monkeys, and travelers.",
      "Kofi, an eight-year-old boy, held a small terracotta pot with a young green sprout.",
      "'Grandmother, will my little tree really grow as grand as these giants?' Kofi asked, touching the smooth bark of a centuries-old baobab.",
      "Grandmother Amina placed her warm hand over Kofi's. 'This great tree was once a tiny seed just like yours, Kofi. It grew tall through patience, summer rains, and stubborn roots.'",
      "Together, they dug a deep hole in the fertile soil near their village. Kofi poured water over the soil, smoothing the earth with gentle pats.",
      "'Grow strong, little brother,' Kofi whispered. 'I will come visit you every morning before school.'",
      "He knew that great things take time to blossom."
    ],
    vocabulary: [
      {
        word: "savannah",
        syllables: "sa-van-nah",
        phonetic: "/səˈvæn.ə/",
        definition: "A grassy plain in tropical regions with scattered trees.",
        example: "Lions and giraffes roam across the African savannah.",
        emoji: "🦁"
      },
      {
        word: "terracotta",
        syllables: "ter-ra-cot-ta",
        phonetic: "/ˌter.əˈkɑː.t̬ə/",
        definition: "Hard, baked reddish-brown clay used for pottery and flowerpots.",
        example: "The flowers grew in a charming terracotta pot.",
        emoji: "🏺"
      },
      {
        word: "fertile",
        syllables: "fer-tile",
        phonetic: "/ˈfɝː.t̬əl/",
        definition: "Rich in nutrients and good for growing plants and crops.",
        example: "The fertile garden produced hundreds of sweet tomatoes.",
        emoji: "🌱"
      }
    ],
    quiz: [
      {
        question: "Why are baobab trees called the 'Tree of Life'?",
        options: ["They make gold", "Their massive trunks store rainwater and shelter wildlife", "They can walk", "They never lose leaves"],
        answerIndex: 1,
        explanation: "Baobabs store thousands of liters of water in dry seasons and shelter animals and people."
      },
      {
        question: "In which country does Kofi live?",
        options: ["Canada", "Senegal", "Germany", "Australia"],
        answerIndex: 1,
        explanation: "Kofi lives on the savannah of Senegal in West Africa."
      },
      {
        question: "What lesson did Grandmother Amina share with Kofi?",
        options: ["Trees grow overnight", "Great things take patience and time to grow", "You should never plant seeds", "Big trees are dangerous"],
        answerIndex: 1,
        explanation: "Grandmother taught that great things take time, patience, and strong roots to grow."
      }
    ],
    funPrompt: "If you could plant any tree in your garden, would it be an apple tree, a giant oak, or a flowering tree?"
  },
  {
    id: 35,
    day: 35,
    week: 5,
    level: "Explorer",
    levelBadge: "Level 4 • World Adventure",
    title: "The Dragon Kite on the Great Wall",
    coverEmoji: "🪁",
    themeColor: "#D32F2F",
    category: "World Adventures",
    readingTime: "5 mins",
    wordCount: 192,
    intro: "Mei flies a majestic crimson dragon kite from the stone towers of China's Great Wall.",
    paragraphs: [
      "A cool autumn mountain breeze swept across the ancient stone ramparts of the Great Wall of China.",
      "The Wall snaked endlessly across rugged emerald hills like a slumbering stone serpent.",
      "Eight-year-old Mei and her uncle stood in the arched doorway of a tall stone watchtower. Mei held a wooden spool wound with strong braided silk cord.",
      "Her kite was handcrafted: forty interconnected silk rings painted in brilliant scarlet, imperial gold, and jade green, forming a winding Chinese dragon with ribbon whiskers.",
      "'Wait for the mountain updraft, Mei,' Uncle whispered. 'Now! Run!'",
      "Mei sprinted across the broad stone flagstones. The wind caught the dragon's smiling face.",
      "With a joyful rustle, the kite surged upward into the azure blue sky. The forty silk segments undulated gracefully, dancing like a real dragon soaring above the mountain ridge.",
      "Tourists and hikers cheered and took photos. Mei felt as proud as an ancient sky captain."
    ],
    vocabulary: [
      {
        word: "ramparts",
        syllables: "ram-parts",
        phonetic: "/ˈræm.pɑːrts/",
        definition: "Defensive wall walkways built around a fort or castle.",
        example: "The guards walked along the high stone ramparts.",
        emoji: "🏰"
      },
      {
        word: "undulated",
        syllables: "un-du-lat-ed",
        phonetic: "/ˈʌn.dʒə.leɪ.t̬ɪd/",
        definition: "Moved smoothly in wavelike motion with rising and falling curves.",
        example: "The dragon kite undulated in the breeze like waves in the sea.",
        emoji: "🌊"
      },
      {
        word: "updraft",
        syllables: "up-draft",
        phonetic: "/ˈʌp.dræft/",
        definition: "An upward current of warm air.",
        example: "Eagles and kites use warm updrafts to glide effortlessly.",
        emoji: "💨"
      }
    ],
    quiz: [
      {
        question: "Where was Mei flying her handcrafted kite?",
        options: ["On a city rooftop", "On the stone towers of the Great Wall of China", "On an airplane", "In a basement"],
        answerIndex: 1,
        explanation: "Mei flew her kite from the watchtower ramparts of the Great Wall of China."
      },
      {
        question: "What shape and creature was Mei's kite?",
        options: ["A simple diamond kite", "A winding Chinese dragon with forty silk segments", "A rocket ship", "A butterfly"],
        answerIndex: 1,
        explanation: "Her kite was a winding Chinese dragon with forty interconnected silk rings."
      },
      {
        question: "What colors were painted on the dragon kite?",
        options: ["Only black and white", "Scarlet, imperial gold, and jade green", "Brown and grey", "Silver"],
        answerIndex: 1,
        explanation: "The dragon was painted in brilliant scarlet, imperial gold, and jade green."
      }
    ],
    funPrompt: "Have you ever flown a kite in the wind? How did it feel when the kite pulled on your string?"
  },
  {
    id: 36,
    day: 36,
    week: 5,
    level: "Explorer",
    levelBadge: "Level 4 • World Adventure",
    title: "The Golden Croissant of Paris",
    coverEmoji: "🥐",
    themeColor: "#FFA000",
    category: "World Adventures",
    readingTime: "5 mins",
    wordCount: 195,
    intro: "Camille wakes up at dawn in Paris to help Baker Pierre make the flakiest croissants in France.",
    paragraphs: [
      "The city of Paris was still asleep beneath a veil of gentle morning mist. The Eiffel Tower twinkled faintly in the distance.",
      "Inside Boulangerie Pierre, the kitchen was warm and bathed in golden incandescent light. Camille tied on her small white apron.",
      "Baker Pierre showed Camille the secret of the croissant: 'Feuilletage!' he smiled. 'Lamination.'",
      "He folded a huge slab of sweet churned butter inside soft yeast dough, rolled it flat with a heavy pin, folded it into thirds, and chilled it.",
      "'We fold it again and again,' Pierre explained. 'When it bakes, the butter melts and creates hundreds of paper-thin, crispy layers!'",
      "Camille used a wooden wheel to slice the dough into neat triangles, then rolled them tightly into crescent-moon shapes.",
      "After twenty minutes in the oven, out came trays of shiny golden croissants, crackling with warmth.",
      "Camille took a bite. The crust shattered with a glorious crunch, revealing an airy, buttery inside. 'Magnifique!' she grinned."
    ],
    vocabulary: [
      {
        word: "lamination",
        syllables: "lam-i-na-tion",
        phonetic: "/ˌlæm.əˈneɪ.ʃən/",
        definition: "The baking technique of layering butter and dough repeatedly to create flaky pastry.",
        example: "Proper lamination makes pastries crispy and light.",
        emoji: "🧈"
      },
      {
        word: "crescent",
        syllables: "cres-cent",
        phonetic: "/ˈkres.ənt/",
        definition: "A curved shape that is thicker in the middle and tapered at both ends, like a new moon.",
        example: "The croissants were shaped like crescent moons.",
        emoji: "🌙"
      },
      {
        word: "shattered",
        syllables: "shat-tered",
        phonetic: "/ˈʃæt̬.ɚd/",
        definition: "Broke suddenly into tiny, crispy pieces with a satisfying crunch.",
        example: "The thin crust shattered when she took a bite.",
        emoji: "💥"
      }
    ],
    quiz: [
      {
        question: "In what city does Camille's bakery story take place?",
        options: ["London", "Paris", "New York", "Tokyo"],
        answerIndex: 1,
        explanation: "The story takes place in Paris, with the Eiffel Tower in the distance."
      },
      {
        question: "What shape did Camille roll the croissant dough into?",
        options: ["Square boxes", "Round balls", "Crescent-moon shapes", "Stars"],
        answerIndex: 2,
        explanation: "Camille rolled the sliced triangles into crescent-moon shapes."
      },
      {
        question: "What makes croissants so flaky and crispy?",
        options: ["Baking soda only", "Folding layers of butter and dough repeatedly", "Putting them in water", "Sugar syrup"],
        answerIndex: 1,
        explanation: "Lamination—folding layers of butter and dough repeatedly—creates hundreds of thin layers."
      }
    ],
    funPrompt: "What is your favorite baked treat: warm croissants, chocolate cookies, or fresh bread?"
  },
  {
    id: 37,
    day: 37,
    week: 5,
    level: "Explorer",
    levelBadge: "Level 4 • Week 5 Review",
    title: "Hello Around the World (Rhyme)",
    coverEmoji: "🌍",
    themeColor: "#43A047",
    category: "Fun Poem & Rhyme",
    readingTime: "4 mins",
    wordCount: 165,
    intro: "Day 37! Celebrate your world adventure week with greetings in languages across the globe.",
    paragraphs: [
      "In Mexico we say '¡Hola!' with a happy cheer,\nIn France we say 'Bonjour!' to welcome neighbors near!\nIn Japan we bow and say 'Konnichiwa' with grace,\nAs cherry blossoms dance across the sunny marketplace!",
      "In Italy 'Ciao!' is friendly, short, and sweet,\nWith fragrant pizza baking on every cobblestone street!\nIn Senegal we greet with smiles under baobab shade,\nCelebrating friendship that will never, ever fade!",
      "Though languages are different and oceans stretch so wide,\nWe share the same blue sky and warm sunshine outside!\nA kind word is a bridge that connects us hand in hand,\nSpreading peace and laughter across every single land!",
      "Bravo! You have completed 37 days of reading! Keep exploring the world with your reading superpowers!"
    ],
    vocabulary: [
      {
        word: "marketplace",
        syllables: "mar-ket-place",
        phonetic: "/ˈmɑːr.kɪt.pleɪs/",
        definition: "An open square or street where goods, food, and crafts are sold.",
        example: "We bought fresh strawberries at the outdoor marketplace.",
        emoji: "🏪"
      },
      {
        word: "connects",
        syllables: "con-nects",
        phonetic: "/kəˈnekts/",
        definition: "Joins or links together two or more things or people.",
        example: "The bridge connects the two sides of the river.",
        emoji: "🌉"
      },
      {
        word: "fragrant",
        syllables: "fra-grant",
        phonetic: "/ˈfreɪ.ɡrənt/",
        definition: "Having a sweet, pleasant, and delicious smell.",
        example: "Fragrant jasmine flowers bloomed on the terrace.",
        emoji: "🌸"
      }
    ],
    quiz: [
      {
        question: "How do people say hello in France according to the poem?",
        options: ["Ciao", "Bonjour", "Hola", "Konnichiwa"],
        answerIndex: 1,
        explanation: "The poem says: 'In France we say Bonjour!'"
      },
      {
        question: "What is compared to a bridge in the poem?",
        options: ["A stone wall", "A kind word that connects us", "A tall tree", "A mountain"],
        answerIndex: 1,
        explanation: "The poem says: 'A kind word is a bridge that connects us hand in hand.'"
      },
      {
        question: "What do all people around the world share?",
        options: ["The same shoes", "The same blue sky and warm sunshine", "The same cars", "The same house"],
        answerIndex: 1,
        explanation: "The poem says: 'We share the same blue sky and warm sunshine outside!'"
      }
    ],
    funPrompt: "Can you practice saying hello in 3 different languages? (e.g., Hello, Hola, Bonjour, Ciao, or Ni Hao!)"
  },

  // ==========================================
  // WEEK 6: WONDERFUL ANIMAL FRIENDS
  // ==========================================
  {
    id: 38,
    day: 38,
    week: 6,
    level: "Explorer",
    levelBadge: "Level 5 • Animal Friends",
    title: "The Koala Who Forgot How to Climb",
    coverEmoji: "🐨",
    themeColor: "#78909C",
    category: "Animal Friends",
    readingTime: "5 mins",
    wordCount: 195,
    intro: "Koby the little koala in Australia woke up from a long nap feeling dizzy. How will he get back up the gum tree?",
    paragraphs: [
      "In the eucalyptus forests of eastern Australia, young Koby the koala loved two things: munching crunchy gum leaves and sleeping twenty hours a day.",
      "One sunny Tuesday, Koby took a nap on a low mossy boulder. When he woke up, he rubbed his round fluffy ears. The ground suddenly seemed so wide and unfamiliar!",
      "He looked up at his mother snoozing on the high fork of a tall gum tree. Koby tried to jump, but koalas cannot jump. He hugged the tree trunk, but his paws slipped.",
      "'Oh dear,' Koby whimpered softly. 'Did I forget how to climb?'",
      "Pippa the friendly pink cockatoo flew down and perched on a twig. 'You haven't forgotten, Koby!' Pippa squawked cheerfully. 'Look at your paws. You have two thumbs on each hand and razor-sharp claws!'",
      "Koby looked at his paws. Pippa was right! Koalas are natural climbing champions.",
      "Koby dug his claws firmly into the rough grey bark. He pulled upward: one claw, two claws, three claws!",
      "Soon he scrambled into the branches, snuggling against his mother's warm grey pouch. He smiled with newfound confidence."
    ],
    vocabulary: [
      {
        word: "eucalyptus",
        syllables: "eu-ca-lyp-tus",
        phonetic: "/ˌjuː.kəˈlɪp.təs/",
        definition: "An Australian evergreen tree with aromatic leaves that koalas eat.",
        example: "The forest air smelled refreshing like eucalyptus leaves.",
        emoji: "🍃"
      },
      {
        word: "perched",
        syllables: "perched",
        phonetic: "/pɝːtʃt/",
        definition: "Rested or settled on a branch, ledge, or high spot like a bird.",
        example: "The bluebird perched on the garden fence.",
        emoji: "🦜"
      },
      {
        word: "scrambled",
        syllables: "scram-bled",
        phonetic: "/ˈskræm.bəld/",
        definition: "Climbed or moved quickly using both hands and feet.",
        example: "The puppy scrambled over the grassy mound.",
        emoji: "🐾"
      }
    ],
    quiz: [
      {
        question: "Where do koalas live in this story?",
        options: ["In cold ice caves", "In eucalyptus forests of Australia", "In the ocean", "In barns"],
        answerIndex: 1,
        explanation: "Koalas live in the eucalyptus forests of Australia."
      },
      {
        question: "What special feature on his paws did Pippa remind Koby about?",
        options: ["Webbed swimming feet", "Two thumbs and strong climbing claws", "Wings", "Suction cups"],
        answerIndex: 1,
        explanation: "Pippa reminded Koby that he has two thumbs on each hand and sharp claws for climbing."
      },
      {
        question: "How did Koby feel after climbing back up to his mother?",
        options: ["Angry", "Snug and filled with confidence", "Cold and hungry", "Scared"],
        answerIndex: 1,
        explanation: "Koby snuggled against his mother and smiled with newfound confidence."
      }
    ],
    funPrompt: "Koalas have two thumbs on their front paws to grip tree branches! Can you name another animal with special paws or claws?"
  },
  {
    id: 39,
    day: 39,
    week: 6,
    level: "Explorer",
    levelBadge: "Level 5 • Animal Friends",
    title: "The Dancing Penguin on the Blue Ice",
    coverEmoji: "🐧",
    themeColor: "#29B6F6",
    category: "Animal Friends",
    readingTime: "5 mins",
    wordCount: 198,
    intro: "While other penguins march in straight lines, Penny loves to tap-dance on the slippery ice!",
    paragraphs: [
      "In Antarctica, temperature dropped far below freezing, and sparkling white ice stretched as far as the eye could see.",
      "Most emperor penguins were very serious birds. They marched in disciplined single-file lines: waddle, waddle, pause.",
      "Except for Penny. Penny was a young penguin with an adventurous spirit and naturally rhythmic feet.",
      "Whenever Penny walked across smooth blue ice, she couldn't resist sliding, spinning, and tapping her flippers. 'Click-clack, slide, whoosh!'",
      "'Penny!' scolded Elder Barnaby. 'Penguins march. We do not tango!'",
      "One frosty afternoon, a blustering blizzard trapped a group of baby chicks on a slippery iceberg shelf. The chicks were freezing and shivering with fear.",
      "Penny rushed over. She leaped onto the slick ice and did a hilarious, joyful slide-and-twirl dance: 'Wiggle-waggle, hop-hop-slide!'",
      "The little chicks stopped crying and began giggling. Following Penny's funny dance steps, they slid across the ice like toboggans right into their parents' warm feathers.",
      "Elder Barnaby bowed deeply. 'Penny,' he confessed, 'your dancing just saved our chicks!'"
    ],
    vocabulary: [
      {
        word: "disciplined",
        syllables: "dis-ci-plined",
        phonetic: "/ˈdɪs.ə.plɪnd/",
        definition: "Behaving in an orderly, controlled, and obedient way.",
        example: "The disciplined students walked quietly in a straight line.",
        emoji: "📏"
      },
      {
        word: "blizzard",
        syllables: "bliz-zard",
        phonetic: "/ˈblɪz.ɚd/",
        definition: "A severe snowstorm with high winds and freezing temperatures.",
        example: "We stayed warm inside the cabin during the winter blizzard.",
        emoji: "❄️"
      },
      {
        word: "toboggans",
        syllables: "to-bog-gans",
        phonetic: "/təˈbɑː.ɡənz/",
        definition: "Long, narrow sleds without runners used for sliding down snowy hills.",
        example: "The children rode their wooden toboggans down the hill.",
        emoji: "🛷"
      }
    ],
    quiz: [
      {
        question: "Where does Penny the penguin live?",
        options: ["In the hot desert", "In Antarctica on the blue ice", "In a city zoo", "In a rainforest"],
        answerIndex: 1,
        explanation: "Penny lives in the icy wilderness of Antarctica."
      },
      {
        question: "What did Penny love to do that other penguins found unusual?",
        options: ["Fly in airplanes", "Tap-dance, spin, and slide on the ice", "Swim backwards", "Sleep all day"],
        answerIndex: 1,
        explanation: "Penny loved to tap-dance, spin, and slide with rhythmic feet."
      },
      {
        question: "How did Penny's dancing help the baby chicks?",
        options: ["It scared them away", "It cheered them up and helped them slide safely to their parents", "It made them fall asleep", "It melted the ice"],
        answerIndex: 1,
        explanation: "Penny's funny dance cheered the chicks and guided them to slide safely across the ice."
      }
    ],
    funPrompt: "Can you do a silly penguin waddle dance? Stand up and try waddling like Penny: 'Wiggle-waggle, hop-hop-slide!'"
  },
  {
    id: 40,
    day: 40,
    week: 6,
    level: "Explorer",
    levelBadge: "Level 5 • Animal Friends",
    title: "Bella the Brave Little Badger",
    coverEmoji: "🦡",
    themeColor: "#616161",
    category: "Animal Friends",
    readingTime: "5 mins",
    wordCount: 202,
    intro: "Though small in size, Bella the honey badger has the heart of a fearless knight.",
    paragraphs: [
      "In the grassy thornveld of the Kalahari, Bella the honey badger trotted along looking for sweet wild honeycomb.",
      "Bella had a thick silver-white stripe running down her back and stout, muscular legs equipped with curved digging claws.",
      "In animal kingdom legends, honey badgers are famous for having zero fear, but Bella preferred making friends whenever possible.",
      "Near a dry creek bed, Bella heard frightened squeaks. Three tiny meerkats were cornered by a hiss of danger—a sly striped hyena was creeping closer!",
      "Bella did not hesitate. Even though the hyena was three times her size, Bella puffed up her fur to look twice as big.",
      "She stomped her paws, bared her sharp teeth, and let out a fierce, vibrating rattle: 'GRRR-HAK-HAK!'",
      "She charged forward two bold steps. The startled hyena blinked, took one look at Bella's fiery eyes, turned around, and scrambled away as fast as his paws could carry him!",
      "The grateful meerkats cheered and crowned Bella with a garland of yellow acacia flowers. True bravery comes from protecting others."
    ],
    vocabulary: [
      {
        word: "stout",
        syllables: "stout",
        phonetic: "/staʊt/",
        definition: "Heavily built, thick, strong, and sturdy.",
        example: "The oak table had four stout legs.",
        emoji: "🪵"
      },
      {
        word: "hesitate",
        syllables: "hes-i-tate",
        phonetic: "/ˈhez.ə.teɪt/",
        definition: "To pause before saying or doing something due to uncertainty.",
        example: "Do not hesitate to ask for help when doing your homework.",
        emoji: "⏸️"
      },
      {
        word: "garland",
        syllables: "gar-land",
        phonetic: "/ˈɡɑːr.lənd/",
        definition: "A wreath or chain of flowers and leaves worn as an honor.",
        example: "The winners were presented with a garland of fragrant roses.",
        emoji: "💐"
      }
    ],
    quiz: [
      {
        question: "What animal was threatening the three baby meerkats?",
        options: ["An elephant", "A sly striped hyena", "A friendly rabbit", "A turtle"],
        answerIndex: 1,
        explanation: "A sly striped hyena was creeping toward the cornered meerkats."
      },
      {
        question: "What did Bella do to scare the hyena away?",
        options: ["She hid in a hole", "She puffed her fur, growled loudly, and charged forward", "She ran away crying", "She threw stones"],
        answerIndex: 1,
        explanation: "Bella puffed up her fur, stomped her paws, growled fiercely, and charged two bold steps."
      },
      {
        question: "What gift did the meerkats give Bella to say thank you?",
        options: ["A pot of honey", "A garland of yellow acacia flowers", "A gold coin", "A shoe"],
        answerIndex: 1,
        explanation: "The grateful meerkats crowned Bella with a garland of yellow acacia flowers."
      }
    ],
    funPrompt: "What does it mean to be brave? Tell about a time you helped a friend or family member!"
  },
  {
    id: 41,
    day: 41,
    week: 6,
    level: "Explorer",
    levelBadge: "Level 5 • Animal Friends",
    title: "The Chameleon Who Lost His Colors",
    coverEmoji: "🦎",
    themeColor: "#00E676",
    category: "Animal Friends",
    readingTime: "5 mins",
    wordCount: 205,
    intro: "Cam the chameleon woke up plain grey! How will he rediscover his rainbow patterns?",
    paragraphs: [
      "In the lush rainforest of Madagascar, Cam the chameleon was usually a walking rainbow.",
      "When he sat on a ruby hibiscus, his scales turned crimson red. On a bamboo stalk, he turned emerald green. When feeling joyful, neon yellow stripes danced across his back.",
      "But one gloomy Monday morning, Cam woke up completely chalk-grey. No matter what leaf he stepped on, he stayed grey as a wet sidewalk.",
      "'Oh no!' Cam cried, rolling his independent turret eyes in despair. 'My colors are gone!'",
      "Wise Mother Owl flew down and tilted her head. 'Cam, chameleon colors do not come from the leaves outside. They come from the emotions inside your heart!'",
      "'Close your eyes,' Mother Owl guided. 'Think of something that fills your heart with deep joy.'",
      "Cam closed his eyes. He thought of crunching sweet juicy berries, splashing in warm summer raindrops, and snuggling with his family.",
      "Warmth surged through his chest. When he opened his eyes, turquoise blue and sunset orange were swirling across his scales!",
      "Cam beamed. True colors come from the happiness we hold within."
    ],
    vocabulary: [
      {
        word: "despair",
        syllables: "de-spair",
        phonetic: "/dɪˈsper/",
        definition: "The complete loss or absence of hope; deep sadness.",
        example: "Do not fall into despair; tomorrow is a brand new day.",
        emoji: "😢"
      },
      {
        word: "independent",
        syllables: "in-de-pen-dent",
        phonetic: "/ˌɪn.dɪˈpen.dənt/",
        definition: "Able to work or move on its own without needing help from others.",
        example: "Chameleons have independent eyes that can look in two different directions.",
        emoji: "👀"
      },
      {
        word: "surged",
        syllables: "surged",
        phonetic: "/sɝːdʒd/",
        definition: "Moved suddenly and powerfully forward or upward like a wave.",
        example: "A wave of excitement surged through the crowd at the concert.",
        emoji: "🌊"
      }
    ],
    quiz: [
      {
        question: "Where does Cam the chameleon live?",
        options: ["In a cold glacier", "In the lush rainforest of Madagascar", "In the desert", "In a swimming pool"],
        answerIndex: 1,
        explanation: "Cam lives in the lush tropical rainforest of Madagascar."
      },
      {
        question: "What color was Cam when he woke up on Monday?",
        options: ["Bright pink", "Chalk-grey", "Golden yellow", "Jet black"],
        answerIndex: 1,
        explanation: "Cam woke up completely chalk-grey like a wet sidewalk."
      },
      {
        question: "Where do a chameleon's colors really come from according to Mother Owl?",
        options: ["From paint in jars", "From the emotions and happiness inside his heart", "From eating colorful bugs", "From sunlight only"],
        answerIndex: 1,
        explanation: "Mother Owl explained that his colors come from the emotions inside his heart."
      }
    ],
    funPrompt: "If you were a chameleon, what color would you turn right now: sunny yellow (happy), ocean blue (calm), or ruby red (excited)?"
  },
  {
    id: 42,
    day: 42,
    week: 6,
    level: "Explorer",
    levelBadge: "Level 5 • Animal Friends",
    title: "The Sea Otter's Pocket Stone",
    coverEmoji: "🦦",
    themeColor: "#00ACC1",
    category: "Animal Friends",
    readingTime: "5 mins",
    wordCount: 204,
    intro: "Ollie the sea otter floats on his back among giant kelp forests, looking for the perfect clam opener.",
    paragraphs: [
      "In the chilly Pacific waters off the coast of California, Ollie the sea otter was floating on his back like a tiny furry raft.",
      "Around him, giant green kelp fronds swayed in the gentle ocean swells. Ollie wrapped a strand of kelp around his tummy like a seatbelt so he wouldn't drift away while napping.",
      "Under his left arm, Ollie had a secret: a special fold of loose skin that formed a natural pocket!",
      "Inside this pocket, Ollie kept his most cherished possession: a smooth, perfectly oval grey river pebble.",
      "Today, Ollie dove deep into the turquoise water and retrieved a stubborn purple sea clam.",
      "He surfaced, placed the clam on his chest, pulled his favorite stone from his armpit pocket, and tapped with rhythm: 'Tink-tink-tink!'",
      "CRACK! The clam popped open, revealing delicious sweet meat.",
      "Ollie washed his stone carefully in the seawater, tucked it safely back into his pocket, and floated under the golden sunshine with a full, happy belly."
    ],
    vocabulary: [
      {
        word: "fronds",
        syllables: "fronds",
        phonetic: "/frɑːndz/",
        definition: "Large, divided leaves of a fern, palm, or giant seaweed plant.",
        example: "The palm fronds rustled in the tropical breeze.",
        emoji: "🌿"
      },
      {
        word: "cherished",
        syllables: "cher-ished",
        phonetic: "/ˈtʃer.ɪʃt/",
        definition: "Loved, valued, and cared for deeply with affection.",
        example: "The teddy bear was her most cherished childhood toy.",
        emoji: "🧸"
      },
      {
        word: "possession",
        syllables: "pos-ses-sion",
        phonetic: "/pəˈzeʃ.ən/",
        definition: "An item or object that belongs to someone.",
        example: "He packed all his personal possessions into his suitcase.",
        emoji: "🎒"
      }
    ],
    quiz: [
      {
        question: "Why does Ollie wrap kelp seaweed around his tummy before napping?",
        options: ["To stay warm", "So he won't drift away in the ocean current", "To hide from sharks", "For food"],
        answerIndex: 1,
        explanation: "Sea otters anchor themselves with kelp so the ocean current doesn't float them away."
      },
      {
        question: "Where do sea otters have a natural pocket to carry things?",
        options: ["In their tail", "In a fold of loose skin under their arm", "Inside their ears", "In their mouth"],
        answerIndex: 1,
        explanation: "Sea otters have a special loose skin pocket under their arm."
      },
      {
        question: "What tool did Ollie keep in his pocket to open clams?",
        options: ["A metal spoon", "A smooth, oval grey river pebble", "A sharp stick", "A shell"],
        answerIndex: 1,
        explanation: "Ollie kept a smooth, oval grey river pebble that cracked the clam open."
      }
    ],
    funPrompt: "Sea otters hold hands when they sleep so they don't drift apart! Isn't that adorable? What do you like most about otters?"
  },
  {
    id: 43,
    day: 43,
    week: 6,
    level: "Explorer",
    levelBadge: "Level 5 • Animal Friends",
    title: "The Giraffe with the Woolly Scarf",
    coverEmoji: "🦒",
    themeColor: "#FB8C00",
    category: "Animal Friends",
    readingTime: "5 mins",
    wordCount: 206,
    intro: "Gerry the giraffe has a very long neck. When winter winds arrive, he needs a very long scarf!",
    paragraphs: [
      "Gerry was the tallest giraffe on the African reserve. He could easily reach sweet green acacia leaves at the very tippy-top of trees.",
      "However, having a two-meter neck had one big problem: when winter winds blew from the southern mountains, Gerry got an awful sore throat!",
      "'Achoo!' Gerry sneezed, wrapping his long neck around a warm rock.",
      "His animal friends decided to help. Mama Ostrich gathered soft fluffy shed feathers. The sheep sheared warm bundles of cozy merino wool.",
      "Together, the woodland weaver birds knitted day and night with their sharp beaks. They knitted for three whole days!",
      "On Friday morning, they presented Gerry with the world's longest knitted scarf: six meters of rainbow-striped wool with golden tassels!",
      "Gerry wrapped the scarf round and round his long neck: five full loops! It was warm, snug, and cozy.",
      "Gerry grinned from ear to ear. 'Thank you, my wonderful friends!' he hummed. Friendship is the warmest blanket of all."
    ],
    vocabulary: [
      {
        word: "reserve",
        syllables: "re-serve",
        phonetic: "/rɪˈzɝːv/",
        definition: "A protected area of land where wild animals can live safely.",
        example: "The elephants live peacefully in the wildlife reserve.",
        emoji: "🏞️"
      },
      {
        word: "sheared",
        syllables: "sheared",
        phonetic: "/ʃɪrd/",
        definition: "Cut wool off a sheep or animal using clippers.",
        example: "The farmer sheared the sheep in the springtime.",
        emoji: "🐑"
      },
      {
        word: "snug",
        syllables: "snug",
        phonetic: "/snʌɡ/",
        definition: "Comfortable, warm, and fitting closely and pleasantly.",
        example: "The winter boots kept her feet warm and snug in the snow.",
        emoji: "🧣"
      }
    ],
    quiz: [
      {
        question: "What problem did Gerry the giraffe have in the winter?",
        options: ["He couldn't find water", "Cold winds gave his long neck a sore throat", "He lost his spots", "He forgot how to run"],
        answerIndex: 1,
        explanation: "Cold winter winds blew on Gerry's long neck and gave him a sore throat."
      },
      {
        question: "How long was the knitted scarf Gerry's friends made for him?",
        options: ["One foot", "Six meters of rainbow-striped wool", "Fifty meters", "Two inches"],
        answerIndex: 1,
        explanation: "They knitted a six-meter-long rainbow-striped wool scarf with golden tassels!"
      },
      {
        question: "How many loops did the scarf make around Gerry's neck?",
        options: ["Only half a loop", "Five full loops", "Twenty loops", "None"],
        answerIndex: 1,
        explanation: "Gerry wrapped the scarf round and round for five full loops."
      }
    ],
    funPrompt: "If you could knit a warm winter gift for any animal, what would you make: earmuffs for an elephant, or socks for a caterpillar?"
  },
  {
    id: 44,
    day: 44,
    week: 6,
    level: "Explorer",
    levelBadge: "Level 5 • Week 6 Review",
    title: "Animal Kingdom Song (Rhyme)",
    coverEmoji: "🐾",
    themeColor: "#8E24AA",
    category: "Fun Poem & Rhyme",
    readingTime: "4 mins",
    wordCount: 168,
    intro: "Day 44! Sing and rhyme with all the incredible animal champions from Week 6.",
    paragraphs: [
      "The koala climbs the gum tree high,\nBeneath the sunny southern sky!\nThe penguin tap-dances on the ice,\nWith twirls and slides that look so nice!",
      "The honey badger brave and bold,\nHas courage worth its weight in gold!\nThe chameleon shows his feelings bright,\nIn turquoise, gold, and ruby light!",
      "The otter floats upon the sea,\nWith pebble in his pocket free!\nThe giraffe with his rainbow scarf so grand,\nIs cheered by friends across the land!",
      "Every creature great and small,\nHas gifts to share with one and all!\nSo listen closely, read and see,\nThe wonders of our family tree!\n\nHooray! Day 44 is complete! You are becoming a confident English speaker!"
    ],
    vocabulary: [
      {
        word: "creature",
        syllables: "crea-ture",
        phonetic: "/ˈkriː.tʃɚ/",
        definition: "An animal, especially a non-human living being.",
        example: "The forest was full of curious woodland creatures.",
        emoji: "🦊"
      },
      {
        word: "courage",
        syllables: "cour-age",
        phonetic: "/ˈkɝː.ɪdʒ/",
        definition: "The ability to do something frightening without backing down; bravery.",
        example: "It took great courage to speak on stage in front of the school.",
        emoji: "🦁"
      },
      {
        word: "wonders",
        syllables: "won-ders",
        phonetic: "/ˈwʌn.dɚz/",
        definition: "Things that cause surprise, admiration, or amazement.",
        example: "The night sky is filled with the wonders of the universe.",
        emoji: "✨"
      }
    ],
    quiz: [
      {
        question: "Which animal has courage 'worth its weight in gold' in the poem?",
        options: ["The rabbit", "The honey badger", "The mouse", "The caterpillar"],
        answerIndex: 1,
        explanation: "The poem says: 'The honey badger brave and bold, has courage worth its weight in gold!'"
      },
      {
        question: "What colors does the chameleon show in the poem?",
        options: ["Only black", "Turquoise, gold, and ruby light", "Brown and grey", "Silver"],
        answerIndex: 1,
        explanation: "The poem mentions 'turquoise, gold, and ruby light.'"
      },
      {
        question: "What is the message of the poem?",
        options: ["Animals are scary", "Every creature great and small has special gifts to share", "Only big animals matter", "Keep quiet"],
        answerIndex: 1,
        explanation: "The poem reminds us that every creature great and small has unique gifts to share."
      }
    ],
    funPrompt: "Read your favorite stanza of this poem out loud with rhythm and claps! What is your favorite animal in the whole world?"
  },

  // ==========================================
  // WEEK 7: LITTLE SCIENTIST & NATURE
  // ==========================================
  {
    id: 45,
    day: 45,
    week: 7,
    level: "Explorer",
    levelBadge: "Level 5 • Science & Wonder",
    title: "Why Does the Moon Change Shape?",
    coverEmoji: "🌙",
    themeColor: "#3F51B5",
    category: "Little Scientist",
    readingTime: "5 mins",
    wordCount: 208,
    intro: "Lucas wonders if someone takes bites out of the moon like a cookie. Dad shows him the real cosmic secret!",
    paragraphs: [
      "On a crisp Friday night, eight-year-old Lucas sat on his porch staring at the velvety night sky.",
      "'Dad,' Lucas asked, pointing up at a thin silver curve. 'Last week the moon was a giant round dinner plate. Tonight it looks like a silver banana peel. Does someone take bites out of the moon?'",
      "Dad chuckled warmly. 'Come into the kitchen, scientist. Let's do an experiment!'",
      "Dad turned off the kitchen lights. He placed a bright lamp on the table. 'This lamp is the Sun.'",
      "He handed Lucas a white foam baseball. 'This is the Moon, and your head is planet Earth.'",
      "Lucas held the ball at arm's length and slowly spun around in a circle.",
      "'Look at the ball as you turn,' Dad guided. Lucas noticed that the lamp only lit up one side of the ball. Depending on where he stood, he saw a sliver, a half-circle, or a full circle!",
      "'The moon doesn't change shape at all!' Lucas gasped. 'It is always a round sphere. We just see different angles of sunlight bouncing off its surface!'",
      "Dad high-fived Lucas. Science turns mystery into understanding."
    ],
    vocabulary: [
      {
        word: "cosmic",
        syllables: "cos-mic",
        phonetic: "/ˈkɑːz.mɪk/",
        definition: "Relating to the universe, outer space, and astronomy.",
        example: "The telescope captured cosmic images of distant galaxies.",
        emoji: "🌌"
      },
      {
        word: "experiment",
        syllables: "ex-per-i-ment",
        phonetic: "/ɪkˈsper.ə.mənt/",
        definition: "A scientific test done to discover or demonstrate a fact.",
        example: "We conducted a science experiment with magnets in class.",
        emoji: "🧪"
      },
      {
        word: "sphere",
        syllables: "sphere",
        phonetic: "/sfɪr/",
        definition: "A round, three-dimensional solid shape like a ball or globe.",
        example: "Planet Earth is a giant blue and green sphere.",
        emoji: "🔮"
      }
    ],
    quiz: [
      {
        question: "Why does the moon seem to change shape in the sky?",
        options: ["Aliens take bites out of it", "We see different angles of sunlight reflecting off its round surface as it orbits Earth", "It melts in heat", "Clouds paint it"],
        answerIndex: 1,
        explanation: "The moon is always round; we see different angles of sunlight reflecting off its surface."
      },
      {
        question: "What did Dad use to represent the Sun in the kitchen experiment?",
        options: ["A flashlight", "A bright table lamp", "A candle", "An orange"],
        answerIndex: 1,
        explanation: "Dad used a bright kitchen lamp to represent the Sun."
      },
      {
        question: "What did Lucas use to represent the Moon?",
        options: ["An apple", "A white foam baseball", "A plate", "A mirror"],
        answerIndex: 1,
        explanation: "Lucas held a white foam baseball on his outstretched arm."
      }
    ],
    funPrompt: "Tonight, look out your window at the moon! What shape does it look like right now?"
  },
  {
    id: 46,
    day: 46,
    week: 7,
    level: "Explorer",
    levelBadge: "Level 5 • Science & Wonder",
    title: "The Magnet That Saved the Lost Needle",
    coverEmoji: "🧲",
    themeColor: "#E91E63",
    category: "Little Scientist",
    readingTime: "5 mins",
    wordCount: 205,
    intro: "Grandma drops her silver sewing needle into a shaggy woolen rug. Can science save the day?",
    paragraphs: [
      "Grandma was sewing a patchwork quilt with colorful squares of floral cotton and velvet.",
      "Suddenly, her silver needle slipped from her fingers. 'Oh dear!' Grandma gasped. 'It fell into the thick shaggy carpet. We must not walk barefoot until we find it, or someone could get poked!'",
      "Seven-year-old Sophie searched on her hands and knees, but the shaggy rug threads were too dense to see anything.",
      "Then Sophie had a brilliant spark of inspiration. 'Wait, Grandma! Needles are made of steel, and steel contains iron!'",
      "Sophie dashed to her science kit and grabbed her red-and-silver horseshoe magnet.",
      "She hovered the magnet two inches above the carpet, sweeping it back and forth like a metal detector.",
      "Suddenly—CLICK! A tiny silver flash leaped straight up out of the deep carpet threads and snapped against the magnet's pole!",
      "Grandma clapped her hands with delight. 'Sophie, your scientific brain saved our toes!'",
      "Sophie smiled proudly. Invisible magnetic force fields had won the day."
    ],
    vocabulary: [
      {
        word: "inspiration",
        syllables: "in-spi-ra-tion",
        phonetic: "/ˌɪn.spəˈreɪ.ʃən/",
        definition: "A sudden bright idea or creative feeling that leads to action.",
        example: "The artist felt a burst of inspiration when looking at the sunset.",
        emoji: "💡"
      },
      {
        word: "magnetic",
        syllables: "mag-net-ic",
        phonetic: "/mæɡˈnet̬.ɪk/",
        definition: "Having the power to attract or pull iron and steel objects.",
        example: "The magnetic letters stuck to the refrigerator door.",
        emoji: "🧲"
      },
      {
        word: "detector",
        syllables: "de-tec-tor",
        phonetic: "/dɪˈtek.tɚ/",
        definition: "A device or instrument designed to find or notice something hidden.",
        example: "The metal detector beeped when it found a buried coin.",
        emoji: "🔍"
      }
    ],
    quiz: [
      {
        question: "What valuable item did Grandma lose in the shaggy carpet?",
        options: ["A gold ring", "A silver sewing needle", "Her glasses", "A coin"],
        answerIndex: 1,
        explanation: "Grandma dropped her silver sewing needle while sewing a patchwork quilt."
      },
      {
        question: "Why did the needle stick to Sophie's horseshoe magnet?",
        options: ["Because of glue", "Because the needle is made of steel, which is magnetic", "Because it was heavy", "Magic"],
        answerIndex: 1,
        explanation: "Sewing needles are made of steel (iron), which is strongly attracted to magnets."
      },
      {
        question: "How did Sophie sweep the magnet over the rug?",
        options: ["She threw it across the room", "She hovered it two inches above the carpet like a detector", "She buried it", "She washed it"],
        answerIndex: 1,
        explanation: "Sophie hovered the magnet two inches above the carpet and swept it back and forth."
      }
    ],
    funPrompt: "What things in your home are magnetic? Test refrigerator magnets on spoons, coins, paper, and plastic toys!"
  },
  {
    id: 47,
    day: 47,
    week: 7,
    level: "Explorer",
    levelBadge: "Level 5 • Science & Wonder",
    title: "The Rainbow in a Glass of Water",
    coverEmoji: "🌈",
    themeColor: "#AB47BC",
    category: "Little Scientist",
    readingTime: "5 mins",
    wordCount: 206,
    intro: "Emma discovers that invisible white sunlight actually holds seven secret colors inside!",
    paragraphs: [
      "On a bright sunny afternoon, Emma sat at the dining table with a clear glass of tap water.",
      "The sunlight streamed through the window, striking the edge of the glass. On the white tablecloth, Emma noticed something astonishing: a glowing ribbon of red, orange, yellow, green, blue, indigo, and violet!",
      "'Mom! Look, there is a miniature rainbow on our table!' Emma exclaimed.",
      "Her mother sat beside her with a notebook. 'Do you know why that happens, Emma?'",
      "'Sunlight looks plain white or clear to our eyes,' Mom explained. 'However, white light is actually a team of seven colors traveling together at incredible speeds.'",
      "'When the light rays enter the dense water in the glass, each color slows down and bends at a slightly different angle. This bending is called refraction!'",
      "Emma held up a white card. The refracted colors painted a bright spectrum across the card. Red was on top, and violet was on the bottom.",
      "'So every raindrop in the sky is like a tiny glass of water!' Emma realized.",
      "Her mother smiled. Nature is the world's most wonderful science laboratory."
    ],
    vocabulary: [
      {
        word: "astonishing",
        syllables: "as-ton-ish-ing",
        phonetic: "/əˈstɑː.nɪ.ʃɪŋ/",
        definition: "Extremely surprising, impressive, or amazing.",
        example: "The magician performed an astonishing disappearing trick.",
        emoji: "😲"
      },
      {
        word: "refraction",
        syllables: "re-frac-tion",
        phonetic: "/rɪˈfræk.ʃən/",
        definition: "The bending of light as it passes from one material into another (like air into water).",
        example: "Refraction through glass prisms splits white light into a rainbow.",
        emoji: "📐"
      },
      {
        word: "spectrum",
        syllables: "spec-trum",
        phonetic: "/ˈspek.trəm/",
        definition: "The band of seven colors produced when white sunlight is separated.",
        example: "The rainbow showed the complete visible light spectrum.",
        emoji: "🎨"
      }
    ],
    quiz: [
      {
        question: "What appeared on the tablecloth when sunlight passed through the glass of water?",
        options: ["A puddle of water", "A miniature glowing rainbow", "A fire", "Dark shadows"],
        answerIndex: 1,
        explanation: "A glowing ribbon of red, orange, yellow, green, blue, indigo, and violet appeared."
      },
      {
        question: "What is white sunlight really made of?",
        options: ["Only yellow light", "A team of seven colors traveling together", "Pure darkness", "Gas"],
        answerIndex: 1,
        explanation: "White light is a team of seven colors (red to violet) traveling together."
      },
      {
        question: "What scientific word describes the bending of light when it passes through water?",
        options: ["Evaporation", "Refraction", "Freezing", "Digestion"],
        answerIndex: 1,
        explanation: "Refraction is the scientific term for the bending of light."
      }
    ],
    funPrompt: "Can you name the 7 colors of the rainbow in English? (Red, Orange, Yellow, Green, Blue, Indigo, Violet!)"
  },
  {
    id: 48,
    day: 48,
    week: 7,
    level: "Explorer",
    levelBadge: "Level 5 • Science & Wonder",
    title: "The Kitchen Volcano",
    coverEmoji: "🌋",
    themeColor: "#FF5722",
    category: "Little Scientist",
    readingTime: "5 mins",
    wordCount: 210,
    intro: "Liam and his sister build a volcano out of brown playdough. Watch what happens when vinegar meets baking soda!",
    paragraphs: [
      "Liam and his sister Chloe were wearing safety goggles in the kitchen. Today was volcano experiment day!",
      "In the center of a baking tray, they molded a cone-shaped mountain using brown modeling clay. At the peak, they embedded an empty plastic medicine cup as the volcanic crater.",
      "Inside the crater, Liam spooned two tablespoons of white baking soda, three drops of dish soap, and five drops of bright red food coloring.",
      "'Are you ready for the eruption?' Chloe asked, holding a measuring cup filled with clear white vinegar.",
      "'Count down with me: Three, two, one... ERUPTION!' Liam cheered.",
      "Chloe poured the vinegar into the crater. SZZZZZZ!",
      "Instantly, thousands of frothy crimson bubbles boiled up. A thick, foaming lava cascade spilled over the crater rim and rushed down the clay slopes onto the tray!",
      "'Woah!' Liam cheered, clapping with glee.",
      "Their dad explained: 'The acid in vinegar reacted with the alkaline baking soda to create carbon dioxide gas. The gas bubbles got trapped in the soap, making fizzy foam!'",
      "Science in the kitchen was thrilling, messy, and unforgettable."
    ],
    vocabulary: [
      {
        word: "goggles",
        syllables: "gog-gles",
        phonetic: "/ˈɡɑː.ɡəlz/",
        definition: "Protective glasses that fit closely to the face to shield eyes.",
        example: "She wore safety goggles during the chemistry experiment.",
        emoji: "🥽"
      },
      {
        word: "cascade",
        syllables: "cas-cade",
        phonetic: "/kæsˈkeɪd/",
        definition: "A mass of something falling or flowing downward like a waterfall.",
        example: "A cascade of cool mountain water tumbled over the rocks.",
        emoji: "🌊"
      },
      {
        word: "alkaline",
        syllables: "al-ka-line",
        phonetic: "/ˈæl.kə.laɪn/",
        definition: "Having chemical properties of a base (the opposite of an acid).",
        example: "Baking soda is a common household alkaline substance.",
        emoji: "🧪"
      }
    ],
    quiz: [
      {
        question: "What two main ingredients caused the volcano to erupt?",
        options: ["Water and sugar", "Baking soda and vinegar", "Milk and chocolate", "Salt and pepper"],
        answerIndex: 1,
        explanation: "Baking soda (alkaline) and vinegar (acid) reacted to create the fizzy eruption."
      },
      {
        question: "What gas was created during the chemical reaction?",
        options: ["Oxygen", "Carbon dioxide gas bubbles", "Helium", "Steam"],
        answerIndex: 1,
        explanation: "The reaction produced carbon dioxide gas, which created the fizzy foam."
      },
      {
        question: "Why did they add dish soap to the crater?",
        options: ["To clean the mountain", "To trap the gas bubbles and make thick frothy foam", "To make it smell good", "To make it cold"],
        answerIndex: 1,
        explanation: "Dish soap trapped the gas bubbles to create a thick foaming lava cascade."
      }
    ],
    funPrompt: "Have you ever made a science experiment at home or school? What was the coolest thing you discovered?"
  },
  {
    id: 49,
    day: 49,
    week: 7,
    level: "Explorer",
    levelBadge: "Level 5 • Science & Wonder",
    title: "The Whispering Canyon Echo",
    coverEmoji: "📢",
    themeColor: "#8D6E63",
    category: "Little Scientist",
    readingTime: "5 mins",
    wordCount: 208,
    intro: "Elena calls out 'HELLO!' into a deep rocky canyon. Who is answering back?",
    paragraphs: [
      "Elena stood with her parents at the observation rim of Red Rock Canyon. Deep below them, towering sandstone cliffs glowed amber and scarlet in the afternoon sun.",
      "Elena cupped her hands around her mouth and shouted into the vast canyon: 'HELLO! HELLO!'",
      "One second passed in complete silence. Then, from the distant canyon walls across the gorge, a clear voice called back: 'HELLO! ... hello ... hello!'",
      "Elena's eyes went wide. 'Is someone over there repeating my words?' she asked, looking across the vast empty gorge.",
      "Her mother smiled and took a pebble from the trail. 'Elena, sound travels through the air in invisible waves, just like ripples when you toss a stone into a pond.'",
      "'When you shouted,' Mom explained, 'your sound waves sped across the canyon at over seven hundred miles per hour. When they struck that sheer rock wall, they bounced straight back to your ears!'",
      "Elena tried shouting again: 'I LOVE READING!'",
      "A moment later, the canyon walls joyfully echoed: 'I LOVE READING! ... reading ... reading!'",
      "Elena laughed delightedly. Talking to the canyon was like having a giant friendly mirror made of sound."
    ],
    vocabulary: [
      {
        word: "observation",
        syllables: "ob-ser-va-tion",
        phonetic: "/ˌɑːb.zɚˈveɪ.ʃən/",
        definition: "The act of watching, noticing, or looking carefully at something.",
        example: "We stood on the observation deck to view the city lights.",
        emoji: "🔭"
      },
      {
        word: "gorge",
        syllables: "gorge",
        phonetic: "/ɡɔːrdʒ/",
        definition: "A narrow valley between high cliffs, often with a river running through it.",
        example: "The wooden suspension bridge spanned the deep mountain gorge.",
        emoji: "🏞️"
      },
      {
        word: "sheer",
        syllables: "sheer",
        phonetic: "/ʃɪr/",
        definition: "Completely steep and almost straight up and down (like a vertical cliff).",
        example: "The mountain climbers scaled the sheer granite cliff.",
        emoji: "🧗"
      }
    ],
    quiz: [
      {
        question: "What is an echo?",
        options: ["Another person hiding in the rocks", "Sound waves bouncing back off a hard surface to your ears", "Wind whistling", "A bird singing"],
        answerIndex: 1,
        explanation: "An echo occurs when sound waves hit a hard surface and bounce back to your ears."
      },
      {
        question: "How fast do sound waves travel through the air?",
        options: ["Five miles per hour", "Over seven hundred miles per hour", "One mile per year", "Speed of light"],
        answerIndex: 1,
        explanation: "Sound travels through the air at roughly 767 miles per hour."
      },
      {
        question: "What happy phrase did Elena shout into the canyon?",
        options: ["Good night!", "I LOVE READING!", "Where are you?", "Stop copying me!"],
        answerIndex: 1,
        explanation: "Elena shouted 'I LOVE READING!' and the canyon echoed her words joyfully."
      }
    ],
    funPrompt: "Try whispering loudly in an empty hallway or bathroom: 'Echo!' Can you hear your voice bouncing off the walls?"
  },
  {
    id: 50,
    day: 50,
    week: 7,
    level: "Explorer",
    levelBadge: "Level 5 • Science & Wonder",
    title: "The Miracle of the Monarch Butterfly",
    coverEmoji: "🦋",
    themeColor: "#FF9800",
    category: "Little Scientist",
    readingTime: "5 mins",
    wordCount: 212,
    intro: "A tiny striped caterpillar prepares for the most astonishing transformation in all of nature.",
    paragraphs: [
      "In Maya's backyard milkweed garden, a plump little caterpillar named Pip chewed green leaves contentedly.",
      "Pip was adorned with bright yellow, black, and white rings. Day after day, she ate until she felt heavy and sleepy.",
      "One warm morning, Pip climbed beneath a sturdy leaf and spun a tiny silk anchor pad. She hung upside down in the shape of the letter 'J'.",
      "A few hours later, Pip's outer skin split open. Underneath was not another skin, but a smooth jade-green chrysalis rimmed with shimmering golden crowns!",
      "For ten quiet days, the chrysalis hung motionless. But inside, nature's greatest miracle was taking place.",
      "On the eleventh morning, the chrysalis turned transparent. Dark black and brilliant orange wings showed through the glass-like shell.",
      "With a soft crack, the chrysalis opened. Out stepped a magnificent Monarch butterfly!",
      "She pumped fluid into her folded wings, expanding them until they dried in the morning sunshine. She fluttered her wings and took flight into the blue sky.",
      "Change takes time, but the result can be pure magic."
    ],
    vocabulary: [
      {
        word: "chrysalis",
        syllables: "chrys-a-lis",
        phonetic: "/ˈkrɪs.ə.lɪs/",
        definition: "The hard-shelled pupa stage of a moth or butterfly undergoing transformation.",
        example: "The green chrysalis hung suspended from the garden twig.",
        emoji: "🐛"
      },
      {
        word: "transparent",
        syllables: "trans-par-ent",
        phonetic: "/trænˈspær.ənt/",
        definition: "Clear enough to see through easily, like clean glass or water.",
        example: "The clean aquarium glass was completely transparent.",
        emoji: "🪟"
      },
      {
        word: "magnificent",
        syllables: "mag-nif-i-cent",
        phonetic: "/mæɡˈnɪf.ə.sənt/",
        definition: "Extremely beautiful, splendid, and grand.",
        example: "The palace had magnificent golden chandeliers.",
        emoji: "👑"
      }
    ],
    quiz: [
      {
        question: "What shape did the caterpillar hang in before forming her chrysalis?",
        options: ["The letter 'O'", "The letter 'J'", "The letter 'X'", "A straight line"],
        answerIndex: 1,
        explanation: "Monarch caterpillars hang upside down in the shape of the letter 'J'."
      },
      {
        question: "What color was the chrysalis at first?",
        options: ["Bright red", "Smooth jade-green with golden crowns", "Pitch black", "Blue"],
        answerIndex: 1,
        explanation: "The Monarch chrysalis is smooth jade-green with sparkling golden dots."
      },
      {
        question: "What did the caterpillar transform into at the end?",
        options: ["A bumblebee", "A magnificent orange and black Monarch butterfly", "A ladybug", "A grasshopper"],
        answerIndex: 1,
        explanation: "She transformed into a magnificent Monarch butterfly and flew into the sky."
      }
    ],
    funPrompt: "Butterflies go through 4 life stages: Egg, Caterpillar, Chrysalis, and Butterfly! Can you act out each stage with your body?"
  },
  {
    id: 51,
    day: 51,
    week: 7,
    level: "Explorer",
    levelBadge: "Level 5 • Week 7 Review",
    title: "The Curious Thinker (Rhyme)",
    coverEmoji: "💡",
    themeColor: "#00BCD4",
    category: "Fun Poem & Rhyme",
    readingTime: "4 mins",
    wordCount: 170,
    intro: "Day 51! Celebrate your week of science, questions, and big discoveries with this lively poem.",
    paragraphs: [
      "Why does the moon glow soft at night?\nWhy does the prism bend the light?\nHow does a magnet pull a pin?\nWhere does the butterfly's flight begin?",
      "The world is full of questions grand,\nWaiting for curious minds to understand!\nWith vinegar volcanoes fizzing red,\nAnd starry ideas inside your head!",
      "You don't need a lab with a marble floor,\nJust open your eyes and explore once more!\nAsk 'Why?' and 'How?' and 'What could be?'\nFor science unlocks every mystery!",
      "Magnificent work! You have read for 51 days in a row! Only nine days to your Month 2 Grand Trophy!"
    ],
    vocabulary: [
      {
        word: "prism",
        syllables: "prism",
        phonetic: "/ˈprɪz.əm/",
        definition: "A triangular glass block that splits white light into the colors of the rainbow.",
        example: "Light passing through the prism painted colors on the wall.",
        emoji: "🔺"
      },
      {
        word: "curious",
        syllables: "cu-ri-ous",
        phonetic: "/ˈkjʊr.i.əs/",
        definition: "Eager to know, learn, and discover new things.",
        example: "The curious girl read books about planets and stars.",
        emoji: "🧐"
      },
      {
        word: "mystery",
        syllables: "mys-ter-y",
        phonetic: "/ˈmɪs.tɚ.i/",
        definition: "Something strange, puzzling, or unknown that excites curiosity.",
        example: "The secret code in the letter was a fun mystery to solve.",
        emoji: "🗝️"
      }
    ],
    quiz: [
      {
        question: "What three questions does the poem encourage children to ask?",
        options: ["Who, what, when", "Why?, How?, and What could be?", "Where, when, why", "Is it time?"],
        answerIndex: 1,
        explanation: "The poem says: 'Ask Why? and How? and What could be?'"
      },
      {
        question: "What does science unlock according to the poem?",
        options: ["Toy boxes", "Every mystery in the world", "Car doors", "School bells"],
        answerIndex: 1,
        explanation: "The poem says: 'For science unlocks every mystery!'"
      },
      {
        question: "Do you need a fancy lab to be a scientist?",
        options: ["Yes, only in a castle", "No, just open your eyes and explore with curiosity", "Only adults can be scientists", "Only in space"],
        answerIndex: 1,
        explanation: "The poem explains you don't need a marble lab; just open your eyes and explore with curiosity."
      }
    ],
    funPrompt: "What is one question you have about nature or the universe? Ask your parent or look it up together in an encyclopedia!"
  },

  // ==========================================
  // WEEK 8: BIG DREAMS, COURAGE & SUPER READERS
  // ==========================================
  {
    id: 52,
    day: 52,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Big Dreams",
    title: "Amelia's First Solo Flight",
    coverEmoji: "✈️",
    themeColor: "#1E88E5",
    category: "Real Heroes",
    readingTime: "5 mins",
    wordCount: 215,
    intro: "Young Amelia straps into the yellow biplane cockpit. Above the clouds, dreams take wing!",
    paragraphs: [
      "In the 1920s, very few women were encouraged to become airplane pilots. But Amelia Earhart was not a person to be held back by rules.",
      "Her bright yellow propeller biplane, nicknamed 'The Canary', stood waiting on the grassy airstrip.",
      "Amelia adjusted her brown leather flight jacket, strapped on her goggles, and climbed into the open cockpit.",
      "The propeller turned: 'Cough, sputter, ROAR!' The engine came to life with a powerful vibrating hum.",
      "Amelia pushed the throttle forward. The Canary gained speed down the runway: thirty miles per hour, forty, fifty!",
      "Gently, Amelia pulled back on the control yoke. The wheels lifted off the grass. Earth dropped away beneath her wings.",
      "She climbed through misty cotton clouds into glorious golden sunshine. The patchwork farm fields below looked like a colorful green quilt.",
      "Up here, the sky had no borders, and possibilities had no limits.",
      "'Never let anyone tell you your dreams are too big,' Amelia whispered, banking her plane toward the horizon."
    ],
    vocabulary: [
      {
        word: "biplane",
        syllables: "bi-plane",
        phonetic: "/ˈbaɪ.pleɪn/",
        definition: "An early type of aircraft with two sets of wings fixed one above the other.",
        example: "The yellow biplane buzzed across the blue summer sky.",
        emoji: "🛩️"
      },
      {
        word: "throttle",
        syllables: "throt-tle",
        phonetic: "/ˈθrɑː.t̬əl/",
        definition: "A lever or pedal controlling the power and speed of an engine.",
        example: "The pilot pushed the throttle to accelerate the aircraft.",
        emoji: "🕹️"
      },
      {
        word: "possibilities",
        syllables: "pos-si-bil-i-ties",
        phonetic: "/ˌpɑː.səˈbɪl.ə.t̬iz/",
        definition: "Chances or opportunities for things to happen or be achieved.",
        example: "With hard work and education, future possibilities are endless.",
        emoji: "🌟"
      }
    ],
    quiz: [
      {
        question: "What was the nickname of Amelia's bright yellow biplane?",
        options: ["The Bluebird", "The Canary", "The Eagle", "The Falcon"],
        answerIndex: 1,
        explanation: "Amelia's yellow biplane was affectionately nicknamed 'The Canary'."
      },
      {
        question: "What did the farm fields look like from up in the sky?",
        options: ["A dark lake", "A colorful green patchwork quilt", "A highway", "A desert"],
        answerIndex: 1,
        explanation: "The fields below looked like a colorful green patchwork quilt."
      },
      {
        question: "What inspiring message did Amelia share about dreams?",
        options: ["Dreams are impossible", "Never let anyone tell you your dreams are too big", "Only boys can fly", "Stay on the ground"],
        answerIndex: 1,
        explanation: "Amelia believed that you should never let anyone tell you your dreams are too big."
      }
    ],
    funPrompt: "If you could fly an airplane anywhere in the world, what country or city would you fly to first?"
  },
  {
    id: 53,
    day: 53,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Big Dreams",
    title: "The Boy Who Harnessed the Wind",
    coverEmoji: "💨",
    themeColor: "#43A047",
    category: "Real Heroes",
    readingTime: "5 mins",
    wordCount: 218,
    intro: "Using bicycle parts and scrap metal, William brings electricity and water to his drought-stricken village.",
    paragraphs: [
      "In a small rural village in Malawi, fourteen-year-old William Kamkwamba loved studying old science books at the local library.",
      "His village suffered from a devastating drought. Crops dried in the cracked soil, and darkness blanketed homes every evening because there was no electricity.",
      "William refused to give up. In a book titled 'Using Energy', he saw a diagram of a windmill that produced electric power from wind.",
      "'Wind is free,' William thought. 'If I catch the wind, I can bring light and pump water for our fields!'",
      "William searched the village scrapyard. He collected rusty tractor fans, an old bicycle frame, plastic PVC pipes, and a small bicycle dynamo.",
      "Neighbors whispered that he was crazy. But William persisted, bolting pieces together with focused determination.",
      "He climbed a tall wooden tower he built from blue gum trees and attached the windmill blades.",
      "A gust of wind blew. The blades spun: 'Whoosh, whoosh!' A small lightbulb wired to the dynamo flickered and burst into brilliant white light!",
      "The villagers erupted in cheers. Curiosity, scrap metal, and determination had lit up the darkness."
    ],
    vocabulary: [
      {
        word: "drought",
        syllables: "drought",
        phonetic: "/draʊt/",
        definition: "A long period of time with little or no rainfall, causing water shortages.",
        example: "The crops struggled to survive during the summer drought.",
        emoji: "🏜️"
      },
      {
        word: "dynamo",
        syllables: "dy-na-mo",
        phonetic: "/ˈdaɪ.nə.moʊ/",
        definition: "A machine or generator that converts mechanical motion into electricity.",
        example: "The bicycle dynamo powered the front headlight when he pedaled.",
        emoji: "⚡"
      },
      {
        word: "persisted",
        syllables: "per-sis-ted",
        phonetic: "/pɚˈsɪs.tɪd/",
        definition: "Continued firmly despite difficulty, obstacles, or warnings.",
        example: "She persisted through difficult math problems until she solved them all.",
        emoji: "💪"
      }
    ],
    quiz: [
      {
        question: "Where did William find parts to build his windmill?",
        options: ["He bought them online", "In the village scrapyard (bicycle frame, tractor fan, PVC pipes)", "In a department store", "From a factory"],
        answerIndex: 1,
        explanation: "William cleverly recycled parts from the village scrapyard."
      },
      {
        question: "What happened when the wind spun William's windmill blades?",
        options: ["It broke", "A small lightbulb flickered and burst into brilliant light", "It caught fire", "Nothing"],
        answerIndex: 1,
        explanation: "The dynamo converted the motion into electricity and lit up a lightbulb!"
      },
      {
        question: "What character trait helped William succeed despite doubts?",
        options: ["Anger", "Determination, curiosity, and persistence", "Giving up early", "Staying silent"],
        answerIndex: 1,
        explanation: "William's determination and refusal to give up turned scrap into power."
      }
    ],
    funPrompt: "Recycling old scrap into new inventions is called 'upcycling'. What is something you could make from an empty box or plastic bottle?"
  },
  {
    id: 54,
    day: 54,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Big Dreams",
    title: "The Submarine Journey to the Deep Sea Trench",
    coverEmoji: "🛸",
    themeColor: "#0288D1",
    category: "Science & Adventure",
    readingTime: "5 mins",
    wordCount: 220,
    intro: "Dr. Sylvia dives seven miles down into the mysterious midnight zone of the ocean.",
    paragraphs: [
      "The deep-sea research submersible 'Aquanaut' was a sphere of solid titanium built to withstand immense oceanic pressure.",
      "Marine biologist Dr. Sylvia strapped into her pilot seat. 'Commencing descent into the Mariana Trench,' she announced through the radio.",
      "The submarine dropped past the sunlit surface layer. At six hundred feet, the water turned deep violet. At three thousand feet, sunlight vanished into absolute inky darkness.",
      "Sylvia switched on the exterior halogen spotlights. Outside the thick quartz viewport, an alien wonderland appeared!",
      "A luminous anglerfish swam by, dangling a glowing blue lantern above its teeth. Translucent comb jellies drifted like floating neon chandeliers, pulsing with rainbow waves of bioluminescence.",
      "A giant octopus with crimson eyes glided silently over the abyssal plains.",
      "'Even in the darkest, coldest depths on Earth,' Sylvia noted in her logbook, 'life finds a way to shine.'",
      "Exploring the ocean reminded her that our blue planet holds more wonders than we could discover in a hundred lifetimes."
    ],
    vocabulary: [
      {
        word: "submersible",
        syllables: "sub-mers-i-ble",
        phonetic: "/səbˈmɝː.sə.bəl/",
        definition: "A small watercraft designed to operate deep underwater.",
        example: "The deep-sea submersible explored underwater volcanoes.",
        emoji: "🚢"
      },
      {
        word: "translucent",
        syllables: "trans-lu-cent",
        phonetic: "/trænˈsluː.sənt/",
        definition: "Allowing light to pass through, but not completely transparent.",
        example: "The jellyfish had a translucent, glowing body.",
        emoji: "🪼"
      },
      {
        word: "bioluminescence",
        syllables: "bi-o-lu-mi-nes-cence",
        phonetic: "/ˌbaɪ.oʊˌluː.məˈnes.əns/",
        definition: "The production and emission of light by a living organism.",
        example: "Fireflies and deep sea creatures produce bioluminescence.",
        emoji: "✨"
      }
    ],
    quiz: [
      {
        question: "What is the research submarine 'Aquanaut' made of?",
        options: ["Cardboard", "Solid titanium built to withstand extreme water pressure", "Plastic", "Wood"],
        answerIndex: 1,
        explanation: "The submersible is built of solid titanium to withstand deep-sea pressure."
      },
      {
        question: "What happened to sunlight as the submarine dove deeper into the ocean?",
        options: ["It got hotter", "It vanished into absolute inky darkness", "It turned neon green", "It never changed"],
        answerIndex: 1,
        explanation: "At deep levels, sunlight completely vanished into total darkness."
      },
      {
        question: "How do deep-sea creatures like anglerfish and comb jellies light up the dark water?",
        options: ["They carry batteries", "They produce bioluminescence (living light)", "They reflect mirrors", "They don't light up"],
        answerIndex: 1,
        explanation: "They produce bioluminescence, glowing with their own natural living light."
      }
    ],
    funPrompt: "If you could design your own submarine, what color would it be and what special cameras would it have?"
  },
  {
    id: 55,
    day: 55,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Big Dreams",
    title: "The Lost Island of Gentle Giants",
    coverEmoji: "🦕",
    themeColor: "#2E7D32",
    category: "Imagination & Wonder",
    readingTime: "5 mins",
    wordCount: 222,
    intro: "Beyond the mist of the Bermuda Triangle lies a hidden paradise where long-necked dinosaurs still roam peacefully.",
    paragraphs: [
      "Captain Nora steered her wooden sailing yacht 'Starlight' through a dense curtain of pearly sea fog.",
      "When the mist parted, Nora gasped. Rising from the turquoise sea was an uncharted tropical island with emerald volcanic peaks, cascading waterfalls, and colossal prehistoric ferns.",
      "Nora anchored in a calm cove and rowed ashore. The air smelled of sweet wild orchids and damp earth.",
      "Suddenly, the ground trembled with deep, rhythmic thuds: 'THUMP... THUMP... THUMP.'",
      "Parting the giant fern fronds, Nora peeked into a sunlit meadow. Grazing peacefully on treetop leaves was a mother Brachiosaurus and her playful calf!",
      "Their mottled green skin shimmered like moss, and their gentle amber eyes looked down at Nora without fear.",
      "The baby dinosaur bowed its long neck and gently sniffed Nora's palm with a warm puff of air.",
      "Nora did not capture them or tell the world. Some wonders are meant to be kept secret, protected in their peaceful paradise forever."
    ],
    vocabulary: [
      {
        word: "uncharted",
        syllables: "un-char-ted",
        phonetic: "/ʌnˈtʃɑːr.t̬ɪd/",
        definition: "Not shown or recorded on a map; unexplored and unknown.",
        example: "The brave sailors explored an uncharted island in the Pacific.",
        emoji: "🗺️"
      },
      {
        word: "colossal",
        syllables: "co-los-sal",
        phonetic: "/kəˈlɑː.səl/",
        definition: "Extremely large, massive, or gigantic in size.",
        example: "The colossal statue towered above the city plaza.",
        emoji: "🗿"
      },
      {
        word: "mottled",
        syllables: "mot-tled",
        phonetic: "/ˈmɑː.t̬əld/",
        definition: "Marked with spots, blotches, or streaks of different colors.",
        example: "The deer had a mottled coat that helped it camouflage in the forest.",
        emoji: "🐆"
      }
    ],
    quiz: [
      {
        question: "What kind of peaceful creatures lived on the uncharted island?",
        options: ["Pirates", "Long-necked Brachiosaurus dinosaurs", "Robots", "Lions"],
        answerIndex: 1,
        explanation: "Nora discovered a mother Brachiosaurus dinosaur and her calf."
      },
      {
        question: "What did the baby dinosaur do when it saw Nora?",
        options: ["It ran away", "It roared loudly", "It gently sniffed Nora's palm with a warm puff of air", "It fell asleep"],
        answerIndex: 2,
        explanation: "The gentle baby dinosaur bowed its neck and gently sniffed Nora's hand."
      },
      {
        question: "Why did Captain Nora decide to keep the island a secret?",
        options: ["She forgot where it was", "To protect the gentle dinosaurs and keep them safe in paradise", "Because she was scared", "She had no camera"],
        answerIndex: 1,
        explanation: "Nora wanted to protect the peaceful creatures so they could live safely forever."
      }
    ],
    funPrompt: "What is your favorite dinosaur? Is it a gentle plant-eater like Brachiosaurus or a horned Triceratops?"
  },
  {
    id: 56,
    day: 56,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Big Dreams",
    title: "The Girl with the Magic Paintbrush",
    coverEmoji: "🎨",
    themeColor: "#AB47BC",
    category: "Fairytales & Dreams",
    readingTime: "5 mins",
    wordCount: 220,
    intro: "Lin receives a mysterious bamboo paintbrush from an old monk. Everything she paints springs to life!",
    paragraphs: [
      "High in the misty mountains of ancient Guilin lived Lin, an eight-year-old girl who loved to draw.",
      "She had no money for fancy inks, so she drew pictures in the river mud using reed sticks and bird feathers.",
      "One evening, an elderly traveler arrived at her village, exhausted and thirsty. Lin offered him her cool water bowl and shared her rice cake.",
      "Grateful for her pure kindness, the traveler handed Lin a slender bamboo paintbrush with golden bristles. 'Use this gift wisely, Lin. Paint with your heart, not for greed.'",
      "The next morning, Lin dipped the brush in water and painted a small bluebird on the stone wall. To her amazement, the bird ruffled its painted feathers, chirped a sweet melody, and flew into the sky!",
      "When drought struck the farmers, Lin painted a bubbling irrigation canal, and cool water surged through the rice paddies.",
      "When the village children had no toys, she painted wooden kites and cheerful ponies.",
      "Lin never painted gold or riches for herself. She discovered that the greatest magic is bringing joy and relief to others."
    ],
    vocabulary: [
      {
        word: "exhausted",
        syllables: "ex-haust-ed",
        phonetic: "/ɪɡˈzɑː.stɪd/",
        definition: "Extremely tired, weary, and drained of energy.",
        example: "After running the marathon, the athletes were completely exhausted.",
        emoji: "🥱"
      },
      {
        word: "irrigation",
        syllables: "ir-ri-ga-tion",
        phonetic: "/ˌɪr.əˈɡeɪ.ʃən/",
        definition: "The supply of water to land or crops to help them grow.",
        example: "The farmers dug irrigation channels from the river to water their fields.",
        emoji: "💧"
      },
      {
        word: "bristles",
        syllables: "bris-tles",
        phonetic: "/ˈbrɪs.əlz/",
        definition: "Short, stiff hairs on an animal or the tip of a paintbrush or toothbrush.",
        example: "The artist cleaned the fine bristles of her paintbrush.",
        emoji: "🖌️"
      }
    ],
    quiz: [
      {
        question: "Why did the elderly traveler give Lin the magic paintbrush?",
        options: ["Because she bought it", "Because she showed pure kindness and shared her water and food", "He lost it", "He was angry"],
        answerIndex: 1,
        explanation: "Lin shared her water and rice cake with kindness, so the traveler rewarded her."
      },
      {
        question: "What happened when Lin painted a picture with the brush?",
        options: ["It vanished", "The painted creations sprang to life", "The wall cracked", "It turned black"],
        answerIndex: 1,
        explanation: "Everything she painted sprang to life, starting with a chirping bluebird!"
      },
      {
        question: "What did Lin use her magic brush to do for the village?",
        options: ["She made gold for herself", "She painted water for the farmers' crops and toys for children", "She built a fortress", "She destroyed the village"],
        answerIndex: 1,
        explanation: "Lin used her magic to help farmers with water and bring toys to children."
      }
    ],
    funPrompt: "If you had a magic paintbrush for one hour, what 3 things would you paint to make the world happier?"
  },
  {
    id: 57,
    day: 57,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Big Dreams",
    title: "The Time Machine in the Attic",
    coverEmoji: "⏳",
    themeColor: "#5C6BC0",
    category: "Science Fiction",
    readingTime: "5 mins",
    wordCount: 224,
    intro: "Behind Grandma's dusty wardrobe sits an antique brass clock with three revolving dials for Year, Month, and Century.",
    paragraphs: [
      "On a rainy Sunday afternoon, Clara was exploring Grandma's wood-paneled attic. Rain drummed softly against the skylight.",
      "Behind an antique cedar wardrobe, Clara found a mysterious cabinet crafted from mahogany wood, brass dials, and pulsing amber vacuum tubes.",
      "A brass plaque above the seat was engraved: 'The Chrono-Pod: Destination Machine.'",
      "Clara climbed into the leather seat. She turned the brass dial labeled 'YEAR' to: 3026. Exactly one thousand years into the future!",
      "She pulled the copper lever: 'Zzzzz-WHIRRR-FLASH!'",
      "Through the window, Clara gasped. The rainy street was gone! In its place were towering crystalline skyscrapers that touched the clouds.",
      "Flying solar cars glided along glowing purple light-lanes in the air. Friendly floating helper robots shaped like bumblebees watered rooftop gardens.",
      "A girl in a shimmering silver jumpsuit noticed Clara. The girl waved and smiled warmly, holding up a floating holographic storybook.",
      "Clara smiled and waved back before pulling the lever to return home.",
      "She realized that the future is bright, clean, and full of wonder for those who love to learn."
    ],
    vocabulary: [
      {
        word: "antique",
        syllables: "an-tique",
        phonetic: "/ænˈtiːk/",
        definition: "A collectible object valued for its age, beauty, and craftsmanship.",
        example: "Grandpa has an antique grandfather clock made in 1890.",
        emoji: "🕰️"
      },
      {
        word: "crystalline",
        syllables: "crys-tal-line",
        phonetic: "/ˈkrɪs.tə.lɪn/",
        definition: "Clear, sparkling, and structured like precious crystal glass.",
        example: "The mountain lake had sparkling crystalline waters.",
        emoji: "💎"
      },
      {
        word: "holographic",
        syllables: "hol-o-graph-ic",
        phonetic: "/ˌhɑː.ləˈɡræf.ɪk/",
        definition: "Producing a three-dimensional image formed by light beams.",
        example: "The sci-fi computer displayed a holographic map floating in the air.",
        emoji: "📽️"
      }
    ],
    quiz: [
      {
        question: "Where did Clara find the mysterious Chrono-Pod machine?",
        options: ["In the basement", "Behind an antique wardrobe in Grandma's attic", "At school", "In the garden"],
        answerIndex: 1,
        explanation: "Clara discovered the brass machine behind an antique wardrobe in the attic."
      },
      {
        question: "What year in the future did Clara travel to?",
        options: ["Year 2020", "Year 3026 (one thousand years in the future)", "Year 1500", "Year 100"],
        answerIndex: 1,
        explanation: "Clara turned the dial to 3026, one thousand years into the future."
      },
      {
        question: "What was the futuristic girl in the silver jumpsuit holding?",
        options: ["A sword", "A floating holographic storybook", "A sandwich", "A television"],
        answerIndex: 1,
        explanation: "The girl waved warmly while holding a floating holographic storybook."
      }
    ],
    funPrompt: "What do you think schools and homes will look like in the year 3000? Will cars fly or will robots cook dinner?"
  },
  {
    id: 58,
    day: 58,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Big Dreams",
    title: "The Midnight Stargazer",
    coverEmoji: "🔭",
    themeColor: "#311B92",
    category: "Science & Astronomy",
    readingTime: "5 mins",
    wordCount: 225,
    intro: "Zara looks through the giant observatory telescope on the mountaintop. Behold the rings of Saturn!",
    paragraphs: [
      "Perched high atop Mount Wilson above the city smog, the great observatory dome opened its curved silver shutters to the cosmos.",
      "Eight-year-old Zara climbed the wooden ladder to the brass eyepiece of the historic telescope.",
      "'Focus the knob slowly, Zara,' Dr. Chen whispered.",
      "Zara turned the brass wheel. Suddenly, sharp and bright against the deep velvet black of space, a celestial marvel swam into view: Saturn!",
      "The planet was pale golden honey, encircled by shimmering concentric rings of ice, rock, and stardust.",
      "'Those rings look so solid!' Zara gasped in amazement.",
      "'They look solid from here,' Dr. Chen explained, 'but they are actually millions of icy moonlets, some as tiny as pebbles, others as large as houses, orbiting together at lightning speed!'",
      "Nearby, three tiny white moons gleamed like pearl earrings around the giant ringed planet.",
      "Looking across millions of miles of open space made Zara feel tiny, yet deeply connected to the infinite universe.",
      "'When you study astronomy,' Zara whispered, 'you realize the universe is our true home.'"
    ],
    vocabulary: [
      {
        word: "celestial",
        syllables: "ce-les-tial",
        phonetic: "/səˈles.tʃəl/",
        definition: "Belonging or relating to the sky, outer space, and astronomy.",
        example: "The stars and planets are magnificent celestial bodies.",
        emoji: "🪐"
      },
      {
        word: "concentric",
        syllables: "con-cen-tric",
        phonetic: "/kənˈsen.trɪk/",
        definition: "Circular shapes sharing the same center point, one inside another.",
        example: "Ripples on the water formed concentric rings.",
        emoji: "🎯"
      },
      {
        word: "infinite",
        syllables: "in-fi-nite",
        phonetic: "/ˈɪn.fə.nət/",
        definition: "Limitless, endless, or boundless in space, size, or time.",
        example: "The night sky seemed infinite with billions of twinkling stars.",
        emoji: "🌌"
      }
    ],
    quiz: [
      {
        question: "Which ringed planet did Zara observe through the historic telescope?",
        options: ["Mars", "Saturn", "Mercury", "Venus"],
        answerIndex: 1,
        explanation: "Zara saw the pale golden planet Saturn with its shimmering concentric rings."
      },
      {
        question: "What are Saturn's rings actually made of?",
        options: ["Solid steel", "Millions of icy moonlets, rocks, and stardust orbiting together", "Cotton candy", "Fire"],
        answerIndex: 1,
        explanation: "Saturn's rings are composed of millions of ice particles, rocks, and stardust."
      },
      {
        question: "Where was the observatory telescope located?",
        options: ["In a valley", "High atop Mount Wilson above the city smog", "On an island", "In a basement"],
        answerIndex: 1,
        explanation: "The observatory dome was located high atop Mount Wilson."
      }
    ],
    funPrompt: "If you could visit any planet in our solar system (safely in a spaceship!), would you visit Mars, Saturn, or Jupiter?"
  },
  {
    id: 59,
    day: 59,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Big Dreams",
    title: "Campfire Under the Northern Lights",
    coverEmoji: "🏕️",
    themeColor: "#00897B",
    category: "Wonder & Nature",
    readingTime: "5 mins",
    wordCount: 228,
    intro: "In the snowbound wilderness of Norway, the night sky ignites with dancing curtains of emerald fire.",
    paragraphs: [
      "Outside the cozy wooden camp cabin in Tromsø, Norway, the night was crisp, quiet, and thirty degrees below freezing.",
      "Astrid and her family sat bundled in wool parkas around a crackling birchwood campfire. A pot of spiced lingonberry cider bubbled over the embers.",
      "'Look up, Astrid,' her father whispered, pointing toward the northern horizon.",
      "A faint pale green ribbon appeared in the starry sky, waving gently like a silk curtain in a breeze.",
      "Then, within seconds, the phenomenon exploded into brilliant, breathtaking spectacle! Ribbons of emerald green, violet magenta, and electric blue undulated across the entire dome of the night sky.",
      "'The Aurora Borealis!' Astrid gasped, her face glowing green in the reflected celestial light.",
      "The lights twisted, twirled, and danced like celestial ballerinas across the stars.",
      "Dad explained: 'Solar winds from our Sun travel ninety-three million miles and collide with Earth's magnetic shield, creating a cosmic light show.'",
      "Astrid sipped her warm cider, mesmerized by the silent dance above. The universe was singing without making a single sound."
    ],
    vocabulary: [
      {
        word: "phenomenon",
        syllables: "phe-nom-e-non",
        phonetic: "/fəˈnɑː.mə.nɑːn/",
        definition: "A remarkable, extraordinary occurrence or event observed in nature.",
        example: "The solar eclipse was an unforgettable natural phenomenon.",
        emoji: "🌠"
      },
      {
        word: "mesmerized",
        syllables: "mes-mer-ized",
        phonetic: "/ˈmez.mə.raɪzd/",
        definition: "Holding the attention of someone completely as if by a magical spell.",
        example: "The audience sat mesmerized by the pianist's performance.",
        emoji: "🤩"
      },
      {
        word: "collide",
        syllables: "col-lide",
        phonetic: "/kəˈlaɪd/",
        definition: "To crash or bump together with force.",
        example: "Solar wind particles collide with atmospheric gases to create auroras.",
        emoji: "💥"
      }
    ],
    quiz: [
      {
        question: "What famous natural light show did Astrid see in Norway?",
        options: ["City streetlights", "The Aurora Borealis (Northern Lights)", "A laser show", "Fireworks"],
        answerIndex: 1,
        explanation: "Astrid watched the breathtaking Aurora Borealis dancing across the sky in Norway."
      },
      {
        question: "What colors danced across the night sky?",
        options: ["Only black", "Emerald green, violet magenta, and electric blue", "Brown and grey", "Only yellow"],
        answerIndex: 1,
        explanation: "Ribbons of emerald green, violet magenta, and electric blue lit up the sky."
      },
      {
        question: "What causes the Northern Lights?",
        options: ["Campfire smoke", "Solar winds colliding with Earth's magnetic shield", "Airplane lights", "Lightning"],
        answerIndex: 1,
        explanation: "Solar winds from the Sun collide with Earth's magnetic field and gases."
      }
    ],
    funPrompt: "Tomorrow is Day 60: The Grand Finale! What was your favorite story from the last 60 days of reading?"
  },
  {
    id: 60,
    day: 60,
    week: 8,
    level: "Champion",
    levelBadge: "Level 6 • Grand Master Reader!",
    title: "The Grand Master Reader Trophy",
    coverEmoji: "🏆",
    themeColor: "#FFD700",
    category: "Grand Milestone Celebration",
    readingTime: "5 mins",
    wordCount: 235,
    intro: "DAY 60! TWO WHOLE MONTHS! Stand tall, superstar—you have achieved greatness!",
    paragraphs: [
      "Sixty days ago, you opened this program for the very first time. You read about a little squirrel named Pip and a tiny golden acorn.",
      "Look how far you have journeyed since that first day!",
      "You have flown across Mexico on a flying taco, tasted warm cherry blossom onigiri in Tokyo, solved mysteries with Detective Mia, danced with penguins on Antarctic ice, harnessed the wind with William, and gazed at the rings of Saturn through giant telescopes.",
      "Reading in a second language is a mountain that many adults are afraid to climb. But you, an eight-year-old champion, climbed that mountain day by day, word by word, story by story.",
      "Because of your daily commitment, your English vocabulary is rich, your pronunciation is confident, and your mind is filled with wonderful knowledge.",
      "Today, you are awarded the Grand Master Reader Trophy.",
      "Keep this truth in your heart forever: A child who reads becomes an adult who thinks, creates, discovers, and leads.",
      "Never stop reading, never stop asking questions, and always believe in the boundless magic of your dreams!",
      "CONGRATULATIONS, READING GRAND MASTER! YOU ARE A TRUE SUPERSTAR!"
    ],
    vocabulary: [
      {
        word: "commitment",
        syllables: "com-mit-ment",
        phonetic: "/kəˈmɪt.mənt/",
        definition: "Dedication and willingness to give your time and energy to a goal.",
        example: "Her daily commitment to piano practice made her a wonderful musician.",
        emoji: "🎯"
      },
      {
        word: "boundless",
        syllables: "bound-less",
        phonetic: "/ˈbaʊnd.ləs/",
        definition: "Having no boundaries or limits; infinite and vast.",
        example: "Children have boundless imagination and energy.",
        emoji: "🌈"
      },
      {
        word: "master",
        syllables: "mas-ter",
        phonetic: "/ˈmæs.tɚ/",
        definition: "A person with great skill, knowledge, and excellence in an art or field.",
        example: "Through sixty days of reading, she became a master reader.",
        emoji: "👑"
      }
    ],
    quiz: [
      {
        question: "How many days of reading have you completed to reach Day 60?",
        options: ["10 days", "30 days", "60 full days of reading!", "1 day"],
        answerIndex: 2,
        explanation: "You completed 60 full days of reading! That is a monumental achievement!"
      },
      {
        question: "What makes learning a second language so special?",
        options: ["It is easy for everyone", "It builds confidence, vocabulary, and opens doors to world knowledge", "You get more sleep", "You don't have to talk"],
        answerIndex: 1,
        explanation: "Daily practice builds lasting confidence, strong vocabulary, and opens doors to books and cultures worldwide."
      },
      {
        question: "What does the story say a child who reads becomes?",
        options: ["A sleepy person", "An adult who thinks, creates, discovers, and leads", "A television watcher", "A quiet student"],
        answerIndex: 1,
        explanation: "A child who reads becomes an adult who thinks, creates, discovers, and leads!"
      }
    ],
    funPrompt: "Give yourself a huge hug and a high-five! Tell your parents or teacher: 'I finished 60 days of English reading! I am a Grand Master Reader!'"
  }
];

MONTH2_STORIES.forEach(story => {
  if (!STORIES_DATA.some(s => s.id === story.id)) {
    STORIES_DATA.push(story);
  }
});

// Helper for total count
if (typeof getTotalStoriesCount === 'function') {
  // already defined
} else {
  function getTotalStoriesCount() {
    return STORIES_DATA.length;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MONTH2_STORIES, STORIES_DATA };
}

// stories.js - Complete 30-Day Daily Reading Library for an 8-Year-Old ESL Learner
// Level progression:
// Week 1 (Days 1-7): Starter (80-120 words) - Animals, Everyday Fun, Simple Sentences
// Week 2 (Days 8-14): Growing (120-160 words) - Nature, Curiosity, Time Expressions
// Week 3 (Days 15-21): Confident (150-190 words) - Friendship, School Life, Feelings
// Week 4 (Days 22-30): Explorer (180-240 words) - Imagination, Mysteries, Big Dreams

if (typeof window !== 'undefined' && !window.STORIES_DATA) {
  window.STORIES_DATA = [];
}
var STORIES_DATA = (typeof window !== 'undefined' ? window.STORIES_DATA : (typeof STORIES_DATA !== 'undefined' ? STORIES_DATA : []));

const MONTH1_STORIES = [
  // ==========================================
  // WEEK 1: ANIMALS & EVERYDAY ADVENTURES
  // ==========================================
  {
    id: 1,
    day: 1,
    week: 1,
    level: "Starter",
    levelBadge: "Level 1 • Starter",
    title: "Pip the Squirrel's Big Acorn",
    coverEmoji: "🐿️",
    themeColor: "#FF8A65",
    category: "Animal Adventures",
    readingTime: "3 mins",
    wordCount: 104,
    intro: "Meet Pip! Pip is a tiny squirrel with a very big surprise in the tall oak tree.",
    paragraphs: [
      "Pip was a little brown squirrel with a fluffy tail. He lived in a tall green oak tree with his family.",
      "Every morning, Pip jumped from branch to branch. 'Swish, swish!' went his tail. Today, Pip looked down at the soft green grass.",
      "Under a big leaf, he saw something shiny. It was a giant golden acorn! It was bigger than Pip's two paws together.",
      "'Look at this acorn!' Pip chirped happily. His best friend, Benny the bird, flew down.",
      "'Let us roll it home together,' Benny sang. The two little friends rolled the acorn up the hill, giggling all the way."
    ],
    vocabulary: [
      {
        word: "fluffy",
        syllables: "fluf-fy",
        phonetic: "/ˈflʌf.i/",
        definition: "Soft, light, and full of fur or feathers.",
        example: "The kitten has fluffy white fur.",
        emoji: "☁️"
      },
      {
        word: "giant",
        syllables: "gi-ant",
        phonetic: "/ˈdʒaɪ.ənt/",
        definition: "Extremely big or huge.",
        example: "The giant pumpkin won first prize.",
        emoji: "🐘"
      },
      {
        word: "chirped",
        syllables: "chirped",
        phonetic: "/tʃɜːrpt/",
        definition: "Made a high, cheerful bird or squirrel sound.",
        example: "The robin chirped outside my window.",
        emoji: "🎶"
      }
    ],
    quiz: [
      {
        question: "Where does Pip live?",
        options: ["In a cold cave", "In a tall oak tree", "Inside a red barn", "Under a stone"],
        answerIndex: 1,
        explanation: "Pip lived in a tall green oak tree with his family!"
      },
      {
        question: "What did Pip find under the leaf?",
        options: ["A red apple", "A little toy", "A giant golden acorn", "A blue flower"],
        answerIndex: 2,
        explanation: "Pip found a giant golden acorn that was bigger than his two paws!"
      },
      {
        question: "Who helped Pip roll the acorn home?",
        options: ["Benny the bird", "A big brown bear", "His sister", "A friendly rabbit"],
        answerIndex: 0,
        explanation: "Benny the bird flew down and rolled the acorn together with Pip."
      }
    ],
    funPrompt: "Draw Pip's giant acorn on a piece of paper! What color will you color it?"
  },
  {
    id: 2,
    day: 2,
    week: 1,
    level: "Starter",
    levelBadge: "Level 1 • Starter",
    title: "Luna's Secret Treehouse",
    coverEmoji: "🏡",
    themeColor: "#81C784",
    category: "Secret Places",
    readingTime: "3 mins",
    wordCount: 110,
    intro: "Luna finds a wooden ladder in her garden. Where does it lead?",
    paragraphs: [
      "Luna loved warm sunny afternoons. Yesterday, she peeked behind the apple trees in her backyard.",
      "She noticed a hidden rope ladder hanging from a thick branch. Luna climbed up carefully: one, two, three steps!",
      "At the top was a cozy wooden treehouse. Sunlight danced through a small square window.",
      "Inside, there was a purple cushion, a small round table, and a box of colorful crayons.",
      "Luna sat on the cushion and opened her sketchbook. 'This is my secret reading castle,' she whispered with a bright smile. She felt like a queen."
    ],
    vocabulary: [
      {
        word: "peeked",
        syllables: "peeked",
        phonetic: "/piːkt/",
        definition: "Looked quickly or secretly at something.",
        example: "She peeked into the gift box.",
        emoji: "👀"
      },
      {
        word: "cozy",
        syllables: "co-zy",
        phonetic: "/ˈkoʊ.zi/",
        definition: "Warm, comfortable, and pleasant.",
        example: "My bed is warm and cozy on winter nights.",
        emoji: "🛏️"
      },
      {
        word: "cushion",
        syllables: "cush-ion",
        phonetic: "/ˈkʊʃ.ən/",
        definition: "A soft pillow used for sitting or resting on.",
        example: "She rested her head on a soft velvet cushion.",
        emoji: "🛋️"
      }
    ],
    quiz: [
      {
        question: "How did Luna climb into the treehouse?",
        options: ["Using stairs", "By jumping high", "Using a rope ladder", "An elevator"],
        answerIndex: 2,
        explanation: "Luna climbed up carefully using a hidden rope ladder!"
      },
      {
        question: "What was inside the treehouse?",
        options: ["A purple cushion and crayons", "A television", "A big scary dog", "Nothing at all"],
        answerIndex: 0,
        explanation: "There was a purple cushion, a round table, and a box of crayons."
      },
      {
        question: "What did Luna call her treehouse?",
        options: ["A tree nest", "Her secret reading castle", "The wooden box", "The cloud station"],
        answerIndex: 1,
        explanation: "Luna whispered, 'This is my secret reading castle!'"
      }
    ],
    funPrompt: "If you had a secret treehouse, what 3 things would you bring inside?"
  },
  {
    id: 3,
    day: 3,
    week: 1,
    level: "Starter",
    levelBadge: "Level 1 • Starter",
    title: "The Lost Puppy at the Park",
    coverEmoji: "🐶",
    themeColor: "#4FC3F7",
    category: "Kind Friends",
    readingTime: "3 mins",
    wordCount: 115,
    intro: "Emma hears a tiny 'woof' behind the park slide. Who could it be?",
    paragraphs: [
      "Emma was riding her shiny yellow scooter at the sunny park. Suddenly, she stopped.",
      "She heard a gentle sound behind the big red slide: 'Whimper... woof!'",
      "Emma tiptoed around the slide. A small white puppy with curly fur was sitting alone.",
      "The puppy shivered a little bit. He looked lost and hungry.",
      "Emma patted his head gently. 'Do not worry, little puppy,' Emma said warmly.",
      "On his shiny blue collar, Emma spotted a silver tag with a phone number.",
      "Emma ran to her mother. Her mother called the number. In five minutes, a happy boy came running to hug his puppy!"
    ],
    vocabulary: [
      {
        word: "whimper",
        syllables: "whim-per",
        phonetic: "/ˈwɪm.pər/",
        definition: "A low, quiet cry showing fear or sadness.",
        example: "The cold kitten gave a quiet whimper.",
        emoji: "🥺"
      },
      {
        word: "tiptoed",
        syllables: "tip-toed",
        phonetic: "/ˈtɪp.toʊd/",
        definition: "Walked quietly on the tips of the toes.",
        example: "He tiptoed into the kitchen so he would not wake baby.",
        emoji: "🩰"
      },
      {
        word: "collar",
        syllables: "col-lar",
        phonetic: "/ˈkɑː.lər/",
        definition: "A band of leather or cloth put around an animal's neck.",
        example: "The dog wore a red collar with a bell.",
        emoji: "🏷️"
      }
    ],
    quiz: [
      {
        question: "What was Emma riding in the park?",
        options: ["A red bicycle", "Her yellow scooter", "Roller skates", "A skateboard"],
        answerIndex: 1,
        explanation: "Emma was riding her shiny yellow scooter!"
      },
      {
        question: "Where was the lost puppy hiding?",
        options: ["In a trash can", "Under a bench", "Behind the big red slide", "Up in a tree"],
        answerIndex: 2,
        explanation: "Emma heard a sound behind the big red slide."
      },
      {
        question: "How did they find the puppy's owner?",
        options: ["They waited all night", "The puppy spoke", "There was a phone number on the collar tag", "They put up posters"],
        answerIndex: 2,
        explanation: "Emma spotted a silver tag with a phone number on the puppy's collar!"
      }
    ],
    funPrompt: "Tell a friend or parent: Have you ever seen a cute puppy? What did it look like?"
  },
  {
    id: 4,
    day: 4,
    week: 1,
    level: "Starter",
    levelBadge: "Level 1 • Starter",
    title: "Maya Makes a Rainbow Pancake",
    coverEmoji: "🥞",
    themeColor: "#FFB74D",
    category: "Kitchen Fun",
    readingTime: "3 mins",
    wordCount: 118,
    intro: "It is Sunday morning! Maya and Dad are making a pancake like no other.",
    paragraphs: [
      "Sunday morning smelled delicious in Maya's kitchen. Dad wore a funny chef's hat with stars.",
      "'Are you ready to create a masterpiece?' Dad asked with a wink.",
      "Maya nodded enthusiastically. She poured flour, fresh milk, and one brown egg into a big blue bowl.",
      "Then came the magic step! Dad divided the batter into four small bowls. Maya added natural juice drops: strawberry red, blueberry blue, mango yellow, and spinach green.",
      "Dad swirled the colorful batter in the warm pan. Soon, a golden pancake with bright rainbow rings appeared!",
      "Maya topped it with sweet honey. 'This is the most beautiful breakfast ever!' she cheered."
    ],
    vocabulary: [
      {
        word: "masterpiece",
        syllables: "mas-ter-piece",
        phonetic: "/ˈmæs.tɚ.piːs/",
        definition: "An outstanding and beautiful piece of work.",
        example: "The painting she made was a true masterpiece.",
        emoji: "🎨"
      },
      {
        word: "batter",
        syllables: "bat-ter",
        phonetic: "/ˈbæt̬.ɚ/",
        definition: "A mixture of flour, eggs, and milk used in cooking.",
        example: "Pour the pancake batter onto the warm griddle.",
        emoji: "🥣"
      },
      {
        word: "swirled",
        syllables: "swirled",
        phonetic: "/swɜːrld/",
        definition: "Moved around quickly in a circular motion.",
        example: "The wind swirled the dry autumn leaves.",
        emoji: "🌀"
      }
    ],
    quiz: [
      {
        question: "What funny thing was Dad wearing?",
        options: ["Sunglasses", "A chef's hat with stars", "A superhero cape", "Yellow boots"],
        answerIndex: 1,
        explanation: "Dad wore a funny chef's hat with stars!"
      },
      {
        question: "How did Maya make the batter colorful?",
        options: ["With colored crayons", "With natural juice drops", "With candy wrappers", "With paint"],
        answerIndex: 1,
        explanation: "Maya added natural juice drops like strawberry red, mango yellow, and spinach green."
      },
      {
        question: "What did Maya put on top of the pancake?",
        options: ["Spicy pepper", "Ice cream", "Sweet honey", "Mustard"],
        answerIndex: 2,
        explanation: "Maya topped her rainbow pancake with sweet honey."
      }
    ],
    funPrompt: "What is your favorite breakfast food? How does it taste: sweet, salty, or warm?"
  },
  {
    id: 5,
    day: 5,
    week: 1,
    level: "Starter",
    levelBadge: "Level 1 • Starter",
    title: "Barnaby: The Cat Who Loved to Sing",
    coverEmoji: "🐱",
    themeColor: "#BA68C8",
    category: "Funny Animals",
    readingTime: "3 mins",
    wordCount: 114,
    intro: "Most cats meow softly, but Barnaby has musical dreams!",
    paragraphs: [
      "Barnaby was a chubby ginger cat with green eyes and white socks on his paws.",
      "Most cats purr softly when they are happy. But Barnaby was different. Barnaby wanted to sing opera!",
      "Whenever the radio played classical music, Barnaby sat straight up. He took a deep breath, opened his mouth wide, and sang: 'Meee-aaaooow-la-la-la!'",
      "Neighbors looked out their windows and smiled. Birds on the fence tilted their heads in surprise.",
      "One afternoon, the school choir sang in the park. Barnaby hopped onto the wooden stage and joined in on the final note.",
      "Everyone clapped loudly. Barnaby bowed like a real superstar."
    ],
    vocabulary: [
      {
        word: "chubby",
        syllables: "chub-by",
        phonetic: "/ˈtʃʌb.i/",
        definition: "Pleasantly plump, round, and slightly fat.",
        example: "The baby had chubby rosy cheeks.",
        emoji: "🧸"
      },
      {
        word: "tilted",
        syllables: "til-ted",
        phonetic: "/ˈtɪl.tɪd/",
        definition: "Slanted or leaned to one side.",
        example: "The dog tilted his head when he heard the bell.",
        emoji: "📐"
      },
      {
        word: "choir",
        syllables: "choir",
        phonetic: "/kwaɪ.ɚ/",
        definition: "An organized group of singers who perform together.",
        example: "The school choir sang lovely holiday songs.",
        emoji: "🎤"
      }
    ],
    quiz: [
      {
        question: "What color was Barnaby the cat?",
        options: ["Jet black", "Chubby ginger with white socks", "Pure white", "Spotted grey"],
        answerIndex: 1,
        explanation: "Barnaby was a chubby ginger cat with white socks on his paws."
      },
      {
        question: "What did Barnaby love to do?",
        options: ["Chase mice", "Sing opera music", "Climb curtains", "Sleep under the bed"],
        answerIndex: 1,
        explanation: "Barnaby wanted to sing opera and sang 'Meee-aaaooow-la-la-la!'"
      },
      {
        question: "Where did Barnaby jump during the school choir performance?",
        options: ["Into a tree", "Onto the wooden stage", "Under the car", "Into the lake"],
        answerIndex: 1,
        explanation: "Barnaby hopped onto the wooden stage and joined in on the final note!"
      }
    ],
    funPrompt: "Can you make a singing cat sound? Try saying 'Meee-aaaooow' like Barnaby!"
  },
  {
    id: 6,
    day: 6,
    week: 1,
    level: "Starter",
    levelBadge: "Level 1 • Starter",
    title: "The Whispering Seashell",
    coverEmoji: "🐚",
    themeColor: "#4DB6AC",
    category: "Ocean Wonder",
    readingTime: "3 mins",
    wordCount: 122,
    intro: "Chloe finds a spiral pink seashell on the sandy beach. Listen closely!",
    paragraphs: [
      "The salty sea breeze blew Chloe's dark hair as she walked along the ocean shore.",
      "The tide was gentle today. Small white foamy waves tickled her bare feet.",
      "Right near a cluster of seaweed, Chloe spotted a shiny pink spiral shell. It looked like a tiny twisted castle.",
      "Her grandfather walked over with a gentle smile. 'Hold it to your ear, Chloe,' he whispered.",
      "Chloe lifted the cool shell to her left ear. 'Whooosh... whooosh...' A soft roaring sound echoed inside!",
      "'Is the ocean trapped in here?' Chloe asked with wide eyes.",
      "Grandpa chuckled. 'The shell catches the quiet sounds around you and makes them sound like the deep sea. It carries the song of the waves.'"
    ],
    vocabulary: [
      {
        word: "spiral",
        syllables: "spi-ral",
        phonetic: "/ˈspaɪ.rəl/",
        definition: "Winding around in curves like a coil or spring.",
        example: "The snail shell has a beautiful spiral pattern.",
        emoji: "🌀"
      },
      {
        word: "echoed",
        syllables: "ech-oed",
        phonetic: "/ˈek.oʊd/",
        definition: "A sound that bounced back and repeated.",
        example: "Her voice echoed in the big empty gymnasium.",
        emoji: "📢"
      },
      {
        word: "chuckle",
        syllables: "chuc-kle",
        phonetic: "/ˈtʃʌk.əl/",
        definition: "To laugh quietly with amusement.",
        example: "Dad chuckled at the funny comic strip.",
        emoji: "😄"
      }
    ],
    quiz: [
      {
        question: "What color was the spiral shell Chloe found?",
        options: ["Bright green", "Shiny pink", "Dark brown", "Yellow"],
        answerIndex: 1,
        explanation: "Chloe spotted a shiny pink spiral shell near the seaweed."
      },
      {
        question: "What sound did Chloe hear when she held the shell to her ear?",
        options: ["Loud barking", "A soft whooshing ocean sound", "A whistle", "Silence"],
        answerIndex: 1,
        explanation: "She heard a soft 'whooosh... whooosh...' like ocean waves."
      },
      {
        question: "Who was with Chloe at the beach?",
        options: ["Her teacher", "Her grandfather", "Her friend Benny", "Her brother"],
        answerIndex: 1,
        explanation: "Her grandfather walked over with a gentle smile."
      }
    ],
    funPrompt: "Have you ever been to the beach or seen a seashell? How did the sand feel on your feet?"
  },
  {
    id: 7,
    day: 7,
    week: 1,
    level: "Starter",
    levelBadge: "Level 1 • Week 1 Review",
    title: "The Busy Bee's Saturday Rhyme",
    coverEmoji: "🐝",
    themeColor: "#FDD835",
    category: "Fun Poem & Rhyme",
    readingTime: "3 mins",
    wordCount: 112,
    intro: "It is Day 7! Let's celebrate Week 1 with a bouncy, rhyming poem about Bumble the bee.",
    paragraphs: [
      "Little bee Bumble in yellow and black,\nWears a tiny pollen basket on his back!\nFlying over daisies, flying over roses,\nTickling flower petals right on their noses.",
      "'Buzz, buzz, buzz!' says the happy little bee,\n'Sweet nectar is the best thing for me!\nI sip from the tulip, I drink from the clover,\nI fly round the garden over and over.'",
      "When the bright sun sinks low in the west,\nBumble flies home to his honeycomb nest.\nHe rests his golden wings and sleeps through the night,\nDreaming of honey until morning light!",
      "Congratulations! You completed all 7 days of Week 1! You are an amazing reader."
    ],
    vocabulary: [
      {
        word: "pollen",
        syllables: "pol-len",
        phonetic: "/ˈpɑː.lən/",
        definition: "Fine yellow powder produced by flowers.",
        example: "The bee was covered in bright yellow pollen.",
        emoji: "🌼"
      },
      {
        word: "nectar",
        syllables: "nec-tar",
        phonetic: "/ˈnek.tɚ/",
        definition: "A sweet liquid produced by flowers that bees collect.",
        example: "Hummingbirds and butterflies love sweet flower nectar.",
        emoji: "🍯"
      },
      {
        word: "honeycomb",
        syllables: "hon-ey-comb",
        phonetic: "/ˈhʌn.i.koʊm/",
        definition: "A wax structure made of six-sided cells where bees store honey.",
        example: "The beehive was filled with golden honeycomb.",
        emoji: "🐝"
      }
    ],
    quiz: [
      {
        question: "What colors are Bumble the bee?",
        options: ["Blue and white", "Yellow and black", "Green and pink", "Red and purple"],
        answerIndex: 1,
        explanation: "The poem says: 'Little bee Bumble in yellow and black!'"
      },
      {
        question: "What does Bumble collect from flowers?",
        options: ["Leaves", "Pollen and sweet nectar", "Soil", "Stones"],
        answerIndex: 1,
        explanation: "Bumble carries pollen in his basket and drinks sweet nectar."
      },
      {
        question: "Where does Bumble sleep at night?",
        options: ["In an old shoe", "In his honeycomb nest", "Under the grass", "On a cloud"],
        answerIndex: 1,
        explanation: "He flies home to his honeycomb nest to sleep through the night."
      }
    ],
    funPrompt: "Read this poem out loud with your best singing bee voice: 'Buzz, buzz, buzz!' Practice clapping on the rhymes: back/black, roses/noses!"
  },

  // ==========================================
  // WEEK 2: NATURE, SEASONS & CURIOSITY
  // ==========================================
  {
    id: 8,
    day: 8,
    week: 2,
    level: "Growing",
    levelBadge: "Level 2 • Growing",
    title: "The Seed That Wanted to Touch the Sky",
    coverEmoji: "🌱",
    themeColor: "#66BB6A",
    category: "Nature Science",
    readingTime: "4 mins",
    wordCount: 135,
    intro: "Deep under the warm dark soil, a tiny sunflower seed has a brave dream.",
    paragraphs: [
      "Sammy was a tiny black seed tucked into the cool brown dirt. It was pitch black down there, but Sammy was not frightened.",
      "Every morning, gentle drops of rain seeped through the ground. 'Drink up, little seed,' whispered the rain.",
      "Sammy drank the fresh water. Soon, something extraordinary happened. A tiny pale root pushed downward to anchor him. Then, a bright green shoot pushed upward!",
      "'Push, push, push!' Sammy cheered to himself. He squeezed through the soil until suddenly—POP!",
      "Blinding golden sunlight bathed his two tiny green leaves. Fresh air greeted him. He looked up at the vast blue sky.",
      "'One day,' Sammy promised, 'I will grow into a towering yellow sunflower and wave at the clouds!'"
    ],
    vocabulary: [
      {
        word: "frightened",
        syllables: "fright-ened",
        phonetic: "/ˈfraɪ.tənd/",
        definition: "Afraid or scared of something.",
        example: "The puppy was frightened by the loud thunder.",
        emoji: "😨"
      },
      {
        word: "extraordinary",
        syllables: "ex-traor-di-nar-y",
        phonetic: "/ɪkˈstrɔːr.dən.er.i/",
        definition: "Very unusual, special, or remarkable.",
        example: "The magician did an extraordinary card trick.",
        emoji: "✨"
      },
      {
        word: "towering",
        syllables: "tow-er-ing",
        phonetic: "/ˈtaʊ.ɚ.ɪŋ/",
        definition: "Very tall, reaching high into the air like a tower.",
        example: "The towering redwood trees touched the sky.",
        emoji: "🌲"
      }
    ],
    quiz: [
      {
        question: "What helped Sammy the seed start growing?",
        options: ["Snowballs", "Raindrops and fresh water", "Hot soup", "Juice"],
        answerIndex: 1,
        explanation: "Gentle drops of rain seeped through the soil and Sammy drank the fresh water."
      },
      {
        question: "What popped out of the ground first?",
        options: ["A red flower", "A bright green shoot with two leaves", "A big pumpkin", "An apple"],
        answerIndex: 1,
        explanation: "A bright green shoot squeezed through the soil into the sunlight."
      },
      {
        question: "What kind of flower did Sammy want to become?",
        options: ["A purple tulip", "A towering yellow sunflower", "A white daisy", "A cactus"],
        answerIndex: 1,
        explanation: "Sammy promised to grow into a towering yellow sunflower."
      }
    ],
    funPrompt: "What do plants need to grow big and healthy? Name three things: (Hint: W_ _ _ _, S_ _ _ _ _ _ _, S_ _ _)."
  },
  {
    id: 9,
    day: 9,
    week: 2,
    level: "Growing",
    levelBadge: "Level 2 • Growing",
    title: "The Rainy Day Treasure Hunt",
    coverEmoji: "🌧️",
    themeColor: "#5C6BC0",
    category: "Family Fun",
    readingTime: "4 mins",
    wordCount: 140,
    intro: "It is pouring rain outside! Can Lily and her brother turn a boring day into an adventure?",
    paragraphs: [
      "Raindrops drummed against the windowpane: 'Pitter-patter, pitter-patter.' Lily sighed. 'We cannot go to the playground today.'",
      "Her older brother Noah smiled mysteriously. He pulled a rolled paper tied with red yarn from behind his back.",
      "'Who needs the playground when we have a pirate treasure map?' Noah announced.",
      "Lily's eyes sparkled. The first clue read: 'I am cold inside and keep milk sweet. Look behind the veggie treat!'",
      "Lily zoomed to the refrigerator. Behind the green broccoli was clue number two! It led to the bookshelf, then under the living room rug.",
      "The final clue pointed inside the laundry basket. There, wrapped in shiny foil, were two homemade chocolate chip cookies!",
      "'This is the best rainy day ever,' Lily laughed, taking a crunchy bite."
    ],
    vocabulary: [
      {
        word: "mysteriously",
        syllables: "mys-te-ri-ous-ly",
        phonetic: "/mɪˈstɪr.i.əs.li/",
        definition: "In a secret or puzzling way that makes people curious.",
        example: "The magician smiled mysteriously before revealing the card.",
        emoji: "🕵️"
      },
      {
        word: "announced",
        syllables: "an-nounced",
        phonetic: "/əˈnaʊnst/",
        definition: "Told people something officially and loudly.",
        example: "The teacher announced that recess was starting.",
        emoji: "📣"
      },
      {
        word: "refrigerator",
        syllables: "re-frig-er-a-tor",
        phonetic: "/rɪˈfrɪdʒ.ə.reɪ.t̬ɚ/",
        definition: "An electric box or cabinet that keeps food cold and fresh.",
        example: "Put the milk and butter in the refrigerator.",
        emoji: "🧊"
      }
    ],
    quiz: [
      {
        question: "Why couldn't Lily go to the playground?",
        options: ["It was too dark", "It was raining outside", "She lost her shoes", "The playground was closed"],
        answerIndex: 1,
        explanation: "Raindrops drummed against the windowpane and it was pouring outside."
      },
      {
        question: "What did Noah make to cheer Lily up?",
        options: ["A pirate treasure map", "A toy robot", "A snowman", "A kite"],
        answerIndex: 0,
        explanation: "Noah pulled out a rolled paper map tied with red yarn."
      },
      {
        question: "What was the treasure hidden in the laundry basket?",
        options: ["Two clean towels", "A golden coin", "Two homemade chocolate chip cookies", "A storybook"],
        answerIndex: 2,
        explanation: "There were two homemade chocolate chip cookies wrapped in shiny foil!"
      }
    ],
    funPrompt: "If you made a treasure hunt in your home, where would you hide your secret treasure?"
  },
  {
    id: 10,
    day: 10,
    week: 2,
    level: "Growing",
    levelBadge: "Level 2 • Growing",
    title: "Oliver the Owl Who Liked the Sun",
    coverEmoji: "🦉",
    themeColor: "#AB47BC",
    category: "Curious Animals",
    readingTime: "4 mins",
    wordCount: 142,
    intro: "Owls are supposed to sleep during the day. But Oliver is far too curious to sleep!",
    paragraphs: [
      "Oliver was a young barn owl with round amber eyes and speckled grey feathers.",
      "Every owl in the forest knows the rule: owls sleep all day and hunt by the silver moonlight.",
      "However, Oliver had a burning curiosity. 'What does the forest look like when the sun is up?' he wondered.",
      "One bright morning, Oliver put on a pair of sunglasses made from dark oak leaves. He poked his beak out of the hollow tree trunk.",
      "What a spectacle! The forest was not dark at all. Golden beams of light shone through the canopy. Red butterflies danced over purple blossoms.",
      "A red squirrel chattered, and baby deer pranced near the brook.",
      "'The daylight world is marvelous!' Oliver cooed. That evening, he told all the sleepy owls magical stories about sunshine."
    ],
    vocabulary: [
      {
        word: "curiosity",
        syllables: "cu-ri-os-i-ty",
        phonetic: "/ˌkjʊr.iˈɑː.sə.t̬i/",
        definition: "A strong desire to know or learn something new.",
        example: "The kitten's curiosity made her explore the cardboard box.",
        emoji: "🔍"
      },
      {
        word: "spectacle",
        syllables: "spec-ta-cle",
        phonetic: "/ˈspek.tə.kəl/",
        definition: "A wonderful or visually exciting sight.",
        example: "The fireworks in the night sky were a grand spectacle.",
        emoji: "🎆"
      },
      {
        word: "marvelous",
        syllables: "mar-vel-ous",
        phonetic: "/ˈmɑːr.vəl.əs/",
        definition: "Extremely good, wonderful, and pleasing.",
        example: "We had a marvelous picnic in the sunshine.",
        emoji: "🌟"
      }
    ],
    quiz: [
      {
        question: "What do most owls normally do during the day?",
        options: ["Sing loud songs", "Fly to the city", "Sleep", "Swim in the river"],
        answerIndex: 2,
        explanation: "Owls normally sleep all day and hunt at night."
      },
      {
        question: "What did Oliver use as sunglasses?",
        options: ["Plastic glasses", "Dark oak leaves", "Water drops", "Black paper"],
        answerIndex: 1,
        explanation: "Oliver made sunglasses from dark oak leaves to protect his eyes from the bright sun."
      },
      {
        question: "What did Oliver see in the daytime forest?",
        options: ["Only darkness and snow", "Red butterflies and baby deer", "Cars and trucks", "A spaceship"],
        answerIndex: 1,
        explanation: "He saw golden beams of light, red butterflies, and baby deer prancing by the brook."
      }
    ],
    funPrompt: "Tell a family member: Are you a 'night owl' who stays up late, or an 'early bird' who wakes up early?"
  },
  {
    id: 11,
    day: 11,
    week: 2,
    level: "Growing",
    levelBadge: "Level 2 • Growing",
    title: "The Colorful Autumn Leaf",
    coverEmoji: "🍁",
    themeColor: "#E64A19",
    category: "Seasons & Colors",
    readingTime: "4 mins",
    wordCount: 145,
    intro: "Autumn arrives in the maple forest. Watch Amber the leaf change her coat!",
    paragraphs: [
      "Amber spent the warm summer as a lively green leaf high upon an old maple branch. She shaded birds and whispered in the summer breeze.",
      "When October arrived, the morning air turned crisp and cool. The sun rose a little later each day.",
      "One crisp Tuesday, Amber looked at her green dress. It had transformed into fiery orange and deep crimson red!",
      "'Look at me!' Amber rustled happily to her leaf neighbors. The entire maple tree had become a crown of gold, scarlet, and ruby.",
      "A playful autumn gust swept through the branches. 'It is time for your flight!' the wind sang.",
      "Amber let go of her twig. She twirled like a ballerina in the brisk air, floating gently downward until she landed softly on the green moss."
    ],
    vocabulary: [
      {
        word: "crimson",
        syllables: "crim-son",
        phonetic: "/ˈkrɪm.zən/",
        definition: "A rich, deep red color with a little purple.",
        example: "The ripe strawberries turned brilliant crimson in the sun.",
        emoji: "🔴"
      },
      {
        word: "transformed",
        syllables: "trans-formed",
        phonetic: "/trænˈsfɔːrmd/",
        definition: "Changed completely in appearance or form.",
        example: "The caterpillar transformed into a gorgeous butterfly.",
        emoji: "🦋"
      },
      {
        word: "twirled",
        syllables: "twirled",
        phonetic: "/twɜːrld/",
        definition: "Spun around quickly and lightly.",
        example: "The dancer twirled across the shiny wooden floor.",
        emoji: "💃"
      }
    ],
    quiz: [
      {
        question: "What color was Amber the leaf during the summer?",
        options: ["Bright blue", "Lively green", "Snow white", "Dark purple"],
        answerIndex: 1,
        explanation: "Amber spent the warm summer as a lively green leaf."
      },
      {
        question: "What colors did the maple tree turn in autumn?",
        options: ["Gold, scarlet, and ruby", "Black and grey", "Only brown", "Blue and silver"],
        answerIndex: 0,
        explanation: "The entire tree became a crown of gold, scarlet, and ruby!"
      },
      {
        question: "How did Amber move when she fell from the tree?",
        options: ["She dropped like a stone", "She twirled like a ballerina", "She jumped backward", "She zoomed like an airplane"],
        answerIndex: 1,
        explanation: "Amber let go and twirled like a ballerina in the brisk air."
      }
    ],
    funPrompt: "What are the four seasons? Can you say their names in English: Spring, Summer, Autumn (Fall), and Winter?"
  },
  {
    id: 12,
    day: 12,
    week: 2,
    level: "Growing",
    levelBadge: "Level 2 • Growing",
    title: "A Blanket of Snow",
    coverEmoji: "❄️",
    themeColor: "#29B6F6",
    category: "Winter Wonder",
    readingTime: "4 mins",
    wordCount: 148,
    intro: "Zoe wakes up to total silence. What made the whole world turn sparkling white?",
    paragraphs: [
      "When Zoe opened her eyes on Saturday morning, the bedroom was filled with an unusual, gentle white glow.",
      "She pushed back her warm quilt and hurried to the frosty window. 'Mom, Dad! Look!' she gasped in delight.",
      "During the night, silent snowflakes had drifted down continuously from grey clouds. Now, a thick blanket of pristine white snow covered the street, roofs, and bushes.",
      "After finishing hot oatmeal, Zoe bundled up. She put on thermal socks, snow boots, a puffy pink parka, and wool mittens.",
      "Outside, her boots made satisfying crunches: 'Crunch! Crunch!' She rolled three giant snowballs: big, medium, and small.",
      "With a carrot nose, two charcoal button eyes, and a red scarf, her friendly snowman was ready to greet the winter morning."
    ],
    vocabulary: [
      {
        word: "pristine",
        syllables: "pris-tine",
        phonetic: "/ˈprɪs.tiːn/",
        definition: "Pure, fresh, clean, and untouched.",
        example: "The freshly fallen snow lay pristine upon the meadow.",
        emoji: "✨"
      },
      {
        word: "bundled",
        syllables: "bun-dled",
        phonetic: "/ˈbʌn.dəld/",
        definition: "Dressed warmly in many layers of clothes.",
        example: "The children bundled up in coats and scarves before playing outside.",
        emoji: "🧣"
      },
      {
        word: "satisfying",
        syllables: "sat-is-fy-ing",
        phonetic: "/ˈsæt̬.əs.faɪ.ɪŋ/",
        definition: "Giving a feeling of happiness or fulfillment.",
        example: "Eating a warm cup of cocoa after playing in the snow is very satisfying.",
        emoji: "☕"
      }
    ],
    quiz: [
      {
        question: "Why was Zoe's bedroom so unusually bright?",
        options: ["A lamp was left on", "White snow outside reflected gentle light", "Fireworks", "A flashlight"],
        answerIndex: 1,
        explanation: "Pristine white snow had fallen all night and reflected a gentle white glow."
      },
      {
        question: "What sound did Zoe's boots make in the snow?",
        options: ["Splash!", "Crunch! Crunch!", "Beep! Beep!", "Tick-tock"],
        answerIndex: 1,
        explanation: "Her boots made satisfying crunches: 'Crunch! Crunch!'"
      },
      {
        question: "What did Zoe use for the snowman's nose?",
        options: ["An orange carrot", "A round stone", "A pinecone", "A crayon"],
        answerIndex: 0,
        explanation: "She gave her snowman an orange carrot nose and two charcoal eyes."
      }
    ],
    funPrompt: "If you built a snowman, what clothes or funny hats would you give him or her?"
  },
  {
    id: 13,
    day: 13,
    week: 2,
    level: "Growing",
    levelBadge: "Level 2 • Growing",
    title: "The Firefly Lantern",
    coverEmoji: "✨",
    themeColor: "#26A69A",
    category: "Summer Nights",
    readingTime: "4 mins",
    wordCount: 150,
    intro: "On a warm summer evening, glowing yellow sparks float in Grandma's garden.",
    paragraphs: [
      "Dusk fell softly over Grandma's flower garden. The sky shifted from lavender to deep indigo velvet.",
      "Hannah sat on the porch wooden steps drinking cold lemonade. Suddenly, a tiny neon-green dot flashed in the air. Then another, and another!",
      "'The fireflies have arrived,' Grandma said softly, handing Hannah a clear glass jar with small breathing holes poked into the lid.",
      "Hannah tiptoed across the soft grass. She cupped her hands gently around a glowing bug and let it walk into the jar.",
      "Soon, seven fireflies were blinking inside like miniature green stars. The jar illuminated Hannah's face with a fairy-like glow.",
      "Hannah admired them for ten minutes. Then, she unscrewed the lid. 'Fly free, little lanterns,' she whispered.",
      "The fireflies spiraled up toward the starry night, blinking a silent thank you."
    ],
    vocabulary: [
      {
        word: "dusk",
        syllables: "dusk",
        phonetic: "/dʌsk/",
        definition: "The time of day just before night, when daylight is fading.",
        example: "Streetlights turn on automatically at dusk.",
        emoji: "🌆"
      },
      {
        word: "miniature",
        syllables: "min-i-a-ture",
        phonetic: "/ˈmɪn.i.ə.tʃɚ/",
        definition: "Very small, much smaller than normal size.",
        example: "She collected miniature teacups for her dollhouse.",
        emoji: "🔬"
      },
      {
        word: "illuminated",
        syllables: "il-lu-mi-nat-ed",
        phonetic: "/ɪˈluː.mə.neɪ.t̬ɪd/",
        definition: "Lit up with bright light.",
        example: "The candle illuminated the cozy dark room.",
        emoji: "💡"
      }
    ],
    quiz: [
      {
        question: "What time of day does this story take place?",
        options: ["Early morning at sunrise", "At noon during lunch", "At dusk as night arrives", "Midnight"],
        answerIndex: 2,
        explanation: "The story begins: 'Dusk fell softly over Grandma's flower garden.'"
      },
      {
        question: "Why did the jar have small holes in the lid?",
        options: ["So water could enter", "So the fireflies could breathe fresh air", "To look pretty", "To let noise in"],
        answerIndex: 1,
        explanation: "The glass jar had breathing holes poked into the lid so the bugs could breathe."
      },
      {
        question: "What did Hannah do after admiring the fireflies?",
        options: ["She took them home forever", "She gave them to a friend", "She opened the lid and let them fly free", "She painted the jar"],
        answerIndex: 2,
        explanation: "Hannah kindly opened the lid and said, 'Fly free, little lanterns.'"
      }
    ],
    funPrompt: "Fireflies make their own light! If humans could glow in the dark, what color light would you want to shine?"
  },
  {
    id: 14,
    day: 14,
    week: 2,
    level: "Growing",
    levelBadge: "Level 2 • Week 2 Review",
    title: "Four Seasons Song",
    coverEmoji: "🌈",
    themeColor: "#FFA726",
    category: "Fun Poem & Rhyme",
    readingTime: "4 mins",
    wordCount: 140,
    intro: "Two weeks completed! Sing along with this cheerful rhythm through all four seasons.",
    paragraphs: [
      "In Spring the world wakes up to sing,\nGreen sprouts and swallows on the wing!\nPink tulips bloom, the gentle showers\nWash every garden into flowers.",
      "In Summer comes the golden sun,\nSplashing in rivers, full of fun!\nCold watermelon, ice cream treats,\nAnd dancing shoes on sunny streets.",
      "In Autumn leaves of gold and red\nMake crispy carpets where we tread!\nApples are harvested and sweet,\nWith cozy sweaters for the street.",
      "In Winter frosty snowflakes fall,\nA sparkling blanket over all!\nHot chocolate in a steaming cup,\nUntil the Springtime wakes us up!",
      "Superstar reader! You have finished 14 days of reading every single day!"
    ],
    vocabulary: [
      {
        word: "harvested",
        syllables: "har-vest-ed",
        phonetic: "/ˈhɑːr.və.stɪd/",
        definition: "Gathered or picked ripe crops and fruits from the field.",
        example: "The farmer harvested sweet red apples in autumn.",
        emoji: "🍎"
      },
      {
        word: "tread",
        syllables: "tread",
        phonetic: "/tred/",
        definition: "To walk, step, or stomp on something.",
        example: "Be careful where you tread in muddy gardens.",
        emoji: "👞"
      },
      {
        word: "steaming",
        syllables: "steam-ing",
        phonetic: "/ˈstiː.mɪŋ/",
        definition: "Giving off hot mist or vapor.",
        example: "A steaming bowl of vegetable soup warms you up.",
        emoji: "🍲"
      }
    ],
    quiz: [
      {
        question: "Which season brings green sprouts and pink tulips?",
        options: ["Winter", "Spring", "Autumn", "Summer"],
        answerIndex: 1,
        explanation: "Spring wakes up the world with pink tulips and gentle showers."
      },
      {
        question: "What treats are mentioned for Summer?",
        options: ["Hot soup", "Cold watermelon and ice cream", "Pumpkin pie", "Oatmeal"],
        answerIndex: 1,
        explanation: "The poem says: 'Cold watermelon, ice cream treats, and dancing shoes on sunny streets.'"
      },
      {
        question: "What kind of carpets do autumn leaves make?",
        options: ["Slippery mud", "Crispy carpets where we tread", "Soft wool", "Plastic"],
        answerIndex: 1,
        explanation: "Autumn leaves of gold and red make 'crispy carpets where we tread.'"
      }
    ],
    funPrompt: "Which season is your favorite: Spring, Summer, Autumn, or Winter? Tell why using the word 'because'!"
  },

  // ==========================================
  // WEEK 3: FRIENDSHIP, KINDNESS & SCHOOL LIFE
  // ==========================================
  {
    id: 15,
    day: 15,
    week: 3,
    level: "Confident",
    levelBadge: "Level 3 • Confident",
    title: "The Bright Yellow Rain Boots",
    coverEmoji: "👢",
    themeColor: "#FFCA28",
    category: "Making Friends",
    readingTime: "5 mins",
    wordCount: 165,
    intro: "A new student named Maria joins the third grade classroom. Who will welcome her?",
    paragraphs: [
      "On Monday morning, Mrs. Gable welcomed a new student to classroom 3B. 'Class, this is Maria. Her family recently moved here from Spain.'",
      "Maria wore bright sunflower-yellow rubber boots and a shy smile. She clasped her hands nervously in front of her desk.",
      "At recess, children sprinted across the school yard to play dodgeball. Maria stood quietly under the maple tree, watching them.",
      "Chloe noticed Maria standing alone. She remembered how scared she felt on her own first day of school last year.",
      "Chloe picked up her red jump rope and walked over. 'Hi Maria! I really love your yellow boots,' Chloe said warmly. 'Would you like to turn the jump rope with me?'",
      "Maria's eyes lit up with relief. 'Yes, please!' she replied with an enthusiastic grin.",
      "By lunchtime, Chloe and Maria were sharing apple slices and laughing like they had been friends forever."
    ],
    vocabulary: [
      {
        word: "recently",
        syllables: "re-cent-ly",
        phonetic: "/ˈriː.sənt.li/",
        definition: "Not long ago; happening in the near past.",
        example: "We recently adopted a playful black cat.",
        emoji: "⏱️"
      },
      {
        word: "nervously",
        syllables: "ner-vous-ly",
        phonetic: "/ˈnɝː.vəs.li/",
        definition: "In an anxious, worried, or uneasy manner.",
        example: "He waited nervously for his piano recital to begin.",
        emoji: "😬"
      },
      {
        word: "relief",
        syllables: "re-lief",
        phonetic: "/rɪˈliːf/",
        definition: "A pleasant feeling when worry or fear goes away.",
        example: "She sighed with relief when she found her lost backpack.",
        emoji: "😌"
      }
    ],
    quiz: [
      {
        question: "Where did Maria's family recently move from?",
        options: ["Canada", "Spain", "Japan", "Brazil"],
        answerIndex: 1,
        explanation: "Mrs. Gable introduced Maria, saying her family recently moved from Spain."
      },
      {
        question: "What color boots was Maria wearing?",
        options: ["Sunflower-yellow", "Ruby red", "Navy blue", "Purple"],
        answerIndex: 0,
        explanation: "Maria wore bright sunflower-yellow rubber boots."
      },
      {
        question: "What game did Chloe invite Maria to play?",
        options: ["Video games", "Jump rope", "Chess", "Basketball"],
        answerIndex: 1,
        explanation: "Chloe picked up her jump rope and invited Maria to turn the rope together."
      }
    ],
    funPrompt: "What is a kind thing you can say to someone who is new or feeling shy?"
  },
  {
    id: 16,
    day: 16,
    week: 3,
    level: "Confident",
    levelBadge: "Level 3 • Confident",
    title: "The Broken Crayon Miracle",
    coverEmoji: "🖍️",
    themeColor: "#EC407A",
    category: "Creativity & Kindness",
    readingTime: "5 mins",
    wordCount: 170,
    intro: "Oh no! Leo's favorite sky-blue crayon snapped into two pieces. What can he do now?",
    paragraphs: [
      "In art class, everyone was painting and drawing their dream islands. Leo was coloring a majestic blue ocean around his island.",
      "He pressed down a little too firmly. SNAP! His favorite sky-blue crayon broke straight in half.",
      "Leo's shoulders slumped. 'Oh no, my crayon is ruined!' he whispered, feeling his eyes sting with disappointed tears.",
      "His tablemate Clara heard him. Clara smiled kindly and picked up the two broken halves.",
      "'Look closely, Leo,' Clara whispered. 'It is not ruined at all! Before, you only had one crayon. Now you have two crayons!'",
      "She peeled the paper wrapper off one half and laid it flat against the drawing paper. When she dragged it sideways, it made a broad, beautiful wave texture.",
      "Leo gasped. 'It looks just like real rolling waves!'",
      "They both laughed and spent the afternoon creating waves with the broken crayon. Sometimes, mistakes create the best art."
    ],
    vocabulary: [
      {
        word: "slumped",
        syllables: "slumped",
        phonetic: "/slʌmpt/",
        definition: "Dropped down or leaned heavily with disappointment.",
        example: "His shoulders slumped when the picnic was cancelled.",
        emoji: "😞"
      },
      {
        word: "majestic",
        syllables: "ma-jes-tic",
        phonetic: "/məˈdʒes.tɪk/",
        definition: "Having grand beauty, dignity, and splendor.",
        example: "The majestic eagle soared over the snowy mountains.",
        emoji: "🦅"
      },
      {
        word: "texture",
        syllables: "tex-ture",
        phonetic: "/ˈteks.tʃɚ/",
        definition: "The look or feel of a surface (rough, smooth, bumpy).",
        example: "The tree bark had a rough, bumpy texture.",
        emoji: "📜"
      }
    ],
    quiz: [
      {
        question: "What happened to Leo's sky-blue crayon?",
        options: ["He dropped it in water", "It snapped in half", "It melted in the sun", "He lost it"],
        answerIndex: 1,
        explanation: "He pressed down too firmly and the crayon snapped straight in half."
      },
      {
        question: "How did Clara help Leo see the positive side?",
        options: ["She bought him a new box", "She showed him that now he has two crayons and can draw waves", "She took the pieces away", "She laughed at him"],
        answerIndex: 1,
        explanation: "Clara showed him how dragging the flat side made broad, beautiful wave textures."
      },
      {
        question: "What is the lesson of this story?",
        options: ["Never use crayons", "Mistakes can turn into wonderful art", "Always draw fast", "Art class is boring"],
        answerIndex: 1,
        explanation: "The story teaches that sometimes mistakes create the best art!"
      }
    ],
    funPrompt: "Have you ever made a mistake while drawing or doing homework? How did you fix it or make it better?"
  },
  {
    id: 17,
    day: 17,
    week: 3,
    level: "Confident",
    levelBadge: "Level 3 • Confident",
    title: "Leo Forgets His Lunchbox",
    coverEmoji: "🥪",
    themeColor: "#8D6E63",
    category: "Sharing & Empathy",
    readingTime: "5 mins",
    wordCount: 168,
    intro: "The lunch bell rings, but Leo's backpack is completely empty. What will his classmates do?",
    paragraphs: [
      "The noon bell rang across the cafeteria. Cheerful chatter echoed as children opened colorful lunchboxes filled with sandwiches, crackers, and juice boxes.",
      "Leo unzipped his backpack. He searched the big pocket, then the small front pocket. His stomach dropped. His lunchbox was still sitting on his kitchen counter at home!",
      "Leo sat quietly at the table with his head lowered, feeling hungry and embarrassed.",
      "Toby, who sat across from him, noticed right away. 'Where is your lunch, Leo?' Toby asked gently.",
      "'I forgot it on the kitchen table,' Leo admitted in a tiny voice.",
      "Toby did not hesitate for a second. He sliced his turkey sandwich in half. 'Here! Take this half. It is delicious!'",
      "Next to them, Maya handed Leo an unopened bag of crispy carrot chips. Sarah offered a sweet red apple.",
      "Leo blinked away happy tears. His empty table was suddenly full of delicious treats. 'Thank you, everyone,' he beamed."
    ],
    vocabulary: [
      {
        word: "chatter",
        syllables: "chat-ter",
        phonetic: "/ˈtʃæt̬.ɚ/",
        definition: "Friendly, continuous, and cheerful talking.",
        example: "The cafeteria was filled with friendly lunchtime chatter.",
        emoji: "💬"
      },
      {
        word: "hesitate",
        syllables: "hes-i-tate",
        phonetic: "/ˈhez.ə.teɪt/",
        definition: "To pause or wait before doing something because you are unsure.",
        example: "She did not hesitate to help the fallen runner.",
        emoji: "⏸️"
      },
      {
        word: "embarrassed",
        syllables: "em-bar-rassed",
        phonetic: "/ɪmˈber.əst/",
        definition: "Feeling shy, awkward, or self-conscious about a mistake.",
        example: "He felt embarrassed when his stomach growled loudly.",
        emoji: "😳"
      }
    ],
    quiz: [
      {
        question: "Why didn't Leo have his lunchbox?",
        options: ["He dropped it on the bus", "A dog took it", "He forgot it on his kitchen counter", "He wasn't hungry"],
        answerIndex: 2,
        explanation: "Leo unzipped his bag and remembered he left his lunchbox on the kitchen counter at home."
      },
      {
        question: "What did Toby share with Leo?",
        options: ["A piece of paper", "Half of his turkey sandwich", "A pencil", "His shoes"],
        answerIndex: 1,
        explanation: "Toby sliced his turkey sandwich in half and shared it with Leo."
      },
      {
        question: "How did Leo feel at the end of lunch?",
        options: ["Sad and hungry", "Grateful, happy, and full", "Angry", "Tired"],
        answerIndex: 1,
        explanation: "His friends shared their food and Leo beamed with gratitude."
      }
    ],
    funPrompt: "Has a friend ever shared something with you? How did you feel inside?"
  },
  {
    id: 18,
    day: 18,
    week: 3,
    level: "Confident",
    levelBadge: "Level 3 • Confident",
    title: "The Magic Words: Please and Thank You",
    coverEmoji: "🪄",
    themeColor: "#26C6DA",
    category: "Polite Manners",
    readingTime: "5 mins",
    wordCount: 172,
    intro: "Ella discovers that polite words are like real magical spells that open locked doors.",
    paragraphs: [
      "Ella's grandmother was a wonderful storyteller. One rainy evening by the fireplace, Grandma wore a mysterious grin.",
      "'Ella,' Grandma whispered, 'do you know that every human has the power to cast real magic spells?'",
      "Ella leaned forward with wide, curious eyes. 'Real magic, Grandma? Like flying on a broomstick?'",
      "'Better than that,' Grandma chuckled. 'Think of people's hearts like cozy rooms with doors. If you yell: 'Give me that cookie!' the door slams shut tightly.'",
      "'However,' Grandma continued, 'if you say with a warm smile: 'May I please have a cookie? Thank you so much,' a golden key turns. The door opens wide!'",
      "The next morning at breakfast, Ella tested Grandma's spell on her grumpy teenage brother.",
      "'Could you please pass the strawberry jam, brother? Thank you!' Ella said sweetly.",
      "Her brother stopped, smiled, and handed her the jar with a wink. 'The magic truly works!' Ella thought."
    ],
    vocabulary: [
      {
        word: "mysterious",
        syllables: "mys-te-ri-ous",
        phonetic: "/mɪˈstɪr.i.əs/",
        definition: "Strange, interesting, and full of secrets.",
        example: "The old castle had a mysterious hidden doorway.",
        emoji: "🗝️"
      },
      {
        word: "grumpy",
        syllables: "grump-y",
        phonetic: "/ˈɡrʌm.pi/",
        definition: "In a bad mood, easily annoyed or irritated.",
        example: "The bear was grumpy after waking up too early.",
        emoji: "😠"
      },
      {
        word: "graced",
        syllables: "graced",
        phonetic: "/ɡreɪst/",
        definition: "Brought beauty, kindness, or pleasant charm to something.",
        example: "A gentle smile graced her face.",
        emoji: "✨"
      }
    ],
    quiz: [
      {
        question: "What did Grandma compare people's hearts to?",
        options: ["Locked treasure boxes", "Cozy rooms with doors", "Tall mountains", "Cold freezers"],
        answerIndex: 1,
        explanation: "Grandma said people's hearts are like cozy rooms with doors."
      },
      {
        question: "What are the two magic words in the story?",
        options: ["Abracadabra and Alakazam", "Please and Thank You", "Hocus and Pocus", "Now and Fast"],
        answerIndex: 1,
        explanation: "The magic words are 'Please' and 'Thank You'!"
      },
      {
        question: "Who did Ella test the magic words on at breakfast?",
        options: ["Her grumpy brother", "Her cat", "The bus driver", "Her teacher"],
        answerIndex: 0,
        explanation: "Ella asked her grumpy brother politely for the strawberry jam, and it worked!"
      }
    ],
    funPrompt: "Practice saying politely in English: 'Excuse me, could you please pass the water? Thank you!' Try it today at dinner!"
  },
  {
    id: 19,
    day: 19,
    week: 3,
    level: "Confident",
    levelBadge: "Level 3 • Confident",
    title: "The Playground Soccer Match",
    coverEmoji: "⚽",
    themeColor: "#66BB6A",
    category: "Sports & Teamwork",
    readingTime: "5 mins",
    wordCount: 175,
    intro: "Two teams are tied at 2-2 with only one minute left on the school clock!",
    paragraphs: [
      "The afternoon sun beamed warmly on the grassy school soccer field. The score between the Tigers and the Eagles was tied: 2 to 2!",
      "Only two minutes remained before the final recess bell. Sam, the captain of the Tigers, dribbled the black-and-white soccer ball down the left sideline.",
      "Two defenders rushed to block him. Sam was tempted to take a wild kick at the goal all by himself.",
      "Just then, he noticed his teammate Lucas waving his hands wide open near the center penalty box.",
      "'Lucas! Here!' Sam shouted. Instead of being greedy, Sam passed the ball smoothly across the green grass.",
      "Lucas controlled the pass with a clean touch. He swung his right leg back and kicked with confidence: 'THWACK!'",
      "The ball curled gracefully into the top right corner of the net! GOAL!",
      "The whole team cheered and hugged. 'Great pass, Sam!' Lucas shouted. 'Great goal, Lucas!' Sam cheered back. Teamwork won the day."
    ],
    vocabulary: [
      {
        word: "dribbled",
        syllables: "drib-bled",
        phonetic: "/ˈdrɪb.əld/",
        definition: "Moved a ball forward with short, gentle bounces or kicks.",
        example: "The soccer player dribbled around three defenders.",
        emoji: "👟"
      },
      {
        word: "tempted",
        syllables: "temp-ted",
        phonetic: "/ˈtemp.tɪd/",
        definition: "Felt a strong urge to do something, even if it might not be best.",
        example: "She was tempted to eat the cupcake before dinner.",
        emoji: "🧁"
      },
      {
        word: "gracefully",
        syllables: "grace-ful-ly",
        phonetic: "/ˈɡreɪs.fəl.i/",
        definition: "In an elegant, smooth, and beautiful way.",
        example: "The white swan glided gracefully across the lake.",
        emoji: "🦢"
      }
    ],
    quiz: [
      {
        question: "What was the soccer score before the final play?",
        options: ["0 to 0", "Tied 2 to 2", "5 to 1", "Tigers had 10 points"],
        answerIndex: 1,
        explanation: "The score was tied 2 to 2 with only two minutes remaining."
      },
      {
        question: "What did Sam do when two defenders blocked him?",
        options: ["He kicked the ball out of bounds", "He sat down", "He passed the ball to Lucas", "He cried"],
        answerIndex: 2,
        explanation: "Sam was not greedy; he passed the ball smoothly to open teammate Lucas."
      },
      {
        question: "What helped the team win the game?",
        options: ["Luck alone", "Teamwork and sharing the ball", "Playing by himself", "The whistle"],
        answerIndex: 1,
        explanation: "Working together and trusting each other as a team won the game."
      }
    ],
    funPrompt: "Do you like playing sports or games with friends? What game is your favorite?"
  },
  {
    id: 20,
    day: 20,
    week: 3,
    level: "Confident",
    levelBadge: "Level 3 • Confident",
    title: "The Secret Note in the Library Book",
    coverEmoji: "📚",
    themeColor: "#7E57C2",
    category: "Mystery & Books",
    readingTime: "5 mins",
    wordCount: 178,
    intro: "Inside an old fairytale book in the library, Mia discovers a handwritten mystery.",
    paragraphs: [
      "The city library was Mia's sanctuary. She loved the smell of paper, the quiet corridors, and the tall wooden bookshelves.",
      "On Friday afternoon, Mia reached for a vintage hardcover book titled 'The Enchanted Forest'.",
      "As she opened to chapter four, a small envelope made of cream-colored parchment slipped out and landed at her shoes.",
      "On the envelope was written in graceful purple ink: 'To the reader who finds this note.'",
      "Mia's heart fluttered with excitement. She gently unfolded the letter. Inside was a hand-drawn map of the library with a riddle:",
      "'Where the dinosaurs roar on page ninety-two,\nA secret bookmark is waiting for you!'",
      "Mia grinned. She tiptoed over to the Science and Prehistory section. Tucked inside a giant dinosaur encyclopedia was a stunning origami butterfly!",
      "Mia kept the butterfly in her pocket, marveling at the quiet kindness of fellow readers."
    ],
    vocabulary: [
      {
        word: "sanctuary",
        syllables: "sanc-tu-ar-y",
        phonetic: "/ˈsæŋk.tʃu.er.i/",
        definition: "A peaceful, safe, and quiet place of comfort.",
        example: "The quiet garden was a peaceful sanctuary for birds.",
        emoji: "🏡"
      },
      {
        word: "vintage",
        syllables: "vin-tage",
        phonetic: "/ˈvɪn.tɪdʒ/",
        definition: "Classic, old, and of high quality from a past time.",
        example: "Grandpa keeps a vintage radio from the 1960s.",
        emoji: "📻"
      },
      {
        word: "origami",
        syllables: "o-ri-ga-mi",
        phonetic: "/ˌɔːr.əˈɡɑː.mi/",
        definition: "The traditional Japanese art of folding paper into shapes.",
        example: "She folded an origami crane out of shiny red paper.",
        emoji: "🦢"
      }
    ],
    quiz: [
      {
        question: "What fell out of the book 'The Enchanted Forest'?",
        options: ["A silver coin", "A cream-colored envelope with a note", "A dried flower", "A library card"],
        answerIndex: 1,
        explanation: "A small envelope made of cream-colored parchment slipped out."
      },
      {
        question: "Where did the riddle send Mia?",
        options: ["To the playground", "To the Dinosaur Prehistory section", "To the cafeteria", "To the front desk"],
        answerIndex: 1,
        explanation: "The riddle said: 'Where the dinosaurs roar on page ninety-two...'"
      },
      {
        question: "What prize was hidden in the dinosaur book?",
        options: ["A plastic dinosaur", "A piece of candy", "A stunning origami butterfly", "A gold medal"],
        answerIndex: 2,
        explanation: "Mia found a beautiful folded origami butterfly waiting inside!"
      }
    ],
    funPrompt: "If you left a secret note for another child to find in a library book, what nice message would you write?"
  },
  {
    id: 21,
    day: 21,
    week: 3,
    level: "Confident",
    levelBadge: "Level 3 • Week 3 Review",
    title: "Best Friends Forever",
    coverEmoji: "🌟",
    themeColor: "#26A69A",
    category: "Fun Poem & Rhyme",
    readingTime: "5 mins",
    wordCount: 160,
    intro: "Week 3 is finished! Celebrate your three-week milestone with this heartwarming friendship poem.",
    paragraphs: [
      "A friend is a hand when you tumble and fall,\nA friend is a voice that will answer your call!\nThey share half their cookie, they share their best smile,\nThey walk by your side for another long mile.",
      "When rain clouds are stormy and skies turn to grey,\nA true friend brings sunshine to brighten your day!\nTogether we giggle, together we dream,\nLike berries and waffles, like peaches and cream.",
      "So treasure your buddies, be gentle and kind,\nFor good friends are rare like the jewels you find!\nWith 'Please' and with 'Thank You' and hearts full of cheer,\nWe make happy memories all through the year!",
      "Fantastic job! You have read for 21 days in a row! Only one week left to graduation!"
    ],
    vocabulary: [
      {
        word: "tumble",
        syllables: "tum-ble",
        phonetic: "/ˈtʌm.bəl/",
        definition: "To fall down suddenly or roll over clumsily.",
        example: "The clumsy puppy took a tumble down the grassy hill.",
        emoji: "🤸"
      },
      {
        word: "treasure",
        syllables: "trea-sure",
        phonetic: "/ˈtreʒ.ɚ/",
        definition: "To value and care deeply about something or someone special.",
        example: "I treasure every letter my grandmother wrote me.",
        emoji: "💎"
      },
      {
        word: "memories",
        syllables: "mem-o-ries",
        phonetic: "/ˈmem.ər.iz/",
        definition: "Things that you remember from the past.",
        example: "Our family vacation created wonderful happy memories.",
        emoji: "📸"
      }
    ],
    quiz: [
      {
        question: "What does a friend do when you tumble and fall?",
        options: ["Laughs and walks away", "Offers a helping hand", "Hides behind a tree", "Runs away"],
        answerIndex: 1,
        explanation: "The poem says: 'A friend is a hand when you tumble and fall!'"
      },
      {
        question: "What sweet foods are friends compared to?",
        options: ["Spinach and broccoli", "Berries and waffles, peaches and cream", "Salt and pepper", "Hot sauce"],
        answerIndex: 1,
        explanation: "The poem compares friendship to: 'berries and waffles, like peaches and cream.'"
      },
      {
        question: "Why should we treasure good friends?",
        options: ["Because they are rare like precious jewels", "Because they do homework for us", "Because they have toys", "Because it is required"],
        answerIndex: 0,
        explanation: "The poem says: 'For good friends are rare like the jewels you find!'"
      }
    ],
    funPrompt: "Who is your best friend? Say 3 nice words that describe them (for example: kind, funny, smart)!"
  },

  // ==========================================
  // WEEK 4: IMAGINATION, MYSTERY & BIG DREAMS
  // ==========================================
  {
    id: 22,
    day: 22,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Explorer",
    title: "The Flying Carpet Under the Bed",
    coverEmoji: "🪄",
    themeColor: "#5E35B1",
    category: "Magical Adventures",
    readingTime: "5 mins",
    wordCount: 190,
    intro: "While looking for a lost slipper, Nora finds an ancient woven rug with shimmering gold tassels.",
    paragraphs: [
      "On a windy rainy evening, Nora was searching under her bed for her missing pink fluffy slipper.",
      "Behind an old shoe box, she touched something soft and silky. She pulled it into the lamplight. It was a beautiful miniature rug woven with sapphire stars, ruby moons, and golden fringe tassels.",
      "Nora knelt on the rug. 'I wish I could see the moon up close,' she whispered playfully.",
      "Instantly, the rug hummed like a happy bee. The corners fluttered, and before Nora could gasp, the carpet lifted six inches off the wooden floor!",
      "It drifted smoothly out her bedroom window into the starlit sky. The cool evening wind tousled Nora's hair.",
      "Below her, the town looked like a twinkling toy village. Cars had headlights like glowing fireflies, and streetlamps formed golden necklaces along the avenues.",
      "The carpet circled the clock tower once before flying gently back into Nora's cozy bedroom. Nora tucked the rug safely under her pillow, her heart singing with wonder."
    ],
    vocabulary: [
      {
        word: "tassels",
        syllables: "tas-sels",
        phonetic: "/ˈtæs.əlz/",
        definition: "Decorative bunches of hanging threads or cords.",
        example: "The curtain had gold tassels hanging from its edge.",
        emoji: "🧶"
      },
      {
        word: "tousled",
        syllables: "tou-sled",
        phonetic: "/ˈtaʊ.zəld/",
        definition: "Ruffled, untidy, or messy in an attractive way (like hair in the wind).",
        example: "The ocean wind tousled her curly hair.",
        emoji: "💨"
      },
      {
        word: "twinkling",
        syllables: "twin-kling",
        phonetic: "/ˈtwɪŋ.klɪŋ/",
        definition: "Shining with a flickering or sparkling light.",
        example: "Thousands of twinkling stars filled the clear night sky.",
        emoji: "✨"
      }
    ],
    quiz: [
      {
        question: "What was Nora looking for under her bed?",
        options: ["Her math book", "Her missing pink fluffy slipper", "A toy dinosaur", "A lost coin"],
        answerIndex: 1,
        explanation: "Nora was searching under her bed for her missing pink fluffy slipper."
      },
      {
        question: "What happened when Nora sat on the woven rug and made a wish?",
        options: ["Nothing happened", "The rug lifted and flew out the window", "It turned into a cat", "It caught fire"],
        answerIndex: 1,
        explanation: "The carpet hummed, lifted off the floor, and drifted into the starlit sky."
      },
      {
        question: "What did the town look like from up in the sky?",
        options: ["Like a giant ocean", "Like a twinkling toy village", "Completely pitch black", "Like a desert"],
        answerIndex: 1,
        explanation: "Below her, the town looked like a twinkling toy village with glowing headlights."
      }
    ],
    funPrompt: "If you had a flying carpet for one night, where would you fly to first?"
  },
  {
    id: 23,
    day: 23,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Explorer",
    title: "Detective Mia and the Missing Cookie",
    coverEmoji: "🔍",
    themeColor: "#00897B",
    category: "Fun Mystery",
    readingTime: "5 mins",
    wordCount: 195,
    intro: "A chocolate chip cookie vanished from the kitchen counter! Detective Mia is on the case.",
    paragraphs: [
      "At three o'clock sharp, Grandma baked six giant chocolate chip cookies and placed them on a blue ceramic plate to cool.",
      "Ten minutes later, Mia walked into the kitchen. Gasp! Only five cookies remained. One giant cookie had mysteriously vanished without a trace!",
      "Mia quickly strapped on her detective magnifying glass. 'Every crime scene tells a story,' she declared.",
      "First, she examined the kitchen floor. Near the wooden stool, she discovered a trail of fine brown cookie crumbs.",
      "She followed the crumb trail through the hallway, past the umbrella stand, and into the sunroom.",
      "Beside the sunny sofa, Mia spotted a second clue: three grains of white powdered sugar and a tiny tuft of golden fur caught on the carpet fringe.",
      "Mia peeked behind the velvet armchair. Curled up in a deep nap was Barnaby the golden retriever! Right next to his wet black nose lay the last half of the cookie.",
      "'Case closed!' Mia giggled, patting the sleepy detective suspect."
    ],
    vocabulary: [
      {
        word: "ceramic",
        syllables: "ce-ram-ic",
        phonetic: "/səˈræm.ɪk/",
        definition: "Made of clay that has been baked hard by high heat.",
        example: "Mom served tea in delicate ceramic cups.",
        emoji: "🏺"
      },
      {
        word: "magnifying",
        syllables: "mag-ni-fy-ing",
        phonetic: "/ˈmæɡ.nə.faɪ.ɪŋ/",
        definition: "Making something appear larger than it actually is.",
        example: "The scientist used a magnifying lens to inspect the tiny insect.",
        emoji: "🔍"
      },
      {
        word: "suspect",
        syllables: "sus-pect",
        phonetic: "/ˈsʌs.pekt/",
        definition: "A person or creature believed to have done a secret or wrongful action.",
        example: "The detective questioned the prime suspect.",
        emoji: "🐕"
      }
    ],
    quiz: [
      {
        question: "How many cookies were originally on the blue plate?",
        options: ["Three", "Six", "Twelve", "Twenty"],
        answerIndex: 1,
        explanation: "Grandma baked six giant chocolate chip cookies."
      },
      {
        question: "What clue did Mia find on the kitchen floor?",
        options: ["A red shoe", "A trail of brown cookie crumbs", "A spilled glass of milk", "A toy truck"],
        answerIndex: 1,
        explanation: "Near the stool, she discovered a trail of fine brown cookie crumbs."
      },
      {
        question: "Who was the guilty cookie thief?",
        options: ["Grandpa", "Barnaby the golden retriever", "Mia's little brother", "A squirrel"],
        answerIndex: 1,
        explanation: "Barnaby the golden retriever was napping with the last half of the cookie near his nose!"
      }
    ],
    funPrompt: "Use your best detective voice and say: 'The clues don't lie!' Have you ever lost something and found it using clues?"
  },
  {
    id: 24,
    day: 24,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Explorer",
    title: "The Star That Fell in the Garden",
    coverEmoji: "⭐",
    themeColor: "#F39C12",
    category: "Fantasy & Kindness",
    readingTime: "5 mins",
    wordCount: 198,
    intro: "A tiny sparkling meteorite lands gently in the flower patch. Can Elena help it fly back home?",
    paragraphs: [
      "A silver shooting star streaked across the midnight indigo sky. But instead of fading away, it landed with a soft 'thump' in Elena's rose garden.",
      "Elena crept outside in her bunny slippers. In the middle of the fragrant red roses sat a star no bigger than a ripe peach.",
      "The star was not hot at all; it was pleasantly warm and pulsed with soft yellow luminescence. It had two glowing eyes and emitted a gentle chiming sound.",
      "'Are you lost, little star?' Elena asked softly.",
      "The star nodded sadly. It tried to flutter its starry points, but it was too tired and heavy to lift off the grass.",
      "Elena had a clever idea. She brought out her shiny birthday helium balloon tied with strong purple ribbon.",
      "Carefully, Elena tied the ribbon around the little star. The balloon tugged upward, making the star weightless once again!",
      "The little star chimed with overjoyed gratitude. With a burst of golden sparkles, it rose through the clouds, twinkling brightly as it rejoined its family in the night sky."
    ],
    vocabulary: [
      {
        word: "luminescence",
        syllables: "lu-mi-nes-cence",
        phonetic: "/ˌluː.məˈnes.əns/",
        definition: "Light produced naturally without heat (a cool glow).",
        example: "Deep sea jellyfish shine with blue luminescence.",
        emoji: "💡"
      },
      {
        word: "fragrant",
        syllables: "fra-grant",
        phonetic: "/ˈfreɪ.ɡrənt/",
        definition: "Having a pleasant, sweet, and lovely smell.",
        example: "The fragrant jasmine flowers filled the evening air with perfume.",
        emoji: "🌹"
      },
      {
        word: "gratitude",
        syllables: "grat-i-tude",
        phonetic: "/ˈɡræt̬.ə.tuːd/",
        definition: "The feeling of being thankful and appreciative.",
        example: "She expressed heartfelt gratitude for the birthday surprise.",
        emoji: "🙏"
      }
    ],
    quiz: [
      {
        question: "Where did the shooting star land?",
        options: ["In a swimming pool", "In Elena's rose garden", "On the roof", "Inside a birdcage"],
        answerIndex: 1,
        explanation: "The shooting star landed with a soft thump in Elena's rose garden."
      },
      {
        question: "What did the star feel like when Elena touched it?",
        options: ["Freezing cold", "Burning hot", "Pleasantly warm with a gentle glow", "Slimy"],
        answerIndex: 2,
        explanation: "The star was not hot at all; it was pleasantly warm and pulsed with soft yellow luminescence."
      },
      {
        question: "How did Elena help the star lift back into the sky?",
        options: ["She threw it with a baseball bat", "She attached it to a helium balloon", "She used a catapult", "She blew on it"],
        answerIndex: 1,
        explanation: "Elena tied the star to her birthday helium balloon to make it light enough to float back up!"
      }
    ],
    funPrompt: "If you could make one wish upon a falling star tonight, what wish would you make?"
  },
  {
    id: 25,
    day: 25,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Explorer",
    title: "The Clockmaker's Hummingbird",
    coverEmoji: "⚙️",
    themeColor: "#0288D1",
    category: "Wonder & Science",
    readingTime: "5 mins",
    wordCount: 202,
    intro: "In a cozy cobblestone clock shop, Grandpa builds a clock that doesn't just chime—it flies!",
    paragraphs: [
      "Master Thomas was an elderly clockmaker whose workshop smelled of polished cedarwood, brass polish, and machine oil.",
      "His granddaughter Emily loved watching him work. Rows of cuckoo clocks, grandfather clocks, and ticking pocket watches lined the walls: 'Tick-tock, chime-chime!'",
      "For Emily's eighth birthday, Master Thomas presented a small velvet box. Inside rested a tiny mechanical hummingbird crafted from gleaming brass, copper springs, and sapphire glass feathers.",
      "'Turn the golden key in its tail three times,' Grandpa whispered proudly.",
      "Emily turned the key: 'Click, click, click.'",
      "Suddenly, tiny polished gears whirred into motion. The hummingbird fluttered its metal wings fifty times a second with a gentle hum!",
      "It hovered weightlessly over Emily's palm, dipped its slender beak into an imaginary flower, and whistled a melodic tune like a real forest bird.",
      "'It is clockwork magic, Grandpa!' Emily whispered in awe. She learned that with patience and math, humans can build wonders."
    ],
    vocabulary: [
      {
        word: "mechanical",
        syllables: "me-chan-i-cal",
        phonetic: "/məˈkæn.ɪ.kəl/",
        definition: "Operated by machines, gears, springs, or moving parts.",
        example: "The toy robot walked across the room using mechanical legs.",
        emoji: "⚙️"
      },
      {
        word: "hovered",
        syllables: "hov-ered",
        phonetic: "/ˈhʌv.ɚd/",
        definition: "Stayed floating in one place in the air.",
        example: "The helicopter hovered above the mountain rescue station.",
        emoji: "🚁"
      },
      {
        word: "melodic",
        syllables: "me-lod-ic",
        phonetic: "/məˈlɑː.dɪk/",
        definition: "Sweet-sounding, musical, and pleasant to hear.",
        example: "The flute player played a sweet, melodic tune.",
        emoji: "🎶"
      }
    ],
    quiz: [
      {
        question: "What did Master Thomas make for Emily's eighth birthday?",
        options: ["A wooden doll", "A mechanical brass hummingbird", "A pair of shoes", "A painting"],
        answerIndex: 1,
        explanation: "Grandpa crafted a tiny mechanical hummingbird with sapphire glass feathers."
      },
      {
        question: "How did Emily activate the mechanical bird?",
        options: ["With an electric switch", "By turning a golden key three times", "By clapping twice", "With a remote control"],
        answerIndex: 1,
        explanation: "Emily turned the golden key in its tail three times."
      },
      {
        question: "What did Emily learn from her grandfather's invention?",
        options: ["Clocks are noisy", "With patience and math, humans can build wonders", "Birds are dangerous", "Old clocks don't work"],
        answerIndex: 1,
        explanation: "Emily learned that with patience and math, humans can build beautiful wonders."
      }
    ],
    funPrompt: "If you were an inventor, what amazing machine would you invent to help people or animals?"
  },
  {
    id: 26,
    day: 26,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Explorer",
    title: "Journey to the Cloud Castle",
    coverEmoji: "🏰",
    themeColor: "#7E57C2",
    category: "Fantasy Quest",
    readingTime: "5 mins",
    wordCount: 205,
    intro: "High above the tallest mountain, a fluffy white cloud castle floats in the sky.",
    paragraphs: [
      "Every evening, when the sun dipped below the horizon, pink and gold light illuminated the highest clouds in the western sky.",
      "Young Clara looked through her father's brass telescope. To her amazement, she noticed grand towers, arched bridges, and pearly gates sculpted from dense fluffy mist.",
      "'That is the Cloud Castle,' her grandmother recounted. 'Only those who possess pure kindness and brave hearts can visit.'",
      "That night in her dream, a graceful white pegasus with pearlescent wings landed softly on Clara's balcony. 'Climb aboard, Clara,' the winged horse neighed gently.",
      "Together they galloped up the silvery staircase of moonlight. The air grew cool and sweet, smelling like fresh morning rain.",
      "At the castle gates, friendly cloud sprites greeted Clara with cups of bubbly starlight cider and spun cotton-candy pastries.",
      "The Queen of Clouds placed a glowing star brooch upon Clara's coat. 'Always carry your kindness down to Earth,' the Queen smiled.",
      "When Clara woke up in the morning, the star brooch was pinned safely to her pajama collar."
    ],
    vocabulary: [
      {
        word: "sculpted",
        syllables: "sculp-ted",
        phonetic: "/ˈskʌlp.tɪd/",
        definition: "Carved, shaped, or formed into a beautiful three-dimensional design.",
        example: "The artist sculpted a graceful horse out of white marble.",
        emoji: "🗿"
      },
      {
        word: "possess",
        syllables: "pos-sess",
        phonetic: "/pəˈzes/",
        definition: "To have, hold, or own a special quality or item.",
        example: "Brave firefighters possess great courage.",
        emoji: "🛡️"
      },
      {
        word: "pearlescent",
        syllables: "pearl-es-cent",
        phonetic: "/ˌpɝː.ləˈses.ənt/",
        definition: "Shining with iridescent colors like the inside of a pearl seashell.",
        example: "The inside of the oyster shell had a pearlescent shine.",
        emoji: "🦪"
      }
    ],
    quiz: [
      {
        question: "What did Clara see through her brass telescope?",
        options: ["An airplane", "A grand castle sculpted from clouds", "A big thunderstorm", "Only darkness"],
        answerIndex: 1,
        explanation: "Clara noticed grand towers, arched bridges, and pearly gates sculpted from clouds."
      },
      {
        question: "Who flew Clara up to the Cloud Castle?",
        options: ["A flying car", "A graceful white pegasus with pearlescent wings", "A giant eagle", "A helicopter"],
        answerIndex: 1,
        explanation: "A graceful white winged pegasus took Clara on the silvery staircase of moonlight."
      },
      {
        question: "What did the Queen of Clouds give Clara?",
        options: ["A chest of gold", "A glowing star brooch", "A magic sword", "A book of rules"],
        answerIndex: 1,
        explanation: "The Queen placed a glowing star brooch upon Clara's coat."
      }
    ],
    funPrompt: "If you could fly to any imaginary place tonight, where would you go: Candy Land, Cloud Castle, or Dinosaur Island?"
  },
  {
    id: 27,
    day: 27,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Explorer",
    title: "The Brave Little Dolphin",
    coverEmoji: "🐬",
    themeColor: "#00ACC1",
    category: "Ocean Adventures",
    readingTime: "5 mins",
    wordCount: 208,
    intro: "Echo the young dolphin must guide a lost sea turtle past the stormy coral reef.",
    paragraphs: [
      "Echo was a spirited young dolphin with smooth grey skin and an inquisitive whistle. He lived in the turquoise waters of Coral Bay.",
      "One stormy afternoon, churning ocean currents tossed giant waves against the jagged outer reef. The sea water turned murky with churning sand.",
      "Suddenly, Echo heard a distressed squeak through the water. Using his echolocation—clicks and whistles that bounce off objects—Echo pinpointed the sound.",
      "Trapped in a tangled clump of old fisherman's netting was Shelly, a small green sea turtle! The stormy tide was dragging her toward sharp coral rocks.",
      "Echo did not hesitate. He swam swiftly through the surging waves. With his strong beak, he nudged and loosened the tight ropes.",
      "Shelly wriggled one flipper free, then the second, until she popped out safely!",
      "'Follow my whistle!' Echo signaled. Echo led Shelly through the secret underwater tunnel where the water was calm and crystal clear.",
      "Shelly rested safely on a sandy ledge, clicking her grateful thanks. Echo leaped high into the ocean air, doing a double backflip in triumph."
    ],
    vocabulary: [
      {
        word: "inquisitive",
        syllables: "in-quis-i-tive",
        phonetic: "/ɪnˈkwɪz.ə.t̬ɪv/",
        definition: "Eager to investigate and learn things; full of curious questions.",
        example: "The inquisitive girl asked how airplanes can stay in the air.",
        emoji: "🧐"
      },
      {
        word: "echolocation",
        syllables: "ech-o-lo-ca-tion",
        phonetic: "/ˌek.oʊ.loʊˈkeɪ.ʃən/",
        definition: "Finding objects by listening to sound waves that bounce back.",
        example: "Bats and dolphins use echolocation to navigate in dark water.",
        emoji: "📡"
      },
      {
        word: "triumph",
        syllables: "tri-umph",
        phonetic: "/ˈtraɪ.əmf/",
        definition: "A great victory, success, or achievement.",
        example: "The soccer team raised their trophy in triumph.",
        emoji: "🏆"
      }
    ],
    quiz: [
      {
        question: "How did Echo the dolphin locate the trapped sea turtle?",
        options: ["He looked with binoculars", "He used echolocation (clicks and whistles)", "He smelled the turtle", "Someone told him"],
        answerIndex: 1,
        explanation: "Echo used his echolocation clicks and whistles that bounce off objects in murky water."
      },
      {
        question: "What danger was Shelly the sea turtle facing?",
        options: ["A hungry shark", "She was trapped in netting drifting toward sharp rocks", "She was too hot", "She had no water"],
        answerIndex: 1,
        explanation: "Shelly was tangled in old netting and being dragged toward sharp coral rocks."
      },
      {
        question: "How did Echo celebrate after guiding Shelly to safety?",
        options: ["He went to sleep", "He leaped high into the air with a double backflip", "He ate seaweed", "He swam away alone"],
        answerIndex: 1,
        explanation: "Echo leaped high into the ocean air, doing a double backflip in triumph!"
      }
    ],
    funPrompt: "Dolphins are very smart animals! What is one cool fact you know about ocean animals?"
  },
  {
    id: 28,
    day: 28,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Explorer",
    title: "The Talent Show Surprise",
    coverEmoji: "🎭",
    themeColor: "#E91E63",
    category: "Confidence & Courage",
    readingTime: "5 mins",
    wordCount: 212,
    intro: "Maya's hands are trembling before she walks onto the bright school stage. Can she overcome her stage fright?",
    paragraphs: [
      "The auditorium was packed with parents, teachers, and cheering students. Tonight was the annual Oakridge Elementary Talent Show.",
      "Backstage, eight-year-old Maya stood gripping her violin bow. Her palms felt clammy, and butterflies fluttered wildly inside her stomach.",
      "'What if I hit the wrong note? What if everyone laughs?' Maya worried, feeling like running out the side exit.",
      "Her music teacher, Mr. Alvarez, knelt beside her and spoke in a calming tone. 'Maya, being brave does not mean you never feel fear. Bravery means taking a deep breath and performing even when you feel scared.'",
      "'Picture yourself playing for your fluffy cat at home,' he added with an encouraging wink.",
      "Maya inhaled deeply: in through her nose for four counts, out through her mouth. She stepped into the warm center spotlight.",
      "She placed her violin under her chin and drew her bow across the strings. Rich, sweet music filled the auditorium.",
      "Her fingers danced gracefully across the fingerboard without a single mistake. When the last note echoed into silence, the crowd erupted into a roaring standing ovation!",
      "Maya smiled with radiant joy. She had conquered her fear."
    ],
    vocabulary: [
      {
        word: "auditorium",
        syllables: "au-di-to-ri-um",
        phonetic: "/ˌɑː.dəˈtɔːr.i.əm/",
        definition: "A large building or hall used for concerts, speeches, and performances.",
        example: "The audience took their seats inside the grand auditorium.",
        emoji: "🏛️"
      },
      {
        word: "clammy",
        syllables: "clam-my",
        phonetic: "/ˈklæm.i/",
        definition: "Cold, damp, and slightly sticky (like nervous hands).",
        example: "His hands felt clammy before taking his spelling test.",
        emoji: "🤲"
      },
      {
        word: "ovation",
        syllables: "o-va-tion",
        phonetic: "/oʊˈveɪ.ʃən/",
        definition: "Loud, enthusiastic clapping and cheering from an audience.",
        example: "The pianist received a standing ovation after her concert.",
        emoji: "👏"
      }
    ],
    quiz: [
      {
        question: "What instrument did Maya play in the talent show?",
        options: ["The piano", "The violin", "The drums", "The guitar"],
        answerIndex: 1,
        explanation: "Maya stood gripping her violin bow backstage."
      },
      {
        question: "What wise advice did Mr. Alvarez give Maya about bravery?",
        options: ["Bravery means never feeling scared", "Bravery means performing even when you feel fear", "You should run away", "Don't play music"],
        answerIndex: 1,
        explanation: "Mr. Alvarez said bravery means taking a deep breath and performing even when you feel scared."
      },
      {
        question: "How did the audience respond when Maya finished her song?",
        options: ["They stayed completely silent", "They walked out", "They erupted into a roaring standing ovation", "They fell asleep"],
        answerIndex: 2,
        explanation: "The crowd erupted into enthusiastic applause and a standing ovation!"
      }
    ],
    funPrompt: "What is something that made you nervous before, but you did it anyway? That was you being brave!"
  },
  {
    id: 29,
    day: 29,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Explorer",
    title: "The Girl Who Built a Rocket to the Moon",
    coverEmoji: "🚀",
    themeColor: "#3F51B5",
    category: "Science & Big Dreams",
    readingTime: "5 mins",
    wordCount: 215,
    intro: "Aria dreams of becoming an astronaut. Today, she builds her very first cardboard spaceship!",
    paragraphs: [
      "Aria's bedroom was an astronomy laboratory. Glowing constellations covered the ceiling, and posters of astronauts floated on every wall.",
      "When a giant delivery box arrived at her home on Saturday, Aria's eyes lit up. Other people saw scrap cardboard, but Aria saw an interstellar spacecraft!",
      "Armed with silver foil, scissors, glue, and vibrant markers, Aria went to work. She crafted twin thruster engines using oatmeal cylinders and added solar panels on the wings.",
      "Inside the cockpit, she drew an instrument control panel with colorful dials, altitude meters, and a giant red button labeled: 'HYPER-DRIVE'.",
      "She put on her white winter bike helmet as a space helmet and climbed inside.",
      "'Mission Control, this is Commander Aria aboard Apollo Star! Commencing countdown: Ten, nine, eight... three, two, one, BLAST OFF!'",
      "In her vivid imagination, the cardboard walls melted away. She broke through Earth's atmosphere, gazing down at the sapphire oceans and white swirl clouds.",
      "'One day,' Aria promised the stars, 'I will ride a real rocket to Mars and beyond.' Big dreams begin with small sparks of imagination."
    ],
    vocabulary: [
      {
        word: "constellations",
        syllables: "con-stel-la-tions",
        phonetic: "/ˌkɑːn.stəˈleɪ.ʃənz/",
        definition: "Groups of stars that form recognizable shapes or patterns in the sky.",
        example: "The Big Dipper is one of the most famous constellations.",
        emoji: "✨"
      },
      {
        word: "interstellar",
        syllables: "in-ter-stel-lar",
        phonetic: "/ˌɪn.t̬ɚˈstel.ɚ/",
        definition: "Occurring or traveling between the stars in outer space.",
        example: "The spacecraft embarked on an interstellar voyage.",
        emoji: "🌌"
      },
      {
        word: "commencing",
        syllables: "com-menc-ing",
        phonetic: "/kəˈmens.ɪŋ/",
        definition: "Beginning, starting, or launching an activity.",
        example: "The school play is commencing in five minutes.",
        emoji: "🎬"
      }
    ],
    quiz: [
      {
        question: "What did Aria build her spaceship out of?",
        options: ["Real steel and titanium", "A giant cardboard delivery box and oatmeal cylinders", "Plastic blocks", "Wood and nails"],
        answerIndex: 1,
        explanation: "Aria used a giant cardboard delivery box, foil, markers, and oatmeal cylinders."
      },
      {
        question: "What did Aria use as her astronaut helmet?",
        options: ["A saucepan", "Her white winter bike helmet", "A paper bag", "A baseball cap"],
        answerIndex: 1,
        explanation: "She put on her white winter bike helmet as an authentic space helmet."
      },
      {
        question: "What is Aria's big dream for the future?",
        options: ["To ride a real rocket to Mars and beyond", "To become a chef", "To buy a car", "To sleep all day"],
        answerIndex: 0,
        explanation: "Aria promised the stars that one day she will ride a real rocket to Mars and beyond!"
      }
    ],
    funPrompt: "What do you want to be when you grow up? (An astronaut, artist, doctor, teacher, writer, or something else?)"
  },
  {
    id: 30,
    day: 30,
    week: 4,
    level: "Explorer",
    levelBadge: "Level 4 • Graduation Day!",
    title: "The Golden Key of Reading",
    coverEmoji: "👑",
    themeColor: "#FFB300",
    category: "Graduation Celebration",
    readingTime: "5 mins",
    wordCount: 220,
    intro: "DAY 30! YOU DID IT! Read this special celebration story written just for you.",
    paragraphs: [
      "Thirty days ago, you embarked on an incredible journey into the wonderful world of English reading.",
      "Day after day, story after story, you unlocked new words, traveled to secret treehouses, sang with opera cats, explored the ocean depths with brave dolphins, and climbed all the way to cloud castles.",
      "Learning a second language is one of the most magnificent superpowers in the whole universe. It takes patience, daily practice, and courage.",
      "Today, you hold an invisible golden key in your hands: The Golden Key of Reading.",
      "With this key, no door in the world is locked to you. Every book on every library shelf is a treasure waiting to be discovered. You can travel to the stars, dive into deep oceans, and understand people from every corner of the planet.",
      "Stand tall and be proud of yourself! You practiced every single day, you never gave up, and your English reading skills have grown so strong.",
      "Congratulations, Champion Reader! This is not the end of your reading journey—it is only the magical beginning!"
    ],
    vocabulary: [
      {
        word: "embarked",
        syllables: "em-barked",
        phonetic: "/ɪmˈbɑːrkt/",
        definition: "Began a new, exciting, and meaningful journey.",
        example: "The explorer embarked on an expedition across the ocean.",
        emoji: "⛵"
      },
      {
        word: "magnificent",
        syllables: "mag-nif-i-cent",
        phonetic: "/mæɡˈnɪf.ə.sənt/",
        definition: "Extremely beautiful, grand, and impressive.",
        example: "The sunrise over the snowcapped mountains was magnificent.",
        emoji: "🌅"
      },
      {
        word: "champion",
        syllables: "cham-pi-on",
        phonetic: "/ˈtʃæm.pi.ən/",
        definition: "A winner, hero, or someone who shows outstanding dedication.",
        example: "She worked hard every day and became a reading champion.",
        emoji: "🏅"
      }
    ],
    quiz: [
      {
        question: "How many days of reading did you complete to reach Day 30?",
        options: ["5 days", "10 days", "30 days!", "2 days"],
        answerIndex: 2,
        explanation: "You read for 30 full days! That is a huge achievement!"
      },
      {
        question: "Why is learning a second language like a superpower?",
        options: ["Because you can fly", "Because you can understand people and explore books worldwide", "Because you don't have to sleep", "Because you get free candy"],
        answerIndex: 1,
        explanation: "Reading in another language allows you to unlock books and communicate with people across the globe."
      },
      {
        question: "What is 'The Golden Key of Reading'?",
        options: ["A real metal key", "Your ability to read, learn, and explore any book in the world", "A car key", "A toy"],
        answerIndex: 1,
        explanation: "The Golden Key is your reading power that opens doors to endless stories and knowledge."
      }
    ],
    funPrompt: "Print your Certificate of Reading Champion and show it proudly to your family and friends! You did it!"
  }
];

MONTH1_STORIES.forEach(story => {
  if (!STORIES_DATA.some(s => s.id === story.id)) {
    STORIES_DATA.push(story);
  }
});

// Helper to get total stories count
function getTotalStoriesCount() {
  return STORIES_DATA.length;
}

// Export for module/browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STORIES_DATA, getTotalStoriesCount };
}

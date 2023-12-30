const adjectives = [
  "arrogant",
  "careless",
  "dishonest",
  "egotistical",
  "greedy",
  "hostile",
  "ignorant",
  "jealous",
  "lazy",
  "malicious",
  "narrow-minded",
  "obnoxious",
  "pessimistic",
  "quarrelsome",
  "rude",
  "self-centered",
  "thoughtless",
  "unreliable",
  "vindictive",
  "wasteful",
  "yammering", 
  "zealous"
];

const nouns = [
  "friendship",
  "kindness",
  "generosity",
  "compassion",
  "empathy",
  "gratitude",
  "optimism",
  "humility",
  "integrity",
  "perseverance",
  "wisdom",
  "patience",
  "resilience",
  "creativity",
  "harmony",
  "joy",
  "love",
  "peace",
  "serenity",
  "hope",
  "trust",
  "unity",
  "vitality",
  "zeal"
];

const verbs = [
  "persevere",
  "thrive",
  "endure",
  "persist",
  "excel",
  "soar",
  "blossom",
  "triumph",
  "surpass",
  "conquer",
  "prevail",
  "overcome",
  "flourish",
  "achieve",
  "strive",
  "excel",
  "thrive",
  "transcend",
  "inspire",
  "empower",
  "shine",
  "bloom",
  "rise",
  "prosper"
];

const name = 'Jake';
const sign = 'Gemini';

const generateMessage = (name, sign) =>
{
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

    console.log(`Dear ${name}! I know this year was awful for you, but you and those with the sign ${sign} have an amazing year waiting for them!`);

    console.log(`2024 will be a year full of ${randomNoun}`);
    console.log(`But in order for you to get that you need to avoid those friends you are ${randomAdj}, they are no good!`);
    console.log(`The year is almost over, so please ${randomVerb} until 2024 rolls around!`);
}

generateMessage(name, sign);

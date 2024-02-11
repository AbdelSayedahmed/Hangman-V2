const prompt = require("prompt-sync")();

let wrongGuesses = 0;
let totalGuesses = 0;
let numberOfChances = 0;
const lettersGuessed = [];
const words = [
    "abruptly",
    "absurd",
    "abyss",
    "affix",
    "askew",
    "avenue",
    "awkward",
    "axiom",
    "azure",
    "bagpipes",
    "bandwagon",
    "banjo",
    "bayou",
    "beekeeper",
    "bikini",
    "blitz",
    "blizzard",
    "boggle",
    "bookworm",
    "boxcar",
    "boxful",
    "buckaroo",
    "buffalo",
    "buffoon",
    "buxom",
    "buzzard",
    "buzzing",
    "buzzwords",
    "caliph",
    "cobweb",
    "cockiness",
    "croquet",
    "crypt",
    "curacao",
    "cycle",
    "daiquiri",
    "dirndl",
    "disavow",
    "dizzying",
    "duplex",
    "dwarves",
    "embezzle",
    "equip",
    "espionage",
    "euouae",
    "exodus",
    "faking",
    "fishhook",
    "fixable",
    "fjord",
    "flapjack",
    "flopping",
    "fluffiness",
    "flyby",
    "foxglove",
    "frazzled",
    "frizzled",
    "fuchsia",
    "funny",
    "gabby",
    "galaxy",
    "galvanize",
    "gazebo",
    "giaour",
    "gizmo",
    "glowworm",
    "glyph",
    "gnarly",
    "gnostic",
    "gossip",
    "grogginess",
    "haiku",
    "haphazard",
    "hyphen",
    "iatrogenic",
    "icebox",
    "injury",
    "ivory",
    "ivy",
    "jackpot",
    "jaundice",
    "jawbreaker",
    "jaywalk",
    "jazziest",
    "jazzy",
    "jelly",
    "jigsaw",
    "jinx",
    "jiujitsu",
    "jockey",
    "jogging",
    "joking",
    "jovial",
    "joyful",
    "juicy",
    "jukebox",
    "jumbo",
    "kayak",
    "kazoo",
    "keyhole",
    "khaki",
    "kilobyte",
    "kiosk",
    "kitsch",
    "kiwifruit",
    "klutz",
    "knapsack",
    "larynx",
    "lengths",
    "lucky",
    "luxury",
    "lymph",
    "marquis",
    "matrix",
    "megahertz",
    "microwave",
    "mnemonic",
    "mystify",
    "naphtha",
    "nightclub",
    "nowadays",
    "numbskull",
    "nymph",
    "onyx",
    "ovary",
    "oxidize",
    "oxygen",
    "pajama",
    "peekaboo",
    "phlegm",
    "pixel",
    "pizazz",
    "pneumonia",
    "polka",
    "pshaw",
    "psyche",
    "puppy",
    "puzzling",
    "quartz",
    "queue",
    "quips",
    "quixotic",
    "quiz",
    "quizzes",
    "quorum",
    "razzmatazz",
    "rhubarb",
    "rhythm",
    "rickshaw",
    "schnapps",
    "scratch",
    "shiv",
    "snazzy",
    "sphinx",
    "spritz",
    "squawk",
    "staff",
    "strength",
    "strengths",
    "stretch",
    "stronghold",
    "stymied",
    "subway",
    "swivel",
    "syndrome",
    "thriftless",
    "thumbscrew",
    "topaz",
    "transcript",
    "transgress",
    "transplant",
    "triphthong",
    "twelfth",
    "twelfths",
    "unknown",
    "unworthy",
    "unzip",
    "uptown",
    "vaporize",
    "vixen",
    "vodka",
    "voodoo",
    "vortex",
    "voyeurism",
    "walkway",
    "waltz",
    "wave",
    "wavy",
    "waxy",
    "wellspring",
    "wheezy",
    "whiskey",
    "whizzing",
    "whomever",
    "wimpy",
    "witchcraft",
    "wizard",
    "woozy",
    "wristwatch",
    "wyvern",
    "xylophone",
    "yachtsman",
    "yippee",
    "yoked",
    "youthful",
    "yummy",
    "zephyr",
    "zigzag",
    "zigzagging",
    "zilch",
    "zipper",
    "zodiac",
    "zombie",
];
const word2Guess = words[Math.floor(Math.random() * (words.length + 1))];
const displayWord = word2Guess.split('').fill(' _ ');

while (numberOfChances === 0) {
    let difficulty = prompt('Easy, Medium, or Hard? ').toLowerCase();

    switch (difficulty) {
        case 'easy': numberOfChances = 10; break;
        case 'medium': numberOfChances = 8; break;
        case 'hard': numberOfChances = 6; break;
        default: console.log('Invalid input, try again!\n');
    }
}



function runGame() {
    let inputLetter = prompt('Guess a letter: ');

    if (!/[a-z]/gi.test(inputLetter)) {
        console.log('Invalid input, try again!\n');
    } else {
        if(!lettersGuessed.includes(inputLetter)) {
            lettersGuessed.push(inputLetter);

            if (word2Guess.includes(inputLetter)) {
                console.log('Correct!')
                for (let i = 0; i < word2Guess.length; i++) {
                    if (word2Guess[i] === inputLetter) {
                        displayWord[i] = inputLetter;
                    }
                }
                totalGuesses++;
            } else {
                console.log('Wrong!\n');
                totalGuesses++;
                wrongGuesses++;
            }

        } else console.log('You already guess that letter!\n');
    }

}

while ((wrongGuesses < numberOfChances) && (displayWord.join('') !== word2Guess)) {
    console.log(`Total Guesses: ${totalGuesses} || Wrong Guesses: ${wrongGuesses}\n`);
    console.log(`Letters Guessed: ${lettersGuessed}\n`);
    console.log(`${displayWord.join(' ')}\n`);
    runGame();
}

if (displayWord.join('') === word2Guess) {
    console.log(`YOU GOT IT! The correct word is ${word2Guess}`);
} else console.log(`Sorry. You ran out of chances. The correct answer is ${word2Guess}`);
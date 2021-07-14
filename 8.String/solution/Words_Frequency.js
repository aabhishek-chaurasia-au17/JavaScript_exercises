// JavaScript – Words Frequency in String Shorthands

// Input : test_str = ‘Gfg is best’
// Output : {‘Gfg’: 1, ‘is’: 1, ‘best’: 1}

// Input : test_str = ‘Gfg Gfg Gfg’
// Output : {‘Gfg’: 3}

const wordFreq = (string) => {
    let words = string.replace(/[.]/g, '').split(/\s/);
    let freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}
let string = 'Gfg Gfg Gfg'
console.log(wordFreq(string));
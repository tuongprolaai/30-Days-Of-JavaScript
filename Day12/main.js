var _a, _b;
// Exercises: Level 1
// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
var text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
var total = text.match(/\d+/g);
if (total != null) {
    console.log(Number(total[0]) * 12 + Number(total[1]) + Number(total[2]) * 12);
}
// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
{
    var text_1 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";
    var regex = /-?\d+/g;
    var points = Array.from(text_1.match(regex) || [], Number);
    var sortedPoints = points.sort(function (a, b) { return a - b; });
    var distance = ((_a = sortedPoints[sortedPoints.length - 1]) !== null && _a !== void 0 ? _a : 0) - ((_b = sortedPoints[0]) !== null && _b !== void 0 ? _b : 0);
    console.log(distance);
}
// Exercises: Level 2
{
    function tenMostFrequentWords(text, topN) {
        if (topN === void 0) { topN = 10; }
        var words = text.match(/\b\w+\b/g) || [];
        var freqMap = {};
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            freqMap[word] = (freqMap[word] || 0) + 1;
        }
        var sorted = Object.entries(freqMap)
            .map(function (_a) {
            var word = _a[0], count = _a[1];
            return ({ word: word, count: count });
        })
            .sort(function (a, b) { return b.count - a.count; });
        return sorted.slice(0, topN);
    }
    var paragraph = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";
    console.log(tenMostFrequentWords(paragraph, 10));
}
// Exercises: Level 3
{
    function cleanText(text) {
        var cleaned = text.replace(/[^a-zA-Z\s]/g, "");
        return cleaned.replace(/\s+/g, " ").trim();
    }
    function mostFrequentWords(text, topN) {
        if (topN === void 0) { topN = 3; }
        var words = text.match(/\b\w+\b/g) || [];
        var freqMap = {};
        for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
            var word = words_2[_i];
            freqMap[word] = (freqMap[word] || 0) + 1;
        }
        return Object.entries(freqMap)
            .map(function (_a) {
            var word = _a[0], count = _a[1];
            return ({ word: word, count: count });
        })
            .sort(function (a, b) { return b.count - a.count; })
            .slice(0, topN);
    }
    var sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?";
    var cleanedText = cleanText(sentence);
    console.log(cleanedText);
    var topWords = mostFrequentWords(cleanedText);
    console.log(topWords);
}

// Exercises: Level 1
// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text: string =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const total = text.match(/\d+/g);
if (total != null) {
  console.log(Number(total[0]) * 12 + Number(total[1]) + Number(total[2]) * 12);
}

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
{
  const text: string =
    "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";
  const regex: RegExp = /-?\d+/g;
  const points: number[] = Array.from(text.match(regex) || [], Number);
  const sortedPoints: number[] = points.sort((a, b) => a - b);
  const distance: number =
    (sortedPoints[sortedPoints.length - 1] ?? 0) - (sortedPoints[0] ?? 0);
  console.log(distance);
}

// Exercises: Level 2
{
  function tenMostFrequentWords(text: string, topN: number = 10) {
    const words = text.match(/\b\w+\b/g) || [];
    const freqMap: Record<string, number> = {};
    for (const word of words) {
      freqMap[word] = (freqMap[word] || 0) + 1;
    }
    const sorted = Object.entries(freqMap)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count);
    return sorted.slice(0, topN);
  }
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

  console.log(tenMostFrequentWords(paragraph, 10));
}

// Exercises: Level 3
{
  function cleanText(text: string): string {
    const cleaned = text.replace(/[^a-zA-Z\s]/g, "");
    return cleaned.replace(/\s+/g, " ").trim();
  }
  function mostFrequentWords(text: string, topN: number = 3) {
    const words = text.match(/\b\w+\b/g) || [];

    const freqMap: Record<string, number> = {};
    for (const word of words) {
      freqMap[word] = (freqMap[word] || 0) + 1;
    }
    return Object.entries(freqMap)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, topN);
  }
  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

  const cleanedText = cleanText(sentence);
  console.log(cleanedText);

  const topWords = mostFrequentWords(cleanedText);
  console.log(topWords);
}

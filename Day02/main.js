// Bài tập cấp độ 1:
// 1. Khai báo biến
let challenge = "Học JavaScript trong 30 ngày";

// 2. In ra console
console.log(challenge);

// 3. In độ dài chuỗi
console.log(challenge.length);

// 4. In hoa tất cả
console.log(challenge.toUpperCase());

// 5. In thường tất cả
console.log(challenge.toLowerCase());

// 6. Cắt từ đầu tiên (Ví dụ cắt chữ "Học")
console.log(challenge.substr(0, 3));

// 7. Cắt bỏ cụm "Học JavaScript"
console.log(challenge.substring(15));

// 8. Kiểm tra từ "Script"
console.log(challenge.includes("Script"));

// 9. Tách thành mảng (split)
console.log(challenge.split());
// 10. Tách tại khoảng trắng
console.log(challenge.split(" "));

// 11. Tách chuỗi các công ty tại dấu phẩy
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));

// 12. Thay thế chuỗi
console.log(challenge.replace("JavaScript", "Python"));

// 13. Ký tự ở index 15
console.log(challenge.charAt(15));

// 14. Mã ký tự của 'J'
console.log(challenge.charCodeAt(4));

// 15. Vị trí đầu tiên của 'o'
console.log(challenge.indexOf("o"));

// 16. Vị trí cuối cùng của 'o'
console.log(challenge.lastIndexOf("o"));

// 17. Tìm vị trí đầu tiên của từ "vì"
let sentenceBecause =
  "Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ";
console.log(sentenceBecause.indexOf("vì"));

// 18. Tìm vị trí cuối cùng của từ "vì"
console.log(sentenceBecause.lastIndexOf("vì"));

// 19. Tìm bằng search
console.log(sentenceBecause.search("vì"));

// 20. Xóa khoảng trắng đầu cuối
let stringSpace = " Học JavaScript trong 30 ngày ";
console.log(stringSpace.trim());

// 21. startsWith
console.log(challenge.startsWith("Học"));

// 22. endsWith
console.log(challenge.endsWith("ngày"));

// 23. Tìm tất cả chữ 'o'
console.log(challenge.match(/o/g));

// 24. Nối chuỗi (concat)
let firstPart = "Học JavaScript trong";
let secondPart = "30 ngày";
console.log(firstPart.concat(" ", secondPart));

// 25. Lặp lại 2 lần
console.log(challenge.repeat(2));

// Bài tập cấp độ 2
// 1. In câu trích dẫn của John Holmes
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// 2. In câu trích dẫn của Mẹ Teresa
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

// 3. Kiểm tra typeof '10'
console.log(typeof "10" === 10);
// Làm cho bằng nhau:
console.log(+"10" === 10);

// 4. Kiểm tra parseFloat('9, 8')
let numFloat = parseFloat("9.8");
if (numFloat !== 10) {
  numFloat = Math.ceil(numFloat);
}
console.log(numFloat);

// 5. Kiểm tra 'on' trong 'python' và 'jargon'
let str1 = "python";
let str2 = "jargon";
console.log(str1.includes("on") && str2.includes("on"));

// 6. Kiểm tra "biệt ngữ" (jargon) trong câu
let sentenceJargon = "Tôi hy vọng khóa học này không chứa đầy những biệt ngữ.";
console.log(sentenceJargon.includes("biệt ngữ"));

// 7. Số ngẫu nhiên 0 - 100
let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

// 8. Số ngẫu nhiên 50 - 100
let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

// 9. Số ngẫu nhiên 0 - 255
let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

// 10. Truy cập ký tự ngẫu nhiên trong chuỗi 'JavaScript'
let jsString = "JavaScript";
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]);

// 11. In mẫu số 1 1 1 1 1...
console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);

// 12. Cắt cụm "bởi vì bởi vì bởi vì"
let sentencePhrase =
  "Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ";
let start = sentencePhrase.indexOf("bởi vì");
let end = sentencePhrase.lastIndexOf("là");
console.log(sentencePhrase.substr(start, end - start - 1));

// Bài tập cấp độ 3
// 1. Đếm số từ "tình yêu"
let loveSentence =
  "Tình yêu là điều tuyệt vời nhất trên thế giới này. Một số đã tìm thấy tình yêu của mình và một số vẫn đang tìm kiếm tình yêu của mình.";
let countLove = loveSentence.match(/tình yêu/gi);
console.log(countLove.length); // 3

// 2. Đếm số từ "vì"
let becauseSentence =
  "Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ";
let countBecause = becauseSentence.match(/vì/gi);
console.log(countBecause.length); // 3

// 3. Clean text và tìm từ xuất hiện nhiều nhất
const messySentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let cleanedText = messySentence.replace(/[%$@#&;!?]/g, "");
console.log(cleanedText);

let words = cleanedText.split(" ");
let mostFreqWord = "";
let maxCount = 0;
for (i of words) {
  let count = 0;
  for (j of words) {
    if (i === j) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    mostFreqWord = i;
  }
}
console.log(`Từ xuất hiện nhiều nhất: "${mostFreqWord}" (${maxCount} lần)`);

// 4. Tính tổng thu nhập
let incomeText =
  "Anh ấy kiếm được 5000 euro từ lương mỗi tháng, 10000 euro tiền thưởng hàng năm, các khóa học trực tuyến 15000 euro mỗi tháng.";

let numbers = incomeText.match(/\d+/g);

let salaryPerMonth = parseInt(numbers[0]);
let annualBonus = parseInt(numbers[1]);
let coursePerMonth = parseInt(numbers[2]);

let totalIncome = salaryPerMonth * 12 + annualBonus + coursePerMonth * 12;
console.log("Tổng thu nhập hàng năm: " + totalIncome + " euro");

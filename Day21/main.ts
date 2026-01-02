// Exercise: Level 1
// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// const firstParaQuery = document.querySelector('li');
// const firstParaTag = document.getElementsByTagName("li");
// console.log(firstParaQuery);
// console.log(firstParaTag[0]);

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
// console.log(document.querySelector("#para-1"));
// console.log(document.querySelector("#para-2"));
// console.log(document.querySelector("#para-3"));
// console.log(document.querySelector("#para-4"));

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// console.log(document.querySelectorAll("li"))

// 4. Loop through the nodeList and get the text content of each paragraph
// const listItems = document.querySelectorAll("li");
// listItems.forEach(item=>{
//     console.log(item.textContent);
// })

// 5. Set id and class attribute for all the paragraphs using different attribute setting methods
// firstParaQuery?.setAttribute("id", "setId");

// Exercise: Level 2
// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// listItems.forEach(item => {
//     Object.assign(item.style, {
//         background: "red",
//         color: "white",
//         fontSize: "14px",
//         fontFamily: "Tahoma"
//     });
// });

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// listItems.forEach((p, index) => {
//     if (index % 2 === 0) {
//         p.style.color = "green";
//     } else {
//         p.style.color = "red";
//     }
// });

// Exercise: Level 3
// DOM: Mini project 1
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

console.log(randomColor());

const year = document.querySelector("span");
setInterval(()=>{
    year && (year.style.color = randomColor());
},1000);

const pDateTime = document.querySelector("p");
setInterval(() => {
    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const pad = (num:number) => String(num).padStart(2, '0');
    const hh = pad(now.getHours());
    const mm = pad(now.getMinutes());
    const ss = pad(now.getSeconds());

    if (pDateTime) {
        pDateTime.textContent = `${month} ${date}, ${year} ${hh}:${mm}:${ss}`;
        pDateTime.style.backgroundColor = randomColor();
    }
}, 1000);

const listItems = document.querySelectorAll("li");
listItems.forEach(item=>{
    if(item.textContent.includes("Done")){
        item.style.backgroundColor = "green";
    }
    else if(item.textContent.includes("Ongoing")){
        item.style.backgroundColor = "yellow";
    }
    else {
        item.style.backgroundColor = "red";
    }
})
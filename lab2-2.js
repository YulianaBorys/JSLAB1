function isIPAddress(ip) {
    let ipPattern = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/;
    return ipPattern.test(ip);
}
console.log(isIPAddress("192.168.1.1"));   

function findRGBA(text) {
    const match = text.match(/rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(0|0?\.\d+|1)\s*\)/);
    return match ? match[0] : null;
}

console.log(findRGBA("This is a color rgba(255, 99, 71, 0.56)")); 
console.log(findRGBA("No color here"));

function findHexColor(text) {
    let hexPattern = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b/; 
    let match = text.match(hexPattern); 
    return match ? match[0] : null; 
}
console.log(findHexColor("Цей текст містить колір #FFA07A і ще один #123.")); 

function findTags(text, tag) {
    const regex = new RegExp(`<${tag}[^>]*>`, 'gi'); 
    return text.match(regex) || [];
}
let a = "<div><img src='image.jpg'/><p>Hello</p><img src='photo.png'/></div>";
let tags = findTags(a, "img");
console.log(tags); 

function findPosNum(text) {
    let numPattern = /\b\d+(\.\d+)?\b/g; 
    let matches = text.match(numPattern); 
    return matches ? matches.map(Number).filter(num => num > 0) : []; 
}
console.log(findPosNum("У мене є 5 яблук, -3 груші та 10.5 кг цукру.")); 

function findDates(text) {
    const regex = /\b\d{4}-\d{2}-\d{2}\b/g;
    return text.match(regex) || [];
}

let s = "Сьогодні 2024-03-26, а завтра буде 2024-03-27. Некоректна дата: 24-03-26.";
let dates = findDates(s);
console.log(dates);

function findEmail(text) {
    let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g; 
    let matches = text.match(emailPattern); 
    return matches || []; 
}
console.log(findEmail("Мій email: example@example.com, а також другий email: test.user123@domain.co.uk.")); 
console.log("salom");

const taymer = setTimeout(() => {
    console.log("hello");
    
}, 2000);

console.log("world");


// const link = document.createElement("link")
// link.rel = "stylesheet"
// link.href = "main.css"
// document.head.appendChild(link)

const taymer2 = setTimeout(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "main.css"
    document.head.appendChild(link)
}, 1999);
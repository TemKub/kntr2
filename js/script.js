//1
function extractNumbers(str) {
    return str
        .split("")
        .filter((item) => item !== "" && !isNaN(item))
        .map((item) => Number(item));
}
console.log(extractNumbers("a1fg5hj6"));

//2
function fibonacci(a=0, b=1) {
    if (a > 144) {
        return ;
    }
    console.log(a);

    setTimeout(() => {
        fibonacci(b,a + b);
    }, 1000);
}
fibonacci();

//3
async function getProducts() {
    try {
        const products = await fetch("https://fakestoreapi.com/products");
        if (!products.ok) {
            throw new Error("Ошибка при получении данных");
        }
        const data = await products.json();
        console.log(data);
    } catch (error) {
        console.log("Произошла ошибка:", error);
    }
}
getProducts();

//4
const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = event.target.textContent
    }
});

//5
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", (event) => {
    menu.classList.toggle("hidden");
})

//6
const counter = document.querySelector(".counter");

let count = 0;

const interval = setInterval(() => {
    count++;

    counter.textContent = count;
    if (count >= 100) {
        clearInterval(interval);
    }
}, 1);
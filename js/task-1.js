const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`)

for (const item of categoriesItems) {
    const title = item.querySelector("h2");
    const countOfItems = item.querySelector("ul").querySelectorAll("li");

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${countOfItems.length}`);
};
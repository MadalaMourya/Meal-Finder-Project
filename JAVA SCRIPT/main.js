let catgmaindiv = document.getElementById("catg-main-div")

async function fetchData() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let categoriesApi = await response.json()
    categoriesApi.categories.forEach((obj) => {
        let catgdiv = document.createElement("div");
        catgdiv.classList.add("catdiv");
        catgdiv.innerHTML = `<h6 class="catg-title">${obj.strCategory}</h6>
        <img class="catg-img" src="${obj.strCategoryThumb}" alt="${obj.strCategoryThumb}">
        `;
        catgmaindiv.appendChild(catgdiv);

    });
    let imgele = Array.from(document.getElementsByClassName("catg-img"));
    imgele.forEach((ele) => {
        ele.addEventListener('click', (event) => {
            document.getElementById("melas").innerHTML = event.target.previousElementSibling.textContent;
        })
    })

}
fetchData();







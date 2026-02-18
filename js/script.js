

const showProducts = () => {
    const hidehome = document.getElementById("home");
    hidehome.innerHTML = "";
    const creatDiv = document.createElement("div")
    creatDiv.innerHTML = `
     <div class="text-center ">
     <h2 class="text-5xl font-bold mb-5">Why choose us</h2>
     <div id="categoryId" class="flex gap-3 flex-wrap justify-center"></div>
     </div>
     <div id="productId" ></div>
     </div>
    `
     document.body.appendChild(creatDiv)
    const loadCatagory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
            .then((data) => displayCategory(data))
        const displayCategory = (categories) => {
            console.log (categories)
           const categoryContainer = document.getElementById("categoryId")
            for (let category of categories) {
                console.log (category)
                const categoryBtn = document.createElement("div")
                categoryBtn.innerHTML = `
                <div >
                <button class="btn ">${category}</button>
                </div>
                `;
                categoryContainer.append(categoryBtn)
            }
        }
}
loadCatagory()
 return
}

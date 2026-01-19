function GetCategories(){
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res) => res.json())
    .then((data) => ShowCatagories(data.categories))
    .catch((error) => console.log('Error:', error));
}

function GetAllPets(){

}

function ShowCatagories(data){
    const catagoryContainer = document.getElementById('Buttons');

    data.forEach((item) => {
        const button = document.createElement('li');
        button.className = 'btn inline-flex items-center px-3 py-3 bg-white border border-gray-200 rounded-2xl w-1/4 h-auto';

        button.innerHTML = `
            <img src="${item.category_icon}" alt="icon" class="w-4/7">
            <p class="m-0">${item.category}</p>
        `;

        catagoryContainer.appendChild(button);
    })
    
}
 


GetCategories();
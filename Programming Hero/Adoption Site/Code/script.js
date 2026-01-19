function GetCategories(){
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res) => res.json())
    .then((data) => ShowCatagories(data.categories))
    .catch((error) => console.log('Error:', error));
}

function GetAllPets(){
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res) => res.json())
    .then((data) => ShowPets(data.pets))
    .catch((error) => console.log('Error:', error));
}

function ShowPets(data){
    const cardContainer = document.getElementById('Cards');

    // console.log(data);
    count = 0;

     data.forEach((item) => {
        CreateCards(item, cardContainer);
        // if(count < 4){
        
        // }
        // else if(count <= 4 && count > 6){

        // }
        // else{ 
        //     // break;
        // }

        count += 1;
    })

}

function CreateCards(item, cardContainer){
    const button = document.createElement('div');

    button.className = 'card bg-base-100 w-96 rounded-lg border-2 border-gray-100';

    button.innerHTML = `
        <figure>
            <img
            src=${item.image}
            class="rounded-2xl p-4"
            alt="pets" />
        </figure>
        <div class="card-body border-b-3 border-gray-200">
            <h2 class="card-title font-bold text-lg">${item.pet_name}</h2>
            <span class="inline-flex gap-2 items-center">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.000000" height="20.000000" fill="none">
                    <rect id="Frame" width="20.000000" height="20.000000" x="0.000000" y="0.000000" fill="rgb(255,255,255)" fill-opacity="0" />
                    <path id="Vector" d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" />
                    <path id="Vector" d="M8.33333 3.33325L8.33333 8.33325L3.33333 8.33325L3.33333 3.33325L8.33333 3.33325Z" fill-rule="nonzero" stroke="rgb(90,90,90)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" />
                    <path id="Vector" d="M16.6667 3.33325L16.6667 8.33325L11.6667 8.33325L11.6667 3.33325L16.6667 3.33325Z" fill-rule="nonzero" stroke="rgb(90,90,90)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" />
                    <path id="Vector" d="M8.33333 11.6667L8.33333 16.6667L3.33333 16.6667L3.33333 11.6667L8.33333 11.6667Z" fill-rule="nonzero" stroke="rgb(90,90,90)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" />
                    <path id="Vector" d="M12.3989 15.9345C12.8677 16.4034 13.5036 16.6667 14.1667 16.6667C14.8297 16.6667 15.4656 16.4034 15.9344 15.9345C16.4033 15.4657 16.6667 14.8298 16.6667 14.1667C16.6667 13.5037 16.4033 12.8678 15.9344 12.399C15.4656 11.9301 14.8297 11.6667 14.1667 11.6667C13.5036 11.6667 12.8677 11.9301 12.3989 12.399C11.9301 12.8678 11.6667 13.5037 11.6667 14.1667C11.6667 14.8298 11.9301 15.4657 12.3989 15.9345Z" fill-rule="nonzero" stroke="rgb(90,90,90)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" />
                </svg>
                <p class="text-gray-500">Breed: ${item.breed}</p>
            </span>
            <p class="text-gray-500 inline-flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                    Age: ${item.date_of_birth}
            </p>

            <p class="text-gray-500 inline-flex gap-2 items-center"> 
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.000000" height="20.000000" opacity="0.699999988" fill="none">
            <rect id="Frame" width="20.000000" height="20.000000" x="0.000000" y="0.000000" fill="rgb(255,255,255)" fill-opacity="0" />
            <path id="Vector" d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" />
            <path id="Vector" d="M0 0L5.83333 0" stroke="rgb(19,19,19)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" transform="matrix(0,1,-1,0,10,11.6666)" />
            <path id="Vector" d="M7.5 15L12.5 15" stroke="rgb(19,19,19)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" />
            <path id="Vector" d="M12.357 5.97631C12.9821 6.60143 13.3333 7.44928 13.3333 8.33333C13.3333 9.21739 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.8841 11.6667 10 11.6667C9.11595 11.6667 8.2681 11.3155 7.64298 10.6904C7.01786 10.0652 6.66667 9.21739 6.66667 8.33333C6.66667 7.44928 7.01786 6.60143 7.64298 5.97631C8.2681 5.35119 9.11595 5 10 5C10.8841 5 11.7319 5.35119 12.357 5.97631Z" fill-rule="nonzero" stroke="rgb(19,19,19)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" />
            <path id="Vector" d="M12.5 2.5C12.5 3.16304 12.2366 3.79893 11.7678 4.26777C11.2989 4.73661 10.663 5 10 5C9.33696 5 8.70107 4.73661 8.23223 4.26777C7.76339 3.79893 7.5 3.16304 7.5 2.5" fill-rule="nonzero" stroke="rgb(19,19,19)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" />
            </svg>
            Gender: ${item.gender}
            </p>

            <p class="text-gray-500 inline-flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Price: $${item.price}
            </p>

            <div class="card-actions justify-center mt-2 mb-0">
                <div class="btn btn-primary bg-white text-gray-500 font-bold text-basegreen-900 border-1 border-gray-200 shadow-0 hover:bg-green-200 hover:text-green-900 hover:border-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                </div>
            <button class="btn btn-primary bg-white text-[#0E7A81] font-bold text-basegreen-900 border-1 border-gray-200 shadow-0 hover:bg-green-200 hover:text-green-900 hover:border-green-500">Adopt</button>
            <button class="btn btn-primary bg-white text-[#0E7A81] font-bold text-basegreen-900 border-1 border-gray-200 shadow-0 hover:bg-green-200 hover:text-green-900 hover:border-green-500">Details</button>
            </div>
        </div>
    `;

    cardContainer.appendChild(button);
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

GetAllPets();
GetCategories();
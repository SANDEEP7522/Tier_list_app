

const tierInput = document.getElementById('tier');
console.log(tierInput);

const submitBtn = document.getElementById('submit');

const imgForm = document.getElementById('img-form');

imgForm.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("form submitted");

    const imgItemInput = document.getElementById('img-item');
    
    const imageUrl = imgItemInput.value;
    console.log(imageUrl);

    createTierListItemUrl(imageUrl);
});

submitBtn.addEventListener('click', (event) => {
    console.log("button is clicked");
    event.preventDefault(); // stops the default behaviour of the event

    // to get access of the element on which this event was fired
    const target = event.target;
    console.log(tierInput.value);

    if (tierInput.value === '') {
        alert('Please enter a tier name');
        return;
    }
    createTierList(tierInput.value);
    tierInput.value = '';
});

function createTierList(tierListName) {
    const newTierList = document.createElement('div');
    newTierList.classList.add('tier-list');

    const heading = document.createElement('h1');
    heading.textContent = tierListName;
    newTierList.appendChild(heading);

    const newTierListItems = document.createElement('div');
    newTierListItems.classList.add('tier-list-items');  
    newTierList.appendChild(newTierListItems); 

    const newTierListItemsForLine = document.createElement('div');
    newTierListItemsForLine.classList.add('line');
    newTierList.appendChild(newTierListItemsForLine);

    const tierSection = document.getElementById('tier-list-section');
    tierSection.appendChild(newTierList);
}

function createTierListItemUrl(imageUrl) {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('item-container');

    const img = document.createElement('img');
    img.src = imageUrl;

    imageDiv.appendChild(img);

    const nonTierSection = document.getElementById('item-section-container');
    nonTierSection.appendChild(imageDiv);
}

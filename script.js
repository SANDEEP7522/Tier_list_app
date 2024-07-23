let currentDtaggedItem;

const tierInput = document.getElementById('tier');
//  console.log(tierInput);

const itemContainers = document.getElementsByClassName('item-container');

const submitTierBtn = document.getElementById('submit-tier');
const submitImgBtn = document.getElementById('submit-img');
const imgForm = document.getElementById('img-form');


for(const itemContainer of itemContainers){
    setUpItemContainerForDrag(itemContainer);
}

 //TierLists.forEach(setUpDropZoneInTierList);


submitImgBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("form submitted");

    const imgItemInput = document.getElementById('img-item');
    if (imgItemInput.value === '') {
     alert('please enter your URL');
     return;   
    }
     const imageUrl = imgItemInput.value;
     createTierListItemUrl(imageUrl);
     imgItemInput.value = '';
   
});

submitTierBtn.addEventListener('click', (event) => {
    console.log("button is clicked");
    event.preventDefault(); // stops the default behaviour of the event

    console.log(tierInput.value);

    if (tierInput.value === '') {
        alert('Please enter a tier name');
        return;// when you give nothing then give the alert
    }
    createTierList(tierInput.value);
    tierInput.value = '';
});

function createTierList(tierListName) {
    const newTierList = document.createElement('div');
    newTierList.classList.add('tier-list');

    const heading = document.createElement('h2');
    heading.textContent = tierListName;
    newTierList.appendChild(heading);

    const newTierListItems = document.createElement('div');
    newTierListItems.classList.add('tier-list-items');  
    newTierList.appendChild(newTierListItems); 

    //  const newTierListItemsForLine = document.createElement('div');
    //  newTierListItemsForLine.classList.add('line');
    // newTierList.appendChild(newTierListItemsForLine);

   const tierSection = document.getElementById('tier-list-section');
    
    if (tierSection) {
        tierSection.appendChild(newTierList);
    } else {
        console.error('tier-list-section element not found');
    }

    
 setUpDropZoneInTierListItem(newTierListItems);

}

function createTierListItemUrl(imageUrl) {
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('draggable', 'ture');
    imageDiv.classList.add('item-container');
 
    setUpItemContainerForDrag(imageDiv);

    const img = document.createElement('img');
    img.src = imageUrl;

    imageDiv.appendChild(img);

    const nonTierSection = document.getElementById('item-section-container');
    
     if (nonTierSection) {
        nonTierSection.appendChild(imageDiv);
    } else {
        console.error('item-section-container element not found');
    }
    
}

function setUpItemContainerForDrag(itemContainer) {
   itemContainer.addEventListener('dragstart', (event) => {
    console.log(event.target.parentNode); // .parentNode to drag&drop parent node  
    currentDtaggedItem = event.target.parentNode;
    });
}

function setUpDropZoneInTierListItem(tierListItems) {
    console.log("setup zone", tierListItems);
    tierListItems.addEventListener('drop', (event) => {
    event.preventDefault(); // stops the default behavier of the event which is to not allow drop

});
    tierListItems.addEventListener('dragover',
      function (event)  {
    console.log("droped over the zone");
   // console.log(event.target);
       //event.target.appendChild(currentDtaggedItem);
    console.log("event coming up", event);  
    if (this !== currentDtaggedItem.parentNode) {
        this.appendChild(currentDtaggedItem);
    }  
 });
}
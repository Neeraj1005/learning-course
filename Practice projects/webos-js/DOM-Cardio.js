// Make a div
const mainDiv = document.createElement('div');

// add a class of wrapper to it
mainDiv.classList.add('wrapper');

// put it into the body
document.body.append(mainDiv);

// make an unordered list
// add three list items with the words "one, two, three" in them
const ulList = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;

// put that list into the above wrapper
mainDiv.innerHTML = ulList;

// create an image
const image = document.createElement('img');
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
image.src = `https://picsum.photos/500`;
image.width = '250';
image.classList.add('cupte');
image.alt = `Cute Puppy`;

// Append that image to the wrapper
mainDiv.append(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const getUlElement = document.querySelector('ul');
// put this div before the unordered list from above
getUlElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const getmyDivSecondParagraph = document.querySelector('.myDiv');
getmyDivSecondParagraph.children[1].classList.add('warning');
// remove the first paragraph
getmyDivSecondParagraph.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height, dataname, buttonName) { 
    const card = `<div class="playerCard">
                    <h2>${name} — ${age}</h2>
                    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
                    <button data-name="${dataname}" class="delete" type="button">&times ${buttonName}</button>
                </div>`;
    return card;

}


// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const mainCards = document.createElement('div');
mainCards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('wes', 12, 150, 'button1', 'button1');
cardsHTML += generatePlayerCard('scott', 12, 150, 'button2', 'button2');
cardsHTML += generatePlayerCard('kait', 12, 150, 'button3', 'button3');
cardsHTML += generatePlayerCard('snickers', 12, 150, 'button4', 'button4');

mainCards.innerHTML = cardsHTML;
// console.log(mainCards);


// append those cards to the mainDiv
// put the div into the DOM just before the wrapper element
mainDiv.insertAdjacentElement('beforebegin',mainCards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(e) { 
    console.log(e.target.textContent);
    alert(e.target.dataset.name);
    const clickedButton = e.currentTarget;
    // clickedButton.closest('.playerCard').remove();    
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));





// /** Below functin is used for delete the alert box */
// const getCommonButton = document.querySelectorAll('button.close');
// // console.log(getCommonButton);
// function deleteAlert(e) { 
//   const clickAlertButton = e.currentTarget;
//   clickAlertButton.closest('.alert').remove();
// }

// // Using Anonoumous function
// // getCommonButton.forEach(function (closeButton) { 
// //   closeButton.addEventListener('click', deleteAlert);
// // });

// //Using arrow function
// getCommonButton.forEach( closeButton => closeButton.addEventListener('click', deleteAlert));

// ///DRY
// // function handleCloseAlertButton(commonCloseButton) {
// //   commonCloseButton.addEventListener('click', deleteAlert)
// // }

// // getCommonButton.forEach(handleCloseAlertButton);


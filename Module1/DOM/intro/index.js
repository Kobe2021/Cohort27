//Grab the element from the DOM
const h1 = document.getElementById('title')
//Change the element properties
h1.style.backgroundColor = 'blue'
h1.style.padding = '20px'
h1.style.color = '#fff';
h1.style.fontSize = '22px'
h1.style.textAlign = 'center'

//Using CSS selectors to query an element
//selecing by a class
const pEl = document.querySelector('.cool')
pEl.textContent = 'Comments for Today:'; //plain text
pEl.style.color = 'red'
pEl.style.fontWeight = 'bold'

console.log(pEl);
console.log(pEl.hasAttribute('class')) //check to see if pEl has a given attribute

//selecting by the id #
const superCoolP = document.querySelector('#super-cool')
superCoolP.innerHTML = 'Comments for <strong>Today</strong>' //innerHTML indetifies the strong tag and takes effect
console.log(superCoolP)

//Return a single element
const h2 = document.querySelector('h2') 
console.log(h2)

//querySelectorAll -> Returns all matching elements
const allH2 = document.querySelectorAll('h2')
console.log(allH2)

console.log(h1)
console.dir(h1) //explore the properties of the element
// console.log(h1);

// function addStyles(element){
//     element.style.backgroundColor = 'red';
//     element.style.padding = '20px';
//     element.style.color = '#fff';
//     element.style.fontSize = '64px';
//     return element;
// }
// addStyles(h1)

//SetAttribute
const a = document.querySelector('a')
a.setAttribute('href', 'http://yahoo.com')

if(a.hasAttribute('href')){
    console.log('Thats true');
} else {
    console.log('No thats false');
}
console.log(a.hasAttribute('href'));

const img = document.querySelector('img')

console.log(img.getAttribute('src'));

img.setAttribute('width', '100px')

//ClassList
const bioP = document.querySelector('#bio')
bioP.classList.add('bioStyles')
console.log(bioP.classList)


//Loop over nodeList
const liArr = document.querySelectorAll('.comment')
console.log(liArr);
for(let li of liArr){
    li.style.fontSize = '20px'
}
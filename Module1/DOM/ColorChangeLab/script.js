const ul = document.getElementById('color-list')
const button = document.getElementById('generate-color')
const button2 = document.getElementById('reset')
const body = document.querySelector('body')

const COLORS_ARRAY = ["red", "yellow", "magenta", "cyan", "blue", "black", "gray", "teal", "green", "purple", "violet"];

button.addEventListener('click', generate)
button2.addEventListener('click', reset)

function generate(){
    const randomColor = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)] //array with an index of math.random to get a random element of the array. Assign it to randomColor
    const li = document.createElement('li') //creating an li element
    li.textContent = randomColor //adding random text thats coming from the randomcolor variable
    ul.appendChild(li) //adding the child(li) to the parent(ul)
    body.style.backgroundColor = randomColor //styling the background with a randomColor variable
  }

  function reset(){
    const children = ul.querySelectorAll('li') //Select all children of the ul
    body.style.backgroundColor = 'white' //set background color to white
    const list = Array.from(children) //turn NodeList to array 
    list.map(list => list.remove())//using loop through the list with map function and remove each item
  }
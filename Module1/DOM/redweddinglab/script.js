// Create Two Functions -> addChild and redWedding
const parentDiv = document.querySelector('.starks')
function addChild(){
    let div = document.createElement('div')
    div.textContent = "Hello"
    parentDiv.appendChild(div)
}
console.dir(parentDiv)
const redWedding = () => {
    const parentDiv = document.querySelector('.starks')
    while(parentDiv.firstChild){
        parentDiv.removeChild(parentDiv.lastChild);

    }
    for(let i = 0; i >= parentDiv.children.length; i++){
        parentDiv.children.removeChild();
    }
}
// Attach functions to buttons
const addChildBtn = document.getElementById('add-child')
const redWeddingBtn = document.getElementById('red-wedding')

addChildBtn.addEventListener('click', addChild)
redWeddingBtn.addEventListener('click', redWedding)
// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)
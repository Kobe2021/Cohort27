console.log('running...');

const commentBtn = document.querySelector('button')
console.log(commentBtn)

commentBtn.addEventListener('click', function(event){
    //Creates a new li element
    const li = document.createElement('li')
    //get the input from the DOM
    const input = document.querySelector('input')
    //set the li textContent to the value of the input
    li.textContent = input.value
    //Append the new li to the list
    document.querySelector('ul').appendChild(li)
    //set input back to empty string
    input.value = ''
})

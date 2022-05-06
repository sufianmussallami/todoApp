let addTodDoButton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')


addTodDoButton.addEventListener('click', ()=>{
  let paragraph = document.createElement('p')
  paragraph.innerText = inputField.value
  paragraph.classList.add('paragraph-styling')
  inputField.value = ''
  toDoContainer.appendChild(paragraph)

  paragraph.addEventListener('click', ()=>{
    paragraph.style.textDecoration = 'line-through'
  })

  
  paragraph.addEventListener('dblclick', ()=>{
    paragraph.style.display = 'none'
  })

  


})
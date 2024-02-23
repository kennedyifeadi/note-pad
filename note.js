
const container = document.querySelector('.contain')
console.log(container);
const addNewBtn = document.querySelector('#add')

function addNewPad(){
const newDiv = document.createElement('div')
newDiv.classList = 'pad-box'
const newForm = document.createElement('form')
newForm.classList = 'pad-form'
const newTextArea = document.createElement('textarea')
newTextArea.classList = 'notePad'
newTextArea.placeholder = "What's On Your Mind...."
const notepadBtn = document.createElement('div')
notepadBtn.classList = 'notepadBtn'
const editBtn = document.createElement('input')
editBtn.type = 'button'
editBtn.classList = 'btn editBtn'
editBtn.value = 'Edit'
// editBtn.id = 'editBtn'
const deleteBtn = document.createElement('input')
deleteBtn.type = 'button'
deleteBtn.classList = 'btn deleteBtn'
deleteBtn.value = 'Delete'
// deleteBtn.id = 'deleteBtn'
notepadBtn.appendChild(editBtn)
notepadBtn.appendChild(deleteBtn)
newForm.appendChild(newTextArea)
newForm.appendChild(notepadBtn)
newDiv.appendChild(newForm)
container.insertBefore(newDiv, addNewBtn)
console.log(container);
    
}


const deleteElement = document.querySelectorAll('.deleteBtn').forEach(delEle =>{
    delEle.addEventListener('click', (e)=>{
        console.log(e.target);
    })
})
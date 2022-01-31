// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#add-btn')
let input = document.querySelector('#new-todo')

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}


// write your code here
// 1. add new todo - event object, this 加在add button上
addBtn.addEventListener('click', function(){
  let inputValue = input.value
  if (inputValue.length > 0) {
    addItem(inputValue) 
  }
})

// 2. delete todo 事件委託
list.addEventListener('click', function(event) {
  let target = event.target
  if (target.classList.contains('delete')) {
    let parentElement = target.parentElement
    parentElement.remove()
  } else if (target.tagName === 'LABEL') {
    target.classList.toggle('checked')
  }
})

// 3. 切換做完與否 下條件限縮事件作用的範圍
  

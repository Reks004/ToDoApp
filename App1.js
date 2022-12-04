const addItems = document.querySelector('.add');
const masterList = document.querySelector('.todos');

//add todo function
const addNewTodo = (item) =>{
    let itemHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>`;
    masterList.innerHTML += itemHTML;

}

//filter todo function
const filterTodo = (i) =>{
    Array.from(toDoList.children)
    .filter( (item) => {
       return !item.textContent.includes(i.value.trim());
    })
    .forEach( (item) => {
        item.classList.add('filtered');
        console.log(item)
    });

    Array.from(toDoList.children)
    .filter( (item) => {
       return item.textContent.includes(i.value.trim());
    })
    .forEach( (item) => {
        item.classList.remove('filtered');
        console.log(item);
    });
}

//add todo
addItems.addEventListener('submit', e => {   
    e.preventDefault();
    const newToDo = addItems.add.value.trim();
    if(newToDo.length >= 1){
        addNewTodo(newToDo);
        addItems.reset();
    }
});

const removeTodo = (item) => {
    item.remove();

};
//remove todo
const toDoList = document.querySelector('.todos');
toDoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();    
    }
});


const searchItem = document.querySelector('.search input');
searchItem.addEventListener('keyup', e => {
    filterTodo(searchItem);
});





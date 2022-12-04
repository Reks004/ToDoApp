console.log('server started');

const itemBox = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

//Add todo function
const insertNewItem = (item) => {
    
    const newItemHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    
    console.log(newItemHTML);

    todoList.innerHTML += newItemHTML;
    itemBox.reset();

};



//Add todo
itemBox.addEventListener('submit', e => {
    e.preventDefault();
    const newItem = itemBox.add.value.trim();    
    insertNewItem(newItem);
});

//Delete todo
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});

//Search todos

search.addEventListener('keyup', (e) => {
    const searchItem = search.value;
    //console.log(Array.from(todoList.children));
    //Adding Filtered class
    console.log(Array.from(todoList.children));
    Array.from(todoList.children)
    .filter( (item) => {
        //console.log(item.textContent.includes(searchItem));
        
        return !item.textContent.includes(searchItem);
        
    })
    .forEach((item) => {
        item.classList.add('filtered');
    });

    
    //console.log(Array.from(todoList.children).classList);
    //Removing Filtered class
    Array.from(todoList.children)
    .filter( (item) => {
        //console.log(item.textContent.includes(searchItem));
        return item.textContent.includes(searchItem);
    })
    .forEach((item) => {
        item.classList.remove('filtered');
        
    });


});

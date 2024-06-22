var Celtics = {name:"Champs", breed:"GOAT", color:"green"};

var JSONstring=JSON.stringify(Celtics);
document.getElementById("Celtics").innerHTML=JSONstring;

//Json parse method//
var obj=JSON.parse('{"firstName":"Valter","lastName":"Fernandes"}');
document.getElementById("Parse").innerHTML=obj.firstName;
document.getElementById("demo").innerHTML=obj.lastName;

//LocalStorage property//
localStorage.setItem("NBA champs","Celtics");
//Retrieve
document.getElementById("Champs").innerHTML=localStorage.getItem("NBA champs");

/*This function gets the task from input*/
function get_todos() {
    /*This creates an array of tasks that are inputted*/
    var todos = new Array;
    /*This pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will communicate
    with the web browser to make the task a JavaScript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputted task to the get_todos function array*/
function add() {
    /*This takes the inputted task and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*This adds a new task to the end of the array*/
    todos.push(task);
    /*This converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/*This function removes a task from the array*/
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

/*this function keeps the task permanently displayed on the screen*/
function show() {
    /*This sets the task that was retrieved as a variable*/
    var todos = get_todos();

    /*This sets up each task as an unordered list*/
    var html = '<ul>';
    /*This displays a task to the list in the order that it is inputted*/
    for (var i = 0; i < todos.length; i++) {
        /*This also displays the task as a list and creates the button with "x"*/
        html += '<li>' + todos[i] + ' <button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    /*This displays the task as a list*/
    document.getElementById('todos').innerHTML = html;

    /*This adds event listeners to all remove buttons*/
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

/*This displays the inputted task when the 'add item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*This will keep the inputs displayed permanently on the screen*/
show();

/* this creates the functionality of removing a todo item from the array */
function remove() {
    var id=this.getAttribute('id');
    var todos=get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    /*this looks in the show() how to display a removed item on the screen*/
    show();

    return false;
}

/*This tells the browser how to display the todo array after an item has been removed*/
var buttons=document.getElementsByClassName('remove');
for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',remove);
};

var idCount = 0;
var todos = [];

function addTodo() {
    var inpVal = document.getElementById('inp');

    if (inpVal.value.trim() === "") {
        alert("Please add Todo Task!");
        return;
    }

    todos.push({
        id: idCount,
        title: inpVal.value
    });

    render();
    inpVal.value = "";
    idCount++;
}

function render() {
    var todoElem = document.getElementById('todos');
    todoElem.innerHTML = "";

    for (var i = 0; i < todos.length; i++) {
        var elem = document.createElement('div');
        var textElem = document.createElement('p');
        var deleteButton = document.createElement('button');
        var updateButton = document.createElement('button');

        textElem.textContent = todos[i].title;
        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update";

        elem.setAttribute("id", todos[i].id);
        elem.setAttribute("class", "todo");

        deleteButton.setAttribute("onclick", `deleteTodo(${todos[i].id})`);
        updateButton.setAttribute("onclick", `updateTodo(${todos[i].id})`);

        elem.appendChild(textElem);
        elem.appendChild(deleteButton);
        elem.appendChild(updateButton);
        todoElem.appendChild(elem);
    }
}

function deleteTodo(id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos.splice(i, 1);
            break;
        }
    }
    render();
}

function updateTodo(id) {
    var inpVal = document.getElementById('inp');
    if (inpVal.value.trim() === "") {
        alert("Updated Todo cannot be empty!");
        return;
    }

    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i].title = inpVal.value;
            break;
        }
    }

    render();
    inpVal.value = "";
}

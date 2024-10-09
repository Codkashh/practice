class Todo{
    constructor(){
        this.todos = [];
    }

    add(smthng){
        this.todos.push(smthng);
    }

    remove(indexOfTodo){
        if(indexOfTodo < 0 || indexOfTodo >= this.todos.length){
            throw new Error("invalid index");
            return;
        }
        this.todos.splice(indexOfTodo,1);
    }

    update(index, newTodo){
        if(index < 0 || index >= this.todos.length){
            return;
        }
        this.todos[index] = newTodo;
    }

    getAll() {
        return this.todos;
    }

    get(indexOfTodo){
        if(indexOfTodo < 0 || indexOfTodo >= this.todos.length){
            return null;
        }
        return this.todos[indexOfTodo];
    }

    clear(){
        this.todos = [];
    }

}
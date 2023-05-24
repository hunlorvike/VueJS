var app = new Vue({
    el: "#container",
    data: {
        newTodo: "",
        todos: [],
    },
    methods: {
        addTodo() {
            if (this.newTodo !== "") {
                var id = this.todos.length + 1;
                this.todos.push({ id: id, value: this.newTodo, status: false });
                this.newTodo = "";
            }
        },
        completed(todo){
            todo.status = !todo.status;
        },
        removeTodo(todo) {
            this.todos.splice(todo, 1);
        },
        removeAllTodo() {
            this.todos = [];
        },
    }
});
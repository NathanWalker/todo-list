var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var todo_model_1 = require("../models/todo-model");
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new todo_model_1.TodoModel('read parenting books :)'),
            new todo_model_1.TodoModel('master Angular 2'),
            new todo_model_1.TodoModel('develop more projects using rxJS and Redux'),
            new todo_model_1.TodoModel('master typescript'),
            new todo_model_1.TodoModel('watch video tutorials'),
            new todo_model_1.TodoModel('play with Java'),
            new todo_model_1.TodoModel('build a robot'),
            new todo_model_1.TodoModel('shower my dog', 'Completed'),
            new todo_model_1.TodoModel('grocery shopping', 'Completed'),
            new todo_model_1.TodoModel('master Javascript', 'Completed'),
            new todo_model_1.TodoModel('master CSS', 'Completed'),
            new todo_model_1.TodoModel('master HTML5', 'Completed'),
            new todo_model_1.TodoModel('master AJAX', 'Completed'),
            new todo_model_1.TodoModel('master Laravel 5+', 'Completed'),
        ];
    }
    TodoService.prototype.addTodo = function (todo) {
        this.todos = this.todos.concat([todo]);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        var status = todo.status == 'Started' ? 'Completed' : 'Started';
        var toggledTodo = Object.assign({}, todo, { status: status });
        var index = this.todos.indexOf(todo);
        this.todos = this.todos.slice(0, index).concat([
            toggledTodo
        ], this.todos.slice(index + 1));
        console.log(this.todos);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
})();
exports.TodoService = TodoService;

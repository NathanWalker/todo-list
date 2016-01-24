import {Injectable} from "angular2/core";
import {TodoModel} from "../models/todo-model";

@Injectable()
export class TodoService {
    todos =[
        new TodoModel('read parenting books :)'),
        new TodoModel('master Angular 2'),
        new TodoModel('develop more projects using rxJS and Redux'),
        new TodoModel('master typescript'),
        new TodoModel('watch video tutorials'),
        new TodoModel('play with Java'),
        new TodoModel('build a robot'),
        new TodoModel('shower my dog','Completed'),
        new TodoModel('grocery shopping','Completed'),
        new TodoModel('master Javascript','Completed'),
        new TodoModel('master CSS','Completed'),
        new TodoModel('master HTML5','Completed'),
        new TodoModel('master AJAX','Completed'),
        new TodoModel('master Laravel 5+','Completed'),


    ]

    addTodo(todo:TodoModel){
        this.todos = [...this.todos,todo];
    }

    toggleTodo(todo:TodoModel){
        const status = todo.status == 'Started' ? 'Completed' : 'Started';
        const toggledTodo = Object.assign({},todo,{status : status});
        const index = this.todos.indexOf(todo);
        this.todos =[
            ...this.todos.slice(0,index),
            toggledTodo,
            ...this.todos.slice(index+1)
        ];
        console.log(this.todos);

    }
}
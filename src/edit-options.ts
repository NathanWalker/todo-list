import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector:'edit-options',
  template:`<div class="contact-edit">
        <button class="btn btn-default btn-edit" (click)="editPerson.emit(editNow())"><span class="glyphicon glyphicon-plus"></span></button>
        <button class="btn btn-default">Edit</button>
      </div>`
})
export class EditOptions {
  editing = false;
  editNow(){
    return !this.editing;
  }
  @Output() editPerson= new EventEmitter();
}

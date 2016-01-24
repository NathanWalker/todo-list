import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
  selector: 'contact-list',
  template: `
  <h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Contacts</h3>
      <div *ngFor="#group of contactGroups" class="contact-list">
        <h4 class="small">{{group.letter}}</h4>
        <div class="list-group">
          <button
              *ngFor="#contact of group.contacts"
              (click)="personSelected.emit(contact)"
              type="button"
              class="list-group-item"
              >{{contact.name.last}}, {{contact.name.first}}</button>
        </div>
      </div>`
})
export class ContactList {
  @Input() contactGroups;
  @Output() personSelected = new EventEmitter();


}

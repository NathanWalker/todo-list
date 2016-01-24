var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ContactList = (function () {
    function ContactList() {
        this.personSelected = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactList.prototype, "contactGroups", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactList.prototype, "personSelected", void 0);
    ContactList = __decorate([
        core_1.Component({
            selector: 'contact-list',
            template: "\n  <h3><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Contacts</h3>\n      <div *ngFor=\"#group of contactGroups\" class=\"contact-list\">\n        <h4 class=\"small\">{{group.letter}}</h4>\n        <div class=\"list-group\">\n          <button\n              *ngFor=\"#contact of group.contacts\"\n              (click)=\"personSelected.emit(contact)\"\n              type=\"button\"\n              class=\"list-group-item\"\n              >{{contact.name.last}}, {{contact.name.first}}</button>\n        </div>\n      </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactList);
    return ContactList;
})();
exports.ContactList = ContactList;

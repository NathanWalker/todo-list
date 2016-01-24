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
var ContactCard = (function () {
    function ContactCard() {
        this.personSelected = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactCard.prototype, "personSelected", void 0);
    ContactCard = __decorate([
        core_1.Component({
            selector: 'contact-card',
            template: "      <div class=\"contact-details\">\n        <div class=\"contact-title-holder\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <img src=\"assets/images/avatar.png\" class=\"avatar\" />\n            </div>\n            <div class=\"media-body media-middle\">\n              <h2 class=\"title\">{{personSelected.name.first}} {{personSelected.name.last}}</h2>\n              <h5 class=\"subtitle\">{{personSelected.company}}</h5>\n            </div>\n          </div>\n        </div>\n        <dl class=\"dl-horizontal\">\n          <dt>home:</dt>\n          <dd>{{personSelected.phone}}</dd>\n          <dt>address:</dt>\n          <dd>{{personSelected.address.streetAddress}}</dd>\n          <dd>{{personSelected.address.city}}, {{personSelected.address.state}} {{personSelected.address.zipCode}}</dd>\n          <dt>email:</dt>\n          <dd>{{personSelected.email}}</dd>\n        </dl>\n      </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactCard);
    return ContactCard;
})();
exports.ContactCard = ContactCard;

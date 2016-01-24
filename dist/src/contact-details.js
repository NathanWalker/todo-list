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
var ContactDetails = (function () {
    function ContactDetails() {
        this.avatar = 'assets/images/avatar.png';
        this.company = 'Google Inc.';
        this.name = 'Adam Apple';
        this.address = {
            street: '123 main st',
            city: 'San Francisco',
            state: 'CA',
            zip: '78701'
        };
        this.email = 'max@maxcabrera.com';
        this.phone = '512-902-0912';
    }
    ContactDetails = __decorate([
        core_1.Component({
            selector: 'contact-details',
            template: "\n  <div class=\"contact-details\">\n        <div class=\"contact-title-holder\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <img [src]=\"avatar\" class=\"avatar\" />\n            </div>\n            <div class=\"media-body media-middle\">\n              <h2 class=\"title\">{{name}}</h2>\n              <h5 class=\"subtitle\">{{company}}</h5>\n            </div>\n          </div>\n        </div>\n\n        <dl class=\"dl-horizontal\">\n          <dt>home:</dt>\n          <dd>{{phone}}</dd>\n          <dt>address:</dt>\n          <dd>{{address.street}} </dd>\n          <dd>{{address .city}}, {{address.state}} {{address.zip}}</dd>\n          <dt>email:</dt>\n          <dd>{{email}}</dd>\n        </dl>\n\n      </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactDetails);
    return ContactDetails;
})();
exports.ContactDetails = ContactDetails;

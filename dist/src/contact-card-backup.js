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
        this.person = {};
        /* playing with style */
        this.compClass = 'light';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactDetails.prototype, "person", void 0);
    ContactDetails = __decorate([
        core_1.Component({
            selector: 'contact-card',
            styles: ["\n    .light {\n      font-weight: 300\n    }\n\n    .bold {\n      font-weight: bold;\n    }\n    "
            ],
            template: "\n  <div class=\"contact-details\">\n        <div class=\"contact-title-holder\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <img [src]=\"person.avatar\" class=\"avatar\" />\n            </div>\n            <div class=\"media-body media-middle\">\n              <h2 class=\"title\"\n              [ngClass]=\"compClass\"\n              (mouseover)=\"compClass = 'bold'\"\n              (mouseout)=\"compClass='light'\"\n              >{{person.name.first}} {{person.name.last}}</h2>\n              <h5 class=\"subtitle\">{{person.company}}</h5>\n            </div>\n          </div>\n        </div>\n\n        <dl class=\"dl-horizontal\">\n          <dt>home:</dt>\n          <dd>{{person.phone}}</dd>\n          <dt>address:</dt>\n          <dd>{{person.address.street}} </dd>\n          <dd>{{person.address.city}}, {{person.address.state}} {{person.address.zip}}</dd>\n          <dt>email:</dt>\n          <dd>{{person.email}}</dd>\n        </dl>\n\n      </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactDetails);
    return ContactDetails;
})();
exports.ContactDetails = ContactDetails;

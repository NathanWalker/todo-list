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
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.loadPeople = function () {
        var _this = this;
        this.http.get('http://localhost:3000/people')
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            _this.people = result
                .reduce(function (acc, curr) {
                var letter = curr.name.last.substr(0, 1);
                var i = acc.findIndex(function (elm) { return elm.letter === letter; });
                if (i > -1)
                    acc[i].contacts.push(curr);
                else
                    acc.push({ letter: letter, contacts: [curr] });
                return acc;
            }, [])
                .sort(function (a, b) {
                if (a.letter > b.letter)
                    return 1;
                if (a.letter < b.letter)
                    return -1;
                return 0;
            });
        });
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactService);
    return ContactService;
})();
exports.ContactService = ContactService;

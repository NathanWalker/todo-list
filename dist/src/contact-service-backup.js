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
var ContactService = (function () {
    function ContactService() {
        this.people = [
            {
                "letter": "B",
                "contacts": [
                    {
                        "id": 8,
                        "name": {
                            "first": "Royal",
                            "last": "Bergnaum"
                        },
                        "email": "Elouise.Cassin@hotmail.com",
                        "username": "Omer.Rohan40",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/geran7/128.jpg",
                        "company": "Witting Group",
                        "address": {
                            "streetAddress": "492 Florencio Views",
                            "city": "East Arnaldo",
                            "state": "Alabama",
                            "zipCode": "70837"
                        },
                        "phone": "925-111-8049",
                        "bs": "distributed optimize portals",
                        "lorem": "Inventore magnam sequi delectus magni nemo qui placeat.\nQuod dolor dolores illo.\nUt fugiat porro.\nAut aut a ipsum placeat.\nOmnis voluptatem alias impedit officiis."
                    },
                    {
                        "id": 10,
                        "name": {
                            "first": "Wade",
                            "last": "Bode"
                        },
                        "email": "Felicita_Gibson67@hotmail.com",
                        "username": "Louvenia_Bogisich58",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/solid_color/128.jpg",
                        "company": "Towne, Haley and Kuhn",
                        "address": {
                            "streetAddress": "1353 Feeney Pines",
                            "city": "Cortez bury",
                            "state": "Maine",
                            "zipCode": "36675-9915"
                        },
                        "phone": "1-714-762-8268 x200",
                        "bs": "proactive extend networks",
                        "lorem": "Nisi est architecto voluptas.\nVoluptatibus consequatur dicta qui voluptatum dolores rerum enim saepe quia.\nLibero provident eos earum ducimus odit ab illo quasi.\nNulla sunt in at et et omnis dolores illum molestiae."
                    }
                ]
            },
            {
                "letter": "C",
                "contacts": [
                    {
                        "id": 6,
                        "name": {
                            "first": "Bridgette",
                            "last": "Corwin"
                        },
                        "email": "Darrel_Ratke71@hotmail.com",
                        "username": "Constantin84",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg",
                        "company": "Leuschke - Moore",
                        "address": {
                            "streetAddress": "1884 Bethany Path",
                            "city": "East Aaron bury",
                            "state": "Pennsylvania",
                            "zipCode": "75690"
                        },
                        "phone": "506.574.0225 x352",
                        "bs": "front-end innovate platforms",
                        "lorem": "Dignissimos velit ipsum aut dolores aspernatur.\nEt repudiandae deleniti.\nIn vitae non modi qui.\nNecessitatibus deserunt dignissimos vitae odio ratione aut ut quia voluptatem."
                    },
                    {
                        "id": 11,
                        "name": {
                            "first": "Sheridan",
                            "last": "Cummerata"
                        },
                        "email": "Owen.Collier82@yahoo.com",
                        "username": "Daphnee47",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/areandacom/128.jpg",
                        "company": "Armstrong and Sons",
                        "address": {
                            "streetAddress": "2279 Florence Pass",
                            "city": "North Shawn mouth",
                            "state": "Idaho",
                            "zipCode": "73499"
                        },
                        "phone": "(382) 239-4163",
                        "bs": "sexy brand partnerships",
                        "lorem": "Voluptate neque non sit cupiditate.\nDicta ad qui et nesciunt.\nVelit sint ullam.\nRerum error velit rem sapiente.\nTotam cupiditate rem harum nesciunt deserunt minima ducimus et.\nUt cumque iste numquam."
                    }
                ]
            },
            {
                "letter": "D",
                "contacts": [
                    {
                        "id": 18,
                        "name": {
                            "first": "Baron",
                            "last": "Daugherty"
                        },
                        "email": "Tianna84@gmail.com",
                        "username": "Turner.Gleason",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andrewarrow/128.jpg",
                        "company": "Zieme, Parker and Schuppe",
                        "address": {
                            "streetAddress": "97445 Christopher Rest",
                            "city": "East Fletcher borough",
                            "state": "Vermont",
                            "zipCode": "62661"
                        },
                        "phone": "1-561-868-0433",
                        "bs": "cutting-edge matrix relationships",
                        "lorem": "Assumenda porro non eius quo placeat quia quo quam.\nQuod enim commodi.\nConsequatur officiis ipsa nobis."
                    }
                ]
            },
            {
                "letter": "F",
                "contacts": [
                    {
                        "id": 5,
                        "name": {
                            "first": "Dayana",
                            "last": "Fadel"
                        },
                        "email": "Eleazar57@hotmail.com",
                        "username": "Andreane_Lubowitz79",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/fiterik/128.jpg",
                        "company": "Bradtke - Wyman",
                        "address": {
                            "streetAddress": "113 Vito Roads",
                            "city": "Meredith haven",
                            "state": "Iowa",
                            "zipCode": "29143-3873"
                        },
                        "phone": "883-163-1962 x99509",
                        "bs": "dynamic target synergies",
                        "lorem": "Magnam architecto aut sit excepturi.\nOccaecati quidem quo minima facilis ea molestias.\nRepudiandae explicabo velit.\nTenetur aut qui molestias alias quo quaerat explicabo.\nDistinctio qui quo et voluptatem veniam totam accusamus."
                    }
                ]
            },
            {
                "letter": "G",
                "contacts": [
                    {
                        "id": 2,
                        "name": {
                            "first": "Nella",
                            "last": "Grady"
                        },
                        "email": "Geovanny_Bartoletti56@gmail.com",
                        "username": "Arjun_Nicolas",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/low_res/128.jpg",
                        "company": "O'Connell LLC",
                        "address": {
                            "streetAddress": "8730 Karlee Isle",
                            "city": "Cartwright bury",
                            "state": "Louisiana",
                            "zipCode": "70098-9461"
                        },
                        "phone": "(838) 994-9088 x6280",
                        "bs": "impactful enable e-services",
                        "lorem": "Dolor esse facere perspiciatis eaque quisquam totam.\nProvident pariatur voluptatem quibusdam ut eos id voluptas adipisci.\nVelit non qui.\nEx odio amet sit molestiae quisquam et ea odit voluptate."
                    },
                    {
                        "id": 12,
                        "name": {
                            "first": "Nathen",
                            "last": "Gerlach"
                        },
                        "email": "Gretchen_Abshire@yahoo.com",
                        "username": "Lorena_Emmerich15",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/victor_haydin/128.jpg",
                        "company": "Hoeger, Collins and Hirthe",
                        "address": {
                            "streetAddress": "70016 Hodkiewicz Mission",
                            "city": "Emmerich land",
                            "state": "Michigan",
                            "zipCode": "61131"
                        },
                        "phone": "539-371-1314 x59929",
                        "bs": "open-source transition convergence",
                        "lorem": "Velit aliquam aut et earum.\nDolor magni consectetur ut perspiciatis.\nId ab aut quas quis et blanditiis dicta sapiente quasi."
                    },
                    {
                        "id": 19,
                        "name": {
                            "first": "Maida",
                            "last": "Goyette"
                        },
                        "email": "Bertha.Bednar53@gmail.com",
                        "username": "Florence64",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/chrismj83/128.jpg",
                        "company": "Welch LLC",
                        "address": {
                            "streetAddress": "73210 Connor Meadow",
                            "city": "New Asha bury",
                            "state": "Oregon",
                            "zipCode": "34348-3115"
                        },
                        "phone": "(017) 731-8555 x0011",
                        "bs": "24/7 benchmark infrastructures",
                        "lorem": "Dolores delectus occaecati quam expedita atque ut omnis ab vel.\nEst natus eligendi pariatur.\nSit fugiat necessitatibus quos a asperiores voluptatibus.\nUt aut aut provident consequatur tempora officiis voluptatem numquam.\nQui porro itaque sint."
                    }
                ]
            },
            {
                "letter": "L",
                "contacts": [
                    {
                        "id": 15,
                        "name": {
                            "first": "Garnett",
                            "last": "Lowe"
                        },
                        "email": "Carlie58@yahoo.com",
                        "username": "Kobe.Waelchi",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vimarethomas/128.jpg",
                        "company": "Kautzer, Reichel and O'Kon",
                        "address": {
                            "streetAddress": "8879 Gage Alley",
                            "city": "East Kenna",
                            "state": "Hawaii",
                            "zipCode": "04311-2041"
                        },
                        "phone": "(477) 753-2243",
                        "bs": "clicks-and-mortar brand e-tailers",
                        "lorem": "Et impedit est magnam qui nisi minus.\nId eveniet eum possimus.\nQuo sunt eligendi quas dolor reprehenderit soluta vero ut pariatur.\nEnim minus et eligendi nobis velit."
                    }
                ]
            },
            {
                "letter": "M",
                "contacts": [
                    {
                        "id": 1,
                        "name": {
                            "first": "Giovanny",
                            "last": "Mraz"
                        },
                        "email": "Rodger.Smitham@hotmail.com",
                        "username": "Gunnar37",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ryhanhassan/128.jpg",
                        "company": "Stark - Little",
                        "address": {
                            "streetAddress": "95930 Jaquelin Inlet",
                            "city": "New Muriel berg",
                            "state": "Arizona",
                            "zipCode": "46757"
                        },
                        "phone": "232-269-2862 x405",
                        "bs": "integrated monetize channels",
                        "lorem": "Eius expedita ut omnis soluta fuga veritatis voluptatem vitae.\nSoluta suscipit provident itaque ex autem molestiae aut debitis culpa.\nVoluptatibus id eos vitae qui temporibus sint quasi."
                    },
                    {
                        "id": 9,
                        "name": {
                            "first": "Jarod",
                            "last": "Murphy"
                        },
                        "email": "Ervin62@hotmail.com",
                        "username": "Art_Hirthe",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg",
                        "company": "Brown - Murazik",
                        "address": {
                            "streetAddress": "272 Schowalter Bypass",
                            "city": "New Theresia",
                            "state": "West Virginia",
                            "zipCode": "09471"
                        },
                        "phone": "706.765.3999",
                        "bs": "wireless leverage technologies",
                        "lorem": "Neque cum et commodi.\nRecusandae consequatur cum molestias id sed occaecati.\nOmnis aliquam quo.\nEum qui hic reprehenderit quaerat veniam esse quia.\nModi esse quisquam nihil impedit ut voluptates molestiae.\nLaboriosam praesentium expedita."
                    },
                    {
                        "id": 17,
                        "name": {
                            "first": "Rodolfo",
                            "last": "MacGyver"
                        },
                        "email": "Kory.Rau@gmail.com",
                        "username": "Kendra.Wiza46",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vladimirdevic/128.jpg",
                        "company": "Schumm - Bode",
                        "address": {
                            "streetAddress": "727 Justyn Way",
                            "city": "North Donnell",
                            "state": "Rhode Island",
                            "zipCode": "58715-2928"
                        },
                        "phone": "832-105-2883",
                        "bs": "virtual maximize paradigms",
                        "lorem": "Repudiandae dolores est illum in nihil sit repellat officiis qui.\nQuos rerum harum animi magnam dolorem ex quia quo.\nNeque sit laboriosam sed numquam qui."
                    }
                ]
            },
            {
                "letter": "N",
                "contacts": [
                    {
                        "id": 4,
                        "name": {
                            "first": "Alexandrine",
                            "last": "Nicolas"
                        },
                        "email": "Hilma.Reilly@gmail.com",
                        "username": "Emmanuelle60",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/picard102/128.jpg",
                        "company": "Rodriguez, Kuvalis and Rippin",
                        "address": {
                            "streetAddress": "514 Vandervort Manor",
                            "city": "Doyle borough",
                            "state": "Florida",
                            "zipCode": "82586"
                        },
                        "phone": "237-372-1167",
                        "bs": "holistic brand web-readiness",
                        "lorem": "Repellat sunt harum ut facilis aperiam quod.\nSapiente doloribus et molestias voluptatum harum pariatur quia aut eaque.\nEx nemo et veniam harum ut tenetur doloribus.\nNemo voluptatem error soluta quo ex natus ut dicta.\nItaque ea et est.\nQui non voluptas."
                    }
                ]
            },
            {
                "letter": "O",
                "contacts": [
                    {
                        "id": 16,
                        "name": {
                            "first": "Bryce",
                            "last": "Okuneva"
                        },
                        "email": "Jeff_Zieme@hotmail.com",
                        "username": "Karl82",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mslarkina/128.jpg",
                        "company": "Huels - Kassulke",
                        "address": {
                            "streetAddress": "680 Prohaska Ville",
                            "city": "Mable port",
                            "state": "New Jersey",
                            "zipCode": "80495"
                        },
                        "phone": "1-596-616-1723",
                        "bs": "value-added enhance portals",
                        "lorem": "Harum culpa eius quia.\nQuisquam nemo accusantium voluptas dolorem.\nRatione perspiciatis aut cumque aut et voluptas possimus qui."
                    }
                ]
            },
            {
                "letter": "R",
                "contacts": [
                    {
                        "id": 3,
                        "name": {
                            "first": "Jevon",
                            "last": "Reynolds"
                        },
                        "email": "Porter81@yahoo.com",
                        "username": "Retha_Denesik78",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ahmadajmi/128.jpg",
                        "company": "Hane - Glover",
                        "address": {
                            "streetAddress": "760 Bertram Ports",
                            "city": "Cortney bury",
                            "state": "Nebraska",
                            "zipCode": "97085"
                        },
                        "phone": "1-019-618-1006 x56661",
                        "bs": "cross-platform optimize web services",
                        "lorem": "Sed atque dolores quo harum accusamus officiis adipisci consequatur ut.\nVero reiciendis rem.\nEos qui et inventore vitae et omnis quod voluptatem.\nVitae occaecati dolores voluptas nesciunt possimus est vero aliquid.\nAliquid dolore omnis harum adipisci qui labore consequatur recusandae ipsam.\nEveniet sit consequuntur cumque nemo repellendus sequi ex."
                    },
                    {
                        "id": 14,
                        "name": {
                            "first": "Paris",
                            "last": "Ratke"
                        },
                        "email": "Nannie.Rippin0@hotmail.com",
                        "username": "Kelton.Kemmer55",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/geneseleznev/128.jpg",
                        "company": "Trantow and Sons",
                        "address": {
                            "streetAddress": "1051 Pfeffer Greens",
                            "city": "Brandon chester",
                            "state": "Rhode Island",
                            "zipCode": "11477-2522"
                        },
                        "phone": "(908) 864-7620",
                        "bs": "magnetic disintermediate convergence",
                        "lorem": "Qui rerum eaque omnis deserunt et.\nDebitis repellendus doloremque sit impedit perspiciatis aut et.\nEt totam excepturi ullam.\nDebitis nihil tempora dolorem impedit molestiae voluptate possimus minima eligendi.\nSoluta quas dignissimos molestiae est qui esse quia facilis eum."
                    }
                ]
            },
            {
                "letter": "S",
                "contacts": [
                    {
                        "id": 0,
                        "name": {
                            "first": "Ahmed",
                            "last": "Schaden"
                        },
                        "email": "Agustina_Tillman22@yahoo.com",
                        "username": "Loyal77",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ipavelek/128.jpg",
                        "company": "Durgan Group",
                        "address": {
                            "streetAddress": "77829 Gleichner Ville",
                            "city": "Borer fort",
                            "state": "Kansas",
                            "zipCode": "97644-1904"
                        },
                        "phone": "500.127.6877 x06230",
                        "bs": "end-to-end revolutionize supply-chains",
                        "lorem": "Vel dolorem amet expedita.\nNulla harum mollitia id accusamus voluptas.\nVoluptate aliquid tempora laboriosam porro totam ea nemo.\nEnim repellendus minima aut accusamus."
                    }
                ]
            },
            {
                "letter": "W",
                "contacts": [
                    {
                        "id": 7,
                        "name": {
                            "first": "Vivienne",
                            "last": "Willms"
                        },
                        "email": "Lulu_Zieme89@gmail.com",
                        "username": "Joey_Gislason98",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/pcridesagain/128.jpg",
                        "company": "Schiller, Maggio and Cummerata",
                        "address": {
                            "streetAddress": "39403 Daniel Drive",
                            "city": "New Julius",
                            "state": "Wisconsin",
                            "zipCode": "78573-7971"
                        },
                        "phone": "(109) 046-3693 x342",
                        "bs": "extensible productize bandwidth",
                        "lorem": "Voluptatibus qui aut architecto.\nRerum nemo ut.\nQuaerat porro dolorem rerum commodi quis ut earum recusandae.\nCorrupti ipsum velit magni et blanditiis aut."
                    },
                    {
                        "id": 13,
                        "name": {
                            "first": "Vicky",
                            "last": "Waters"
                        },
                        "email": "Monroe_Gulgowski@yahoo.com",
                        "username": "Dangelo_Gutkowski",
                        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg",
                        "company": "Nikolaus, Marvin and Boyle",
                        "address": {
                            "streetAddress": "126 Little Causeway",
                            "city": "Port Verna",
                            "state": "Minnesota",
                            "zipCode": "43316-4779"
                        },
                        "phone": "1-161-132-0220",
                        "bs": "24/365 leverage communities",
                        "lorem": "Corporis hic non odit.\nReiciendis incidunt repudiandae exercitationem non animi velit vitae sequi perspiciatis.\nRatione magni quia magnam qui et nam illum.\nConsequatur nulla sunt.\nNemo aliquid necessitatibus maiores adipisci sed velit repellendus.\nNulla sint assumenda."
                    }
                ]
            }
        ];
    }
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactService);
    return ContactService;
})();
exports.ContactService = ContactService;

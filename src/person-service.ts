import {Injectable} from "angular2/core";

@Injectable()
export class PersonService {
  person = {
    avatar : 'assets/images/avatar.png',
    company : 'Google Inc.',
    name : {
      first : 'Adam',
      last: 'Apple'
    },
    address : {
      street : '123 main st',
      city : 'San Francisco',
      state : 'CA',
      zip : '78701'
    },
    email : 'max@maxcabrera.com',
    phone : '512-902-0912'
  }
}

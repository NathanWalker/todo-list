import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

type Person = {
  name:{
    last:string
  }
}

type Group = {
  letter:string,
  contacts:Person[]
}


@Injectable()
export class ContactService{
  people;

  constructor(public http:Http){}

  loadPeople(){
    this.http.get('http://localhost:3000/people')
      .map((res)=> res.json())
      .subscribe((result:Person[])=> {
        this.people = result
          .reduce((acc:Group[], curr:Person)=>{

            const letter = curr.name.last.substr(0, 1);
            const i = acc.findIndex((elm:any)=> elm.letter === letter);

            if (i > -1) acc[i].contacts.push(curr);
            else acc.push({letter, contacts: [curr]});

            return acc;
          }, [])
          .sort(function (a, b) {
            if (a.letter > b.letter) return 1;
            if (a.letter < b.letter) return -1;
            return 0;
          })
        ;
      })
  }


}

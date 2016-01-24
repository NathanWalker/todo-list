import {Component, Input} from 'angular2/core';

@Component({
  selector:'contact-card',
  template:`      <div class="contact-details">
        <div class="contact-title-holder">
          <div class="media">
            <div class="media-left">
              <img src="assets/images/avatar.png" class="avatar" />
            </div>
            <div class="media-body media-middle">
              <h2 class="title">{{personSelected.name.first}} {{personSelected.name.last}}</h2>
              <h5 class="subtitle">{{personSelected.company}}</h5>
            </div>
          </div>
        </div>
        <dl class="dl-horizontal">
          <dt>home:</dt>
          <dd>{{personSelected.phone}}</dd>
          <dt>address:</dt>
          <dd>{{personSelected.address.streetAddress}}</dd>
          <dd>{{personSelected.address.city}}, {{personSelected.address.state}} {{personSelected.address.zipCode}}</dd>
          <dt>email:</dt>
          <dd>{{personSelected.email}}</dd>
        </dl>
      </div>
`
})
export class ContactCard{
  @Input() personSelected = {};

}

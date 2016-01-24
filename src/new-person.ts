import {Component} from 'angular2/core';

@Component({
  selector: 'new-person',
  template: `<div class="contact-details-new">
        <div class="contact-title-holder">
          <div class="media">
            <div class="media-left">
              <p>
                <img src="assets/images/avatar-placeholder.png" class="avatar-placeholder" />
              </p>
              <button class="btn btn-default btn-file">Select File</button>
            </div>
            <div class="media-body">
              <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Full Name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="company" placeholder="Company">
              </div>
            </div>
          </div>
        </div>
        <dl class="dl-horizontal">
          <dt>home:</dt>
          <dd>
            <input type="text" class="form-control" id="phone" placeholder="Home Phone">
          </dd>
          <dt>address:</dt>
          <dd>
            <div class="form-group">
              <input type="text" class="form-control" id="address1" placeholder="Address Line 1">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="address2" placeholder="Address Line 2">
            </div>
          </dd>
          <dt>email:</dt>
          <dd>
            <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
          </dd>
        </dl>
      </div>`
})
export class NewPerson {

}



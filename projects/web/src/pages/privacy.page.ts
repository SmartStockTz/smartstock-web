import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'smartstock-privacy',
  template: `
      <nav style="top: 0; z-index: 10000" class="navbar position-sticky navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
              SmartStock
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
              </ul>
          </div>
          <span class="flex-grow-1"></span>
          <button routerLink="/account/login" class="btn btn-outline-success">Login</button>
          <span style="width: 10px; height: 10px"></span>
          <button routerLink="/account/register" class="btn btn-outline-success">Register</button>
      </nav>
      <div class="container">
          <div style="margin-top: 48px">
              <h2>Privacy Policy</h2>
              <p>Your privacy is important to us. It is Fahamu Tech's policy to respect your privacy regarding any information we
                  may collect from you across our website, <a href="http://smartstock.co.tz">http://smartstock.co.tz</a>, and other
                  sites and desktop application we own and operate.</p>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and
                  lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be
                  used.</p>
              <p>We only retain collected information for as long as necessary to provide you with your requested service. What
                  data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as
                  unauthorized access, disclosure, copying, use or modification.</p>
              <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by
                  law.</p>
              <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over
                  the content and practices of these sites, and cannot accept responsibility or liability for their respective
                  privacy policies.</p>
              <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to
                  provide you with some of your desired services.</p>
              <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal
                  information. If you have any questions about how we handle user data and personal information, feel free to
                  contact us.</p>
              <p>This policy is effective as of 19 February 2020.</p>
              <!--    <p><a target="_blank" href="https://getterms.io" title="Generate a free privacy policy">Privacy
              Policy created with GetTerms.</a></p>-->
          </div>
          <smartstock-footer></smartstock-footer>
      </div>
  `,
  styleUrls: ['../styles/privacy.style.scss']
})
export class PrivacyPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

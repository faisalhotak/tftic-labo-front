import { NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { environment } from '../../../../environments/environment.development';

export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: `${environment.baseUrl}`,
  },
  position: 'bottom-right',
  theme: 'classic',
  palette: {
    popup: {
      background: 'rgba(0,0,0,0)',
      text: '#000000',
      link: '#000000',
    },
    button: {
      background: 'rgba(241,214,0,0)',
      text: '#000000',
      border: 'transparent',
    },
  },
  type: 'opt-in',
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noopener">{{policy}}</a>,
    </span>
    `,
  },
  content: {
    message: '',
    dismiss: '',
    deny: '',
    link: '',
    // cookiePolicyLink: '',
    policy: 'https://cookie.com',
  },
};

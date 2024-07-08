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
      link: '#ffffff',
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
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noopener">{{cookiePolicyLink}}</a>,
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank" rel="noopener">{{privacyPolicyLink}}</a> and our
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank" rel="noopener">{{tosLink}}</a>
    </span>
    `,
  },
  content: {
    message:
      'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    deny: 'Refuse cookies',
    link: 'Learn more',
    href: 'https://to-do.com',
    policy: 'Cookie Policy',
  },
};

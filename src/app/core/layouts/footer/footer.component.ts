import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerInternalSections = [
    {
      title: 'footer.company',
      links: [
        { label: 'footer.about', url: '/about' },
        { label: 'footer.careers', url: '/careers' },
        { label: 'footer.contact', url: '/contact' },
      ],
    },
    {
      title: 'footer.resources',
      links: [
        { label: 'footer.helpCenter', url: '/help' },
        { label: 'footer.faq', url: '/faq' },
        { label: 'footer.privacyPolicy', url: '/privacy' },
      ],
    },
  ];

  footerExternalSections = [
    {
      title: 'footer.socialMedia',
      links: [
        { label: 'Facebook', url: 'https://www.facebook.com' },
        { label: 'Instagram', url: 'https://www.instagram.com' },
        { label: 'Youtube', url: 'https://www.youtube.com' },
      ],
    },
  ];
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-job-advertisers',
  templateUrl: './job-advertisers.component.html',
  styleUrl: './job-advertisers.component.scss'
})
export class JobAdvertisersComponent implements OnInit {
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [{name: 'Company 1'}, {name: 'Company 2'}, {name: 'Company 3'}];

    this.activeItem = this.items[0];
  }
}

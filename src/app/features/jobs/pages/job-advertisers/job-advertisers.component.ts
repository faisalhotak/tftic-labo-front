import { Component, inject, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CompanyAdvertiserService } from '../../../../shared/service/company-advertiser.service';
import { AuthService } from '../../../../core/services/auth.service';
import { map, Observable } from 'rxjs';
import { Job } from '../../models/job';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-advertisers',
  templateUrl: './job-advertisers.component.html',
  styleUrl: './job-advertisers.component.scss'
})
export class JobAdvertisersComponent implements OnInit {

  private readonly companyAdvertiserService = inject(CompanyAdvertiserService);
  private readonly authService = inject(AuthService);
  private readonly jobService = inject(JobService);

  items$!: Observable<MenuItem[]>;
  activeItem!: MenuItem;

  protected jobOffers$!: Observable<Job[]>;
  protected jobsCount: number = 0;
  protected elementsPerPage: number = 10;

  protected filters = signal<Map<string, string>>(new Map());
  protected page = signal<number>(0);

  onActiveItemChange(event: MenuItem) {
    this.jobOffers$ = this.jobService.getJobByAgentId(+event.id!);
  }

  ngOnInit() {
    this.items$ = this.companyAdvertiserService.getByJobAdvertiserId(this.authService.userId!).pipe(
      map((advertisers) => {
        const menuItems = advertisers.map((advertiser) => ({
          name: advertiser.company.name,
          id: advertiser.id.toString(),
        } as MenuItem));

        if (menuItems.length > 0) {
          this.activeItem = menuItems[0];
        }
        return menuItems;
      }),
    );
  }

}

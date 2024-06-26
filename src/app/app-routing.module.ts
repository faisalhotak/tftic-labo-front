import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ENDPOINTS } from './core/constants/endpoints';

const routes: Routes = [
  {
    path: '**',
    redirectTo: ENDPOINTS.LOGIN,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

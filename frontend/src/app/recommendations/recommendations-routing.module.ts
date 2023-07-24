import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { PersonalRecommendationsComponent } from './personal-recommendations/personal-recommendations.component';

const routes: Routes = [
  {
    path: 'banner',
    component: BannerComponent
  },
  {
    path: 'personal',
    component: PersonalRecommendationsComponent
  },
  {
    path: 'personal/:townCode',
    component: PersonalRecommendationsComponent
  },
  {
    path: '', redirectTo: 'personal', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'personal', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationsRoutingModule { }

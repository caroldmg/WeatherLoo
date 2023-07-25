import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationsRoutingModule } from './recommendations-routing.module';
import { PersonalRecommendationsComponent } from './personal-recommendations/personal-recommendations.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PersonalRecommendationsComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    RecommendationsRoutingModule,
    HttpClientModule
  ],
  exports: [
    BannerComponent,
    PersonalRecommendationsComponent
  ]
})
export class RecommendationsModule { }

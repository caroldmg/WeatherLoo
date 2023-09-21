import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationsRoutingModule } from './recommendations-routing.module';
import { PersonalRecommendationsComponent } from './personal-recommendations/personal-recommendations.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { HourRecommendationComponent } from './hour-recommendation/hour-recommendation.component';


@NgModule({
  declarations: [
    PersonalRecommendationsComponent,
    BannerComponent,
    HourRecommendationComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationsRoutingModule } from './recommendations-routing.module';
import { PersonalRecommendationsComponent } from './personal-recommendations/personal-recommendations.component';
import { UserPropComponent } from './user-prop/user-prop.component';


@NgModule({
  declarations: [
    PersonalRecommendationsComponent,
    UserPropComponent
  ],
  imports: [
    CommonModule,
    RecommendationsRoutingModule
  ]
})
export class RecommendationsModule { }

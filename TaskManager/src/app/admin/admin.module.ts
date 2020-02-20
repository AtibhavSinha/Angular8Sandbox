import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { AboutComponent } from "./about/about.component";
import { DashboardService } from "./dashboard/service/dashboard.service";
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from './projects/service/projects.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [ CommonModule, FormsModule ],
  exports: [ DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent ], // Module which I want to export to other
  providers: [DashboardService, ProjectsService]
})
export class AdminModule
{
}

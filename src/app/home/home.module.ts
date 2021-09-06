import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { DevComponent } from './dev/dev.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home.component';
import { MatModule } from '../mat.module';
import { SharedModule } from '../shared/shared.module';
import { DevInfoComponent } from './dev/dev-info/dev-info.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [CommonModule, MatModule, SharedModule],
  declarations: [
    AboutComponent,
    DevComponent,
    HeaderComponent,
    ResumeComponent,
    HomeComponent,
    DevInfoComponent,
    ProjectsComponent,
  ],
  exports: [
    AboutComponent,
    DevComponent,
    HeaderComponent,
    ResumeComponent,
    HomeComponent,
  ],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from './services';
import { LoadingResolver } from './resolvers';
import { LoaderComponent } from './components/loader/loader.component';
import { TechIconComponent } from './components/tech-icon/tech-icon.component';
import { NavComponent } from './components/nav/nav.component';
import { MatModule } from '../mat.module';
import { FooterComponent } from './components/footer/footer.component';
import { IterateNTimesPipe } from './pipes/iterate-n-times.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    TechIconComponent,
    NavComponent,
    FooterComponent,
    IterateNTimesPipe,
  ],
  imports: [CommonModule, MatModule],
  providers: [ContactsService, LoadingResolver],
  exports: [
    LoaderComponent,
    TechIconComponent,
    NavComponent,
    FooterComponent,
    IterateNTimesPipe,
  ],
})
export class SharedModule {}

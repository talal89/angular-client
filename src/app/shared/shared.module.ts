import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Components
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Services
import { LayoutService } from './services/layout.service';
import { NavService } from './services/nav.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    NavService,
    LayoutService
  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    BreadcrumbComponent,
    FeatherIconsComponent
  ],
})
export class SharedModule { }

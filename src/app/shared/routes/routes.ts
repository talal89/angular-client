import { DashboardModule } from './../../components/dashboard/dashboard.module';
import { PanelComponent } from './../../components/panels/panel/panel.component';
import { TabComponent } from './../../components/tabs/tab/tab.component';
import {
  Routes
} from '@angular/router';
import { FormComponent } from 'src/app/components/forms/form/form.component';

export const homeRoutes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'components/forms',
    component: FormComponent
  },
  {
    path: 'components/tabs',
    component: TabComponent
  },
  {
    path: 'components/panels',
    component: PanelComponent
  }
];

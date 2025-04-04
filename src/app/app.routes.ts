import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyContentComponent } from './body-content/body-content.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'blog',
    component: BodyContentComponent,
  },
  {
    path: '',
    component: HeaderComponent,
  },
];

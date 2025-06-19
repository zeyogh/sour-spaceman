import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { GamesContentComponent } from './games-content/games-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'games',
    component: GamesContentComponent,
  },
  {
    path: 'blog',
    component: BlogContentComponent,
  },
  {
    path: 'about',
    component: AboutContentComponent,
  },
  {
    path: 'contact',
    component: ContactContentComponent,
  },
  {
    path: '',
    component: HeaderComponent,
  },
];

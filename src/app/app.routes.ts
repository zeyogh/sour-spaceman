import { Routes } from '@angular/router';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { GamesContentComponent } from './games-content/games-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { BlogEntryPageComponent } from './blog-content/blog-entry-page/blog-entry-page.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogContentComponent,
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
    path: 'blog/:id',
    component: BlogEntryPageComponent,
  },
  {
    path: 'about',
    component: AboutContentComponent,
  },
  {
    path: 'contact',
    component: ContactContentComponent,
  },
];

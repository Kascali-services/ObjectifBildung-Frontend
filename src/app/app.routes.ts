import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LonginPageComponent} from './pages/auth-pages/longin-page/longin-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LonginPageComponent},
  {path: '**', redirectTo: ''} // Wildcard route for a 404 page (optional)
];

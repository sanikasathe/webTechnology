import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { LivePreviewComponent } from './components/live-preview/live-preview.component';
import { DirectivesActivityComponent } from './components/directives-activity/directives-activity.component';
import { ApiUsersComponent } from './components/api-users/api-users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: 'live-preview', component: LivePreviewComponent },
  { path: 'directives', component: DirectivesActivityComponent },
  { path: 'api-users', component: ApiUsersComponent },
  { path: '**', redirectTo: '' }
];

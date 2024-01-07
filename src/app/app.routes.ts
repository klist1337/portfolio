import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CapabilityComponent } from './capability/capability.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'Home', component: HomeComponent},
    {path:'', redirectTo: 'Home', pathMatch:'full'},
    {path:'Projects', component: ProjectsComponent},
    {path:'Capability', component: CapabilityComponent},
    {path:'Contact', component: ContactComponent},

];

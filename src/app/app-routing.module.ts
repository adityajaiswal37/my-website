import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  { path: 'tech', component: TechnologyComponent },
  { path: 'home', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'career',component:CareersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

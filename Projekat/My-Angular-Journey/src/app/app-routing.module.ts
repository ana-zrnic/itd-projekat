import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomeBannerComponent } from './home-banner/home-banner.component'
import{ LogsComponent } from './logs/logs.component';
import{ NewEntryComponent } from './new-entry/new-entry.component';
import{ AboutComponent } from './about/about.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';


const routes: Routes = [
  { path:'', component:HomeBannerComponent },
  { path:'home', component:HomeBannerComponent },
  { path:'about', component:AboutComponent },
  { path:'logs', component:LogsComponent },
  { path:'new-entry', component:NewEntryComponent },
  { path: 'edit-entry/:id', component:EditEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

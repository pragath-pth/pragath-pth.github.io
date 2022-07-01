import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "skills", component: SkillsComponent },
  { path: "works", component: WorksComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "error", component: ErrorPageComponent},
  { path: '**', redirectTo: 'error', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

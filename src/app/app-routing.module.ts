import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DailyComponent} from "./components/daily/daily.component";
import {CrPlanComponent} from "./components/cr-plan/cr-plan.component";
import {TermsComponent} from "./components/terms/terms.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EventsComponent} from "./components/events/events.component";
import { ErrorPortalComponent } from "./components/error-portal/error-portal.component";

const routes: Routes = [
  { path: 'daily', component: DailyComponent },
  { path: 'cr-plan', component: CrPlanComponent },
  { path: 'terms', component: TermsComponent },
  { path: '', component: DashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: 'error-portal', component: ErrorPortalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

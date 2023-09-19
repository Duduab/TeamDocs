import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';


//prime ng modules
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {PaginatorModule} from 'primeng/paginator';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import {CalendarModule} from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DataViewModule } from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ProgressBarModule} from 'primeng/progressbar';
import {DividerModule} from 'primeng/divider';
import {SplitterModule} from 'primeng/splitter';
import {BadgeModule} from 'primeng/badge';
import {CheckboxModule} from 'primeng/checkbox';
import {AccordionModule} from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorsServiceComponent } from './components/errors-service/errors-service.component';
import { TermsComponent } from './components/terms/terms.component';
import { AddNewTermComponent } from './components/add-new-term/add-new-term.component';
import { LoaderComponent } from './loader/loader.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrPlanComponent } from './components/cr-plan/cr-plan.component';
import { EventsComponent } from './components/events/events.component';
import { DailyComponent } from './components/daily/daily.component';
import { AddNewCrComponent } from './components/add-new-cr/add-new-cr.component';
import { AddNewEventComponent } from './components/add-new-event/add-new-event.component';
import { SingleCrReportComponent } from './components/cr-plan/single-cr-report/single-cr-report.component';
import { SingleDailyReportComponent } from './components/daily/single-daily-report/single-daily-report.component';
import { ErrorPortalComponent } from './components/error-portal/error-portal.component';
import { AddNewErrorComponent } from './components/error-portal/add-new-error/add-new-error.component';




const PRIME_NG_UI = [
  CardModule,
  DialogModule,
  ButtonModule,
  InputTextModule,
  ToastModule,
  PaginatorModule,
  BreadcrumbModule,
  MenubarModule,
  CarouselModule,
  CalendarModule,
  ChartModule,
  DataViewModule,
  PanelModule,
  DropdownModule,
  RatingModule,
  RippleModule,
  AvatarModule,
  AvatarGroupModule,
  ProgressBarModule,
  DividerModule,
  SplitterModule,
  BadgeModule,
  CheckboxModule,
  AccordionModule,
  ChipModule

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorsServiceComponent,
    TermsComponent,
    AddNewTermComponent,
    LoaderComponent,
    DashboardComponent,
    CrPlanComponent,
    EventsComponent,
    DailyComponent,
    AddNewCrComponent,
    AddNewEventComponent,
    SingleCrReportComponent,
    SingleDailyReportComponent,
    ErrorPortalComponent,
    AddNewErrorComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ...PRIME_NG_UI
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

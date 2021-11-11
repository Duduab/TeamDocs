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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TermsComponent } from './components/terms/terms.component';
import { AddNewTermComponent } from './components/add-new-term/add-new-term.component';
import { LoaderComponent } from './loader/loader.component';

const PRIME_NG_UI = [
  CardModule,
  DialogModule,
  ButtonModule,
  InputTextModule,
  ToastModule,
  PaginatorModule
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TermsComponent,
    AddNewTermComponent,
    LoaderComponent
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

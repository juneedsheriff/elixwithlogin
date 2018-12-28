﻿import { NgModule }      from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
 


// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { NgxPopper } from 'angular-popper' ;
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VitalsComponent } from './vitals/vitals.component';
import { BloodpressureComponent } from './bloodpressure/bloodpressure.component';;
import { TemperatureComponent } from './temperature/temperature.component' ;
import { RandombloodsugarComponent } from './randombloodsugar/randombloodsugar.component';
import { CholesterolComponent } from './cholesterol/cholesterol.component';
import { PulserateComponent } from './pulserate/pulserate.component';
import { RespiratoryComponent } from './respiratory/respiratory.component';
import { BmiComponent } from './bmi/bmi.component';
import { MedicalrecordsComponent } from './medicalrecords/medicalrecords.component';
import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule ,
        NgxPopper,
        NgbModule,
        NouisliderModule,
        AngularFileUploaderModule
     
      
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        MenuComponent ,
        FooterComponent ,
        VitalsComponent,
        BloodpressureComponent,
        TemperatureComponent,
        RandombloodsugarComponent,
        CholesterolComponent,
        PulserateComponent,
        RespiratoryComponent,
        BmiComponent,
        MedicalrecordsComponent
    ],
       
    providers: [
        fakeBackendProvider,
         { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
       

        // provider used to create fake backend
        
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
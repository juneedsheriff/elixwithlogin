import { NgModule }      from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
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
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';;
import { ViewmedicalrecordsComponent } from './viewmedicalrecords/viewmedicalrecords.component'
import { LightboxModule } from 'ngx-lightbox';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RecordsdashboardComponent } from './recordsdashboard/recordsdashboard.component';
import { MedicalhistoryComponent } from './medicalhistory/medicalhistory.component'
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
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        BrowserAnimationsModule,
        LightboxModule 
     
      
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
        MedicalrecordsComponent,
        ViewmedicalrecordsComponent ,
        MedicalhistoryComponent,
        RecordsdashboardComponent],
       
       
    providers: [
        fakeBackendProvider,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
         { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
       

        // provider used to create fake backend
        
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
 
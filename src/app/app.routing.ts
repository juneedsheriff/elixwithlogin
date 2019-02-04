import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { VitalsComponent } from './vitals/vitals.component';
import { BloodpressureComponent  } from './bloodpressure/bloodpressure.component';
import { TemperatureComponent  } from './temperature/temperature.component';
import { RandombloodsugarComponent  } from './randombloodsugar/randombloodsugar.component';
import { CholesterolComponent } from './cholesterol/cholesterol.component';
import { PulserateComponent } from './pulserate/pulserate.component';
import { RespiratoryComponent } from './respiratory/respiratory.component';
import { BmiComponent } from './bmi/bmi.component';
import { MedicalrecordsComponent } from './medicalrecords/medicalrecords.component';
import { ViewmedicalrecordsComponent } from './viewmedicalrecords/viewmedicalrecords.component';
import { RecordsdashboardComponent } from './recordsdashboard/recordsdashboard.component';
import { MedicalhistoryComponent } from './medicalhistory/medicalhistory.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'vitals', component:  VitalsComponent },
    { path: 'bloodpressure', component:  BloodpressureComponent  },
    { path: 'temperature', component:  TemperatureComponent  },
    { path: 'rbs', component:  RandombloodsugarComponent  },
    { path: 'cholesterol', component:  CholesterolComponent  },
    { path: 'pulserate', component:  PulserateComponent  },
    { path: 'respiratoryrate', component:  RespiratoryComponent  },
    { path: 'bmi', component:  BmiComponent  },
    { path: 'records', component:  MedicalrecordsComponent  },
    { path: 'viewrecords', component:  ViewmedicalrecordsComponent  },
    { path: 'recordsdashboard', component:  RecordsdashboardComponent  },
    { path: 'medicalhistory', component:  MedicalhistoryComponent  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
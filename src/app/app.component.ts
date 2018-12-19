import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    currentUser: User;
    constructor(
        private router: Router,
       
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
   

   public ngOnInit()
    {

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
       
    }     
      
}



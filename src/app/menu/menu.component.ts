import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(window.localStorage.getItem("isRefresh"))
      {        
        window.localStorage.removeItem("isRefresh");
      }  
      else
      {
        window.localStorage.setItem("isRefresh","Yes");
        window.location.reload();
      }
  }

}

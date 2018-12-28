import { Component, OnInit } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-medicalrecords',
  templateUrl: './medicalrecords.component.html',
  styleUrls: ['./medicalrecords.component.css']
})
export class MedicalrecordsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  afuConfig = {
    multiple : false,
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
}

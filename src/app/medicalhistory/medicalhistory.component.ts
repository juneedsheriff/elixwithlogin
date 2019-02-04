import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medicalhistory',
  templateUrl: './medicalhistory.component.html',
  styleUrls: ['./medicalhistory.component.css']
})
export class MedicalhistoryComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content);

  }

  

  ngOnInit() {
  }

}

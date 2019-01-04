import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medicalrecords',
  templateUrl: './medicalrecords.component.html',
  styleUrls: ['./medicalrecords.component.css']
})
export class MedicalrecordsComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     });
  }
   
  ngOnInit() {
  }
  
}

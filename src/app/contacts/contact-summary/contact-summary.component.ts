import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-summary',
  templateUrl: './contact-summary.component.html',
  styleUrls: ['./contact-summary.component.scss']
})
export class ContactSummaryComponent implements OnInit {

  constructor(public contactService: ContactService, public router: Router) { }
  columnDefs: ColDef[] = [
    { field: "FirstName", sortable: true, filter: true },
    { field: "LastName", sortable: true, filter: true },
    { field: "Email", sortable: true, filter: true },
    { field: "PhoneNumber", sortable: true, filter: true },
    { field: "Address", sortable: true, filter: true },
    { field: "City", sortable: true, filter: true },
    { field: "State", sortable: true, filter: true },
    { field: "Country", sortable: true, filter: true },
    { field: "PostalCode", sortable: true, filter: true },
    { field: "Action",
        cellRenderer: function(params:any) {
          let editIcon = document.createElement('span');         
          editIcon.innerHTML=`<a href="/edit/${params.data.id}"><i class="fas fa-edit" style="font-size:24px"></i></a>`;
          return editIcon;
     } }
  ];

  rowData = this.contactService.contactList.reverse();
  ngOnInit(): void {
  }
  addContacts(){
    this.router.navigate(['/create']);
  }
}

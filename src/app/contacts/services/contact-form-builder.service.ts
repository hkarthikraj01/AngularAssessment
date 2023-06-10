import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactFormBuilderService {
  contactForm!:FormGroup;
  constructor(public formBuilder:FormBuilder,public router:Router) { 
    this.getFormBuilder()
  }
  getFormBuilder(){
    this.contactForm = this.formBuilder.group({
      id:[null],
      FirstName: [null,Validators.required],
      LastName: [null,Validators.required],
      Email: [null,[Validators.required,Validators.email]],
      PhoneNumber: [null,Validators.required],
      Address: [null,Validators.required],
      City: [null,Validators.required],
      State: [null,Validators.required],
      Country: [null,Validators.required],
      PostalCode: [null,Validators.required],
      Display:[null],
      lon:[null],
      lat:[null]
    })
  }
}

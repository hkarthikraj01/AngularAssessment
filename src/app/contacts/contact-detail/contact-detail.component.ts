import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactFormBuilderService } from '../services/contact-form-builder.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  public contactForm!: FormGroup;
  public title!: string;
  public formAction!: string;
  private id!: number;
  constructor(public route: ActivatedRoute, public contactFormBuilder: ContactFormBuilderService, public router: Router, public contactService: ContactService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactFormBuilder.getFormBuilder();
      this.contactForm = this.contactFormBuilder.contactForm;
      this.title = "Create Contact"
      this.formAction = "add"
      this.contactService.readOnly =false;
      if (params['id']) {
        this.id=params['id'];
        this.patchForm(this.contactService.contactList.filter((x: any) => (x.id == this.id))[0])
        if (this.router.url.includes('edit')) {
          this.title = "Edit Contact",
            this.formAction = "edit"
        }
        else if (this.router.url.includes('view')) {
          this.title = "View Contact",
            this.formAction = "view",
            this.contactService.readOnly = true;
        }
      }
    })
  }
  patchForm(contact: any) {
    this.contactForm.patchValue(contact);
  }
  get contactFormCtrls() { return this.contactFormBuilder.contactForm.controls; }

  navigateBack(){
    this.router.navigate(['']);
  }
  
  onSave(){
    this.contactService.getLatitudeAndLongitude(this.contactForm.value.PostalCode).subscribe(res=>{
      debugger
      this.contactForm.value.lon=res[0].lon;
      this.contactForm.value.lat=res[0].lat;
      this.contactForm.value.Display=res[0].display_name;
      this.contactService.addContact(this.contactForm.value);
      this.navigateBack();
    });
  }
  onUpdate(){   
    this.contactService.getLatitudeAndLongitude(this.contactForm.value.PostalCode).subscribe(res=>{
      this.contactForm.value.lon=res.lon;
      this.contactForm.value.lat=res.lat;
      this.contactService.updateContact(this.contactForm.value);
      this.navigateBack();
    });
  }
}

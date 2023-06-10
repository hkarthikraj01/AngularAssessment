import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { contact } from '../model/contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public readOnly!: boolean;
  public contactList: contact[] = [{
    id:1,
    FirstName: "Karthikraj",
    LastName: "Harikrishnan",
    Email: "hkarthikraj01@gmail.com",
    PhoneNumber: "8248675218",
    Address: "49,Palanisamy Street 2nd",
    City: "Coimbatore",
    State: "Tamil Nadu",
    Country: "India",
    PostalCode: "641031",
    lat: "10.957902876923077",
    lon: "76.99109569230768",
    Display:"Coimbatore District, Tamil Nadu, India"
  },
  {
    id:2,
    FirstName: "Ram",
    LastName: "Kumar",
    Email: "ramk@gmail.com",
    PhoneNumber: "8240005218",
    Address: "50,One Layout",
    City: "Cheenai",
    State: "Tamil Nadu",
    Country: "India",
    PostalCode: "600002",
    lat: "13.078477952",
    lon: "80.264362212",
    Display:"Cheenai District, Tamil Nadu, India"
  },
  {
    id:3,
    FirstName: "Rajesh",
    LastName: "Ram",
    Email: "rr@gmail.com",
    PhoneNumber: "8248000018",
    Address: "50, PP Street",
    City: "Erode",
    State: "Tamil Nadu",
    Country: "India",
    PostalCode: "641038",
    lat: "11.3306483",
    lon: "77.7276519",
    Display:"Erode District, Tamil Nadu, India"
  },
  {
    id:4,
    FirstName: "Arun",
    LastName: "Raj",
    Email: "ar@gmail.com",
    PhoneNumber: "9048000018",
    Address: "50, MTS Street",
    City: "Trichy",
    State: "Tamil Nadu",
    Country: "India",
    PostalCode: "641038",
    lat: "10.804973",
    lon: "78.6870296",
    Display:"Trichy District, Tamil Nadu, India"
  }]
  constructor(private Http: HttpClient) { }
  
  getLatitudeAndLongitude(postalCode: string) {
    return this.Http.get<any>('https://nominatim.openstreetmap.org/search.php?postalcode=' + postalCode + '&polygon_geojson=1&format=jsonv2').pipe(map((res: any) => {
      return res;
    }))
  }
 
  addContact(contactDetails: contact) {
    contactDetails.id=this.contactList.length+1;
    this.contactList.push(contactDetails);
  }
 
  updateContact(contactDetails: contact) {
    contactDetails.id-=1;
    this.contactList[contactDetails.id].FirstName=contactDetails.FirstName;
    this.contactList[contactDetails.id].LastName=contactDetails.LastName;
    this.contactList[contactDetails.id].Email=contactDetails.Email;
    this.contactList[contactDetails.id].PhoneNumber=contactDetails.PhoneNumber;
    this.contactList[contactDetails.id].Address=contactDetails.Address;
    this.contactList[contactDetails.id].City=contactDetails.City; 
    this.contactList[contactDetails.id].State=contactDetails.State;
    this.contactList[contactDetails.id].Country=contactDetails.Country;
    this.contactList[contactDetails.id].PostalCode=contactDetails.PostalCode;
    this.contactList[contactDetails.id].lat=contactDetails.lat;
    this.contactList[contactDetails.id].lon=contactDetails.lon;
  }
}
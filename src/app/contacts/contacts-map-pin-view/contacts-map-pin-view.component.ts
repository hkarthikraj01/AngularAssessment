import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import { LayerGroup, tileLayer } from "leaflet";
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-map-pin-view',
  templateUrl: './contacts-map-pin-view.component.html',
  styleUrls: ['./contacts-map-pin-view.component.scss']
})
export class ContactsMapPinViewComponent implements OnInit {
  cooridinate:any;
  title:string="Map View Pined Contants"
  constructor(public contactservice:ContactService) { }
  options: L.MapOptions = {
    zoom: 7,

    center: L.latLng(10.957902876923077,76.99109569230768),
    layers: [
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ]
  };
  map!: L.Map;
  markersLayer = new L.LayerGroup();
  sMarkersLayer!: LayerGroup;
  zoomLevel = 9;
  iconUrl = "https://decisionfarm.ca/assets/images/marker-icon-2x.png";
  contacts = this.contactservice.contactList;
  createStations() {
    this.sMarkersLayer = new L.LayerGroup();

    for (const s of this.contacts) {
      let icon;
      icon = new L.DivIcon({
        html: `<img src='${this.iconUrl}'/> <span>${s.FirstName}</span>`
      });
      const marker = L.marker([+s.lat, +s.lon], { icon });
      this.sMarkersLayer.addLayer(marker);
      marker.bindPopup('<p>Address: ' + s.Address +','+s.Display+'</p>').openPopup();
    }
    this.markersLayer.addLayer(this.sMarkersLayer);
  }

  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
      this.map = map;
      map.addLayer(this.markersLayer);
      this.createStations();
    }, 200);
  }
  ngOnInit(): void {
  }

}

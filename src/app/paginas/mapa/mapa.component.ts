import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  options={
    types: [],
    componentRestrictions: { country: 'MX' }
    }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    const map = new Map('map').setView([10.98719,-74.78814], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  }

  public handleAddressChange(address: Address) {
    console.log('latitud: ' +address.geometry.location.lat());
    console.log('longitud: ' +address.geometry.location.lng());
}

}

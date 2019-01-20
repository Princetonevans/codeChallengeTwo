import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codeChallengeTwo';

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
    ],
    zoom: 5,
    center: L.latLng({ lat: 29.7604, lng: -95.3698 })
  };
  drawOptions = {
    position: 'topright',
    draw: {
      polyline: false,
      marker: false,
      circlemarker: false,
      circle: true,
      polygon: {
        allowIntersection: false,
        drawError: {
          color: '#e1e100',
          message: '<strong>Oh no!<strong> you can\'t draw that!'
        },
        shapeOptions: {
          color: '#bada55'
        }
      },
      rectangle: false,
    },
  };

  public onDrawCreated(e: any) {
    // tslint:disable-next-line:no-console
    console.log('Drawing Created');
  }

  public onDrawStart(e: any) {
    // tslint:disable-next-line:no-console
    console.log('Drawing Started');
  }

}

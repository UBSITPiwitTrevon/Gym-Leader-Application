import { Component, inject } from '@angular/core';
import { TraningServiceService } from '../traning-service.service';

@Component({
  selector: 'app-hoenn-region',
  imports: [],
  templateUrl: './hoenn-region.component.html',
  styleUrl: './hoenn-region.component.css'
})
export class HoennRegionComponent {
  trainerService =inject(TraningServiceService);
 

}

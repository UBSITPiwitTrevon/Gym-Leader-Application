import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  imports: [],
  templateUrl: './leader-info.component.html',
  styleUrl: './leader-info.component.css'
})
export class LeaderInfoComponent {
  name = input.required<string>();
  age = input<number>();
  location = input.required<string>();
  badge = input.required<string>();
  motto = input.required<string>();
  description=input.required<string>();
  pokemon = input.required<any[]>();

  leaderSelected = output<string>();

  selectLeader(){
    this.leaderSelected.emit(this.name());
    this.leaderSelected.emit(this.motto());
    this.leaderSelected.emit(this.description());
  }

}

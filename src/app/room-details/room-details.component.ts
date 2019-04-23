import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../home/Room';
import { DataService } from '../data-service';


@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {
  title = 'Room';

  @Input()
  room: Room;

  constructor(private route: ActivatedRoute, public dataService: DataService) {}

  ngOnInit() {
    // this.room = this.dataService.getRoom(Number.parseInt(this.route.snapshot.paramMap.get('roomId'), undefined));
    this.route.params.subscribe(params => this.room = this.dataService.getRoom(Number.parseInt(params['roomId'], undefined)));
  }
}

import { Component } from '@angular/core';
import { Room } from './Room';
import { DataService } from '../data-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // rooms: Room[] = [];

  constructor(public dataService: DataService) {}

  newRoom(roomName: string) {
    this.dataService.addRoom(roomName);
  }

  getRooms() {
    return this.dataService.rooms;
  }
}

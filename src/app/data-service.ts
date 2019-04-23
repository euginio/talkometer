import { Room } from './home/Room';

export class DataService {
    rooms: Room[] = [];

    addRoom(roomName: string) {
        this.rooms.push(new Room(roomName, this.rooms.length + 1));
    }
    getRoom(id: number) {
        return this.rooms.find(r => r.id === id);
    }
}

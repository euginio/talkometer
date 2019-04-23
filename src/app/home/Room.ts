import { Participant } from './Participant';

export class Room {
  participants: Participant[] = [];
  constructor(public name: string, public id: number) {
  }
  addParticipant(name: string) {
    this.participants.push(new Participant(name));
  }
}

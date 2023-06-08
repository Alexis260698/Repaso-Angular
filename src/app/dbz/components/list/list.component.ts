import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('characterList')
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 30
  }]

  @Output()
  public onDelete: EventEmitter <string> =  new EventEmitter();

  @Output()
  public onUpdate: EventEmitter <Character> =  new EventEmitter();

  onDeleteCharacter(id?:string){
    if(!id) return;

    this.onDelete.emit(id);
  }

  updateCharacter(character : Character){
    this.onUpdate.emit(character);
  }

}

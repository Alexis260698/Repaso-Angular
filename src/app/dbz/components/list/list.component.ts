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
  public onDelete: EventEmitter <number> =  new EventEmitter();


  onDeleteCharacter(index:number){
    this.onDelete.emit(index);
  }


}

import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponentComponent {
constructor( private dbzService: dbzService){}

characterToUpdate: Character = {
  name:'',
  power:0
}

get characters(): Character[]{
  return [...this.dbzService.characters];
}

onDeleteCharacter(id:string){
this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character: Character){
  this.dbzService.addCharacter(character);
  }

  onUpdateCharacter(character:Character){
  this.characterToUpdate = character;
  }

}

import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponentComponent {

  public characters: Character[] = [{
    name: 'peter',
    power: 25
  }, {
    name: 'saitama',
    power: 1000
  }, {
    name: 'goku',
    power: 8000
  }];

  onNewCharacter(character: Character):void{
    console.log(character);
  }

}

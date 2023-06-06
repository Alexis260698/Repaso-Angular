import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponentComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponentComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponentComponent
  ]
})
export class DbzModule { }
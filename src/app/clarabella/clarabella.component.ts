import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PippoService } from '../services/pippo.service';
import { Hero, TopolinoService } from '../services/topolino.service';

@Component({
  selector: 'app-clarabella',

  template: `
  <button type="button" (click)="lightClicked()">Click me!</button>
  <span>{{message}}</span>`,

  styleUrls: ['./clarabella.component.scss']
})

export class ClarabellaComponent implements OnInit {

  isOn = false;
  
  get message(){ 
    return `The light is ${this.isOn ? 'On' : 'Off'}`; 
  }

  @Input() hero!: Hero;

  @Output() selected = new EventEmitter<Hero>();

  constructor(private pippo: PippoService) { }
  
  ngOnInit(): void {
  }
  
  heroClicked(){ 
    this.selected.emit(this.hero); 
  }

  lightClicked(){ 
    this.isOn = !this.isOn; 
  }
}

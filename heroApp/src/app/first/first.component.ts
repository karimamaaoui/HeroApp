import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  hero = {
    name:'',
    power:0,
    image:''
  }

  heros : any[]= [];

  ajouterHero(){
    this.heros.push(this.hero);
    this.hero ={
      name:'',
      power:0,
      image:''
    }
    console.log(this.heros)
  }
}

import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor (private sharedServ: SharedService){}

  hero = {
    name:'',
    power:0,
   // image:''
  }

    imageHero:any



    selectImage(e:any){
      this.imageHero = e.target.files[0];
      console.log(this.imageHero);
     }


  ajouterHero(){
  /*  this.sharedServ.heros.push(this.hero);
    this.hero ={
      name:'',
      power:0,
      image:''
    }*/

    let formData = new FormData() 
    formData.append('name',this.hero.name)
    formData.append('power',this.hero.power.toString())
    formData.append('image',this.imageHero)
    this.sharedServ.createNewHero(formData).subscribe(
      res=> {
        console.log(res)
        this.hero = {
          name:'',
          power:0,
         
        }
      },
      err=> {
        console.log(err)
      }
    )
   
  /*  this.sharedServ.createNewHero(this.hero).subscribe(
      res=> {
        console.log(res)
        this.hero = {
          name:'',
          power:0,
          image:''
        }
      },
      err=> {
        console.log(err)
      }
    )*/
   // console.log("from add component",this.sharedServ.heros)


  }
}

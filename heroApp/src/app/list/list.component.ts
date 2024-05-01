import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor( public sharedServ: SharedService){}

  heros :any;

  ngOnInit(){
    this.sharedServ.getAllHeros().subscribe (
      res=> {
      //  console.log(res);
        this.heros = res;
      },
      err=>{
        console.log(err)
      }

    )
  }

  deleteOne(id:any){
    this.sharedServ.deleteHero(id).subscribe(
      res=>{
        console.log(res)
        //refresh lel list 
        this.sharedServ.getAllHeros().subscribe (
          res=> {
            console.log(res);
            this.heros = res;
          },
          err=>{
            console.log(err)
          }
    
        )
      },
      err=>{
        console.log(err)
      }
    )
  }
  
}

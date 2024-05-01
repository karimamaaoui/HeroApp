import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  hero:any;
  idHero:any;

  //activated route najm nakhou ay haja mel current route
  //router bch ki naaml update redirect toul lel list
  constructor(private actRoute: ActivatedRoute , private shardServ : SharedService, private router: Router ){}

  ngOnInit(){
    this.idHero = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.idHero);

    this.shardServ.getHeroById(this.idHero).subscribe(
      res=>{
        this.hero = res
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )

  
  }

  updateHero(){
    this.shardServ.updateHero(this.idHero,this.hero).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/list']);
      }, err=>{
        console.log(err)
      }
    )

  }

}

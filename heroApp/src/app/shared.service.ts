import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  private url= 'http://localhost:4000/'
  heros: any[] =[];


 /* createNewHero(hero: any) {
    return this.httpClient.post(this.url + "hero/ajout", hero);
  }
*/
//create hero with image uploaded
  createNewHero(hero: any) {
    return this.httpClient.post(this.url + "hero/create", hero);
  }


  getAllHeros(){
    return this.httpClient.get(this.url+"hero/all");
  }

  deleteHero(id:any){
    return this.httpClient.delete(this.url+ "hero/supprimer/" + id);
  }

  getHeroById(id:any){
    return this.httpClient.get(this.url+ "hero/getbyid/" +id);
  }

  updateHero(id:any, hero:any){
    return this.httpClient.put(this.url +"hero/update/"+id, hero);
  }

}

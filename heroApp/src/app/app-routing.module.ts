import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path :'', redirectTo :"/list", pathMatch:'full'},
  {path :'edit/:id', component: EditComponent},

  {path :'add', component: AddComponent},
  {path :'list', component : ListComponent},


  {path :'**', component : NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

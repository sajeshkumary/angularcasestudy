import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  {path:'',component:SearchComponent},
  {path:'searchhistory/:keyword',component:SearchComponent},
  {path:'history',component:HistoryComponent},
  {path:'signup',component:RegisterComponent},
  {path:'signin',component:SigninComponent},
  {path:'signout',component:SignoutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

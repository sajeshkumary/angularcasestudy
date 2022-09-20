import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { searchhistory } from "../model/searchhistory";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PixabayService {

  history:searchhistory[];

  constructor(private httpClient:HttpClient) { 
    this.history=[];
  }

  getHistory(){
    
    var un = localStorage.getItem('un');
    var uname = un?un.toString():"";
    console.log("uname",uname);
    console.log("this.history",this.history);
    
    var items = this.history.filter(p=>p.username==uname)
    console.log("searchitems",items);
      return items;
  }
  
  getHistoryByName(uname:string){
    return this.history.filter(p=>p.username==uname);
  }

  Search(keyword:string,type:string){
    const d= new Date();

    var un = localStorage.getItem('un');
var uname = un?un.toString():"";

    var hstry= new searchhistory( uname ,keyword, new Date() );

    var item = this.history.find(p=>p.keyword==keyword && p.username==uname)

if(item ==undefined){
  this.history.push(hstry);

}
  
    return this.httpClient.get("https://pixabay.com/api/?key=29577618-5e0e0c4ad98483febd3905ac2&q="+keyword+"&image_type="+ type)

  }






}

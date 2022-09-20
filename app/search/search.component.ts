import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { results } from '../model/results';
import { PixabayService } from '../services/pixabay.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  retresults:results;
keyword:string;

  constructor(
    private searchService:PixabayService,private activatedRoute:ActivatedRoute
  ) 
  { 
    this.keyword="";
    this.retresults=new results(0,0);
   
    this.activatedRoute.params.subscribe(data=>{
      this.keyword =  data["keyword"];
      console.log("keuyword",this.keyword);
      if(this.keyword !=undefined){
        this.search()
      }
     });

  }

  ngOnInit(): void {

  }

    search(){
      this.searchService.Search(this.keyword,'photo').subscribe((result)=>{
      this.retresults= result as results;
      console.log(this.retresults);
      console.log(this.searchService.getHistory());
    });

  }
}

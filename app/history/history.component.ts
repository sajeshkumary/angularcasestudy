import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { searchhistory } from '../model/searchhistory';
import { PixabayService } from '../services/pixabay.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {

    history:searchhistory[];

    constructor(private searchService:PixabayService,private router:Router) {
    this.history= this.searchService.getHistory();
    
  }

  ngOnInit(): void {

}

SearchAgain(keyword:string){

    this.router.navigate(['searchhistory',keyword],);

  }

}

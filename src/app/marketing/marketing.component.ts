import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  marketingCoaches: any[] = [];
  allCoaches: any;
  dates: any[] = [];
  counter = 0;
  matches: any[] = [];
  searchText = '';

  constructor(private api: APIService) { }

  ngOnInit(): void {
  this.api.ListStandards().then(standard => {
    
    this.allCoaches = standard;
    let now =  new Date();
    let start = new Date(2021, 1, 1, 0, 0, 0);
    
    this.dates = this.getDatesBetweenStartEnd(start, now);
    for(var i =0 ; i< this.dates.length; i++){
      let day = this.dates[i].getDate();
      if(day == 1 || day == 11 || day == 21){
        console.log(this.dates[i]);
        this.counter++;
      }
    }
    console.log(this.counter);
    for(var i =0 ; i< this.allCoaches.items[0].coaches.length; i++){
      console.log(this.allCoaches.items[0].coaches[i]);
    }
    for(var i =0 ; i< this.allCoaches.items[0].coaches.length; i++){
      let currCoach = this.allCoaches.items[0].coaches[i];
      console.log(currCoach.firstName);
      console.log("i: " + i);
      let otherIndex = i;
      for(var j= 1; j<= this.counter; j++){
        console.log('otherIndex: ' + otherIndex);
        console.log("j: " + j);
        otherIndex++;
        if(otherIndex == i){
          console.log("otherIndex == i 1");
          otherIndex++;
        }
        if(otherIndex == this.allCoaches.items[0].coaches.length){
          console.log("otherIndex == this.allCoaches.items[0].coaches.length");
          otherIndex = 0;
        }
        if(otherIndex == i){
          console.log("otherIndex == i 2");
          otherIndex++;
        }
      }
      
      console.log('FINAL otherIndex: ' + otherIndex);
      this.matches.push(currCoach.firstName + " " + currCoach.lastName + 
       " משווק/ת את " + 
       this.allCoaches.items[0].coaches[otherIndex].firstName + " "
       + this.allCoaches.items[0].coaches[otherIndex].lastName
       )
    }
    console.log(this.matches);
  });

  }

  
  getDatesBetweenStartEnd(start: Date, end: Date): any[] {
    var dates = [];
    for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }

    return dates;
  }

}

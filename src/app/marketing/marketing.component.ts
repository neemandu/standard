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

  constructor(private api: APIService) { }

  ngOnInit(): void {
  this.api.ListStandards().then(standard => {
    console.log(standard);
    this.allCoaches = standard;
    let now =  new Date();
    let start = new Date(2021, 1, 1, 0, 0, 0);
    
    this.dates = this.getDatesBetweenStartEnd(start, now);
    for(var i =0 ; i< this.dates.length; i++){
      let day = this.dates[i].getDate();
      if(day == 1 || day == 11 || day == 21){
        this.counter++;
        console.log(this.dates[i]);
      }
    }
    console.log("this.counter " + this.counter);
    console.log("this.allCoaches.items: " + this.allCoaches.items[0].coaches.length);
    for(var i =0 ; i< this.allCoaches.items[0].coaches.length; i++){
      let currCoach = this.allCoaches.items[0].coaches[i];
      let otherIndex = i;
      for(var j= 1; j<= this.counter; j++){
        otherIndex++;
        console.log("i: " + i);
        console.log("j: " + j);
        console.log("otherIndex: " + otherIndex);
        if(otherIndex == i){
          otherIndex++;
        }
        if(otherIndex == this.allCoaches.items[0].coaches.length){
          otherIndex = 0;
        }
        if(otherIndex == i){
          otherIndex++;
        }
        console.log("otherIndex: " + otherIndex);
      }
      this.matches.push(this.allCoaches.items[0].coaches[otherIndex].firstName + " " + this.allCoaches.items[0].coaches[otherIndex].lastName + " משווק את " + currCoach.firstName + " " + currCoach.lastName)
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

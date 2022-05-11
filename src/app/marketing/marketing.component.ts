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
  lastDate = 1;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.allCoaches = this.getCoaches();
    let now =  new Date();
    let start = new Date(2021, 9, 2, 0, 0, 0);
    
    this.dates = this.getDatesBetweenStartEnd(start, now);
    for(var i =0 ; i< this.dates.length; i++){
      let day = this.dates[i].getDate();
      if(i % 20 == 0){
        this.counter++;
        this.lastDate = day;
      }
    }
    console.log(this.counter);
    for(var i =0 ; i< this.allCoaches.length; i++){
      console.log(this.allCoaches[i]);
    }
    for(var i =0 ; i< this.allCoaches.length; i++){
      let currCoach = this.allCoaches[i];
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
        if(otherIndex == this.allCoaches.length){
          console.log("otherIndex == this.allCoaches.length");
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
       this.allCoaches[otherIndex].firstName + " "
       + this.allCoaches[otherIndex].lastName
       )
    }
    console.log(this.matches);
  }

  getCoaches(){
    let coaches =  [
      {
        "city": "מיתר",
        "email": "neemandu@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "דודי",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "נאמן",
        "niche": "יציאה מהתלם",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "בן",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "מיכאל",
        "niche": "יציאה מהארון",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "לילך",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "גוטמן",
        "niche": "שינוי קריירה",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "אלכס",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "מיכלין",
        "niche": "יציאה מהארון",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "עליזה",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "לוי",
        "niche": "יציאה מהארון",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "ורד",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "פיאנקו-יהלום",
        "niche": "יציאה מהארון",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "שירה",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "שוורץ",
        "niche": "יציאה מהארון",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "ירדן",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "פינקלשטיין",
        "niche": "יציאה מהארון",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "טליה",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "ניניו",
        "niche": "יציאה מהארון",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      },
      {
        "city": "תל אביב",
        "email": "tv@gmail.com",
        "facebookUrl": "https://www.facebook.com/dudi.neeman",
        "firstName": "קארן",
        "id": "",
        "instagramUrl": "https://www.instagram.com/dudi_neeman/",
        "lastName": "בר",
        "niche": "יציאה מהארון",
        "phone": "0549139859",
        "youtubeUrl": "https://www.youtube.com/channel/UCB-D99HqWR_lY_EupUuwz_w"
      }
    ];

    return coaches;
  }
  
  getDatesBetweenStartEnd(start: Date, end: Date): any[] {
    var dates = [];
    for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }

    return dates;
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiKey } from './../env';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  private apiUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/affiliate-search?origin=LON&destination=LAX&departure_date=2018-12-30&adults=1&apikey='+apiKey()
   data: any = {};
   constructor(private http: Http){
     console.log("hello");
     this.getResult();
     this.getData();
   }
   getData()
   {
     return this.http.get(this.apiUrl)
     .map((res: Response) => res.json())
   }
   getResult()
   {
     this.getData().subscribe(data => {
       console.log(data);

       this.data =data;
      })
   }

}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-quotesapp',
  templateUrl: './view-quotesapp.component.html',
  styleUrls: ['./view-quotesapp.component.css']
})
export class ViewQuotesappComponent {

  constructor(private api:ApiService)
  {
    api.fetchQuotesapp().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  data:any=[]

}

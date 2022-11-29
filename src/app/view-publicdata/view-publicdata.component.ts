import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-publicdata',
  templateUrl: './view-publicdata.component.html',
  styleUrls: ['./view-publicdata.component.css']
})
export class ViewPublicdataComponent {

  constructor(private api:ApiService)
  {
    api.fetchPublicdata().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }



  data:any=[]

}

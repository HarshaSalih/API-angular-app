import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-userdata',
  templateUrl: './view-userdata.component.html',
  styleUrls: ['./view-userdata.component.css']
})
export class ViewUserdataComponent {

  constructor(private api:ApiService)
  {
    api.fetchUserdata().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }


  data:any=[]
}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-userinfo',
  templateUrl: './view-userinfo.component.html',
  styleUrls: ['./view-userinfo.component.css']
})
export class ViewUserinfoComponent {

  constructor(private api:ApiService)
  {
    api.fetchUserinfo().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  data:any=[]

}

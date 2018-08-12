import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-filterhouses',
  templateUrl: './filterhouses.component.html',
  styleUrls: ['./filterhouses.component.css']
})
export class FilterhousesComponent implements OnInit {
  houseData:any;
  constructor(private _http:HttpServiceService) { }

  ngOnInit() {

   this._http.getHousesData().subscribe(
      data =>{
        this.houseData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }
}

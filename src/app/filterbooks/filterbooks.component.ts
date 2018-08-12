import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-filterbooks',
  templateUrl: './filterbooks.component.html',
  styleUrls: ['./filterbooks.component.css']
})
export class FilterbooksComponent implements OnInit {
  private dataHere:any;
  bookData:any;
  constructor(private _http:HttpServiceService) { }

  ngOnInit() {

    this.dataHere = this._http.getBooksData().subscribe(
      data =>{
        this.bookData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }

}

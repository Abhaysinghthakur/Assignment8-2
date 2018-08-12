import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import{ActivatedRoute,Router}from '@angular/router'

@Component({
  selector: 'app-filter-character',
  templateUrl: './filter-character.component.html',
  styleUrls: ['./filter-character.component.css']
})
export class FilterCharacterComponent implements OnInit {

  characterData:any;
  private dataHere:any;
  private url='https://www.anapioficeandfire.com/api/characters';
  constructor(private _http:HttpServiceService,private router:Router) { }

  ngOnInit() {

    this.dataHere = this._http.getCharactersData(this.url).subscribe(
      data =>{
        this.characterData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }

}

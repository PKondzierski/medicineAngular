import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  formdata:any;
  drug:any;
  obj:any;
  constructor(private http: HttpClient) { }
    
    ngOnInit() {
      this.formdata = new FormGroup({
        drug: new FormControl("apap"),
      });
   }
   onClickSubmit(data:any) {
     console.log(this.formdata.get('drug').value);
   this.http.get("https://medicinentp.herokuapp.com/api/".concat(this.formdata.get('drug').value)).subscribe(response=>{
      this.obj = response;
   });
  }


}

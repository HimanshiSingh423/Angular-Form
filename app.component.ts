# Angular-Form
Angular Form
# app.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Form2!:FormGroup;
  result:number=0;
  

  constructor(){}
  ngOnInit(): void {
    this.Form2=new FormGroup({tax:new FormControl('',[]),
  
  });
    
 }
 getData()
 {
  let inc=this.Form2.value.tax;
  if(inc<=300000)
  this.result=0;
  else if(inc>300000 && inc <=500000)
  this.result=(inc*10)/100;
  else if(inc>500000 && inc <=1000000)
  this.result=(inc*15)/100;
  else
  this.result=(inc*25)/100;
  
  }
}
# app.component.html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Testing Form</h2>
  <form  [formGroup]="Form2">
    <div class="form-group">
      <label for="no">Enter salary:</label>
      <input type="text" class="form-control"  placeholder="Enter any no" name="tax" formControlName="tax">
    </div>

    
   
    <button type="submit" (click)="getData()" class="btn btn-default">Submit</button>
  </form>
  <h3>Output:{{result | currency}} </h3>
</div>

</body>
</html>
# app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

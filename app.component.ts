import { Component } from '@angular/core';

export class Task{
  assigne:string='';
  DateStart:any;
  DateEnd:any;
  chooseAssigne:string='';
}

export class Create{
  bookName:string='';
  author:string='';
  price:number=0;
  publishedBy:string='';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'propertyAndEventAndNgModel';

  anotherlike:any='';

  isAssigne:boolean=false;

  isDisable:boolean=true;
  
  number1:number=0;
  number2:number=0;
  add1:number=0;

 

  task:Task=new Task();

  create:Create =new Create();



  hello(){
    console.log(this.task);
   
  }

  hi(){
    this.isAssigne
  }

 calci(event:any){
this.number1=event.target.value;
 }
 calci1(event:any){
  this.number2=event.target.value;
  this.add1=Number(this.number1)+Number(this.number2)+100
   }

   creates(){
console.log(this.create);

   }

}

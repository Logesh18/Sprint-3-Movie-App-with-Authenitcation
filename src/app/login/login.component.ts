import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'popcorn-movie-1';
  data:LoginData={
    name:"",
    password:"",
    token:""
  };
  value:any;
  constructor(private router:Router){}

  ngOnInit(): void {
    
  }
  
  login(){
     if(localStorage.getItem(this.data.name)){
         if(JSON.parse(''+localStorage.getItem(this.data.name)).name===this.data.name &&
         JSON.parse(''+localStorage.getItem(this.data.name)).password===this.data.password){
            this.data.token=this.generateToken();
            // this.value=JSON.parse(''+localStorage.getItem(this.data.name));
            // this.value.token+=this.data.token;
            // localStorage.setItem(this.data.name,JSON.stringify(this.value));
            this.router.navigateByUrl('home/'+this.data.token);
         }
         else{
            alert("Please enter correct login credentials");
         }
     }
     else{
       alert("Please signup");
     }
  }
  localData():any{
      return this.value;
  }
  generateToken():any {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < 8; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }
  signup(){
    this.router.navigateByUrl('signup');
  }

}

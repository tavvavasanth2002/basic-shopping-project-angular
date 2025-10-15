import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css'
})
export class NavabarComponent {
  user:any;
  username:any;
  constructor(private router:Router){}
  ngOnInit(){
    if(localStorage.getItem('log')){
      this.user=localStorage.getItem("log");
      this.user=JSON.parse(this.user)
      this.username=this.user.username
      console.log(this.user.value)
    }
    else{
      this.router.navigateByUrl("");
    }
  }
  logout(){
    localStorage.removeItem("log");
    this.router.navigateByUrl("")
  }
}

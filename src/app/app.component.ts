import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ping-single-code';
  Email:any;
  CHK_VALID = false;

  GetInput(){
    let emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    if(!this.Email || !emailRegex.test(this.Email)){
      this.CHK_VALID = true;
    }
    else{
      this.CHK_VALID = false;
    }
    
  }
}

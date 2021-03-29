import { Component, AfterViewInit } from '@angular/core';

import * as firebase from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'sahil-portfolio';

  downloadFile(){
    let link = document.createElement("a");
    link.download = "sahil-resume";
    link.href = "../assets/sahil-Resume.pdf";
    link.click();
}

ngAfterViewInit(){
  firebase.analytics.lo
  
}
}

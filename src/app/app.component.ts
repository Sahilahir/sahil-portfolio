import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sahil-portfolio';

  downloadFile(){
    let link = document.createElement("a");
    link.download = "sahil-resume";
    link.href = "../assets/sahil-Resume.pdf";
    link.click();
}
}

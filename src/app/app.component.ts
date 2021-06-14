import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {

  }
  title = 'sahil-portfolio';

  downloadFile(){
    let link = document.createElement("a");
    link.download = "sahil_ahir-resume";
    link.href = "../assets/SAHIL_AHIR_RESUME.pdf";
    link.click();
}
  
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  connectionList: any = [
    {
      connectIcon: 'fa-brands fa-linkedin',
      connectName: 'LinkedIn',
      connectURL: 'https://www.linkedin.com/in/pragath-pth/'
    },
    {
      connectIcon: 'fa-brands fa-github',
      connectName: 'GitHub',
      connectURL: 'https://github.com/pragath-pth'
    },
    {
      connectIcon: 'fa-brands fa-youtube',
      connectName: 'YouTube',
      connectURL: 'https://www.youtube.com/@PthCreations'
    }
  ]

  openConnectURL(i: any){
    let url: any = this.connectionList[i].connectURL;
    window.open(url, '_blank');
  }
}

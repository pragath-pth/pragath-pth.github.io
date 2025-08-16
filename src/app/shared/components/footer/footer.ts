import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {

  year: any;
  loveToggled: boolean = false;
  
  ngOnInit() {
    this.year = new Date().getFullYear();

  }

  toggleHeart(){
    this.loveToggled = !this.loveToggled;
  }

}

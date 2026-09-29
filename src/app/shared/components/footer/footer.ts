import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pragath-pth';

  constructor(public router: Router, private meta: Meta){ }

  ngOnInit() {
    this.meta.updateTag({ name: 'pragathpth', content: 'My Personal Portfolio' });
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { faEnvelope, faMobileScreen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as AOS from 'aos';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isDarkMode: any;
  valueFromLS: any;
  subscription!: Subscription;
  faEnvelope = faEnvelope;
  faInstagram = faInstagram;
  faMobileScreen= faMobileScreen;
  faPaperPlane = faPaperPlane;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
    date: new FormControl('')
  });

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    AOS.init({disable: 'mobile'});
    AOS.refresh();
    this.valueFromLS = localStorage.getItem('darkMode');
    if(this.valueFromLS === 'true'){
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }

    this.subscription = this.appService.myMethod$.subscribe((res) => {
      this.isDarkMode = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sendData(){
    this.contactForm.controls['date'].setValue(new Date());
    console.log(this.contactForm.value);
  }
}

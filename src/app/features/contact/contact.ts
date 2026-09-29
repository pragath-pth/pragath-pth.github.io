import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface ContactInfo {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
  isExternal?: boolean;
  copyable?: boolean;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  copiedField: string | null = null;
  isSubmitting: boolean = false;
  isSuccess: boolean = false;

  contactInfoList: ContactInfo[] = [
    {
      id: 'phone',
      icon: 'fa-solid fa-mobile-screen',
      label: 'Call Me',
      value: '+91 999 520 2764',
      href: 'tel:+919995202764',
      copyable: true,
    },
    {
      id: 'email',
      icon: 'fa-regular fa-envelope',
      label: 'Email Me',
      value: 'pthswdev@gmail.com',
      href: 'mailto:pthswdev@gmail.com',
      copyable: true,
    },
    {
      id: 'instagram',
      icon: 'fa-brands fa-instagram',
      label: 'Instagram',
      value: '@pragath_pth',
      href: 'https://instagram.com/pragath_pth',
      isExternal: true,
      copyable: false,
    },
    {
      id: 'location',
      icon: 'fa-solid fa-location-dot',
      label: 'Location',
      value: 'Kollam, Kerala, India • IST',
      href: 'https://maps.app.goo.gl/zieq1tpyViJ4k2zf9',
      isExternal: true,
      copyable: false,
    },
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      url: 'https://www.linkedin.com/in/pragath-pth/',
    },
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      url: 'https://github.com/pragath-pth',
    },
    {
      name: 'YouTube',
      icon: 'fa-brands fa-youtube',
      url: 'https://www.youtube.com/@PthCreations',
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      url: 'https://instagram.com/pragath_pth',
    },
  ];

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    date: new FormControl(''),
  });

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }

  copyToClipboard(text: string, fieldId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.copiedField = fieldId;
        setTimeout(() => {
          if (this.copiedField === fieldId) {
            this.copiedField = null;
          }
        }, 2200);
      });
    }
  }

  openURL(url: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  sendData(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.contactForm.controls['date'].setValue(new Date().toISOString());

    console.log('Contact form submitted:', this.contactForm.value);

    // Simulate sending message with polished feedback
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSuccess = true;
    }, 900);
  }

  resetForm(): void {
    this.contactForm.reset();
    this.isSuccess = false;
    this.isSubmitting = false;
  }
}

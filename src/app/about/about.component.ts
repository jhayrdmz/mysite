import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  workExperiences: any[];

  constructor() {
    this.workExperiences = [
      {
        company: 'Blockchain Technologies Philippines Inc.',
        jobTitle: 'Web Developer',
        employmentDuration: 'Alabang, Muntinlupa City — February 2018 - Present',
        jobDescription: 'A Japanese Managed startup company that ventures in the blockchain, mobile gaming, software development and IT services market. It envisioned the adoption of the flexible business practices to operate efficiently and produce more value.',
        companyLogo: './assets/img/bctph-logo.png'
      },
      {
        company: 'Skubbs',
        jobTitle: 'Web Developer',
        employmentDuration: 'Alabang, Muntinlupa City — March 2015 - October 2017',
        jobDescription: 'Skubbs is a Commerce Consultancy that assists businesses in bridging the rapidly widening rift between physical commerce and omni-commerce.',
        companyLogo: './assets/img/skubbs-logo.png'
      },
      {
        company: 'AGR Manila',
        jobTitle: 'Web Artist',
        employmentDuration: 'Alabang, Muntinlupa City — December 2013 - March 2015',
        jobDescription: 'Currently named Personiv, a global business process outsourcing (BPO) provider with a 30-year track record of innovating scalable, reliable, and trusted business services solutions.',
        companyLogo: './assets/img/agr-logo.jpg'
      }
    ];
  }

  ngOnInit() {
  }

}

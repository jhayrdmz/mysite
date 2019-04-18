import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: any[];

  constructor() {
    this.projects = [
      {
        headerImage: './assets/img/heineken-project.jpg',
        title: 'Heineken Draught Challenge',
        description: 'A mobile app for Heineken using Ionic framework.'
      },
      {
        headerImage: './assets/img/samenhappie-project.jpg',
        title: 'Samen Happie',
        description: 'A mobile app for parents to help their children become healthy and active.'
      },
      {
        headerImage: './assets/img/otagonext-project.jpg',
        title: 'Otago Next',
        description: 'A mobile app for elderly focusing in Physiotherapy.'
      },
      {
        headerImage: './assets/img/traveltimetours-project.jpg',
        title: 'Travel Time Tours',
        description: 'A travel and tours agency website using Wordpress.'
      },
      {
        headerImage: './assets/img/antlabs-project.jpg',
        title: 'ANTlabs',
        description: 'ANTlabs Cloud Services monitors client entire network over the web and monetize WiFi with data analytics.'
      },
      {
        headerImage: './assets/img/adocnow-project.jpg',
        title: 'aDocNow',
        description: 'Find nearest and available clinic for booking an appointment using a mobile app with Ionic framework and CodeIgniter.'
      },
      {
        headerImage: './assets/img/stylemart-project.jpg',
        title: 'Stylemart',
        description: 'Custom built Order Management System using CodeIgniter and AngularJS.'
      },
      {
        headerImage: './assets/img/drtanfeedback-project.jpg',
        title: 'DrTan Feedback',
        description: 'Customer feedback mobile app using Ionic framework and wordpress.'
      },
      {
        headerImage: './assets/img/outrich-project.jpg',
        title: 'Outrich Media Networks',
        description: 'Directory listing website for Singapore businesses using Wordpress with custom built theme and functionality.'
      },
      {
        headerImage: './assets/img/hpe-project.jpg',
        title: 'HP/Edenred',
        description: 'Rewards and loyalty solution using mobile app for HP Inc. with Knockoutjs and Phonegap.'
      },
      {
        headerImage: './assets/img/mumartini-project.jpg',
        title: 'Mu Martini Restaurant',
        description: 'Authentic Asian-Thai food restaurant in California, website using wordpress.'
      },
      {
        headerImage: './assets/img/arucanservices-project.jpg',
        title: 'Arucan Services',
        description: 'Family own operated business that has been servicing the Kern County, website using wordpress.'
      },
      {
        headerImage: './assets/img/quincy-project.jpg',
        title: 'The Quincy Valley Post-Register',
        description: 'Local Business, Community, Regional and Business News source Quincy, website using wordpress.'
      },
      {
        headerImage: './assets/img/carlsbad-project.jpg',
        title: 'Carlsbad Elder Care',
        description: 'Elder care website using wordpress using modified Elegant Theme Divi.'
      },
    ];
  }

  ngOnInit() {
  }

}

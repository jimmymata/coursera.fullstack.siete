import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss']
})
export class SocialmediaComponent implements OnInit {

  data:any[];

  constructor() {
    this.data = [
      {
        icon: 'fa-facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/jimmymata/'
      },
      {
        icon: 'fa-linkedin',
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/jimmy-alberto-mata-brenes-70925b104/'
      }
    ]
  }

  ngOnInit(): void {
  }

}

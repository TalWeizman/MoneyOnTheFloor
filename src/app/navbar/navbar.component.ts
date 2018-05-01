import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo: string;

  constructor() {

    setTimeout(() => {

      this.logo = "838ce983ef3e8fd272";

    }, 0)

  }

  ngOnInit() {

  }





}

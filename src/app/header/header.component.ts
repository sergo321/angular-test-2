import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let burger_menu = document.querySelector('.burger_menu');
    let nav_menu = document.querySelector('.nav_menu');
    let home = document.querySelector('.home');
    let about = document.querySelector('.about');
    let contact = document.querySelector('.contact');

    burger_menu?.addEventListener('click', () => {
      nav_menu?.classList.toggle('hidden');
    });
    home?.addEventListener('click', () => {
      nav_menu?.classList.add('hidden');
    });
    about?.addEventListener('click', () => {
      nav_menu?.classList.add('hidden');
    });
    contact?.addEventListener('click', () => {
      nav_menu?.classList.add('hidden');
    });
  }
}

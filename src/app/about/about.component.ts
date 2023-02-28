import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  smoother: any;
  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    this.smoother = ScrollSmoother.create({
      content: '.content',
      wrapper: '.wrapper',
      smooth: 1.3,
    });
    ScrollTrigger.addEventListener('refresh', () => {});
    setTimeout(() => {
      this.smoother.effects('[data-speed], [data-lag]');

      ScrollTrigger.refresh();
    }, 50);
  }
}

import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
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


  imgCollection: Array<object> = [
    {
      image: "../../assets/sliderimg/11.jpg",
      thumbImage: "../../assets/sliderimg/11.jpg",
      alt: "Image 1",
      title: "Image 1",
    },
    {
      image: "../../assets/sliderimg/22.jpg",
      thumbImage: "../../assets/sliderimg/22.jpg",
      title: "Image 2",
      alt: "Image 2",
    },
    {
      image: "../../assets/sliderimg/33.jpg",
      thumbImage: "../../assets/sliderimg/33.jpg",
      title: "Image 3",
      alt: "Image 3",
    },
    {
      image: "../../assets/sliderimg/44.jpg",
      thumbImage: "../../assets/sliderimg/44.jpg",
      title: "Image 4",
      alt: "Image 4",
    },
    {
      image: "../../assets/sliderimg/55.jpg",
      thumbImage: "../../assets/sliderimg/55.jpg",
      title: "Image 5",
      alt: "Image 5",
    },
  ];

}

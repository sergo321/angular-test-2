import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image: '../../assets/sliderimg/1.jpg',
      thumbImage:'../../assets/sliderimg/1.jpg',
           alt: 'Image 1',
                 title: 'Image 1',
    }, {
      image: '../../assets/sliderimg/2.jpg',
      thumbImage: '../../assets/sliderimg/2.jpg',
         title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '../../assets/sliderimg/3.jpg',
      thumbImage: '../../assets/sliderimg/3.jpg', 
         title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '../../assets/sliderimg/4.jpg',
      thumbImage: '../../assets/sliderimg/4.jpg', 
        title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../../assets/sliderimg/5.jpg',
      thumbImage:'../../assets/sliderimg/5.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    },
];
}

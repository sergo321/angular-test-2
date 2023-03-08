import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   
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

import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  eyeball(event:MouseEvent){
      console.log(event.pageX, event.pageY);
      var eyes = document.querySelectorAll('.eye') as NodeListOf<HTMLElement>;
      eyes.forEach(function (eye){
          let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
          let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
          let radian = Math.atan2(event.pageX - x, event.pageY - y);
          let rot = (radian * (180/Math.PI) * -1) + 270;
          console.log("rotacija je"+ rot);
          eye.style.transform = "rotate(" + rot + "deg)";
      })
  }
}


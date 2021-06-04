import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  
  @Input()
  currentLog!: Log;

  @Input()
  isSelected! : boolean;

  style = "wrapper";

  constructor() { }

  ngOnInit(): void {
  }

  onOptionsSelected(){
    // this.style = "wrapperClicked";
  }
}


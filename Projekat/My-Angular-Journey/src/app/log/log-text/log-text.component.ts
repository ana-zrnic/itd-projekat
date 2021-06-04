import { Component, Input, OnInit } from '@angular/core';
import { Log } from 'src/app/log';

@Component({
  selector: 'app-log-text',
  templateUrl: './log-text.component.html',
  styleUrls: ['./log-text.component.css']
})
export class LogTextComponent implements OnInit {

  constructor() { }
/* 
  @Input()
  log: Log[]; */

  /*
    @Input()
    log: Log[]; */

  @Input()
  logTxt!: String;

  ngOnInit(): void {
  }

}

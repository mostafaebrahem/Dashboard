import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, interval, take, fromEvent, throttleTime, asyncScheduler, switchMap, of, pluck, from, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

}

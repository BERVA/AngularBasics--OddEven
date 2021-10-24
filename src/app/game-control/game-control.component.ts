import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {


  @Output() intervalFired : EventEmitter<number> = new EventEmitter();
  interval!: ReturnType<typeof setTimeout>;
  lastNumber : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;

    }, 500);

  }

  onPauseGame(){
   clearInterval(this.interval)

  }

}

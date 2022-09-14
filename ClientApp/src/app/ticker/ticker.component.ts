import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @Output() tickEvent = new EventEmitter();
  @Input() count: any;

  handleInc(e: Event) {
    this.tickEvent.emit("add")
    this.updateStatus(this.add)
  }
  handleDec(e: Event) {
    this.tickEvent.emit('subtract')
    this.updateStatus(this.minus)
  }
  reset() {
    this.tickEvent.emit("reset")
    this.updateStatus(this.startOver)
  }
  updateStatus(newStatus: string) {
    if(!this.statusTransitioning) {
      this.statusTransitioning = true;
      this.fadeIn = false;
      setTimeout(() => {
        this.status = newStatus
        this.fadeIn = true;
        this.resetStatus();
      }, 500)
    }
    
  }
  resetStatus() {
    setTimeout(() => {
      this.fadeIn = false;
      setTimeout(() => {
        this.status = this.ready
        this.fadeIn = true;
        this.statusTransitioning = false;
      }, 500)
    }, 2500)
  }

  add = "Another meal well done!"
  minus = "You can't really undo that..."
  ready = "Ready to Tick the Taters!";
  startOver = "We'll always remember those meals in our hearts!"
  status = this.ready;
  fadeIn = true;
  statusTransitioning = false;

}

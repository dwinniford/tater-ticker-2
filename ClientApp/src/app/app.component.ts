import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listener: any;
  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      console.log(e.target.scrollingElement.scrollTop);
      // todo: extract to service and use to change nav background color on scroll
    });
  }

  title = 'Meat and Taters Counter';
  tickerCount = 0;
  handleTick(e: any) {
    if (e === 'add') {
      this.tickerCount++;
    } else if (e === 'subtract') {
      this.tickerCount--;
    } else if (e === 'reset') {
      this.tickerCount = 0;
    }
  }
  memories = [
    {
      title: 'Steaked Potato',
      forks: 4,
    },
    {
      title: 'Steaked Potato',
      forks: 4,
    },
    {
      title: 'Steaked Potato',
      forks: 4,
    },
  ];
}

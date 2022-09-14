import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.css']
})
export class MemoryCardComponent implements OnInit {

  constructor() { }
  @Input() memory: any;

  ngOnInit(): void {
    for (let index = 0; index < this.memory.forks; index++) {
      this.forkArray.push("../../../assets/images/fork.png")
    }
  }
  forkArray: string[] = [];
 

}

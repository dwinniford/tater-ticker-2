import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-list',
  templateUrl: './memory-list.component.html',
  styleUrls: ['./memory-list.component.css']
})
export class MemoryListComponent implements OnInit {

  constructor() { }
  @Input() memories: any;

  ngOnInit(): void {
  }

}

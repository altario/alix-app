import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() public config: any;
  @Output() public callback = new EventEmitter();

  public dropvalue = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.dropvalue = this.config[event.target.value].id;
    this.callback.emit(this.config[event.target.value].key);
  }
}

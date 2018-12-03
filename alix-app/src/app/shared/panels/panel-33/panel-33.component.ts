import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-33',
    templateUrl: './panel-33.component.html',
    styleUrls: ['./panel-33.component.scss']
})
export class Panel33Component implements OnInit {
    @Input() public name: string;
    @Input() public config: any;

    constructor() {}

    ngOnInit() {}
}

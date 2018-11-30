import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-13',
    templateUrl: './panel-13.component.html',
    styleUrls: ['./panel-13.component.scss']
})
export class Panel13Component implements OnInit {
    @Input() public config: object;

    constructor() {}

    ngOnInit() {}
}

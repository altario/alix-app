import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-10',
    templateUrl: './panel-10.component.html',
    styleUrls: ['./panel-10.component.scss']
})
export class Panel10Component implements OnInit {
    @Input() public config: object;

    constructor() {}

    ngOnInit() {}
}

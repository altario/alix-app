import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-30',
    templateUrl: './panel-30.component.html',
    styleUrls: ['./panel-30.component.scss']
})
export class Panel30Component implements OnInit {
    @Input() public config: any;

    constructor() {}

    ngOnInit() {}
}

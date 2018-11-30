import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-29',
    templateUrl: './panel-29.component.html',
    styleUrls: ['./panel-29.component.scss']
})
export class Panel29Component implements OnInit {
    @Input() public name: string;
    @Input() public config: any;

    constructor() {}

    ngOnInit() {}
}

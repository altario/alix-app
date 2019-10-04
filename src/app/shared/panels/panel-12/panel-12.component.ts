import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-12',
    templateUrl: './panel-12.component.html',
    styleUrls: ['./panel-12.component.scss']
})
export class Panel12Component implements OnInit {
    @Input() public config: any;

    constructor() {}

    ngOnInit() {}
}

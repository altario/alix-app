import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-9',
    templateUrl: './panel-9.component.html',
    styleUrls: ['./panel-9.component.scss']
})
export class Panel9Component implements OnInit {
    @Input() public comparisonCriteria: string;
    @Input() public config: any;

    constructor() {}

    ngOnInit() {}
}

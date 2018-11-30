import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-8',
    templateUrl: './panel-8.component.html',
    styleUrls: ['./panel-8.component.scss']
})
export class Panel8Component implements OnInit {
    @Input()
    public config: any;

    public options: any = {};

    value: any;

    constructor() {}

    ngOnInit() {}
}

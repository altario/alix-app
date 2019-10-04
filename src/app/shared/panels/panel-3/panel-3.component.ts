import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-3',
    templateUrl: './panel-3.component.html',
    styleUrls: ['./panel-3.component.scss']
})
export class Panel3Component implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {}
}

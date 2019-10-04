import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-2',
    templateUrl: './panel-2.component.html',
    styleUrls: ['./panel-2.component.scss']
})
export class Panel2Component implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-11',
    templateUrl: './panel-11.component.html',
    styleUrls: ['./panel-11.component.scss']
})
export class Panel11Component implements OnInit {
    @Input() public config: any;

    constructor() {}

    ngOnInit() {}
}

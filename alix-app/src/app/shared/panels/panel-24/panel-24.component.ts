import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-24',
    templateUrl: './panel-24.component.html',
    styleUrls: ['./panel-24.component.scss']
})
export class Panel24Component implements OnInit {
    @Input() public config: object;

    constructor() {}

    ngOnInit() {}
}

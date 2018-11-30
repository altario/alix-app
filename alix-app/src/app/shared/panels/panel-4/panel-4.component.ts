import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-4',
    templateUrl: './panel-4.component.html',
    styleUrls: ['./panel-4.component.scss']
})
export class Panel4Component implements OnInit {
    @Input()
    public config: any;

    constructor() {}

    ngOnInit() {
    }
}

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PanelListRowComponent } from "./panel-list-row.component";

describe("PanelListRowComponent", () => {
    let component: PanelListRowComponent;
    let fixture: ComponentFixture<PanelListRowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PanelListRowComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PanelListRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

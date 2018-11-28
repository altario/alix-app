import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LongPanelComponent } from "./long-panel.component";

describe("LongPanelComponent", () => {
    let component: LongPanelComponent;
    let fixture: ComponentFixture<LongPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LongPanelComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LongPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

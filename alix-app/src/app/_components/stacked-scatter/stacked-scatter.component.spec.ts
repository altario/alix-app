import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StackedScatterComponent } from "./stacked-scatter.component";

describe("StackedScatterComponent", () => {
    let component: StackedScatterComponent;
    let fixture: ComponentFixture<StackedScatterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StackedScatterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StackedScatterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

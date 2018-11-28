import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StackedImageComponent } from "./stacked-image.component";

describe("StackedImageComponent", () => {
    let component: StackedImageComponent;
    let fixture: ComponentFixture<StackedImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StackedImageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StackedImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

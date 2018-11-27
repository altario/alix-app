import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PortfolioLayoutComponent } from "./portfolio-layout.component";

describe("BaseLayoutComponent", () => {
    let component: PortfolioLayoutComponent;
    let fixture: ComponentFixture<PortfolioLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PortfolioLayoutComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DemandAndOfferDashboardComponent } from "./demand-offer-portfolio.component";

describe("DemandAndOfferDashboardComponent", () => {
    let component: DemandAndOfferDashboardComponent;
    let fixture: ComponentFixture<DemandAndOfferDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemandAndOfferDashboardComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemandAndOfferDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

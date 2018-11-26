// angular
import { Component, TemplateRef, OnInit, AfterViewInit } from '@angular/core'

// ngx-bootstrap
import { BsModalService } from 'ngx-bootstrap/modal'
import { BsModalRef } from 'ngx-bootstrap'

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  modalsMessageWithConformation = `
<button class="btn btn-primary btn-small" (click)="openModal(modMessageConf)">Open Default Modal</button>

<ng-template #modMessageConf>
  <div class="modal-header">
    <h4 class="modal-title">This is a title</h4>
    <button type="button" class="close" aria-label="Close" (click)="modalRef.hide()"></button>
  </div>
  <div class="modal-body">
    <p>This is a Small Body text: But I must explain to you how all this mistaken idea of denouncing pleasure and praising  explorer of the truth, the master-builder of human happiness.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-ghost-primary btn-small action action-cancel" (click)="decline()">Cancel</button>
    <button type="button" class="btn btn-ag-cta btn-small action action-submit" (click)="confirm()">Confirm</button>
  </div>
</ng-template>
  `

  modalsAlertWithConformation = `
<button class="btn btn-primary btn-small" (click)="openModal(modCustomContent, 'modal-dialog-alert')">Open Alert Modal</button>

<ng-template #modCustomContent>
  <div class="modal-header">
    <h4 class="modal-title">Warning!</h4>
    <button type="button" class="close" aria-label="Close" (click)="modalRef.hide()"></button>
  </div>
  <div class="modal-body">
    <p>This action is not reversible.</p>
    <p>Are you sure you want to proceed?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-ghost-primary btn-small action action-cancel" (click)="decline()">Cancel</button>
    <button type="button" class="btn btn-warning btn-small action action-submit" (click)="confirm()">Confirm</button>
  </div>
</ng-template>
  `

  modalsSuccessMessage = `
<button class="btn btn-primary btn-small" (click)="openModal(modSuccess, 'modal-dialog-success')">Open Success Modal</button>

<ng-template #modSuccess>
  <div class="modal-header">
    <button type="button" class="close" aria-label="Close" (click)="modalRef.hide()"></button>
  </div>
  <div class="modal-body">
    <p><strong>Thank You!</strong> Your application was submitted successfully! Job application moved to Pending Applications under My Jobs section.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-success action action-submit" (click)="confirm()">Great!</button>
  </div>
</ng-template>
  `

  modalsInfoMessage = `
<button class="btn btn-primary btn-small" (click)="openModal(modInfo, 'modal-dialog-info')">Open Info Modal</button>

<ng-template #modInfo>
  <div class="modal-header">
    <button type="button" class="close" aria-label="Close" (click)="modalRef.hide()"></button>
  </div>
  <div class="modal-body">
    <p><strong>We are sorry</strong> but your profile doesn’t match the job requirements. Please take a look at our other jobs.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-gray-medium action action-submit" (click)="confirm()">Ok, I understand</button>
  </div>
</ng-template>
  `

  modalsCustomContent = `
<button class="btn btn-primary btn-small" (click)="openModal(modAlertConf)">Custom Content</button>

<ng-template #modAlertConf>
  <div class="modal-body">
    <h1 style="margin-top: 100px; margin-bottom: 100px; text-align: center;">Custom Content</h1>
  </div>
</ng-template>
  `

  modalRef: BsModalRef
  message: string

  constructor(private modalService: BsModalService) {}

  // Modal
  openModal(template: TemplateRef<any>, cls: '') {
    // this.modalRef = this.modalService.show(template);
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: cls }))
  }

  confirm(): void {
    this.message = 'Confirmed!'
    this.modalRef.hide()
  }

  decline(): void {
    this.message = 'Canceled!'
    this.modalRef.hide()
  }

  ngOnInit() {}
}

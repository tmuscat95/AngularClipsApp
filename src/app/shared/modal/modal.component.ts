import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  //providers: [ModalService], //another way of injecting services.
})
export class ModalComponent implements OnInit {
  @Input() modalID = '';
  constructor(public modalService: ModalService, public ef: ElementRef) {
    //console.log(this.modalService.isModalOpen());
  }

  ngOnInit(): void {
    //ElementRef get a reference to the DOM element of this component.
    document.body.appendChild(this.ef.nativeElement);
    /*
    We move this element to the body tag.
    in app-component.html, app-auth-modal is placed as a tag, meaning that by default it will
    render under the app-root tag.
    We may want to place the modal element outside of the the app-root tag so that CSS that applies
    to the app as a whole will not affect the modal.
    */
  }

  closeModal() {
    if (this.modalService.isModalOpen(this.modalID))
      this.modalService.toggleModal(this.modalID);
  }
}

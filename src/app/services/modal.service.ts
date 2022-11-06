import { Injectable } from '@angular/core';
interface IModal {
  id: string;
  visible: boolean;
}
//Singleton by default
@Injectable({
  providedIn: 'root', //can be injected in any component in the app.
})
export class ModalService {
  //private visible = false;
  private modals: IModal[] = [];
  isModalOpen(id: string): boolean {
    return this.modals.find((m) => m.id === id)?.visible ?? false;
  }
  toggleModal(id: string) {
    let modal = this.modals.find((m) => m.id === id);
    if (!!modal) modal!.visible = !modal?.visible;
  }

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((modal) => {
      modal.id !== id;
    });
  }
  constructor() {}
}

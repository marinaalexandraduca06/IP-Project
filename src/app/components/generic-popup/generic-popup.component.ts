import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonTypeInterface } from '../../app.interfaces';

@Component({
  selector: 'ip-generic-popup',
  styleUrls: ['./generic-popup.component.css'],
  templateUrl: './generic-popup.component.html'
})
export class GenericPopupComponent {
  @Input() public header: string;
  @Input() public buttons: ButtonTypeInterface[];
  @Input() public isOpened: boolean;
  @Output() public action: EventEmitter<string> = new EventEmitter<string>();

  public close(): void {
    this.action.emit('Cancel');
  }

  public confirm(button: ButtonTypeInterface): void {
    this.action.emit(button.name);
  }
}

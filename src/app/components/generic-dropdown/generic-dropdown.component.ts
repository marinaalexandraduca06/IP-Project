import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ip-generic-dropdown',
  styleUrls: ['./generic-dropdown.component.css'],
  templateUrl: './generic-dropdown.component.html'
})

export class GenericDropdownComponent {
  @Input() public itemList: string[];
  @Input() public selectedItem: string;
  @Input() public placeholder: string;

  @Output() public apply: EventEmitter<any> = new EventEmitter();
  @Output() public closedDropdown: EventEmitter<any> = new EventEmitter();

  public isDropdownOpened: boolean;

  public toggleDropdown(): void {
    this.isDropdownOpened = !this.isDropdownOpened;
  }

  public onApply(item: string): void {
    this.selectedItem = item;
    this.isDropdownOpened = false;
    this.apply.emit(item);
  }

  public cancel(): void {
    this.isDropdownOpened = false;
  }
}

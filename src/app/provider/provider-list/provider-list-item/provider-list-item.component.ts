import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-provider-list-item',
  templateUrl: './provider-list-item.component.html',
  styleUrls: ['./provider-list-item.component.css']
})
export class ProviderListItemComponent implements OnInit {

  @Input('provider') provider;
  @Input('index') index;
  @Output() deleteProvider = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  onClickDelete() {
    this.deleteProvider.emit((this.index - 1) + '');
  }

}

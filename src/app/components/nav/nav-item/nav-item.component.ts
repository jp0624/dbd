import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubNavComponent } from '../../sub-nav/sub-nav.component';
import { emit } from 'process';
@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, SubNavComponent],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class NavItemComponent implements OnInit {
  @Input() navItem: any;
  @Input() expanded: any;
  @Output() setExpandedEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log('navItem: ', this!.navItem);
  }

  setExpanded(itemName: string) {
    console.log(itemName);
    this.setExpandedEvent.emit(itemName);
  }
}

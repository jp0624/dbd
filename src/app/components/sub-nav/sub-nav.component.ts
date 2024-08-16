import { Component, Input, OnInit } from '@angular/core';
import { SubNavItemComponent } from './sub-nav-item/sub-nav-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sub-nav',
  standalone: true,
  imports: [SubNavItemComponent, NgFor],
  templateUrl: './sub-nav.component.html',
  styleUrl: './sub-nav.component.scss',
})
export class SubNavComponent implements OnInit {
  @Input() subNav!: any;
  constructor() {}

  ngOnInit(): void {
    console.log('subNav: ', this?.subNav);
  }
}

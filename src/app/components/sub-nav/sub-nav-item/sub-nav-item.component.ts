import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './sub-nav-item.component.html',
  styleUrl: './sub-nav-item.component.scss',
})
export class SubNavItemComponent {
  @Input() subItem!: any;
}

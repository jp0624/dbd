import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetSrcService } from '../../../shared/services/getSrc.service';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NgFor } from '@angular/common';
import { SubNavComponent } from '../sub-nav/sub-nav.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavItemComponent, NgFor, SubNavComponent, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  navItems: any[] = [];
  menuOpen: boolean = false;
  expandedMenu = '';
  constructor(private getSrcService: GetSrcService) {}

  ngOnInit(): void {
    this.getSrcService.getSrc('./json/nav.json').subscribe({
      next: (response: any) => {
        this.navItems = response;
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  setOpen(open: boolean) {
    this.menuOpen = !this.menuOpen;
    console.log('menuOpen: ', this.menuOpen);
  }
  setExpanded(item: any) {
    !item.subnav || this.expandedMenu === item.name
      ? (this.expandedMenu = '')
      : (this.expandedMenu = item.name);
  }
}

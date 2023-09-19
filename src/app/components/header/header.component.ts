import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenuService} from "../../services/menu.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private menuService: MenuService) {
    this.items = [];
  }
  items: MenuItem[];

  ngOnInit(): void {
    this.items = this.menuService.items;
  }

}

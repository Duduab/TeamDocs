import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {CRreport} from "./creport";
import {CrplanService} from "../../services/crplan.service";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cr-plan',
  templateUrl: './cr-plan.component.html',
  styleUrls: ['./cr-plan.component.scss']
})
export class CrPlanComponent implements OnInit {
  showText: boolean = true;
  products: CRreport[];
  crs: any = [];
  displayBasic: boolean = false;
  displayCrBasic: boolean = false;
  sortOptions: SelectItem[];
  crTitle: string | undefined;
  loader = true;

  sortOrder: number;

  sortField: string;
  sortKey: any;

  constructor(private crplanService: CrplanService, private primengConfig: PrimeNGConfig, private apiService: ApiService) {
    this.products = [];
    this.sortOptions = [];
    this.sortOrder = 0;
    this.sortField = ''
    this.crTitle = 'CR Details';
  }

  ngOnInit(): void {
    this.crplanService.getProducts().then(data => this.products = data);
    console.log('This is:');
    this.loader = false;
    this.apiService.getCrList().subscribe((res) => {
      console.log('Term successfully created!');
      this.crs = res;
      this.loader = true;
      this.crs.forEach( (cr: { showText: boolean; }) => {
        cr.showText = true;
      });
      console.log(this.crs);
    }, (error) => {
      console.log(error);
    });
    this.sortOptions = [
      {label: 'Progress High to Low', value: '!price'},
      {label: 'Progress Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;

  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  openCrReport(product: CRreport) {
    this.crTitle = product.name;
    this.displayCrBasic = true;
  }

  showIntroduction() {
    this.displayBasic = true;
  }

}

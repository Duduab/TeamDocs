import { Component, OnInit } from '@angular/core';
import {DailyService} from "../../services/daily.service";
import {DailyReport} from "./daily-report";


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  dailyReports: DailyReport[];
  displayBasic: boolean = false;
  displayDailyBasic: boolean = false;
  responsiveOptions: any;
  empTitle: string | undefined;
  searchText: string = '';

  constructor(private dailyService: DailyService) {
    this.dailyReports = [];
    this.empTitle = 'Daily Report'
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.dailyService.getProductsSmall().then((reports: DailyReport[]) => {
      this.dailyReports = reports;
      console.log(reports);
    });
  }


  refresh() {
    // this.ngOnInit();
  }
  showIntroduction() {
    this.displayBasic = true;
  }

  openDailyReport(report: DailyReport) {
    console.log(report);
    this.empTitle = report.name;
    this.displayDailyBasic = true;
  }

}

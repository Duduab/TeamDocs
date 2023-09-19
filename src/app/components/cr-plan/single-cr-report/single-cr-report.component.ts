import { Component, OnInit } from '@angular/core';
import {CrplanService} from "../../../services/crplan.service";

@Component({
  selector: 'app-single-cr-report',
  templateUrl: './single-cr-report.component.html',
  styleUrls: ['./single-cr-report.component.scss']
})
export class SingleCrReportComponent implements OnInit {
  selectedCategories: any[] = [];
  checkList: any = [];
  assigness: any = [];
  constructor(public crplanService: CrplanService) {
    this.assigness = [
      {
        name: "Nofar",
        image: "https://media.licdn.com/dms/image/C4D03AQEbyayKdB0shw/profile-displayphoto-shrink_800_800/0/1609920309473?e=1683158400&v=beta&t=Sl6-hflJgWPG-3tFVwonXgPClqKVBD0NKSRPWOzgZm4"
      },
      {
        name: "Mai",
        image: "https://media.licdn.com/dms/image/C5103AQG2Rb35m_sbyA/profile-displayphoto-shrink_800_800/0/1517078973493?e=1683158400&v=beta&t=oUT9krbZ016kbgcebRDf-bkbR3PDy4vwynf-cvGKwlo"

      },
      {
        name: "Oleg",
        image: "https://media.licdn.com/dms/image/C4D03AQG3xIPfPcnhug/profile-displayphoto-shrink_800_800/0/1517240841466?e=1683158400&v=beta&t=lYq3XMzM2j3u_FzrWoUfc4badkf469maBXQ0Y-BTlxY"
      }
    ]
  }

  ngOnInit(): void {
    this.crplanService.getCheckList().subscribe( a=> {
      this.checkList = a.checkList;
      this.selectedCategories = a.checkList;
      console.log(this.checkList);
    })
  }

}

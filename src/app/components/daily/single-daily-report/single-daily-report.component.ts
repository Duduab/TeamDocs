import { Component, OnInit } from '@angular/core';
import {an} from "chart.js/dist/chunks/helpers.core";

@Component({
  selector: 'app-single-daily-report',
  templateUrl: './single-daily-report.component.html',
  styleUrls: ['./single-daily-report.component.scss']
})
export class SingleDailyReportComponent implements OnInit {
  assigness: any = []
  tasks: any = []
  constructor() {
    this.assigness = [];
    this.tasks = [];
  }

  ngOnInit(): void {
    this.assigness = [
      {
        name: "Nofar",
        image: "https://media-exp1.licdn.com/dms/image/C4D03AQEbyayKdB0shw/profile-displayphoto-shrink_800_800/0/1609920309473?e=1675900800&v=beta&t=gJc4ZEIWSxe_tI-cHVQLyZ0g1CIl78LMZkktQ5jzmeM"
      },
      {
        name: "Mai",
        image: "https://media-exp1.licdn.com/dms/image/C5103AQG2Rb35m_sbyA/profile-displayphoto-shrink_800_800/0/1517078973493?e=1675900800&v=beta&t=J82mIV2JtGtQhCp-ZBW5_mTKoPz_S0cN-vCSvRdHKlU"

      },
      {
        name: "Oleg",
        image: "https://media-exp1.licdn.com/dms/image/C4D03AQG3xIPfPcnhug/profile-displayphoto-shrink_800_800/0/1517240841466?e=1675900800&v=beta&t=nlxa307y46K_kpoRJ_InFRqC2tjXTB8XC-rxl_8C0go"
      }
    ]
    this.tasks = [
      {
        desc: "Usage APCM – Jan-23 release – list of issues",
        subTasks: [
          {
            desc: "CSV issue – “Generate All”  - reproduce the issue qlab02/qlab03",
            key: "D",
          },
          {
            desc: "New issue found in widget – not related to multiple modal. Follow up \\ sync with Dudu",
            key: "D",
          },
          {
            desc: "Test usage summary widget – high speed – subs with 0 usage and with no high speed bucket",
            key: "D",
          }
        ]
      },
      {
        desc: "AutoPay – Pilot CR",
        subTasks: [
          {
            desc: "Test usage summary widget – high speed – subs with 0 usage and with no high speed bucket",
            key: "D",
          },
          {
            desc: "New issue found in widget – not related to multiple modal. Follow up \\ sync with Dudu",
            key: "D",
          },
          {
            desc: "CSV issue – “Generate All”  - reproduce the issue qlab02/qlab03",
            key: "D",
          }
        ]
      },
      {
        desc: "New CR: PR215581 – SiriusXM and Pandora Integration | BSWMBMP-14020 - Offer configuration for SiriusXM to Support Conforming Partner - CSM, Priceplan",
        subTasks: [
          {
            desc: "Read LOE – mainly regression support is needed",
            key: "D",
          },
          {
            desc: "Regression on T&C microapp and deepIO events (dependency on XECM)",
            key: "D",
          }
        ]
      },
      {
        desc: "New CR: BSWMBMP-13733 - CFAM - New credit type  ",
        subTasks: [
          {
            desc: "Read LOE – approved – Mar CD#3 off mode (ON Mode May release)",
            key: "D",
          }
        ]
      },
      {
        desc: "New CR: OTP widgets",
        subTasks: [
          {
            desc: "Read LOE",
            key: "D",
          }
        ]
      },
      {
        desc: "Usage CR217664 – Mai-23 release – list of issues",
        subTasks: [
          {
            desc: "CSV issue – “Generate All”  - reproduce the issue qlab02/qlab03",
            key: "D",
          },
          {
            desc: "New issue found in widget – not related to multiple modal. Follow up \\ sync with Dudu",
            key: "D",
          },
          {
            desc: "Test usage summary widget – high speed – subs with 0 usage and with no high speed bucket",
            key: "D",
          }
        ]
      },
    ]
  }

}

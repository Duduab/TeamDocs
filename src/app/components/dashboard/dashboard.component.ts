import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  users: any = [];
  subData: any;
  termsData: any;
  date14: Date;

  constructor() {
    this.date14 = new Date();
  }

  ngOnInit(): void {
    this.users = [
      {
        name: "Nofar",
        per: 90,
        image: "https://media.licdn.com/dms/image/C4D03AQEbyayKdB0shw/profile-displayphoto-shrink_800_800/0/1609920309473?e=1683158400&v=beta&t=Sl6-hflJgWPG-3tFVwonXgPClqKVBD0NKSRPWOzgZm4"
      },
      {
        name: "Mai",
        per: 36,
        image: "https://media.licdn.com/dms/image/C5103AQG2Rb35m_sbyA/profile-displayphoto-shrink_800_800/0/1517078973493?e=1683158400&v=beta&t=oUT9krbZ016kbgcebRDf-bkbR3PDy4vwynf-cvGKwlo"

      },
      {
        name: "Doriel",
        per: 78,
        image: "https://media.licdn.com/dms/image/C4D03AQEqj-JDodUEiA/profile-displayphoto-shrink_800_800/0/1640694260222?e=1683158400&v=beta&t=HRpxgoYZtzQ-JU1fay9jKMJ2TGnx8odqSTx1S6T6BX8"
      },
      {
        name: "Oleg",
        per: 50,
        image: "https://media.licdn.com/dms/image/C4D03AQG3xIPfPcnhug/profile-displayphoto-shrink_800_800/0/1517240841466?e=1683158400&v=beta&t=lYq3XMzM2j3u_FzrWoUfc4badkf469maBXQ0Y-BTlxY"
      },
      {
        name: "Dudu",
        per: 95,
        image: "https://media.licdn.com/dms/image/C4D03AQHYRAsO6kVWFg/profile-displayphoto-shrink_800_800/0/1535641560039?e=1683158400&v=beta&t=FaHuYvX03ozoVl6Kdiv3N4LVVLi8WEO1igfG203WXZM"
      }
    ]
    this.data = {
      labels: ['Hila', 'Nofar', 'Mai', 'Oleg', 'Doriel', 'Dudu'],
      datasets: [
        {
          label: 'Total Tasks',
          data: [5, 6, 6, 4, 7, 4],
          borderColor: '#c9317f',
        },
        {
          label: 'Completed Tasks',
          data: [2, 3, 1, 0, 6, 2],
          borderColor: '#fbc02d',
        }
      ]
    }
    this.subData = {
      labels: ['Tasks','Sub Tasks'],
      datasets: [
        {
          data: [20, 80],
          backgroundColor: [
            "#c9317f",
            "#2d2b43",
          ],
          hoverBackgroundColor: [
            "#c9317f",
            "#2d2b43",
          ]
        }
      ]
    }

    this.termsData = {
      labels: ['Current Month Terms','Total Terms'],
      datasets: [
        {
          data: [20, 80],
          backgroundColor: [
            "#c9317f",
            "#2d2b43",
          ],
          hoverBackgroundColor: [
            "#c9317f",
            "#2d2b43",
          ]
        }
      ]
    }

  }

}

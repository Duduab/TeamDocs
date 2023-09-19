import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TermsService } from 'src/app/services/terms.service';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';


export interface CardData {
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})

export class TermsComponent implements OnInit {
  showText: boolean = true;
  displayIntroBasic: boolean = false;
  loader = true;
  terms: any = [];
  searchText: string = '';
  Term:any = [];
  displayBasic: boolean = false;

  constructor(public termsService: TermsService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit(): void {
    // json to test when VPN is on:
    this.termsService.getTerms().subscribe( a=> {
      this.terms = a.terms;
    })
    // console.log('This is:');
    // this.loader = false;
    // this.apiService.getTerms().subscribe((res) => {
    //   console.log('Term successfully created!');
    //   this.terms = res;
    //   this.loader = true;
    //   this.terms.forEach( (term: { showText: boolean; }) => {
    //     term.showText = true;
    //
    //   });
    // }, (error) => {
    //   console.log(error);
    // });

  }

  showIntroduction() {
    this.displayBasic = true;
  }

  refresh() {
    this.ngOnInit();
  }

  showT(item : any) {
    item.showText = !item.showText;
  }

  showQuickIntroduction() {
    this.displayIntroBasic = true;
  }
}

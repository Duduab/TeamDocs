import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {MessageService} from 'primeng/api';

interface CrDrop {
  opt: string,
}
@Component({
  selector: 'app-add-new-cr',
  templateUrl: './add-new-cr.component.html',
  styleUrls: ['./add-new-cr.component.scss'],
  providers: [MessageService]
})
export class AddNewCrComponent implements OnInit {
  crOptions: CrDrop[];
  constructor(private apiService: ApiService,
              private messageService: MessageService) {
    this.crOptions = [
      {opt: 'CR'},
      {opt: 'Defect'},
      {opt: 'APCM'},
    ];
  }
  formInvalid = false;
  loader = true;
  form = new FormGroup({
    term: new FormControl('', [Validators.required, Validators.minLength(2)]),
    shortcut: new FormControl('', Validators.required),
    introduction: new FormControl('',  [Validators.required,Validators.minLength(5), Validators.maxLength(80)])
  });

  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    if (!this.form.valid) {
      this.messageService.add({severity:'warn', summary:'Wrong Inputs', detail:'Please fill all the required inputs'});
      return false;
    } else {
      this.loader = false;
      this.apiService.createCr(this.form.value).subscribe(
        (res) => {
          console.log('Cr successfully created!');
          this.loader = true;
          this.messageService.add({severity:'success', summary:'CR ' + this.form.controls.term.value, detail:'Was successfully Created'});
          this.form.reset();
        }, (error) => {
          console.log(error);
          this.messageService.add({severity:'error', summary:'CR ' + this.form.controls.term.value, detail:'Failed to Create'});
        });
      return this.form.value;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MessageService} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.component.html',
  styleUrls: ['./add-new-event.component.scss']
})
export class AddNewEventComponent implements OnInit {

  constructor(private apiService: ApiService,
              private messageService: MessageService) { }
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
      this.apiService.createTerm(this.form.value).subscribe(
        (res) => {
          console.log('Term successfully created!');
          this.loader = true;
          this.messageService.add({severity:'success', summary:'The Term ' + this.form.controls.term.value, detail:'Was successfully Created'});
          this.form.reset();
        }, (error) => {
          console.log(error);
          this.messageService.add({severity:'error', summary:'The Term ' + this.form.controls.term.value, detail:'Failed to Create'});
        });
      return this.form.value;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ConsumeService } from '../services/consume.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formInfo: FormArray;
  constructor(private fb: FormBuilder, 
              private _dataservice: DataService,
              private _consumer: ConsumeService) { }
  
  profileForm = this.fb.group({
    formInfoGroups : this.fb.array([])
  });

  get formInfoGroups() {
    return this.profileForm.get('formInfoGroups') as FormArray;
  }

  ngOnInit() {
    this.agregar();
  }

  submit() {
    this.formInfoGroups.controls.forEach(x => console.log(x.value));
  
    this._dataservice.setIsLoadingEvent(true);

    this._consumer.getJoke().subscribe(response => {
      console.log('Response', response);
    }, error => {
      this._dataservice.setNotificationEvent(`Ocurrio un error [${error}]`);
      this._dataservice.setIsLoadingEvent(false);
    }, () => {
      this._dataservice.setIsLoadingEvent(false);
      this._dataservice.setNotificationEvent('Todo bien!');
    });
  } 

  agregar() {
    this.formInfoGroups.push(this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      })
    }));
  }

}

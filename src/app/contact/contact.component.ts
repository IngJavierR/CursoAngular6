import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formInfo: FormArray;
  constructor(private fb: FormBuilder, 
              private _dataservice: DataService) { }
  
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

    setTimeout(() => {
      this._dataservice.setIsLoadingEvent(false);
      this._dataservice.setNotificationEvent('Todo bien!');
    }, 3000);
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

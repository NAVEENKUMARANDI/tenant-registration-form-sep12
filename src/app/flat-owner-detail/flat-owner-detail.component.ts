import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validator, FormBuilder, Validators, FormArray } from '@angular/forms';

import { FlatOwnerDetailService } from '../../service/flatownerdetailservice';

@Component({
  selector: 'app-flat-owner-detail',
  templateUrl: './flat-owner-detail.component.html',
  styleUrls: ['./flat-owner-detail.component.css']
})
export class FlatOwnerDetailComponent implements OnInit {

  constructor(private fb: FormBuilder, private flatownerdetailservice: FlatOwnerDetailService) { }

  flatOwnerDetailForm = this.fb.group({

    firstName: ['', [Validators.minLength(5), Validators.maxLength(10)]],
    fatherName: ['', [Validators.minLength(5), Validators.maxLength(10)]],
    emailID: [''],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    telePhoneNumber: ['', [Validators.required]],
    streetAddress: ['', [Validators.required]],
    streetAddressLine2: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    postal: ['', [Validators.required, Validators.maxLength(10)]],

    permanentAddressArray: this.fb.array([])
  })

  permanentAddressArrayItem: {
    doornumber: number,
    street: string,
    city: string,
    zipCode: number
  }[];


  permanentAddressFormGroup(): FormGroup {
    return this.fb.group({
      doornumber: ['', [Validators.required, Validators.maxLength(4)]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.flatOwnerDetailForm.value);
    this.flatownerdetailservice.saveFlatownerdetail(this.flatOwnerDetailForm.value);
    console.log('Flatownerdetail Saved Successfully');
  }

  get firstName() {
    return this.flatOwnerDetailForm.get('firstName');
  }
  get fatherName() {
    return this.flatOwnerDetailForm.get('fatherName');
  }
  get emailID() {
    return this.flatOwnerDetailForm.get('emailID');
  }
  get phone() {
    return this.flatOwnerDetailForm.get('phone');
  }
  get telePhoneNumber() {
    return this.flatOwnerDetailForm.get('telePhoneNumber');
  }
  get streetAddress() {
    return this.flatOwnerDetailForm.get('streetAddress');
  }
  get streetAddressLine2() {
    return this.flatOwnerDetailForm.get('streetAddressLine2');
  }
  get city() {
    return this.flatOwnerDetailForm.get('streetAddressLine2');
  }
  get state() {
    return this.flatOwnerDetailForm.get('state');
  }
  get postal() {
    return this.flatOwnerDetailForm.get('postal');
  }
  get permanentAddressArray() {
    return this.flatOwnerDetailForm.get('permanentAddressArray') as FormArray;
  }

  addFlatOwnerDetail() {
    this.permanentAddressArray.push(
      this.permanentAddressFormGroup()
    );
  }
}

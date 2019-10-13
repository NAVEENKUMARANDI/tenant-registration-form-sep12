import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

import { TenantServices } from '../../service/tenantservice';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  Salutions: any = ['Mrs.', 'Ms.', 'Miss.', 'Dr.', 'Mr.']

  Familymembers: any = [1, 2, 3, 4, 5, 6]

  Country: any = ['INDIA']

  permanentAddressArrayItem: {
    doornumber: number,
    street: string,
    city: string,
    zipCode: number
  }[];

  tenantProfileForm = this.fb.group({
    salutions: ['', [Validators.required]],
    firstName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    fatherName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    familyMembers: ['', [Validators.required]],
    // address: ['', [Validators.required]],
    streetAddress: ['', [Validators.required]],
    streetAddressLine2: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    postal: ['', [Validators.required, Validators.maxLength(10)]],
    country: ['', [Validators.required]],

    permanentAddressArray: this.fb.array([])
  })


  permanentAddressFormGroup(): FormGroup {
    return this.fb.group({
      doornumber: ['', [Validators.required, Validators.maxLength(4)]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required]]
    })
  }
  constructor(private fb: FormBuilder, private tenantService: TenantServices) { }

  ngOnInit() {

    this.permanentAddressArrayItem = [];
  }

  onSubmit() {
    console.warn(this.tenantProfileForm.value);
    this.tenantService.saveTenant(this.tenantProfileForm.value);
    console.log('Tenant Saved Successfully');
  }

  get salutions() {
    return this.tenantProfileForm.get('salutions');
  }
  get firstName() {
    return this.tenantProfileForm.get('firstName');
  }
  get lastName() {
    return this.tenantProfileForm.get('lastName');
  }
  get password() {
    return this.tenantProfileForm.get('password');
  }
  get confirmPassword() {
    return this.tenantProfileForm.get('confirmPassword');
  }
  get fatherName() {
    return this.tenantProfileForm.get('fatherName');
  }
  get phone() {
    return this.tenantProfileForm.get('phoneNumber');
  }
  get familyMembers() {
    return this.tenantProfileForm.get('familyMembers');
  }
  // get address() {
  //   return this.tenantProfileForm.get('address');
  // }
  get streetAddress() {
    return this.tenantProfileForm.get('streetAddress');
  }
  get streetAddressLine2() {
    return this.tenantProfileForm.get('streetAddressLine2');
  }
  get city() {
    return this.tenantProfileForm.get('city');
  }
  get state() {
    return this.tenantProfileForm.get('state');
  }
  get postal() {
    return this.tenantProfileForm.get('postal');
  }
  get country() {
    return this.tenantProfileForm.get('country');
  }
  get permanentAddressArray() {
    return this.tenantProfileForm.get('permanentAddressArray') as FormArray;
  }

  addTenantRegistration() {
    this.permanentAddressArray.push(
      this.permanentAddressFormGroup()
    );
  }
}
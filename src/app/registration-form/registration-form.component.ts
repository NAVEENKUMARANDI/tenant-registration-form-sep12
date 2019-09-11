import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  Country: any = ['INDIA']

  tenantProfileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    address: ['', [Validators.required]],
    areaCode: ['', [Validators.required]],
    streetAddress: ['', [Validators.required]],
    streetAddressLine2: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    postal: ['', [Validators.required]],
    country: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.tenantProfileForm.value);
  }

  get firstName() {
    return this.tenantProfileForm.get('firstName');
  }
  get lastName() {
    return this.tenantProfileForm.get('lastName');
  }
  get phone() {
    return this.tenantProfileForm.get('phoneNumber');
  }
  get address(){
    return this.tenantProfileForm.get('address');
  }
  get areaCode() {
    return this.tenantProfileForm.get('areaCode');
  }
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
}

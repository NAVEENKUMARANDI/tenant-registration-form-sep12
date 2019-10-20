import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validator, FormControl, Validators, FormGroup, MinLengthValidator } from '@angular/forms';

import { EbmeterService } from '../../service/ebmeterdetailservice';
@Component({
  selector: 'app-eb-meter-details',
  templateUrl: './eb-meter-details.component.html',
  styleUrls: ['./eb-meter-details.component.css']
})
export class EbMeterDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private ebmeterdetailservice: EbmeterService) { }

  monthList: any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  yearList: any = ['2020', '2019', '2018', '2017', '2016', '2015']

  ebMeterDetailForm = this.fb.group({
    meterID: ['', [Validators.required]],
    currentMappedFlatId: ['', [Validators.required]],
    month: [''],
    year: [''],
    billGeneratedDate: new FormControl(new Date()),
    currentReading: ['', [Validators.required]],
    lastMonthReading: ['', [Validators.required]],
    charges: ['', [Validators.required]],
    securityDeposit: ['', [Validators.minLength(5), Validators.maxLength(10)]],
    discountApplied: ['', [Validators.minLength(4), Validators.maxLength(8)]]
  })

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.ebMeterDetailForm.value);
    this.ebmeterdetailservice.saveEbmeterDetail(this.ebMeterDetailForm.value);
    console.log(this.billGeneratedDate.value);
  }

  get meterID() {
    return this.ebMeterDetailForm.get('meterID');
  }
  get currentMappedFlatId() {
    return this.ebMeterDetailForm.get('currentMappedFlatId');
  }
  get month() {
    return this.ebMeterDetailForm.get('month');
  }
  get year() {
    return this.ebMeterDetailForm.get('year');
  }
  get billGeneratedDate() {
    return this.ebMeterDetailForm.get('billGeneratedDate');
  }
  get currentReading() {
    return this.ebMeterDetailForm.get('currentReading');
  }
  get lastMonthReading() {
    return this.ebMeterDetailForm.get('lastMonthReading');
  }
  get charges() {
    return this.ebMeterDetailForm.get('charges');
  }
  get securityDeposit() {
    return this.ebMeterDetailForm.get('securityDeposit');
  }
  get discountApplied() {
    return this.ebMeterDetailForm.get('discountApplied');
  }
}
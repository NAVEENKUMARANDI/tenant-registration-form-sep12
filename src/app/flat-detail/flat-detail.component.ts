import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validator, FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-flat-detail',
  templateUrl: './flat-detail.component.html',
  styleUrls: ['./flat-detail.component.css']
})
export class FlatDetailComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  flatDetailPageProfileForm = this.fb.group({
    flatNumber: ['', [Validators.required]],
    areaInSquareFit: ['', [Validators.required]],
    numberOfBedRooms: ['', [Validators.required]],
    numberOfBath: ['', [Validators.required]],
    studyRoom: ['', [Validators.required]],
    kitchen:['', [Validators.required]],
    wardrobes: ['', [Validators.required]],
    facing: ['', [Validators.required]],
    monthlyRent: ['', [Validators.required]],
    advance: ['', [Validators.required]],
    floorNumber: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  get flatNumber() {
    return this.flatDetailPageProfileForm.get('flatNumber');
  }
  get areaInSquareFit() {
    return this.flatDetailPageProfileForm.get('areaInSquareFit');
  }
  get numberOfBedRooms() {
    return this.flatDetailPageProfileForm.get('numberOfBedRooms');
  }
  get numberOfBath() {
    return this.flatDetailPageProfileForm.get('numberOfBath');
  }
  get studyRoom() {
    return this.flatDetailPageProfileForm.get('studyRoom');
  }
  get kitchen() {
    return this.flatDetailPageProfileForm.get('kitchen');
  }
  get wardrobes() {
    return this.flatDetailPageProfileForm.get('wardrobes');
  }
  get facing() {
    return this.flatDetailPageProfileForm.get('facing');
  }
  get monthlyRent() {
    return this.flatDetailPageProfileForm.get('monthlyRent');
  }
  get advance() {
    return this.flatDetailPageProfileForm.get('advance');
  }
  get floorNumber() {
    return this.flatDetailPageProfileForm.get('floorNumber');
  }
}

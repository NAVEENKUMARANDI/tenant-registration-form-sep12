import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';

const TENANT_API_URL = 'http://localhost:3000/';

export interface FlatDetail {
    flatNumber: string,
    areaInSquareFit: number,
    numberOfBedRooms: number,
    numberOfBath: number,
    studyRoom: number,
    kitchen: number,
    wardrobes: number,
    facing: String,
    monthlyRent: number,
    advance: number,
    floorNumber: number
}

@Injectable({
    providedIn: 'root'
})
export class FlatDetailServices {


    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }
    public saveFlatDetail(flatdetailObject: FlatDetail) {
        
        console.log("Calling Save FlatDetail");
        console.log(flatdetailObject);
        this.http.post(TENANT_API_URL + 'flatdetail', JSON.stringify(flatdetailObject), { headers: this.headers })
            .toPromise()
            .catch(this.handleError);

        console.log('After - postPersonInfo');
        console.log("Save FlatDetail Successfully");
    }
    /**
  * Method to handle the error during service call
  * @param error Error message
  */
    handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
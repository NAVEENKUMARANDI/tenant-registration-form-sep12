import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';

const TENANT_API_URL = 'http://localhost:3000/';

export interface Flatownerdetail {
    firstName: string,
    fatherName: string,
    emailID: string,
    phone: number,
    telePhoneNumber: number,
    streetAddress: string,
    streetAddressLine2: string,
    city: string,
    state: string,
    postal: number
}

@Injectable({
    providedIn: 'root'
})
export class FlatOwnerDetailService {


    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }
    public saveFlatownerdetail(flatownerdetailObject: Flatownerdetail) {
        
        console.log("Calling Save Flatownerdetail");
        console.log(flatownerdetailObject);
        this.http.post(TENANT_API_URL + 'flatownerdetail', JSON.stringify(flatownerdetailObject), { headers: this.headers })
            .toPromise()
            .catch(this.handleError);

        console.log('After - postPersonInfo');
        console.log("Save Flatownerdetail Successfully");
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
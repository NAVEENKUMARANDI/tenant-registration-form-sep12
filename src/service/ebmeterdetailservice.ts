import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';

const TENANT_API_URL = 'http://localhost:3000/';

export interface Ebmeter {
    merteId: number,
    currentMappedFlatId: number,
    month: string,
    year: number,
    billGeneratedDate: Date,
    readingCurrent: string,
    readingLastMonth: string,
    charges: number,
    securityDeposit: number,
    discountApplied: number
}

@Injectable({
    providedIn: 'root'
})
export class EbmeterService {


    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }
    public saveEbmeterDetail(ebmeterdetailObject: Ebmeter) {
        // Retrives Data From Json and Supplys as Object 
        //  let tenantData = this.http.get('/assets/tenantinformation.json');'
        console.log("Calling Save Ebmeter");
        console.log(ebmeterdetailObject);
        this.http.post(TENANT_API_URL + 'ebmeterdetail', JSON.stringify(ebmeterdetailObject), { headers: this.headers })
            .toPromise()
            .catch(this.handleError);

        console.log('After - postPersonInfo');
        console.log("Save Ebmeter Successfully");
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
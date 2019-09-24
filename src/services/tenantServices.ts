import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';

const TENANT_API_URL= 'http://localhost:3000/';

export interface Tenant {
    salutions: string,
    firstName: string,
    lastName: string,
    fatherName: string,
    phone: number,
    familyMembers: number,
    address: string,
    streetAddress: string,
    streetAddressLine2: string,
    city: string,
    state: string,
    postal: number,
    country: string
}

@Injectable({
    providedIn: 'root'
})
export class TenantServices {

    
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }
    public saveTenant(tenantObject: Tenant){
         // Retrives Data From Json and Supplys as Object 
    //  let tenantData = this.http.get('/assets/tenantinformation.json');
     console.log(tenantObject);
     this.http.post(TENANT_API_URL + 'tenant', JSON.stringify(tenantObject), { headers: this.headers })
     .toPromise()
     .catch(this.handleError);
      
    console.log('After - postPersonInfo');
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
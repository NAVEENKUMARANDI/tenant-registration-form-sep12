import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';

const TENANT_API_URL= 'http://localhost:9090';

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
     this.http.post(TENANT_API_URL + 'addtenant', JSON.stringify(tenantObject), { headers: this.headers });
    }
}
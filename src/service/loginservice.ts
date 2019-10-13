import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Http, Headers, Response } from '@angular/http';

const TENANT_API_URL = 'http://localhost:3000/';

export interface Login {
    
    userName: string,
    password: string
}

@Injectable({
    providedIn: 'root'
})
export class LoginService {


    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }
    public login(loginObject: Login) {
        console.log("Calling Login");
        console.log(loginObject);
        this.http.post(TENANT_API_URL + 'login', JSON.stringify(loginObject), { headers: this.headers })
            .toPromise()
            .catch(this.handleError);

        console.log("Login Success");
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
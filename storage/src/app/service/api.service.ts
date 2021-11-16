import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Bucket } from '../model/bucket';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUri:string = 'http://localhost:4000/api';
  //baseUri:string = 'http://express:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create bucket
  createBucket(data:Bucket): Observable<Bucket> {
    let url = `${this.baseUri}/create`;
    return this.http.post<Bucket>(url, data)

  }

  // Get all buckets
  getBuckets(): Observable<Bucket[]> {
    return this.http.get<Bucket[]>(`${this.baseUri}`);
  }

  // Delete bucket
  deleteBucket(_id:string): Observable<any> {
    let url = `${this.baseUri}/delete/${_id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
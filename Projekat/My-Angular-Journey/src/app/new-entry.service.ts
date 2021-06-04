import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Log } from '../app/log'

@Injectable({
  providedIn: 'root'
})
export class NewEntryService {
  url: string;
  error = false;
  errorMessage = '';

  constructor(private httpClient: HttpClient) { 
    this.url = "http://127.0.0.1:5000/static";
    //this.url = "https://hookb.in/JKMMqXKz3ocJPPWVOjEB";

  }

  public addPost(postData: Object) {
    let endPoints = "/process";
    this.httpClient.post(this.url + endPoints, postData).subscribe(
      (data) => {
      console.log(data);
    },
    (error) => {
      this.defaultServiceErrorHandling(error);      
    });
  }

  

  private defaultServiceErrorHandling(error: any) {
    console.log(error);
    this.error = true;
    if (error.status === 0) {
        // If status is 0, the backend is probably down
        this.errorMessage = 'The backend seems not to be reachable';
    } else if (error.error.message === 'No message available') {
        // If no detailed error message is provided, fall back to the simple error name
        this.errorMessage = error?.error?.error;
    } else {
        this.errorMessage = error.error.message;
    }
}

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from './log';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  url: string;
  error = false;
  errorMessage = '';

  constructor(private httpClient: HttpClient) { 
    this.url = "http://127.0.0.1:5000/static/logs";
  }

  /**
     * get all logs
     * @returns obs of all logs
     */
  getLogs(): Observable<Log[]> {
    console.log("test2");
    return this.httpClient.get<Log[]>(this.url);
  }

  public editEntry(putData: Object, id:number) : Observable<any>{
    if(id==0 ) { return new Observable(); } // if id is undefined
    console.log("To be updated: ", putData);
    return this.httpClient.put<JSON>(this.url + '/' + id, putData);
  }
  public getId(getData:Object, id:number) : Observable<any>{
    if(id==0 ) { return new Observable(); } // if id is undefined
    console.log("To be edited: ", getData);
    return this.httpClient.get<JSON>(this.url + '/' + id);
  }
  

  /**
     * remove an existing log
     * @param id contains the data of the log that should be removed
     */
   deleteLog(id: number): Observable<Log[]> {
    return this.httpClient.delete<Log[]>(this.url + '/' + id);
}

}

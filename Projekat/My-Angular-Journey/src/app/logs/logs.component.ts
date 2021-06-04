import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Log } from '../log';
import { LogService } from '../log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: Log[] = [];
  /* logs: Log[] = [
    {
      id : 1,
      naslov : "naslov1",
      vrijeme : "v1",
      opis : "opis1"
    },
    {
      id : 2,
      naslov : "naslov2",
      vrijeme : "v2",
      opis : "opis2"
    }
  ]; */
  error = false;
  selectedId = 0;
  errorMessage = '';

  constructor(private _logsService: LogService, private router:Router) {  }

  ngOnInit(): void {
    this.loadLogs();
    
  }

  onEditClick(){
    if(this.selectedId == 0) { return ; }
    this.router.navigate(['/edit-entry', this.selectedId]);
    console.log("Clicked edit with id " + this.selectedId);
  }
  

  loadLogs(){
    console.log("test1");
    this._logsService.getLogs().subscribe(
      (data: Log[]) => {
          console.log(data);
          this.logs = data;
      },
      (error: any) => {
          this.defaultServiceErrorHandling(error);
      }
    );
  }

  onDeleteClick(){
    this._logsService.deleteLog(this.selectedId).subscribe(
      (data: Log[]) => {
          console.log(data);
          console.log("Successfully deleted");
          // this.logs = this.logs.filter(log => {log.id != this.selectedId});
          // this.selectedId = 0;
          // console.log(data);
          this.loadLogs();
      },
      (error: any) => {
          this.defaultServiceErrorHandling(error);
      }
    );
  }

  onSelected(id: number | undefined){
    if(id) this.selectedId = id;
  }

  /**
     * Error flag will be activated, if an error occurs somewhere in the program
     * @param error that will be set
     */
  private defaultServiceErrorHandling(error: any) {
    console.log(error);
    this.error = true;
    if (error.status === 0) {
        // If status is 0, the backend is probably down
        this.errorMessage = 'The backend seems not to be reachable';
    } else if (error.error.message === 'No message available') {
        // If no detailed error message is provided, fall back to the simple error name
        this.errorMessage = error.error.error;
    } else {
        this.errorMessage = error.error.message;
    }
  }


}

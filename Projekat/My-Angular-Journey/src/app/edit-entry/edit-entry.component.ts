import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewEntryService } from '../new-entry.service';
import { Log } from '../log';
import { FormBuilder } from '@angular/forms';
import { LogService } from '../log.service';


@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {

  value1!:string;
  value2!:string;
  value3!:string;
    
  entry: Log[] = [];
  checkoutForm = this.formBuilder.group({
    naslov: '',
    opis: '',
    vrijeme: ''
  });

  chosenId = 0;
  defaultEntryModel : Log = { id : 0 , naslov : '', opis : '', vrijeme : ''};
  entryModel : Log = { id : 0 , naslov : '', opis : '', vrijeme : ''};
  
  constructor(private route:ActivatedRoute, private router:Router, private _logService:LogService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.chosenId = +params['id'];
      }
    );
    let myObject = this.checkoutForm.value;
    this.entryModel.id = this.chosenId;
    this.entryModel.naslov = myObject.naslov;
    this.entryModel.opis = myObject.opis;
    this.entryModel.vrijeme = myObject.vrijeme;
    console.log("To be edited as Log: ", this.entryModel);
    this._logService.getId(this.entryModel, this.chosenId).subscribe(
      (data: Log[]) => {
        console.log("Success",data);
        this.entry = data;
        this.value1 = this.entry[0].naslov;
        this.value2 = this.entry[0].opis;
        this.value3 = this.entry[0].vrijeme;
      },
      (error) => {console.error("Error",error);}
    );  
    
  }

  onSubmit(){
    // Process checkout data here
    let myObject = this.checkoutForm.value;
    console.warn('Your order has been submitted', myObject);
    console.log(typeof myObject);

    /* let myString = JSON.stringify(myObject);
    console.warn(myString);
    console.log(typeof myString); */
    this.entryModel.id = this.chosenId;
    this.entryModel.naslov = myObject.naslov;
    this.entryModel.opis = myObject.opis;
    this.entryModel.vrijeme = myObject.vrijeme;
    console.log("To be submitted as Log: ", this.entryModel);
    this._logService.editEntry(this.entryModel, this.chosenId).subscribe(
      (data) => {console.log("Success",data);},
      (error) => {console.error("Error",error);}
    );  
    
    this.entryModel = this.defaultEntryModel;
    this.checkoutForm.reset();
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewEntryService } from '../new-entry.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    naslov: '',
    opis: '',
    vrijeme: ''
  });

  constructor(
    private newEntryService: NewEntryService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(){
    // Process checkout data here
    let myObject = this.checkoutForm.value;
    console.warn('Your order has been submitted', myObject);
    console.log(typeof myObject);

    /* let myString = JSON.stringify(myObject);
    console.warn(myString);
    console.log(typeof myString); */

    this.newEntryService.addPost(myObject);  
    
    this.checkoutForm.reset();
    
  }
  

  ngOnInit(): void {
  }

}

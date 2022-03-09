import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public title = 'Employee details Form';
  loginUser(item: any) {
    console.log(item);
  }
  empModel = new Emp('Sonal Bedi', 'karnal', 9876547899, new Date('06/10/1999'), 'bedisonal06@gmail.com');


  ngOnInit(): void {
  }

}



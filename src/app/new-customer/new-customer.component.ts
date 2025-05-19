import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {Customer} from '../model/customer.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-new-customer',
  standalone: false,
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {
  errorMessage!: String;
  newCustomerFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, private customerService : CustomerService) {}

  ngOnInit(): void {
    this.newCustomerFormGroup = this.fb.group({
      nom : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email : this.fb.control(null, [Validators.required, Validators.email])
    });
  }

  handleAddCustomer() {
    let customer:Customer = this.newCustomerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next : data => {
        alert("Customer has been added!")
      }, error : err => {
        console.log(err)
      }
    })
  }
}

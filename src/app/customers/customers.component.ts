import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CustomerService} from '../services/customer.service';
import {catchError, Observable, throwError} from 'rxjs';
import {Customer} from '../model/customer.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'] // ✔️ corrigé ici
})
export class CustomersComponent implements OnInit {
  customers!: Observable<Array<Customer>>; // ✔️ tableau typé
  errorMessage!: String;
  searchFormGroup : FormGroup | undefined;
  constructor(private customerService : CustomerService, private fb : FormBuilder) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control("")
    })
    this.handleSearchCustomers()
  }

  handleSearchCustomers(){
    let kw = this.searchFormGroup?.value.keyword;
    this.customers = this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteCustomer(customer : Customer) {
    this.customerService.deleteCustomer(customer.id).subscribe({
      next : (resp) => {
        this.handleSearchCustomers();
      },
      error : err => {
        console.log(err);
      }
    })
  }
}

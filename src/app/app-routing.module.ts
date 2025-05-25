import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {AppComponent} from './app.component';
import {NewCustomerComponent} from './new-customer/new-customer.component';
import {CustomerAccountsComponent} from './customer-accounts/customer-accounts.component';

const routes: Routes = [
  { path : "", component : AppComponent},
  { path : "new-customer", component : NewCustomerComponent},
  { path :"customers", component : CustomersComponent},
  { path : "accounts", component : AccountsComponent},
  { path :"customer-accounts/:id", component : CustomerAccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

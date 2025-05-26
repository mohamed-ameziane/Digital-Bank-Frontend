# Digital Bank Angular Frontend | UI Application

## Project Description

This Angular frontend application serves as the **user interface** for the Digital Banking backend built with Spring Boot. It allows users to interact with customer and bank account data through a friendly GUI.

The application is mainly providing:
- Full **CRUD** (Create, Read, Update, Delete) capabilities.
- Account operations management such as **credit**, **debit**, and **transfer**.

---

## Technologies Used

- **Angular** (v15+)
- **TypeScript**
- **Angular CLI**
- **Bootstrap** (styling & responsiveness)
- **RxJS** (asynchronous data streams)
- **Angular Router** (client-side routing)
- **HTTPClientModule** (API communication)

---

## Application Structure & Routing

The application uses Angular routing for seamless navigation between views.

**Routing structure:**
```typescript
const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "new-customer", component: NewCustomerComponent },
  { path: "customers", component: CustomersComponent },
  { path: "accounts", component: AccountsComponent },
  { path: "customer-accounts/:id", component: CustomerAccountsComponent }
];
```

---

## Core Features

### 1️- Customer Management
- View all customers.
- Create new customers.
- Delete customers.
- Search customers by keyword.

### 2️- Account Operations
- View all accounts.
- View accounts per customer.
- Credit or debit account balances.
- Transfer funds between accounts.
- View account operation history (with pagination).

---

## API Integration

This frontend consumes RESTful APIs exposed by the Spring Boot backend.

**Key API endpoints:**
- `GET /customers` → List all customers.
- `GET /customers/{id}` → Get customer by ID.
- `POST /customers` → Add a new customer.
- `DELETE /customers/{id}` → Delete customer.
- `GET /accounts` → List all accounts.
- `GET /accounts/{id}` → Get account details.
- `POST /accounts/debit` → Debit an account.
- `POST /accounts/credit` → Credit an account.
- `POST /accounts/transfer` → Transfer funds.

Data is retrieved via Angular services using **HttpClient**.

---

## How to Run Locally

✅ **Prerequisites:**
- Ensure you have **Node.js** and **Angular CLI** installed.

---

### 1️- Clone the repository:
```bash
git clone https://github.com/mohamed-ameziane/Digital-Bank-Frontend.git
cd Digital-Bank-Frontend
```

### 2️- Install dependencies:
```bash
npm install
```

### 3️- Run the application:
```bash
ng serve
```

### 4- Open your browser:
```
http://localhost:4200
```

**Note:** Ensure the backend is running at `http://localhost:8082`.

---

## Demonstration

---

## Conclusion

This Angular frontend project provides a powerful, responsive, and scalable **user interface** for managing digital banking operations. It seamlessly connects to the Spring Boot backend via RESTful APIs and offers all essential features for secure and efficient customer and account management.

With its component-based architecture, clean code practices, and API-driven design, the application ensures:
- **Scalability**
- **Maintainability**
- **User-friendliness**

---

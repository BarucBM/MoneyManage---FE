import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Account {
  id: string;
  name: string;
  description?: string;
  balance: number;
  type: number;
  createdAt: string;
}

export interface CreateAccountDto {
  name: string;
  description?: string;
  type: number;
  initialBalance: number;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:5000/accounts'; // Adjusted based on typical .NET ports, should match actual Backend launchSettings

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

  createAccount(dto: CreateAccountDto): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, dto);
  }

  deleteAccount(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

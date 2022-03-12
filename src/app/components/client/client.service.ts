import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Clients } from './client.model';
import { map, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3001/Cliente"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', { 
    duration:3000,
    horizontalPosition: "right",
    verticalPosition: "top",
    panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(client: Clients): Observable<Clients> {
    return this.http.post<Clients>(this.baseUrl, client).pipe(
    map((obj) => obj),
  catchError(e => this.errorHandler(e))
);
}

errorHandler(e: any): Observable<any> {
  this.showMessage("Ocorreu um erro!", true);
  return EMPTY;
}

  read(): Observable<Clients[]>{
    return this.http.get<Clients[]>(this.baseUrl)
  }

  readById(id: string): Observable<Clients> {
    const url = `${this.baseUrl}${id}`
    return this.http.get<Clients>(url)
  }

  update(client: Clients): Observable<Clients> {
    const url = `${this.baseUrl}/${client.id}`;
    return this.http.put<Clients>(url, client);
  }

  delete(id: number): Observable<Clients> {
    const url = `${this.baseUrl}${id}`
    return this.http.delete<Clients>(url)
  }
  
}

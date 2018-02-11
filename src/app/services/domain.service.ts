import { Injectable } from '@angular/core';
import {Domain} from '../dto/domain';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DomainService {
  private domainUrl = 'localhost:8080/save';
  constructor(private http: HttpClient,  private messageService: MessageService) { }

  saveInDB(domain:Domain): Observable<Domain> {
    return this.http.post<Domain>(this.domainUrl, domain, httpOptions).pipe(
      tap((domain: Domain) => this.log(`added domain }`)),
      catchError(this.handleError<Domain>('domain'))

    );
  }
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

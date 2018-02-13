import { Injectable } from '@angular/core';
import {Domain} from '../dto/domain';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {of} from 'rxjs/observable/of';
import {MatSnackBar} from '@angular/material';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DomainService {
  private domainUrl = environment.domainUrl;
  constructor(private http: HttpClient,  private messageService: MessageService,public snackBar: MatSnackBar) { }

  saveInDB(domain:Domain): Observable<Domain> {
    return this.http.post<Domain>(this.domainUrl, domain, httpOptions).pipe(
      tap((domain: Domain) => this.successMessage()),
      catchError(this.handleError<Domain>('domain'))

    );
  }
  errorMessage() {
    this.snackBar.open('Erreur durant la sauvegarde ! ', 'une erreur est survenue!', {
      duration: 4000,
    });
  }
  successMessage(){
    this.snackBar.open('Sauvegarde effectuée ! ', 'Bien joué !', {
      duration: 4000,
    });
  }
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    this.errorMessage();
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

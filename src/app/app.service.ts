import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  dataUrl = 'assets/mock-data.json';

  getPersons() {
    return this.http.get<Person>(this.dataUrl);
  }
}


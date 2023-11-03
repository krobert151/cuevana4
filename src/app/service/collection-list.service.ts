import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SagaResponse } from '../modals/saga/saga.module';

@Injectable({
  providedIn: 'root'
})
export class CollectionListService {

  constructor(private http: HttpClient) { }

  getColectionsById(id: string): Observable<SagaResponse> {
    return this.http.get<SagaResponse>('');
  }

}

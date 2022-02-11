import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface baseElement {
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export abstract class DataService<T extends baseElement>{
  url!: string;
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.url) as Observable<T[]>;
  }

  update(object: T) {
    return this.http.patch(`${this.url}/${object.id}`, object);
  }

  add(object: T) {
    return this.http.post(this.url, object);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

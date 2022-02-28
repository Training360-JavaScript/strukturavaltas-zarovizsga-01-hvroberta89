import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl;
  entityName: string = "Cars";

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${ this.apiUrl }${ this.entityName }`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${ this.apiUrl }${ this.entityName }/${id}`);
  }

  create(Car: Car): Observable<Car> {
    return this.http.post<Car>(
      `${this.apiUrl}${this.entityName}/${Car.id}`,
      Car
    );
  }

  update(Car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${this.apiUrl}${this.entityName}/${Car.id}`,
      Car
    );
  }

  delete(id: number): Observable<Car> {
    return this.http.delete<Car>(`${ this.apiUrl }${ this.entityName }/${id}`);
  }

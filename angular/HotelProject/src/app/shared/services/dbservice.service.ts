import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  baseUrl:string = "http://localhost:8888";

  constructor(private _httpObj:HttpClient) { }

  getValue(tablename:any){
    return this._httpObj.get(`${this.baseUrl}/${tablename}`);
  }
  getSingleValue(tablename:any, id:any){
    return this._httpObj.get(`${this.baseUrl}/${tablename}/${id}`);
  }
  
  addValue(tablename:any, body:any){
    return this._httpObj.post(`${this.baseUrl}/${tablename}`, body);
  }
  
  editValue(tablename:any, id:any, body:any){
    return this._httpObj.put(`${this.baseUrl}/${tablename}/${id}`, body);
  }
  
  deleteValue(tablename:any, id:any){
    return this._httpObj.delete(`${this.baseUrl}/${tablename}/${id}`);
  }
}

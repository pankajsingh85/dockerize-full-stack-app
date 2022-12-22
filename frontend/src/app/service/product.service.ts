import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../models/product-model.model';
import { Service } from '../models/service.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public product: Observable<ProductModel>;
  public service:Observable<Service>;
  constructor(private router: Router,
    private http: HttpClient) {
    
  }

  private data: any; 

  setData(data:any){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }
  
  getAll() {
    return this.http.get<ProductModel[]>(`api/view`);
  }

  getPrice(productCode:Number){
    return this.http.get<ProductModel[]>(`api/view/${productCode}`);
  }

  getDetails(productCode:Number){
    return this.http.get<ProductModel[]>(`api/details/${productCode}`);
  }


  filterPrice(product:ProductModel){
    return this.http.post<ProductModel[]>(`api/filter`,product);
  }

 

  create(formData:any) {
    return this.http.post<ProductModel[]>(`api/create`, formData);
  }
  delete(productCode: number) {
    return this.http.get<ProductModel[]>(`api/delete/${productCode}`);
  }

  edit(productCode:number){
    return this.http.get<ProductModel[]>(`api/edit/${productCode}`);
   }
   update(formData:any){
    return this.http.post<ProductModel[]>(`api/update`,formData);
   }

   checkProductCode(product:ProductModel){
    return this.http.post<ProductModel[]>(`api/checkProduct`,product);
  }

   
  checkPinCode(service:Service){
    return this.http.post<Service[]>(`api/checkData`,service);
  }
}

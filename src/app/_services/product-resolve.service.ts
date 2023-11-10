import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../_model/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product>{

resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Product>{
  throw new Error("mEtt");
}
}

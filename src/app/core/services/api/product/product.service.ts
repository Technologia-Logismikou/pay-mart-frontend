import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDto } from 'src/app/helpers/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private readonly http: HttpClient) {}

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/products`
        );
    }

    public createProduct(product: ProductDto): Observable<Product> {
        return this.http.post<Product>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/products`,
            product
        );
    }

    public editProduct(product: ProductDto, id: string): Observable<Product> {
        return this.http.put<Product>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/products/${id}`,
            product
        );
    }

    public delete(id: string): Observable<Product> {
        return this.http.delete<Product>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/products/${id}`
        );
    }
}

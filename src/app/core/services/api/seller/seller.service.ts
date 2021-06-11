import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateSellerDto, Seller } from 'src/app/helpers/models/seller.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SellerService {
    constructor(private readonly http: HttpClient) {}

    public getSellers(): Observable<Seller[]> {
        return this.http.get<Seller[]>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/sellers`
        );
    }

    public createSeller(seller: CreateSellerDto): Observable<Seller> {
        return this.http.post<Seller>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/sellers`,
            seller
        );
    }
}

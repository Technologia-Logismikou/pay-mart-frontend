import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/helpers/models/store.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    constructor(private readonly http: HttpClient) {}

    public getStores(): Observable<Store[]> {
        return this.http.get<Store[]>(
            `${environment.backend.port}://${environment.backend.url}:${environment.backend.port}/stores`
        );
    }
}

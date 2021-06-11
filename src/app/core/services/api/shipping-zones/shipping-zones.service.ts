import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingZone, ShippingZoneDto } from 'src/app/helpers/models/shipping-zone.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ShippingZonesService {
    constructor(private readonly http: HttpClient) {}

    public getShippingZones(): Observable<ShippingZone[]> {
        return this.http.get<ShippingZone[]>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/shipping-zones`
        );
    }

    public createShppingZone(shippingZone: ShippingZoneDto): Observable<ShippingZone> {
        return this.http.post<ShippingZone>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/shipping-zones`,
            shippingZone
        );
    }

    public editShippingZone(id: string, shippingZone: ShippingZoneDto): Observable<ShippingZone> {
        return this.http.put<ShippingZone>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/shipping-zones/${id}`,
            shippingZone
        );
    }

    public deleteShippingZone(id: string): Observable<ShippingZone> {
        return this.http.delete<ShippingZone>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/shipping-zones/${id}`
        );
    }
}

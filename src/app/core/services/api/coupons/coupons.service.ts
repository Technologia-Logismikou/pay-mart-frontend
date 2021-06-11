import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon, CouponDto } from 'src/app/helpers/models/coupon.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CouponsService {
    constructor(private readonly http: HttpClient) {}

    public getCoupons(): Observable<Coupon[]> {
        return this.http.get<Coupon[]>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/coupons`
        );
    }

    public createCoupon(coupon: CouponDto): Observable<Coupon> {
        return this.http.post<Coupon>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/coupons`,
            coupon
        );
    }

    public editCoupon(coupon: CouponDto, id: string): Observable<Coupon> {
        return this.http.put<Coupon>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/coupons/${id}`,
            coupon
        );
    }

    public deleteCoupon(id: string): Observable<Coupon> {
        return this.http.delete<Coupon>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/coupons/${id}`
        );
    }
}

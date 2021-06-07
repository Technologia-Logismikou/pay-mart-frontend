import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CategoryDto } from 'src/app/helpers/models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CategoriesService {
    constructor(private readonly http: HttpClient) {}

    public getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/categories`
        );
    }

    public createCategory(category: CategoryDto): Observable<Category> {
        return this.http.post<Category>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/categories`,
            category
        );
    }

    public editCategory(id: string, category: CategoryDto): Observable<Category> {
        return this.http.put<Category>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/categories/${id}`,
            category
        );
    }

    public deleteCategory(id: string): Observable<Category> {
        return this.http.delete<Category>(
            `${environment.backend.protocol}://${environment.backend.url}:${environment.backend.port}/categories/${id}`
        );
    }
}

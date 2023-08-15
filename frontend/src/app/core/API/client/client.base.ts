import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, of, throwError } from 'rxjs';
import { HTTPGetOptions } from './client.interfaces';
// import { ErrorReportService } from '@core/services/error-report.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HTTPClient {
    baseUrl = environment.baseUrl;

    constructor(
        private readonly http: HttpClient, // private readonly errorReportService: ErrorReportService,
    ) {}

    getWithoutError<T>(
        url: string,
        options?: HTTPGetOptions,
        errorMessage?: string,
    ): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${url}`, options).pipe(
            catchError((error) => {
                return this.handleError<T>(error, errorMessage);
            }),
        );
    }

    get<T>(url: string, options?: HTTPGetOptions): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${url}`, options).pipe(
            catchError((error) => {
                return this.returnError<T>(error);
            }),
        );
    }

    postWithoutError<T, B>(
        url: string,
        body: B,
        options?: HTTPGetOptions,
        errorMessage?: string,
    ): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}${url}`, body, options).pipe(
            catchError((error) => {
                return this.handleError<T>(error, errorMessage);
            }),
        );
    }

    post<T, B>(url: string, body: B, options?: HTTPGetOptions): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}${url}`, body, options).pipe(
            catchError((error) => {
                return this.returnError<T>(error);
            }),
        );
    }

    blobPost<B>(url: string, body: B): Observable<Blob> {
        return this.http.post(`${this.baseUrl}${url}`, body, {
            observe: 'body',
            responseType: 'blob',
        });
    }

    deleteWithoutError<T>(
        url: string,
        options?: HTTPGetOptions,
        errorMessage?: string,
    ): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}${url}`, options).pipe(
            catchError((error) => {
                return this.handleError<T>(error, errorMessage);
            }),
        );
    }

    delete<T>(url: string, options?: HTTPGetOptions): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}${url}`, options).pipe(
            catchError((error) => {
                return this.returnError<T>(error);
            }),
        );
    }

    patchWithoutError<T, B>(
        url: string,
        body: B,
        options?: HTTPGetOptions,
        errorMessage?: string,
    ): Observable<T> {
        return this.http.patch<T>(`${this.baseUrl}${url}`, body, options).pipe(
            catchError((error) => {
                return this.handleError<T>(error, errorMessage);
            }),
        );
    }

    patch<T, B>(url: string, body: B, options?: HTTPGetOptions): Observable<T> {
        return this.http.patch<T>(`${this.baseUrl}${url}`, body, options).pipe(
            catchError((error) => {
                return this.returnError<T>(error);
            }),
        );
    }

    putWithoutError<T, B>(
        url: string,
        body: B,
        options?: HTTPGetOptions,
        errorMessage?: string,
    ): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}${url}`, body, options).pipe(
            catchError((error) => {
                return this.handleError<T>(error, errorMessage);
            }),
        );
    }

    put<T, B>(url: string, body: B, options?: HTTPGetOptions): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}${url}`, body, options).pipe(
            catchError((error) => {
                return this.returnError<T>(error);
            }),
        );
    }

    // TODO: Дописать необходимую обрабокту (вызов окон, отправка в Центри и т.д.)
    // Продумать соглашение об ошибках и структуре данных.
    private returnError<T>(error: any): Observable<T> {
        // Обработка ошибки
        // return of({});
        return throwError(error);
    }

    handleError<T>(error: any, errorMessage?: string): Observable<any> {
        console.error(error);
        /*this.errorReportService.showMessage(
            errorMessage ? errorMessage : 'Произошла ошибка',
            'Закрыть',
            '',
        );*/
        return of(EMPTY);
    }
}

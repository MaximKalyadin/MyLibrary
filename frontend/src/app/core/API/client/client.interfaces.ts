import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

// Создан т.к. пока нет точного описания типа в спецификации.
export interface HTTPGetOptions {
    headers?:
        | HttpHeaders
        | {
              [header: string]: string | string[];
          };
    context?: HttpContext;
    observe?: 'body';
    params?:
        | HttpParams
        | {
              [param: string]:
                  | string
                  | number
                  | boolean
                  | ReadonlyArray<string | number | boolean>;
          };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}

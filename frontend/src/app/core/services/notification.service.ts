import { Inject, Injectable } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    constructor(
        @Inject(TuiAlertService) private readonly alert: TuiAlertService,
    ) {}

    warning(msg: string, title?: string, error?: Error): void {
        if (error) {
            console.warn(error);
        }

        this.alert
            .open(msg ?? '', {
                label: title ?? 'Предупреждение',
                status: 'warning',
                hasCloseButton: true,
            })
            .subscribe();
    }

    error(msg: string, title?: string, error?: Error): void {
        if (error) {
            console.error(error);
        }
        this.alert
            .open(msg ?? '', {
                label: title ?? 'Ошибка',
                status: 'error',
                hasCloseButton: true,
            })
            .subscribe();
    }

    success(msg: string, title?: string): void {
        this.alert
            .open(msg ?? '', {
                label: title ?? 'Успех',
                status: 'success',
                hasCloseButton: true,
            })
            .subscribe();
    }

    info(msg: string, title?: string, log?: any): void {
        if (log) {
            console.log(log);
        }
        this.alert
            .open(msg ?? '', {
                label: title ?? 'Сообщение',
                status: 'info',
                hasCloseButton: true,
            })
            .subscribe();
    }
}

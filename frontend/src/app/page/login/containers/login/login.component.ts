import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
} from '@angular/core';
import { Description } from '../../login.interfaces';
import { LoginStoreService } from '../../data-services/login-store.service';
import { loginForm } from '../../login.foms';
import { Utils } from '@core/models/types/utils';
import { TuiSizeL, TuiSizeS } from '@taiga-ui/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LoginStoreService],
})
export class LoginComponent {
    form: loginForm;
    description: Description[] = [
        {
            title: 'Книги',
            description:
                'Книги по программированию охватывают широкий пласт обучающей, справочной, вдохновляющей литературы. ' +
                'Читая их, вы не только учитесь чему-то новому, но и совершенствуете навыки в сфере разработки программного обеспечения.',
        },
        {
            title: 'Документация',
            description:
                'Техническая документация позволяет оценить стоимость разработки и согласовать функциональность будущей системы. ' +
                'При возникновении споров о стоимости и сроках разработки той или иной фичи она может стать определенной гарантией для заказчика. ' +
                'С другой стороны, если возникнет потребность в развитии приложения, документация облегчит процесс доработки ' +
                'и даст четкое понимание, возможно ли встроить новую функциональность в существующую систему.',
        },
        {
            title: 'Статьи',
            description:
                'Качественные статьи для программистов нужны, чтобы IT-сфера дышала и развивалась. ' +
                'Кроме того, для вас самих есть масса стимулов к созданию хороших технических материалов. ' +
                'Получается, это выгодно для автора, читателя и даже для всей индустрии целиком.',
        },
        {
            title: 'Примеры кода',
            description:
                'Компьютер не понимает человеческие языки. Но и программный код на современных языках программирования ' +
                'ему непонятен: его нужно компилировать или интерпретировать, чтобы он заработал. Возникает вопрос: почему ' +
                'тогда не писать программы на человеческом языке. Но так не получится — код все-таки нужен.',
        },
        {
            title: 'Видео',
            description:
                'Мы используем видео-материал, человек смотрит видео, где я на его глазах с нуля создаю этот движок форума, ' +
                'попутно объясняя всё что нужно, все детали и тонкости. К видео прилагаю ссылку на исходный код. Что делает новичок? ' +
                'Смотрит видео, понимает вроде как бы всё, скачивает исходник, пробует его - получает ощущение, что он всё понял, запомнил и теперь может делать что-то подобное.',
        },
    ];

    sizeInput: TuiSizeL | TuiSizeS = 'l';
    sizeButton: 'm' | 'l' | 'xl' | 's' | 'xs' = 'xl';

    @HostListener('window:resize', [])
    private onResize() {
        this.setSize();
    }

    constructor(private readonly store: LoginStoreService) {
        this.form = store.form;
        this.setSize();
    }

    setSize(): void {
        if (window.innerWidth <= Utils.MOBILE_MAX_WIDTH) {
            this.sizeInput = this.sizeButton = 'm';
        } else {
            this.sizeInput = 'l';
            this.sizeButton = 'xl';
        }
    }
}

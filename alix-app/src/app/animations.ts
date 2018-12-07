// angular
import { trigger, animate, transition, style, query } from '@angular/animations';

const animTime = '0s';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter',
      [
        style({ opacity: 0 })
      ],
      { optional: true }
    ),
    query(':leave',
      [
        style({ opacity: 1 }),
        animate(animTime,
          style({ opacity: 0 })
        )
      ],
      { optional: true }
    ),
    query(':enter',
      [
        style({ opacity: 0 }),
        animate(animTime,
          style({ opacity: 1 })
        )
      ],
      { optional: true }
    )
  ])
]);

import { animation, query, style, stagger, animate } from '@angular/animations';

export const scaleAnimation = animation([
  query(
    ':enter',
    [
      style({ transform: 'scaleY(0) scaleX(0)', opacity: 0 }),
      stagger(100, [animate('{{timing}}', style({ transform: 'scaleY(1) scaleX(1)', opacity: 1 }))])
    ],
    { optional: true }
  ),
  query(
    ':leave',
    [
      style({ transform: 'scaleY(1) scaleX(1)', opacity: 1 }),
      stagger(50, [animate('{{timing}}', style({ transform: 'scaleY(0) scaleX(0)', opacity: 0 }))])
    ],
    { optional: true }
  )
]);

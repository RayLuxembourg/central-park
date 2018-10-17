import { animation, query, style, stagger, animate } from '@angular/animations';

export const slideInAnimation = animation([
  style({ transform: 'translateX({{distance}})', opacity: 0 }),
  stagger(100, [animate('{{timing}}', style('*'))])
]);

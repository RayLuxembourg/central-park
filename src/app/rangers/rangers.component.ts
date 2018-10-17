import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  stagger,
  animate,
  group,
  query,
  sequence,
  useAnimation
} from '@angular/animations';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { RangersStore } from '../common/stores/rangers.store';
import { scaleAnimation } from '../common/animations/scale.animation';
import { slideInAnimation } from '../common/animations/slidein.animation';

@Component({
  selector: 'app-rangers',
  templateUrl: './rangers.component.html',
  styleUrls: ['./rangers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        group([
          query(
            '.selected-ranger',
            useAnimation(slideInAnimation, {
              params: {
                distance: '-200px',
                timing: '500ms cubic-bezier(0.35, 0, 0.25, 1)',
                element: '.selected-ranger',
                stag: 100
              }
            }),
            { optional: true }
          ),
          query(
            '.ranger',
            useAnimation(slideInAnimation, {
              params: {
                distance: '200px',
                timing: '500ms cubic-bezier(0.35, 0, 0.25, 1)',
                element: '.ranger',
                stag: 100
              }
            }),
            { optional: true }
          ),
          query(
            '.name',
            useAnimation(slideInAnimation, {
              params: {
                distance: '200px',
                timing: '500ms 500ms cubic-bezier(0.35, 0, 0.25, 1)',
                element: '.name',
                stag: 100
              }
            }),
            { optional: true }
          ),
          query(
            '.reported p',
            useAnimation(slideInAnimation, {
              params: {
                distance: '200px',
                timing: '500ms 1000ms cubic-bezier(0.35, 0, 0.25, 1)',
                element: '.reported p',
                stag: 100
              }
            }),
            { optional: true }
          ),
          query(
            '.tree  ',
            [
              style({ transform: 'scaleY(0) scaleX(0)', opacity: 0 }),
              stagger(100, [animate('500ms 1.5s cubic-bezier(0.35, 0, 0.25, 1)', style('*'))])
            ],
            { optional: true }
          )
        ])
      ])
    ]),
    trigger('tree', [
      transition('* => *', [
        useAnimation(scaleAnimation, { params: { timing: '200ms cubic-bezier(0.35, 0, 0.25, 1)' } })
      ])
    ])
  ]
})
export class RangersComponent implements OnInit {
  id;
  loading: boolean;

  @ViewChild('top')
  topElement: ElementRef<HTMLDivElement>;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: RangersStore,
    private cdr: ChangeDetectorRef
  ) {}

  private load() {
    if (!this.route.snapshot.data['rangers']) {
      this.error = true;
      return;
    }
    this.error = false;
    const { rangers, ids } = this.route.snapshot.data['rangers'];
    this.store.init(ids, rangers);
    this.id = this.route.snapshot.params['id'];
  }

  private watchRouterEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        this.load();
        this.cdr.detectChanges();
      }
    });
  }

  ngOnInit() {
    this.load();
    this.watchRouterEvents();
  }

  scrollTo() {
    const host = document.querySelector('.grid');
    host.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

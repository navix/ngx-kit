import {
  AfterContentInit,
  AfterViewChecked, AfterViewInit, Component,
  ElementRef, EventEmitter, HostBinding, Inject, Input, NgZone, OnChanges, OnDestroy,
  OnInit, Output,
} from '@angular/core';

import { StylerComponent } from '@ngx-kit/styler';

import { kitComponentOverlayContainer } from '../meta/tokens';
import { KitComponentStyle } from '../meta/component';
import { OverlayContainerPosition } from '../meta/overlay';

/**
 * @todo click hide
 * @todo dropdown - show at other side if space is not enough
 * @todo improve reposition performance
 * @todo type=side move from edge
 */
@Component({
  selector: 'kit-overlay-container',
  template: `
    <div [ngStyle]="holderStyle">
      <ng-content></ng-content>
    </div>
  `,
  viewProviders: [
    StylerComponent,
  ],
})
export class KitOverlayContainerComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit {

  @Input() overlay: boolean;
  @Input() type: string;
  @Input() anchor: HTMLElement;
  @Input() position: OverlayContainerPosition;

  @Output() outsideClick = new EventEmitter<any>();

  @HostBinding('attr.sid') get hostClass() {
    return this.styler.host.sid;
  };

  holderStyle = {};

  constructor(private styler: StylerComponent,
              @Inject(kitComponentOverlayContainer) private style: KitComponentStyle,
              private zone: NgZone,
              private elementRef: ElementRef) {
    this.styler.register(this.style.getStyles());
  }

  ngOnInit() {
    // listeners
    this.zone.runOutsideAngular(() => {
      // @todo use renderer2 (currently it does not have listenGlobal)
      // reposition
      document.addEventListener('scroll', this.reposition, true);
      window.addEventListener('resize', this.reposition, true);
      // outside click
      document.addEventListener('click', this.clickListener);
    });
  }

  ngOnChanges() {
    this.styler.host.applyState({
      overlay: this.overlay,
      type: this.type,
    });
    this.reposition();
  }

  ngAfterViewInit() {
    this.reposition();
  }

  ngAfterViewChecked() {
    this.reposition();
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
    document.removeEventListener('scroll', this.reposition, true);
    window.removeEventListener('resize', this.reposition, true);
    document.removeEventListener('click', this.clickListener);
  }

  private reposition = () => {
    if (this.type === 'dropdown') {
      const rect: ClientRect = this.anchor.getBoundingClientRect();
      this.zone.run(() => {
        this.holderStyle = {
          position: 'fixed',
          top: `${Math.round(rect.top + this.anchor.offsetHeight)}px`,
          left: `${Math.round(rect.left)}px`,
          width: `${Math.round(this.anchor.offsetWidth)}px`
        };
      });
    } else if (this.type === 'side') {
      const rect: ClientRect = this.anchor.getBoundingClientRect();
      this.zone.run(() => {
        switch (this.position) {
          case 'top':
            this.holderStyle = {
              position: 'fixed',
              top: `${Math.round(rect.top)}px`,
              left: `${Math.round(rect.left + this.anchor.offsetWidth / 2)}px`,
              transform: 'translateX(-50%) translateY(-100%)',
            };
            break;
          case 'bottom':
            this.holderStyle = {
              position: 'fixed',
              top: `${Math.round(rect.bottom)}px`,
              left: `${Math.round(rect.left + this.anchor.offsetWidth / 2)}px`,
              transform: 'translateX(-50%)',
            };
            break;
          case 'left':
            this.holderStyle = {
              position: 'fixed',
              top: `${Math.round(rect.top + this.anchor.offsetHeight / 2)}px`,
              left: `${Math.round(rect.left)}px`,
              transform: 'translateX(-100%) translateY(-50%)',
            };
            break;
          case 'right':
            this.holderStyle = {
              position: 'fixed',
              top: `${Math.round(rect.top + this.anchor.offsetHeight / 2)}px`,
              left: `${Math.round(rect.right)}px`,
              transform: 'translateY(-50%)',
            };
            break;
          default:
            throw new Error('In development!');
        }
      });
    }
  };

  private clickListener = (event: MouseEvent) => {
    const path = event['path'];
    if (path.indexOf(this.elementRef.nativeElement) === -1) {
      this.zone.run(() => {
        this.outsideClick.emit(true);
      });
    }
  };

}
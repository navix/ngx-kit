import { NgModule } from '@angular/core';

import { StylerModule } from '@ngx-kit/styler';

import { KitBadgeComponent } from './kit-badge/kit-badge.component';
import { KitDividerComponent } from './kit-divider/kit-divider.component';
import { KitPopoverComponent } from './kit-popover/kit-popover.component';
import { KitTagComponent } from './kit-tag/kit-tag.component';
import { KitTooltipDirective } from './kit-tooltip/kit-tooltip.directive';
import { KitTooltipViewComponent } from './kit-tooltip/kit-tooltip-view.component';
import { KitCoreModule } from '@ngx-kit/core';

const exported = [
  KitBadgeComponent,
  KitDividerComponent,
  KitPopoverComponent,
  KitTagComponent,
  KitTooltipDirective,
];

const entry = [
  KitTooltipViewComponent,
];

@NgModule({
  imports: [
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
    ...entry,
  ],
  entryComponents: entry,
  providers: []
})
export class KitMiscModule {
}

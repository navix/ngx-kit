import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultAccordionPanelStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  content(): StyleDef {
    return {
      padding: [this.theme.params.grid.v * 2, this.theme.params.grid.h * 3],
      ...applyTypoColorSet(this.theme.params.moduleAccordion.colors.content),
    };
  }

  host(): StyleDef {
    return {
      border: [1, 'solid', this.theme.params.moduleAccordion.colors.border],
      borderBottomWidth: 0,
      display: 'block',
      ...applyTypoColorSet(this.theme.params.moduleAccordion.colors.title),
      $nest: {
        '&:last-child': {
          borderBottomWidth: 1,
        },
      },
    };
  }

  title(state: {active: boolean}): StyleDef {
    return {
      cursor: 'pointer',
      height: this.theme.params.grid.v * 4,
      lineHeight: this.theme.params.grid.h * 4,
      paddingLeft: this.theme.params.grid.v * 3,
      userSelect: 'none',
      ...this.def.toggle(state.active, {}),
    };
  }
}

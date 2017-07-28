import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerColorService, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultDatePickerStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  date(state: {outside: boolean, active: boolean}): StyleDef {
    const color = this.theme.getColor(this.theme.params.modules.datePicker.color);
    return this.def.merge([
      {
        border: [1, 'solid', color.border],
        boxSizing: 'border-box',
        cursor: 'pointer',
        flexShrink: 0,
        padding: 4,
        textAlign: 'center',
        transition: 'background .2s',
        width: '14.28574%',
        $nest: {
          '&:hover': {
            background: this.theme.colorMod(.04, color.background),
          },
        },
      },
      this.def.toggle(state.outside, {
        opacity: .7,
      }),
      this.def.toggle(state.active, {
        background: this.theme.colorMod(.1, color.background),
        borderColor: this.theme.colorMod(.1, color.border),
        boxShadow: `0 0 7px 0 rgba(0, 0, 0, .2)`,
        cursor: 'default',
        fontWeight: 600,
        $nest: {
          '&:hover': {
            background: this.theme.colorMod(.1, color.background),
          },
        },
      }),
    ]);
  }

  dates(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
  }

  host(): StyleDef {
    return {};
  }

  month(state: {type: 'change' | 'current'}): StyleDef {
    const color = this.theme.getColor(this.theme.params.modules.datePicker.color);
    return {
      border: [1, 'solid', color.border],
      ...this.def.pick(state.type, {
        change: {
          cursor: 'pointer',
          padding: '0 4px',
        },
        current: {
          flexGrow: 1,
          fontWeight: 600,
          fontSize: '1.15rem',
          textAlign: 'center',
        },
      }),
    };
  }

  months(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      lineHeight: 30,
    };
  }

  weekday(): StyleDef {
    const color = this.theme.getColor(this.theme.params.modules.datePicker.color);
    return {
      border: [1, 'solid', color.border],
      boxSizing: 'border-box',
      cursor: 'pointer',
      flexShrink: 0,
      padding: 4,
      textAlign: 'center',
      transition: 'background .2s',
      width: '14.28574%',
    };
  }

  weekdays(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
    };
  }

  year(state: {type: 'change' | 'current'}): StyleDef {
    const color = this.theme.getColor(this.theme.params.modules.datePicker.color);
    return {
      border: [1, 'solid', color.border],
      ...this.def.pick(state.type, {
        change: {
          cursor: 'pointer',
          padding: '0 4px',
        },
        current: {
          flexGrow: 1,
          fontWeight: 600,
          fontSize: '1.15rem',
          textAlign: 'center',
        },
      }),
    }
  }

  years(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      lineHeight: 30,
    };
  }
}
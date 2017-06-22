import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultButtonStyle implements KitComponentStyle {

  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService,
              private color: StylerColorService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        textDecoration: 'none',
        marginBottom: 0,
        fontWeight: 400,
        textAlign: 'center',
        verticalAlign: 'middle',
        cursor: 'pointer',
        backgroundImage: 'none',
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        lineHeight: '1.42857',
        borderRadius: '3px',
        userSelect: 'none',
        boxShadow: params.shadows.element,
        $states: {
          size: [{
            xs: {
              padding: `${params.grid.h / 8}px ${params.grid.v / 2}px`,
              fontSize: '.8rem',
            },
            s: {
              padding: `${params.grid.h / 4}px ${params.grid.v}px`,
              fontSize: '1rem',
            },
            m: {
              padding: `${params.grid.h / 2}px ${params.grid.v * 1.5}px`,
              fontSize: '1.1rem',
            },
            l: {
              padding: `${params.grid.h}px ${params.grid.v * 2.5}px`,
              fontSize: '1.3rem',
            },
            xl: {
              padding: `${params.grid.h * 2}px ${params.grid.v * 4}px`,
              fontSize: '1.6rem',
            },
            $default: 'm',
          }],
          type: [{
            'default': {
              background: params.colors.button.color,
              color: params.colors.button.text,
              borderColor: params.colors.border.color,
              $nest: {
                '&:hover': {
                  background: this.theme.colorMod(.05, params.colors.button.color),
                },
              }
            },
            primary: {
              background: params.colors.brand.color,
              borderColor: params.colors.brand.color,
              color: params.colors.brand.text,
              $nest: {
                '&:hover': {
                  background: this.theme.colorMod(.05, params.colors.brand.color),
                },
              }
            },
            success: {
              background: params.colors.success.color,
              borderColor: params.colors.success.color,
              color: params.colors.success.text,
              $nest: {
                '&:hover': {
                  background: this.theme.colorMod(.05, params.colors.success.color),
                },
              }
            },
            warning: {
              background: params.colors.warning.color,
              borderColor: params.colors.warning.color,
              color: params.colors.warning.text,
              $nest: {
                '&:hover': {
                  background: this.theme.colorMod(.05, params.colors.warning.color),
                },
              }
            },
            error: {
              background: params.colors.error.color,
              borderColor: params.colors.error.color,
              color: params.colors.error.text,
              $nest: {
                '&:hover': {
                  background: this.theme.colorMod(.05, params.colors.error.color),
                },
              }
            },
            link: {
              boxShadow: 'none',
              paddingLeft: 0,
              paddingRight: 0,
              background: params.colors.link.color,
              borderColor: 'transparent',
              color: params.colors.link.text,
              $nest: {
                '&:hover': {
                  color: this.theme.colorMod(.05, params.colors.link.text),
                  textDecoration: 'underline',
                },
              }
            },
            $default: 'default',
          }],
          grouped: [{
            none: {},
            horizontal: {
              borderRadius: 0,
              $nest: {
                '&:first-child': {
                  borderBottomLeftRadius: '3px',
                  borderTopLeftRadius: '3px',
                },
                '&:last-child': {
                  borderBottomRightRadius: '3px',
                  borderTopRightRadius: '3px',
                },
                '&:not(:first-child)': {
                  borderLeft: 0,
                },
              }
            },
            vertical: {
              borderRadius: 0,
              $nest: {
                '&:first-child': {
                  borderTopRightRadius: '3px',
                  borderTopLeftRadius: '3px',
                },
                '&:last-child': {
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                },
                '&:not(:first-child)': {
                  borderTop: 0,
                },
              }
            },
            $default: 'none',
          }],
          disabled: {
            cursor: 'not-allowed',
            background: params.colors.border.color,
            borderColor: params.colors.border.color,
            color: params.colors.border.text,
            $nest: {
              '&:hover': {
                background: params.colors.border.color,
              },
            }
          },
        },
      },
    };
  }

}

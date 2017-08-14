import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitFullModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { ContentOutputComponent } from './content-output/content-output.component';
import { ContentComponent } from './content/content.component';
import { DemoComponent } from './demo/demo.component';
import { AccordionComponent } from './kit/accordion/accordion.component';
import { AlertComponent } from './kit/alert/alert.component';
import { AutoCompleteComponent } from './kit/auto-complete/auto-complete.component';
import { BadgeComponent } from './kit/badge/badge.component';
import { BreadcrumbComponent } from './kit/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './kit/button/button.component';
import { CheckboxComponent } from './kit/checkbox/checkbox.component';
import { ColorPickerComponent } from './kit/color-picker/color-picker.component';
import { DatePickerComponent } from './kit/date-picker/date-picker.component';
import { DividerComponent } from './kit/divider/divider.component';
import { DropdownMenuComponent } from './kit/dropdown-menu/dropdown-menu.component';
import { FormComponent } from './kit/form/form.component';
import { InputComponent } from './kit/input/input.component';
import { LayoutComponent } from './kit/layout/layout.component';
import { LoadingBarComponent } from './kit/loading-bar/loading-bar.component';
import { MathInputComponent } from './kit/math-input/math-input.component';
import { MenuComponent } from './kit/menu/menu.component';
import { ModalComponent } from './kit/modal/modal.component';
import { NotificationComponent } from './kit/notification/notification.component';
import { PaginationComponent } from './kit/pagination/pagination.component';
import { PopoverComponent } from './kit/popover/popover.component';
import { RadioComponent } from './kit/radio/radio.component';
import { SelectComponent } from './kit/select/select.component';
import { SpinnerComponent } from './kit/spinner/spinner.component';
import { TabsComponent } from './kit/tabs/tabs.component';
import { TagComponent } from './kit/tag/tag.component';
import { TextareaComponent } from './kit/textarea/textarea.component';
import { ToggleComponent } from './kit/toggle/toggle.component';
import { TooltipComponent } from './kit/tooltip/tooltip.component';
import { TitleComponent } from './title/title.component';

const exported = [
  ContentComponent,
  ContentOutputComponent,
  DemoComponent,
  TitleComponent,
];
const modulesExported = [
  AccordionComponent,
  AlertComponent,
  AutoCompleteComponent,
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  CheckboxComponent,
  ColorPickerComponent,
  DatePickerComponent,
  DividerComponent,
  DropdownMenuComponent,
  FormComponent,
  InputComponent,
  LayoutComponent,
  LoadingBarComponent,
  MathInputComponent,
  MenuComponent,
  ModalComponent,
  NotificationComponent,
  PaginationComponent,
  PopoverComponent,
  RadioComponent,
  SelectComponent,
  SpinnerComponent,
  TabsComponent,
  TagComponent,
  TextareaComponent,
  ToggleComponent,
  TooltipComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StylerModule,
    KitFullModule,
  ],
  declarations: [
    ...exported,
    ...modulesExported,
  ],
  exports: [
    ...exported,
    ...modulesExported,
  ],
})
export class SharedModule {
}

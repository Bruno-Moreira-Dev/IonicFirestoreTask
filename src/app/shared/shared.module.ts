import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LogoutButtonComponent, MenuToggleComponent],
  imports: [IonicModule],
  exports: [CommonModule, ReactiveFormsModule, IonicModule, LogoutButtonComponent, MenuToggleComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

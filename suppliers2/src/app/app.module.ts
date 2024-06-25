import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { PublicProcurementComponent } from './components/public-procurement/public-procurement.component';
import { ItemComponent } from './components/public-procurement/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    PublicProcurementComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

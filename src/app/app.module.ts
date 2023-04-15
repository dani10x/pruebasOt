import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { Table1Component } from './components/table1/table1.component';
import { FormsModule } from '@angular/forms';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { InfoDetalladaComponent } from './components/info-detallada/info-detallada.component';
import { Table2Component } from './components/table2/table2.component';
import { FlipSwitchComponent } from './components/flip-switch/flip-switch.component';
import { RecargaDirective } from './components/recarga/recarga.directive';
import { TablaComponent } from './components/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    Table1Component,
    InfoGeneralComponent,
    InfoDetalladaComponent,
    Table2Component,
    FlipSwitchComponent,
    RecargaDirective,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

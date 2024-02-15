import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterOFertasPipe } from './pipes/filter-ofertas.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OfertasComponent,
    CursosComponent,
    FilterOFertasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

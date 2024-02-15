import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {
    path: 'ofertas', component: OfertasComponent
  },
  {
    path: 'cursos', component: CursosComponent
  },
  { path: '', redirectTo: '/ofertas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

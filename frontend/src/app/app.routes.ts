import { Routes } from '@angular/router';
import { CardComponent } from './public/components/card/card.component';
import { DataUserComponent } from './public/components/data-user/data-user.component';
import { TableAsistenciaComponent } from './public/components/table-asistencia/table-asistencia.component';
import { TableListaAprendicesComponent } from './public/components/table-lista-aprendices/table-lista-aprendices.component';
import { TableNovedadesComponent } from './public/components/table-novedades/table-novedades.component';
import { AdminComponent } from './public/pages/admin/admin.component';
import { GetStartedComponent } from './public/pages/get-started/get-started.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { NotfoundComponent } from './public/pages/notfound/notfound.component';

const prefix: string = 'ASISTE';

export const routes: Routes = [
  {
    path: '',
    component: GetStartedComponent,
    title: `GET STARTED | ${prefix}`,
  },
  { path: 'login', component: LoginComponent, title: `Login | ${prefix}` },
  {
    path: 'admin',
    component: AdminComponent,
    title: `ADMINISTRADOR | ${prefix} `,
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'HOME',
    children: [
      { path: '', redirectTo: 'cards', pathMatch: 'full' },
      { path: 'cards', component: CardComponent, title: `FICHAS | ${prefix}` },
      {
        path: 'asistencia',
        component: TableAsistenciaComponent,
        title: `ASISTENCIA | ${prefix}`,
      },
      {
        path: 'novedades',
        component: TableNovedadesComponent,
        title: `NOVEDADES | ${prefix}`,
      },
      {
        path: 'data-user',
        component: DataUserComponent,
        title: `DATOS USUARIO | ${prefix}`,
      },
      {
        path: 'lista',
        component: TableListaAprendicesComponent,
        title: `LISTA APRENDICES | ${prefix}`,
      },
    ],
  },
  { path: '**', component: NotfoundComponent, title: `404 | ${prefix}` },
];

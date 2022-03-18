import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { JogadoresComponent } from './components/jogadores/jogadores.component';
import { TimesComponent } from './components/times/times.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},    
  {path: 'jogadores', component: JogadoresComponent},    
  {path: 'times', component: TimesComponent},    
  {path: 'weather', component: WeatherComponent},    
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

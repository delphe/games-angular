import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HexGLComponent } from './hex-gl/hex-gl.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hexgl', component: HexGLComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

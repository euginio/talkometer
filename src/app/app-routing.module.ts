import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { HomePage } from './home/home.page';
import { Practica0301Component } from './practica0301/practica0301.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home', component: HomePage },
  { path: 'practica0301', component: Practica0301Component },
  { path: 'room-details/:roomId', component: RoomDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

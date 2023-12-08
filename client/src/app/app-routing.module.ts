import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FAQComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './track/list/list.component';
import { AddComponent } from './track/add/add.component';
import { EditComponent } from './track/edit/edit.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'tracklist', component: ListComponent},
    { path: 'tracklist/add', component: AddComponent},
    { path: 'tracklist/edit/:id', component: EditComponent},
    { path: 'tracklist/delete/:id', component: ListComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

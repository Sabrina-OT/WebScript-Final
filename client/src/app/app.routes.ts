import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import path from 'path';
import { FAQComponent } from './pages/faq/faq.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'tracker', component: TrackerComponent},
    { path: 'faq', component: FAQComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

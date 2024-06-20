import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
//   {
//     path: 'compressors',
//     component: CompressorsComponent
//   },
//   {
//     path: 'sauer',
//     component: SauerComponent
//   },
//   {
//     path: 'compressors/bauer',
//     component: BauerComponent
//   },
//   {
//     path: 'compressors/compair',
//     component: CompairComponent
//   },
//   {
//     path: 'applications',
//     component: ApplicationComponent
//   },
//   {
//     path: 'services',
//     component: ServicesComponent
//   },
//   {
//     path: 'about-us',
//     component: AboutComponent
//   },
//   {
//     path: 'contact',
//     component: ContactComponent
//   },
//   {
//     path: 'thankyou',
//     component: ThankYouComponent
//   },
//   {
//     path: 'page-not-found', 
//     component: PageNotFoundComponent
//   },
  {
    path: '**', 
    component: HomeComponent
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

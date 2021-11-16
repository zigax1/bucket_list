import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BucketCreateComponent} from './components/bucket-create/bucket-create.component';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';
import { StorageComponent } from './components/storage/storage.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bucket-list' },
  { path: 'create-bucket', component: BucketCreateComponent },
  { path: 'bucket-list', component: BucketListComponent } ,
  { path: 'storage', component: StorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

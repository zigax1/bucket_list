import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BucketCreateComponent } from './components/bucket-create/bucket-create.component';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { StorageComponent } from './components/storage/storage.component';




@NgModule({
  declarations: [
    AppComponent,
    BucketCreateComponent,
    BucketListComponent,
    HeaderComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

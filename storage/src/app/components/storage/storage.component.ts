import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})

export class StorageComponent implements OnInit {
  selectedFile: File;
  Bucket:any = []; //iz bucket-list

  constructor(private http: HttpClient, private apiService: ApiService) { this.readBucket();
   }

   files = false;
   displayFiles(){
    this.files = !this.files;
    if (this.details = true)
    {    this.details = !this.details;}
   }

   details = false;
   displayDetails(){
    this.details = !this.details;
    if(this.files = true){
    this.files = this.files;}
   }

   //iz bucket-list
   readBucket(){
    this.apiService.getBuckets().subscribe((data) => {
     this.Bucket = data;
    })    
  }

  removeBucket(bucket:any, index:any) {
    if(window.confirm('Do you really want to delete this object?')) {
        this.apiService.deleteBucket(bucket._id).subscribe((data) => {
          this.Bucket.splice(index, 1);
        }
      )    
    }
  }

  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  onUpload(){
    const file = new FormData();

    file.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('url_od_cloud_storage', file)
      .subscribe(res => {
        console.log(res);
      });
  }
  ngOnInit() {}

}
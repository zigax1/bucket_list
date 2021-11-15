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

  constructor(private http: HttpClient, private apiService: ApiService) { }

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


/*this is data from the bucket-list.component.ts
  Bucket:any = [];

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
} */
}
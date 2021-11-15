import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})

export class BucketListComponent implements OnInit {
  Bucket:any = [];

  constructor(private apiService: ApiService) { 
    this.readBucket();
  }

  ngOnInit() {}

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
}
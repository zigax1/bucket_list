import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bucket-create',
  templateUrl: './bucket-create.component.html',
  styleUrls: ['./bucket-create.component.css']
})



export class BucketCreateComponent implements OnInit {
  submitted = false;
  bucketForm: FormGroup;
  BucketProfile:any = ['ziga', 'pragersko']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }
  ngOnInit() {
  }


  mainForm() {
    this.bucketForm = this.fb.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
    })
  }



  // Getter to access form control
  get myForm(){
    return this.bucketForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.bucketForm.valid) {
      return false;
    } else {
      this.apiService.createBucket(this.bucketForm.value).subscribe(
        (res) => {
          console.log('Bucket successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/bucket-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}

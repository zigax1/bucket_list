import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketCreateComponent } from './bucket-create.component';

describe('BucketCreateComponent', () => {
  let component: BucketCreateComponent;
  let fixture: ComponentFixture<BucketCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

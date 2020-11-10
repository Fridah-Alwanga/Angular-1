 import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailsComponent } from './quote-details.component';

describe('QuoteDetailsComponent', () => {
   let component: QuoteDetailsComponent;
      TestBed.configureTestingModule let fixture: ComponentFixture<QuoteDetailsComponent>;

  beforeEach(async(() => {
  {
      declarations: [ QuoteDetailsComponent ]
    })
    .compileComponents();
   }));

  beforeEach(() => {
     fixture = TestBed.createComponent(QuoteDetailsComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });
 
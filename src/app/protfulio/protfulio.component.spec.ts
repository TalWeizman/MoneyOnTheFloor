import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfulioComponent } from './protfulio.component';

describe('ProtfulioComponent', () => {
  let component: ProtfulioComponent;
  let fixture: ComponentFixture<ProtfulioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtfulioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtfulioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

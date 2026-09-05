import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolIdentityComponent } from './pool-identity.component';

describe('PoolIdentityComponent', () => {
  let component: PoolIdentityComponent;
  let fixture: ComponentFixture<PoolIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PoolIdentityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

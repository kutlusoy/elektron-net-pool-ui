import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

import { AppService, IPoolIdentityInfo } from '../../services/app.service';

@Component({
  selector: 'app-pool-identity',
  templateUrl: './pool-identity.component.html',
  styleUrls: ['./pool-identity.component.scss']
})
export class PoolIdentityComponent {

  public info$: Observable<IPoolIdentityInfo>;

  constructor(
    private appService: AppService
  ) {
    this.info$ = this.appService.getPoolIdentityInfo().pipe(
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }
}

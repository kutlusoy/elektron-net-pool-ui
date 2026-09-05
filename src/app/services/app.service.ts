import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppConfigService } from './app-config.service';

// Same values elektron-net-pool's MiningJob.ts embeds on-chain as
// pool-identity OP_RETURN outputs (doc-elektron/guideline-pool-identity-op-return.md
// in that repo). Either field is null if the operator hasn't configured it,
// in which case that coinbase output isn't produced at all.
export interface IPoolIdentityInfo {
    name: string | null;
    url: string | null;
}

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(
        private httpClient: HttpClient,
        private appConfig: AppConfigService
    ) { }

    public getInfo() {
        return this.httpClient.get(`${this.appConfig.apiUrl}/api/info`) as Observable<any>;
    }
    public getNetworkInfo() {
        return this.httpClient.get(`${this.appConfig.apiUrl}/api/network`) as Observable<any>;
    }
    public getInfoChart() {
        return this.httpClient.get(`${this.appConfig.apiUrl}/api/info/chart`) as Observable<any>;
    }
    public getAccounting() {
        return this.httpClient.get(`${this.appConfig.apiUrl}/api/info/accounting`) as Observable<any>;
    }
    public getPoolIdentityInfo(): Observable<IPoolIdentityInfo> {
        return this.httpClient.get<IPoolIdentityInfo>(`${this.appConfig.apiUrl}/api/pool/identity`);
    }
}

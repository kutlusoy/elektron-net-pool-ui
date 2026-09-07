import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppConfigService } from './app-config.service';

// Pool-configured identity, served by elektron-net-pool's GET /pool/identity
// endpoint. Never written on-chain (see
// doc-elektron/fix-report-pool-identity-utxo-attestation.md in that repo);
// the pool also reports these same values to every mempool explorer
// instance in the shared registry so found blocks get attributed to it
// network-wide (see doc-elektron/guideline-pool-registry-reporting.md in
// that repo).
// Either field is null if the operator hasn't configured it.
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

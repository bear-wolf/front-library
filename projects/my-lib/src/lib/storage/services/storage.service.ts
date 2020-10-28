import {Injectable} from '@angular/core';
import {EntityName} from '@shared/models/entity-name.enum';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {iResponse} from '@shared/models/response.interface';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageName = 'localStorage' || 'sessionStorage';

  constructor(
    private http: HttpClient
  ) {
  }

  setAuth(data: string) {
    window[this.storageName].setItem('auth', data);

    return this;
  }

  setRole(role: string){
    window[this.storageName].setItem('role', role);
  }

  setUserStorage(moduleId: number, data: any): Observable<any> {
    return this.http.post(`userStorage/set`, {
      type: 'list_th_width',
      index: `ListView_BaseModule_${moduleId}`,
      value: data
    });
  }

  getUserStorage(moduleId: number): Observable<any> {

    let params = new HttpParams();
      params = params.append('type', 'list_th_width');
      params = params.append('index', `ListView_BaseModule_${moduleId}`);

    return this.http.get(`userStorage/get`, { params: params }).pipe(
        map((item: iResponse) => item.data)
      );
  }

  getAuth(): string {
    return window[this.storageName].getItem('auth');
  }

  getRole(): string {
    return window[this.storageName].getItem('role');
  }

  get role(): string {
    return window[this.storageName].getItem('role');
  }

  removeAuth() {
    window[this.storageName].removeItem('auth');

    return this;
  }

  getDataByKey(key: string): string {
    return window[this.storageName].getItem(key);
  }

  setDataByKey(key: string, data: string): string {
    return window[this.storageName].setItem(key, data);
  }

  setToken(data: string) {
    window[this.storageName].setItem('token', data);

    return this;
  }

  removeToken() {
    window[this.storageName].removeItem('token');

    return this;
  }

  removeRole(){
    window[this.storageName].removeItem('role');
  }

  removeDataByKey(key: string) {
    window[this.storageName].removeItem(key);
  }

  getToken(): string {
    return window[this.storageName].getItem('token');
  }
}

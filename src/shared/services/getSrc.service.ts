import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetSrcService {
  constructor(private http: HttpClient) {}

  getSrc(src: string) {
    return this.http.get(src);
  }
}

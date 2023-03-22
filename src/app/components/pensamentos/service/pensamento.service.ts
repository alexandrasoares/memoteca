import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { PensamentoInterface } from '../pensamento.interface';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(
    private http: HttpClient
  ) { }

  listarPensamentos(): Observable<PensamentoInterface[]> {
    return this.http.get<PensamentoInterface[]>(this.API);
  }

  criarPensamento(pensamento: PensamentoInterface): Observable<PensamentoInterface> {
    return this.http.post<PensamentoInterface>(this.API, pensamento);
  }
}

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

  criarPensamento(pensamento: PensamentoInterface): Observable<PensamentoInterface> {
    return this.http.post<PensamentoInterface>(this.API, pensamento);
  }

  listarPensamentos(): Observable<PensamentoInterface[]> {
    return this.http.get<PensamentoInterface[]>(this.API);
  }

  editarPensamento(pensamento: PensamentoInterface): Observable<PensamentoInterface> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<PensamentoInterface>(url, pensamento);
  }

  excluirPensamento(id: number): Observable<PensamentoInterface> {
    const url = `${this.API}/${id}`
    return this.http.delete<PensamentoInterface>(url);
  }

  buscarPensamentoPorId(id: number): Observable<PensamentoInterface> {
    const url = `${this.API}/${id}`
    return this.http.get<PensamentoInterface>(url);
  }
}
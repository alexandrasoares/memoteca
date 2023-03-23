import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
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

  listarPensamentos(pagina: number, filtro: string): Observable<PensamentoInterface[]> {
    const itensPorPagina = 6;

    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina)

    if (filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }

    //return this.http.get<PensamentoInterface[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`);

    return this.http.get<PensamentoInterface[]>(this.API, { params });
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

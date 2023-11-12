import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { AZURE_API_ASISSTANT, AZURE_API_KEY } from './api.config';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class VirtualAsisstantService {
  constructor(private http: HttpClient, private _errorService: ErrorService) {}

  // Metodo para eviar mensaje a servicio de AZURE
  sendPostReuest(message: string): Observable<any> {
    const setHeaders = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
      'Content-Type': 'application/json',
    });

    const body = {
      top: 3,
      question: message,
      includeUnstructuredSources: true,
      confidenceScoreThreshold: '0.8',
      answerSpanRequest: {
        enable: true,
        topAnswersWithSpan: 1,
        confidenceScoreThreshold: '0.6',
      },
      filters: {
        metadataFilter: {
          logicalOperation: 'OR',
          metadata: [
            // {
            //   key: propKey,
            //   value: propValue
            // }
          ],
        },
      },
    };

    return this.http
      .post<any>(AZURE_API_ASISSTANT, body, { headers: setHeaders })
      .pipe(catchError(this._errorService.handleError));
  }
}

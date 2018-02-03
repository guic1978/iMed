import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PalestraService {
    private palestras = [
        {
            nome: 'wc5EJLr7Gt0'
        },
        {
            nome: 'Bld8zbqymrw'
        },
        {
            nome: 'En06BfDfTwk'
        },
        {
            nome: 'cSD5nhklAkQ'
        }
    ];

    private palestraResult: Observable<any>;
    public palestrasResult: JSON[] = [];

    constructor(private _http: Http) { }

    private BASE_URL = 'https://www.googleapis.com/youtube/v3/videos';
    private API_TOKEN = 'AIzaSyAeEzVYZuv0EIjtRO3eOdkvZEhSFmhhlbU';

    getPalestras() {
        this.palestrasResult = [];
        for (const palestra of this.palestras) {
            this.palestraResult = this._http.
                get(`${this.BASE_URL}?part=snippet&key=${this.API_TOKEN}&id=${palestra.nome}`)
                .map((res: Response) => res.json());

            this.palestraResult.subscribe(
                (result: JSON) => {
                    this.palestrasResult.push(result);
                }
            );
        }

        return this.palestrasResult;
    }

    getPalestra(id: string) {
        return this._http.
        get(`${this.BASE_URL}?part=snippet&key=${this.API_TOKEN}&id=${id}`)
        .map((res: Response) => res.json());
    }

}

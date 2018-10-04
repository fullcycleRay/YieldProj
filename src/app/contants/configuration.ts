import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:3000/api/v1/authentication.json';
    public ApiUrl = '/auth/login';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
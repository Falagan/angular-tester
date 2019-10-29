import { MercurioService } from './mercurio.service';
import { Observable } from 'rxjs';
import { LoginResponse, LoginRequest } from 'cibeles/models';
import { Service } from '../service.interface';
export declare class LoginService implements Service {
    private mercurioService;
    private loginSubject;
    constructor(mercurioService: MercurioService<LoginRequest>);
    request(request: LoginRequest): void;
    get(): Observable<LoginResponse>;
}

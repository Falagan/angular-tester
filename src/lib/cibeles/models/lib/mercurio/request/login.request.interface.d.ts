import { MercurioRequest } from './mercurio.request.interface';
export interface LoginRequest extends MercurioRequest {
    codigousu: string;
    clausu: string;
    afiliacion: string;
}

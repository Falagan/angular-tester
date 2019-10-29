export interface MercurioBody<T> {
    Servicio: string;
    Metodo: string;
    Tipo: '';
    URL: string;
    Id: string;
    Entrada: T;
}

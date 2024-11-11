import { CompanyDetails, AlternativeNames, CompanyImages } from './../types/companies';
import { BaseEndpoint } from './base';
export declare class CompaniesEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    details(id: number): Promise<CompanyDetails>;
    alternativeNames(id: number): Promise<AlternativeNames>;
    images(id: number): Promise<CompanyImages>;
}

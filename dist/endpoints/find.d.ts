import { BaseEndpoint } from './base';
import { ExternalIdOptions, FindResult } from '../types';
export declare class FindEndpoint extends BaseEndpoint {
    constructor(accessToken: string);
    byExternalId(id: string, options: ExternalIdOptions): Promise<FindResult>;
}

import { TrendingMediaType, TimeWindow, TrendingResults, LanguageOption, PageOption } from '../types';
import { BaseEndpoint } from './base';
export declare class TrendingEndpoint extends BaseEndpoint {
    constructor(accessToken: string);
    trending<T extends TrendingMediaType>(mediaType: T, timeWindow: TimeWindow, options?: LanguageOption & PageOption): Promise<TrendingResults<T>>;
}

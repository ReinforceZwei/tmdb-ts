import { BaseEndpoint } from './base';
import { LanguageOption, RegionResult, WatchProviderResult, WatchRegionOption } from '../types';
type ProviderOptions = WatchRegionOption & LanguageOption;
export declare class WatchProvidersEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    getRegions(options?: LanguageOption): Promise<RegionResult>;
    getMovieProviders(options?: ProviderOptions): Promise<WatchProviderResult>;
    getTvProviders(options?: ProviderOptions): Promise<WatchProviderResult>;
}
export {};

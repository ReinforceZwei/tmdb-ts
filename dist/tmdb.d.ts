import { AccountEndpoint, CertificationEndpoint, ChangeEndpoint, CreditsEndpoint, GenreEndpoint, MoviesEndpoint, SearchEndpoint, TvShowsEndpoint, ConfigurationEndpoint, DiscoverEndpoint, PeopleEndpoint, ReviewEndpoint, TrendingEndpoint, FindEndpoint, KeywordsEndpoint, CollectionsEndpoint, TvSeasonsEndpoint, TvEpisodesEndpoint, WatchProvidersEndpoint } from './endpoints';
import { CompaniesEndpoint } from './endpoints/companies';
import { NetworksEndpoint } from './endpoints/networks';
export declare class TMDB {
    private readonly accessToken;
    constructor(accessToken: string);
    get account(): AccountEndpoint;
    get configuration(): ConfigurationEndpoint;
    get certifications(): CertificationEndpoint;
    get changes(): ChangeEndpoint;
    get credits(): CreditsEndpoint;
    get companies(): CompaniesEndpoint;
    get networks(): NetworksEndpoint;
    get search(): SearchEndpoint;
    get genres(): GenreEndpoint;
    get movies(): MoviesEndpoint;
    get tvShows(): TvShowsEndpoint;
    get tvEpisode(): TvEpisodesEndpoint;
    get discover(): DiscoverEndpoint;
    get people(): PeopleEndpoint;
    get review(): ReviewEndpoint;
    get trending(): TrendingEndpoint;
    get find(): FindEndpoint;
    get keywords(): KeywordsEndpoint;
    get collections(): CollectionsEndpoint;
    get tvSeasons(): TvSeasonsEndpoint;
    get watchProviders(): WatchProvidersEndpoint;
}

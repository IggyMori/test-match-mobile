import { httpClient } from '../libs/axios/http-client';
import { MatchesResponse } from './matches.types';

export const MatchesApi = {
  fetchMatches: async () => {
    const { data } = await httpClient.get<MatchesResponse>('fronttemp');

    return data;
  },
};

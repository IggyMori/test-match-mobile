import { useQuery } from '@tanstack/react-query';
import { MatchesApi } from '../api/matches.api';
import { MatchesQueryKeys } from '../api/matches.query-keys';
import { useMatchesStoreActions } from '../components/matches-store';

export const useMatches = () => {
  const { setMatchesData } = useMatchesStoreActions();

  return useQuery({
    queryFn: async () => { 
      const data = await MatchesApi.fetchMatches();
      
      setMatchesData(data);

      return data;
    },
    queryKey: MatchesQueryKeys.root,
    staleTime: Infinity,
  });
}

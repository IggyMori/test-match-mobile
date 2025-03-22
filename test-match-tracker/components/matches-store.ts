import { create } from 'zustand';
import { Match, MatchesResponse } from '../api/matches.types';

const defaultMatchesData: MatchesResponse = {
  ok: true,
  data: {
    matches: []
  }
}

interface StoreState {
  matchesData: MatchesResponse;
  actions: {
      setMatchesData: (data: MatchesResponse) => void;

  }
}

export const useMatchesStore = create<StoreState>((set) => ({
  matchesData: defaultMatchesData,
  actions: {
      setMatchesData: (data: MatchesResponse) => set({ matchesData: data }),
  }
}));

export const useMatchesStoreActions = () => useMatchesStore(state => state.actions)




import { MatchesStatus } from '../constants/matches-status.constants';

export type Player = {
  username: string;
  kills: number;
};

export type Team = {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
};

export type Match = {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchesStatus;
};

export type MatchesResponse = {
  ok: boolean;
  data: {
    matches: Match[];
  };
};

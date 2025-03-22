import { useMemo, useRef, useEffect } from 'react';
import { MATCH_STATUS_ALL,  MatchesStatusSelect } from '../constants/matches-status.constants';
import { Match } from '../api/matches.types';
import { isUndefined } from 'lodash';

const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
};

type UseFilterByStatusSettings = {
  status: MatchesStatusSelect | null;
  list: Match[];
};

export const useFilterByStatus = (
  settings: UseFilterByStatusSettings,
) => {
  const { status, list } = settings;
  const latestList = useLatest(list);

  return useMemo(() => {
    if (!status || status === MATCH_STATUS_ALL ) {
      return latestList.current;
    }

    if(isUndefined(latestList.current)) return [];

    return latestList.current.filter(item => item.status === status);
  }, [status, list]);
};

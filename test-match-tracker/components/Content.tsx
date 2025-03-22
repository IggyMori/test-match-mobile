import { useState } from "react";
import { FlatList, View,  ActivityIndicator } from "react-native"
import { RefreshButton } from "./RefreshButton"
import { MatchListItem } from "./Match/MatchListItem";
import useWebSockets from "../hooks/useWebSockets";
import { useMatches } from "../hooks/useMatches";
import { useMatchesStore } from "./matches-store";
import { DropdownMenu } from "./DropdownMenu";
import MatchTrackerLogo from "../assets/match_tracker_logo.svg";
import { MatchesStatusSelect } from "../constants/matches-status.constants";
import { useFilterByStatus } from "../hooks/useFilterByStatus";
import { ErrorInfoCard } from "./ErrorInfoCard";


export const Content = () => {
  useWebSockets();
  const { isLoading } = useMatches(); 
  const { data, ok } = useMatchesStore((state) => state.matchesData); 
  const [matchStatus, setMatchStatus] = useState<MatchesStatusSelect | null>(null);
  const filteredMatches = useFilterByStatus({list: data.matches, status: matchStatus})
  const isMatchesLoading = isLoading || !data.matches;  

    return(
      <View style={{ rowGap: 32, flex: 1 }}>
        <View style={{rowGap: 14}}>
         <MatchTrackerLogo style={{alignSelf: 'center'}} />
          <View style={{rowGap: 10}}>
          <DropdownMenu onSelect={setMatchStatus}/>
          <RefreshButton />
          {!ok && <ErrorInfoCard />} 
          </View>
        </View>
        {isMatchesLoading && 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
        }
        {!isMatchesLoading && 
        <FlatList 
        data={filteredMatches}
        renderItem={({ item }) => <MatchListItem match={item} />}
        contentContainerStyle={{ rowGap: 8 }}
        />}
      </View>
    )
}
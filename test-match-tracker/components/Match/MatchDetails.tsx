import { View, StyleSheet, Text, FlatList } from "react-native";
import { Team } from "../../api/matches.types";
import { TeamDetails } from "./TeamInfo/TeamDetails";
import Divider from "../Divider";

type MatchDetailsProps = {
    homeTeam: Team;
    awayTeam: Team;
  };


export const MatchDetails = (props: MatchDetailsProps) => {
    const { homeTeam, awayTeam } = props;

    return(
        <View style={{marginTop: 16}}>
        <TeamDetails team={homeTeam} />
        <Divider />
        <TeamDetails team={awayTeam} />
        </View>
    )
}
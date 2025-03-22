import { useState } from "react";
import { Match } from "../../api/matches.types";
import { View, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";
import { TeamInfo } from "./TeamInfo/TeamInfo";
import { MatchInfo } from "./MatchInfo/MatchInfo";
import ArrowUpIcon from "../../assets/arrow-up.svg"
import ArrowDownIcon from "../../assets/arrow-down.svg"
import { MatchDetails } from "./MatchDetails";


type MatchListItemProps = {
    match: Match;
};

const styles = StyleSheet.create({ 
root: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#0B0E12',
    rowGap: 8
},
content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},
matchInfo: {
    rowGap: 4,
},
detailsButton: {
    justifyContent: 'center',
    alignItems: 'center'
}
})




export const MatchListItem = (props: MatchListItemProps) => {
    const { match } = props;
    const { homeTeam, awayTeam, awayScore, homeScore, status } = match;
    const [areDetailsVisible, setAreDetailsVisible] = useState(false);
    const toggleDetails = () => setAreDetailsVisible(prev => !prev);


    return(
    <View style={styles.root}>
    <View style={styles.content}>
        <TeamInfo isHomeTeam={true} name={homeTeam.name} />
        <MatchInfo homeScore={homeScore} awayScore={awayScore} status={status} /> 
        <TeamInfo name={awayTeam.name} />
    </View>
    {
        areDetailsVisible &&
        <MatchDetails homeTeam={homeTeam} awayTeam={awayTeam} />
    }
    <TouchableOpacity style={styles.detailsButton} onPress={toggleDetails}>
        {areDetailsVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </TouchableOpacity>
    </View>
    )
}
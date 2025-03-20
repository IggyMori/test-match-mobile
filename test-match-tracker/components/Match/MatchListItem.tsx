import { useState } from "react";
import { Match } from "../../api/matches.types";
import { View, StyleSheet } from "react-native";

type MatchListItemProps = {
    match: Match;
};

const styles = StyleSheet.create({ 
root: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#0B0E12',
}
})


export const MatchListItem = (props: MatchListItemProps) => {
    const { match } = props;
    const { homeTeam, awayTeam, awayScore, homeScore, status } = match;
    const [areDetailsVisible, setAreDetailsVisible] = useState(false);
    const toggleDetails = () => setAreDetailsVisible(prev => !prev);


    return(
        <View style={styles.root}>

        </View>
    )
}
import { Team } from "../../../api/matches.types";
import { View, StyleSheet } from "react-native";
import TeamIcon from '../../../assets/team_icon.svg'
import { Text } from '../../Text'



type TeamInfoProps = {
    name: Team['name'];
    isHomeTeam?: boolean;
  };

const styles = StyleSheet.create({             
root: {
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center'
},
text: {
    fontWeight: 600,
    fontSize: 14,
    color: '#FFFFFF',
}
})

export const TeamInfo = (props: TeamInfoProps) => {
    const { name, isHomeTeam } = props;

    return (
    <View style={styles.root}>
    {isHomeTeam && <TeamIcon />}
    <Text style={styles.text}>
    {name}
    </Text>
    {!isHomeTeam && <TeamIcon />}
    </View>
    )
}
import { Match } from '../../../api/matches.types';
import { MatchStatusLabel } from './MatchStatusLabel';
import { View, StyleSheet } from "react-native";
import { Text } from '../../Text'
import AnimatedNumber from '../../AnimatedNumber';


type MatchInfoProps = {
  homeScore: Match['homeScore'];
  awayScore: Match['awayScore'];
  status: Match['status'];
};

const styles = StyleSheet.create({             
  root: {
      rowGap: 4,
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 4
  },
  text: {
      fontWeight: 600,
      fontSize: 14,
      color: '#FFFFFF',
      alignSelf: 'center'
  }
  })


export const MatchInfo = (props: MatchInfoProps) => {
  const { awayScore, homeScore, status } = props;

  return (
    <View style={styles.root}>

      <View style={styles.score}>
      <AnimatedNumber value={homeScore} style={styles.text} />
      <Text style={styles.text}>
       :
      </Text>
      <AnimatedNumber value={awayScore} style={styles.text} />
      </View>
      <MatchStatusLabel status={status} />
    </View>
  );
};

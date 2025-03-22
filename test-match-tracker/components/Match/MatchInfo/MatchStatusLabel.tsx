import { View, StyleSheet, Text } from "react-native";
import { Match } from '../../../api/matches.types';
import { ColorByMatchStatus, NamesByMatchStatus } from '../../../constants/matches-status.constants';

type MatchStatusLabelProps = {
  status: Match['status'];
};


const styles = StyleSheet.create({             
  root: {
      flexDirection: 'row',
      minWidth: 70,
      justifyContent: 'center',
      alignItems: 'center',
      height: 23,
      borderRadius: 4,
      color: '#FFFFFF',
      paddingVertical: 4,
      paddingHorizontal: 10
  },
  text: {
      fontWeight: 600,
      fontSize: 12,
      color: '#FFFFFF',
      alignSelf: 'center'
  }
  })

export const MatchStatusLabel = (props: MatchStatusLabelProps) => {
  const { status } = props;

  return (
    <View style={[styles.root, {backgroundColor: ColorByMatchStatus[status] }]}>
      <Text style={styles.text}>
        {NamesByMatchStatus[status]}
      </Text>
    </View>
  );
};

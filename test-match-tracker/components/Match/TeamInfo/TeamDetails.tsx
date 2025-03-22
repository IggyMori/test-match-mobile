import { View, StyleSheet,  FlatList } from "react-native";
import { Player, Team } from "../../../api/matches.types";
import AvatarIcon from "../../../assets/avatar_icon.svg"
import { Text } from '../../Text'
import AnimatedNumber from "../../AnimatedNumber";

type PlayerItemProps = {
    player: Player;
};

type TeamDetailsProps = {
    team: Team;
};

type ScoreInfoProps = {
    title: string;
    value: string;
  };

type TeamStatisticsProps = {
    teamStatistics: ScoreInfoProps[];
  };

const styles = StyleSheet.create({             
root: {
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center'
},
titleText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#FAFAFA66"
},
valueText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#FFFFFF"
},
playerCard: {
    flex: 1,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 4,
    rowGap: 4,
    alignItems: 'center',
    backgroundColor: '#101318',
},
divider: {
    width: 1, 
    height: 13,
    backgroundColor: "#141A21",
    marginHorizontal: 8,
  },
teamStatisticsCard: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#101318',
},
teamStatisticsitem: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
})


const ScoreInfo = (props: ScoreInfoProps) => {
    const { title, value } = props;
    return (
      <View style={{flexDirection: 'row', columnGap: 8, alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <Text style={styles.titleText}>
          {title}
        </Text>
  
        <AnimatedNumber value={Number(value)}  style={styles.valueText} />
      </View>
    );
  };
  
  
const PlayerItem = ({ player }: PlayerItemProps) => (
    <View style={styles.playerCard} >
      <View style={{flexDirection: 'row', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between' }} >
      <AvatarIcon />
        <Text style={[styles.valueText, {flexWrap: 'nowrap'}]}>
          {player.username}
        </Text>
      </View>
        <ScoreInfo title="Убийств:" value={String(player.kills)} />
    </View>
  );

  const TeamStatistics = (props: TeamStatisticsProps) => {
    const { teamStatistics } = props;
    return (
      <View style={styles.teamStatisticsCard}>
        <View
          style={{
            flexDirection: "row", 
            alignItems: "center", 
            width: "100%",
          }}
        >
        {teamStatistics.map((scoreInfo, index) => (
        <View key={index} style={styles.teamStatisticsitem}>
          <ScoreInfo key={index} title={scoreInfo.title} value={scoreInfo.value} />
          {index < teamStatistics.length - 1 && <View style={styles.divider} />}
        </View>
        ))}
        </View>
      </View>
    );
  };

 
export const TeamDetails = (props: TeamDetailsProps) => {
    const { team } = props;
    const { players, place, points, total_kills } = team;
  
    const teamStatistics = [
      { title: "Points", value: `+${points}` },
      { title: "Место", value: String(place) },
      { title: "Всего убийств", value: String(total_kills) },
    ];
  
    return (
      <View style={{rowGap: 8}}>
        <FlatList
          data={players}
          keyExtractor={(_, index) => index.toString()}
          numColumns={players.length}
          renderItem={({ item }) => <PlayerItem player={item} />}
          columnWrapperStyle={{
            flexDirection: "row",
            columnGap: 8
          }}
        />
  
        <TeamStatistics teamStatistics={teamStatistics} />
      </View>
    );
  };
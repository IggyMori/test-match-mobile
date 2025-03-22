import { View, StyleSheet } from "react-native";
import AlertIcon from '../assets/alert-triangle.svg'
import { Text } from "./Text";

const styles = StyleSheet.create({  
    root: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#0B0E12',
      },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8
    }
}) 

export const ErrorInfoCard = () => (
    <View style={styles.root}>
    <View style={styles.info}>
        <AlertIcon />
        <Text style={{color: '#FFFFFF'}}>
        Ошибка: не удалось загрузить информацию
        </Text>
    </View>
    </View>
)
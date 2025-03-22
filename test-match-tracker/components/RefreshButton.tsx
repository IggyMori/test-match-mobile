import { Pressable,  StyleSheet } from 'react-native';
import { Text } from './Text'
import RefreshIcon from '../assets/refresh.svg'
import { useMatches } from '../hooks/useMatches';
import useWebSocket from '../hooks/useWebSockets';


const styles = StyleSheet.create({
    button: {
    flexDirection: 'row',
    backgroundColor: '#EB0237',
    borderRadius: 4,
    paddingVertical: 17,
    justifyContent: 'center',
    width: '100%',
    columnGap: 10,
    },
    buttonPressed: {
      backgroundColor: '#A01131'
    },
  });

  
export const RefreshButton = () => {
    const { refetch } = useMatches(); 
    const socket = useWebSocket();

    const handleRefresh = () => {
      refetch();
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ action: 'refresh' }));
      }
    }

    return(
         <Pressable  
         style={({ pressed }) =>
             [
                    styles.button, 
                    pressed && styles.buttonPressed 
            ]}
          onPress={handleRefresh}
            >
          <Text style={{color: 'white', fontFamily: 'Inter', fontSize: 18 }}>
              Обновить
          </Text>
          <RefreshIcon />
         </Pressable>
    )
}
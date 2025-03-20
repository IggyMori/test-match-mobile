import { Pressable,  StyleSheet, Text } from 'react-native';
// import RefreshIcon from '../assets/refresh.svg'


const styles = StyleSheet.create({
    button: {
    flexDirection: 'row',
    backgroundColor: '#EB0237',
    borderRadius: 4,
    paddingVertical: 17,
    justifyContent: 'center',
    width: '100%'
    },
    buttonPressed: {
      backgroundColor: '#A01131'
    },
  });

  
export const RefreshButton = () => {

    return(
         <Pressable  
         style={({ pressed }) =>
             [
                    styles.button, 
                    pressed && styles.buttonPressed 
            ]}>
          <Text style={{color: 'white', fontFamily: 'Inter', fontSize: 18 }}>
              Обновить
          </Text>
          {/* <RefreshIcon /> */}
         </Pressable>
    )
}

import { PropsWithChildren } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type LayoutProps = PropsWithChildren;

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: '#06080C',
        paddingTop: 32,
        paddingHorizontal: 16
      },
}) 


export const Layout = (props: LayoutProps) => {
    const {children} = props;
    
    return(
        <SafeAreaView style={{flex: 1}}> 
        <View style={styles.container}>
        <StatusBar style="auto" />
        {children}
        </View>
        </SafeAreaView>
    )
}
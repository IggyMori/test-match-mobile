
import { Layout } from './components/Layout';
import { Content } from './components/Content';
import {  ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { QueryClientProvider } from './Providers/QueryClientProvider';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <QueryClientProvider>  
    <Layout>
    <Content />
    </Layout>
    </QueryClientProvider>
  );
}


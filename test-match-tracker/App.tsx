
import { Layout } from './components/Layout';
import { Content } from './components/Content';
import { QueryClientProvider } from './Providers/QueryClientProvider';


export default function App() {
  return (
    <QueryClientProvider>  
    <Layout>
    <Content />
    </Layout>
    </QueryClientProvider>
  );
}


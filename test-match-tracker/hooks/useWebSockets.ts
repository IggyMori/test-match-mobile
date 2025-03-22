import { useEffect, useState } from 'react';
import { useMatchesStoreActions } from '../components/matches-store';
import { Match } from '../api/matches.types';
import { queryClient } from '../libs/react-query/query-client';
import { throttle } from 'lodash';

type MessageResponse = {
    data: Match[];
    type: string;
}

const useWebSocket = (): WebSocket | null => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const { setMatchesData } = useMatchesStoreActions(); 
  

  useEffect(() => {
    const ws = new WebSocket('wss://app.ftoyd.com/fronttemp-service/ws');

    ws.onopen = () => {
      console.log('WebSocket соединение установлено');
    };

    ws.onmessage = (event) => {
      try {
        const messageData: MessageResponse = JSON.parse(event.data);
        const matchesData = messageData.data;
        
    
        setMatchesData({ok: true, data: { matches: matchesData }});
        queryClient.setQueryData(['matches'], messageData);
      } catch (error) {
        console.error('Ошибка парсинга сообщения', error);
        setMatchesData({ok: false, data: { matches: [] }});
      }
    };

    ws.onerror = (error) => {
      console.error('Ошибка WebSocket', error);
      setMatchesData({ok: false, data: { matches: [] }});
    };

    ws.onclose = () => {
      console.log('WebSocket соединение закрыто');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [queryClient]);

  return socket;
};

export default useWebSocket;

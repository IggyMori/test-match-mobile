import React from 'react';
import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../libs/react-query/query-client';

export const QueryClientProvider = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};

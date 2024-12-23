import React from 'react';
import { AppProvider } from '../../components/AppContext';
import Layout from '../../components/layout';

export default function RootLayout() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}

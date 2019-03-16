import React from 'react';
import axios from 'axios';
import LibraryLayout from './components/LibraryLayout/LibraryLayout';
import { ApiService } from './services/apiService';
import { apiEndpointContext } from './contexts/apiEndpointContext';
import { apiServiceContext } from './contexts/apiServiceContext';
import './App.css';

const App = ({ webPort }) => {
  const apiEndpoint = `http://localhost:${webPort}`;
  const axiosClient = axios.create({ baseURL: apiEndpoint });
  const apiService = new ApiService(axiosClient);

  return (
    <apiEndpointContext.Provider value={apiEndpoint}>
      <apiServiceContext.Provider value={apiService}>
        <LibraryLayout />
      </apiServiceContext.Provider>
    </apiEndpointContext.Provider>
  );
};

export default App;

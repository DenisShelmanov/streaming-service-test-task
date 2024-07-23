import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { store } from './api/store';
import { worker } from './mocks/workers'; // To mock API requests
import { appModule } from './modules';

worker.start();

const App = () => {
  const [isMockingEnabled, setIsMockingEnabled] = useState(false);
  useEffect(() => {
    worker.start().then(() => setIsMockingEnabled(true));
  });

  if (!isMockingEnabled) {
    return null;
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {appModule.routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

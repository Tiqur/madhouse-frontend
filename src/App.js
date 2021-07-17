import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './components/index.js';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'/>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

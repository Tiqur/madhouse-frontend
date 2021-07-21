import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './components/index.js';
import { HomePage, TokenPage } from './pages/index.js';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/token' component={TokenPage}/>
          <Route exact path='/channel' component={HomePage}/>
          <Route exact path='/socials' component={HomePage}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

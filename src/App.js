import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './components/index.js';
import { HomePage } from './pages/index.js';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={HomePage}/>
          <Route exact path='/token' component={HomePage}/>
          <Route exact path='/channel' component={HomePage}/>
          <Route exact path='/socials' component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

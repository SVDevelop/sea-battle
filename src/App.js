import {BotPage, MainPage, EditorPage} from './pages'
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  if (true) {
    return (
      <Switch >
        <Route path='/editor'>
          <EditorPage />
        </Route>
        <Route path='/bot'>
          <BotPage />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    )
  }
}

export default App;

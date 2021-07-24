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

  // return (
  //   <div className="App">
  //     <BattleField style={{margin: '30px'}}>
  //       <BattleFieldTable />
  //         <Ship x={1} y={10} length={4} direction={'row'} killed />
  //         <Ship x={1} y={1} length={2} direction={'column'} />
          
  //         <Shot x={1} y={1} status={'missed'} />
  //         <Shot x={1} y={3} status={'hitted'} />
  //     </BattleField>
  //   </div>
  // );
}

export default App;

import { Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Encrypt from './components/Encrypt';
import Decrypt from './components/Decrypt';

const App = () => {
  return (
    <div className="wrapper">
      <div className="app">
        <Sidebar />
        <main className="main">
          <Switch>
            <Route exact path="/" render={() => 'Выберите один из пунктов меню'} />
            <Route path="/encrypt" component={Encrypt} />
            <Route path="/decrypt" component={Decrypt} />
          </Switch>
        </main>
      </div>
    </div>
  )
}

export default App;
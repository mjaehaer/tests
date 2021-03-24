import { Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import TopMenu from '../top-menu/TopMenu';
import TasksPage from '../task-page/TasksPage';

function App() {
  return (
        <Fragment>
          <header>
						<TopMenu />
					</header>
					<main>
							<Route path="/" exact render={() => <TasksPage />} />
					</main>
        </Fragment>
  );
}

export default App;

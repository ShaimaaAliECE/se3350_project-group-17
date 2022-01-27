import MainMenu from '../components/MainMenu';
import LevelSelect from '../components/LevelSelect';
import LevelOne from '../components/levels/LevelOne';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route path ="/" element={<MainMenu />} exact={true} />
                <Route path ="/levels" element={<LevelSelect />} />
                <Route path="/level_one" element={<LevelOne />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;
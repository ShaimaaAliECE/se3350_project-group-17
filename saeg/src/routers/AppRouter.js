import MainMenu from '../components/MainMenu';
import LevelSelect from '../components/LevelSelect';
import LevelOne from '../components/levels/LevelOne';
import LevelTwo from '../components/levels/LevelTwo';
import LevelThree from '../components/levels/LevelThree';
import CreateAccount from '../components/CreateAccount';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

const AppRouter = () => (
    <Router>
        <div>
            <Routes>
                <Route path ="/" element={<MainMenu />} exact={true} />
                <Route path ="/levels" element={<LevelSelect />} />
                <Route path="/level_one" element={<LevelOne />} />
                <Route path="/level_two" element={<LevelTwo />} />
                <Route path="/level_three" element={<LevelThree />} />
                <Route path = "/createAccount" element={<CreateAccount />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;
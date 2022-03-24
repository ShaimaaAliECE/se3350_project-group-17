import MainMenu from '../components/MainMenu';
import LevelSelect from '../components/LevelSelect';
import LevelOne from '../components/levels/LevelOne';
import LevelTwo from '../components/levels/LevelTwo';
import LevelThree from '../components/levels/LevelThree';
import LevelFour from '../components/levels/LevelFour';
import LevelFive from '../components/levels/LevelFive';
import CreateAccount from '../components/CreateAccount';
import GameOver from '../components/GameOver';
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
                <Route path="/level_four" element={<LevelFour />} />
                <Route path="/level_five" element={<LevelFive />} />
                <Route path="/GameOver" element={<GameOver />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;
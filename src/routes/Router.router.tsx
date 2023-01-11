import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from '../pages/Todo/Todo';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Todo />} path="/" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

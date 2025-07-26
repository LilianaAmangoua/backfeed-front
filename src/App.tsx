import "./App.css";
import LoginPage from "./pages/LoginPage.tsx";
import {AuthContextProvider} from "./contexts/AuthContext.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes>
        </AuthContextProvider>
    );
}

export default App;

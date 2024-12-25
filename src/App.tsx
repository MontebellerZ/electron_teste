import "./App.css";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div id="App">
                <Sidebar />

                <main>
                    <AppRoutes />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;

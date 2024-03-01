import logo from './logo.svg';
import './App.css';
import AddContactComponent from "./components/AddContactComponent";
import ContactComponent from "./components/ContactComponent";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <AddContactComponent/>
                <ContactComponent/>
            </header>
        </div>
    );
}

export default App;

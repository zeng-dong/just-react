import './App.css';
import EnrolmentForm from './EnrolmentForm';

function App() {
    const handleClick = () => {
        alert('Start Reacting');
    };
    return (
        <div className="App">
            <button onClick={handleClick}>Just React</button>
            <hr />
            <EnrolmentForm />
        </div>
    );
}

export default App;

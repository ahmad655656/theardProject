import './App.css'
import { Container } from './Components/index';
import { ThemeProvider } from './Context/ThemeContext';
 
function App() {
  return (
    <ThemeProvider>
    <div className="App" style={{
      backgroundImage: `url()`
    }}>
    <Container />
    </div>
    </ThemeProvider>
  );
}

export default App;

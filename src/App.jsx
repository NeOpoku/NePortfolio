
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";

function App() {
  return (
    <> 
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    </>
  );
}

export default App;

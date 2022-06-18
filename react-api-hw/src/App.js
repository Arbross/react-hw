import './App.css';
import EagleOrTail from './components/EagleOrTail';
import GitHubProfile from './components/GitHubProfile';

export default function App() {
  return (
    <div className="App">
      Task 1<EagleOrTail></EagleOrTail><br/>Task 2
      <GitHubProfile></GitHubProfile>
    </div>
  );
}

import './App.css';
import Button from './components/Button'

function App() {

  const howToUse = `Apply different styles:\n 
  Button style can be "primary", "secondary" or "tertiary"\n 
  and Button size can be "regular", "medium" or "large"`;

  return (
    <div className="App">
      <h1>Customized Button Library</h1>
      <Button
        type="submit" 
        buttonStyle="primary"
        buttonSize="regular">
        Primary button
      </Button><br/>
      <Button
        type="submit" 
        buttonStyle="secondary"
        buttonSize="large">
        Secondary button
      </Button><br/>
      <Button
        type="submit" 
        buttonStyle="tertiary"
        buttonSize="medium">
        Tertiary button
      </Button>
      <p>{howToUse}</p>
    </div>
  );
}

export default App;

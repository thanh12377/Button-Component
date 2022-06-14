import React from "react";
import Button from "./UI/Button";


function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      {`<button/>`}
      <Button></Button>
      <br></br>
      <br></br>
      <br></br>
      {`<button variant = 'outline'/>`}
      <Button variant = 'outline'></Button>
      <br></br>
      <br></br>
      <br></br>
      {`<button variant = 'text'/>`}
      <Button variant = 'text'/>
      <br></br>
      <br></br>
      <br></br>
      {`<button disableShadow />`}
      <Button disableShadow/>
      <br></br>
      <br></br>
      <br></br>
      {`<button disabled>`}
      <Button className= "disable" disabled/>
      <br></br>
      <br></br>
      <br></br>
      {`<button variant = 'text' disabled/>`}
      <Button variant = 'text' disabled/>
      <br></br>
      <br></br>
      <br></br>
      {`<button startIcon = 'local-grocery-store'/>`}
      <Button startIcon = 'icon'/>
      <br></br>
      <br></br>
      <br></br>
      {`<button endIcon = 'local-grocery-store'/>`}
      <Button endIcon = 'icon'/>
      <br></br>
      <br></br>
      <br></br>
      
      {`<button size="sm"/>`}
      <Button  size="sm"/>
      <br></br>
      <br></br>
      <br></br>
      {`<button size="md"/>`}
      <Button size="md"/>
      <br></br>
      <br></br>
      <br></br>
      {`<button size="lg"/>`}
      <Button size="lg"/>
      <br></br>
      <br></br>
      <br></br>
      {`<button color="default"/>`}
      <Button color="default"/>
      <br></br>
      <br></br>
      <br></br>
      {`<button color="primary"/>`}
      <Button color="primary"/>
      <br></br>
      <br></br>
      <br></br>
      {`<button color="secondary"/>`}
      <Button color="secondary"/>
      <br></br>
      <br></br>
      <br></br>
      {`<button color="danger"/>`}
      <Button  color="danger"/>
    </div>
  );
}

export default App;

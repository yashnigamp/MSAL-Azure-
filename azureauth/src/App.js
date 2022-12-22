
import {MsalProvider} from "@azure/msal-react";
import NavbarIntel from "./Components/Navbar";
import { Template } from "./Components/Templates";


function App({msalInstance}) {

  return (
    <MsalProvider instance={msalInstance}>
      <NavbarIntel/>
    <div >
      <Template/>
     
      
    </div>
    </MsalProvider>
  );
}

export default App;

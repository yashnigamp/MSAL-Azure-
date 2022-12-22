import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

export const WelcomeText = () => {
  const [name, setName] = useState("");
  const { instance } = useMsal();

  useEffect(() => {
    getName();
  }, []);

  const getName = async ()=> {
    const currentAccount =  instance.getActiveAccount();
    if (currentAccount) {
       setName(currentAccount.name);
    }
  }
  return(
        <span style={{color:'white',marginRight:"12px"}}>Welcome {name}</span>
  )
};

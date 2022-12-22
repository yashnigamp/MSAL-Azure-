
import Button from 'react-bootstrap/Button';
import { useMsal } from '@azure/msal-react';

export const SignOutButton = () =>{
    const {instance } = useMsal();

    const handleSignOut = () =>{
        instance.logoutRedirect();
    }

    return(
        <Button variant="outline-secondary" onClick={handleSignOut}>SignOut</Button>
    )
}
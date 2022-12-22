import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import Container from "react-bootstrap/esm/Container";

export const Template = () => {
  const { instance } = useMsal();
  return (
    <section>
      <AuthenticatedTemplate>
        <Container>
          <h4>
            Signed In With UserName :- {instance ? instance?.getActiveAccount()?.username: null}
          </h4>
        </Container>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Container>
        <h2> Please Sign In </h2>
        </Container>
      </UnauthenticatedTemplate>
    </section>
  );
};

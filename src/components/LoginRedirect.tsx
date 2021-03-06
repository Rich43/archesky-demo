import React, { FunctionComponent, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { USER } from "./BaseRoute";

export const LoginRedirect: FunctionComponent = () => {
    const [keycloak, initialized] = useKeycloak();
    const authenticated = keycloak.authenticated;
    const login = keycloak.login;
    useEffect(() => {
      if (initialized && !authenticated) {
        login();
      } else if (initialized && authenticated) {
        window.parent.location.href = `/app/${USER}`;
      }
    }, [login, initialized, authenticated])
    return (
      <div>Loading...</div>
    );
};

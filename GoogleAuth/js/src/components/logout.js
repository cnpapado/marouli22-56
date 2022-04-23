import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '206105248686-kjdpv0e7vks3keskchj6oe9sa6ul8l7e.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout success');
    alert('Logged out');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
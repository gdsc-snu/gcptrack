import React from "react";
import "./Modal.css";
import { GoogleLogin } from "react-google-login";

async function handleLoginSuccess(loginResponse: any){

  const response = await fetch('/facilitator/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          token: {
              accessToken: loginResponse.tokenObj.access_token,
              tokenId: loginResponse.tokenObj.id_token
          }
        }
      )
    });
    console.log(await response.json());
    //TODO:save this token to localstorage and state and let the user login
}

async function handleLoginError(error: any){
  console.error(error)
}

function Modal({ closeModal }: any) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>Login as a Facilitator</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <GoogleLogin
            clientId="363336576338-cdn32827l9fthvubbhpenn98eb649lsd.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginError}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;

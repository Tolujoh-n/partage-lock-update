import 'regenerator-runtime/runtime';
import React, { useEffect } from 'react';


// import './assets/vendor/purecounter/purecounter_vanilla.js';
// import './assets/vendor/aos/aos.js';
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import './assets/vendor/glightbox/js/glightbox.min.js';
// import './assets/vendor/swiper/swiper-bundle.min.js';
// import './assets/js/main.js';
import GLightbox from 'glightbox'; 
import Swiper from 'swiper'; 
import Isotope from 'isotope-layout'; 
import AOS from 'aos'; 



// import './assets/global.css';
import './assets/css/style.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App({ isSignedIn, contractId, wallet }) {
  
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);


  // Get blockchian state once on component load
  React.useEffect(() => {
    getGreeting()
      .then(setValueFromBlockchain)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
    }
  , []);

  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()}/>;
  }

  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;
    
    // use the wallet to send the greeting to the contract
    wallet.callMethod({ method: 'set_greeting', args: { message: greetingInput.value }, contractId })
      .then(async () => {return getGreeting();})
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  function getGreeting(){
    // use the wallet to query the contract's greeting
    return wallet.viewMethod({ method: 'get_greeting', contractId })
  }

  return (
    <>
      <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()}/>
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <h1>
          The contract says: <span className="greeting">{valueFromBlockchain}</span>
        </h1>
        <form onSubmit={changeGreeting} className="change">
          <label>Change greeting:</label>
          <div>
            <input
              autoComplete="off"
              defaultValue={valueFromBlockchain}
              id="greetingInput"
            />
            <button>
              <span>Save</span>
              <div className="loader"></div>
            </button>
          </div>
        </form>
        <EducationalText/>
      </main>
    </>
  );
}
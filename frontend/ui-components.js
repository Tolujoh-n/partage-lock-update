import React from 'react';

export function SignInPrompt({greeting, onClick}) {
  return (
    <main>
      <h1>
      Welcome to Partage Lock!
      </h1>
      <p>
      A Blockchain-controlled smart lock for Utility NFT owners willing to share physical access to their real-world asset NFTs. 
      </p>
      <p>
      With the Partage Lock, owners, providers, can remotely manage users' access through to a vault, a garage, or an apartment.
      </p>
      <p>
      The Partage Lock is built on the Near Blockchain. 
      The code repository is available at https://github.com/PartageProtocol/partage-lock.
      </p>
      <p>
        A slides deck presentation is available at https://docs.google.com/presentation/d/1NSlpmjlvIirzLaNsZy6ndhA5ZV40h5ATqszn9FavYn8/edit?usp=sharing 
      </p>
      <br/>
      <p style={{ textAlign: 'center' }}>
        <button onClick={onClick}>Sign in with NEAR Wallet</button>
      </p>
    </main>
  );
}

export function SignOutButton({accountId, onClick}) {
  return (
    <button style={{ float: 'right' }} onClick={onClick}>
      Sign out {accountId}
    </button>
  );
}

export function EducationalText() {
  return (
    <>
      <p>
        Look at that! A Hello World app! This greeting is stored on the NEAR blockchain. Check it out:
      </p>
      <ol>
        <li>
          Look in <code>frontend/App.js</code> - you'll see <code>getGreeting</code> and <code>setGreeting</code> being called on <code>contract</code>. What's this?
        </li>
        <li>
          Ultimately, this <code>contract</code> code is defined in <code>./contract</code> – this is the source code for your <a target="_blank" rel="noreferrer" href="https://docs.near.org/docs/develop/contracts/overview">smart contract</a>.</li>
        <li>
          When you run <code>npm run deploy</code>, the code in <code>./contract</code> gets deployed to the NEAR testnet. You can see how this happens by looking in <code>package.json</code>.</li>
      </ol>
      <hr />
      <p>
        To keep learning, check out <a target="_blank" rel="noreferrer" href="https://docs.near.org">the NEAR docs</a> or look through some <a target="_blank" rel="noreferrer" href="https://examples.near.org">example apps</a>.
      </p>
    </>
  );
}

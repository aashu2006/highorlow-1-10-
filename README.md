# High–Low Guessing Game (1–10)

## **Contract Address**

`0x8eDb4C68ad0ac098Ee143eea1d31AE133826Fe16`  
https://coston2-explorer.flare.network/address/0x8eDb4C68ad0ac098Ee143eea1d31AE133826Fe16
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/a11c0afa-bf89-4e26-9488-1e275e32fbe2" />


---

## **Description**

This project is a fully on-chain **High–Low guessing game** deployed on the Flare Coston2 testnet.  
Players submit a guess between **1 and 10**, pay a fixed bet amount, and the contract determines whether they win the prize pool based on the secret number stored inside the smart contract.

The project includes:

- A secure, verified smart contract
- A frontend UI for interacting with the game
- Wagmi + Viem hooks for reading state and submitting transactions

---

## **Features**

### 🎯 **Core Gameplay**

- Guess a number between **1 and 10**
- Bet amount is enforced by the contract
- Prize pool grows with every incorrect guess
- Winning pays out the full prize pool

### 📡 **Live Contract Data**

- Fetch current bet amount
- Fetch total prize pool
- Automatic state refresh after transactions

### 🧩 **UI Functionality**

- Wallet-gated interface
- Clean and simple guess input
- Transaction status indicators:
  - Pending
  - Confirming
  - Confirmed
  - Error handling

### 🛠️ **Developer-Friendly Structure**

- Minimal custom hook for interacting with the contract
- Separation of concerns (lib, hooks, components)
- Easy to extend, style, or integrate into other apps

---

## **How It Solves the Problem**

On-chain games usually suffer from:

- Overcomplicated logic
- Hard-to-use UIs
- Poor developer onboarding
- Lack of transparency

This project solves those issues:

### ✔ **Simplicity**

The entire flow revolves around a single action — making a guess.  
No menus, no complex inputs, just pure gameplay.

### ✔ **Transparency**

All state (bet amount, prize pool, results) is stored on-chain and fully verifiable.

### ✔ **Education-Friendly**

This project is ideal for:

- Web3 beginners
- Students learning smart contracts
- Hackathon demos
- Solidity learning projects

Because it demonstrates:

- Events
- State variables
- Payable functions
- Randomness placeholder logic
- UI ↔ contract integration

### ✔ **Extensibility**

Developers can easily expand the game:

- Add difficulty levels
- Add session history
- Add player stats
- Add animations or game effects

The modular structure ensures the system grows cleanly as features are added.

---

This repository provides a clean, production-ready template for building interactive on-chain games on the Flare network.

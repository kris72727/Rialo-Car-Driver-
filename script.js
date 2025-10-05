// --- Quiz Data: Rialo Racing Scenarios ---

const QUIZ_QUESTIONS = [
    {
        question: "RACE DILEMMA 1 (The Pit Stop): You apply a rare, newly purchased Engine Upgrade NFT to your car. How does Rialo's Move Object Model ensure this unique digital asset (the upgrade) is safely transferred *into* your car object?",
        choices: [
            "A) The game server updates a centralized database entry for your car.",
            "B) An external bridge is used to wrap the NFT before it's manually assigned.",
            "C) The upgrade is a Resource Object that is moved linearly into the Car Object, preventing duplication or loss.",
            "D) The upgrade is assigned a new ERC-20 token that represents its value."
        ],
        answer: "C) The upgrade is a Resource Object that is moved linearly into the Car Object, preventing duplication or loss."
    },
    {
        question: "RACE DILEMMA 2 (The Final Overtake): You execute a crucial passing maneuver that requires real-time execution to win the race by a millisecond. What is the fundamental Rialo feature that enables this instantaneous action without lag?",
        choices: [
            "A) High Gas Fees to prioritize your transaction over others.",
            "B) Relying on a traditional chain's slow, probabilistic finality (5-10 seconds).",
            "C) Sub-Second Latency and Deterministic Finality within the Event-Driven Execution Model.",
            "D) Caching the entire race state in your browser's local storage."
        ],
        answer: "C) Sub-Second Latency and Deterministic Finality within the Event-Driven Execution Model."
    },
    {
        question: "RACE DILEMMA 3 (The Data Feed): The game needs to instantly apply a weather penalty (e.g., rain) that matches a real-world forecast service. How does Rialo integrate this off-chain data securely and without a middleman oracle?",
        choices: [
            "A) A player must manually type in the current weather conditions during the race.",
            "B) Relying on an expensive, multi-transaction Oracle contract to post the data.",
            "C) Using Rialo's Native Web Calls feature to pull secure data from the forecast API directly into the contract execution.",
            "D) The weather is hardcoded into the initial smart contract deployment and never changes."
        ],
        answer: "C) Using Rialo's Native Web Calls feature to pull secure data from the forecast API directly into the contract execution."
    },
    {
        question: "RACE DILEMMA 4 (Marketplace Trading): You want to sell your entire Car NFT bundle (Car + 3 Rims + 1 Spoiler) in a single, atomic transaction to another player. What Rialo tool simplifies this complex asset grouping?",
        choices: [
            "A) Using four separate transactions, one for each NFT, risking the loss of a piece.",
            "B) Writing a complicated, single-use Solidity contract to wrap all assets.",
            "C) Using a single, powerful Programmable Transaction Block (PTB) to define the entire multi-asset transfer bundle.",
            "D) Asking a centralized exchange to hold all the assets in an escrow account."
        ],
        answer: "C) Using a single, powerful Programmable Transaction Block (PTB) to define the entire multi-asset transfer bundle."
    },
    {
        question: "RACE DILEMMA 5 (The Prize Money): An eSports winner needs to receive their prize pool instantly and securely, with guaranteed delivery to their personal email address wallet, without using a traditional seed phrase. What Rialo UX solution makes this possible?",
        choices: [
            "A) Mailing a physical check to the winner's address with a 5-day delivery time.",
            "B) Forcing the winner to use a new, complex Web3 wallet requiring a 12-word recovery phrase.",
            "C) Leveraging Native Identity and 2FA to create a non-custodial wallet tied to their email or social login.",
            "D) The prize is sent to a DAO which votes on whether to release the funds."
        ],

# ProofMatch

Turn noisy resumes into an onchain hiring shortlist.

Contract: [https://studio.genlayer.com/contracts?import-contract=0x0330b8460B90dF06064Cb1004119bDAc03EC0A19](https://studio.genlayer.com/contracts?import-contract=0x0330b8460B90dF06064Cb1004119bDAc03EC0A19)

## What this app is

ProofMatch is a hiring fit evaluator for recruiters, hiring managers, and community hiring boards. Paste the candidate profile and the role brief. The contract returns a fit verdict, score, and exactly what is missing.

## The problem it solves

Resume screening is noisy because candidate evidence rarely maps cleanly to the role brief. ProofMatch turns the profile-to-role comparison into a structured fit decision with exact gaps called out.

## How the product works

1. Connect a browser wallet on GenLayer Studionet.
2. Paste candidate profile or resume notes.
3. Paste role brief and must-have skills.
4. Sign one write transaction to the intelligent contract.
5. Wait for the contract to return the structured result.
6. Read the verdict, score, reasons, and next action in the UI.

## What the contract decides

The contract performs this judgment onchain:

> Judge the candidate profile against the role brief and decide whether the match should be approved, reviewed, or rejected.

Returned fields:

- headline
- verdict
- score
- reasons
- next_action
- proof_of_advantage

The verdict is always APPROVE, REVIEW, or REJECT. The score is an integer from 0 to 100, and the reasons array is always kept short enough to read instantly.

## Why GenLayer is necessary here

The intelligent contract is doing the hard work of matching evidence, skills, delivery history, and missing requirements. That comparative reasoning is what belongs on GenLayer here.

Consensus mode: **Comparative equivalence**

Validators compare the same case and must converge on the same verdict. Small score variation is allowed, but the final decision cannot drift. This fits ranking, matching, proposal review, and other judgment-heavy comparisons.

## Example input shape

Candidate profile or resume notes:

~~~text
Candidate: 5 years product ops, led marketplace launch, built SQL dashboards, managed contractors, basic Python...
~~~

Role brief and must-have skills:

~~~text
Role: operations lead for logistics startup. Must own vendor ops, analytics, pricing experiments, and cross-functional delivery.
~~~

## Important files

- contracts/proofmatch.py: intelligent contract
- deploy/001_deploy.mjs: deployment script for Studionet
- src/App.tsx: browser UI
- src/lib/genlayer.ts: wallet connection and contract calls
- src/appConfig.ts: app task, copy, placeholders, and mode

## Run locally

1. pnpm install
2. Ensure .env.local contains VITE_CONTRACT_ADDRESS=0x0330b8460B90dF06064Cb1004119bDAc03EC0A19
3. Ensure .env.local contains VITE_GENLAYER_RPC_URL=https://studio.genlayer.com/api
4. pnpm dev
5. Open the app in a browser with Rabby, MetaMask, or another injected wallet that can switch to GenLayer Studionet.

## Deployed contract

- Address: 0x0330b8460B90dF06064Cb1004119bDAc03EC0A19
- Studio import: [https://studio.genlayer.com/contracts?import-contract=0x0330b8460B90dF06064Cb1004119bDAc03EC0A19](https://studio.genlayer.com/contracts?import-contract=0x0330b8460B90dF06064Cb1004119bDAc03EC0A19)

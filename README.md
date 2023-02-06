
# NFT Connect


## Table of Content
- [Project Description](#project-description)
- [Repo Description](#repo-description)
- [Technologies Used](#technologies-used)
- [Concepts Used](#concepts-used)
- [Folder Structure](#a-typical-top-level-directory-layout)
- [Install and Run](#install-and-run)
- [User Flow](#user-flow)




## Project Description
Our application enables users to connect with NFT/ENS owners and communicate with them via PUSH Chat. They can also initiate video calls using Huddle01 to express their interest in a specific NFT/ENS and negotiate. The NFT owner will receive a PUSH Notification when someone searches for their NFT on our platform.

## Repo Description
The repository holds the source code for our web-app and NFT contract.

## Technologies Used 
(List of technology or external libraries used)
- Soldity
- Openzepplein
- react


## Concepts Used 
- ERC-721

## Protocols Used
- PUSH Protocols
- Huddle01
- FVM



## Install and Run

- Run `npm install` to install dependencies
- Run `npm run start` to compile all contracts

## User Flow

Our platform is designed for NFT holders, collectors, and ENS holders who can opt-in/subscribe to our push channel through our website or the push website. 
Once a user has opted-in, they will be eligible to receive notifications. 

As an NFT explorer/user, you can find a desired NFT or ENS on our platform through Opensea Link, ENS domain, NFT address and NFT ID. 
The ENS/NFT admin will receive a notification of interest from someone in their NFT. 

Our platform then enables you to communicate with the NFT/ENS owner through the Push chat and express your interest in buying the NFT, you can also negotiate with them. User can connect with them via video call, powered by Huddle01. 

In addition to our web-application, we have also created an NFT smart contract that incorporates the opt-in and opt-out functionality through the PUSH communicator contract. This allows NFT projects to directly integrate these functions into their own platform by connecting through their own NFT contract. 





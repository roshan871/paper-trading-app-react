# Paper Trading App

Paper trading application  interacting sever-side with client-side

Github link : https://github.com/roshan871/paper-trading-app-react

(Note: Please loadserver-side code prior to the client-side to get th fully loaded application.)

Hosted link(Client-side) : https://roshan871.github.io/paper-trading-app-react/
Hosted link(Server-side) : https://codesandbox.io/s/zen-hamilton-i3g96

Desription:

- This is the paper trading application combination of both client-side and server-side in which the user can buy and sell the cryptocurrencies with the fake balance stored in the database of server-side.

- Wireframes :
  1)/wireframes/desktop-version.png
  2)/wireframes/mobile-version.png


- User stories:

```
AS A TRADER
I WANT TO buy cryptocurrencies with fake balance saved in my database
SO THAT I can understand the trading strategy.


AS A USER
I WANT TO access the current prices, porfolio and history of the crpytocurrencies
SO THAT WE can get update about the coins.

```

## Main sections  of an application

1. Remaining balance
2. Cryptocurrencies
3. Transaction
4. Portfolio
5. History

## Remaining balance
This shows the remaining balance by computational operation from total balance which is saved in the database of the server-side code.

## Cryptocurrencies
This displays the cyrptocurrencies (Link ChainLinnk, Avax Avalanche, Bnb Binance-Coin, Btc Bitcoin, Eth Ethereum, Dot Polkadot, Shib Shiba-Inu )  with it's current unit price by extracting the data from coinpaprika.com.

## Transaction
This section is used to buy and sell the  above listed cryptocurrencies in the by selecting the tokens and required quantity.

## Portfolio
This section displays all the cryptocurrencies along with the quantity that we have bought through transaction section.

## History
This section all the history of cryptocurrencies that we have bougth and sold with name, unit price and date.

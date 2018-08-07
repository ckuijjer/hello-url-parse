import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const UrlParse = require('url-parse');

const address =
  'https://10.211.55.3/Release/docs/CRMAccountCard.aspx?AccountID=%7bcd39168b-b48e-4688-8398-8d146a391fe8%7d&AddNewPotentialSaleContextMenu=&DoPurchaseAccountData=False&AddNewPurchaseContextMenu=&GDPRAction=0&ControlAccountCocNumber=False&_Division_=99&CreateInvitation=False&ShowAllPotentialSalesContextMenu=&Action=0&ControlAccountVatNumber=False&SearchAccountDataValidation=&AddNewOngoingSalesContextMenu=&ShowAllOngoingSalesContextMenu=&AddNewActivityContextMenu=&ShowAllPurchasesContextMenu=#whatever';

const urlParse = new UrlParse(address);
const url = new URL(address);

console.log({
  urlParse,
  url,
  'url.searchParams.toString()': url.searchParams.toString(),
  'url.searchParams.values()': Array.from(url.searchParams.entries()),
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

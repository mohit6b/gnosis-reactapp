import Web3 from "web3";
import Web3Connect from "web3connect";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";
import Squarelink from "squarelink";
import Torus from "@toruslabs/torus-embed";
import Arkane from "@arkane-network/web3-arkane-provider";
import Authereum from "authereum";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";


const providerOptions = {
  
    walletconnect: {
        package: WalletConnectProvider, //required
        options: {
            infuraId: "INFURA_ID"  //required
        }
    },
    
    portis: {
        package: Portis, //required
        options: {
            id: "PORTIS_ID" //required
        }
    },
    
    fortmatic: {
        package: Fortmatic, // required
        options: {
          key: "FORTMATIC_KEY" // required
        }
    },
    
    squarelink: {
        package: Squarelink, // required
        options: {
          id: "SQUARELINK_ID" // required
        }
    },
    
    torus: {
        package: Torus, // required
        options: {
          enableLogging: false, // optional
          buttonPosition: "bottom-left", // optional
          buildEnv: "production", // optional
          showTorusButton: true, // optional
          enabledVerifiers: {
            // optional
            google: false // optional
          }
        }
    },
    
    arkane: {
        package: Arkane, // required
        options: {
          clientId: "ARKANE_CLIENT_ID" // required, replace
        }
    },
    
    authereum: {
        package: Authereum, // required
        options: {}
    },
    
    burnerconnect: {
        package: BurnerConnectProvider, // required
        options: {}
    }
};

const web3Connect = new Web3Connect.Core({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});
 
const provider = await web3Connect.connect();
 
const web = new Web3(provider);

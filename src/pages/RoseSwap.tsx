import { OnLoad } from "../components/OnLoad";
import { ViewAmountRoseToken } from "../components/ViewAmountRoseToken"
import { WithdrawRoseToken } from "../components/WithdrawRoseToken"
import { WithdrawEmergency } from "../components/WithdrawEmergency"
import { Withdrawfromgarden } from "../components/Withdrawfromgarden"
import { Link } from "react-router-dom";
import roseswap from "../images/roseswap.png";

declare global {
    interface Window {
      ethereum: any;
      web3: any;
      contractRose: any;
      this: any;
    }
}


export const RoseSwap = () => {

    if (window.performance.navigation.type == 1) {
        OnLoad();
        } else {
        }

    return (
        <body>
        <main>
        <div className="page-container about">
            <div className="header">  
                <header>  
                    
                    <Link to="/SlavSwap">
                        <button>
                            Slav Swap
                        </button>
                    </Link>
                    <Link to="/AmmoSwap">
                        <button>
                            Ammo Swap
                        </button>
                    </Link>
                </header>
            </div>
            <div className="section">
                <img src={roseswap} id="roseswap"/>
                <p></p>
                <section>
                    <h2>Technical Stats</h2>
                    <pre id="log"></pre>
                    <br/>
                    <hr/>
                    <h2>Liquidity Pools</h2>
                    <br/>
                    <label htmlFor="POOL">Choose your liquidity pool to withdraw from:</label>
                    <select name="POOL" id="POOL">
                    <option value="0">ROSE </option> 
                    <option value="1">ROSE/BNB </option>
                    <option value="2">ROSE/BUSD</option>
                    <option value="3">BUSD/BNB?</option>
                    </select> 
                    <br/>
                    <br/>
                    <p>
                        Step 1: Check your unharvested ROSE balance:
                        <br/>
                        <button onClick={() => ViewAmountRoseToken()} id="getAmount">Get amount of unharvested ROSE tokens</button>
                        <p id="Dinfo"></p>
                    </p>
                    <br/>
                    <p>
                        Step 2: Enter amount of unharvested ROSE to withdraw form selected LP pool
                        <br/>
                        <input type="text" name="AmountLP" id="AmountLP" placeholder="Unharvested ROSE" />
                        <button onClick={() => WithdrawRoseToken()} id="WithdrawLPtokens">Withdraw unharvested ROSE tokens</button>
                    </p>
                    <br/>
                    <p>
                        Step 3: Withdraw all your LP tokens from the selected LP pool! (All unharvested ROSE will be lost!)
                        <br/>
                        <button onClick={() => WithdrawEmergency()} id="WithdrawStakedRose">Withdraw LP tokens</button>
                    </p>
                    <br/>    
                    <hr/>
                    <h2>Gardens</h2>
                    <p>
                        Step 1: Enter amount of staked ROSE to withdraw from the gardens
                        <br/>
                        <input type="text" name="Garden" id="Garden" placeholder="Staked ROSE" />
                        <button onClick={() => Withdrawfromgarden()} id="WithdrawStakedRose">Withdraw ROSE from staking</button>
                    </p>
                    <br/>
                </section>
            </div>   
        </div>
        </main>
        </body>
    )
}
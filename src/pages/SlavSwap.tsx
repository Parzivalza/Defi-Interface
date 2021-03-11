import { OnLoad } from "../components/OnLoad";
import { ViewAmountVodka } from "../components/ViewAmountVodka"
import { WithdrawVODKAtoken } from "../components/WithdrawVODKAtoken"
import { WithdrawEmergencyVodka } from "../components/WithdrawEmergencyVodka"
import { Link } from "react-router-dom";
import slavswap from "../images/slavswap.png";

declare global {
    interface Window {
      ethereum: any;
      web3: any;
      contractSlav: any;
      this: any;
    }
}

export const SlavSwap = () => {

    if (window.performance.navigation.type == 1) {
        OnLoad();
        } else {
        }

    return (
        <body >
        <main>
        <div className="header">  
            <header>  
                
                <Link to="/RoseSwap">
                    <button>
                        Rose Swap
                    </button>
                </Link>
            </header>
        </div>
        <div className="section">
            <img src={slavswap} id="slavswap"/>
            <p></p>
            <section>
                <h2>Technical Stats</h2>
                <pre id="log"></pre>
                <br/>
                <hr/>
                <h2>Liquidity Pools</h2>
                <br/>
                <label htmlFor="POOL2">Choose your liquidity pool to withdraw from:</label>
                <select name="POOL2" id="POOL2">
                <option value="0">1 </option> 
                <option value="1">2 </option>
                <option value="2">3 </option>
                <option value="3">4 </option>
                <option value="4">5 </option>
                <option value="5">6 </option>
                <option value="6">7 </option>
                <option value="7">8 </option>
                <option value="8">9 </option>
                <option value="9">10 </option>
                <option value="10">11 </option>
                <option value="11">12 </option>
                <option value="12">13 </option>
                <option value="13">14 </option>
                <option value="14">15 </option>
                <option value="15">16 </option>
                <option value="16">17 </option>
                <option value="17">18 </option>
                <option value="18">19 </option>
                <option value="19">20 </option>
                <option value="20">21 </option>
                <option value="21">22 </option>
                <option value="22">23 </option>
                <option value="23">24 </option>
                </select> 
                <br/>
                <br/>
                <p>
                    Step 1: Check your unharvested VODKA balance:
                    <br/>
                    <button onClick={() => ViewAmountVodka()} id="getAmount2">Get amount of unharvested VODKA tokens</button>
                    <p id="Dinfo2"></p>
                </p>
                <br/>
                <p>
                    Step 2: Enter amount of unharvested VODKA to withdraw form selected LP pool
                    <br/>
                    <input type="text" name="AmountLP2" id="AmountLP2" placeholder="Unharvested VODKA" />
                    <button onClick={() => WithdrawVODKAtoken()} id="WithdrawLPtokens2">Withdraw unharvested VODKA tokens</button>
                </p>
                <br/>
                <p>
                    Step 3: Withdraw all your LP tokens from the selected LP pool! (All unharvested VODKA will be lost!)
                    <br/>
                    <button onClick={() => WithdrawEmergencyVodka()} id="WithdrawStakedVodka">Withdraw LP tokens</button>
                </p>
                <br/>    
            </section>
        </div>   
        </main>
        </body>
    )
}
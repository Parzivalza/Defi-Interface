import { OnLoad } from "../components/OnLoad";
import { ViewAmountAmmo } from "../components/ViewAmountAmmo"
import { WithdrawAmmoToken} from "../components/WithdrawAmmoToken"
import { WithdrawEmergencyAmmo } from "../components/WithdrawEmergencyAmmo"
import { Link } from "react-router-dom";
import ammoswap from "../images/ammoswap.png";

declare global {
    interface Window {
      ethereum: any;
      web3: any;
      contractAmmo: any;
      this: any;
    }
}

export const AmmoSwap = () => {

    if (window.performance.navigation.type == 1) {
        OnLoad();
        } else {
        }

    return (
        <body >
        <main>
        <div className="header">  
            <header>  
            <Link to="/">
                    <button>
                        Landing Page
                    </button>
                </Link>
            </header>
        </div>
        <div className="section">
            <img src={ammoswap} id="ammoswap"/>
            <p></p>
            <section>
                <h2>Technical Stats</h2>
                <pre id="log"></pre>
                <br/>
                <hr/>
                <h2>Liquidity Pools</h2>
                <br/>
                <label htmlFor="POOL3">Choose your liquidity pool to withdraw from:</label>
                <select name="POOL3" id="POOL3">
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
                    Step 1: Check your unharvested AMMO balance:
                    <br/>
                    <button onClick={() => ViewAmountAmmo()} id="getAmount3">Get amount of unharvested AMMO tokens</button>
                    <p id="Dinfo3"></p>
                </p>
                <br/>
                <p>
                    Step 2: Enter amount of unharvested AMMO to withdraw form selected LP pool
                    <br/>
                    <input type="text" name="AmountLP3" id="AmountLP3" placeholder="Unharvested AMMO" />
                    <button onClick={() => WithdrawAmmoToken()} id="WithdrawLPtokens3">Withdraw unharvested AMMO tokens</button>
                </p>
                <br/>
                <p>
                    Step 3: Withdraw all your LP tokens from the selected LP pool! (All unharvested AMMO will be lost!)
                    <br/>
                    <button onClick={() => WithdrawEmergencyAmmo()} id="WithdrawStakedAmmo">Withdraw LP tokens</button>
                </p>
                <br/>    
            </section>
        </div>   
        </main>
        </body>
    )
}
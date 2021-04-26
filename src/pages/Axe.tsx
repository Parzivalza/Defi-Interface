import { OnLoad } from "../components/OnLoad";
import { ViewAmountAxe } from "../components/ViewAmountAxe"
import { WithdrawAxeToken} from "../components/WithdrawAxeToken"
import { WithdrawEmergencyAxe } from "../components/WithdrawEmergencyAxe"
import { Link } from "react-router-dom";
import axe from "../images/axe.png";

declare global {
    interface Window {
      ethereum: any;
      web3: any;
      contractAxe: any;
      this: any;
    }
}

export const Axe = () => {

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
            <img src={axe} id="axe"/>
            <p></p>
            <section>
                <h2>Technical Stats</h2>
                <pre id="log"></pre>
                <br/>
                <hr/>
                <h2>Liquidity Pools</h2>
                <br/>
                <label htmlFor="POOL4">Choose your liquidity pool to withdraw from:</label>
                <select name="POOL4" id="POOL4">
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
                <option value="24">25 </option>
                <option value="25">26 </option>
                <option value="26">27 </option>
                <option value="27">28 </option>
                </select> 
                <br/>
                <br/>
                <p>
                    Step 1: Check your unharvested AXE balance:
                    <br/>
                    <button onClick={() => ViewAmountAxe()} id="getAmount4">Get amount of unharvested AXE tokens</button>
                    <p id="Dinfo4"></p>
                </p>
                <br/>
                <p>
                    Step 2: Enter amount of unharvested AXE to withdraw form selected LP pool
                    <br/>
                    <input type="text" name="AmountLP4" id="AmountLP4" placeholder="Unharvested AXE" />
                    <button onClick={() => WithdrawAxeToken()} id="WithdrawLPtokens4">Withdraw unharvested Axe tokens</button>
                </p>
                <br/>
                <p>
                    Step 3: Withdraw all your LP tokens from the selected LP pool! (All unharvested AXE will be lost!)
                    <br/>
                    <button onClick={() => WithdrawEmergencyAxe()} id="WithdrawStakedAxe">Withdraw LP tokens</button>
                </p>
                <br/>    
            </section>
        </div>   
        </main>
        </body>
    )
}
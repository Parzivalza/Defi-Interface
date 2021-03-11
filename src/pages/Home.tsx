import { Link } from "react-router-dom";
import slavswap from "../images/slavswap.png";
import roseswap from "../images/roseswap.png";

declare global {
    interface Window {
      ethereum: any;
      web3: any;
      contract: any;
    }
}

export const Home = () => {
    

    return (
      <main className="App"> 
        <div>
            <div id="images">
                <img src={roseswap} className="fblogo"/>
                <img src={slavswap} className="fblogo"/>
                <br/>
                <Link to="/RoseSwap">
                        <button className="but1">
                            RoseSwap
                        </button>
                </Link>
                <Link to="/SlavSwap">
                        <button className="but1">
                            SlavSwap
                        </button>
                </Link>
            </div>
        </div>
      </main>
    )
}
import { NavBar } from "../NavBar/NavBarBTS";
import { AllFiltersButtos } from "../Filters/AllFiltersButtons";

import { CardContainer } from "../CardsContainer/CardsContainer";
import './HomeStyles.css'



export function Home() {



    return (
        <div class='grande'>
            {/* <div>
            </div> */}
            <NavBar class="NavbarStyle" />


         
            <div class='container-fluid resto'>
                <AllFiltersButtos />
                <CardContainer />
            </div>
        </div>

    )
}
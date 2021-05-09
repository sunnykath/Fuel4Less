import { List } from "@material-ui/core";
import DashboardForm from "../Components/forms/DashboardForm"
import NavBar from "../Components/NavBar";

export default function DashboardPage() {
    return(
        <div className="DashboardPage">
            <nav>
                <NavBar />
            </nav>
            <List>
                Kia Ora 
            </List>

            <DashboardForm>
            </DashboardForm>

        </div>
        
    );
}
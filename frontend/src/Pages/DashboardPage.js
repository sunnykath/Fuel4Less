import { List } from "@material-ui/core";
import SimpleList from "../Components/ListComponent";
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
            <SimpleList>
            </SimpleList>
            <DashboardForm>
            </DashboardForm>
            
            {/* <form>
                <label>
                    Update Price:
                    <input type="double" name="price" />
                </label>
                <input type="submit" value="Submit" onClick={() => { console.log(price) }/>
            </form> */}

        </div>
        
    );
}
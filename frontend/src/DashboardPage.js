import { List } from "@material-ui/core";
import SimpleList from "./ListComponent";
import NavBar from "./NavBar";

export default function DashboardPage() {
    return(
        <div className="DashboardPage">
            <nav>
                <NavBar />
            </nav>
            <List>
                "hello"
            </List>
            <SimpleList>
            </SimpleList>
        </div>
        
    );
}
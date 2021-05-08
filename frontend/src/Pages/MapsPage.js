import NavBar from "../Components/NavBar";
import MapComponent from "../Components/MapComponent";

export default function MapPage() {
  return(
    // <div className="SignInPage">
    <div className="MapsPage">
        <nav>
            <NavBar />
        </nav>
        <MapComponent/>
        {/* <Button className="button" variant="contained" color="primary">
            Sign up as an Admin
        </Button> */}
    </div>
    
);
}

import NavBar from "../Components/NavBar";
import MapComponent from "../Components/MapComponent";

export default function MapPage() {
  return(
    <div className="MapsPage">
        <nav>
            <NavBar />
        </nav>
        <MapComponent/>
    </div>
    
);
}

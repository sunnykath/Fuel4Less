import NavBar from "../Components/NavBar";
import MapComponent from "../Components/MapComponent";
import ListComponent from "../Components/ListComponent";
import Box from '@material-ui/core/Box';

export default function MapPage() {
  const callbackArray = [
    { name: 'Papatoetoe Z', price: 2.10 , lat: 10, long: 10},
    { name: 'Papatoetoe Gas', price: 1.90 , lat: 1, long: 1},
    { name: 'Papatoetoe Gull', price: 1.85 , lat: 4, long: 4},
    { name: 'Papatoetoe Mobile', price: 2.10 , lat: 5, long: 5},
    { name: 'Otahuhu Mobil', price: 2.05 , lat: 3, long: 3},
    { name: 'Otahuhu Caltex', price: 2.00 , lat: 7, long: 7},
    { name: 'Otara Gas', price: 1.95 , lat: 2, long: 2},
    { name: 'Otara Mobil', price: 1.80 , lat: 8, long: 8},
    { name: 'Manukau Mobil', price: 2.30 , lat: 9, long: 9},
    { name: 'Manukau Z', price: 2.45 , lat: 6, long: 6}
  ];
const currentPos = [{lat: 0,long: 0}];
var i, j, min_idx, temp;

for (i = 0; i < callbackArray.length - 1; i++) {
  min_idx = i;
  for (j = i+1; j < callbackArray.length; j++){
      if (callbackArray[j].lat < callbackArray[min_idx].lat){ //calculate distance and compare to min distance
          min_idx = j;
      }
    }
  temp = callbackArray[min_idx];
  callbackArray[min_idx] = callbackArray[i];
  callbackArray[i] = temp;
  }

  return(
    <div className="MapsPage">
        <nav>
            <NavBar />
        </nav>
        <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        p={1}
      >
          <Box p={1} flexGrow={1}>
              <MapComponent/>
          </Box>
            
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        p={1}
        bottom="true"
      >
          <Box p={1} flexGrow={1}>
               <ListComponent items = {callbackArray.slice(0,5)}/>
          </Box>
           
        </Box>
            
        
        
    </div>
    
);
}
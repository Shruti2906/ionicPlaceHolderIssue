import { IonInput } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">

{/* no placeholder is getting displayed for both of these input fields if there type=date/time */}

        <IonInput
          type="date"
          fill="outline"
          color="medium"
          placeholder="End_Date"
          name="end_date"
          style={{width:200}}
        />
        <IonInput
        type="time"
        fill="outline"
        color="medium"
        placeholder="Time"
        name="Time"
        style={{width:'200px'}}
       />
    </div>
  );
};

export default ExploreContainer;

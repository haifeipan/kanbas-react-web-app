import Modules from '../Modules';
import Status from './Status';
import './index.css';

function Home() {
  return (
    
      <div class='horizontal-container'>


        <div class='left-component'>
          <Modules/>
        </div>

        <div class='right-component'>
          <Status/>

        </div>
      </div>
  );
}
export default Home;

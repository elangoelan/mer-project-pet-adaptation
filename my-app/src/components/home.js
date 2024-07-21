import './home.css';
import { useNavigate } from 'react-router-dom';

const Home=()=>{
    let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('./uploadpage');
  };
    return (
        <div className='container'>
           <div className='section'>
              
                <p className='main-text'>From our Shelves to Your Pet’s Heart</p>
                <br></br>
                <p className='main-text1'>Join our community of happy pet owners who trust us for their pet care needs. Read their stories and see why pets love shopping with us.
                  <br></br>
                  <button className="redirect-button" onClick={handleButtonClick}>
                    
        Upload Your Pet's Details 
      </button>
                </p>
                
              
              
           </div>
          
        </div>

    );
}
export default Home;
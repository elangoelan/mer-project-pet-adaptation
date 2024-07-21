// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './uploadpage.css';
// function UploadPage() { 
//   const [petName, setPetName] = useState('');
//   const [petDescription, setPetDescription] = useState('');
//   const [petLocation, setPetLocation] = useState('');
//   const [petAge, setPetAge] = useState('');
//   const [petMail, setPetMail] = useState('');
//   const [petMobile, setPetMobile] = useState('');
//   const [petPhoto, setPetPhoto] = useState(null);
  


//   let navigate = useNavigate();

//   const redirectpet = () => {
//     navigate('./components/pet.js');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const petData = {
//       petName,
//       petDescription,
//       petLocation,
//       petAge,
//       petPhoto: petPhoto ? URL.createObjectURL(petPhoto) : null,
//       petMail,
//       petMobile,
//     };

//     const existingPets = JSON.parse(localStorage.getItem('pets')) || [];
//     existingPets.push(petData);
//     localStorage.setItem('pets', JSON.stringify(existingPets));
//     navigate('/pets');
//   };

//   const handleFileChange = (e) => {
//     setPetPhoto(e.target.files[0]);
//   };

//   return (
//     <div class="full" >
//       <h1>Upload Your Pet's Details</h1>
//       <form onSubmit={handleSubmit} class="box-f">
//         <div className='eachbox'>
//           <label>Pet Name:</label>
//           <input
//             type="text"
//             value={petName}
//             onChange={(e) => setPetName(e.target.value)}
//             required
//           />
//         </div>
//         <div className='eachbox'>
//           <label>Pet Age:</label>
//           <input
//             type="number"
//             value={petAge}
//             onChange={(e) => setPetAge(e.target.value)}
//             required
//           />
//         </div>
//         <div className='eachbox'>
//           <label>Pet Location:</label>
//           <input
//             type="text"
//             value={petLocation}
//             onChange={(e) => setPetLocation(e.target.value)}
//             required
//           />
//         </div>
//         <div className='eachbox'>
//           <label>Pet Description:</label>
//           <textarea
//             value={petDescription}
//             onChange={(e) => setPetDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className='eachbox'>
//           <label>Pet Photo:</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             required
//           />
//         </div>
//         <div className='eachbox'>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={petMail}
//             onChange={(e) => setPetMail(e.target.value)}
//             required
//           />
//         </div>
//         <div className='eachbox'>
//           <label>Mobile Number :</label>
//           <input
//             type="tel"
//             value={petMobile}
//             onChange={(e) => setPetMobile(e.target.value)}
//             required
//           />
//         </div >
//         <button  class="upbut" type="submit" onClick={redirectpet}>Upload</button>
//       </form>
//     </div>
//   );
// }

// export default UploadPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './uploadpage.css';

function UploadPage() { 
  const [petName, setPetName] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petLocation, setPetLocation] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petMail, setPetMail] = useState('');
  const [petMobile, setPetMobile] = useState('');
  const [petPhoto, setPetPhoto] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const petData = {
      petName,
      petDescription,
      petLocation,
      petAge,
      petPhoto: petPhoto ? URL.createObjectURL(petPhoto) : null,
      petMail,
      petMobile,
    };

    const existingPets = JSON.parse(localStorage.getItem('pets')) || [];
    existingPets.push(petData);
    localStorage.setItem('pets', JSON.stringify(existingPets));
    navigate('/pets');
  };

  const handleFileChange = (e) => {
    setPetPhoto(e.target.files[0]);
  };

  return (
    <div className="full">
      <h1>Upload Your Pet's Details</h1>
      <form onSubmit={handleSubmit} className="box-f">
        <div className='eachbox'>
          <label>Pet Name:</label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </div>
        <div className='eachbox'>
          <label>Pet Age:</label>
          <input
            type="number"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            required
          />
        </div>
        <div className='eachbox'>
          <label>Pet Location:</label>
          <input
            type="text"
            value={petLocation}
            onChange={(e) => setPetLocation(e.target.value)}
            required
          />
        </div>
        <div className='eachbox'>
          <label>Pet Description:</label>
          <textarea
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='eachbox'>
          <label>Pet Photo:</label>
          <input
            type="file"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className='eachbox'>
          <label>Email:</label>
          <input
            type="email"
            value={petMail}
            onChange={(e) => setPetMail(e.target.value)}
            required
          />
        </div>
        <div className='eachbox'>
          <label>Mobile Number :</label>
          <input
            type="tel"
            value={petMobile}
            onChange={(e) => setPetMobile(e.target.value)}
            required
          />
        </div>
        <button className="upbut" type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadPage;


// import React from 'react';
// import './pet.css';

// function PetPage() {
//   const [petsData, setPetsData] = React.useState(JSON.parse(localStorage.getItem('pets')) || []);

//   const handleDelete = (index) => {
//     const updatedPets = petsData.filter((_, i) => i !== index);
//     setPetsData(updatedPets);
//     localStorage.setItem('pets', JSON.stringify(updatedPets));
//   };

//   const handleMessage = (pet) => {
//     const email = pet.petMail; // Use the email from the pet data
//     const subject = `Inquiry about ${pet.petName}`;
//     const body = `Hello,\n\nI am interested in ${pet.petName}.\n\nDetails:\nAge: ${pet.petAge}\nLocation: ${pet.petLocation}\nDescription: ${pet.petDescription}\n\nThank you.`;
//     window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//   };

//   if (!petsData || petsData.length === 0) {
//     return <div>No pet data available. If you have a pet, please upload pet details.</div>;
//   }

//   return (
//     <div className='box'>
//       <h1>Pets to Adopt</h1>
//       <div className='pet-cards'>
//         {petsData.map((pet, index) => (
//           <div key={index} className='pet-card'>
//             {pet.petPhoto && <img src={pet.petPhoto} alt={pet.petName} className='pet-photo' />}
//             <h2>{pet.petName}</h2>
//             <p>Age: {pet.petAge}</p>
//             <p>Location: {pet.petLocation}</p>
//             <p>Description: {pet.petDescription}</p>
//             <p>Email: {pet.petMail}</p>
//             <p>Mobile: {pet.petMobile}</p>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//             <button onClick={() => handleMessage(pet)}>Message</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PetPage;

import React from 'react';
import './pet.css';

function PetPage() {
  const [petsData, setPetsData] = React.useState(JSON.parse(localStorage.getItem('pets')) || []);

  const handleDelete = (index) => {
    const updatedPets = petsData.filter((_, i) => i !== index);
    setPetsData(updatedPets);
    localStorage.setItem('pets', JSON.stringify(updatedPets));
  };

  const handleMessage = (pet) => {
    const email = pet.petMail;
    const subject = `Inquiry about ${pet.petName}`;
    const body = `Hello,\n\nI am interested in ${pet.petName}.\n\nDetails:\nAge: ${pet.petAge}\nLocation: ${pet.petLocation}\nDescription: ${pet.petDescription}\n\nThank you.`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!petsData || petsData.length === 0) {
    return <div>No pet data available. If you have a pet, please upload pet details.</div>;
  }

  return (
    <div className='box'>
      <h1>Pets to Adopt</h1>
      <div className='pet-cards'>
        {petsData.map((pet, index) => (
          <div key={index} className='pet-card'>
            {pet.petPhoto && <img src={pet.petPhoto} alt={pet.petName} className='pet-photo' />}
            <h2>{pet.petName}</h2>
            <p>Age: {pet.petAge}</p>
            <p>Location: {pet.petLocation}</p>
            <p>Description: {pet.petDescription}</p>
            <p>Email: {pet.petMail}</p>
            <p>Mobile: {pet.petMobile}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleMessage(pet)}>Message</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetPage;

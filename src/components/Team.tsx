import React from 'react';
import './team.css'; 

const teamMembers = [
  {
    name: 'Tim Kim',
    role: 'Founder/ Cheif Executive',
    image: "src/assets/png/25.png"
  },
  {
    name: 'Sathya Devapreya',
    role: 'Chief Finance Officer',
    image: "src/assets/png/26.png"
  },
  {
    name: 'Mary Tiquia',
    role: 'Project Manager',
    image: 'src/assets/png/27.png'
  },
  {
    name: 'Tosin Sunday Olorunmaiye',
    role: 'Field Specialist',
    image: 'src/assets/png/28.png'
  },
  {
    name: 'Dr. Mohommad Shahid',
    role: 'Carbon Consultant',
    image: 'src/assets/png/29.png'
  },
  {
    name: 'Dr. Alexis Belonio',
    role: 'Stove Consultant',
    image: 'src/assets/png/30.png'
  }
];

const TeamSection = () => {
  return (
    <div className="team-container">
        <h2 className="text-xl text-center font-bold font-sans mb-4 sm:text-4xl lg:text-[56px]"> Our Team </h2>
    
    <div className="team-section">
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.image} className="team-member-image" />
          <h3 className="font-sans font-bold text-xl">{member.name}</h3>
          <p className="font-sans">{member.role}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TeamSection;

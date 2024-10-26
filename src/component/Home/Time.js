import React from 'react';

const Time = ({ day }) => {
  const openingHours = {
    Mon: { start: '10:30 AM', end: '4:30 PM' },
    Tue: { start: '10:30 AM', end: '4:30 PM' },
    Wed: { start: '10:30 AM', end: '4:30 PM' },
    Thu: { start: '10:30 AM', end: '4:30 PM' },
    Fri: { start: '10:30 AM', end: '4:30 PM' },
    Sat: { start: '10:30 AM', end: '4:30 PM' },
    Sun: { start: '10:30 AM', end: '4:30 PM' },
  };

  const getCurrentTimeInMinutes = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  const isOpen = () => {
    const currentTime = getCurrentTimeInMinutes();
    const dayOpeningHours = openingHours[day];

    if (dayOpeningHours) {
      const startTime = convertToMinutes(dayOpeningHours.start);
      const endTime = convertToMinutes(dayOpeningHours.end);
      return currentTime >= startTime && currentTime <= endTime;
    }

    return false;
  };

  const convertToMinutes = (time) => {
    const [hour, minute] = time.replace(/(AM|PM)/, '').split(':').map(part => parseInt(part, 10));
    const isPM = time.includes('PM');

    let adjustedHour = hour;
    if (isPM && hour !== 12) {
      adjustedHour += 12;
    } else if (!isPM && hour === 12) {
      adjustedHour = 0;
    }

    return adjustedHour * 60 + minute;
  };

  console.log('Day:', day);
  console.log('Current Time:', getCurrentTimeInMinutes());
  console.log('Opening Hours:', openingHours[day]);

  return (
    <div style={{margin:'10px'}}>
      <h4 style={{fontFamily:'Diphylleia',fontSize:'larger',fontWeight:'700',textDecoration:'underline'}}>Timings</h4>
      {openingHours[day] ? (
        <>
          <p style={{fontFamily:'Sofia'}}>{day}: {openingHours[day].start} - {openingHours[day].end}</p>
          <p style={{fontFamily:'Sofia'}}>Status:Now {isOpen() ? 'Open' : 'Closed'}</p>
        </>
      ) : (
        <>
          <p>Timings for {day} are unavailable</p>
          <p>Status: Closed</p>
          
        </>
      )}
    </div>
  );
};

export default Time;

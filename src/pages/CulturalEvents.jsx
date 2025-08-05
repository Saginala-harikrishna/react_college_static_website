import React, { useEffect, useState } from "react";


const CulturalEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock fetch – in real case you’d fetch from API or CMS
    const fetchedEvents = [
      {
        id: 1,
        title: "Annual Fest",
        description: "A vibrant celebration of college cultural diversity.",
        image:
          "https://images.unsplash.com/photo-1581368124527-24c13643ca3c?fit=crop&w=800&q=80",
      },
      {
        id: 2,
        title: "Music Night",
        description: "Live performances by talented students and guests.",
        image:
          "https://images.unsplash.com/photo-1542315192-1f61a40d486d?fit=crop&w=800&q=80",
      },
    ];

    setEvents(fetchedEvents);
  }, []);

  return (
    <div className="cultural-event-container">
      <h2>Cultural Events</h2>
      <div className="cultural-event-list">
        {events.map((event) => (
          <div className="cultural-event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalEvent;

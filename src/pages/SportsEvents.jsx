import React, { useEffect, useState } from "react";


const SportsEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchedSports = [
      {
        id: 1,
        title: "Cricket Tournament",
        description: "Inter-department cricket tournament finals.",
        image:
          "https://images.unsplash.com/photo-1599058917212-d750089bc4f5?fit=crop&w=800&q=80",
      },
      {
        id: 2,
        title: "Athletics Meet",
        description: "100m, 200m, long jump, and more track events.",
        image:
          "https://images.unsplash.com/photo-1615914254735-b9b3e179ed89?fit=crop&w=800&q=80",
      },
    ];

    setEvents(fetchedSports);
  }, []);

  return (
    <div className="sports-event-container">
      <h2>Sports Events</h2>
      <div className="sports-event-list">
        {events.map((event) => (
          <div className="sports-event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsEvent;

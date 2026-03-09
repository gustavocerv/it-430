import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Activities",
      description:
        "Keep everyone engaged with fun and meaningful activities that bring your family closer together.",
      path: "/activities",
    },
    {
      title: "Tasks",
      description:
        "Track important tasks and responsibilities for your family members.",
      path: "/tasks",
    },
    {
      title: "Goals",
      description:
        "Set and track family goals to celebrate achievements together.",
      path: "/goals",
    },
    {
      title: "Priorities",
      description:
        "Stay focused on what truly matters. Assign priorities for balance and harmony.",
      path: "/priorities",
    },
  ];

  return (
    <div className="home-container">
      {/* Welcome description */}
      <section className="welcome">
        <p className="description">
          Welcome to Anchor Point, your central hub for keeping your family
          connected, organized, and thriving. Track activities, goals, tasks,
          and priorities, all in one place.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="features">
        {cards.map((card, index) => (
          <div
            key={index}
            className="feature-card clickable"
            onClick={() => navigate(card.path)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;

import MemberCard from "./MemberCard";

function Team() {
  const members = [
    {
      id: 1,
      name: "Nancy",
      role: "Frontend Developer",
      photo: "mini-props-card\src\assets\nancy.jpg",
      bio: "Passionate about building user-friendly interfaces."
    },
    {
      id: 2,
      name: "Alex",
      role: "Backend Developer",
      photo: "mini-props-card\src\assets\alex.jpg",
      bio: "Loves working with APIs and databases."
    },
    {
      id: 3,
      name: "Sara",
      role: "UI/UX Designer",
      photo: "mini-props-card\src\assets\sara.jpg",
      bio: "Designs clean and intuitive user experiences."
    }
  ];

  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="team-list">
        {members.map(member => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            photo={member.photo}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;

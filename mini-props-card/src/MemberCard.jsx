function MemberCard({ name, role, photo, bio }) {
  return (
    <div className="member-card">
      <img src={photo} alt={name} className="member-photo" />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default MemberCard;

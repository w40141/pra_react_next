const FakerItem = ({ item }) => (
  <div style={{ display: "flex" }}>
    <img src={item.avatar} alt={item.name} with={50} />
    <p>
      {item.name} - {item.email}
    </p>
  </div>
);

export { FakerItem };

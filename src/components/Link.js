const Link = ({ mouseOverEvent, mouseOutEvent, src }) => {
  return (
    <img onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} src={src} />
  );
};

export default Link;

import "./Card.css";

//Card is used to style 2 basic consistent styles that our components can wrap with instead of divs.
//There were a few things we needed to do here to get this working.
function Card(props) {
  const classes = "card " + props.className;

  //
  return <div className={classes}>{props.children}</div>;
}

export default Card;

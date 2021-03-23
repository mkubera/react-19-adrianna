import "./NavBtn.css";

function NavBtn(props) {
  return (
    <div>
      <p className="navBtn" style={{ color: props.colour }}>
        {props.name}
      </p>
    </div>
  );
}

export default NavBtn;

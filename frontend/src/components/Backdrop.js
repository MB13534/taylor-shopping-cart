import "./Backdrop.css";

const Backdrop = ({ show, click }) => {
  //display backdrop if sideToggle is false
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;

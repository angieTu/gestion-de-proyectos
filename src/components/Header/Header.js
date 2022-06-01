import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./header.styles.scss";

const Header = ({ title, page }) => {
  const navigate = useNavigate();

  const addProject = () => {
    navigate("/add");
  };
  const handleBack = () => {
    navigate("/list");
  };

  return (
    <header>
      <div className="logo">Logo</div>
      <div className="title">
        <div>
          {page !== "list" && (
            <button onClick={handleBack}>
              <AiOutlineArrowLeft />
              Back
            </button>
          )}
          {title}
        </div>
        {page === "list" && (
          <button className="btn-add" onClick={addProject}>
            + Add Project
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

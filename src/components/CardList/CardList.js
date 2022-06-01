import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrTrash } from "react-icons/gr";
import { RiEditBoxLine } from "react-icons/ri";

import "./cardList.styles.scss";

const CardList = ({
  handleDelete,
  data: { id, title, date, description, manager, assigned, status },
}) => {
  const navigate = useNavigate("/add:ID");
  const [show, setShow] = useState(false);

  const datetime = new Date(date).toLocaleString() + "hs.";

  const handleShow = () => {
    setShow(show === "false" ? "true" : "false");
  };
  const handleNavigate = (id) => {
    navigate(`/add/${id}`);
  };

  return (
    <div className="card">
      <ul>
        <li>
          {title}
          <br />
          <span>Creation date: {datetime}</span>
        </li>
        <li className="manager">{manager}</li>
        <li>{assigned}</li>
        <li>
          <span className="btn-status">{status}</span>
        </li>
        <li className="dots">
          <BsThreeDotsVertical className="icon-dots" onClick={handleShow} />
          <div className={`tooltip ${show}`}>
            <div>
              <RiEditBoxLine onClick={() => handleNavigate(id)} /> Edit
            </div>
            <div>
              <GrTrash onClick={() => handleDelete(id)} /> Delete
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardList;

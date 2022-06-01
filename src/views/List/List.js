import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import swal from "sweetalert";
import { removeProject } from "../../store/actions/projectActions";

import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import "./list.styles.scss";

const List = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const { projects } = useSelector((state) => {
    return state.projectReducer;
  });
  const [list, setList] = useState([]);

  const openSwal = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this project!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeProject(id));
        swal("Poof! Your project has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  const handleSearch = debounce((event) => {
    setSearch(event?.target?.value);
  }, 1000);

  useEffect(() => {
    if (search)
      setList(projects.filter((data) => data.title.startsWith(search)));
  }, [search]);

  return (
    <>
      <Header title="My projects" page="list" />
      <div className="list-container">
        {projects.length !== 0 && (
          <div className="search">
            <input
              type="text"
              placeholder="Search title"
              onChange={handleSearch}
            />
          </div>
        )}

        <ul className="list-header">
          <li>Project info</li>
          <li>Project Manager</li>
          <li>Assigned To</li>
          <li>Status</li>
          <li>Action</li>
        </ul>
        {search
          ? list.map((e) => (
              <CardList
                key={e.id}
                handleDelete={() => openSwal(e.id)}
                data={e}
              />
            ))
          : projects &&
            projects.map((e) => (
              <CardList
                key={e.id}
                handleDelete={() => openSwal(e.id)}
                data={e}
              />
            ))}
        {search.length === 0 && projects.length === 0 && (
          <div className="msg-empty"> Empty list</div>
        )}
      </div>
    </>
  );
};

export default List;

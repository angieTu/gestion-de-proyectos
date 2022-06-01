import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { updateProject } from "../../store/actions/projectActions";

import { users } from "../../assets/users";
import { managers } from "../../assets/managers";
import Header from "../../components/Header/Header";

const EditProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { ID } = useParams();
  const { projects } = useSelector((state) => {
    return state.projectReducer;
  });

  const project = projects.find((e) => e.id === parseFloat(ID));

  const initialValues = {
    title: project.title,
    description: project.description,
    manager: project.manager,
    assigned: project.assigned,
    status: project.status,
  };

  const required = "* Campo obligatorio";
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, "Cantidad minima de caracteres es 4")
      .required(required),
    manager: Yup.string().required(required),
    assigned: Yup.string().required(required),
    description: Yup.string().required(required),
    status: Yup.string().required(required),
  });
  const onSubmit = () => {
    dispatch(
      updateProject(
        ID,
        values.title,
        values.description,
        values.manager,
        values.assigned,
        values.status
      )
    );
    toast("El proyecto se actualizó correctamente");
    setTimeout(() => navigate("/list"), 2000);
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
    formik;

  return (
    <>
      <Header title="Edit project" page="add" />
      <section className="list-form">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Project name</label>
              <input
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project"
                className={errors.title && touched.title ? "error" : ""}
                value={values.title}
              />
              {errors.title && touched.title && (
                <span className="error-message">{errors.title}</span>
              )}
            </div>

            <div>
              <label>Description</label>
              <input
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project"
                className={
                  errors.description && touched.description ? "error" : ""
                }
                value={values.description}
              />
              {errors.description && touched.description && (
                <span className="error-message">{errors.description}</span>
              )}
            </div>

            <div>
              <label>Project manager</label>
              <select
                name="manager"
                className={errors.manager && touched.manager ? "error" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.manager}
              >
                <option value="">Seleccionar una opcion</option>
                {managers.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {errors.manager && touched.manager && (
                <span className="error-message">{errors.manager}</span>
              )}
            </div>

            <div>
              <label>Assigned to</label>
              <select
                name="assigned"
                className={errors.assigned && touched.assigned ? "error" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.assigned}
              >
                <option value="">Seleccionar prioridad</option>
                {users.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {errors.assigned && touched.assigned && (
                <span className="error-message">{errors.assigned}</span>
              )}
            </div>

            <div>
              <label>Status</label>
              <select
                name="status"
                className={errors.status && touched.status ? "error" : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
              >
                <option value="">Seleccionar prioridad</option>
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
              {errors.status && touched.status && (
                <span className="error-message">{errors.status}</span>
              )}
            </div>
          </div>
          <button type="submit">Save changes</button>
        </form>
        <ToastContainer />
      </section>
    </>
  );
};

export default EditProject;

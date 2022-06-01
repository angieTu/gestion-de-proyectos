import { useDispatch } from "react-redux";
import { addProject } from "../../store/actions/projectActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { users } from "../../assets/users";
import { managers } from "../../assets/managers";
import Header from "../../components/Header/Header";

import "./add.styles.scss";

const AddProject = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    manager: "",
    description: "",
    assigned: "",
    status: "",
  };

  const required = "* Campo obligatorio";
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, "Cantidad minima de caracteres es 5")
      .required(required),
    manager: Yup.string().required(required),
    assigned: Yup.string().required(required),
    description: Yup.string().required(required),
    status: Yup.string().required(required),
  });
  const onSubmit = () => {
    dispatch(
      addProject(
        values.title,
        values.description,
        values.manager,
        values.assigned,
        values.status
      )
    );
    resetForm();
    toast("El proyecto se agregó correctamente");
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik;
  return (
    <>
      <Header title="Add project" page="add" />
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
                <option value="Enabled">Enabled</option>
                <option value="Disabled">Disabled</option>
              </select>
              {errors.status && touched.status && (
                <span className="error-message">{errors.status}</span>
              )}
            </div>
          </div>
          <button type="submit">Create project</button>
        </form>
        <ToastContainer />
      </section>
    </>
  );
};

export default AddProject;

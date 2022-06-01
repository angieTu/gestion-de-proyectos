export const ADD_PROJECT = "ADD_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

export const addProject = (title, description, manager, assigned, status) => ({
  type: ADD_PROJECT,
  payload: {
    title: title,
    description: description,
    manager: manager,
    assigned: assigned,
    status: status,
  },
});

export const updateProject = (
  id,
  title,
  description,
  manager,
  assigned,
  status
) => ({
  type: UPDATE_PROJECT,
  payload: {
    id: id,
    title: title,
    description: description,
    manager: manager,
    assigned: assigned,
    status: status,
  },
});

export const removeProject = (id) => ({
  type: REMOVE_PROJECT,
  id,
});

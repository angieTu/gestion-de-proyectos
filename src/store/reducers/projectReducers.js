import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
} from "../actions/projectActions";

const initialState = { projects: [] };

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      const newProject = {
        id: Math.random(),
        date: new Date(),
        title: action.payload.title,
        description: action.payload.description,
        manager: action.payload.manager,
        assigned: action.payload.assigned,
        status: action.payload.status,
      };
      return { ...state, projects: [...state.projects, newProject] };

    case REMOVE_PROJECT:
      const updateProjects = state.projects.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        projects: updateProjects,
      };

    case UPDATE_PROJECT:
      const newArray = state.projects.map((e) =>
        e.id === parseFloat(action.payload.id)
          ? {
              ...e,
              title: action.payload.title,
              description: action.payload.description,
              manager: action.payload.manager,
              assigned: action.payload.assigned,
              status: action.payload.status,
            }
          : e
      );
      return { ...state, projects: newArray };

    default:
      return state;
  }
};

import { TApiKey } from "./type";

export const LS_PROJECT_KEY = (project_id: TApiKey) => (project_id ? `API_PROJECT_${project_id}` : null);

export const STATES_KEY = (project_id: TApiKey) => (project_id ? `API_STATES${project_id}` : null);

export const LABELS_BY_PROJECT_KEY = (project_id: TApiKey) => (project_id ? `API_LABELS_BY_PROJECT${project_id}` : null);
import CommonApi from "./CommonApi";

export const addTodosApi = async (reqBody) => {
  return await CommonApi("post", "/todos", reqBody)
};

export const getTodosApi = async () => {
  return await CommonApi("get", "/todos", " ")
};

export const deleteTodosApi = async (id) => {
  return await CommonApi("delete", `/todos/${id}`)
}


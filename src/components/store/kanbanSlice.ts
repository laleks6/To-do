import { createSlice } from "@reduxjs/toolkit";
import Task from "../TodoComplex/task/Task";

const kanbanSlice = createSlice({
  name: "kanban",
  initialState: {
    columns: [
      {
        id: Date.now(),
        order: 0,
        name: "",
        status: "beforeCreate",
        tasks: [
          { id: 1, order: 0, data: 1 },
          { id: 2, order: 1, data: 2 },
        ],
      },
    ],
  },
  reducers: {
    createTabel(state) {
      console.log("createtable");
      state.columns.push({
        id: Date.now(),
        name: "",
        order: state.columns.length,
        status: "beforeCreate",
        tasks: [],
      });
    },
    changeNameTabel(state, action) {
      console.log(action.payload.id, action.payload.name, "changeNameTabel");
      const tabel = state.columns.find((el) => el.id === action.payload.id);

      tabel!.name = action.payload.name;
    },
    reorder(state, action) {
      console.log(action.payload, "changeNameTabel");
      state.columns = [...action.payload];
    },
    changeSatus(state, action) {
      console.log(action.payload.id, action.payload.status, "changeSatus");
      const tabel = state.columns.find((el) => el.id === action.payload.id);

      tabel!.status = action.payload.status;
    },
    addTask(state, action) {
      console.log(
        "addtask dispatch",
        action.payload,
        state.columns[action.payload.index].tasks.length
      );
      state.columns[action.payload.index].tasks.push({
        id: Date.now(),
        order: state.columns[action.payload.index].tasks.length,
        data: action.payload.task,
      });
    },
    changeIndexTask(state, action) {
      console.log("CHANGE", action.payload);
      state.columns[action.payload.index].tasks = action.payload.tasks;
    },
    changeIndexTaskColumns(state, action) {
      // dropColumnIndex, newArrTask, currentColumnIndex, currentColumnTasks
      console.log(
        "CHANGE",
        action.payload.dropColumnIndex,
        action.payload.newArrTasks,
        action.payload.currentColumnIndex,
        action.payload.currentColumnTasks
      );
      state.columns[action.payload.dropColumnIndex].tasks =
        action.payload.newArrTasks;
      state.columns[action.payload.currentColumnIndex].tasks =
        action.payload.currentColumnTasks;
    },
    changeIndexColumns(state, action) {
      // dropColumnIndex, currentColumnInde
      state.columns = action.payload;
      console.log(state.columns);
    },
  },
});

export const {
  createTabel,
  changeNameTabel,
  reorder,
  changeSatus,
  addTask,
  changeIndexTask,
  changeIndexTaskColumns,
  changeIndexColumns,
} = kanbanSlice.actions;
export default kanbanSlice.reducer;

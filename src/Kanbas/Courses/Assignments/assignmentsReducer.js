import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Database";


const initialState = {
  // assignments: db.assignments,
  assignments: [],
  assignment: { title: "New assignment", course: "65510e70870c092d5441bc94", description: "New Description of the new assignment", availableFromDate: "2023-01-10", availableUntilDate: "2023-02-18", dueDate: "2023-05-15" },
  // newAssignment: { name: "New assignment", course: "RS101", description: "New Description of the new assignment", availableFromDate: "2023-01-10", availableUntilDate: "2023-02-18", dueDate: "2023-05-15" },
  newAssignment: { title: "New assignment", course: "65510e70870c092d5441bc94", description: "New Description of the new assignment", availableFromDate: "2023-01-10", availableUntilDate: "2023-02-18", dueDate: "2023-05-15" },
  isAdd:true
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addNewAssignment: (state, action) => {
      state.assignments = [
        // { ...action.payload, _id: new Date().getTime().toString() },
        //   ...state.assignments,

        // ...state.assignments,
        // { ...action.payload, _id: new Date().getTime().toString() }

        ...state.assignments,
        { ...action.payload}
          
      ];

      // state.assignments = [
      //   { ...action.payload},
      //     ...state.assignments,
      // ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },

    setNewAssignment: (state, action) => {
      state.newAssignment = action.payload;
      // state.newAssignment.course = action.payload.courseId;
    },


    initiateAssignment: (state, action) => {
      // state.assignment = initialState.assignment;

      state.newAssignment.name = "New assignment";
      state.newAssignment.course = action.payload;
      state.newAssignment.description = "New Description of the new assignment";
      state.newAssignment.availableFromDate = "2023-01-10";
      state.newAssignment.availableUntilDate = "2023-02-18";
      state.newAssignment.dueDate = "2023-05-15";
      state.isAdd = true;
    },
  },
});


export const { addNewAssignment, deleteAssignment,
  updateAssignment, setAssignment, setNewAssignment, initiateAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
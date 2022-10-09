import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

it("renders without crashing", function() {
    render(<ToDoList/>)
})

it("matches snapshot", function() {
    const {asFragment} = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
})

it("should add new task", function() {
    const toDoList = render(<ToDoList/>)
    const task = toDoList.getByLabelText("To Do:")

    expect(toDoList.queryByText("Remove Task")).not.toBeInTheDocument();

    fireEvent.change(task, { target: {value: "Laundry"}});
    const button = toDoList.getByText("Submit");
    fireEvent.click(button);

    expect(toDoList.queryByText("Remove Task")).toBeInTheDocument();
});

it("should remove a task", function() {
    const toDoList = render(<ToDoList/>)
    const task = toDoList.getByLabelText("To Do:")

    expect(toDoList.queryByText("Remove Task")).not.toBeInTheDocument();

    fireEvent.change(task, { target: {value: "Laundry"}});
    const button = toDoList.getByText("Submit");
    fireEvent.click(button);

    expect(toDoList.queryByText("Remove Task")).toBeInTheDocument();

    const removeBtn = toDoList.getByText("Remove Task");
    fireEvent.click(removeBtn);
    expect(toDoList.queryByText("Remove Task")).not.toBeInTheDocument(); 
});
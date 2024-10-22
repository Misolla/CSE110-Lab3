import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";

describe("ToDoList Component", () => {
  test("renders all grocery items", () => {
    render(<ToDoList />);

    const groceryItems = ["Apples", "Bananas"];
    groceryItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("checks checking an item updates the count correctly", () => {
    render(<ToDoList />);

    const itemsBoughtCount = screen.getByText(/Items bought: 0/i);
    expect(itemsBoughtCount).toBeInTheDocument();

    const checkbox = screen.getByTestId("Apples");
    fireEvent.click(checkbox);

    expect(screen.getByText(/Items bought: 1/i)).toBeInTheDocument();
  });

  test("checks unchecking an item updates the count correctly", () => {
    render(<ToDoList />);

    const itemsBoughtCount = screen.getByText(/Items bought: 0/i);
    expect(itemsBoughtCount).toBeInTheDocument();

    const checkbox = screen.getByTestId("Bananas");
    fireEvent.click(checkbox);
    expect(screen.getByText(/Items bought: 1/i)).toBeInTheDocument();

    fireEvent.click(checkbox); // Uncheck it
    expect(screen.getByText(/Items bought: 0/i)).toBeInTheDocument();
  });
});

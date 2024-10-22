import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
    test("renders create note form", () => {
      render(<StickyNotes />);
   
      const createNoteButton = screen.getByText("Create Note");
      expect(createNoteButton).toBeInTheDocument();
    });
   
    test("creates a new note", () => {
      render(<StickyNotes />);
   
   // Please make sure your sticky note has a title and content input field with the following placeholders.
      const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
      const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
      const createNoteButton = screen.getByText("Create Note");
   
      fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
      fireEvent.change(createNoteContentTextarea, {
        target: { value: "Note content" },
      });
      fireEvent.click(createNoteButton);
   
      const newNoteTitle = screen.getByText("New Note");
      const newNoteContent = screen.getByText("Note content");
   
      expect(newNoteTitle).toBeInTheDocument();
      expect(newNoteContent).toBeInTheDocument();
    });

    test("displays all created notes", () => {
        render(<StickyNotes />);
     
     // Please make sure your sticky note has a title and content input field with the following placeholders.
        const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
        const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
        const createNoteButton = screen.getByText("Create Note");
     
        fireEvent.change(createNoteTitleInput, { target: { value: "First Note" } });
        fireEvent.change(createNoteContentTextarea, {
          target: { value: "First content" },
        });
        fireEvent.click(createNoteButton);

        fireEvent.change(createNoteTitleInput, { target: { value: "Second Note" } });
        fireEvent.change(createNoteContentTextarea, {
          target: { value: "Second content" },
        });
        fireEvent.click(createNoteButton);
     
        const firstTitle = screen.getByText("First Note");
        const firstContent = screen.getByText("First content");
        const secondTitle = screen.getByText("Second Note");
        const secondContent = screen.getByText("Second content");

        expect(firstTitle).toBeInTheDocument();
        expect(firstContent).toBeInTheDocument();
        expect(secondTitle).toBeInTheDocument();
        expect(secondContent).toBeInTheDocument();
      });

    test("updates a note's title and content", () => {
        render(<StickyNotes />);
     
     // Please make sure your sticky note has a title and content input field with the following placeholders.
        const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
        const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
        const createNoteButton = screen.getByText("Create Note");

        fireEvent.change(createNoteTitleInput, { target: { value: "Editable Note" } });
        fireEvent.change(createNoteContentTextarea, {
          target: { value: "Editable content" },
        });
        fireEvent.click(createNoteButton);

        // Since we have 6 dummy notes, so our id will start with 7
        const noteTitle = screen.getByTestId("note-7").querySelector("h2");
        const noteContent = screen.getByTestId("note-7").querySelector("p");

        if (noteTitle) {
            fireEvent.blur(noteTitle, { target: { innerHTML: "Updated Note Title" } });
        }
        
        if (noteContent) {
            fireEvent.blur(noteContent, { target: { innerHTML: "Updated Note Content" } });
        }

        const updatedNoteTitle = screen.getByText("Updated Note Title");
        const updatedNoteContent = screen.getByText("Updated Note Content");
        
        expect(updatedNoteTitle).toBeInTheDocument();
        expect(updatedNoteContent).toBeInTheDocument();
    });

    test("deletes a note", () => {
        render(<StickyNotes />);
     
        const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
        const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
        const createNoteButton = screen.getByText("Create Note");
    
        fireEvent.change(createNoteTitleInput, { target: { value: "Note to Delete" } });
        fireEvent.change(createNoteContentTextarea, { target: { value: "Content to Delete" } });
        fireEvent.click(createNoteButton);
    
        // Now delete the note
        const deleteButton = screen.getByTestId("delete-button-7");
        if (deleteButton) {
            fireEvent.click(deleteButton);
        }
        
        expect(screen.queryByText("Note to Delete")).not.toBeInTheDocument();
        expect(screen.queryByText("Content to Delete")).not.toBeInTheDocument();
    });

});
   
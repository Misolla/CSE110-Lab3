# CSE110-Lab3
1. Sticky Notes Component Tests
Test Case: Renders Create Note Form
Description: Verifies that the create note form is displayed when the component loads.
Purpose: Ensures that users can interact with the form to create new sticky notes.

Test Case: Creates a New Note
Description: Verifies that a new note is successfully added to the list when a user submits the form.
Purpose: Ensures the "Create Note" functionality works and the new note is displayed on the page.

Test Case: Displays All Notes
Description: Checks that all created sticky notes are displayed.
Purpose: Confirms that the page displays all notes that exist in the state.

Test Case: Updates a Note
Description: Verifies that when a note is edited, the updated content or title is saved and displayed correctly.
Purpose: Ensures that the update feature works as expected and changes persist after editing.

Test Case: Deletes a Note
Description: Confirms that a note is successfully removed from the list when the delete button is pressed.
Purpose: Ensures that users can delete notes, and the notes list updates immediately.

2. To-Do List Component Tests
Test Case: Displays Items in To-Do List
Description: Verifies that all items in the to-do list are rendered correctly based on the URL parameter.
Purpose: Ensures that the correct to-do items appear when navigating to different routes (/todolist/ABC, /todolist/DEF).

Test Case: Checks checking an item updates the count correctly
Description: Checks that the number of bought (checked) items is updated correctly when items are marked as purchased.
Purpose: Ensures that the correct count of checked items is displayed.

Test Case: Checks unchecking an item updates the count correctly
Description: Checks that the number of bought (checked) items is updated correctly when items are marked as unpurchased.
Purpose: Ensures that the correct count of checked items is displayed.

run npm test
Test Suites: 3 passed, 3 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        2.105 s
Ran all test suites.

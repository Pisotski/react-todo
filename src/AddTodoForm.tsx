const AddTodoForm = () => (
    <div id="addTodoForm-wrapper">
        <form id="addTodoForm">
            <label htmlFor="todoTitle">
                Title
            </label>
            <input id="todoTitle"></input>
        </form>
{/* @Ethan [HTML SEMANTIC/QUESTION/DISCUSSION] 
input type="submit"
button type="submit"
parent form, div

type="submit" is the default with button
Book says "Next, create a submit <button> element with text "Add" in the assignment"
*/}
        <button type="submit" form="addTodoForm" value="Add">Add</button>
    </div>

);

export default AddTodoForm;

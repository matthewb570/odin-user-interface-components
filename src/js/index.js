import "../css/styles.css";
import Dropdown from "./dropdown";

const dropdown = new Dropdown('Option 1', 'Option 2', 'Option 3');
document.body.appendChild(dropdown.createDropdown());
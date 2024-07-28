import "../css/styles.css";
import Dropdown from "./dropdown";
import DropdownMenuOption from "./dropdownMenuOption";

const menuOption1 = new DropdownMenuOption("Option 1", () =>
  alert("clicked 1")
);
const menuOption2 = new DropdownMenuOption("Option 2", () =>
  alert("clicked 2")
);
const menuOption3 = new DropdownMenuOption("Option 3", () =>
  alert("clicked 3")
);
const dropdown = new Dropdown("left", menuOption1, menuOption2, menuOption3);

document.body.appendChild(dropdown.createDropdown());

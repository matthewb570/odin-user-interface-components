class Dropdown {
  alignment;
    menuOptions;

  constructor(alignment = "left", ...menuOptions) {
    this.alignment = alignment;
    this.menuOptions = menuOptions;
  }

  createDropdown() {
    const divDropdownMenu = this.createDropdownMenu();
    const divDropdownToggle = this.createDropdownToggle(() =>
      divDropdownMenu.classList.toggle("hidden")
    );

    const divDropdown = document.createElement("div");
    divDropdown.classList.add("dropdown");
    divDropdown.appendChild(divDropdownToggle);
    divDropdown.appendChild(divDropdownMenu);

    return divDropdown;
  }

  createDropdownToggle(toggleFunction) {
    const btnDropdownToggle = document.createElement("button");
    btnDropdownToggle.type = "button";
    btnDropdownToggle.classList.add("dropdown-toggle");
    btnDropdownToggle.onclick = () => {
      toggleFunction();
      btnDropdownToggle.classList.toggle("on");
    };

    return btnDropdownToggle;
  }

  createDropdownMenu() {
    const divDropDownMenuItems = document.createElement("div");
    divDropDownMenuItems.classList.add("dropdown-menu-items");
    this.menuOptions.forEach((menuOption) =>
      divDropDownMenuItems.appendChild(this.createDropdownMenuItem(menuOption))
    );

    const divDropdownMenu = document.createElement("div");
    divDropdownMenu.classList.add("dropdown-menu");
    divDropdownMenu.classList.add("hidden");
    if (this.alignment === 'right') {
        divDropdownMenu.classList.add('align-right');
    } else {
        divDropdownMenu.classList.add('align-left');
    }
    divDropdownMenu.appendChild(divDropDownMenuItems);

    return divDropdownMenu;
  }

  createDropdownMenuItem(text) {
    const divDropdownMenuItem = document.createElement("div");
    divDropdownMenuItem.classList.add("dropdown-menu-item");
    divDropdownMenuItem.textContent = text;

    return divDropdownMenuItem;
  }
}

export default Dropdown;

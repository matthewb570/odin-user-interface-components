class Dropdown {
  menuOptions;

  constructor(...menuOptions) {
    this.menuOptions = menuOptions;
  }

  createDropdown() {
    const divDropdownMenu = this.createDropdownMenu();
    const divDropdownToggle = this.createDropdownToggle(
      () => (divDropdownMenu.hidden = !divDropdownMenu.hidden)
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
    btnDropdownToggle.onclick = toggleFunction;
    btnDropdownToggle.textContent = "Menu";

    return btnDropdownToggle;
  }

  createDropdownMenu() {
    const divDropdownMenu = document.createElement("div");
    divDropdownMenu.classList.add("dropdown-menu");
    divDropdownMenu.hidden = true;
    this.menuOptions.forEach((menuOption) =>
      divDropdownMenu.appendChild(this.createDropdownMenuItem(menuOption))
    );

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

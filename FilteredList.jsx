import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: ""
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    //TODO Set the state of the filter type in this.state
  };

  /*
   * You will pass this function into a builtin filter() function. filter() calls this function on every element in the
   * list. If filterItem is true for a given element, filter() will add that element to its return list. This function
   * should account for both the selected filter type and the current search state.
   *
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {
    // TODO: Add condition to check if selected filter type is "all" and return appropriate boolean value

    // TODO: Add condition to check if selected filter type is equal to item's type and return appropriate boolean value

    // TODO: If all other conditions fail, return appropriate boolean value

    // Use this return statement to search on top of your filtering
    // Hint: search() returns -1 if no match is found
    return item.name.toLowerCase().search(this.state.search) !== -1;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        {/* TODO: Add more menu items with onSelect handlers*/}
        <DropdownButton id="typeDropdown" title={"Type"}>
          <MenuItem eventKey="all" onSelect={this.onSelectFilterType}>
            All
          </MenuItem>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.matchesFilterType)} />
      </div>
    );
  }
}

export default FilteredList;

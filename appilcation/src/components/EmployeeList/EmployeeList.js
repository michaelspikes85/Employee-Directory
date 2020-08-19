import React, { Component } from "react";
import Employee from "../Employee/Employee";
import { Sort } from "../Sort/Sort";
import { Search } from "../Search/Search";
import { getEmployeesWithParams } from "../../services/employee";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchTerm: "",
    };
  }

  async componentDidMount() {
    const employees = await getEmployeesWithParams();
    this.setState({ employees: employees.results });
  }

  onFilterChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  filteredEmployees = () => {
    return this.state.employees.filter(employee => {
      const name = `${employee.name.first} ${employee.name.last}`.toLowerCase();
      const { searchTerm, employees } = this.state;
      return searchTerm.length ? name.includes(searchTerm.toLowerCase()) : employees;
    })
  }

  sortByName = (direction) => {
    this.setState({
      employees: this.state.employees.sort((emp1, emp2) =>
        this.sort(
          emp1.name.last.toLowerCase(),
          emp2.name.last.toLowerCase(),
          direction
        )
      ),
    });
  };

  sortByEmail = (direction) => {
    this.setState({
      employees: this.state.employees.sort((emp1, emp2) =>
        this.sort(emp1.email.toLowerCase(), emp2.email.toLowerCase(), direction)
      ),
    });
  };

  sort = (a, b, direction) => {
    if (a < b) {
      return direction === "asc" ? -1 : 1;
    }
    if (a > b) {
      return direction === "asc" ? 1 : -1;
    }
    return 0;
  };

  render() {
    return (
      <>
        <Search
          onFilterChange={this.onFilterChange}
          searchTerm={this.state.searchTerm}
        />
        <table className="table">
          <thead>
            <th>Image</th>
            <th>
              Name <Sort callback={this.sortByName} />
            </th>
            <th>Phone</th>
            <th>
              Email <Sort callback={this.sortByEmail} />
            </th>
            <th>DOB</th>
          </thead>
          {this.filteredEmployees().map((employee) => (
            <Employee key={employee.id.value} employee={employee} />
          ))}
        </table>
      </>
    );
  }
}

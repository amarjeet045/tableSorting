/*eslint-env jquery*/
import React, { Component } from "react";
import DetailPage from "./DetailPage";
import { Link } from "react-router-dom";
import {Navbar,Container} from 'react-bootstrap';
export default class Paginations extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentPage: 1,
      todosPerPage: 5,
      upperPageBound: 10,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 10,
      search:''
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    this.onSort = this.onSort.bind(this);
    this.numberSort = this.numberSort.bind(this);
  }

  componentDidMount() {
    fetch("https://demo9197058.mockable.io/users")
      .then(res => res.json())
      .then(json => {
      
        this.setState({
          data: json
        });
      });
  }
  componentDidUpdate() {
    $("ul li.active").removeClass("active");
    $("ul li#" + this.state.currentPage).addClass("active");
  }
  UpdateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
  }
  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid
    });
    $("ul li.active").removeClass("active");
    $("ul li#" + listid).addClass("active");
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(this.state.data.length / this.state.todosPerPage);
    this.setState({ isNextBtnActive: "disabled" });
    this.setState({ isPrevBtnActive: "disabled" });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: "" });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
      this.setState({ isPrevBtnActive: "" });
    }
  }
  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }

  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  onSort(event, sortKey) {
    const data = this.state.data;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ data });
  }
  numberSort(event, sortkey1) {
    const data = this.state.data;
    data.sort((a, b) => a[sortkey1] - b[sortkey1]);
    this.setState({ data });
  }
  render() {
    var newData = this.state.data;
    const {
      currentPage,
      todosPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive
    } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let filtered=newData.filter(
      (datas) =>{
        return datas.first_name.indexOf(this.state.search)!==-1;
      }
    );
    const currentTodos = filtered.slice(indexOfFirstTodo, indexOfLastTodo);
    
    const renderTodos = (
      <table>
        <thead>
          <tr>
            <th onClick={e => this.onSort(e, "first_name")}>First Name</th>
            <th onClick={e => this.onSort(e, "last_name")}>Last value</th>
            <th onClick={e => this.onSort(e, "company_name")}>Company Name</th>
            <th onClick={e => this.onSort(e, "state")}>State</th>
            <th onClick={e => this.onSort(e, "city")}>City</th>
            <th onClick={e => this.numberSort(e, "zip")}>ZIP</th>
            <th onClick={e => this.onSort(e, "email")}>Email</th>
            <th onClick={e => this.onSort(e, "web")}>Web</th>
            <th onClick={e => this.numberSort(e, "age")}>Age</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {currentTodos.map((account, index) => {
            return (
              <tr key={index} data-item={account}>
                <td data-title="First NAme">{account.first_name}</td>
                <td data-title="Last name">{account.last_name}</td>
                <td data-title="company NAme">{account.company_name}</td>
                <td data-title="state">{account.state}</td>
                <td data-title="city">{account.city}</td>
                <td data-title="zip">{account.zip}</td>
                <td data-title="email">{account.email}</td>
                <td data-title="web">{account.web}</td>
                <td data-title="age">{account.age}</td>
                <td>
                  {" "}
                  <Link
                    to={`user/${account.id}`}
                    className="btn btn-dark btn-block"
                  >
                    view Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newData.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className="active" id={number}>
            <a href="#" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <li key={number} id={number}>
            <a href="#" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      }
    });
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="">
          <a href="#" onClick={this.btnIncrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </li>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="">
          <a href="#" onClick={this.btnDecrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </li>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <span id="btnPrev"> Prev </span>
        </li>
      );
    } else {
      renderPrevBtn = (
        <li className={isPrevBtnActive}>
          <a href="#" id="btnPrev" onClick={this.btnPrevClick}>
            {" "}
            Prev{" "}
          </a>
        </li>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <span id="btnNext"> Next </span>
        </li>
      );
    } else {
      renderNextBtn = (
        <li className={isNextBtnActive}>
          <a href="#" id="btnNext" onClick={this.btnNextClick}>
            {" "}
            Next{" "}
          </a>
        </li>
      );
      

    }

    return (
      <>
      <Container>
                <Navbar expand="lg" bg="primary" variant="dark">
                <Navbar.Brand ></Navbar.Brand>
                </Navbar>
      </Container>
        <br ></br>
      <input 
      type="text"
      value={this.state.search}
      onChange={this.UpdateSearch.bind(this )}
      />
      <br/>
      <br />
      
        <table className="table">
          <tbody>
            <tr>{renderTodos}</tr>
          </tbody>
        </table>
        <div className="pagination">
          <ul>
            {renderPrevBtn}
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            {renderNextBtn}
          </ul>
        </div>
      </>
    );
  }
}

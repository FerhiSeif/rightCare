import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
//import "bootstrap/dist/css/bootstrap.min.css";
import ProfileIcon from "../../../assets/images/profile/idpic.jpg";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//import "./styles.css";

class TicketsList extends Component {
  state = {
    columns: [
      {
        dataField: "id",
        text: "TICKET ID"
      },
      {
        dataField: "title",
        text: "TICKET TITLE"
      },
      {
        dataField: "priority",
        text: "TICKET PRIORITY"
      },
      {
        dataField: "created",
        text: "CREATED"
      },
      {
        dataField: "status",
        text: "STATUS"
      },
      {
        dataField: "action",
        text: "ACTION"
      }
    ],
    products: [
      {
        id: "#423411",
        title: "issues 1",
        priority: "High",
        created: ProfileIcon,
        status: "New",
        action: (
          <button className="button" onClick={() => alert("hei")}>
            view
          </button>
        )
      },
      {
        id: "#429411",
        title: "issues 1",
        priority: "High",
        created: ProfileIcon,
        status: "New",
        action: (
          <button className="button" onClick={() => alert("hei")}>
            view
          </button>
        )
      },
      {
        id: "#424311",
        title: "issues 2",
        priority: "Low",
        created: ProfileIcon,
        status: "Resolved",
        action: (
          <button className="button" onClick={() => alert("hei")}>
            view
          </button>
        )
      },
      {
        id: "#1254311",
        title: "issues 3",
        priority: "Medium",
        created: ProfileIcon,
        status: "Progress",
        action: (
          <button className="button" onClick={() => alert("hei")}>
            view
          </button>
        )
      },
      {
        id: "#1254311",
        title: "issues 3",
        priority: "Medium",
        created: ProfileIcon,
        status: "Progress",
        action: (
          <button className="button" onClick={() => alert("hei")}>
            view
          </button>
        )
      },
      {
        id: "#444411",
        title: "issues 1",
        priority: "High",
        created: ProfileIcon,
        status: "New",
        action: (
          <button className="button" onClick={() => alert("hei")}>
            view
          </button>
        )
      },
      {
        id: "#124511",
        title: "issues 4",
        priority: "Medium",
        created: ProfileIcon,
        status: "New",
        action: (
          <button className="button" onClick={() => alert("hei")}>
            view
          </button>
        )
      }
    ]
  };
  render() {
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true
    };
    const options = {
      pageStartIndex: 1,
      sizePerPage: 6,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
      nextPageText: "Next",
      prePageText: "Prev"
    };

    const productView = this.state.products.map((elm, i) => {
      return {
        id: elm.id,
        title: <p style={{ textDecoration: "underline" }}>{elm.title}</p>,
        priority: (
          <p
            className="list-ticket-textpriority"
            style={{
              background: `${
                elm.priority == "High"
                  ? "#eb592321"
                  : elm.priority == "Low"
                  ? "#6572884a"
                  : "#ff9b214d"
              }`,
              color: `${
                elm.priority == "High"
                  ? "#EB5923"
                  : elm.priority == "Low"
                  ? "#657288"
                  : "#FF9B21"
              }`
            }}
          >
            {elm.priority}
          </p>
        ),
        created: (
          <img
            src={elm.created}
            alt="profile picture"
            className="profilepicture-assignee"
          />
        ),
        status: (
          <>
            <button
              className="list-ticket-btn"
              style={{
                background: `${
                  elm.status == "Progress"
                    ? "#FF9B21"
                    : elm.status == "New"
                    ? "#0089E1"
                    : "#00BD39"
                }`
              }}
            ></button>
            {elm.status}
          </>
        ),
        action: (
          <button className="button" onClick={() => alert("hei")}>
            view
          </button>
        )
      };
    });
    return (
      <div style={{ padding: "20px" }}>
        <BootstrapTable
          keyField="id"
          data={productView}
          columns={this.state.columns}
          selectRow={selectRow}
          pagination={paginationFactory(options)}
        />
      </div>
    );
  }
}

export default TicketsList;

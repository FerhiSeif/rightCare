import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
//import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//import "./styles.css";

const products = [
  {
    id: "#423311",
    title: "issues 1",
    priority: "High",
    created: "me",
    status: "Progress",
    action: (
      <button className="button" onClick={() => alert("hei")}>
        view
      </button>
    )
  },
  {
    id: "#123311",
    title: "issues 2",
    priority: "Medium",
    created: "me",
    status: "New",
    action: (
      <button className="button" onClick={() => alert("hei")}>
        view
      </button>
    )
  },
  {
    id: "#426511",
    title: "issues 3",
    priority: "Low",
    created: "me",
    status: "Resolved",
    action: (
      <button className="button" onClick={() => alert("hei")}>
        view
      </button>
    )
  },
  {
    id: "#423311",
    title: "issues 1",
    priority: "High",
    created: "me",
    status: "Progress",
    action: (
      <button className="button" onClick={() => alert("hei")}>
        view
      </button>
    )
  },
  {
    id: "#123311",
    title: "issues 2",
    priority: "Medium",
    created: "me",
    status: "New",
    action: (
      <button className="button" onClick={() => alert("hei")}>
        view
      </button>
    )
  },
  {
    id: "#426511",
    title: "issues 3",
    priority: "Low",
    created: "me",
    status: "Resolved",
    action: (
      <button className="button" onClick={() => alert("hei")}>
        view
      </button>
    )
  },
  ,
  {
    id: "#426511",
    title: "issues 3",
    priority: "Low",
    created: "me",
    status: "Resolved",
    action: (
      <button className="button" onClick={() => alert("hei")}>
        view
      </button>
    )
  }
  ,
  {
    id: "#426411",
    title: "issues 3",
    priority: "Low",
    created: "me",
    status: "Resolved",
    action: (
      <button className="button" onClick={() => alert("hei")}>
        view
      </button>
    )
  }
];

const TicketsList = props => {
  const columns = [
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
  ];
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
  return (
    <div style={{ padding: "20px"}}>

      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        selectRow={selectRow}
        pagination={paginationFactory(options)}
      />
    </div>
  );
};

export default TicketsList;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ProfileIcon from '../../../assets/images/profile/idpic.jpg';
import trashIcon from '../../../assets/images/tickets/table-list/trash.svg';

class TicketsList extends Component {
  constructor(props) {
    super(props);

    const { t } = this.props;

    this.state = {
      columns: [
        {
          dataField: 'id',
          text: t('tickets.table_list.ticket_id'),
        },
        {
          dataField: 'title',
          text: t('tickets.table_list.ticket_title'),
        },
        {
          dataField: 'priority',
          text: t('tickets.table_list.ticket_priority'),
        },
        {
          dataField: 'created',
          text: t('tickets.table_list.created'),
        },
        {
          dataField: 'status',
          text: t('tickets.table_list.status'),
        },
        {
          dataField: 'action',
          text: t('tickets.table_list.action'),
        },
      ],
      products: [
        {
          id: '#423411',
          title: 'issues 1',
          priority: 'High',
          created: ProfileIcon,
          status: 'New',
          action: '',
        },
        {
          id: '#429411',
          title: 'issues 1',
          priority: 'High',
          created: ProfileIcon,
          status: 'New',
          action: '',
        },
        {
          id: '#424311',
          title: 'issues 2',
          priority: 'Low',
          created: ProfileIcon,
          status: 'Resolved',
          action: '',

        },
        {
          id: '#1254311',
          title: 'issues 3',
          priority: 'Medium',
          created: ProfileIcon,
          status: 'Progress',
          action: '',
        },
        {
          id: '#1254319',
          title: 'issues 3',
          priority: 'Medium',
          created: ProfileIcon,
          status: 'Progress',
          action: '',
        },
        {
          id: '#444411',
          title: 'issues 1',
          priority: 'High',
          created: ProfileIcon,
          status: 'New',
          action: (
            <button className="button" onClick={() => alert('hei')}>
              {t('tickets.table_list.btn_view')}
            </button>
          ),
        },
        {
          id: '#124511',
          title: 'issues 4',
          priority: 'Medium',
          created: ProfileIcon,
          status: 'New',
          action: '',
        },
      ],
    };
  }

  deleteTicket = (elmt, index) => {
    console.log(elmt);
    console.log(index);
  }

  render() {
    const { t, handleMessageTicket } = this.props;
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
    };
    const options = {
      pageStartIndex: 1,
      sizePerPage: 6,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
      nextPageText: t('tickets.table_list.nextPage'),
      prePageText: t('tickets.table_list.prePage'),
    };

    const productView = this.state.products.map((elmt, index) => ({
      id: elmt.id,
      title: <p style={{ textDecoration: 'underline' }}>{elmt.title}</p>,
      priority: (
        <p
          className="list-ticket-textpriority"
          style={{
            background: `${
              elmt.priority === 'High'
                ? '#eb592321'
                : elmt.priority === 'Low'
                  ? '#6572884a'
                  : '#ff9b214d'
            }`,
            color: `${
              elmt.priority === 'High'
                ? '#EB5923'
                : elmt.priority === 'Low'
                  ? '#657288'
                  : '#FF9B21'
            }`,
          }}
        >
          {elmt.priority}
        </p>
      ),
      created: (
        <img
          src={elmt.created}
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
                elmt.status === 'Progress'
                  ? '#FF9B21'
                  : elmt.status === 'New'
                    ? '#0089E1'
                    : '#00BD39'
              }`,
            }}
          />
          {elmt.status}
        </>
      ),
      action: (
        // le bouton voir qui s'affiche dans le tableau
        <>
          <button className="button" onClick={() => handleMessageTicket()}>
            {t('tickets.table_list.btn_view')}
          </button>

          <button className="button button-trash-table" onClick={() => this.deleteTicket(elmt, index)}>
            {/* <object type="image/svg+xml" data={trashIcon} className="img-trash" onClick={() => this.deleteTicket(elmt, index)}>
            </object> */}
            <img src={trashIcon} alt="img trash" className="img-trash" width="15" />
          </button>
        </>
      ),
    }));
    return (
      <div style={{ padding: '0' }}>
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

TicketsList.propTypes = {
  t: PropTypes.func.isRequired,
  handleMessageTicket: PropTypes.func.isRequired,
};

export default TicketsList;

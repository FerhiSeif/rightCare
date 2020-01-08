import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Use Socket io - import
import io from 'socket.io-client';

import { Formik, Form, Field } from 'formik';

import FileUploadProgress from 'react-fileupload-progress';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Select from 'react-select';

import FakeAgents from '../../../faker/agents';
import upload from '../../../assets/images/tickets/upload.svg';
import SearchIcon from '../../../assets/images/profile/search.svg';
import ProfileIcon from '../../../assets/images/profile/idpic.jpg';

/* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
import { TicketSettingsHttpService, CreateTicketHttpService } from '../../../services/HttpService';
import { SOCKET, SIO_TICKET_SETTINGS, SIO_CREATE_TICKET } from '../../../constants/Constants';

const socket = io(SOCKET.BASE_URL);
/* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

class CreateTicket extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    assegneeModalOpen: false,
    initAgents: FakeAgents,

    ticketSettingsInput: [],
    // eslint-disable-next-line react/no-unused-state
    prioritySetting: [
      // { value: 'High', label: 'High' },
      // { value: 'Medium', label: 'Medium' },
      // { value: 'Low', label: 'Low' },
    ],

    // eslint-disable-next-line react/no-unused-state
    dataInputTicket: [],
    objetTicket: '',
    priorityTicket: {},
    messageTicket: EditorState.createEmpty(),
  };

  componentDidMount() {
    this.initSocketTicketSettings();
  }

  /* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
  onSocketGetTicketSettings = (response) => {
    if (response && (response.status === 200 || response.status === 202)) {
      this.setState({ ticketSettingsInput: response.data[0].customer_information.items });

      // refact datas priority
      const refactPriority = [];
      response.data[0].priority.items.map((item) => {
        refactPriority.push({ value: item.name, label: item.label });
      });
      this.setState({ prioritySetting: refactPriority });

      console.log('onSocketGetTicketSettings : ', response.data[0]);

      console.log('ticketSettingsInput : ', this.state.ticketSettingsInput);
      console.log('prioritySetting : ', this.state.prioritySetting);
    }
  };

  initSocketTicketSettings = () => {
    console.log('initSocketTicketSettings : **** ');

    socket.on(SIO_TICKET_SETTINGS, (response) => {
      console.log('initSocketTicketSettings : ', response);
      this.onSocketGetTicketSettings(response);
    });

    TicketSettingsHttpService.getDatasTicketSettings().then((response) => {
      console.log('getDatasTicketSettings : ', response);

      if ((response.status === 200 || response.status === 202)) {
        console.log('test success : ', response);
      } else {
        console.log('test error : ', response);
      }
    });
  };
  /* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

  // eslint-disable-next-line react/sort-comp
  changeAvatar = (event) => {
    const image = event.target.files[0];
    // this.uploadPhoto(image);
    const fd = new FormData();

    fd.append('image', image);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    // return post(URL, fd, config).then(res => {
    //   let path = JSON.parse(res.data).file_path;
    //   this.setState({
    //     profile: path
    //   });
    // });
  };


  // liste agents
  listAgents = (
    <ul className=" menu-list menu-list-ticket">
      {this.state.initAgents
        && this.state.initAgents.map((item, i) => (
          <li key={i}>
            <img src={item.profile_image} alt="portrait" />
            <span className="user-name">{item.full_name}</span>
            {
              // fetchDatas(item.id) ? (<span className="remove-user" onClick={()=>console.log('hii')/*(e) => handleRemoveAgent(e, item.id)*/}>-</span>)
              // :
              <span
                className="add-user"
                onClick={
                  () => console.log('hii') /* (e) => handleAddAgent(e, item.id) */
                }
              >
                +
              </span>
            }
          </li>
        ))}
    </ul>
  );

  handleValidateInput = (value) => {
    console.log('value : ', value);

    let error;
    if (!value) {
      error = 'This field is required';
    } else {
      switch (value) {
        case 'email':
          console.log('email : ', value);

          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
          }
          console.log('error : ', error);

          break;
        case 'text':
          console.log('text : ', value);

          if (!/^\s*[a-zA-Z,\s]+\s*$/i.test(value)) {
            error = 'Invalid text field';
          }
          error = 'Invalid text field';
          console.log('error : ', error);

          break;
        case 'number':
          console.log('number : ', value);

          if (!/^[0-9]{1,10}$/i.test(value)) {
            error = 'Invalid number field';
          }
          break;
        case 'date':
          console.log('date : ', value);

          if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/i.test(value)) {
            error = 'Invalid date field';
          }
          break;
        default:
          error = 'Field not found please select';
      }
    }

    console.log('error *** : ', error);

    return error;
  };

  handleInputChange = (event, item, i) => {
    console.log('event : ', event.currentTarget);
    console.log('i : ', i);

    const tabConst = this.state.dataInputTicket;

    const { value } = event.currentTarget;
    tabConst[i] = { type: item.type, name: item.name, value };

    this.setState({ dataInputTicket: tabConst });

    console.log('this.state.dataInputTicket : ', this.state.dataInputTicket);
  };

  handleObjetChange = (event) => {
    console.log('event : ', event.currentTarget);

    const { value } = event.currentTarget;

    this.setState({ objetTicket: value });

    console.log('this.state.objetTicket : ', this.state.objetTicket);
  };

  handlePriorityChange = (value) => {
    this.setState({ priorityTicket: value });

    console.log('this.state.priorityTicket : ', this.state.priorityTicket);
  };

  onEditorStateChange = (messageTicket) => {
    const valueEditor = draftToHtml(convertToRaw(messageTicket.getCurrentContent()));
    this.setState({ messageTicket: valueEditor });
  };

  handleSubmitCreateTicket() {
    console.log('vqsjvqshvjhsh');
    
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleMessageTicket();

    /*
    console.log('this.state.dataInputTicket : ', this.state.dataInputTicket);
    console.log('this.state.objetTicket : ', this.state.objetTicket);
    console.log('this.state.priorityTicket : ', this.state.priorityTicket);
    console.log('this.state.messageTicket : ', this.state.messageTicket);

    this.buildDataCreateTicket(
      this.state.dataInputTicket,
      this.state.objetTicket,
      this.state.priorityTicket,
      this.state.messageTicket,
    );

    this.initSocketCreateTcicket();
    */
  }


  /** Start - send customerFiled */
  buildDataCreateTicket = (
    dataInputTicket,
    objetTicket,
    priorityTicket,
    messageTicket,
  ) => {
    const createTicket = {
      sio_channel: SIO_CREATE_TICKET,
      ticket_information: {
        subject: objetTicket,
        message: messageTicket,
        files: [
          null,
        ],
        priority: {
          name: priorityTicket.value,
          type: priorityTicket.label,
        },
        category: {
          label: '----',
        },
        customer_information: dataInputTicket,
        status: {
          name: '----',
          type: '----',
        },
        assigned_agent: {},
        created_by: {},
        closed: true,
      },
    };

    if (localStorage && createTicket) {
      localStorage.setItem('sv_tmp_create_ticket', JSON.stringify(createTicket));
    }
  };

  handleCreateTicketSubmit = () => {
    const createTicket = JSON.parse(localStorage.getItem('sv_tmp_create_ticket'));

    CreateTicketHttpService.createTicket(createTicket)
      .then((response) => {
        if (response && response.data && response.data.status === 202) {
          this.setState({ dataInputTicket: [] });
          this.setState({ objetTicket: '' });
          this.setState({ messageTicket: EditorState.createEmpty() });

          // eslint-disable-next-line react/destructuring-assignment
          this.props.handleMessageTicket(createTicket);

          localStorage.removeItem('sv_tmp_create_ticket');

          // toast(
          //   <Notification
          //     content={this.props.t("create_survey.new.created_successfully")}
          //     icon="success"
          //     reply={false}
          //   />, {
          //     type: toast.TYPE.SUCCESS,
          // });
        } else {
          // toast(
          //   <Notification
          //     content={this.props.t("create_survey.new.created_failed")}
          //     icon="danger"
          //     reply={false}
          //   />, {
          //     type: toast.TYPE.ERROR,
          // });
        }
      })
      .catch((error) => {
        console.log('**** print error ****', error);
      });
  };

  onSocketCreateTicket = (response) => {
    if (response && response.status === 200) {
      console.log('onSocketCreateCustomerFiled : ', response);
    }
  };

  initSocketCreateTcicket = () => {
    socket.on(SIO_CREATE_TICKET, (response) => this.onSocketCreateTicket(response));
    this.handleCreateTicketSubmit();
  };
  /** End - send customerFiled */


  render() {
    const {
      i18n, t, kind, handleMessageTicket,
    } = this.props;
    const { assegneeModalOpen } = this.state;
    const modalStyle = {
      title: {
        paddingBottom: kind === 'channel' ? 0 : '1.125rem',
      },
    };

    // options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history']

    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#222' : '#222',
        text: 'center',
      }),
    };

    return (
      <>
        <div className="header-indicator">
          <h3 className="header-indic-title1">
            { t('tickets.details_ticket.header.ticket_table') }
          </h3>
          {' > '}
          <p className="header-indic-title2">
            { t('tickets.create_ticket.text_create') }
          </p>
        </div>
        <div className="ticketnalytics-header">
          <h2 className="dashboard-title">
            { t('tickets.create_ticket.text_create') }
          </h2>
        </div>
        <div className="columns analytics-columns createTicket-conaitner">
          <div className="section1 ">
            <div className="firstInput-container">
              <div className="header-create-ticket">
                <div className="createTicket-div">
                  <img
                    src={ProfileIcon}
                    className="profilepicture-assignee"
                    alt="agent picture"
                  />
                  <span className="createTicket-div-text">
                    Adisa Kola
                  </span>
                </div>
                <div className="createTicket-div">
                  <span className="createTicket-div-text">
                    AdisaKola@gmail.com
                  </span>
                </div>
              </div>
              <h3 className="customer-text">
                { t('tickets.create_ticket.customer_details') }
              </h3>

              <div className="input-ticket-setting">


                <Formik
                  initialValues={{
                    email: '',
                    text: '',
                    number: '',
                    date: '',
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="display-input">
                      {this.state.ticketSettingsInput.length !== 0
                            && this.state.ticketSettingsInput.map((item, i) => (
                              <div className="div-input">
                                <Field
                                  key={i}
                                  className="input"
                                  name={i}
                                  validate={() => this.handleValidateInput(item.type)}
                                  onChange={(e) => this.handleInputChange(e, item, i)}
                                  value={this.state.dataInputTicket[i] && this.state.dataInputTicket[i].value}
                                  autoComplete="off"
                                  type={item.type}
                                  placeholder={item.name}
                                />

                                <span className="alert-danger">{errors.email && touched.email && errors.email}</span>
                                <span className="alert-danger">{errors.text && touched.text && errors.text}</span>
                                <span className="alert-danger">{errors.number && touched.number && errors.number}</span>
                                <span className="alert-danger">{errors.date && touched.date && errors.date}</span>
                              </div>
                            ))}
                    </Form>
                  )}
                </Formik>


              </div>
            </div>

            <div className="secontInput-container">
              <div>
                <h3 className="textInputcontainer">
                  { t('tickets.create_ticket.ticket_subject') }
                </h3>
                <input
                  className="input //createTicket-large"
                  type="text"
                  placeholder={t('tickets.create_ticket.ticket_subject_input')}
                  onChange={(e) => this.handleObjetChange(e)}
                  value={this.state.objetTicket}
                  autoComplete="off"
                />
              </div>

              <div>
                <h3 className="textInputcontainer">
                  { t('tickets.create_ticket.ticket_priority') }
                </h3>
                <div>
                  <Select
                    options={this.state.prioritySetting}
                    onChange={(e) => this.handlePriorityChange(e)}
                    isSearchable={false}
                    className="ticket-Select"
                    placeholder={t('tickets.create_ticket.ticket_priority_input')}
                    styles={customStyles}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: '#eee',
                        primary25: '#eee',
                      },
                    })}
                  />
                </div>
              </div>

              <h3 className="textInputcontainer">
                {t('tickets.create_ticket.ticket_message')}
              </h3>
              <Editor
                // onChange={(e) => this.handleMessageChange(e)}
                messageTicket={this.state.messageTicket}
                onEditorStateChange={this.onEditorStateChange}

                toolbar={{
                  fontSize: { className: 'fontSizetoolbar' },
                  fontFamily: { className: 'fontFamilytoolbar' },
                  textAlign: { inDropdown: true },
                  link: { className: 'linktoolbar' },
                  emoji: { className: 'emojitoolbar' },
                  image: { className: 'imagetoolbar' },
                  remove: { className: 'removetoolbar' },
                  blockType: { className: 'blockTypetoolbar' },
                  embedded: { className: 'embeddedtoolbar' },
                  inline: {
                    strikethrough: { className: 'strikethroughtoolbar' },
                    monospace: { className: 'monospacetoolbar' },
                  },
                  list: {
                    indent: { className: 'indenttoolbar' },
                    outdent: { className: 'outdenttoolbar' },
                  },
                }}
              />

              <div>
                <button
                  className="Submit-ticketbtn"
                  onClick={() => this.handleSubmitCreateTicket()}
                >
                  {t('tickets.create_ticket.ticket_btn_submit')}
                </button>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="upload-file-container">
              <img
                className="btn-edit"
                src={upload}
                onClick={() => this.fileInput.click()}
              />
              <input
                style={{ display: 'none' }}
                type="file"
                multiple
                ref={(fileInput) => (this.fileInput = fileInput)}
              />
              <p style={{ color: '#C8D3D6' }}>
                {t('tickets.create_ticket.upload_file')}
              </p>
            </div>


            {/* <FileUploadProgress
              key="ex1"
              url="http://localhost:3000/api/upload"
              onProgress={(e, request, progress) => {
                console.log('progress', e, request, progress);
              }}
              onLoad={(e, request) => {
                console.log('load', e, request);
              }}
              onError={(e, request) => {
                console.log('error', e, request);
              }}
              onAbort={(e, request) => {
                console.log('abort', e, request);
              }}
            /> */}


            {/* modal assign agent */}
            <div className="assegnee-Container">
              <div className="assign-text-Contain">
                <p style={{ color: '#657288', marginRight: '20px' }}>
                  {t('tickets.create_ticket.assignee')}
                </p>
                <div className="assign-agent-Container">
                  <span
                    className=" assign-agent-btn"
                    onClick={() => this.setState({
                      assegneeModalOpen: !this.state.assegneeModalOpen,
                    })}
                  >
                    +
                  </span>
                  <div
                    className="assign-text-modal"
                    style={{
                      display: `${assegneeModalOpen ? 'flex' : 'none'}`,
                    }}
                  >
                    <h2 className="title assign-modal-title">
                      {t('tickets.create_ticket.assign_agent_ticket')}
                    </h2>
                    <ul className="menu-list menu-list-ticket">
                      {' '}
                      <li className="assign-self">
                        <img src={ProfileIcon} alt="portrait" />
                        <span className="user-name">
                          {t('tickets.create_ticket.assign_ticket_myself')}
                        </span>
                        {
                          // fetchDatas(item.id) ? (<span className="remove-user" onClick={()=>console.log('hii')/*(e) => handleRemoveAgent(e, item.id)*/}>-</span>)
                          // :
                          <span
                            className="add-user"
                            onClick={
                              () => console.log(
                                'hii',
                              ) /* (e) => handleAddAgent(e, item.id) */
                            }
                          >
                            +
                          </span>
                        }
                      </li>
                    </ul>
                    <div className="search-box assign-search">
                      <input
                        className="input"
                        type="text"
                        placeholder={t('tickets.create_ticket.search_agent_input')}
                      />
                      <img src={SearchIcon} alt="search" />
                    </div>
                    <section
                      className="modal-card-body"
                      style={{ width: '100%' }}
                    >

                      {this.listAgents}

                      {/* { kind === 'agent' ? (<div>{agentCount === 0 &&<span>This agent can not be found in the list.</span>}{content}</div>) : <Services kind={kind} handleChooseService={handleChooseService} checkedServices={checkedServices} /> } */}

                    </section>
                    <footer className="assign-modal-footer">
                      <button
                        className="button is-primary"
                        aria-label="close"
                        style={{ width: '100%' }}
                      >
                        {t('tickets.create_ticket.Assign')}
                      </button>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            {/* ** ** */}


          </div>
        </div>
      </>
    );
  }
}

CreateTicket.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  handleMessageTicket: PropTypes.func.isRequired,
};

export default CreateTicket;

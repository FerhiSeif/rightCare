import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Use Socket io - import
import io from 'socket.io-client';

import { Formik, Form, Field } from 'formik';

// import FileUploadProgress from 'react-fileupload-progress';

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
import { SOCKET, SIO_TICKET_SETTINGS, SIO_CREATE_TICKET, REGEX_EMAIL, REGEX_TEXT, REGEX_NUMBER, REGEX_DATE } from '../../../constants/Constants';

const socket = io(SOCKET.BASE_URL);
/* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

class CreateTicket extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    assegneeModalOpen: false,
    initAgents: FakeAgents,
    ticketSettingsInput: [],
    // eslint-disable-next-line react/no-unused-state
    prioritySetting: [],
    // eslint-disable-next-line react/no-unused-state
    dataInputTicket: [],
    objetTicket: '',
    priorityTicket: {},
    messageTicket: EditorState.createEmpty(),

    errorValidator: [],
    checkError: false,
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
    }
  };

  initSocketTicketSettings = () => {
    socket.on(SIO_TICKET_SETTINGS, (response) => {
      // console.log('initSocketTicketSettings : ', response);
      this.onSocketGetTicketSettings(response);
    });

    TicketSettingsHttpService.getDatasTicketSettings().then((response) => {
      // console.log('getDatasTicketSettings : ', response);

      if ((response.status === 200 || response.status === 202)) {
        // console.log('test success : ', response);
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

  handleInputChange = (event, item, type, i) => {
    const { dataInputTicket } = this.state;
    const { value } = event.currentTarget;
    dataInputTicket[i] = { type: item.type, name: item.name, value };
    this.setState({ dataInputTicket });

    const { t } = this.props;

    const { errorValidator } = this.state; 

    if (!type) {
      errorValidator[i] = { text: t('validation_Field_form.alert') };
      this.setState({ errorValidator });

    } else {
      switch (type) {
        case 'email':
          if (!REGEX_EMAIL.test(value)) {
            errorValidator[i] = { text: t('validation_Field_form.error_field_email') };
            this.setState({ errorValidator });
          } else {
            this.setState({ errorValidator: [] });
          }
          break;
        case 'text':
          if (!REGEX_TEXT.test(value)) {
            errorValidator[i] = { text: t('validation_Field_form.error_field_text') };
            this.setState({ errorValidator });
          } else {
            this.setState({ errorValidator: [] });
          }
          break;
        case 'number':
          if (!REGEX_NUMBER.test(value)) {
            errorValidator[i] = { text: t('validation_Field_form.error_filed_number') };
            this.setState({ errorValidator });
          } else {
            this.setState({ errorValidator: [] });
          }
          break;
        case 'date':
          if (!REGEX_DATE.test(value)) {
            errorValidator[i] = { text: t('validation_Field_form.error_field_date') };
            this.setState({ errorValidator });
          } else {
            this.setState({ errorValidator: [] });
          }
          break;
        default:
          errorValidator[i] = { text: t('validation_Field_form.error_field_not_found') };
          this.setState({ errorValidator });
      }
    }
  };

  handleObjetChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ objetTicket: value });
  };

  handlePriorityChange = (value) => {
    this.setState({ priorityTicket: value });
  };

  onEditorStateChange = (messageTicket) => {
    const valueEditor = draftToHtml(convertToRaw(messageTicket.getCurrentContent()));
    this.setState({ messageTicket: valueEditor });
  };

  handleSubmitCreateTicket() {
    const { dataInputTicket, objetTicket, priorityTicket, messageTicket } = this.state;

    this.buildDataCreateTicket(
      dataInputTicket,
      objetTicket,
      priorityTicket,
      messageTicket,
    );

    this.initSocketCreateTicket();
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
    const dataCreateTicket = JSON.parse(localStorage.getItem('sv_tmp_create_ticket'));

    CreateTicketHttpService.createTicket(dataCreateTicket)
      .then((response) => {

      console.log('CreateTicketHttpService : ', response);

        if (response && response.data && response.data.status === 202) {
          this.setState({ dataInputTicket: [] });
          this.setState({ objetTicket: '' });
          this.setState({ messageTicket: EditorState.createEmpty() });

          localStorage.removeItem('sv_tmp_create_ticket');

          // eslint-disable-next-line react/destructuring-assignment
          this.props.handleMessageTicket('success', dataCreateTicket, '#132311');

          /*
          const data = {
            dataInputTicket: this.state.dataInputTicket,
            objetTicket: this.state.objetTicket,
            priorityTicket: this.state.priorityTicket,
            messageTicket: this.state.messageTicket,
          };
          this.props.handleMessageTicket('success', data, '#132311');
          */
        } else {
          // eslint-disable-next-line react/destructuring-assignment
          this.props.handleMessageTicket('error', '--', '--');
        }
      })
      .catch((error) => {
        console.log('**** print error ****', error);

        // eslint-disable-next-line react/destructuring-assignment
        this.props.handleMessageTicket('error', '--', '--');
      });
  };

  onSocketCreateTicket = (response) => {
    if (response && response.status === 200) {
      console.log('onSocketCreateTicket : ', response);
    }
  };

  initSocketCreateTicket = () => {
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
                              <div className="div-input" key={i}>
                                <Field
                                  className="input"
                                  name={i}
                                  onChange={(e) => this.handleInputChange(e, item, item.type, i)}
                                  value={this.state.dataInputTicket[i] && this.state.dataInputTicket[i].value}
                                  autoComplete="off"
                                  type={item.type}
                                  placeholder={item.name}
                                />

                                <span className="alert-danger">
                                  { this.state.errorValidator[i] && this.state.errorValidator[i].text }
                                  </span>
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

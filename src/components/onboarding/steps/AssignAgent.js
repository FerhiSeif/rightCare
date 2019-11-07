import React from 'react';
import Carder from '../../common/Carder';
import FakeChannels from '../../../faker/channels';

const AssignAgent = ({ t }) => (
  <div className="card-container">
    <Carder t={t} title="Email" content="No agent have been added" buttonText="Add agent" serviceCount={6} agentAssigned />
    { FakeChannels.map((item, i) => {
      return (
        <Carder kind="agent" icon={item.icon} key={i} t={t} title={item.type} content="No agent have been added" buttonText="Add agent" />
      );
    })}
  </div>
);

export default AssignAgent;

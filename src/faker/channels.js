import EmailIcon from '../assets/images/dashboard/channel/email.svg';
import LiveIcon from '../assets/images/dashboard/channel/live.svg';
import PhoneIcon from '../assets/images/dashboard/channel/phone.svg';
import WebIcon from '../assets/images/dashboard/channel/web.svg';

const FakeChannels = [
  {
    type: 'email',
    agentCount: 12,
    icon: EmailIcon,
    status: 'completed',
  },
  {
    type: 'live chat',
    agentCount: 7,
    icon: LiveIcon,
    status: 'completed',
  },
  {
    type: 'phone call',
    agentCount: 8,
    icon: PhoneIcon,
    status: 'pending',
  },
  {
    type: 'web form',
    agentCount: 12,
    icon: WebIcon,
    status: 'completed',
  },
  {
    type: 'facebook',
    agentCount: 12,
    icon: WebIcon,
    status: 'new',
  },
  {
    type: 'twitter',
    agentCount: 2,
    icon: WebIcon,
    status: 'new',
  },
];

export default FakeChannels;

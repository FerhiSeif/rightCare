import EmailIcon from '../assets/images/dashboard/channel/email.svg';
import LiveIcon from '../assets/images/dashboard/channel/live.svg';
import PhoneIcon from '../assets/images/dashboard/channel/phone.svg';
import WebIcon from '../assets/images/dashboard/channel/web.svg';

const FakeChannels = [
  {
    type: 'email',
    agentCount: 12,
    icon: EmailIcon,
  },
  {
    type: 'live chat',
    agentCount: 7,
    icon: LiveIcon,
  },
  {
    type: 'phone call',
    agentCount: 8,
    icon: PhoneIcon,
  },
  {
    type: 'web form',
    agentCount: 12,
    icon: WebIcon,
  },
  {
    type: 'faceebook',
    agentCount: 12,
    icon: WebIcon,
  },
  {
    type: 'twitter',
    agentCount: 2,
    icon: WebIcon,
  },
];

export default FakeChannels;

import EmailIcon from '../assets/images/dashboard/channel/email.svg';
import LiveIcon from '../assets/images/dashboard/channel/live.svg';
import PhoneIcon from '../assets/images/dashboard/channel/phone.svg';
import WebIcon from '../assets/images/dashboard/channel/web.svg';
import FacebookIcon from '../assets/images/dashboard/channel/facebook.svg';
import TwitterIcon from '../assets/images/dashboard/channel/twitter.svg';
import DarkWebIcon from '../assets/images/onboard/channels/dark/web-form.svg';
import DarkEmailIcon from '../assets/images/onboard/channels/dark/add-message.svg';
import DarkLiveIcon from '../assets/images/onboard/channels/dark/answer.svg';
import DarkFacebookIcon from '../assets/images/onboard/channels/dark/facebook.svg';
import DarkTwitterIcon from '../assets/images/onboard/channels/dark/twitter.svg';
import DarkPhoneIcon from '../assets/images/onboard/channels/dark/call-back.svg';

const FakeChannels = [
  {
    type: 'email',
    agentCount: 12,
    icon: EmailIcon,
    darkIcon: DarkEmailIcon,
    status: 'completed',
  },
  {
    type: 'live',
    agentCount: 7,
    icon: LiveIcon,
    darkIcon: DarkLiveIcon,
    status: 'completed',
  },
  {
    type: 'phone',
    agentCount: 8,
    icon: PhoneIcon,
    darkIcon: DarkPhoneIcon,
    status: 'pending',
  },
  {
    type: 'web',
    agentCount: 12,
    icon: WebIcon,
    darkIcon: DarkWebIcon,
    status: 'completed',
  },
  {
    type: 'facebook',
    agentCount: 12,
    icon: FacebookIcon,
    darkIcon: DarkFacebookIcon,
    status: 'new',
  },
  {
    type: 'twitter',
    agentCount: 2,
    icon: TwitterIcon,
    darkIcon: DarkTwitterIcon,
    status: 'new',
  },
];

export default FakeChannels;

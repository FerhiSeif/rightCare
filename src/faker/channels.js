import WebIcon from '../assets/images/dashboard/channel/web.svg';
import LiveIcon from '../assets/images/dashboard/channel/live.svg';
import EmailIcon from '../assets/images/dashboard/channel/email.svg';
import PhoneIcon from '../assets/images/dashboard/channel/phone.svg';
import TwitterIcon from '../assets/images/dashboard/channel/twitter.svg';
import GreenLiveIcon from '../assets/images/onboard/services/answer.svg';
import GreenWebIcon from '../assets/images/onboard/services/id-card.svg';
import FacebookIcon from '../assets/images/dashboard/channel/facebook.svg';
import GreenTwitterIcon from '../assets/images/onboard/services/twitter.svg';
import DarkLiveIcon from '../assets/images/onboard/channels/dark/answer.svg';
import GreenPhoneIcon from '../assets/images/onboard/services/call-back.svg';
import DarkWebIcon from '../assets/images/onboard/channels/dark/web-form.svg';
import GreenFacebookIcon from '../assets/images/onboard/services/facebook.svg';
import GreenEmailIcon from '../assets/images/onboard/services/add-message.svg';
import DarkPhoneIcon from '../assets/images/onboard/channels/dark/call-back.svg';
import DarkTwitterIcon from '../assets/images/onboard/channels/dark/twitter.svg';
import DarkEmailIcon from '../assets/images/onboard/channels/dark/add-message.svg';
import DarkFacebookIcon from '../assets/images/onboard/channels/dark/facebook.svg';

const FakeChannels = [
  {
    name: 'Email',
    type: 'email',
    agentCount: 12,
    icon: EmailIcon,
    darkIcon: DarkEmailIcon,
    greenIcon: GreenEmailIcon,
    status: 'completed',
  },
  {
    name: 'Live Chat',
    type: 'live',
    agentCount: 7,
    icon: LiveIcon,
    darkIcon: DarkLiveIcon,
    greenIcon: GreenLiveIcon,
    status: 'completed',
  },
  {
    name: 'Phone Call',
    type: 'phone',
    agentCount: 8,
    icon: PhoneIcon,
    darkIcon: DarkPhoneIcon,
    greenIcon: GreenPhoneIcon,
    status: 'pending',
  },
  {
    name: 'Web Form',
    type: 'web',
    agentCount: 12,
    icon: WebIcon,
    darkIcon: DarkWebIcon,
    greenIcon: GreenWebIcon,
    status: 'completed',
  },
  {
    name: 'Facebook',
    type: 'facebook',
    agentCount: 12,
    icon: FacebookIcon,
    darkIcon: DarkFacebookIcon,
    greenIcon: GreenFacebookIcon,
    status: 'new',
  },
  {
    name: 'Twitter',
    type: 'twitter',
    agentCount: 2,
    icon: TwitterIcon,
    darkIcon: DarkTwitterIcon,
    greenIcon: GreenTwitterIcon,
    status: 'new',
  },
];

export default FakeChannels;

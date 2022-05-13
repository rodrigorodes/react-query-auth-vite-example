import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import GroupIcon from '@mui/icons-material/Group';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: 'Dashboard',
    items: [
      {
        name: 'Main',
        link: '/app/dashboard',
        icon: BrightnessLowTwoToneIcon
      },
    ]
  },
  {
    heading: 'Gerenciamento',
    items: [
      {
        name: 'Usuários',
        icon: GroupIcon,
        link: '/app/users'
      },
      {
        name: 'Compêtencias',
        icon: TableChartTwoToneIcon,
        link: '/app/competencias'
      },
      {
        name: 'Perfil',
        icon: AccountCircleTwoToneIcon,
        link: '/app/perfil',
        items: [
          {
            name: 'Detalhes',
            link: '/app/perfil/detalhes'
          },
          {
            name: 'Configurações',
            link: '/app/perfil/configuracao'
          }
        ]
      }
    ]
  },
  {
    heading: 'Paginas Extras',
    items: [
      {
        name: 'Status',
        icon: VerifiedUserTwoToneIcon,
        link: '/error/status',
        items: [
          {
            name: 'Error 404',
            link: '/error/status/404'
          },
          {
            name: 'Error 500',
            link: '/error/status/500'
          },
          {
            name: 'Maintenance',
            link: '/error/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/error/status/coming-soon'
          }
        ]
      }
    ]
  }
];

export default menuItems;

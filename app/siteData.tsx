import { ReactNode } from 'react'

import {
  GamepadIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  TerminalIcon,
  UserIcon,
} from '@/components/ui/icons'

export const siteData = {
  name: 'Deglier Amorim',
  logo_name: 'deglier-amorim',
  description:
    'Front-end engineering and web developer based in Rio de Janeiro, Brazil. Working on projects from the beginning to the end.',
  role: 'Front-end developer',
  heroConst: {
    key: 'githubLink',
    value: 'https://github.com/deglier',
  },
  links: [
    {
      label: '_home',
      path: '/',
      targetSegment: null,
    },
    {
      label: '_about-me',
      path: '/about-me',
      targetSegment: 'about-me',
    },
    {
      label: '_projects',
      path: '/projects',
      targetSegment: 'projects',
    },
    {
      label: '_contact-me',
      path: '/contact-me',
      targetSegment: 'contact-me',
    },
  ],
  about: {
    paths: {
      'professional-info': {
        title: 'professional-info',
        path: '/about-me/professional-info',
        icon: <TerminalIcon />,
        info: {
          experience: {
            title: 'experience',
            path: '/about-me/professional-info/experience',
            content:
              '<br>Over the past 5 years, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          'hard-skills': {
            title: 'hard-skills',
            path: '/about-me/professional-info/hard-skills',
            content:
              '<br>As a front-end developer, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          'soft-skills': {
            title: 'soft-skills',
            path: '/about-me/professional-info/soft-skills',
            content:
              '<br>I bring more than Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
        },
      },
      'personal-info': {
        title: 'personal-info',
        path: '/about-me/personal-info',
        icon: <UserIcon />,
      },
      'hobbies-info': {
        title: 'hobbies-info',
        path: '/about-me/hobbies-info',
        icon: <GamepadIcon />,
      },
    },
  },
  contacts: {
    social: [
      {
        title: 'Linkedin account',
        url: 'https://www.linkedin.com/in/degliersa',
        user: null,
        icon: <LinkedinIcon />,
      },
      {
        title: 'Instagram account',
        url: 'https://www.instagram.com/degliersa',
        user: null,
        icon: <InstagramIcon />,
      },
      {
        title: 'Github profile',
        url: 'https://github.com/deglier',
        user: '@deglier',
        icon: <GitHubIcon />,
      },
    ],
  },
}

export type SiteData = typeof siteData

export type SiteDataContactSocial = {
  title: string
  url: string
  user: string | null
  icon: ReactNode
}

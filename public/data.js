import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTwitter,
} from 'react-icons/bi';

export const links = [
  {
    id: 1,
    name: 'home',
    url: '/',
    children: [
      {
        name: 'home one',
        url: '/',
      },
      {
        name: 'home two',
        url: '/',
      },
      {
        name: 'home three',
        url: '/',
      },
    ],
  },

  {
    id: 2,
    name: 'about',
    url: '/',
  },
  {
    id: 3,
    name: 'menu',
    url: '/',
    children: [
      { name: 'menu list 1', url: '/' },
      { name: 'menu list 2', url: '/' },
      { name: '3 column menu', url: '/' },
    ],
  },
  {
    id: 4,
    name: 'pages',
    url: '/',
    children: [
      {
        name: 'food category',
        url: '/',
      },
      {
        name: 'reservation',
        url: '/',
      },
      {
        name: 'gallery',
        url: '/',
      },
      {
        name: 'chef',
        url: '/',
      },
      {
        name: 'shop',
        url: '/',
      },
      {
        name: 'faq',
        url: '/',
      },
      {
        name: 'error',
        url: '/',
      },
    ],
  },

  {
    id: 5,
    name: 'blog',
    url: '/',
    children: [
      { name: 'blog grid', url: '/' },
      { name: 'blog standard', url: '/' },
      { name: 'blog details', url: '/' },
    ],
  },

  { id: 6, name: 'contact', url: '/' },
];

export const menu_data = [
  {
    title: 'Shawarma',
    body: 'Lorem ipsum dolor sit amet adipisicing.',
    image:
      'https://www.recipetineats.com/wp-content/uploads/2022/02/Chicken-Shawarma-Wrap_2-SQ.jpg',
  },
  {
    title: 'Easy Lemon Bars',
    body: 'Easy lemonm bars ipsum dolor sit amet.',
    image:
      'https://www.recipetineats.com/wp-content/uploads/2016/04/Lemon-Bars_2.jpg',
  },
  {
    title: 'Pepperonni Pizza',
    body: 'Lorem consectetur ipsum dolor sit amet.',
    image:
      'https://www.recipetineats.com/wp-content/uploads/2014/11/Hot-Pepperoni-Pizza-Dip-2.jpg',
  },
  {
    title: 'Haloumi Fries',
    body: 'Ipsum dolor  lorem consectetursit amet.',
    image:
      'https://www.recipetineats.com/wp-content/uploads/2023/08/Haloumi-Fries_6.jpg',
  },
];

export const social_links = [
  { url: 'https://www.facebook.com', icon: <BiLogoFacebook /> },
  { url: 'https://www.instagram.com', icon: <BiLogoInstagramAlt /> },
  { url: 'https://www.linkedin.com', icon: <BiLogoLinkedin /> },
  { url: 'https://www.twitter.com', icon: <BiLogoTwitter /> },
];

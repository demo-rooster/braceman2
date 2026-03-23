const router = [
  {
    name: 'Home',
    path: '/',
    navigation: false,
    mobile: true
  },
  {
    name: 'About',
    path: '/about',
    navigation: false,
    children: [
      {
        name: 'Meet Dr. Tyska',
        path: '#meet-dr-tyska'
      },
      {
        name: 'Meet Dr. Alexander',
        path: '#meet-dr-alexander'
      }
    ]
  },
  {
    name: 'Get Started',
    path: '/get-started',
    navigation: false
  },
  {
    name: 'Treatments',
    path: '/treatments',
    navigation: false,
    children: [
      {
        name: 'Early/interceptive treatment for children',
        path: '#early-interceptive-treatment'
      },
      {
        name: 'Adult orthodontic options — It\'s never too late',
        path: '#adult-orthodontic-options'
      },
      {
        name: 'Traditional (metal) and ceramic braces',
        path: '#braces'
      },
      {
        name: 'Invisalign<sup>®</sup> clear aligners',
        path: '#invisalign'
      },
      {
        name: 'Surgical orthodontics (jaw surgery)',
        path: '#orthognathic-surgery'
      },
      {
        name: 'Retainers and maintaining results',
        path: '#retainers'
      },
      {
        name: 'Advanced technology — 3D scanning and imaging',
        path: '#advanced-technology'
      }
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    navigation: false
  },
  {
    name: 'FAQ',
    path: '/faq',
    navigation: false
  }
]

export default router

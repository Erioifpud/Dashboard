import Type from './type'
var Mock = require('mockjs')

Mock.mock('/api/item', (): Array<Type.SideItem> => {
  return [
    {
      path: '/',
      icon: 'analytics',
      name: 'Dashboard'
    },
    {
      path: '/device',
      icon: 'wifi',
      name: 'Devices'
    },
    {
      path: '/node',
      icon: 'outlet',
      name: 'Nodes'
    },
    {
      path: '/setting',
      icon: 'settings',
      name: 'Settings'
    }
  ]
})
export default [
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      name: 'login',
      notMenu: true
    }
  },
  {
    path: '/example',
    component: () => import('@/views/example'),
    meta: {
      name: 'test.example',
      icon: 'fld1Status'
    }
  },
  {
    path: '/home',
    component: () => import('@/views/index'),
    meta: {
      name: 'menu.home',
      icon: 'fld1Status'
    }
  },
  {
    path: '/system',
    meta: {
      name: 'menu.system',
      icon: 'fld1Diag'
    },
    children: [
      {
        path: '/deviceInfo',
        component: () => import('@/views/system/device-info'),
        meta: {
          name: 'menu.deviceInfo',
        }
      },
      {
        path: '/ipSetting',
        component: () => import('@/views/system/ip-setting'),
        meta: {
          name: 'menu.ipSetting',
        }
      },
      {
        path: '/accountSetting',
        component: () => import('@/views/system/account-setting'),
        meta: {
          name: 'menu.accountSetting',
        }
      },
      {
        path: '/reboot',
        component: () => import('@/views/system/reboot'),
        meta: {
          name: 'menu.reboot',
        }
      },
      {
        path: '/upgrade',
        component: () => import('@/views/system/upgrade'),
        meta: {
          name: 'menu.upgrade',
        }
      },
      {
        path: '/restoreDefault',
        component: () => import('@/views/system/restore-default'),
        meta: {
          name: 'menu.restoreDefault',
        }
      },
      {
        path: '/saveSettings',
        component: () => import('@/views/system/save-settings'),
        meta: {
          name: 'menu.saveSettings',
        }
      }
    ]
  },
  {
    path: '/monitoring',
    meta: {
      name: 'menu.monitoring',
      icon: 'fld1Discov'
    },
    children: [
      {
        path: '/switches',
        component: () => import('@/views/monitoring/switches'),
        meta: {
          name: 'menu.switches',
        }
      },
      {
        path: '/ONVIF',
        component: () => import('@/views/monitoring/ONVIF'),
        meta: {
          name: 'menu.ONVIF',
        }
      },
      {
        path: '/portStatistics',
        component: () => import('@/views/monitoring/port-statistics'),
        meta: {
          name: 'menu.portStatistics',
        }
      },
      {
        path: '/cableDiagnostics',
        component: () => import('@/views/monitoring/cable-diagnostics'),
        meta: {
          name: 'menu.cableDiagnostics',
        }
      },
      {
        path: '/loopGuard',
        component: () => import('@/views/monitoring/loop-guard'),
        meta: {
          name: 'menu.loopGuard',
        }
      }
    ]
  },
  {
    path: '/switchSettings',
    meta: {
      name: 'menu.switchSettings',
      icon: 'fld1Network'
    },
    children: [
      {
        path: '/portSettings',
        component: () => import('@/views/switchSettings/port-settings'),
        meta: {
          name: 'menu.portSettings',
        }
      },
      {
        path: '/portTrunking',
        component: () => import('@/views/switchSettings/port-trunking'),
        meta: {
          name: 'menu.portTrunking',
        }
      },
      {
        path: '/portMirroring',
        component: () => import('@/views/switchSettings/port-mirroring'),
        meta: {
          name: 'menu.portMirroring',
        }
      },
      {
        path: '/portIsolation',
        component: () => import('@/views/switchSettings/port-isolation'),
        meta: {
          name: 'menu.portIsolation',
        }
      },
      {
        path: '/staticMAC',
        component: () => import('@/views/switchSettings/static-MAC'),
        meta: {
          name: 'menu.staticMAC',
        }
      },
      {
        path: '/searchMAC',
        component: () => import('@/views/switchSettings/search-MAC'),
        meta: {
          name: 'menu.searchMAC',
        }
      },
      {
        path: '/MACList',
        component: () => import('@/views/switchSettings/MAC-list'),
        meta: {
          name: 'menu.MACList',
        }
      },
      {
        path: '/DHCPSnooping',
        component: () => import('@/views/switchSettings/DHCP-snooping'),
        meta: {
          name: 'menu.DHCPSnooping',
        }
      }
    ]
  },
  {
    path: '/vlanSettings',
    meta: {
      name: 'menu.VLANSettings',
      icon: 'fld1Vlan'
    },
    children: [
      {
        path: '/VLANSettings',
        component: () => import('@/views/vlanSettings/vlan-settings'),
        meta: {
          name: 'menu.VLANSettings',
        }
      },
      {
        path: '/pvidSetting',
        component: () => import('@/views/vlanSettings/pvid-setting'),
        meta: {
          name: 'menu.pvidSetting',
        }
      }
    ]
  },
  {
    path: '/QoSSettings',
    meta: {
      name: 'menu.QoSSettings',
      icon: 'fld1Qos'
    },
    children: [
      {
        path: '/portRate',
        component: () => import('@/views/QoSSettings/port-rate'),
        meta: {
          name: 'menu.portRate',
        }
      },
      {
        path: '/stormControl',
        component: () => import('@/views/QoSSettings/storm-control'),
        meta: {
          name: 'menu.stormControl',
        }
      }
    ]
  },
  {
    path: '/poeSetting',
    component: () => import('@/views/poeSetting'),
    meta: {
      name: 'menu.poeSetting',
      icon: 'fld1PoE'
    }
  }
]

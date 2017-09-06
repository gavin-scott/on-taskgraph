// Copyright 2017, EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Dell WSMAN Configure BIOS',
    injectableName: 'Graph.Dell.Wsman.ConfigureBios',
    options: {
        defaults: {
            serverIP: null,
            serverUsername: null,
            serverPassword: null,
            attributes: null,
            biosBootSequenceOrder: null,
            hddSequenceOrder: null,
            enableBootDevices: null,
            disableBootDevices: null
        }
    },
    tasks: [
        {
            label: 'dell-wsman-configure-bios',
            taskName: 'Task.Dell.Wsman.ConfigureBios'
        }
    ]
};

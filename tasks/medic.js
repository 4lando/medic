'use strict';

module.exports = lando => {
  return {
    command: 'medic [subcommands...]',
    describe: 'Diagnose and fix common problems with Lando',
    level: 'tasks',
    options: {},
    run: options => {
      console.log('MEDIC: Running lando medic...');
    },
  };
};

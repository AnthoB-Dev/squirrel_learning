const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
require('dotenv').config();


module.exports = {
  packagerConfig: {
    name: "squirrel_learning",
    asar: false,
    executableName: "Squilearn",
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'squirrel_learning',
        authors: 'AnthoB-Dev',
        description: 'Learning squirrel with electron',
        noMsi: true,
        oneClick: false,
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'AnthoB-Dev',
          name: 'squirrel_learning',
        },
        authToken: process.env.GITHUB_TOKEN,
        prerelease: false,
      },
    },
  ],
  plugins: [
    // Fuses sont utilisés pour activer/désactiver diverses fonctionnalités d'Electron
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: true,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: false,
      [FuseV1Options.OnlyLoadAppFromAsar]: false,
    }),
  ],
};

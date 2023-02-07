const name = 'core';
const srcRoot = `packages/${name}`;

module.exports = {
  extends: 'release.config.base.js',
  pkgRoot: `${srcRoot}`,
  npmPublish: false,
  // eslint-disable-next-line no-template-curly-in-string
  tagFormat: `${name}-${'v${version}'}`,
  commitPaths: [`${srcRoot}/*`],
  branches: ['main', { name: 'beta', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [`${srcRoot}/CHANGELOG.md`, `${srcRoot}/package.json`],
        message: `chore(release): ${name} v\${nextRelease.version} [skip ci]`,
      },
    ],
  ],
};

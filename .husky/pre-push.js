#!/usr/bin/env sh

const protectedBranches = ['main', 'develop', 'beta'];

const currentBranch = require('child_process')
  .execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();

if (protectedBranches.includes(currentBranch)) {
  console.log('Pushing to protected branch is not allowed');
  process.exit(1);
}

console.log('I hope you know what you are doing!');

process.exit(0);

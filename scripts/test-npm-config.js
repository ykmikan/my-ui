#!/usr/bin/env node

/**
 * This script tests the npm configuration for GitHub Packages.
 * It checks if the GITHUB_TOKEN environment variable is set and
 * if the .npmrc file is configured correctly.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if GITHUB_TOKEN is set
const githubToken = process.env.GITHUB_TOKEN;
if (!githubToken) {
  console.error('\x1b[31mError: GITHUB_TOKEN environment variable is not set.\x1b[0m');
  console.log('Please set it with: export GITHUB_TOKEN=your_github_token');
  process.exit(1);
}

// Check if .npmrc exists
const npmrcPath = path.join(__dirname, '..', '.npmrc');
if (!fs.existsSync(npmrcPath)) {
  console.error('\x1b[31mError: .npmrc file not found in the project root.\x1b[0m');
  process.exit(1);
}

// Check .npmrc content
const npmrcContent = fs.readFileSync(npmrcPath, 'utf8');
if (!npmrcContent.includes('npm.pkg.github.com')) {
  console.error('\x1b[31mError: .npmrc file does not contain GitHub Packages configuration.\x1b[0m');
  process.exit(1);
}

// Check package.json files
const packagesDir = path.join(__dirname, '..', 'packages');
const packages = fs.readdirSync(packagesDir);

for (const pkg of packages) {
  const packageJsonPath = path.join(packagesDir, pkg, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Check repository field
    if (!packageJson.repository || !packageJson.repository.url) {
      console.error(`\x1b[31mError: repository field missing in ${pkg}/package.json\x1b[0m`);
      process.exit(1);
    }

    // Check publishConfig field
    if (!packageJson.publishConfig || !packageJson.publishConfig.registry) {
      console.error(`\x1b[31mError: publishConfig field missing in ${pkg}/package.json\x1b[0m`);
      process.exit(1);
    }

    // Check if package name uses @ykmikan
    if (!packageJson.name.startsWith('@ykmikan/')) {
      console.error(`\x1b[31mError: Package name in ${pkg}/package.json should start with @ykmikan/\x1b[0m`);
      process.exit(1);
    }
  }
}

// Test npm connection to GitHub Packages
try {
  console.log('Testing connection to GitHub Packages...');
  execSync('npm whoami --registry=https://npm.pkg.github.com/', { stdio: 'inherit' });
  console.log('\x1b[32mSuccess! Your npm configuration for GitHub Packages is correct.\x1b[0m');
} catch (error) {
  console.error('\x1b[31mError: Failed to authenticate with GitHub Packages.\x1b[0m');
  console.error('Make sure your GITHUB_TOKEN has the correct permissions.');
  process.exit(1);
}

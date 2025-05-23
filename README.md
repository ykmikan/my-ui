# My UI

A design system with React components and icons.

## Publishing to GitHub Packages

This project is configured to publish packages privately to GitHub Packages. Follow these steps to publish:

### Prerequisites

1. Make sure you have a GitHub account and are a member of the organization that owns this repository.
2. Create a Personal Access Token (PAT) with the `read:packages`, `write:packages`, and `delete:packages` scopes.

### Setup

1. Set your GitHub token as an environment variable:

```bash
export GITHUB_TOKEN=your_github_token
```

Alternatively, you can add it to your `.npmrc` file directly (not recommended for security reasons):

```
//npm.pkg.github.com/:_authToken=your_github_token
```

2. Test your configuration:

```bash
npm run test-npm-config
```

Or run the script directly:

```bash
./scripts/test-npm-config.js
```

This script will check if your configuration is correct and if you can authenticate with GitHub Packages.

### Publishing

Before publishing, make sure to:

1. Update the version number in the package.json files
2. Build the packages

```bash
# Build all packages
npm run build

# Publish all packages
npm run publish

# Or publish individual packages
npm run publish:components
npm run publish:icons
```

### Using the Published Packages

To use these packages in another project, you'll need to configure npm to use GitHub Packages for the @ykmikan scope:

1. Create or update the `.npmrc` file in your project:

```
@ykmikan:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=your_github_token
```

2. Install the packages:

```bash
npm install @ykmikan/components @ykmikan/icons
```

# docs ![Build Status](https://img.shields.io/github/workflow/status/vlssu/docs-vlssu/Publish/main?logo=github) ![Deployment Status](https://img.shields.io/github/deployments/vlssu/docs-vlssu/github-pages?label=deployment&logo=github) ![License](https://img.shields.io/github/license/vlssu/docs-vlssu)

This is the repository for all project documentation under the VLssu umbrella. Content in this
repository is published to [docs.vlssu.com](https://docs.vlssu.com) for viewing.

## Getting Started

How to get docs running on your local machine for development.

### Prerequisites

- [node](https://nodejs.org)
- [yarn](https://yarnpkg.com/getting-started/install)

### Local Development

1. Clone the repository. If you plan to make changes, create a fork first!

```bash
$ git clone https://github.com/vlssu/docs-vlssu.git
```

2. Install all required dependencies.

```bash
$ yarn
```

3. Start the development server

```bash
$ yarn start
```

This will start a local development server and open a browser window. The majority of changes will
be instantly reflected live without the need to restart the development server or reload the page in
your browser. Edit away!

### Building

```bash
$ yarn build
```

This command builds a production-ready deployment into the `build` directory. These files are ready
to be hosted on any static content server.

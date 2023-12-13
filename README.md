# Getting started

The [HubSpot CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cms-cli) (Command Line Interface) connects your local workflow to HubSpot, allowing you to utilize version control, your favorite text editor and various web development technologies when developing on CMS Hub.


## Install dependencies

1.  Install  [Node.js](https://nodejs.org/en/), a Javascript runtime environment that enables the local tools. Versions 10 or higher of Node are supported, but we recommend the long-term support (LTS) version.
2.  To install the HubSpot tools globally, run  `yarn global add @hubspot/cli`  in your command line. To install the tools in your current directory, run  `yarn add @hubspot/cli`.

## Configure the local development tools

Run  `hs init`  to connect the tools to your HubSpot account. This command will walk you through the following steps:
1.  First you’ll be guided to create a personal CMS access key to enable authenticated access to your account via the local development tools. You’ll be prompted to press "Enter" when you’re ready to open the  [Personal CMS Access Key page](https://app.hubspot.com/l/personal-access-key?_ga=2.251663370.241275342.1662374481-1028712579.1662374481)  in your default browser. This page will allow you to view or generate your personal access key, if necessary. (Note: You’ll need to select at least the "Design Manager" permission in order to complete this tutorial.) Copy your access key and paste it in the terminal.
2.  Next, you’ll enter a name for the account. This name is only seen and used by you, For example, you might use "sandbox" if you're using a developer sandbox. This name can't contain spaces. This name will be used when running commands.

Once you've completed this simple  init  flow, you'll see a success message confirming that a configuration file,  [hubspot.config.yml](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cms-cli#authentication), has been created in your current directory.

Run `hs auth` If you already have a `hubspot.config.yml` file you can use this command to add credentials for additional accounts. For example you might [use your sandbox account as a development environment.](https://developers.hubspot.com/docs/cms/guides/creating-an-efficient-development-workflow#setting-up-your-development-environment) When prompted for a name to use for the account, the name can't contain spaces.

## Fetch a project from git
1.  On bitbucket.org, navigate to the main page of the repository.
2. Click **Clone**
3. Copy the URL for the repository.
4. Open  Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type `git clone`, and then paste the URL you copied earlier.
7. Press **Enter** to create your local clone.

### Install dependencies with `yarn`

## Watch your local project and automatically upload changes

Run `yarn run start`. Builds project with webpack, uploads to the defined `dest` specified in `webpack.config.js` and watches for changes via [`@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin`](https://www.npmjs.com/package/@hubspot/webpack-cms-plugins).

Run `yarn run watchcss` Builds tailwind classes and watches for changes.

## Make changes and upload to your HubSpot account

Run `yarn run deploy` : Clears `/dist` contents, builds project into `/dist`, and uploads to the defined `dest` specified in `webpack.config.js` via [`@hubspot/cms-cli`](https://www.npmjs.com/package/@hubspot/cms-cli).

Run `yarn run upload`: Uploads the `/dist` contents to your `dest` specified in `webpack.config.js`.

## Create new module
Run [`hs create module <name> [dest]`](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli#create)
**NOTE:** Error occurs when trying to use the module created this way.
### Workaround 
Create a new module in hubspot CMS, then run `yarn run fetch` to update local project with new files from hubspot account.

## Fetch a project from your account

Run `yarn run fetch` or `hs fetch --account=<name> <src> <dest>`  to get an entire projects folder tree and files from your HubSpot account into your local environment. The  src  is the project path in your HubSpot Design Tools, and the  dest  is the path to the local directory you would like the files to be placed, relative to your current working directory. To fetch the project to your current working directory, you can leave out the  `dest` argument.


{
  "name": "ToolJet",
  "description": "ToolJet is an open-source low-code framework to build and deploy internal tools.",
  "website": "https://tooljet.io/",
  "repository": "https://github.com/tooljet/tooljet",
  "logo": "https://tooljet.com/blue-logo.png",
  "success_url": "/",
  "scripts": {
    "predeploy": "npm install --prefix server && npm run build --prefix server"
  },
  "env": {
    "NODE_ENV": {
      "description": "Environment [production/development]",
      "value": "production"
    },
    "TOOLJET_HOST": {
      "description": "Public URL of ToolJet installtion. This is usually https://<app-name-in-first-step>.herokuapp.com",
      "value": "https://<app-name-in-first-step>.herokuapp.com"
    },
    "TOOLJET_SERVER_URL": {
      "description": "URL of ToolJet server installtion. (This is same as the TOOLJET_HOST for Heroku deployments)",
      "value": "https://<app-name-in-first-step>.herokuapp.com"
    },
    "LOCKBOX_MASTER_KEY": {
      "description": "Master key for encrypting datasource credentials.",
      "value": ""
    },
    "SECRET_KEY_BASE": {
      "description": "Used by ToolJet server as the input secret to the application's key generator.",
      "value": ""
    },
    "NODE_OPTIONS": {
      "description": "Node options configured to increase node memory to support app build",
      "value": "--max-old-space-size=4096"
    }
  },
  "formation": {
    "web": {
      "quantity": 1
    }
  },
  "image": "heroku/nodejs",
  "addons": [
    "heroku-postgresql"
  ],
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    },
    {
      "url": "heroku-community/apt"
    },
    {
      "url": "https://github.com/featurist/oracle-client-buildpack.git"
    }
  ],
  "environments": {
    "test": {
      "scripts": {
        "test": "npm run test --prefix server && npm run test:e2e --prefix server"
      }
    }
  }
}

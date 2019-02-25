# Simple Google Cloud Function #


## Install SDK ##

```
https://cloud.google.com/sdk/docs/quickstart-macos

> brew cask install google-cloud-sdk
> gcloud init
> gcloud init --console-only 
```

## Serverless Framework Getting Started ##

https://serverless.com/framework/docs/providers/google/

https://serverless.com/framework/docs/providers/google/guide/quick-start/

## Run Locally ##

**Prerequisites:**

Generate Access Key, create Service Account and assign roles, enable roles for the project

* Create Access: https://serverless.com/framework/docs/providers/google/guide/credentials/
* Enable: https://console.developers.google.com/apis/api/deploymentmanager.googleapis.com/overview?project=my-poc-232622
* Enable: https://console.developers.google.com/apis/api/cloudfunctions.googleapis.com/overview?project=75359283489


* npm install
* Edit serverless.yml with your project name and copy keyfile.json to ~/.acloud/keyfile.json
* serverless deploy
* serverless invoke --function helloworld

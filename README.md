# Simple Google Cloud Function #


##Install SDK##

```
https://cloud.google.com/sdk/docs/quickstart-macos

> brew cask install google-cloud-sdk
> gcloud init
> gcloud init --console-only 
```

##Serverless Framework Resources##

https://serverless.com/framework/docs/providers/google/


## Create First Google Cloud Function ##

https://serverless.com/framework/docs/providers/google/guide/quick-start/

##Prerequisites:##
* Create Access: https://serverless.com/framework/docs/providers/google/guide/credentials/

* Enable: https://console.developers.google.com/apis/api/deploymentmanager.googleapis.com/overview?project=my-poc-232622
* Enable: https://console.developers.google.com/apis/api/cloudfunctions.googleapis.com/overview?project=75359283489


##Run Locally:##

* npm install
* serverless deploy
* serverless invoke --function first
# azure-resume

Azure resume following ACG

## First Steps
- git add -A; git commit -m "", git push
- Frontend folder
- main.js created for visitor counter.
---
Azure-functions-core-tools install for Debian bookworm
 - sudo apt-get update -y
 - sudo apt-get upgrade -y
 - wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
 - sudo dpkg -i packages-microsoft-prod.deb
 - sudo apt-get update
 - sudo apt-get install apt-transport-https -y
 - sudo apt-get install dotnet-sdk-2.1 -y
 - sudo apt-get install azure-functions-core-tools -y

 Microsoft.Azure.WebJobs.Extensions.CosmosDB
  - https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.CosmosDB
  - dotnet add package Microsoft.Azure.WebJobs.Extensions.CosmosDB --version 3.0.10: For collectionName

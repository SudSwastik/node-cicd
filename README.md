# Node BeanStalk Deployment

> Install EB CLI
```
$  brew install awsebcli
```

> Cd into your node application and initialise beanstalk settings
```
$ eb init
```

> Deploy code to an environemt
```
$ eb create staging -v --instance_type t2.small --envvars MONGO_URI=<mongo-uri> --platform node.js --region ap-south-1
```

> Get Application Logs
```
$ eb logs
```
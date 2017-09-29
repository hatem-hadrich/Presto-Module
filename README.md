Information: To use the following test suites, you need to install a PrestaShop in English in country France. (or you may change some assertions like the separator “,” or “.”, “€” or “$” or “£” or …]
You need to create a user in Back Office with SuperAdmin rights and the following information’s:
Login: demo@prestashop.com
Password: demo_prestashop

a)	Installation
To use nodeJS tests, you need to install:
-	NodeJS
-	Npm
-	Webdrivers pour Chrome et firefox

Required modules to install using npm are:
-	json
-	minimist
-	mocha
-	node-uuid
-	parsed-url
-	q
-	req
-	should
-	webdriverio
-	window
-	selenium-standalone

b)	How to launch tests

-	First, you need to start selenium-standalone
-	Go to the folder of the module you want to test and execute the following line:
- Launch tests :

      mocha index.webdriverio.js --URL=presto200917.staging-prestashopready.net --EMAIL=remi.gaillard@prestashop.com --PWD=abcd1234
-	URL: Front office URL of your prestashop website (without the “http://”)
-	Email  : Admin email
-	PWD : Admin password


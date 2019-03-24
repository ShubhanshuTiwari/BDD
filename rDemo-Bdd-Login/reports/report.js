$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/ScenarioOutlineFeature/scenariofeature.feature");
formatter.feature({
  "name": "functionality on login page of application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verification of submit button with number of credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open the firefox and launch the application",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the Username \u003cusername\u003e and Password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "submit the Credential",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "\"User11\"",
        "\"password11\""
      ]
    },
    {
      "cells": [
        "\"User22\"",
        "\"password22\""
      ]
    },
    {
      "cells": [
        "\"User33\"",
        "\"password33\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verification of submit button with number of credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open the firefox and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.open_the_firefox_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Username \"User11\" and Password \"password11\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.enter_the_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit the Credential",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.submit_the_Credential()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of submit button with number of credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open the firefox and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.open_the_firefox_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Username \"User22\" and Password \"password22\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.enter_the_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit the Credential",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.submit_the_Credential()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6.02 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-9LF8BH3\u0027, ip: \u0027192.168.1.210\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56107}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72), userDataDir\u003dC:\\Users\\Lenovo\\AppData\\Local\\Temp\\scoped_dir11344_24635}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.121, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3ce5621777ff56c309b09e381f24fecf\n*** Element info: {Using\u003dname, value\u003dsubmit}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat ScenarioOutlineFeature.Stepdefs.submit_the_Credential(Stepdefs.java:39)\r\n\tat ✽.submit the Credential(src/test/resources/ScenarioOutlineFeature/scenariofeature.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verification of submit button with number of credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open the firefox and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.open_the_firefox_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Username \"User33\" and Password \"password33\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.enter_the_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit the Credential",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.submit_the_Credential()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6.02 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-9LF8BH3\u0027, ip: \u0027192.168.1.210\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56134}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72), userDataDir\u003dC:\\Users\\Lenovo\\AppData\\Local\\Temp\\scoped_dir14600_24184}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.121, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4c06d860becbb72b491fbc96680aa1ac\n*** Element info: {Using\u003dname, value\u003dsubmit}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat ScenarioOutlineFeature.Stepdefs.submit_the_Credential(Stepdefs.java:39)\r\n\tat ✽.submit the Credential(src/test/resources/ScenarioOutlineFeature/scenariofeature.feature:5)\r\n",
  "status": "failed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WikipediaSearch.feature");
formatter.feature({
  "line": 1,
  "name": "search Wikipedia",
  "description": "As a user\nI would like to search for a term\nIn order to learn about it\u0027s meaning",
  "id": "search-wikipedia",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Successful search",
  "description": "",
  "id": "search-wikipedia;successful-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Enter search term \u0027\u003csearchTerm\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Different content is shown for the user",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-wikipedia;successful-search;",
  "rows": [
    {
      "cells": [
        "searchTerm"
      ],
      "line": 12,
      "id": "search-wikipedia;successful-search;;1"
    },
    {
      "cells": [
        "Java"
      ],
      "line": 13,
      "id": "search-wikipedia;successful-search;;2"
    },
    {
      "cells": [
        "Brasil"
      ],
      "line": 14,
      "id": "search-wikipedia;successful-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14764204631,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful search",
  "description": "",
  "id": "search-wikipedia;successful-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Enter search term \u0027Java\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Different content is shown for the user",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 19
    }
  ],
  "location": "WikipediaSearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 643551704,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 3228716160,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearchSteps.assertSingleResult()"
});
formatter.result({
  "duration": 251751454,
  "status": "passed"
});
formatter.after({
  "duration": 970453079,
  "status": "passed"
});
formatter.before({
  "duration": 4575824622,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful search",
  "description": "",
  "id": "search-wikipedia;successful-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Enter search term \u0027Brasil\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Different content is shown for the user",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Brasil",
      "offset": 19
    }
  ],
  "location": "WikipediaSearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 102043635,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 11091648160,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearchSteps.assertSingleResult()"
});
formatter.result({
  "duration": 47257722,
  "status": "passed"
});
formatter.after({
  "duration": 452821405,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Incorrect search with invalid term",
  "description": "",
  "id": "search-wikipedia;incorrect-search-with-invalid-term",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter search term \u0027\u003csearchTerm\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "No results should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "search-wikipedia;incorrect-search-with-invalid-term;",
  "rows": [
    {
      "cells": [
        "searchTerm"
      ],
      "line": 22,
      "id": "search-wikipedia;incorrect-search-with-invalid-term;;1"
    },
    {
      "cells": [
        "Javaaa"
      ],
      "line": 23,
      "id": "search-wikipedia;incorrect-search-with-invalid-term;;2"
    },
    {
      "cells": [
        "Brasilll"
      ],
      "line": 24,
      "id": "search-wikipedia;incorrect-search-with-invalid-term;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7582999735,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Incorrect search with invalid term",
  "description": "",
  "id": "search-wikipedia;incorrect-search-with-invalid-term;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter search term \u0027Javaaa\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "No results should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Javaaa",
      "offset": 19
    }
  ],
  "location": "WikipediaSearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 173059421,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 2810833672,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearchSteps.assertInvalidSearch()"
});
formatter.result({
  "duration": 1628932534,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"toc\"}\n  (Session info: headless chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dLinux 4.18.0-20-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027tais\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.18.0-20-generic\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: /tmp/.com.google.Chrome.AwWiIY}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:41981}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 2486700839a7bf717db8958876fa4ca4\n*** Element info: {Using\u003did, value\u003dtoc}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat utils.WebDriverUtils.verifyElementAbsent(WebDriverUtils.java:9)\n\tat steps.WikipediaSearchSteps.assertInvalidSearch(WikipediaSearchSteps.java:54)\n\tat ✽.Then No results should be shown(WikipediaSearch.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 123140432,
  "status": "passed"
});
formatter.before({
  "duration": 12454144576,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Incorrect search with invalid term",
  "description": "",
  "id": "search-wikipedia;incorrect-search-with-invalid-term;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter search term \u0027Brasilll\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "No results should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Brasilll",
      "offset": 19
    }
  ],
  "location": "WikipediaSearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 192555983,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 4664776788,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSearchSteps.assertInvalidSearch()"
});
formatter.result({
  "duration": 111046325,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"toc\"}\n  (Session info: headless chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dLinux 4.18.0-20-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027tais\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.18.0-20-generic\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: /tmp/.com.google.Chrome.QFjYLR}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:34691}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: ac63ffc5e838b5d7f3753a702c56436e\n*** Element info: {Using\u003did, value\u003dtoc}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat utils.WebDriverUtils.verifyElementAbsent(WebDriverUtils.java:9)\n\tat steps.WikipediaSearchSteps.assertInvalidSearch(WikipediaSearchSteps.java:54)\n\tat ✽.Then No results should be shown(WikipediaSearch.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 134902330,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava/cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Iopenapp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Email as \"micorreo@ibermatica.com\" and Password as \"mipassword\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Iopenapp",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter Email as \"tiuyhgyiu\" and Password as \"mipassword\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Iopenapp",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter Email as \"\" and Password as \"mipassword\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Iopenapp",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter Email as \"\" and Password as \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Iopenapp",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I enter Email as \"micorreo@ibermatica.com\" and Password as \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.setup()"
});
formatter.result({
  "duration": 80238947750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "micorreo@ibermatica.com",
      "offset": 18
    },
    {
      "val": "mipassword",
      "offset": 60
    }
  ],
  "location": "cucumberJava.I_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 6266037070,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbesuccessful()"
});
formatter.result({
  "duration": 5970517690,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.setup()"
});
formatter.result({
  "duration": 16765323118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tiuyhgyiu",
      "offset": 18
    },
    {
      "val": "mipassword",
      "offset": 46
    }
  ],
  "location": "cucumberJava.I_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 5889588822,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 5967881917,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.setup()"
});
formatter.result({
  "duration": 17442526435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "mipassword",
      "offset": 37
    }
  ],
  "location": "cucumberJava.I_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 5885356396,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 5946275597,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.setup()"
});
formatter.result({
  "duration": 15389972786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "cucumberJava.I_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 5757838646,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 5954926815,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.setup()"
});
formatter.result({
  "duration": 16373955974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "micorreo@ibermatica.com",
      "offset": 18
    },
    {
      "val": "",
      "offset": 60
    }
  ],
  "location": "cucumberJava.I_enter_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 5994282197,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 625697224,
  "error_message": "java.lang.AssertionError: Incorrecto\n\tat org.junit.Assert.fail(Assert.java:93)\n\tat org.junit.Assert.assertTrue(Assert.java:43)\n\tat cucumberJava.cucumberJava.loginshouldbeunsuccessful(cucumberJava.java:108)\n\tat ✽.Then login should be unsuccessful(cucumberJava/cucumberJava.feature:33)\n",
  "status": "failed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Application.feature");
formatter.feature({
  "line": 1,
  "name": "Test CRM",
  "description": "",
  "id": "test-crm",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test CRM website",
  "description": "",
  "id": "test-crm;test-crm-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open CRM homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "landing page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "title of homepage is retrived",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "export is explored",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-crm;test-crm-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "test-crm;test-crm-website;;1"
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345"
      ],
      "line": 15,
      "id": "test-crm;test-crm-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Test CRM website",
  "description": "",
  "id": "test-crm;test-crm-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open CRM homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"groupautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "landing page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "title of homepage is retrived",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "export is explored",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.i_open_Chrome()"
});
formatter.result({
  "duration": 20104156500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation",
      "offset": 15
    },
    {
      "val": "Test@12345",
      "offset": 37
    }
  ],
  "location": "SmokeTest.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 2481695800,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.click_on_login()"
});
formatter.result({
  "duration": 11740871600,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.landing_page_should_be_displayed()"
});
formatter.result({
  "duration": 153300,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.title_is_retrieved()"
});
formatter.result({
  "duration": 3516116300,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.export()"
});
formatter.result({
  "duration": 2089891400,
  "status": "passed"
});
});
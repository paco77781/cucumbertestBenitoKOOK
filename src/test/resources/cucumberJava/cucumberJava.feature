Feature: CucumberJava

  Scenario:Login functionality exists

    Given Iopenapp

    When I enter Email as "micorreo@ibermatica.com" and Password as "mipassword"

    Then login should be successful

  Scenario:Login functionality no exists 1

    Given Iopenapp

    When I enter Email as "tiuyhgyiu" and Password as "mipassword"

    Then login should be unsuccessful

  Scenario:Login functionality no exists 2

    Given Iopenapp

    When I enter Email as "" and Password as "mipassword"

    Then login should be unsuccessful

  Scenario:Login functionality no exists 3

    Given Iopenapp

    When I enter Email as "" and Password as ""

    Then login should be unsuccessful






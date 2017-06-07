Feature: CucumberJava

  Scenario:Login functionality exists

    Given Iopenapp

    When I enter Email as "micorreo@ibermatica.com" and Password as "mipassword"

    Then login should be successful

    Given Iopenapp

    When I enter Email as "tiuyhgyiu" and Password as "mipassword"

    Then login should be unsuccessful

    Given Iopenapp

    When I enter Email as "" and Password as "mipassword"

    Then login should be unsuccessful

    Given Iopenapp

    When I enter Email as "" and Password as ""

    Then login should be unsuccessful

 #   Given Iopenapp

  #  When I enter Email as "micorreo@ibermatica.com" and Password as ""

  #  Then login should be unsuccessful




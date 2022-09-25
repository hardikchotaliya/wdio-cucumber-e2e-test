Feature: Google search and navigate to webdriverIO site

    Feature Description

    @demo 
    Scenario Outline: Search for google
        Given Google page is opened
        When search with <SearchText>
        Then Click on he first result
        Then URL shoudl match the <ExpectedURL>

        Examples:
            | TestID  | SearchText | ExpectedURL      |
            | NPTC 01 | WDIO       | www.pens.com/ie/ |

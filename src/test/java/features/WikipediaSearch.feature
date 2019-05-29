Feature: search Wikipedia
  As a user
  I would like to search for a term
  In order to learn about it's meaning

  Scenario Outline: Successful search
    Given Enter search term '<searchTerm>'
    When Do search
    Then Different content is shown for the user

    Examples:
      | searchTerm |
      | Java       |
      | Brasil     |

  Scenario Outline: Incorrect search with invalid term
    Given Enter search term '<searchTerm>'
    When Do search
    Then No results should be shown

    Examples:
      | searchTerm |
      | Javaaa     |
      | Brasilll   |

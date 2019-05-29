package steps;
import utils.WebDriverUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class WikipediaSearchSteps {

    private WebDriver driver;

    @Before
    public void before() {
        System.setProperty("webdriver.chrome.driver", "selenium/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        driver = new ChromeDriver(options);
        driver.navigate().to("http://en.wikipedia.org");
    }

    @After
    public void after() {
        driver.quit();
    }

    @Given("^Enter search term '(.*?)'$")
    public void searchFor(String searchTerm) {
        WebElement searchField = driver.findElement(By.id("searchInput"));
        searchField.sendKeys(searchTerm);
    }

    @When("^Do search$")
    public void clickSearchButton() {
        WebElement searchButton = driver.findElement(By.id("searchButton"));
        searchButton.click();
    }

    @Then("^Different content is shown for the user$")
    public void assertSingleResult() {
        WebElement contentTable = driver.findElement(By.id("toc"));
        Assert.assertTrue(contentTable.isDisplayed(), "The element is not being displayed");
    }

    @Then("^No results should be shown$")
    public void assertInvalidSearch() {
        Assert.assertFalse(WebDriverUtils.verifyElementAbsent(driver, "toc"), "The element is being displayed");

    }
}
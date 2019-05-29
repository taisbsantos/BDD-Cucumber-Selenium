package utils;
import java.util.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
public class WebDriverUtils {

    public static boolean verifyElementAbsent(WebDriver driver, String locator) throws NoSuchElementException{
        try {
            driver.findElement(By.id(locator));
            return true;

        } catch (NoSuchElementException e) {
            return false;
        }
    }
}

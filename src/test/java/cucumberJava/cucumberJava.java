package cucumberJava;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.When;
import cucumber.annotation.en.Then;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;


/**
 * Created by appium on 13/3/17.
 */
public class cucumberJava {

    //private RemoteWebDriver driver;

    //  public AppiumDriver<MobileElement driver;

    private AppiumDriver<WebElement> driver;

    private List<Integer> values;

    public WebDriverWait wait ;

    @Given("Iopenapp$")


    public void setup() throws MalformedURLException{
        DesiredCapabilities desiredCapabilities;

        desiredCapabilities = new DesiredCapabilities();

        //requiredcapabilities.setCapability("deviceName","IPad Air2");
        desiredCapabilities.setCapability("deviceName","iPad Air2");
        desiredCapabilities.setCapability("udid","07436359a6f86dce57b77a0b941b92d6975e3480");

        //desiredCapabilities.setCapability("udid","2E611BE3-7495-4BFE-A288-EB24BFC828CC");

        desiredCapabilities.setCapability("platformVersion","10.2.1");
        desiredCapabilities.setCapability("appiumVersion","v1.6.0");
        desiredCapabilities.setCapability("platformName","iOS");
        desiredCapabilities.setCapability("automationName","XCUITest");
        desiredCapabilities.setCapability("xcodeOrgId","DXKN9UUK5Q");
        desiredCapabilities.setCapability("xcodeSigningId","iPhone Developer");
        //desiredCapabilities.setCapability("automationName","UIautomation");
        //requiredcapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, MobilePlatform.iOS);
        //requiredcapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Ipad Air2 Device");
        desiredCapabilities.setCapability("app","/Users/appium/Documents/PruebaAppium.ipa");
        desiredCapabilities.setCapability("realDeviceLogger","/usr/local/lib/node_modules/deviceconsole/deviceconsole");

        //driver = new IOSDriver(new URL("http://0.0.0.0:4723/wd/hub"),desiredCapabilities);
        driver = new IOSDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"),desiredCapabilities);

        //driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub"),desiredCapabilities){};
        wait=new WebDriverWait(driver,60);
    }


    @When("^I enter Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")

    public void I_enter_Email_as_and_Password_as(String arg1, String arg2) {
        int contador=0;
        List<WebElement> elems = driver.findElements(By.className("UIATextField"));
        for (WebElement elem : elems) {
            contador++;
            if(contador==1)
                elem.sendKeys(arg1);
            else
                elem.sendKeys(arg2);
        }

        //WebElement cajaCorreo = driver.findElement(By.xpath("//UIAApplication[1]/UIAWindow[1]"));
        //cajaCorreo.sendKeys(arg2);

        WebElement button = driver.findElement(By.className("UIAButton"));
        button.click();
    }
    @Then("login should be successful$")
    public void loginshouldbesuccessful() {
        WebElement texto = driver.findElement(By.className("UIAAlert"));
        String texto2 = texto.getAttribute("label");
        System.out.print(texto2);
        Assert.assertTrue("Correcto", texto2.equalsIgnoreCase("Login OK"));
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
        }

        driver.quit();
    }

      @Then("login should be unsuccessful$")
    public void loginshouldbeunsuccessful() {
        WebElement texto = driver.findElement(By.className("UIAAlert"));
        String texto2 = texto.getAttribute("label");
        System.out.print(texto2);
        Assert.assertTrue("Incorrecto", texto2.equalsIgnoreCase("Login KO"));
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
        }

        driver.quit();
    }


}
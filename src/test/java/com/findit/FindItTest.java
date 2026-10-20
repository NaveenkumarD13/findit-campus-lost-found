package com.findit;

import java.time.Duration;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class FindItTest {

    WebDriver driver;
    WebDriverWait wait;

    @BeforeEach
    void setUp() {

        Logger.getLogger(
                "org.openqa.selenium.devtools.CdpVersionFinder"
        ).setLevel(Level.SEVERE);

        ChromeOptions options = new ChromeOptions();

        options.addArguments("--headless=new");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--window-size=1920,1080");

        driver = new ChromeDriver(options);

        wait = new WebDriverWait(
                driver,
                Duration.ofSeconds(10)
        );

        driver.get("http://127.0.0.1:5501/index.html");
    }

    @AfterEach
    void tearDown() {

        if (driver != null) {
            driver.quit();
        }
    }

    // TC01 - Verify landing page title
    @Test
    void testLandingPage() {

        assertEquals(
                "FindIt | Campus Lost & Found",
                driver.getTitle()
        );
    }

    // TC02 - Verify FindIt heading
    @Test
    void testFindItHeading() {

        assertTrue(
                driver.findElement(
                        By.tagName("h1")
                ).isDisplayed()
        );
    }

    // TC03 - Verify Report Lost navigation
    @Test
    void testReportLostNavigation() {

        driver.findElement(
                By.cssSelector("a[href='pages/ReportLost.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("pages/ReportLost.html")
        );
    }

    // TC04 - Verify Report Found navigation
    @Test
    void testReportFoundNavigation() {

        driver.findElement(
                By.cssSelector("a[href='pages/ReportFound.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("pages/ReportFound.html")
        );
    }

    // TC05 - Verify Login navigation
    @Test
    void testLoginNavigation() {

        driver.findElement(
                By.cssSelector("a[href='pages/Login.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("pages/Login.html")
        );
    }

    // TC06 - Verify Register navigation
    @Test
    void testRegisterNavigation() {

        driver.findElement(
                By.cssSelector("a[href='pages/Register.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("pages/Register.html")
        );
    }

    // TC07 - Verify Report Lost button
    @Test
    void testReportLostButton() {

        driver.findElement(
                By.cssSelector("a[href='pages/ReportLost.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("pages/ReportLost.html")
        );
    }

    // TC08 - Verify Report Found button
    @Test
    void testReportFoundButton() {

        driver.findElement(
                By.cssSelector("a[href='pages/ReportFound.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("pages/ReportFound.html")
        );
    }
}
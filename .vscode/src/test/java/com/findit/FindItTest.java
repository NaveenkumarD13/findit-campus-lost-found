package com.findit;

import java.time.Duration;

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


    // TC01
    @Test
    void testLandingPage() {

        assertEquals(
                "FindIt | Campus Lost & Found",
                driver.getTitle()
        );
    }


    // TC02
    @Test
    void testFindItHeading() {

        assertTrue(
                driver.findElement(
                        By.tagName("h1")
                ).isDisplayed()
        );
    }


    // TC03
    @Test
    void testReportLostNavigation() {

        driver.findElement(
                By.cssSelector("a[href='report-lost.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("report-lost.html")
        );
    }


    // TC04
    @Test
    void testReportFoundNavigation() {

        driver.findElement(
                By.cssSelector("a[href='report-found.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("report-found.html")
        );
    }


    // TC05
    @Test
    void testLoginNavigation() {

        driver.findElement(
                By.cssSelector("a[href='login.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("login.html")
        );
    }


    // TC06
    @Test
    void testRegisterNavigation() {

        driver.findElement(
                By.cssSelector("a[href='register.html']")
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("register.html")
        );
    }


    // TC07
    @Test
    void testReportLostButton() {

        driver.findElement(
                By.cssSelector(
                    "a[href='report-lost.html'].primary-btn"
                )
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("report-lost.html")
        );
    }


    // TC08
    @Test
    void testReportFoundButton() {

        driver.findElement(
                By.cssSelector(
                    "a[href='report-found.html'].secondary-btn"
                )
        ).click();

        assertTrue(
                driver.getCurrentUrl()
                        .contains("report-found.html")
        );
    }

}
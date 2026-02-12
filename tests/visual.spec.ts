import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  
  test('Homepage hero section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Scroll to top to ensure hero is visible
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    
    // Take screenshot of hero section
    const hero = page.locator('section').first();
    await expect(hero).toHaveScreenshot('hero-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('How I Think section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Scroll to section
    await page.locator('#thinking').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#thinking');
    await expect(section).toHaveScreenshot('how-i-think-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('What I Do section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#capability').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#capability');
    await expect(section).toHaveScreenshot('what-i-do-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Principles & Values section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#principles').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#principles');
    await expect(section).toHaveScreenshot('principles-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Now section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#now').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#now');
    await expect(section).toHaveScreenshot('now-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Blog section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#blog').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#blog');
    await expect(section).toHaveScreenshot('blog-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Influences section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#influences').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#influences');
    await expect(section).toHaveScreenshot('influences-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Full page screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
      maxDiffPixels: 200,
    });
  });

  test('Navigation menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const nav = page.locator('nav');
    await expect(nav).toHaveScreenshot('navigation.png', {
      maxDiffPixels: 50,
    });
  });
});

test.describe('Mobile-specific tests', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('Mobile menu button visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveScreenshot('mobile-menu-button.png');
  });

  test('Mobile menu expanded', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await menuButton.click();
    await page.waitForTimeout(300);
    
    const nav = page.locator('nav');
    await expect(nav).toHaveScreenshot('mobile-menu-expanded.png', {
      maxDiffPixels: 100,
    });
  });
});

import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  
  test('Homepage hero section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Scroll to top to ensure hero is visible
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    
    // Take screenshot of hero section (first section with bg-primary)
    const hero = page.locator('section.bg-primary').first();
    await expect(hero).toHaveScreenshot('hero-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Why I Care section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#why-i-care').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#why-i-care');
    await expect(section).toHaveScreenshot('why-i-care-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('How I Think section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#how-i-think').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#how-i-think');
    await expect(section).toHaveScreenshot('how-i-think-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Impact section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#impact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#impact');
    await expect(section).toHaveScreenshot('impact-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('How I Lead section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#how-i-lead').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#how-i-lead');
    await expect(section).toHaveScreenshot('how-i-lead-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Strategic Direction section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#strategic-direction').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#strategic-direction');
    await expect(section).toHaveScreenshot('strategic-direction-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Beyond Engineering section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#beyond-engineering').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#beyond-engineering');
    await expect(section).toHaveScreenshot('beyond-engineering-section.png', {
      maxDiffPixels: 100,
    });
  });

  test('Case Studies section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await page.locator('#case-studies').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const section = page.locator('#case-studies');
    await expect(section).toHaveScreenshot('case-studies-section.png', {
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

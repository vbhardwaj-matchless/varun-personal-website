# Visual Regression Testing

This project includes visual regression tests using Playwright to prevent layout issues across different screen sizes.

## Setup

The testing infrastructure is already configured. To use it:

### 1. Install browsers (one-time setup)
```bash
pnpm exec playwright install chromium
```

### 2. Generate baseline screenshots
```bash
pnpm run test:update
```

This creates baseline screenshots for:
- Mobile (390x844)
- Tablet (768x1024)
- Desktop (1280x720)

## Running Tests

### Run all tests
```bash
pnpm run test
```

### Run tests with UI mode (recommended)
```bash
pnpm run test:ui
```

### Update baseline screenshots (after intentional design changes)
```bash
pnpm run test:update
```

### View test report
```bash
pnpm run test:report
```

## What's Tested

The visual tests cover:
- ✅ Hero section
- ✅ How I Think section
- ✅ What I Do section
- ✅ Principles & Values section
- ✅ Now section
- ✅ Blog section
- ✅ Influences section
- ✅ Navigation menu
- ✅ Mobile menu (collapsed and expanded states)
- ✅ Full page screenshot

## How It Works

1. **Baseline Creation**: First run creates baseline screenshots
2. **Comparison**: Subsequent runs compare against baselines
3. **Failure Detection**: Tests fail if visual differences exceed threshold (100-200 pixels)
4. **Review**: Failed tests show visual diffs in the HTML report

## When to Update Baselines

Update baselines when you:
- Intentionally change the design
- Add new content that affects layout
- Update fonts or colors
- Modify spacing or sizing

## Preventing Layout Issues

This testing setup prevents issues like:
- Text cutoff on mobile devices
- Broken responsive layouts
- Diagonal clip-path cutting off headings
- Navigation menu display problems

## CI/CD Integration

GitHub Actions workflow is configured in `.github/workflows/visual-tests.yml`.

The workflow:
- Runs automatically on pull requests and pushes to main
- Installs dependencies and Playwright browsers
- Executes all visual tests
- Uploads test reports and screenshots if tests fail

**Viewing failed test results:**
1. Go to the Actions tab in GitHub
2. Click on the failed workflow run
3. Download the `playwright-report` artifact
4. Extract and open `index.html` to see visual diffs

## Troubleshooting

### Tests fail after design changes
This is expected! Review the visual diff in the test report:
```bash
pnpm run test:report
```

If the changes are intentional, update baselines:
```bash
pnpm run test:update
```

### Browser not found error
Install browsers:
```bash
pnpm exec playwright install chromium
```

### Dev server not starting
Make sure port 3000 is available or update `playwright.config.ts`

## Best Practices

1. **Run tests before commits**: Catch layout issues early
2. **Review diffs carefully**: Understand what changed and why
3. **Update baselines intentionally**: Don't blindly update without reviewing
4. **Test on real devices**: Visual tests complement but don't replace manual testing

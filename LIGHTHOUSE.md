# Lighthouse CI

Automated performance, accessibility, best practices, and SEO auditing using Lighthouse CI.

## What It Tests

Lighthouse CI runs audits for:
- **Performance**: Load time, time to interactive, largest contentful paint
- **Accessibility**: ARIA attributes, color contrast, semantic HTML
- **Best Practices**: HTTPS, console errors, deprecated APIs
- **SEO**: Meta tags, mobile friendliness, structured data

## Running Locally

### Build and test
```bash
pnpm run lighthouse:local
```

This will:
1. Build the production site
2. Start a preview server
3. Run Lighthouse audits (3 runs for consistency)
4. Display results with pass/fail assertions

## Score Thresholds

Current thresholds:
- Performance: 80+ (warning)
- Accessibility: 90+ (error if below)
- Best Practices: 80+ (warning)
- SEO: 80+ (warning)

## CI/CD Integration

GitHub Actions workflow runs automatically on:
- Pull requests to main
- Pushes to main

Results are uploaded as artifacts and can be viewed in the Actions tab.

## Viewing Results

### Local results
After running `pnpm run lighthouse:local`, results are saved in `.lighthouseci/` directory.

### CI results
1. Go to GitHub Actions tab
2. Click on the Lighthouse CI workflow run
3. Download the `lighthouse-results` artifact
4. Open the HTML reports in a browser

## Improving Scores

### Performance
- Optimize images (use WebP, lazy loading)
- Minimize JavaScript bundles
- Use code splitting
- Enable caching headers

### Accessibility
- Add alt text to all images
- Ensure sufficient color contrast
- Use semantic HTML elements
- Add ARIA labels where needed

### Best Practices
- Use HTTPS everywhere
- Fix console errors and warnings
- Update deprecated dependencies
- Enable security headers

### SEO
- Add meta descriptions
- Use proper heading hierarchy
- Implement structured data
- Ensure mobile responsiveness

## Configuration

Edit `lighthouserc.json` to:
- Change score thresholds
- Add/remove URLs to test
- Modify number of runs
- Configure upload targets

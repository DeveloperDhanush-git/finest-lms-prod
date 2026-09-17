const { test, expect } = require('@playwright/test');

test('student can login', async ({ page }) => {

    await page.goto('http://localhost:5173/api/auth/login');

    await page.getByPlaceholder('Enter your email').fill(
        'student@gmail.com'
    );

    await page.getByPlaceholder('Enter your password').fill(
        'Student@123'
    );

    await page.getByRole('button', {
        name: 'Sign In'
    }).click();

    await expect(page).toHaveURL("http://localhost:5173/");

});
# Playwright testing a web application form

### The scripts is using TypeCripts, testing eight sections of the web app. The main test file could be found under the tests folder, which is called WebFormTesting.Spec.ts

1. Form is submitted with required fields
         
```typescript
    test('Form is submitted with required fields', async ({ page }) => {
    let formSubmitted = false

    page.on('dialog', dialog => {
        dialog.accept()
        formSubmitted = true
    })

    await page.goto('FeedBackForm.html')

    await completeFields(page)

    await clickButton(page, "Submit")

    await expect(formSubmitted).toBeTruthy()

})
```
3. Form is submitted with required fields - form is cleared after submit
4. Form is NOT submitted without minimal fields
5. Form is NOT submitted if user selects NO on dialog
6. Form is completed - clear button clears inputs
7. Form is completed - clear button clears memory
8. Form is completed - clear button does not clear inputs if dialog rejected
9. Form is completed - save data button saves data


### There are four seperate functions created to make code more concise.





### The website could be locally hosted using the following command in this project folder
In order to start the site run:

`npm i`

`npm start`

open at http://localhost:5000

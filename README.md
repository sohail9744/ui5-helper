
# SAPUI5 Fiori Form Validation Handler

## Overview

The **SAPUI5 Fiori Form Validation Handler** is a reusable component designed to streamline form validation in SAPUI5 Fiori applications. This handler allows developers to define customizable validation rules for form fields, ensuring data integrity and enhancing the user experience.

## Features

- **Customizable Validation Rules**: Define specific validation criteria (e.g., required fields, maximum length, type checks) tailored to your application's needs.
- **Dynamic Error Messages**: Generate user-friendly error messages to guide users in correcting their input.
- **Integration with Models**: Seamlessly update relevant models with validation results for real-time feedback on input validity.
- **Support for Multiple Input Types**: Handle various input types (e.g., text, numbers) with complex validation scenarios.
- **Reusable Component**: Promote consistency in validation logic across different forms and applications.

## [Installation](https://github.com/sohail9744/ui5-helper/blob/main/CONTRIBUTING.MD)

Install `ui5-helper` as a development dependency using npm:

```bash
npm install ui5-helper -D
```
[OR]
```bash
npm install ui5-helper --save --dev
```

> :warning: **Tooling Compatibility**
The tool will work when you open the project terminal with the path set to the project root directory, or else it will not work!

cd /path/to/pmProject
user: pmProject $ npm run ui5-helper



```bash
npm run ui5-helper
```
## Output on your Terminal

```bash
? Please select an option: › - Use arrow-keys. Return to submit.
    create route
    Fragment Setup
>   form validation

✔ Please select an option: › form validation
✔ Do you want to use TypeScript? (y/n):  … y
Validation directory created at: /home/user/projects/formtesting/webapp/validation
File 'formvalidation.js' added successfully at: /home/user/projects/formtesting/webapp/validation/formValidation.ts

```
## How to use in Controller?

```bash
import { ui5FormValidation } from "formtesting/validation/formValidation"; // Import the ui5FormValidation function
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace formtesting.controller
 * 
 * The View1 controller handles the initialization of the view and form validation logic.
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    
    /**
     * Lifecycle method called when the controller is initialized.
     * Here we set up the initial data and models for the view.
     */
    public onInit(): void {
        // Initial data for form fields
        let modelData = {
            "empName": "", // Employee name field
            "empId": "",   // Employee ID field
            "empPhone": "" // Employee phone field
        };

        // Create a new JSON model to hold validation results
        // This model will store the state and error messages for each form field
        let validationModel = new JSONModel();
        this.getView()?.setModel(validationModel, "validModel"); // Set the validation model to the view

        // Create a new JSON model to hold form input data
        // This model will store the values entered by the user in the form fields
        let dataModel = new JSONModel(modelData);
        this.getView()?.setModel(dataModel, "dataModel"); // Set the data model to the view
    }

    /**
     * Event handler for the form submission.
     * Validates the form fields based on defined rules and updates the validation model accordingly.
     */
    protected onSubmit = () => {
        // Define validation rules for form fields
        let validationFields = [
            "empName|req|null|str|Employee name is required brother", // Validation rule for empName
            "empId|req|4|null", // Validation rule for empId (required, max length of 4)
            "empPhone|req|10|num" // Validation rule for empPhone (required, max length of 10, must be a number)
        ];

        // Call the ui5FormValidation function with the defined rules, model names, and the controller context
        let validationCheck = ui5FormValidation(validationFields, "validModel", "dataModel", this);
        // validationCheck will be true if all validations pass, false otherwise
    }
}

/**
 * Validation Model:
 * - The validation model ("validModel") is used to store the results of the validation checks.
 * - It holds the state of each field (e.g., "None", "Error") and corresponding error messages.
 * - This model should be bound to the UI elements (like input fields) to reflect validation states in the UI.

 * Data Model:
 * - The data model ("dataModel") is used to store the actual values entered by the user in the form fields.
 * - This model contains the initial state of the form fields and updates as the user types.
 * - It is essential for the validation process since the validation function checks the values stored here against the defined rules.

 * How Many Models Are Needed:
 * - You need **two models** to use the `ui5FormValidation` function:
 *   1. **Validation Model (validModel)**: For storing validation states and error messages.
 *   2. **Data Model (dataModel)**: For storing user input values.
 */

```
## How to bind with view an example

```bash
<mvc:View
    controllerName="formtesting.controller.View1"
    xmlns:mvc="sap.ui.core.mvc"
    displayBlock="true"
    xmlns="sap.m"
    xmlns:f="sap.ui.layout.form"
>
    <Page
        id="page"
        title="Employee Form"
    >
        <content>
            <f:SimpleForm
                id="employeeForm"
                layout="ResponsiveGridLayout"
                editable="true"
                class="sapUiSmallMargin"
            >
                <f:content>
                    <Label text="Employee Name" />
                    <Input
                        id="nameInput"
                        placeholder="Enter Name"
                        value="{dataModel>/empName}"
                        valueState="{validModel>/empNameValueState}"
                        valueStateText="{validModel>/empNameValueStateText}"
                    />
                    <Label text="Employee ID" />
                    <Input
                        id="employeeIdInput"
                        placeholder="Enter Employee ID"
                        value="{dataModel>/empId}"
                        valueState="{validModel>/empIdValueState}"
                        valueStateText="{validModel>/empIdValueStateText}"
                    />
                    <Label text="Phone Number" />
                    <Input
                        id="phoneInput"
                        placeholder="Enter Phone Number"
                        value="{dataModel>/empPhone}"
                        valueState="{validModel>/empPhoneValueState}"
                        valueStateText="{validModel>/empPhoneValueStateText}"
                    />
                    <Label />
                    <Button
                        text="Submit"
                        type="Emphasized"
                        press="onSubmit"
                    />
                </f:content>
            </f:SimpleForm>
        </content>
    </Page>
</mvc:View>
```
# Auto Generates SAPUI5 Routing and Fragment Setup
# Generating Routes
> Please check for above 2 thing on this airticle [README.MD](https://github.com/sohail9744/ui5-route-generator) file everything is step by step :) don't worry! you can do it
> :wave: This is a **community project** and there is no official support for this package! Feel free to use it, open issues, contribute, and help answering questions.
>  A utility npm package for generating routes, setting up fragments and Form Validation to make easy life of SAPUI5 Developers.

## Contribution

> Please check [CONTRIBUTING.MD](https://github.com/sohail9744/ui5-helper/blob/main/CONTRIBUTING.MD) file everything is step by step :) don't worry! you can do it
## 📢 Call for Community Support
> 🚀 This project relies on the #JavaScript and developer #community for support and contributions. As there is no official support for this package, we need your help to make it better! It's time to contribute! 💪

## License
This project is licensed under the MIT License - see the LICENSE file for details.

### Author
- Acknowledgements
- Built with ❤️ by [Sohail Khan](https://www.linkedin.com/in/sohail9744/)
- Maintainer: [Sohail Khan](https://www.linkedin.com/in/sohail9744/) + #Community
- Inspired by the need to simplify SAPUI5 Developer lifes

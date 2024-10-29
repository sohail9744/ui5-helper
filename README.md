# [Form Validation Handler - Youtube Video](https://www.youtube.com/watch?v=3VrgCTgC3Xc)
# [Auto Generate Routing + Fragment Setup - Youtube Video](https://youtu.be/aaQPJcG7MwY)


# SAPUI5 Fiori Form Validation Handler step by step guide.

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
import { ui5FormValidation } from "formtesting/validation/formValidation";

export default class View1 extends Controller {

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

        let dataModel = new JSONModel(modelData);
        this.getView()?.setModel(dataModel, "dataModel"); // Set the data model to the view
    }

    protected onSubmit = () => {
        // Define validation rules for form fields
        let validationFields = [
            "empName|req|50|str|Employee name is required brother", // Validation rule for empName
            "empId|req|4|null", // Validation rule for empId (required, max length of 4)
            "empPhone|req|10|num" // Validation rule for empPhone (required, max length of 10, must be a number)
        ];

        // Call the ui5FormValidation function with the defined rules, model names, and the controller context
        let validationCheck = ui5FormValidation(validationFields, "validModel", "dataModel", this);
        // validationCheck will be true if all validations pass, false otherwise
    }
}

```
## How to bind with Form an example

```bash

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
```

# Auto Generates SAPUI5 Routing and Fragment Setup

# [Auto Generate Routing + Fragment Setup - Youtube Video](https://youtu.be/aaQPJcG7MwY)

A utility npm package for generating routes and setting up fragments in SAPUI5 applications.

## Features

- Automatically generates SAPUI5 routes.
- Automatically generates Fragment for your projects and add a onOpenFragment() function in selected controller to open it ;)

## Output on your Terminal
```bash
npm run ui5-helper
```

```bash
? Please select an option: › - Use arrow-keys. Return to submit.
❯   create route
    Fragment Setup

? View & Controller Name? › View4
? Do you want to use TypeScript? (y/n):  › y

Controller file added successfully!!
View file added successfully!!
```

# Generating Fragment

```bash
npm run ui5-helper
```
## Output on your Terminal

```bash
? Please select an option: › - Use arrow-keys. Return to submit.
    create route
❯   Fragment Setup

? Please select a file: › `// List of controllers user need to select`
❯   App.controller.js
    View1.controller.js
    View3.controller.ts
    View4.controller.ts
    helper.controller.js
    wasim.controller.js

Fragment file added successfully!!
Fragment added successfully! Use the 'onOpenFragment()'
```

## 📢 Call for Community Support
> 🚀 This project relies on the #JavaScript and developer #community for support and contributions. As there is no official support for this package, we need your help to make it better! It's time to contribute! 💪

## Contributing
Contributions are welcome! Please read the Contribution Guidelines for details on how to contribute to this project. Whether it's reporting a bug, suggesting new features, or submitting a pull request, your input is invaluable.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

### Author
- Acknowledgements
- Built with ❤️ by [Sohail Khan](https://www.linkedin.com/in/sohail9744/)
- Maintainer: [Sohail Khan](https://www.linkedin.com/in/sohail9744/) + #Community
- Inspired by the need to simplify SAPUI5 project setup

const fs = require('fs');
const path = require('path');

// Define your ui5FormValidation function as a string
const ui5FormValidationJS = `/**
 * Validate the fields based on the provided rules and update the model states.
 * @param {string[]} validationFields - Array of validation rules (e.g., "empName|req|null|str").
 * @param {string} validModelName - Name of the model to store validation results (e.g., "validModel").
 * @param {string} dataModelName - Name of the data model holding field values (e.g., "dataModel").
 * @param {object} controller - Controller instance to access 'this'.
 * @returns {boolean} - Indicates whether the form is valid.
 */
function ui5FormValidation(validationFields, validModelName, dataModelName, controller) {
    const view = controller.getView();
    const validModel = view.getModel(validModelName);
    const dataModel = view.getModel(dataModelName);

    const fieldValues = dataModel.getData();
    const validationResults = { ...fieldValues };

    let isValid = true; // Track form validity

    validationFields.forEach(function(ruleString) {
        const [fieldName, required, maxLength, type, errorMessage] = ruleString.split("|");

        // Initialize ValueState and ValueStateText
        let fieldValueState = "None";
        let fieldValueStateText = "";

        const fieldValue = fieldValues[fieldName];

        // Perform validations based on rules
        if (required === "req" && (!fieldValue || fieldValue === "" || fieldValue === 0)) {
            fieldValueState = "Error";
            fieldValueStateText = errorMessage || "Required Field";
            isValid = false;
        }
        // Skip length validation if maxLength is "null"
        else if (maxLength !== "null" && fieldValue && fieldValue.toString().length > parseInt(maxLength)) {
            fieldValueState = "Error";
            fieldValueStateText = \`Max length for \${fieldName} is \${maxLength}\`;
            isValid = false;
        }
        // Skip type validation if type is "null"
        else if (type !== "null") {
            if (type === "num" && isNaN(Number(fieldValue))) {
                fieldValueState = "Error";
                fieldValueStateText = \`\${fieldName} must be a number\`;
                isValid = false;
            } else if (type === "str" && !/^[a-zA-Z\\s]*$/.test(fieldValue)) {
                fieldValueState = "Error";
                fieldValueStateText = \`\${fieldName} must contain only letters\`;
                isValid = false;
            }
        }

        // Store results with ValueState and ValueStateText suffixes
        validationResults[\`\${fieldName}ValueState\`] = fieldValueState;
        validationResults[\`\${fieldName}ValueStateText\`] = fieldValueStateText;
    });

    // Update the validModel with validation results
    validModel.setData(validationResults);

    return isValid;
}

// Export the validation function
module.exports = ui5FormValidation;
`;
const ui5FormValidationTS = `import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * Validate the fields based on the provided rules and update the model states.
 * @param validationFields - Array of validation rules (e.g., "empName|req|null|str").
 * @param validModelName - Name of the model to store validation results (e.g., "validModel").
 * @param dataModelName - Name of the data model holding field values (e.g., "dataModel").
 * @param controller - Controller instance to access models and the view.
 * @returns {boolean} - Indicates whether the form is valid.
 */
export function ui5FormValidation(
    validationFields: string[],
    validModelName: string,
    dataModelName: string,
    controller: Controller
): boolean {
    const view = controller.getView();
    const validModel = view?.getModel(validModelName) as JSONModel;
    const dataModel = view?.getModel(dataModelName) as JSONModel;

    const fieldValues = dataModel.getData() as Record<string, any>;
    const validationResults: Record<string, any> = { ...fieldValues };

    let isValid = true; // Track form validity

    validationFields.forEach((ruleString) => {
        const [fieldName, required, maxLength, type, errorMessage] = ruleString.split("|");

        // Initialize ValueState and ValueStateText
        let fieldValueState: string = "None";
        let fieldValueStateText: string = "";

        const fieldValue = fieldValues[fieldName];

        // Perform validations based on rules
        if (required === "req" && (!fieldValue || fieldValue === "" || fieldValue === 0)) {
            fieldValueState = "Error";
            fieldValueStateText = errorMessage || "Required Field";
            isValid = false;
        }
        // Skip length validation if maxLength is "null"
        else if (maxLength !== "null" && fieldValue && fieldValue.toString().length > parseInt(maxLength)) {
            fieldValueState = "Error";
            fieldValueStateText = \`Max length for \${fieldName} is \${maxLength}\`;
            isValid = false;
        }
        // Skip type validation if type is "null"
        else if (type !== "null") {
            if (type === "num" && isNaN(Number(fieldValue))) {
                fieldValueState = "Error";
                fieldValueStateText = \`\${fieldName} must be a number\`;
                isValid = false;
            } else if (type === "str" && !/^[a-zA-Z\\s]*$/.test(fieldValue)) {
                fieldValueState = "Error";
                fieldValueStateText = \`\${fieldName} must contain only letters\`;
                isValid = false;
            }   
        }

        // Store results with ValueState and ValueStateText suffixes
        validationResults[\`\${fieldName}ValueState\`] = fieldValueState;
        validationResults[\`\${fieldName}ValueStateText\`] = fieldValueStateText;
    });

    // Update the validModel with validation results
    validModel.setData(validationResults);

    return isValid;
}`;

module.exports = {
    ui5FormValidationJS,
    ui5FormValidationTS
};

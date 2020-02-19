/**
 *    Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 *
 * @NAPIVersion 2.x
 * @NScriptType ClientScript
 * @NModulescope SameAccount
 */

import {EntryPoints} from 'N/types';
import { OJETFolderValidationCSUsecase } from '../usecase/OJETFolderValidationCSUsecase';
import { OJETFolderValidationgateway } from '../gateway/OJETFolderValidationgateway';

let useCase: OJETFolderValidationCSUsecase;

function getUseCase() {
if (useCase === null) {
    useCase = new OJETFolderValidationCSUsecase({
        dependencies: {
            OrderGuideCSPopUpGateway: _createGateway(),
        },
    });
}
return useCase;
}

function _createGateway() {
return new OJETFolderValidationgateway({
    dependencies: {},
});
}
/**
 * pageInit
 * @param ctx
 */
export const pageInit: EntryPoints.Client.pageInit = (ctx: EntryPoints.Client.pageInitContext): void => {

};

/**
 * validateField
 * @param ctx
 */
export const validateField: EntryPoints.Client.validateField = (ctx: EntryPoints.Client.validateFieldContext): boolean =>  {
return true;
};

/**
 * filedChanged
 * @param ctx
 */
export const fieldChanged: EntryPoints.Client.fieldChanged = (ctx: EntryPoints.Client.fieldChangedContext): void =>  {
};

/**
 * lineInit
 * @param ctx
 */
export const lineInit: EntryPoints.Client.lineInit = (ctx: EntryPoints.Client.lineInitContext): void => {

};

/**
 * saveRecord
 * @param ctx
 */
export const saveRecord: EntryPoints.Client.saveRecord = (ctx: EntryPoints.Client.saveRecordContext): boolean => {

    return true;
};

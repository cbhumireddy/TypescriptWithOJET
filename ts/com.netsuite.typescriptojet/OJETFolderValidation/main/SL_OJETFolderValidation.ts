/**
 *    Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 *
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from "N/types";
import * as serverWidget from "N/ui/serverWidget";
import { Method } from 'N/http';

import { OJETFolderValidationUEUsecase } from '../usecase/OJETFolderValidationUEUsecase';
import { OJETFolderValidationgateway } from '../gateway/OJETFolderValidationgateway';

function _createUseCase() {
    return new OJETFolderValidationUEUsecase({
        dependencies: {
        OJETFolderValidationgateway: _createGateway(),
        },
    });
}

function _createGateway() {
    return new OJETFolderValidationgateway({
        dependencies: {},
    });
}

export let onRequest: EntryPoints.Suitelet.onRequest = (context: EntryPoints.Suitelet.onRequestContext) => {
    const request = context.request;
    const response = context.response;
    const useCase = _createUseCase();
    const form = serverWidget.createForm({
        title: 'Suitelet Title',
    });

    if (request.method === Method.GET) {
        response.writePage(form);
    }
};

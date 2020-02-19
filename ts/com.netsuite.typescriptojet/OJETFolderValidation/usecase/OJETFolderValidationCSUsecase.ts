import { OJETFolderValidationgateway } from '../gateway/OJETFolderValidationgateway';

export class OJETFolderValidationCSUsecase {

    public static _throwErrorWhenInvalidParameter(options: any) {
        if (!options) throw new Error('constants.ERROR_CONST.OPTIONS');
        if (!options.dependencies) throw new Error('constants.ERROR_CONST.DEPENDENCIES');
        if (!options.dependencies['OJETFolderValidationgateway'])
            throw new Error('_errors.TRUCK_MR_GATEWAY_IS_REQUIRED');
    }

    public dependencies: any;
    public gateway: OJETFolderValidationgateway;

    constructor(options: any) {
        this.dependencies = options.dependencies;
        this.gateway =  options.dependencies['OJETFolderValidationgateway'];
        OJETFolderValidationCSUsecase._throwErrorWhenInvalidParameter(options);
    }
}

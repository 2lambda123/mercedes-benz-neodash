export const extractAllParameterNames = (cypherQuery) => {
    // A regular expression pattern to match parameter names following '$'
    const pattern = /\$([A-Za-z_]\w*)/g;

    const parameterNames: string[] = [];
    let match: any;

    while ((match = pattern.exec(cypherQuery)) !== null) {
        parameterNames.push(match[1]);
    }

    return parameterNames;
}

export const checkParametersNameInGlobalParameter = (parameterNames: string[], globalParameterNames: any): boolean => {
    for (const key of parameterNames) {
        if (typeof globalParameterNames[key] === 'undefined' || globalParameterNames[key] === null || globalParameterNames[key] === '') {
            return true;
        }
    }
    return false;
}
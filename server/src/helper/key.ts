export function removeKeyNull(obj: any) {
    Object.keys(obj).forEach(key => {
        if (obj[key] === null || obj[key] === '') {
            delete obj[key];
        }
    });
    return obj
}

import { GlobalError } from "react-hook-form"

function createName(name: string) {
    const remainingName = name.slice(1)
    return name.substring(0, 1).toUpperCase() + remainingName;
}

function createAction(error: string | number | undefined) {
    switch (error) {
        case "required":
            return 'is required'
        case "pattern":
            return 'invalid'
        default:
            break;
    }
}

export function createMessageForm(name: string, error: Record<string, GlobalError> & GlobalError) {
    return error.message || `${createName(name)} ${createAction(error.type)}`
}
namespace StringLib {

    // ===== Enums =====
    export enum PadDirection {
        Start,
        End
    }

    export enum JoinSeparator {
        Comma = ",",
        Dash = "-",
        Space = " "
    }

    // ===== String Methods =====
    export function startsWith(str: string, prefix: string): boolean {
        return str.substr(0, prefix.length) == prefix
    }

    export function endsWith(str: string, suffix: string): boolean {
        return str.substr(str.length - suffix.length, suffix.length) == suffix
    }

    export function repeat(str: string, times: number): string {
        let result = ""
        for (let i = 0; i < times; i++) {
            result += str
        }
        return result
    }

    export function includes(str: string, search: string): boolean {
        return str.indexOf(search) != -1
    }

    export function pad(str: string, length: number, padChar: string = " ", dir: PadDirection = PadDirection.Start): string {
        let result = str
        while (result.length < length) {
            if (dir == PadDirection.Start) {
                result = padChar + result
            } else {
                result += padChar
            }
        }
        return result
    }

    // ===== Array Methods =====
    export function includesArray<T>(arr: T[], value: T): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) return true
        }
        return false
    }

    export function indexOfArray<T>(arr: T[], value: T): number {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) return i
        }
        return -1
    }

    export function lastIndexOfArray<T>(arr: T[], value: T): number {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == value) return i
        }
        return -1
    }

    export function joinArray<T>(arr: T[], sep: JoinSeparator = JoinSeparator.Comma): string {
        let result = ""
        for (let i = 0; i < arr.length; i++) {
            result += arr[i]
            if (i < arr.length - 1) result += sep
        }
        return result
    }

    export function reverseArray<T>(arr: T[]): T[] {
        let res: T[] = []
        for (let i = arr.length - 1; i >= 0; i--) {
            res.push(arr[i])
        }
        return res
    }
}

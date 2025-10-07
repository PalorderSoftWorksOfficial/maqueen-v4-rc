on.Start) {
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
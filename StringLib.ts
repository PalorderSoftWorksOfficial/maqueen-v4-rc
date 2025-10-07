/**
 * String and Array utility functions for Micro:bit
 */
//% color=#4B9CD3 icon="" block="StringLib"
namespace StringLib {

    // ===== Enums =====

    /**
     * Padding direction for strings.
     */
    //% blockNamespace=StringLib
    export enum PadDirection {
        //% block="start"
        Start,
        //% block="end"
        End
    }

    /**
     * Common join separators for arrays.
     */
    //% blockNamespace=StringLib
    export enum JoinSeparator {
        //% block=","
        Comma = ",",
        //% block="-"
        Dash = "-",
        //% block="space"
        Space = " "
    }

    // ===== String Methods =====

    /**
     * Check if a string starts with a specific prefix.
     * @param str the source string
     * @param prefix the prefix to check for
     */
    //% block="text %str starts with %prefix"
    export function startsWith(str: string, prefix: string): boolean {
        return str.substr(0, prefix.length) == prefix
    }

    /**
     * Check if a string ends with a specific suffix.
     * @param str the source string
     * @param suffix the suffix to check for
     */
    //% block="text %str ends with %suffix"
    export function endsWith(str: string, suffix: string): boolean {
        return str.substr(str.length - suffix.length, suffix.length) == suffix
    }

    /**
     * Repeat a string a specific number of times.
     * @param str the string to repeat
     * @param times number of times to repeat
     */
    //% block="repeat text %str %times times"
    export function repeat(str: string, times: number): string {
        let result = ""
        for (let i = 0; i < times; i++) {
            result += str
        }
        return result
    }

    /**
     * Check if a text contains another substring.
     * @param str the main string
     * @param search the substring to find
     */
    //% block="text %str contains %search"
    export function includes(str: string, search: string): boolean {
        return str.indexOf(search) >= 0
    }

    /**
     * Pad text to a specific total length with a chosen character.
     * @param str text to pad
     * @param length target total length
     * @param padChar character used for padding
     * @param dir direction to pad (start or end)
     */
    //% block="pad text %str to length %length with %padChar on %dir"
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

    /**
     * Check if an array includes a given value.
     * @param arr the array
     * @param value the value to find
     */
    //% block="array %arr includes %value"
    export function includesArray<T>(arr: T[], value: T): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) return true
        }
        return false
    }

    /**
     * Get the first index of a value in an array.
     * @param arr the array
     * @param value the value to find
     */
    //% block="index of %value in array %arr"
    export function indexOfArray<T>(arr: T[], value: T): number {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) return i
        }
        return -1
    }

    /**
     * Get the last index of a value in an array.
     * @param arr the array
     * @param value the value to find
     */
    //% block="last index of %value in array %arr"
    export function lastIndexOfArray<T>(arr: T[], value: T): number {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == value) return i
        }
        return -1
    }

    /**
     * Join all array items into a string with a separator.
     * @param arr the array
     * @param sep separator to use
     */
    //% block="join array %arr with %sep"
    export function joinArray<T>(arr: T[], sep: JoinSeparator = JoinSeparator.Comma): string {
        let result = ""
        for (let i = 0; i < arr.length; i++) {
            result += arr[i]
            if (i < arr.length - 1) result += sep
        }
        return result
    }

    /**
     * Reverse an array and return a new one.
     * @param arr the array to reverse
     */
    //% block="reverse array %arr"
    export function reverseArray<T>(arr: T[]): T[] {
        let res: T[] = []
        for (let i = arr.length - 1; i >= 0; i--) {
            res.push(arr[i])
        }
        return res
    }
}
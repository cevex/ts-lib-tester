// import deburr from 'lodash/deburr'; // Only function in bundle
import { deburr } from 'lodash'; // Only function in bundle

/**
 * This service is not use in demo-app => Should be filtered from final bundle
 */
export class StringService {

    // =====================================================================================
    //                      Compare
    // =====================================================================================

    /**
     * Check that the text match the given search criteria ignoring case
     *
     * @param textOrigin  - The text to check
     * @param searchCriteria - The searchCriteria to check if it appear in the original text
     * @return True if the searchCriteria match the text
     */
    public includesIgnoreCase(textOrigin: string, searchCriteria: string): boolean {
        if (searchCriteria) {
            return (textOrigin ? textOrigin.toLowerCase() : '').includes(searchCriteria.toLowerCase());
        } else {
            return true;
        }
    }

    /**
     * Check that the text match the given search criteria ignoring accents
     *
     * @param textOrigin  - The text to check
     * @param searchCriteria - The searchCriteria to check if it appear in the original text
     * @return True if the searchCriteria match the text
     */
    public includesIgnoreAccents(textOrigin: string, searchCriteria: string): boolean {
        if (searchCriteria) {
            return deburr(textOrigin).includes(deburr(searchCriteria));
        } else {
            return true;
        }
    }

    /**
     * Allow to compare string alphabetically
     */
    public compare(text1: string, text2: string) {
        if (!text1 || text1.trim() === '') {
            return !text2 ? 0 : -1;
        } else {
            if (!text2 || text2.trim() === '') {
                return 1;
            } else {
                return text1.localeCompare(text2);
            }
        }
    }
}

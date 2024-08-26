import lodash from "lodash";

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;

    // lodash.slice(items, startIndex);
    // lodash.take();
    // to chain methods above, convert items[] array into lodash wrapper:
    return lodash(items).slice(startIndex).take(pageSize).value();

}
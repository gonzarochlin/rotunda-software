function parseUrl(format, url){
    const parsedUrl = {};
    const [urlPath, queryString] = url.split('?');

    const urlSplitted = urlPath.split('/');
    const formatSplitted = format.split('/');

    if(urlSplitted.length !== formatSplitted.length){
        console.log('Url does not fit with the format provided');
    }

    formatSplitted.forEach((part, index) => {
        if(part.startsWith(':')){
            const partKey = part.slice(1); // Remove the ':'
            const urlValue = urlSplitted[index];
            parsedUrl[partKey] = isNaN(urlValue) ? urlValue : parseInt(urlValue, 10);
        }
    });

    if (!!queryString) {
        const queryStringSplitted = queryString.split('&');
        queryStringSplitted.forEach(urlParam => {
            const [key, value] = urlParam.split('=');
            parsedUrl[key] = isNaN(value) ? value : parseInt(value, 10);
        });
    }

    return parsedUrl;
}

// Examples
const format = '/:version/api/:collection/:id';
const url = '/6/api/listings/3?sort=desc&limit=10';

const parsedUrl = parseUrl(format, url);
console.log(parsedUrl);
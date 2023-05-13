
function setCookie(cookieName, cookieValue, daysToExpire, path, domain) {
	// TODO
	const expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + daysToExpire);
	let expires = 'expires=' + expirationDate.toUTCString();
	document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=${path || '/'}; domain=${domain || window.location.hostname}`;

	console.log(cookieValue);
}

function getCookieValue(cookieName) {
	// TODO
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split('; ');
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(cookieName) === 0) {
            result = element.substring(cookieName.length + 1);
        }
    });
    return result;
}

document.querySelector('.button').onclick = function () {
	console.log("getCookieValue: " + getCookieValue('Foo'));
	console.log("getCookieValue: " + getCookieValue('Goo'));
}

function deleteCookie(cookieName) {
	// TODO
    document.cookie = "Foo=''; max-age=0; expires=0";
	document.cookie = "Goo=''; max-age=0; expires=0";
	console.log(`Cookie has been deleted`);
}


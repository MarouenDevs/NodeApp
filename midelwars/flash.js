/**
 * Flash session msg
 * @param request
 * @param response
 * @param next
 */
module.exports = function (request, response, next) {

    if (request.session.flash) {

        response.locals.flash = request.session.flash;
        request.session.flash = undefined;
    }


    request.flash = function (key, value) {
        if (request.session.flash === undefined) {

            request.session.flash = {}
        }
        request.session.flash[key] = value;
    }

    next();

};
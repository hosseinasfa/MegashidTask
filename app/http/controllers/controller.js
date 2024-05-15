const autoBind = require('auto-bind');

module.exports = class controller {
    constructor() {
        autoBind(this);
    }

    slug(title) {
        return title.replace(/([^۰-۹آ-یa-z0-9]|-)+/g , "-")
    }
}
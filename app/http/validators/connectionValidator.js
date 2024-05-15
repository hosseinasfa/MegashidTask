const validator = require('./validator');
const { body, validationResult } = require('express-validator');
const Connection = require('app/models/connection');

class connectionValidator extends validator {
    handle() {
        return [
            body('name')
            .notEmpty().withMessage('فیلد نام نمی تواند خالی باشد')
            .isLength({ min : 3}).withMessage(' عنوان نمی تواند کمتر از 3 کاراکتر باشد')
            .custom(async (value , {req}) => {
                if(req.query._method === 'put') {
                    let connection = await Connection.findById(req.params.id);
                    if(connection.slug === value) return;
                }
                let connection = await Connection.findOne({ slug : this.slug(value) });
                if(connection) {
                    throw new Error('چنین مقداری با این عنوان قبلا ثبت شده است')
                }
            }),
            body('value')
            .isNumeric().withMessage('فیلد مقدار باید عدد باشد'),
            (req, res, next) => {
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
              }
              next();
            }
          ];
    
    }

    slug(title) {
        return title.replace(/([^۰-۹آ-یa-z0-9]|-)+/g , "-")
    }

}

module.exports = new connectionValidator();

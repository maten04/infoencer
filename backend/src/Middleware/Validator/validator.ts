import MyError from "../Errors/MyError";

const Validators = require("../../Models/Validations/validators");

export const validateJoi = (validator) => {
    if (!Validators.hasOwnProperty(validator))
        throw new MyError({
            code: 404,
            message: `'${validator}' validator is not exist`,
        });

    return async function (req, _res, next) {
        const validated = await Validators[validator].validateAsync(req.body);
        req.body = validated;
        next();
    };
};

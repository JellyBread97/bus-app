import Joi from "joi"

const getMany = {
  query: Joi.object().keys({
    query: Joi.string(),
  }),
}

const getSome = {
  query: Joi.object().keys({
    cities: Joi.string(),
  }),
}

export const cityValidation = {
  getMany,
  getSome,
}

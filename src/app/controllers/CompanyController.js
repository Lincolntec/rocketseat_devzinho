import * as Yup from 'yup';

import Company from '../models/Company';
// import File from '../models/File';

class CompanyController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const CompanyExists = await Company.findOne({
      where: { email: req.body.email },
    });

    if (CompanyExists) {
      return res.status(400).json({ error: 'Company Already Exist' });
    }

    const { id, name, email } = await Company.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async findAll(req, res) {
    const comp = await Company.findAll({
      attributes: ['id', 'name', 'email'],
    });

    return res.json(comp);
  }
}

export default new CompanyController();

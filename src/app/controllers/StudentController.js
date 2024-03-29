import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      // password: Yup.string()
      //   .required()
      //   .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!!!' });
    }

    const StudentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (StudentExists) {
      return res.status(400).json({ error: 'Student Already Exist!!!' });
    }

    const { id, name, email } = await Student.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async findAll(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'email', 'school', 'score', 'age'],
    });
    // console.log({ name });
    return res.json(students);
  }
}

export default new StudentController();

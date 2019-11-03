import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll();
    return res.json(plans);
  }

  async store(req, res) {
    const { id, title, duration, price } = await Plan.create(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async update(req, res) {
    const { title, duration, price } = req.body;
    try {
      const plan = await Plan.update(
        { title, duration, price },
        { where: { id: req.params.id } }
      );
      return res.json(plan);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async delete(req, res) {
    const plan = await Plan.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(plan);
  }
}

export default new PlanController();

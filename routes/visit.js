const Employee = require('../models/Employee');
const Visit = require('../models/Visits');

const {Router} = require("express");
const router = Router();
const emitter = require('../utils/emitter/eventEmitter');

/* Post visit data */
router.post('/', async (req, res, next) => {
  const {body} = req;
  try {
    const employee = await Employee.findOne({cardNumber: body.cardNumber});
    if (!employee) return res.status(400).json({ allow: false, message: 'Card numbers do not exist' });

    const serialiseEmployee = JSON.parse(JSON.stringify(employee));

    await (new Visit({employee: employee._id, date: Date.now()})).save();

    emitter.emit('visit', serialiseEmployee);
    return res.json({ allow : true });
  } catch (e) {
    console.log(e);
    return res.status(500).json({message: e.message});
  }
});

module.exports = router;

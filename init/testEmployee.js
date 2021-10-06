const Employee = require('../models/Employee');

const initTestEmployee = async () => {
    const data = {
        fullName: 'Test Test Test',
        photo: `http://${process.env.IP || 'localhost'}:${process.env.PORT || '3000'}/images/test.png`,
        cardNumber: '1A2B3C4D',
    };

    try {
        const tryEmployee = await Employee.findOne({fullName: data.fullName});
        if (tryEmployee) return ;
        const employee = new Employee(data);
        await employee.save();
    } catch (e) {
        console.log(e)
    }

}


module.exports = initTestEmployee;

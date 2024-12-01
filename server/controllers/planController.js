const db = require('../config/db');

exports.getPlans = (req, res) => {
    const { mentee_id } = req.params;
    const sql = 'SELECT cp.*, c.course_name FROM course_plans cp JOIN courses c ON cp.course_id = c.id WHERE cp.mentee_id = ?';
    db.query(sql, [mentee_id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            res.json(results);
        }
    });
};

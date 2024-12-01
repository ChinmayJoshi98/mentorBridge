const db = require('../config/db');

exports.getRecommendations = (req, res) => {
    const { mentee_id } = req.params;
    const sql = `
        SELECT r.*, c.course_name 
        FROM recommendations r 
        JOIN courses c ON r.course_id = c.id 
        WHERE r.mentee_id = ?`;

    db.query(sql, [mentee_id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            res.json(results);
        }
    });
};

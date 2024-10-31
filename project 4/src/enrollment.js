const Enrollment = sequelize.define('Enrollment', {
    studentId: { type: Sequelize.INTEGER, references: { model: User, key: 'id' } },
    courseId: { type: Sequelize.INTEGER, references: { model: Course, key: 'id' } }
});

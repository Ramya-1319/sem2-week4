const Course = sequelize.define('Course', {
    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.TEXT },
    instructorId: { type: Sequelize.INTEGER, references: { model: User, key: 'id' } }
});

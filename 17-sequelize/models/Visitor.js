// visitor 모델 정의

const Visitor = (Sequelize, DataTypes) => {
  // Sequelize: models/index.js에서 sequelize
  // DataTypes: models/index.js에서 sequelize
  const model = Sequelize.define(
    "visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        //
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", //실제 db 테이블명
      freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
      timestamps: false,
    }
  );

  return model;
};

module.exports = Visitor;

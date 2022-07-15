module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      moduleName: {
        type: String,
        unique: true,
        index: true,
        required: true
      },
      tableName:{
        type: String,
        unique: true,
        index: true,
        required: true
      },
      description: String,
      customFields: [
        {
          fieldName: String,
          fieldLabel: String,
          fieldType:String,
          fieldIndex:String,
          fieldValidation:String,
          isDefault: String,
          isVisible: String,
          isRequired: String
        }
      ],
      databaseFields: [
        {
          fieldName: String,
          fieldType:String
        }
      ]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Modules = mongoose.model("modules", schema);
  return Modules;
};
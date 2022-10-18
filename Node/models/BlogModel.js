import db from "../database/db";
import { DataType, DataTypes } from "sequelize";

const BlogModel = db.define("blogs", {
  title: {type: DataTypes.STRING},
  content: {type: DataTypes.STRING},

})

export default BlogModel;

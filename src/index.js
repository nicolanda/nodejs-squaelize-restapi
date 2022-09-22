import app from "./app.js";
import { sequelize } from "./database/database.js";

/* importar al inicio prueba de creación de tablas
  ? import './models/Project.js';
  ? import './models/Task.js';
  ! eliminar despues de la prueba
*/

const PORT = process.env.PORT || 4000;

const main = async () => {
  try {
    await sequelize.sync({ force: !1 });
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();

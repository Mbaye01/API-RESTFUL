import db from '../config/db.js';

class Recipe {
  static async getAllRecipes() {
    const [results] = await db.query('SELECT * FROM recipes');
    return results;
  }

  static async getRecipeById(id) {
    const [results] = await db.query('SELECT * FROM recipes WHERE id = ?', [
      id,
    ]);

    return results.length > 0 ? results[0] : null;
  }

  static async createRecipe(id, title, ingredients, type) {
    const [result] = await db.query(
      'INSERT INTO recipes (id, title, ingredients, type) VALUES (?, ?, ?, ?)',
      [id, title, ingredients, type]
    );
    return result.insertId;
  }

  static async updateRecipe(id, title, ingredients, type) {
    const [result] = await db.query(
      'UPDATE recipes SET title = ?, ingredients = ?, type = ? WHERE id = ?',
      [title, ingredients, type, id]
    );
    return result.affectedRows;
  }

  static async deleteRecipe(id) {
    const [result] = await db.query('DELETE FROM recipes WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Recipe;

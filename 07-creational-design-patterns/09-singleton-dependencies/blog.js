import { db } from "./db.js";

export class Blog {
  initialize() {
    const initQuery = `CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    return db.exec(initQuery);
  }

  createPost(id, title, content, createdAt) {
    return db.exec(
      "INSERT INTO posts VALUES (?, ?, ?, ?)",
      id,
      title,
      content,
      createdAt,
    );
  }

  getAllPosts() {
    return db.exec("SELECT * FROM posts ORDER BY created_at DESC");
  }
}

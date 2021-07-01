const data = require("./data");

class DatabaseConnection {
  constructor(server) {
    this.server = server;
  }

  /**
   * Loads all data.
   * @returns {Promise<{portfolios, positions}>}
   */
  load() {
    console.log('Database: loaded');
    return Promise.resolve(data);
  }
}

/**
 * A mock database client that simulates getting data from a database and a slow initial connection.
 */
class DatabaseClient {
  connect(server) {
    return new Promise((resolve, reject) => {
      if (server === null) {
        reject(new Error("No server specified"));
      }
      setTimeout(
        () => {
          console.log('Database: connected');
          resolve(new DatabaseConnection(server));
        },
        2000);
    });
  }
}

module.exports = new DatabaseClient();
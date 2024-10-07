import { Database } from "bun:sqlite";

// Initialize the database
const db = Database.open("./keyShares.db");
db.run(`CREATE TABLE IF NOT EXISTS keyShares (email TEXT PRIMARY KEY, keyShare TEXT)`);

// Function to get a key share from the database
const getKeyShareInDB = (email: string): string => {
  const stmt = db.query("SELECT keyShare FROM keyShares WHERE email = ?");
  const result = stmt.get(email) as { keyShare: string } | undefined;
  return result ? result.keyShare : "";
};

// Function to set a key share in the database
const setKeyShareInDB = (email: string, keyShare: string) => {
  const stmt = db.query("INSERT OR REPLACE INTO keyShares (email, keyShare) VALUES (?, ?)");
  stmt.run(email, keyShare);
};

export { getKeyShareInDB, setKeyShareInDB };

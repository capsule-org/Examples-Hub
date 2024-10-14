import sqlite3 from "sqlite3";

sqlite3.verbose();

const db = new sqlite3.Database("./keyShares.db", (err) => {
  if (err) {
    console.error("Could not open database:", err.message);
  }
});

function runAsync(sql: string, params?: any[]): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    db.run(sql, params || [], function (err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function getAsync<T>(sql: string, params?: any[]): Promise<T | undefined> {
  return new Promise<T | undefined>((resolve, reject) => {
    db.get(sql, params || [], function (err: Error | null, row: T) {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

let dbInitialized = false;

async function initializeDB(): Promise<void> {
  if (!dbInitialized) {
    await runAsync(`CREATE TABLE IF NOT EXISTS keyShares (email TEXT PRIMARY KEY, keyShare TEXT)`);
    dbInitialized = true;
  }
}

export async function getKeyShareInDB(email: string): Promise<string> {
  await initializeDB();
  console.log("Email:", email);
  const result = await getAsync<{ keyShare: string }>("SELECT keyShare FROM keyShares WHERE email = ?", [email]);
  console.log("Result:", result?.keyShare);
  return result ? result.keyShare : "";
}

export async function setKeyShareInDB(email: string, keyShare: string): Promise<void> {
  await initializeDB();
  await runAsync("INSERT OR REPLACE INTO keyShares (email, keyShare) VALUES (?, ?)", [email, keyShare]);
}

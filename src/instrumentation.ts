import client from "@/lib/mongodb";
import { userDoc } from "@/lib/types";
import bcrypt from "bcryptjs";

async function initDb() {
  let adminUsername = process.env.ADMIN_USER;
  let adminPassword = process.env.ADMIN_PASSWORD;
  let db = client.db("rusec");

  let currentAdmins = await db
    .collection<userDoc>("users")
    .find({ admin: true })
    .toArray();
  let currentAdminsStr = currentAdmins.reduce((prev, admin) => {
    return `${admin.username} ${prev}`;
  }, "");
  console.log(`Current Admins: ${currentAdminsStr}`);

  if (!adminUsername || !adminPassword) {
    console.warn(
      `No Admin User or Password Set, Please set Admin Environment Vars`,
    );
    return;
  }

  console.log(`Initalizing Database with admin user`);
  let user = await db
    .collection("users")
    .findOne<userDoc>({ username: adminUsername });

  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(adminPassword, salt);
  if (!hash) {
    console.log(`Error hashing Database`);
  }

  if (user) {
    await db
      .collection<userDoc>("users")
      .updateOne(
        { username: adminUsername },
        { $set: { password_hash: hash } },
      );
    console.log(`User Updated!`);
    return;
  }
  // if there isnt a user create one

  await db.collection<userDoc>("users").insertOne({
    admin: true,
    username: adminUsername,
    password_hash: hash,
  });
  console.log(`Admin User added!`);
}

export async function register() {
  await initDb();
}

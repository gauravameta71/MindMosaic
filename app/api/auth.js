import { iron } from "@hapi/iron";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Replace this with your actual authentication logic
    if (username === "admin" && password === "password") {
      const user = { username, isAuthenticated: true };

      // Seal the user object with a password
      const sealedData = await iron.seal(
        user,
        process.env.ENCRYPTION_SECRET,
        iron.defaults
      );

      // Set the sealed data in the session cookie
      res.setHeader(
        "Set-Cookie",
        `session=${sealedData}; Path=/; HttpOnly; SameSite=Strict; Secure`
      );

      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else if (req.method === "DELETE") {
    // Clear the session cookie
    res.setHeader(
      "Set-Cookie",
      `session=deleted; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    );
    res.status(200).json({ message: "Logout successful" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

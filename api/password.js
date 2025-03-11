// api/password.js

export default function handler(req, res) {
   
    const correctPassword = "your-strong-password"; 
  
    if (req.method === "POST") {
      const { password } = req.body;
  
      if (password === correctPassword) {
        res.status(200).json({ message: "Authenticated!" });
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  
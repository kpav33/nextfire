// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Used for creating backend API to bundle JS code that won't be included in your client side application

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

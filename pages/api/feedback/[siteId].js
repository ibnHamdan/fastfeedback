import { getAllFeedback } from "@/lib/db-admin";

export default async (req, res) => {
  console.log(req.query);
  const siteId = req.query.siteId;

  const { feedback, error } = await getAllFeedback(siteId);

  if (error) {
    res.status(500).json({ error: result.error });
  }

  res.status(200).json({ feedback });
};

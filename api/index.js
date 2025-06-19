module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  try {
    const body = req.body;

    if (!body || typeof body.data !== 'string') {
      return res.status(400).json({ error: "Invalid input. Expecting JSON with 'data' as a string." });
    }

    const sorted = body.data.split('').sort();
    return res.status(200).json({ word: sorted });
  } catch (error) {
    return res.status(500).json({ error: 'Server error', detail: error.message });
  }
};

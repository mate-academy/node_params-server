function normalizeUrl(originalUrl) {
  try {
    const parsedUrl = new URL(`http://${originalUrl}`);

    return parsedUrl.toString();
  } catch (error) {
    return '';
  }
}

module.exports = { normalizeUrl };

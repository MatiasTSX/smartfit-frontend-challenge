export default async function api() {
  const response = await fetch(
    "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
  );

  const data = await response.json();

  return data;
}

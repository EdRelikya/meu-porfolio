export async function getGithubProjects() {
  const response = await fetch(
    "https://api.github.com/users/EdRelikya/repos"
  );

  const data = await response.json();

  return data;
}
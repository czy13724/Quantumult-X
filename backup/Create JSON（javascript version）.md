const axios = require('axios');
const fs = require('fs');

const gistId = 'YourGistId';
const githubToken = 'YourGitHubToken';
const owner = 'YourGitHubUsername';
const repo = 'YourRepoName';
const branch = 'main'; // 或者使用其他分支

// GitHub API endpoint to get the contents of a Gist
const gistApiUrl = `https://api.github.com/gists/${gistId}`;

// GitHub API endpoint to get the contents of a repository
const repoApiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;

// Function to fetch Gist contents using GitHub Token
async function fetchGistContents() {
  try {
    const response = await axios.get(gistApiUrl, {
      headers: {
        Authorization: `Bearer ${githubToken}`
      }
    });

    const gistFiles = Object.values(response.data.files);

    // Create tasks array based on the Gist contents
    const tasks = gistFiles.map(file => ({
      config: {
        schedule: "YourGeneratedCronExpression",
        url: file.raw_url,
        tag: `Tag for ${file.filename}`,
        img_url: "Image URL",
        enabled: true,
      },
      addons: null
    }));

    return tasks;
  } catch (error) {
    console.error('Error fetching Gist contents:', error.message);
    return [];
  }
}

// Function to fetch repository contents using GitHub Token
async function fetchRepoContents() {
  try {
    const response = await axios.get(repoApiUrl, {
      headers: {
        Authorization: `Bearer ${githubToken}`
      },
      params: {
        ref: branch
      }
    });

    const jsFiles = response.data.filter(item => item.type === 'file' && item.name.endsWith('.js'));

    // Create tasks array based on the repository contents
    const tasks = jsFiles.map(file => ({
      config: {
        schedule: "YourGeneratedCronExpression",
        url: `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file.path}`,
        tag: `Tag for ${file.name}`,
        img_url: "Image URL",
        enabled: true,
      },
      addons: null
    }));

    return tasks;
  } catch (error) {
    console.error('Error fetching repository contents:', error.message);
    return [];
  }
}

// Function to generate JSON file
async function generateJsonFile() {
  const gistTasks = await fetchGistContents();
  const repoTasks = await fetchRepoContents();

  const allTasks = [...gistTasks, ...repoTasks];

  // Create JSON object
  const jsonData = {
    name: "Levi",
    description: "levi的自用任务仓库 by levi。请勿分享，低调使用。如有侵权请联系tg @PMLevibot删除。",
    task: allTasks
  };

  // Write JSON to file
  const jsonString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync('generated-config.json', jsonString);
  console.log('JSON file generated successfully.');
}

// Call the function
generateJsonFile();


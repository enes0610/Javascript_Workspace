document.getElementById('fetchReposBtn').addEventListener('click', fetchUserRepos);

function fetchUserRepos() {
    const username = document.getElementById('usernameInput').value;
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Kullanıcı bulunamadı');
            }
            return response.json();
        })
        .then(repos => {
            // Her bir repo için branch sayısını almak
            const repoPromises = repos.map(repo => {
                return fetch(repo.branches_url.replace('{/branch}', ''))
                    .then(branchResponse => branchResponse.json())
                    .then(branches => {
                        repo.branchCount = branches.length; // Branch sayısını ekle
                        return repo;
                    });
            });
            return Promise.all(repoPromises);
        })
        .then(repos => {
            displayRepos(repos);
        })
        .catch(error => {
            document.getElementById('reposInfo').innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}

function displayRepos(repos) {
    const reposInfo = document.getElementById('reposInfo');
    reposInfo.innerHTML = '';

    repos.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.className = 'repo';
        repoDiv.innerHTML = `
            <h3>${repo.name}</h3>
            <p><strong>Açıklama:</strong> ${repo.description || 'Açıklama yok.'}</p>
            <p><strong>Branch Sayısı:</strong> ${repo.branchCount}</p>
            <button onclick="window.open('${repo.html_url}', '_blank')">Repo Sayfasına Git</button>
        `;
        reposInfo.appendChild(repoDiv);
    });
}
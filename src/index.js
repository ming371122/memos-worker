<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/marked/15.0.12/marked.min.js'></script>
	<title>Shared Notes</title>
	<link id='hljs-light-theme' rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css'>
	<link id='hljs-dark-theme' rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css' disabled>
	<link rel='icon' type='image/png' href='/favicon.png'>
</head>
<style>
  :root {
	--bg-color: #f4f7f9;
	--surface-color: #ffffff;
	--primary-color: #367cff;
	--text-color: #333;
	--text-secondary: #667;
	--border-color: #e2e8f0;
	--border-radius-base: 6px;
	--font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
	--accent-color: #38b2ac;
	--accent-hover: #2c918b;
	--danger-color: #f56565;
  }
  html[data-theme='dark'] {
	--bg-color: #0a1222;
	--surface-color: #151f31;
	--text-color: #e2e8f0;
	--text-secondary: #a0aec0;
	--border-color: #4a5568;
	--danger-color: #f56565;
  }

  body {
	font-family: var(--font-family);
	color: var(--text-color);
	margin: 0;
	padding: 2rem 1rem;
	line-height: 1.6;
	background-color: var(--bg-color);
	min-height: 100vh;
	box-sizing: border-box;
  }

  .wrapper {
	max-width: 732px;
	margin: 0 auto;
  }

  header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
	color: var(--text-color);
  }

  header h3 {
	margin: 0;
	font-size: 1.5rem;
  }

  header h3 a {
	color: inherit;
	text-decoration: none;
  }

  .icon-btn {
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	width: 36px;
	height: 36px;
	border-radius: 50%;
	color: var(--text-secondary);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all .2s ease;
  }

  .icon-btn:hover {
	background-color: rgba(127, 127, 127, 0.2);
	color: var(--text-color);
  }

  /* Note styles */
  .note {
	background: var(--surface-color);
	border: 1px solid var(--border-color);
	border-radius: .5rem;
	padding: .5rem 1rem;
	margin-bottom: .5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	box-sizing: border-box;
  }

  .note:hover {
	box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }

  .notes-list {
	margin-top: 1rem;
  }

  .note-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: .5rem;
	padding-bottom: 0rem;
  }

  .note-meta {
	font-size: 0.8rem;
	color: var(--text-secondary);
  }

  .note-content {
	word-wrap: break-word;
	font-size: 1rem;
	margin-bottom: 0.5rem;
  }

  .note-content a {
	color: var(--primary-color);
	text-decoration: none;
	border-bottom: 1px solid transparent;
	transition: border-color 0.2s;
  }

  .note-content a:hover {
	border-bottom-color: var(--primary-color);
  }

  .note-content pre {
	padding: 0.5rem;
	border-radius: 6px;
	overflow-x: auto;
	background-color: rgba(0,0,0,0.05);
	font-size: 0.8rem;
	margin: 0.5rem 0;
  }

  html[data-theme='dark'] .note-content pre {
	background-color: rgba(0,0,0,0.2);
  }

  .note-content pre code {
	background: none;
	padding: 0;
  }

  .note-content table {
	width: 100%;
	border-collapse: collapse;
	margin: 0.5em 0;
	border: 1px solid var(--border-color);
  }

  .note-content th, .note-content td {
	padding: 5px 8px;
	border: 1px solid var(--border-color);
	text-align: left;
  }

  .note-content thead th {
	background-color: rgba(0,0,0,0.05);
  }

  /* Attachments styles */
  .attachments-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 1rem;
	margin-top: 0.5rem;
	padding: 0.75rem;
  }

  .attachment-img {
	position: relative;
  }

  .attachment-img img {
	max-width: 100%;
	display: block;
	transition: transform 0.3s ease;
	border-radius: var(--border-radius-base);
  }

  .attachment-link {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #f7fafc;
	padding: 0.25rem 0.75rem;
	border-radius: var(--border-radius-base);
	color: var(--text-color);
	text-decoration: none;
	font-size: 1rem;
	transition: background-color 0.2s;
	border: 1px solid var(--border-color);
  }

  .attachment-link:hover {
	background-color: #edf2f7;
  }

  .attachment-link .file-name {
	word-break: break-all;
	font-weight: 500;
  }

  .attachment-link .file-size {
	color: var(--text-secondary);
	font-size: 0.8rem;
  }

  html[data-theme='dark'] .attachment-link {
	background-color: rgba(74, 85, 104, 0.5);
	color: #e2e8f0;
	border-color: #718096;
  }

  html[data-theme='dark'] .attachment-link:hover {
	background-color: rgba(45, 55, 72, 0.7);
  }

  /* Share indicator styles */
  .note-share-indicator {
	font-size: 0.75rem;
	color: var(--primary-color);
	font-weight: 500;
  }

  /* Loader styles */
  #loader {
	text-align: center;
	color: var(--text-secondary);
	padding: 3rem 0;
  }

  .spinner {
	width: 40px;
	height: 40px;
	border: 4px solid var(--border-color);
	border-top-color: var(--primary-color);
	border-radius: 50%;
	animation: spin 1s linear infinite;
	margin: 0 auto;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  /* Empty state styles */
  .empty-state {
	text-align: center;
	padding: 4rem 0;
	color: var(--text-secondary);
  }

  /* Debug info styles */
  pre {
	background-color: #f0f0f0;
	padding: 1rem;
	border-radius: 6px;
	overflow: auto;
	max-height: 300px;
	text-align: left;
	font-size: 0.8rem;
  }

  html[data-theme='dark'] pre {
	background-color: rgba(0, 0, 0, 0.2);
	color: var(--text-color);
  }
</style>
<body>

<div class="wrapper">
	<header>
		<h3><a href='https://github.com/souvenp/memos-worker' target="_blank">MEMOS</a> - Shared Notes</h3>
		<button type='button' id='theme-toggle-btn' class='icon-btn' title='Toggle Theme'></button>
	</header>
	<main id="main-content">
		<div id="loader">
			<div class="spinner"></div>
		</div>
	</main>
	
	<!-- 调试按钮 -->
	<div style="margin-top: 2rem; text-align: center;">
		<button id="debug-btn" style="padding: 0.5rem 1rem; background-color: var(--primary-color); color: white; border: none; border-radius: var(--border-radius-base); cursor: pointer;">Show Debug Info</button>
	</div>
</div>

<script>
	const themeToggleBtn = document.getElementById('theme-toggle-btn');
	const mainContent = document.getElementById('main-content');
	const loader = document.getElementById('loader');

	// --- Theme Logic ---
	const applyTheme = (theme) => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('share-theme', theme);
		themeToggleBtn.innerHTML = theme === 'dark'
			? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.99 4.58zm12.02 12.02c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06zM20 6.01c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.06-1.06z"></path></svg>`
			: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>`;
		document.getElementById('hljs-light-theme').disabled = (theme === 'dark');
		document.getElementById('hljs-dark-theme').disabled = (theme !== 'dark');
	};
	themeToggleBtn.addEventListener('click', () => {
		const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
		applyTheme(newTheme);
	});
	const savedTheme = localStorage.getItem('share-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	applyTheme(savedTheme);

	function formatTimestamp(timestamp) {
		console.log('Formatting timestamp:', timestamp);
		const date = new Date(timestamp);
		if (isNaN(date.getTime())) {
			console.error('Invalid timestamp:', timestamp);
			return 'Invalid date';
		}
		return date.toLocaleString(undefined, {
			year: 'numeric', month: 'short', day: 'numeric',
			hour: 'numeric', minute: '2-digit'
		});
	}

	// 格式化剩余时间为易读格式
	const formatRemainingTime = (seconds) => {
		if (seconds <= 0) return 'Expired';

		const days = Math.floor(seconds / (24 * 3600));
		const hours = Math.floor((seconds % (24 * 3600)) / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = Math.floor(seconds % 60);

		let result = '';
		if (days > 0) result += `${days}d `;
		if (hours > 0) result += `${hours}h `;
		if (minutes > 0) result += `${minutes}m `;
		result += `${secs}s`;

		return result.trim();
	};

	const formatBytes = (b, d = 2) => {
		if (!b || b === 0) return '0 Bytes';
		const k = 1024, s = ['B', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(b) / Math.log(k));
		return parseFloat((b / Math.pow(k, i)).toFixed(d)) + ' ' + s[i];
	};

	const textFileExtensions = ['txt', 'js', 'json', 'py', 'css', 'html', 'md', 'sh', 'java', 'c', 'cpp', 'go', 'rb', 'xml', 'log', 'yaml', 'toml', 'yml'];

	// 配置 Marked.js
	marked.setOptions({
		breaks: true,
		gfm: true,
		headerIds: false,
		mangle: false
	});

	function renderNote(note) {
	const noteElement = document.createElement('div');
	noteElement.className = 'note';
	noteElement.dataset.publicId = note.shareInfo.publicId;

	const time = formatTimestamp(note.updatedAt);

	// 添加分享剩余时间显示
	let shareInfoHtml = '';
	if (note.shareInfo && note.shareInfo.isShared) {
		if (note.shareInfo.remainingSeconds > 0) {
			const remainingTime = formatRemainingTime(note.shareInfo.remainingSeconds);
			shareInfoHtml = ` ·&nbsp;<span class="note-share-indicator" title="Shared link expires in ${remainingTime}">${remainingTime}</span>`;
		} else {
			shareInfoHtml = ` ·&nbsp;<span class="note-share-indicator" title="Shared link never expires">Shared</span>`;
		}
	}

	let attachmentsHTML = '';
	const files = note.files || [];
	if (files.length > 0) {
		attachmentsHTML += '<div class="attachments-grid">';
		files.forEach(file => {
			// 后端现在会返回一个完整的、可直接使用的 public_url
			if (file.public_url) {
				if (file.type?.startsWith('image/')) {
					// 对于图片，使用图片格式展示
					attachmentsHTML += `<div class="attachment-img">
						<img class="note-image-attachment" loading="lazy" src="${file.public_url}" alt="${file.name}" style="cursor: zoom-in;">
					</div>`;
				} else {
					// 对于普通文件，使用文件链接格式展示
					attachmentsHTML += `<a href="${file.public_url}" class="attachment-link" download="${file.name}">
						<span class="file-name">${file.name}</span>
						<span class="file-size">${formatBytes(file.size)}</span>
					</a>`;
				}
			}
		});
		attachmentsHTML += '</div>';
	}

	// 限制内容长度，只显示摘要
	let content = note.content;
	if (content.length > 300) {
		content = content.substring(0, 300) + '...';
	}

	// 使用与 index.html 相同的 HTML 结构
	noteElement.innerHTML = `
		<div class="note-header">
			<div class="note-meta">
				<span title="${new Date(note.updatedAt).toISOString()}">${time}</span>
				${shareInfoHtml}
			</div>
			<div class="note-actions view-mode">
				<!-- 可以添加额外的操作按钮 -->
			</div>
		</div>
		<div class="note-content">${marked.parse(content)}</div>
		${attachmentsHTML}
	`;

	// 添加点击事件，跳转到完整的分享页面
	noteElement.addEventListener('click', () => {
		window.location.href = `/share/${note.shareInfo.publicId}`;
	});

	return noteElement;
}

	async function loadSharedNotes() {
		try {
			const apiUrl = '/api/public/shared-notes';
			console.log('Fetching shared notes from:', apiUrl);
			const response = await fetch(apiUrl);
			console.log('API Response Status:', response.status, response.statusText);
			
			if (!response.ok) {
				const err = await response.json();
				throw new Error(err.error || `Failed to load shared notes (status: ${response.status})`);
			}
			
			const data = await response.json();
			console.log('API Response Data:', data);
			const notes = data.notes || [];
			console.log('Parsed Notes:', notes);
			console.log('Notes count:', notes.length);

			loader.style.display = 'none';

			if (notes.length === 0) {
				const emptyElement = document.createElement('div');
				emptyElement.className = 'empty-state';
				emptyElement.innerHTML = `<p>No shared notes found.</p>`;
				mainContent.appendChild(emptyElement);
				return;
			}

			const notesList = document.createElement('div');
			notesList.className = 'notes-list';
			console.log('Creating note elements...');

			notes.forEach((note, index) => {
				console.log(`Rendering note ${index + 1}:`, note.content.substring(0, 50));
				const noteElement = renderNote(note);
				notesList.appendChild(noteElement);
			});

			console.log('Appending notes to main content...');
			mainContent.appendChild(notesList);
			console.log('Notes rendered successfully!');

		} catch (error) {
			console.error('Load Shared Notes Error:', error);
			loader.innerHTML = `<p style="color: #e53e3e;">Error: ${error.message}</p><p style="font-size: 0.8rem; color: var(--text-secondary);">Please check the console for more details.</p>`;
		}
	}

	loadSharedNotes();
	
	// 调试按钮点击事件
	const debugBtn = document.getElementById('debug-btn');
	if (debugBtn) {
		debugBtn.addEventListener('click', async () => {
			try {
				const response = await fetch('/api/public/shared-notes');
				const data = await response.json();
				const debugInfo = document.createElement('div');
				debugInfo.innerHTML = `
					<pre style="background-color: #f0f0f0; padding: 1rem; border-radius: 6px; overflow: auto; max-height: 300px; text-align: left;">
						${JSON.stringify(data, null, 2)}
					</pre>
				`;
				mainContent.appendChild(debugInfo);
			} catch (error) {
				console.error('Debug Error:', error);
				const errorInfo = document.createElement('div');
				errorInfo.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
				mainContent.appendChild(errorInfo);
			}
		});
	}
</script>

</body>
</html>

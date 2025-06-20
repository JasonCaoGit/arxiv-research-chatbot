# 🧠 Arxiv Paper Finder – Powered by MCP Chatbot

Find relevant research papers on [arXiv](https://arxiv.org) by simply chatting with an intelligent MCP-powered assistant.

---

## 🚀 Features

- 🔍 Natural language search for research topics  
- 🤖 Uses Anthropic’s Claude with MCP tool calling  
- 📄 Automatically fetches paper metadata from arXiv  
- 📥 Summarizes papers into a Markdown file  
- 🧩 Supports multiple MCP tool servers (filesystem, fetch, research)  
- ⚙️ Lightweight Python setup using `uv` and `venv`

---

## 🧠 What Can the Chatbot Do?

This chatbot goes beyond simple question-answering. It can:

- Accept natural language requests like “Find papers on transformers”  
- Search [arXiv](https://arxiv.org) for relevant academic papers  
- Extract metadata like title, authors, summary, publication date, and PDF URL  
- Write structured results to a JSON file  
- Summarize selected papers into a readable Markdown file  
- Use multiple tools like `filesystem`, `fetch`, and `research` via the MCP protocol  
- Guide users step-by-step in doing technical tasks or research

---

## 🧪 Try This Prompt

Paste this into the chatbot:

```
I want you to go to cognitivaclass.ai and find an interesting term, and then fetch a term that you feel interesting, use that term as topic to go find arxiv paper and then summarize the paper and write it a file called summary.md

I'll help you with this task. First, let's go to cognitiveclass.ai to find an interesting term, then use that term to search for a paper on arXiv, and finally create a summary file.
```

💡 The chatbot will:
1. Use the **`fetch`** server to scrape or retrieve content from the web  
2. Use the **`research`** server to find relevant papers on arXiv  
3. Use the **`filesystem`** server to save the result into `summary.md`

---

## 🛠️ Setup Instructions

### 1. Make sure you have [`uv`](https://github.com/astral-sh/uv) installed

If you don’t have it yet:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 2. Initialize your virtual environment
```bash
uv init
source .venv/bin/activate
```

### 3. Add your Anthropic API key
Create a file called `.env` in the root of your project:
```env
ANTHROPIC_API_KEY=your-api-key-here
```

### 4. Install dependencies
```bash
uv add anthropic python-dotenv nest_asyncio
```

---

## 💬 Run the Chatbot
```bash
uv run mcp_chatbot.py
```

Then start chatting with prompts like:
- "Find recent papers on diffusion models"
- "Show me the latest in reinforcement learning and robotics"
- "Summarize a paper about quantum machine learning into summary.md"
- "I want you to visit https://cognitiveclass.ai and browse for an interesting topic or keyword that catches your attention.
Once you've chosen a term, use it as a search topic to find a relevant research paper on arXiv.
Then, read and summarize that paper in your own words. Save the summary to a Markdown file called `summary.md`."

---

## 🧠 MCP Tool Servers

Your project supports multiple MCP tool servers defined in your config:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    },
    "research": {
      "command": "uv",
      "args": ["run", "research_server.py"]
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}
```

- `filesystem`: Allows reading/writing local files via MCP  
- `research`: Runs your custom arXiv search server  
- `fetch`: Retrieves content from URLs or websites (e.g. cognitiveclass.ai)

These servers are launched by the MCP runtime and handled through the chatbot using structured tool calls.

---

## 📚 Dependencies

- [anthropic](https://pypi.org/project/anthropic/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)
- [nest_asyncio](https://pypi.org/project/nest_asyncio/)
- [uv](https://github.com/astral-sh/uv)

---

## 📄 License

MIT License – Free to use for personal, research, and educational purposes.
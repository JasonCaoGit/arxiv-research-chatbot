# 🧠 Arxiv Paper Finder – Powered by MCP Chatbot

Find relevant research papers on [arXiv](https://arxiv.org) by simply chatting with an intelligent MCP-powered assistant.

---

## 🚀 Features

- 🔍 Natural language search for research topics  
- 🤖 Uses Anthropic’s Claude with MCP tool calling  
- 📄 Automatically fetches paper metadata from arXiv  
- ⚙️ Lightweight Python setup using `uv` and `venv`  

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

Then just type in natural language prompts like:
- "Find recent papers on diffusion models"
- "Show me the latest in reinforcement learning and robotics"

---

## 🧪 MCP Tool Server

This chatbot uses a tool server implemented using [MCP](https://github.com/multi-agent-control-protocol/mcp).  
If you're using `stdio`, the tool server will automatically start as a subprocess.

Make sure your server file (e.g. `example_server.py`) is implemented and registered with tools like `search_papers`.

---

## 📚 Dependencies

- [anthropic](https://pypi.org/project/anthropic/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)
- [nest_asyncio](https://pypi.org/project/nest_asyncio/)
- [uv](https://github.com/astral-sh/uv)

---

## 📄 License

MIT License – Free to use for personal, research, and educational purposes.
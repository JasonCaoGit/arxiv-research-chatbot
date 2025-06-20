#!/usr/bin/env python3
"""
Startup script for Render deployment.
This ensures the server binds to 0.0.0.0 for external access.
"""

import os
import uvicorn
from remote_server import mcp

if __name__ == "__main__":
    # Get port from environment variable (Render sets this)
    port = int(os.environ.get("PORT", 8001))
    
    # Run the FastMCP server with proper host binding
    # This allows Render to access the server from the internet
    mcp.run(transport='streamable-http', host="0.0.0.0", port=port) 
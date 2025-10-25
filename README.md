# WP-CC CLI

WordPress Development CLI Tool with natural language interface - standalone version of wp-cc-mcp.

## Features

- 🗣️ **Natural Language Interface**: Use everyday language to execute WordPress development tasks
- 🐳 **Docker Management**: Start, stop, and manage WordPress containers
- 📁 **Project Lifecycle**: Create, manage, and delete WordPress projects
- 🔍 **Research & Content**: Research topics and generate content automatically
- 🧪 **Testing Suite**: Test links, SEO, and comprehensive site testing
- 🚀 **Deployment**: Deploy to SiteGround with a single command
- ⚙️ **WordPress Operations**: Install themes, plugins, and manage WordPress via CLI

## Installation

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/codeverlan/wp-cc-cli.git
cd wp-cc-cli

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Edit .env with your configuration
nano .env

# Make CLI executable
npm run prepare

# Install globally (optional)
npm link
```

## Usage

### Natural Language Commands

```bash
# Project Management
wp-cc create project called my-blog on port 8080
wp-cc list projects
wp-cc start the project called my-blog
wp-cc stop my-blog containers
wp-cc delete project called old-site

# Docker Operations
wp-cc start containers for my-website
wp-cc restart containers
wp-cc show logs for my-blog

# Research & Content
wp-cc research topic "best coffee shops in seattle"
wp-cc generate content from research for my-blog

# Testing
wp-cc test all links on my-website
wp-ck test seo for my-blog
wp-cc run comprehensive tests for my-site

# Deployment
wp-cc deploy my-blog to production
wp-cc deploy my-site to siteground

# WordPress Operations
wp-cc install theme "generatepress" for my-blog
wp-cc install plugin "yoast-seo" for my-website

# Database Operations
wp-cc dump database for my-blog
wp-cc import database for my-website

# Git Operations
wp-cc git status for my-blog
wp-cc git commit "Added new features" for my-website
```

### Help

```bash
# Show general help
wp-cc help

# Show version
wp-cc version

# Show examples
wp-cc
```

## Configuration

Edit `.env` file with your settings:

```env
# Project directory
WP_PROJECTS_DIR=/Users/yourname/projects/wp-projects

# API keys (optional but recommended)
JINA_API_KEY=your_jina_api_key
UNSPLASH_API_KEY=your_unsplash_api_key

# SiteGround deployment (optional)
SITEGROUND_SERVER=your.server.siteground.biz
SITEGROUND_USERNAME=your_username
SITEGROUND_PATH=/www/your-site.com
```

## Architecture

- **24 Manager Classes**: Core functionality ported from wp-cc-mcp
- **Natural Language Parser**: Converts commands to manager method calls
- **55+ Tools**: Complete WordPress development lifecycle
- **Modular Design**: Easy to extend and customize

## Available Tools

### Project Management (4 tools)
- `create project` - Create new WordPress project
- `list projects` - List all projects
- `start project` - Start project containers
- `delete project` - Delete project

### Docker Management (4 tools)
- `start containers` - Start Docker containers
- `stop containers` - Stop Docker containers
- `restart containers` - Restart containers
- `show logs` - Display container logs

### Research & Content (8 tools)
- `research topic` - Exhaustive topic research
- `generate content` - Generate content from research
- `find images` - Download images from Unsplash
- And more...

### Testing (6 tools)
- `test links` - Test all site links
- `test seo` - SEO validation
- `test comprehensive` - Full test suite
- And more...

### Deployment (6 tools)
- `deploy to production` - Deploy to SiteGround
- `sync from production` - Pull from production
- `clear cache` - Clear SiteGround cache

### WordPress Operations (15+ tools)
- `install theme` - Install WordPress themes
- `install plugin` - Install plugins
- WP-CLI operations
- REST API operations

### Database Operations (4 tools)
- `dump database` - Export database
- `import database` - Import database
- `diff database` - Generate migration scripts
- `reset database` - Reset from migrations

### Git Operations (4 tools)
- `git status` - Check git status
- `git commit` - Commit changes
- `git push` - Push to remote
- `git pull` - Pull from remote

## Development

```bash
# Run in development mode
npm run dev

# Run tests
npm test

# Lint code
npm run lint

# Fix linting
npm run lint:fix
```

## Comparison with wp-cc-mcp

| Feature | wp-cc-mcp | wp-cc-cli |
|---------|-----------|-----------|
| Context Usage | High (in Claude Code) | None (standalone) |
| Interface | MCP protocol | Natural language CLI |
| Performance | Good | Better (direct execution) |
| Portability | Requires Claude Code | Works anywhere |
| Setup | Complex (MCP server) | Simple (npm install) |

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Submit pull request

## License

MIT License - see LICENSE file for details.

## Support

- Create issues on GitHub
- Check documentation in `/docs`
- Join our Discord community
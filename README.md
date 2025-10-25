# 🚀 WP-CC CLI

<div align="center">

![WP-CC CLI Logo](https://img.shields.io/badge/WP--CC-CLI-blue?style=for-the-badge&logo=wordpress)

**WordPress Development CLI Tool with Natural Language Interface**

*Standalone version of wp-cc-mcp - complete WordPress development lifecycle in your terminal*

[![npm version](https://badge.fury.io/js/wp-cc-cli.svg)](https://badge.fury.io/js/wp-cc-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/docker-%3E%3D20.0.0-blue.svg)](https://www.docker.com/)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- 🗣️ **Natural Language Interface** - Use everyday language to execute WordPress development tasks
- 🐳 **Docker Management** - Start, stop, and manage WordPress containers with ease
- 📁 **Project Lifecycle** - Create, manage, and delete WordPress projects automatically
- 🔍 **Research & Content** - Research topics and generate content using AI (Jina AI)
- 🧪 **Testing Suite** - Comprehensive testing for links, SEO, and site functionality
- 🚀 **Deployment** - One-click deployment to SiteGround and other hosts
- ⚙️ **WordPress Operations** - Complete WordPress management via CLI
- 📊 **Database Management** - Database dump, import, diff, and reset operations
- 🔀 **Git Integration** - Seamless Git workflow automation
- 🎨 **Beautiful Output** - Colored terminal output with progress bars and tables

## 🚀 Installation

### Prerequisites

- **Node.js** 18+ [Download](https://nodejs.org/)
- **Docker** & **Docker Compose** [Download](https://www.docker.com/products/docker-desktop/)
- **Git** [Download](https://git-scm.com/)

### Quick Install

```bash
# Clone the repository
git clone https://github.com/codeverlan/wp-cc-cli.git
cd wp-cc-cli

# Run the installation script
./install.sh
```

### Manual Install

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

### 🐳 Docker Install (Alternative)

```bash
# Pull the Docker image (when available)
docker pull wp-cc-cli:latest

# Run the CLI via Docker
docker run -it --rm -v $(pwd):/app wp-cc-cli "create project called my-blog"
```

### ⚡ Verify Installation

```bash
# Check version
wp-cc version

# Show help
wp-cc help

# Test natural language processing
wp-cc "list projects"
```

## 📖 Usage

### 🗣️ Natural Language Commands

WP-CC CLI understands natural language commands. Just describe what you want to do!

#### 📁 Project Management

```bash
# Create new projects
wp-cc "create project called my-blog on port 8080"
wp-cc "create a new WordPress project called portfolio on port 3000"

# List and manage projects
wp-cc "list all projects"
wp-cc "show me all WordPress projects"
wp-cc "start the project called my-blog"
wp-cc "stop containers for my-website"
wp-cc "restart the portfolio project"
wp-cc "delete project called old-site"
```

#### 🐳 Docker Operations

```bash
# Container management
wp-cc "start containers for my-website"
wp-cc "stop the docker containers"
wp-cc "restart all containers"
wp-cc "show logs for my-blog"
wp-cc "check container status"
```

#### 🔍 Research & Content Generation

```bash
# Research topics
wp-cc "research topic 'best coffee shops in seattle'"
wp-cc "research 'artificial intelligence in healthcare'"
wp-cc "find information about 'sustainable fashion trends'"

# Generate content
wp-cc "generate content from research for my-blog"
wp-cc "create blog posts about coffee shops"
wp-cc "write articles about AI in healthcare"
```

#### 🧪 Testing Suite

```bash
# Link testing
wp-cc "test all links on my-website"
wp-cc "check for broken links on my-blog"
wp-cc "validate all internal and external links"

# SEO testing
wp-cc "test seo for my-blog"
wp-cc "check SEO optimization for my-website"
wp-cc "validate meta tags and descriptions"

# Comprehensive testing
wp-cc "run comprehensive tests for my-site"
wp-cc "execute full test suite"
wp-cc "test everything on my-blog"
```

#### 🚀 Deployment

```bash
# Deploy to production
wp-cc "deploy my-blog to production"
wp-cc "deploy my-site to siteground production"
wp-cc "push my-website to live server"

# Deployment management
wp-cc "sync from production"
wp-cc "clear cache on production"
```

#### ⚙️ WordPress Operations

```bash
# Theme management
wp-cc "install theme 'generatepress' for my-blog"
wp-cc "activate the astra theme on my-website"
wp-cc "switch to twenty twenty-four theme"

# Plugin management
wp-cc "install plugin 'yoast-seo' for my-website"
wp-cc "activate contact form 7 plugin"
wp-cc "update all plugins on my-blog"

# WordPress configuration
wp-cc "configure WordPress settings for my-blog"
wp-cc "set up permalinks"
wp-cc "configure WordPress security"
```

#### 📊 Database Operations

```bash
# Database management
wp-cc "dump database for my-blog"
wp-cc "export database from my-website"
wp-cc "import database to my-site"
wp-cc "create database backup"
wp-cc "reset database to clean state"
```

#### 🔀 Git Operations

```bash
# Git workflow
wp-cc "git status for my-blog"
wp-cc "git commit 'Added new blog posts' for my-website"
wp-cc "git push changes for my-blog"
wp-cc "git pull latest changes"
```

### 🎯 Command Patterns

The CLI understands various command patterns:

| Pattern | Example |
|---------|---------|
| `create project called [name]` | `wp-cc "create project called my-blog"` |
| `start containers for [project]` | `wp-cc "start containers for my-blog"` |
| `research topic "[topic]"` | `wp-cc "research topic 'coffee shops'"` |
| `test all links on [project]` | `wp-cc "test all links on my-website"` |
| `deploy [project] to production` | `wp-cc "deploy my-blog to production"` |

### 📋 Help Commands

```bash
# Show general help
wp-cc help

# Show version information
wp-cc version

# Show available examples
wp-cc

# Show detailed help with all commands
wp-cc help detailed
```

### ⚡ Pro Tips

1. **Use quotes for multi-word topics**: `wp-cc "research topic 'best coffee shops'"`
2. **Be specific with project names**: `wp-cc "start containers for my-website"`
3. **Combine operations**: `wp-cc "create project called blog and start containers"`
4. **Use natural language**: `wp-cc "I want to test all the links on my website"`

## ⚙️ Configuration

### Environment Setup

Copy the example environment file and configure your settings:

```bash
cp .env.example .env
nano .env
```

### 📝 Environment Variables

```env
# WordPress Projects Directory
WP_PROJECTS_DIR=/Users/yourname/projects/wp-projects

# Database Configuration
DATABASE_PATH=./data/wp-cli.db

# API Keys (recommended for full functionality)
JINA_API_KEY=your_jina_api_key_here
UNSPLASH_API_KEY=your_unsplash_api_key_here

# SiteGround Deployment (optional)
SITEGROUND_SERVER=your.server.siteground.biz
SITEGROUND_USERNAME=your_username
SITEGROUND_PATH=/www/your-site.com
SITEGROUND_URL=https://your-site.com

# Docker Configuration
DOCKER_TIMEOUT=120000
DOCKER_COMPOSE_COMMAND=docker-compose

# Logging Configuration
LOG_LEVEL=info
LOG_FILE=./logs/wp-cli.log

# CLI Configuration
CLI_DEFAULT_PORT=8080
CLI_OUTPUT_FORMAT=table
```

### 🔑 Getting API Keys

#### Jina AI API Key (Recommended)
1. Visit [Jina AI](https://jina.ai/)
2. Sign up for an account
3. Navigate to API settings
4. Copy your API key to `.env`

#### Unsplash API Key (Optional)
1. Visit [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application
3. Copy your Access Key to `.env`

### 🐳 Docker Configuration

The CLI uses Docker for WordPress project isolation. Ensure Docker is running:

```bash
# Check Docker status
docker --version
docker-compose --version

# Test Docker
docker run hello-world
```

## 🏗️ Architecture

### System Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Natural       │    │   Command        │    │   Manager       │
│   Language       │───▶│   Router         │───▶│   Classes       │
│   Input          │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                       │
                                              ┌────────▼────────┐
                                              │   WordPress     │
                                              │   Docker        │
                                              │   Environment   │
                                              └─────────────────┘
```

### Core Components

- **🧠 Natural Language Parser**: Regex-based pattern matching for command understanding
- **📋 Command Router**: Routes parsed commands to appropriate manager classes
- **🏢 Manager Classes**: 24 specialized managers for different WordPress operations
- **🐳 Docker Integration**: Manages WordPress containers automatically
- **📊 Database Layer**: SQLite for project state management
- **🎨 Output Formatter**: Beautiful CLI output with colors and tables

### Manager Architecture

| Manager | Responsibility | Tools |
|---------|----------------|-------|
| `ProjectManager` | Project lifecycle management | 4 tools |
| `DockerManager` | Container orchestration | 4 tools |
| `ResearchManager` | Content research & generation | 8 tools |
| `TestingManager` | Site testing & validation | 6 tools |
| `WordPressManager` | WordPress core operations | 6 tools |
| `DatabaseManager` | Database operations | 4 tools |
| `GitManager` | Version control | 4 tools |
| `SiteGroundManager` | Deployment automation | 4 tools |
| `WPCLIManager` | WP-CLI integration | 8 tools |
| `WPRestManager` | REST API operations | 7 tools |

## 🛠️ Available Tools

### 📁 Project Management (4 tools)
- **`create project`** - Create new WordPress project with Docker setup
- **`list projects`** - Display all WordPress projects with status
- **`start project`** - Start all containers for a project
- **`delete project`** - Remove project and all associated data

### 🐳 Docker Management (4 tools)
- **`start containers`** - Start Docker containers for project
- **`stop containers`** - Stop running containers
- **`restart containers`** - Restart containers with latest changes
- **`show logs`** - Display container logs in real-time

### 🔍 Research & Content (8 tools)
- **`research topic`** - Exhaustive topic research using Jina AI
- **`research exhaustive`** - Deep research with citations and sources
- **`generate content`** - Generate blog posts from research data
- **`find images`** - Download relevant images from Unsplash
- **`scrape site`** - Extract content from websites
- **`validate research`** - Verify research data completeness
- **`create SEO pages`** - Generate SEO-optimized pages
- **`import JSON data`** - Import structured data into WordPress

### 🧪 Testing Suite (6 tools)
- **`test links`** - Comprehensive link validation (no 404s policy)
- **`test SEO`** - SEO optimization validation
- **`test comprehensive`** - Full test suite execution
- **`test performance`** - Site performance testing
- **`test security`** - Security vulnerability scanning
- **`generate test report`** - Create detailed test documentation

### 🚀 Deployment (6 tools)
- **`deploy to production`** - Deploy to SiteGround via Git
- **`sync from production`** - Pull changes from production
- **`clear cache`** - Clear SiteGround cache
- **`get deployment info`** - Check deployment status
- **`prepare deployment`** - Pre-deployment validation
- **`rollback deployment`** - Rollback to previous version

### ⚙️ WordPress Operations (15+ tools)
- **`install theme`** - Install and activate WordPress themes
- **`install plugin`** - Install and configure plugins
- **`configure WordPress`** - Set up WordPress settings
- **`manage users`** - User management operations
- **`manage posts`** - Post and page management
- **`manage media`** - Media library operations
- **`WP-CLI operations`** - Direct WP-CLI command execution
- **`REST API operations`** - WordPress REST API integration

### 📊 Database Operations (4 tools)
- **`dump database`** - Export database with migration tracking
- **`import database`** - Import SQL database files
- **`diff database`** - Generate migration scripts
- **`reset database`** - Reset database to clean state

### 🔀 Git Operations (4 tools)
- **`git status`** - Check Git repository status
- **`git commit`** - Commit changes with proper formatting
- **`git push`** - Push changes to remote repository
- **`git pull`** - Pull latest changes from remote

## 🧰 Development

### Getting Started

```bash
# Clone the repository
git clone https://github.com/codeverlan/wp-cc-cli.git
cd wp-cc-cli

# Install dependencies
npm install

# Set up development environment
cp .env.example .env
# Edit .env with your development settings

# Run in development mode
npm run dev

# Run tests
npm test

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### 🏗️ Project Structure

```
wp-cc-cli/
├── bin/
│   └── wp-cc                    # Main CLI executable
├── src/
│   ├── index.js                # Main CLI interface
│   ├── managers/               # 24 manager classes
│   │   ├── docker-manager.js
│   │   ├── project-manager.js
│   │   ├── research-manager.js
│   │   └── ... (21 more)
│   └── utils/                  # Utility functions
├── tests/                      # Test files
├── docs/                       # Documentation
├── .env.example                # Environment template
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

### 🔧 Adding New Commands

1. **Add Pattern to Command Router** (`src/index.js`):

```javascript
'my new command': {
  pattern: /my new command (.+)/i,
  handler: this.handleMyNewCommand.bind(this)
}
```

2. **Implement Handler Method**:

```javascript
async handleMyNewCommand(match, commandText) {
  const parameter = match[1];
  // Your implementation here
  return { success: true, message: 'Command executed' };
}
```

3. **Add Tests**:

```javascript
// tests/my-new-command.test.js
import { WPCli } from '../src/index.js';

test('my new command', async () => {
  const cli = new WPCli();
  const result = await cli.executeCommand('my new command test');
  expect(result.success).toBe(true);
});
```

### 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- my-new-command.test.js
```

### 📊 Code Quality

```bash
# Check code style
npm run lint

# Fix code style automatically
npm run lint:fix

# Check for security vulnerabilities
npm audit

# Fix security issues
npm audit fix
```

## 📈 Comparison: wp-cc-mcp vs wp-cc-cli

| Feature | wp-cc-mcp | wp-cc-cli |
|---------|-----------|-----------|
| **Context Usage** | High (in Claude Code) | ✅ None (standalone) |
| **Interface** | MCP protocol | ✅ Natural language CLI |
| **Performance** | Good | ✅ Better (direct execution) |
| **Portability** | Requires Claude Code | ✅ Works anywhere |
| **Setup** | Complex (MCP server) | ✅ Simple (npm install) |
| **Dependencies** | MCP SDK | ✅ Standard CLI tools |
| **Learning Curve** | High | ✅ Low (natural language) |
| **Resource Usage** | Higher | ✅ Lower |
| **Debugging** | Complex | ✅ Standard CLI debugging |

## 🤝 Contributing

We welcome contributions! Please follow our contributing guidelines.

### 📋 How to Contribute

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/yourusername/wp-cc-cli.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation

4. **Run the test suite**
   ```bash
   npm test
   npm run lint
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Create a Pull Request**
   - Provide a clear description of changes
   - Link any relevant issues
   - Ensure CI passes

### 📝 Coding Standards

- Use **ES6+** syntax with **ES modules**
- Follow **Prettier** code formatting
- Write **JSDoc** comments for functions
- Add **tests** for new functionality
- Keep **commit messages** conventional

### 🐛 Bug Reports

When reporting bugs, please include:

- **CLI version**: `wp-cc version`
- **Node.js version**: `node --version`
- **Operating system**: `uname -a`
- **Command used**: Full command that failed
- **Error message**: Complete error output
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 📜 License Summary

✅ **Commercial use** - You can use this in commercial projects
✅ **Modification** - You can modify the code
✅ **Distribution** - You can distribute your modifications
✅ **Private use** - You can use privately
❌ **Liability** - No warranty provided
❌ **Trademark** - Cannot use the trademark

## 🆘 Support

### 📚 Getting Help

- **📖 Documentation**: Check this README and `/docs` folder
- **🐛 Issues**: [Create an issue on GitHub](https://github.com/codeverlan/wp-cc-cli/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/codeverlan/wp-cc-cli/discussions)
- **📧 Email**: support@wp-cc-cli.com (for commercial support)

### 🎯 Troubleshooting

#### Common Issues

**Problem:** `wp-cc: command not found`
```bash
# Solution: Install globally or use npx
npm link
# or
npx wp-cc "your command"
```

**Problem:** Docker not working
```bash
# Check Docker status
docker --version
docker info
# Start Docker Desktop if needed
```

**Problem:** Permission denied
```bash
# Check file permissions
ls -la bin/wp-cc
# Make executable
chmod +x bin/wp-cc
```

**Problem:** API key errors
```bash
# Check .env file
cat .env
# Verify API keys are correct
```

### 📊 Performance Tips

1. **Use specific project names** - Faster command parsing
2. **Keep Docker updated** - Better container performance
3. **Regular database cleanup** - Prevents bloat
4. **Monitor resource usage** - Avoid system overload

### 🚀 Roadmap

- [ ] **Plugin System** - Extensible plugin architecture
- [ ] **Web Interface** - Optional web dashboard
- [ ] **Multi-cloud Support** - AWS, DigitalOcean deployment
- [ ] **Advanced AI Features** - More sophisticated content generation
- [ ] **Team Collaboration** - Multi-user project management
- [ ] **Performance Monitoring** - Built-in analytics dashboard

---

<div align="center">

**⭐ Star this repository if it helps you!**

Made with ❤️ by the [WP-CC CLI Team](https://github.com/codeverlan/wp-cc-cli)

[![Twitter](https://img.shields.io/twitter/follow/wpcccli?style=social)](https://twitter.com/wpcccli)
[![GitHub stars](https://img.shields.io/github/stars/codeverlan/wp-cc-cli?style=social)](https://github.com/codeverlan/wp-cc-cli)

</div>